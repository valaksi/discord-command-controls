import test from "node:test";
import assert from "node:assert/strict";
import {
  evaluateCommandPolicy,
  filterSupportedCommandControls,
  isCommandEnabled,
  resolveCommandControlsFromDashboardConfig,
  resolveCommandPoliciesFromDashboardConfig,
  writeCommandControlsToDashboardConfig,
  writeCommandPoliciesToDashboardConfig
} from "../src/index.ts";

test("filterSupportedCommandControls defaults unknown commands and keeps catalog commands", () => {
  const controls = filterSupportedCommandControls({
    warn: false,
    imaginary: false
  });

  assert.equal(controls.warn, false);
  assert.equal(controls.ban, true);
  assert.equal("imaginary" in controls, false);
});

test("resolve and write command controls round-trip dashboard config safely", () => {
  const dashboardConfig = {
    someOtherConfig: {
      enabled: true
    },
    commandControls: {
      warn: false
    }
  };

  const resolved = resolveCommandControlsFromDashboardConfig(dashboardConfig);
  assert.equal(resolved.warn, false);
  assert.equal(isCommandEnabled(resolved, "ban"), true);

  const next = writeCommandControlsToDashboardConfig(dashboardConfig, {
    ...resolved,
    ban: false
  }) as unknown as { someOtherConfig: { enabled: boolean }; commandControls: Record<string, boolean> };

  assert.equal(next.someOtherConfig.enabled, true);
  assert.equal(next.commandControls.warn, false);
  assert.equal(next.commandControls.ban, false);
});

test("evaluateCommandPolicy enforces deny and allow lists", () => {
  const policy = resolveCommandPoliciesFromDashboardConfig({
    commandPolicies: {
      ban: {
        enabled: true,
        allowedRoleIds: ["staff"],
        deniedRoleIds: ["muted"],
        allowedChannelIds: ["mod-room"],
        deniedChannelIds: ["general"]
      }
    }
  }).ban;

  assert.equal(
    evaluateCommandPolicy(policy, {
      channelId: "general",
      roleIds: ["staff"]
    }).reason,
    "channel_denied"
  );
  assert.equal(
    evaluateCommandPolicy(policy, {
      channelId: "mod-room",
      roleIds: ["muted", "staff"]
    }).reason,
    "role_denied"
  );
  assert.equal(
    evaluateCommandPolicy(policy, {
      channelId: "mod-room",
      roleIds: []
    }).reason,
    "role_not_allowed"
  );
  assert.equal(
    evaluateCommandPolicy(policy, {
      channelId: "mod-room",
      roleIds: ["staff"]
    }).reason,
    "allowed"
  );
});

test("writeCommandPoliciesToDashboardConfig keeps boolean mirrors for command controls", () => {
  const next = writeCommandPoliciesToDashboardConfig(
    {},
    {
      warn: {
        enabled: false,
        allowedRoleIds: [],
        deniedRoleIds: [],
        allowedChannelIds: [],
        deniedChannelIds: []
      }
    }
  ) as { commandControls: Record<string, boolean>; commandPolicies: Record<string, unknown> };

  assert.equal(next.commandControls.warn, false);
  assert.ok(next.commandPolicies.warn);
});

test("subcommand policies are preserved independently from root command mirrors", () => {
  const next = writeCommandPoliciesToDashboardConfig(
    {},
    {
      spotify: {
        enabled: true,
        allowedRoleIds: [],
        deniedRoleIds: [],
        allowedChannelIds: [],
        deniedChannelIds: []
      },
      "spotify.play": {
        enabled: false,
        allowedRoleIds: ["dj"],
        deniedRoleIds: [],
        allowedChannelIds: ["music-room"],
        deniedChannelIds: []
      }
    }
  ) as { commandControls: Record<string, boolean>; commandPolicies: Record<string, { enabled: boolean; allowedRoleIds: string[]; allowedChannelIds: string[] }> };

  assert.equal(next.commandControls.spotify, true);
  assert.equal(next.commandPolicies["spotify.play"].enabled, false);
  assert.deepEqual(next.commandPolicies["spotify.play"].allowedRoleIds, ["dj"]);
  assert.deepEqual(next.commandPolicies["spotify.play"].allowedChannelIds, ["music-room"]);
});
