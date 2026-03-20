export const VIRTUAL_PERMISSION_KEYS = [
  "moderation.warn",
  "moderation.timeout",
  "moderation.jail",
  "moderation.kick",
  "moderation.ban",
  "moderation.tempban",
  "moderation.softban",
  "moderation.hardban",
  "moderation.unban",
  "moderation.purge",
  "moderation.slowmode",
  "growth.manage",
  "suggestions.manage",
  "starboard.manage",
  "giveaways.manage",
  "sticky.manage",
  "stats.manage",
  "avatars.manage",
  "commands.manage",
  "logging.manage",
  "webhooks.manage",
  "embeds.manage",
  "tickets.manage",
  "voice.manage",
  "automod.manage",
  "social.manage",
  "branding.manage",
  "security.manage",
  "security.lockdown",
  "dashboard.manage"
] as const;

export type VirtualPermissionKey = (typeof VIRTUAL_PERMISSION_KEYS)[number];

export const ANTINUKE_ACTION_KEYS = [
  "channel_delete",
  "channel_create",
  "role_delete",
  "role_update",
  "member_ban",
  "member_kick",
  "webhook_create"
] as const;

export type AntinukeActionKey = (typeof ANTINUKE_ACTION_KEYS)[number];

export const LOG_EVENT_KEYS = ["messages", "members", "roles", "channels", "invites", "emojis", "voice"] as const;

export type LogEventKey = (typeof LOG_EVENT_KEYS)[number];

export const LOG_IGNORE_TARGET_TYPES = ["user", "channel"] as const;

export type LogIgnoreTargetType = (typeof LOG_IGNORE_TARGET_TYPES)[number];

export function buildDefaultAntinukeRules() {
  return [
    { actionKey: "channel_delete", thresholdCount: 2, thresholdWindowSeconds: 20, enabled: true },
    { actionKey: "channel_create", thresholdCount: 3, thresholdWindowSeconds: 20, enabled: true },
    { actionKey: "role_delete", thresholdCount: 2, thresholdWindowSeconds: 20, enabled: true },
    { actionKey: "role_update", thresholdCount: 3, thresholdWindowSeconds: 20, enabled: true },
    { actionKey: "member_ban", thresholdCount: 4, thresholdWindowSeconds: 30, enabled: true },
    { actionKey: "member_kick", thresholdCount: 4, thresholdWindowSeconds: 30, enabled: true },
    { actionKey: "webhook_create", thresholdCount: 2, thresholdWindowSeconds: 20, enabled: true }
  ] as const;
}
