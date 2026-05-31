# Command Catalog

Generated from `src/command-catalog.ts`.

| Command | Category | Modules | Permission | Summary |
|---|---|---|---|---|
| /ping | start | - | - | Check if the bot runtime is healthy. |
| /plans | start | - | - | List the configured commercial plans. |
| /help | start | - | - | Ordered command guide by category or command. |
| /prefix | start | - | - | Stored guild and personal prefix preferences. |
| /warn | moderation | moderation | moderation.warn | Warn a member and create a moderation case. |
| /timeout | moderation | moderation | moderation.timeout | Timeout a member. |
| /kick | moderation | moderation | moderation.kick | Kick a member. |
| /ban | moderation | moderation | moderation.ban | Ban a member. |
| /tempban | moderation | moderation | moderation.tempban | Temporarily ban a member. |
| /softban | moderation | moderation | moderation.softban | Ban, prune messages, then unban. |
| /hardban | moderation | moderation | moderation.hardban | Ban with stronger message cleanup. |
| /unban | moderation | moderation | moderation.unban | Unban by user ID. |
| /jail | moderation | moderation | moderation.jail | Long timeout / jail action. |
| /unjail | moderation | moderation | moderation.jail | Remove a jail timeout. |
| /purge | moderation | moderation | moderation.purge | Bulk delete recent messages. |
| /slowmode | moderation | moderation | moderation.slowmode | Set slowmode for a channel. |
| /lockdown | moderation | moderation | security.lockdown | Lock a text channel. |
| /unlockdown | moderation | moderation | security.lockdown | Unlock a text channel. |
| /ticketpanel-post | tickets | tickets | tickets.manage | Publish a ticket panel. |
| /ticket-close | tickets | tickets | tickets.manage | Close the current ticket. |
| /ticket-delete | tickets | tickets | tickets.manage | Delete a closed ticket. |
| /ticket-rename | tickets | tickets | tickets.manage | Rename a ticket channel. |
| /ticket-add | tickets | tickets | tickets.manage | Add a member to a ticket. |
| /ticket-remove | tickets | tickets | tickets.manage | Remove a member from a ticket. |
| /ticket-priority | tickets | tickets | tickets.manage | Change ticket priority. |
| /ticket-note | tickets | tickets | tickets.manage | Add an internal note. |
| /ticket-transcript | tickets | tickets | tickets.manage | Generate the ticket transcript. |
| /join | music | music | - | Join your voice channel. |
| /play | music | music | - | Queue and play music. |
| /queue | music | music | - | Show the current queue. |
| /queue-remove | music | music | - | Remove a queue entry. |
| /queue-move | music | music | - | Move a queue entry. |
| /skip | music | music | - | Skip the current track. |
| /stop | music | music | - | Stop playback. |
| /pause | music | music | - | Pause playback. |
| /resume | music | music | - | Resume playback. |
| /seek | music | music | - | Seek inside the current track. |
| /volume | music | music | - | Set playback volume. |
| /repeat | music | music | - | Set repeat mode. |
| /preset | music | music | - | Apply audio presets. |
| /spotify | music | music | - | Spotify-style playback and liked tracks. |
| /leave | music | music | - | Leave voice. |
| /record-start | music | music | - | Start recording a voice channel. |
| /record-stop | music | music | - | Stop recording. |
| /security | security | fake-permissions, anti-nuke, anti-raid | security.manage | Show anti-nuke summary. |
| /action-template-run | security | fake-permissions, moderation | - | Run a moderation action template. |
| /antinuke | security | anti-nuke | security.manage | Manage anti-nuke admins, whitelist and thresholds. |
| /antiraid | security | anti-raid | security.manage | Manage anti-raid thresholds and filters. |
| /raid | security | anti-raid | security.lockdown | Trigger raid lockdown manually. |
| /recentban | security | anti-nuke, moderation | moderation.ban | Show recent ban actions. |
| /levels | growth | levels | growth.manage | Manage XP, rewards and sync. |
| /rank | growth | levels | - | Show rank card for a member. |
| /leaderboard | growth | levels | - | Show XP leaderboard. |
| /welcome | growth | welcome | growth.manage | Manage welcome messages. |
| /goodbye | growth | welcome | growth.manage | Manage goodbye messages. |
| /boost | growth | welcome, levels | growth.manage | Manage boost announcement messages. |
| /bumpreminder | growth | welcome | growth.manage | Manage bump reminder settings. |
| /vanity | growth | welcome | growth.manage | Manage vanity status rewards. |
| /boosterrole | growth | welcome | growth.manage | Manage booster roles and rewards. |
| /rolepanel-post | roles | reaction-roles | growth.manage | Publish a role panel built in the dashboard. |
| /reactionrole | roles | reaction-roles | growth.manage | Manage reaction-role style panels. |
| /buttonrole | roles | reaction-roles | growth.manage | Manage button-role panels. |
| /youtube | social | social-alerts | social.manage | Manage YouTube social alerts. |
| /twitch | social | social-alerts | social.manage | Manage Twitch social alerts. |
| /subreddit | social | social-alerts | social.manage | Manage Reddit social alerts. |
| /instagram | social | social-alerts | social.manage | Manage Instagram feed-backed alerts. |
| /twitter | social | social-alerts | social.manage | Manage Twitter/X feed-backed alerts. |
| /tiktok | social | social-alerts | social.manage | Manage TikTok feed-backed alerts. |
| /soundcloud | social | social-alerts | social.manage | Manage SoundCloud feed-backed alerts. |
| /pinterest | social | social-alerts | social.manage | Manage Pinterest feed-backed alerts. |
| /kickalert | social | social-alerts | social.manage | Manage Kick feed-backed alerts. |
| /webhook | utility | logs | webhooks.manage | Create, send, edit and delete webhooks. |
| /fortnite | utility | - | social.manage | Fortnite cosmetic search and shop watchers. |
| /lastfm | utility | - | - | Last.fm profile and recent scrobbles. |
| /remindme | utility | reminders | - | Create a reminder. |
| /reminder-cancel | utility | reminders | - | Cancel a reminder. |
| /translate | utility | - | - | Translate short text between languages. |
| /avatar-history | utility | avatar-history | avatars.manage | Inspect global and server avatar history. |
| /embed-post | utility | embed-builder | embeds.manage | Post a saved embed template. |
| /application-post | utility | applications | tickets.manage | Publish an application form. |
| /starboard | utility | starboard | starboard.manage | Manage starboard settings. |
| /stats-sync | utility | - | stats.manage | Sync stats channels now. |
| /counter | utility | - | - | Manage stats counter channels. |
| /suggest | utility | suggestions | - | Create a community suggestion. |
| /alias | utility | custom-commands | commands.manage | Manage command aliases. |
| /reaction | utility | custom-commands | commands.manage | Manage reaction triggers and message channels. |
| /customize | branding | custom-bot | branding.manage | Store requested avatar, banner and bio. |
| /voicemaster | branding | voice-master | voice.manage | Manage temp voice ownership and setup. |
