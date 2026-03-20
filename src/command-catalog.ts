import type { VirtualPermissionKey } from "./security.js";

export type CommandCategory =
  | "start"
  | "moderation"
  | "tickets"
  | "music"
  | "security"
  | "growth"
  | "roles"
  | "social"
  | "utility"
  | "branding";

export interface CommandCatalogEntry {
  name: string;
  category: CommandCategory;
  summary: string;
  moduleIds: string[];
  permissionKey?: VirtualPermissionKey;
}

export interface CommandPolicyTarget {
  key: string;
  label: string;
  commandName: string;
  summary: string;
}

export const commandCatalog: CommandCatalogEntry[] = [
  { name: "ping", category: "start", summary: "Check if the bot runtime is healthy.", moduleIds: [] },
  { name: "plans", category: "start", summary: "List the configured commercial plans.", moduleIds: [] },
  { name: "help", category: "start", summary: "Ordered command guide by category or command.", moduleIds: [] },
  { name: "prefix", category: "start", summary: "Stored guild and personal prefix preferences.", moduleIds: [] },
  { name: "warn", category: "moderation", summary: "Warn a member and create a moderation case.", moduleIds: ["moderation"], permissionKey: "moderation.warn" },
  { name: "timeout", category: "moderation", summary: "Timeout a member.", moduleIds: ["moderation"], permissionKey: "moderation.timeout" },
  { name: "kick", category: "moderation", summary: "Kick a member.", moduleIds: ["moderation"], permissionKey: "moderation.kick" },
  { name: "ban", category: "moderation", summary: "Ban a member.", moduleIds: ["moderation"], permissionKey: "moderation.ban" },
  { name: "tempban", category: "moderation", summary: "Temporarily ban a member.", moduleIds: ["moderation"], permissionKey: "moderation.tempban" },
  { name: "softban", category: "moderation", summary: "Ban, prune messages, then unban.", moduleIds: ["moderation"], permissionKey: "moderation.softban" },
  { name: "hardban", category: "moderation", summary: "Ban with stronger message cleanup.", moduleIds: ["moderation"], permissionKey: "moderation.hardban" },
  { name: "unban", category: "moderation", summary: "Unban by user ID.", moduleIds: ["moderation"], permissionKey: "moderation.unban" },
  { name: "jail", category: "moderation", summary: "Long timeout / jail action.", moduleIds: ["moderation"], permissionKey: "moderation.jail" },
  { name: "unjail", category: "moderation", summary: "Remove a jail timeout.", moduleIds: ["moderation"], permissionKey: "moderation.jail" },
  { name: "purge", category: "moderation", summary: "Bulk delete recent messages.", moduleIds: ["moderation"], permissionKey: "moderation.purge" },
  { name: "slowmode", category: "moderation", summary: "Set slowmode for a channel.", moduleIds: ["moderation"], permissionKey: "moderation.slowmode" },
  { name: "lockdown", category: "moderation", summary: "Lock a text channel.", moduleIds: ["moderation"], permissionKey: "security.lockdown" },
  { name: "unlockdown", category: "moderation", summary: "Unlock a text channel.", moduleIds: ["moderation"], permissionKey: "security.lockdown" },
  { name: "ticketpanel-post", category: "tickets", summary: "Publish a ticket panel.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-close", category: "tickets", summary: "Close the current ticket.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-delete", category: "tickets", summary: "Delete a closed ticket.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-rename", category: "tickets", summary: "Rename a ticket channel.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-add", category: "tickets", summary: "Add a member to a ticket.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-remove", category: "tickets", summary: "Remove a member from a ticket.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-priority", category: "tickets", summary: "Change ticket priority.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-note", category: "tickets", summary: "Add an internal note.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "ticket-transcript", category: "tickets", summary: "Generate the ticket transcript.", moduleIds: ["tickets"], permissionKey: "tickets.manage" },
  { name: "join", category: "music", summary: "Join your voice channel.", moduleIds: ["music"] },
  { name: "play", category: "music", summary: "Queue and play music.", moduleIds: ["music"] },
  { name: "queue", category: "music", summary: "Show the current queue.", moduleIds: ["music"] },
  { name: "queue-remove", category: "music", summary: "Remove a queue entry.", moduleIds: ["music"] },
  { name: "queue-move", category: "music", summary: "Move a queue entry.", moduleIds: ["music"] },
  { name: "skip", category: "music", summary: "Skip the current track.", moduleIds: ["music"] },
  { name: "stop", category: "music", summary: "Stop playback.", moduleIds: ["music"] },
  { name: "pause", category: "music", summary: "Pause playback.", moduleIds: ["music"] },
  { name: "resume", category: "music", summary: "Resume playback.", moduleIds: ["music"] },
  { name: "seek", category: "music", summary: "Seek inside the current track.", moduleIds: ["music"] },
  { name: "volume", category: "music", summary: "Set playback volume.", moduleIds: ["music"] },
  { name: "repeat", category: "music", summary: "Set repeat mode.", moduleIds: ["music"] },
  { name: "preset", category: "music", summary: "Apply audio presets.", moduleIds: ["music"] },
  { name: "spotify", category: "music", summary: "Spotify-style playback and liked tracks.", moduleIds: ["music"] },
  { name: "leave", category: "music", summary: "Leave voice.", moduleIds: ["music"] },
  { name: "record-start", category: "music", summary: "Start recording a voice channel.", moduleIds: ["music"] },
  { name: "record-stop", category: "music", summary: "Stop recording.", moduleIds: ["music"] },
  {
    name: "security",
    category: "security",
    summary: "Show anti-nuke summary.",
    moduleIds: ["fake-permissions", "anti-nuke", "anti-raid"],
    permissionKey: "security.manage"
  },
  { name: "action-template-run", category: "security", summary: "Run a moderation action template.", moduleIds: ["fake-permissions", "moderation"] },
  { name: "antinuke", category: "security", summary: "Manage anti-nuke admins, whitelist and thresholds.", moduleIds: ["anti-nuke"], permissionKey: "security.manage" },
  { name: "antiraid", category: "security", summary: "Manage anti-raid thresholds and filters.", moduleIds: ["anti-raid"], permissionKey: "security.manage" },
  { name: "raid", category: "security", summary: "Trigger raid lockdown manually.", moduleIds: ["anti-raid"], permissionKey: "security.lockdown" },
  { name: "recentban", category: "security", summary: "Show recent ban actions.", moduleIds: ["anti-nuke", "moderation"], permissionKey: "moderation.ban" },
  { name: "levels", category: "growth", summary: "Manage XP, rewards and sync.", moduleIds: ["levels"], permissionKey: "growth.manage" },
  { name: "rank", category: "growth", summary: "Show rank card for a member.", moduleIds: ["levels"] },
  { name: "leaderboard", category: "growth", summary: "Show XP leaderboard.", moduleIds: ["levels"] },
  { name: "welcome", category: "growth", summary: "Manage welcome messages.", moduleIds: ["welcome"], permissionKey: "growth.manage" },
  { name: "goodbye", category: "growth", summary: "Manage goodbye messages.", moduleIds: ["welcome"], permissionKey: "growth.manage" },
  { name: "boost", category: "growth", summary: "Manage boost announcement messages.", moduleIds: ["welcome", "levels"], permissionKey: "growth.manage" },
  { name: "bumpreminder", category: "growth", summary: "Manage bump reminder settings.", moduleIds: ["welcome"], permissionKey: "growth.manage" },
  { name: "vanity", category: "growth", summary: "Manage vanity status rewards.", moduleIds: ["welcome"], permissionKey: "growth.manage" },
  { name: "boosterrole", category: "growth", summary: "Manage booster roles and rewards.", moduleIds: ["welcome"], permissionKey: "growth.manage" },
  { name: "rolepanel-post", category: "roles", summary: "Publish a role panel built in the dashboard.", moduleIds: ["reaction-roles"], permissionKey: "growth.manage" },
  { name: "reactionrole", category: "roles", summary: "Manage reaction-role style panels.", moduleIds: ["reaction-roles"], permissionKey: "growth.manage" },
  { name: "buttonrole", category: "roles", summary: "Manage button-role panels.", moduleIds: ["reaction-roles"], permissionKey: "growth.manage" },
  { name: "youtube", category: "social", summary: "Manage YouTube social alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "twitch", category: "social", summary: "Manage Twitch social alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "subreddit", category: "social", summary: "Manage Reddit social alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "instagram", category: "social", summary: "Manage Instagram feed-backed alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "twitter", category: "social", summary: "Manage Twitter/X feed-backed alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "tiktok", category: "social", summary: "Manage TikTok feed-backed alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "soundcloud", category: "social", summary: "Manage SoundCloud feed-backed alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "pinterest", category: "social", summary: "Manage Pinterest feed-backed alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "kickalert", category: "social", summary: "Manage Kick feed-backed alerts.", moduleIds: ["social-alerts"], permissionKey: "social.manage" },
  { name: "webhook", category: "utility", summary: "Create, send, edit and delete webhooks.", moduleIds: ["logs"], permissionKey: "webhooks.manage" },
  { name: "fortnite", category: "utility", summary: "Fortnite cosmetic search and shop watchers.", moduleIds: [], permissionKey: "social.manage" },
  { name: "lastfm", category: "utility", summary: "Last.fm profile and recent scrobbles.", moduleIds: [] },
  { name: "remindme", category: "utility", summary: "Create a reminder.", moduleIds: ["reminders"] },
  { name: "reminder-cancel", category: "utility", summary: "Cancel a reminder.", moduleIds: ["reminders"] },
  { name: "translate", category: "utility", summary: "Translate short text between languages.", moduleIds: [] },
  { name: "avatar-history", category: "utility", summary: "Inspect global and server avatar history.", moduleIds: ["avatar-history"], permissionKey: "avatars.manage" },
  { name: "embed-post", category: "utility", summary: "Post a saved embed template.", moduleIds: ["embed-builder"], permissionKey: "embeds.manage" },
  { name: "application-post", category: "utility", summary: "Publish an application form.", moduleIds: ["applications"], permissionKey: "tickets.manage" },
  { name: "starboard", category: "utility", summary: "Manage starboard settings.", moduleIds: ["starboard"], permissionKey: "starboard.manage" },
  { name: "stats-sync", category: "utility", summary: "Sync stats channels now.", moduleIds: [], permissionKey: "stats.manage" },
  { name: "counter", category: "utility", summary: "Manage stats counter channels.", moduleIds: [] },
  { name: "suggest", category: "utility", summary: "Create a community suggestion.", moduleIds: ["suggestions"] },
  { name: "alias", category: "utility", summary: "Manage command aliases.", moduleIds: ["custom-commands"], permissionKey: "commands.manage" },
  { name: "reaction", category: "utility", summary: "Manage reaction triggers and message channels.", moduleIds: ["custom-commands"], permissionKey: "commands.manage" },
  { name: "customize", category: "branding", summary: "Store requested avatar, banner and bio.", moduleIds: ["custom-bot"], permissionKey: "branding.manage" },
  { name: "voicemaster", category: "branding", summary: "Manage temp voice ownership and setup.", moduleIds: ["voice-master"], permissionKey: "voice.manage" }
];

export const commandCategoryOrder: CommandCategory[] = [
  "start",
  "moderation",
  "tickets",
  "music",
  "security",
  "growth",
  "roles",
  "social",
  "utility",
  "branding"
];

export function getCommandsByCategory(category: CommandCategory) {
  return commandCatalog.filter((entry) => entry.category === category);
}

export function findCommand(name: string) {
  return commandCatalog.find((entry) => entry.name === name);
}

export function getCommandsForModule(moduleId: string) {
  return commandCatalog.filter((entry) => entry.moduleIds.includes(moduleId));
}

export function getCoreCommands() {
  return commandCatalog.filter((entry) => entry.moduleIds.length === 0);
}

export function getGovernableCommands() {
  return commandCatalog.filter((entry): entry is CommandCatalogEntry & { permissionKey: VirtualPermissionKey } => Boolean(entry.permissionKey));
}

const commandPolicySubtargets: Array<{
  commandName: string;
  suffixes: string[];
}> = [
  { commandName: "avatar-history", suffixes: ["global", "server", "all"] },
  { commandName: "lastfm", suffixes: ["login", "refresh", "mode", "cr"] },
  { commandName: "help", suffixes: ["start", "category", "command"] },
  { commandName: "prefix", suffixes: ["set", "self", "view"] },
  { commandName: "levels", suffixes: ["add", "remove", "list", "sync", "stackroles", "ignore.add", "ignore.remove", "ignore.list"] },
  { commandName: "welcome", suffixes: ["add", "remove", "view", "list"] },
  { commandName: "goodbye", suffixes: ["add", "remove", "view", "list"] },
  { commandName: "boost", suffixes: ["add", "remove", "view", "list"] },
  { commandName: "bumpreminder", suffixes: ["channel", "message", "thankyou", "autolock", "autoclean", "config"] },
  { commandName: "vanity", suffixes: ["set", "message", "role.add", "role.remove", "role.list", "award.channel"] },
  { commandName: "boosterrole", suffixes: ["create", "rename", "icon", "remove", "base", "list", "cleanup", "award.set", "award.view", "award.remove"] },
  { commandName: "alias", suffixes: ["add", "remove", "view", "list"] },
  { commandName: "reaction", suffixes: ["add", "remove", "list", "reset", "messages.add", "messages.remove", "messages.list"] },
  { commandName: "giveaway-edit", suffixes: ["host", "prize", "duration", "winners", "description"] },
  { commandName: "antinuke", suffixes: ["list", "config", "admins", "admin", "whitelist", "channel", "role", "ban", "kick", "webhook"] },
  { commandName: "antiraid", suffixes: ["massjoin", "avatar", "age", "whitelist", "whitelist-view", "config", "state"] },
  { commandName: "fortnite", suffixes: ["item", "watch", "watch-list", "shop", "shop-ping", "shop-voting"] },
  { commandName: "customize", suffixes: ["avatar", "banner", "bio", "view"] },
  { commandName: "preset", suffixes: ["active", "soft", "8d", "chipmunk", "boost", "vaporwave", "vibrato", "piano", "metal", "flat", "karaoke", "nightcore", "clear"] },
  { commandName: "spotify", suffixes: ["login", "logout", "play", "queue", "device", "next", "previous", "pause", "resume", "shuffle", "repeat", "volume", "seek", "like", "unlike", "tracks", "artists", "vc"] },
  { commandName: "settings", suffixes: ["dj", "autoplay"] },
  { commandName: "reactionrole", suffixes: ["add", "remove", "list", "removeall", "reset"] },
  { commandName: "buttonrole", suffixes: ["add", "remove", "list", "removeall", "reset"] },
  { commandName: "youtube", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "twitch", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "subreddit", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "instagram", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "twitter", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "tiktok", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "soundcloud", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "pinterest", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "kickalert", suffixes: ["add", "remove", "message", "list"] },
  { commandName: "starboard", suffixes: ["set", "unlock", "lock", "ignore", "ignore-list", "threshold", "emoji", "selfstar", "color", "timestamp", "jumpurl", "attachments"] },
  { commandName: "counter", suffixes: ["add", "remove", "list"] },
  { commandName: "ticket-macro", suffixes: ["add", "remove", "list", "send"] },
  { commandName: "webhook", suffixes: ["create", "send", "edit", "delete", "list"] },
  { commandName: "voicemaster", suffixes: ["setup", "view", "category", "lobby", "default-name", "default-limit", "rename", "limit", "lock", "unlock", "ghost", "unghost", "permit", "claim", "transfer"] }
];

export const commandPolicyTargets: CommandPolicyTarget[] = [
  ...commandCatalog.map((command) => ({
    key: command.name,
    label: `/${command.name}`,
    commandName: command.name,
    summary: command.summary
  })),
  ...commandPolicySubtargets.flatMap((entry) =>
    entry.suffixes.map((suffix) => {
      const command = commandCatalog.find((candidate) => candidate.name === entry.commandName);
      const key = `${entry.commandName}.${suffix}`;
      return {
        key,
        label: `/${entry.commandName} ${suffix.replaceAll(".", " ")}`,
        commandName: entry.commandName,
        summary: command ? `${command.summary} (${suffix})` : suffix
      } satisfies CommandPolicyTarget;
    })
  )
];

export function getPolicyTargetsForCommand(commandName: string) {
  return commandPolicyTargets.filter((entry) => entry.commandName === commandName);
}
