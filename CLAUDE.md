# Movana — Standing Rules for Claude Code

## Cost constraint
Everything built, every tool, library, service, and API used must be completely free — no paid tiers, no credit-card-required signups, no usage that could incur cost. Firebase free (Spark) tier only. If a free option requires a workaround (e.g. free-tier limits on Cloud Functions), use the workaround rather than upgrading.

## Documentation for the user
The user has no backend experience. For anything they need to personally do outside of Claude Code (e.g. Firebase console setup, enabling Health Connect on a device, installing an APK, granting permissions), give exact, numbered, step-by-step instructions — assume zero prior knowledge of the tool involved. Never say "just configure X" without spelling out where and how.

## Scope discipline
Don't add features, refactor, or introduce abstractions beyond what the current task requires. Do the simplest thing that works well. Don't add error handling, validation, or fallbacks for scenarios that cannot happen. Only validate at system boundaries (user input, Health Connect permission grants, network calls).

## Acting autonomously
When you have enough information to act, act. Do not re-derive facts already established or ask permission mid-task for reversible actions that follow from the request. If weighing a technical choice, give a recommendation with a one-line reason, not an exhaustive survey.

## Checkpoints
Pause for the user only if you hit a destructive or irreversible action, a real scope change, a step requiring their Google account/console access, or a decision only they can make. Otherwise proceed without asking.

## Delegation
Delegate independent subtasks to subagents where useful (e.g. avatar rendering, Firebase schema/Cloud Functions, leaderboard UI, friend-group/invite flow, cosmetics shop) and keep working while they run. Intervene only if a subagent goes off track.

## Reporting honestly
Before reporting progress, audit each claim against a tool result from this session. If the app builds, show the build output. If something is untested on a real device (e.g. Health Connect), say so explicitly rather than assuming it works. Report failures faithfully.

## Final summary
Lead with the outcome — what works end to end, what's verified vs. untested — written for a reader who didn't see your intermediate work. End with exact, numbered steps for opening the project in VS Code with Claude Code and running it via emulator or the debug APK on a physical phone.