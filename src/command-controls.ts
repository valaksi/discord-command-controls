import { commandCatalog, commandPolicyTargets } from "./command-catalog.js";

export interface CommandPolicy {
  enabled: boolean;
  allowedRoleIds: string[];
  deniedRoleIds: string[];
  allowedChannelIds: string[];
  deniedChannelIds: string[];
}

export type CommandControlMap = Record<string, boolean>;
export type CommandPolicyMap = Record<string, CommandPolicy>;

function asRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return value as Record<string, unknown>;
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === "string") : [];
}

export function buildDefaultCommandPolicy(): CommandPolicy {
  return {
    enabled: true,
    allowedRoleIds: [],
    deniedRoleIds: [],
    allowedChannelIds: [],
    deniedChannelIds: []
  };
}

export function filterSupportedCommandControls(commandControls: CommandControlMap | null | undefined): CommandControlMap {
  const current = commandControls ?? {};

  return commandCatalog.reduce<CommandControlMap>((controls, command) => {
    controls[command.name] = typeof current[command.name] === "boolean" ? current[command.name] : true;
    return controls;
  }, {});
}

export function filterSupportedCommandPolicies(commandPolicies: CommandPolicyMap | null | undefined): CommandPolicyMap {
  const current = commandPolicies ?? {};

  return commandPolicyTargets.reduce<CommandPolicyMap>((policies, target) => {
    const candidate = asRecord(current[target.key]);
    policies[target.key] = {
      enabled: typeof candidate.enabled === "boolean" ? candidate.enabled : true,
      allowedRoleIds: asStringArray(candidate.allowedRoleIds),
      deniedRoleIds: asStringArray(candidate.deniedRoleIds),
      allowedChannelIds: asStringArray(candidate.allowedChannelIds),
      deniedChannelIds: asStringArray(candidate.deniedChannelIds)
    };
    return policies;
  }, {});
}

export function getCommandPolicy(commandPolicies: CommandPolicyMap, targetKey: string): CommandPolicy {
  const supported = filterSupportedCommandPolicies(commandPolicies);
  return supported[targetKey] ?? buildDefaultCommandPolicy();
}

export function resolveCommandPoliciesFromDashboardConfig(dashboardConfig: unknown): CommandPolicyMap {
  const config = asRecord(dashboardConfig);
  const controls = filterSupportedCommandControls(asRecord(config.commandControls) as CommandControlMap);
  const currentPolicies = filterSupportedCommandPolicies(asRecord(config.commandPolicies) as CommandPolicyMap);

  return Object.fromEntries(
    Object.entries(currentPolicies).map(([targetKey, policy]) => [
      targetKey,
      {
        ...policy,
        enabled: targetKey.includes(".") ? policy.enabled : (controls[targetKey] ?? policy.enabled)
      }
    ])
  );
}

export function resolveCommandControlsFromDashboardConfig(dashboardConfig: unknown): CommandControlMap {
  const policies = resolveCommandPoliciesFromDashboardConfig(dashboardConfig);

  return Object.fromEntries(commandCatalog.map((command) => [command.name, policies[command.name]?.enabled ?? true]));
}

export function writeCommandPoliciesToDashboardConfig(dashboardConfig: unknown, commandPolicies: CommandPolicyMap) {
  const config = asRecord(dashboardConfig);
  const supportedPolicies = filterSupportedCommandPolicies(commandPolicies);
  const commandControls = Object.fromEntries(commandCatalog.map((command) => [command.name, supportedPolicies[command.name]?.enabled ?? true]));

  return {
    ...config,
    commandControls,
    commandPolicies: supportedPolicies
  };
}

export function writeCommandControlsToDashboardConfig(dashboardConfig: unknown, commandControls: CommandControlMap) {
  const currentPolicies = resolveCommandPoliciesFromDashboardConfig(dashboardConfig);

  const nextPolicies = Object.fromEntries(
    Object.entries(currentPolicies).map(([targetKey, policy]) => [
      targetKey,
      {
        ...policy,
        enabled: targetKey.includes(".") ? policy.enabled : (filterSupportedCommandControls(commandControls)[targetKey] ?? policy.enabled)
      }
    ])
  );

  return writeCommandPoliciesToDashboardConfig(dashboardConfig, nextPolicies);
}

export function isCommandEnabled(commandControls: CommandControlMap, commandName: string) {
  return filterSupportedCommandControls(commandControls)[commandName] ?? true;
}

export function evaluateCommandPolicy(
  commandPolicy: CommandPolicy,
  context: {
    channelId: string | null;
    roleIds: string[];
  }
) {
  if (!commandPolicy.enabled) {
    return {
      allowed: false,
      reason: "disabled"
    } as const;
  }

  if (context.channelId && commandPolicy.deniedChannelIds.includes(context.channelId)) {
    return {
      allowed: false,
      reason: "channel_denied"
    } as const;
  }

  if (commandPolicy.deniedRoleIds.some((roleId) => context.roleIds.includes(roleId))) {
    return {
      allowed: false,
      reason: "role_denied"
    } as const;
  }

  if (commandPolicy.allowedChannelIds.length > 0 && (!context.channelId || !commandPolicy.allowedChannelIds.includes(context.channelId))) {
    return {
      allowed: false,
      reason: "channel_not_allowed"
    } as const;
  }

  if (commandPolicy.allowedRoleIds.length > 0 && !commandPolicy.allowedRoleIds.some((roleId) => context.roleIds.includes(roleId))) {
    return {
      allowed: false,
      reason: "role_not_allowed"
    } as const;
  }

  return {
    allowed: true,
    reason: "allowed"
  } as const;
}

