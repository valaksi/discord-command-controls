# Maintainers

## Primary maintainer

- Vaguul: programmer, repository owner, release manager, triage owner, and security contact for Zemiax public utilities.

## Maintenance responsibilities

- Review incoming issues and pull requests for policy correctness and backwards compatibility.
- Keep releases, changelog entries, and validation commands current.
- Keep security-sensitive examples free of Discord tokens, webhook URLs, private guild IDs, and dashboard secrets.
- Prefer small, reviewable changes with tests when behavior changes.

## Review checklist

- Does the change affect command enablement, policy evaluation, or dashboard serialization?
- Are command catalog entries, policy targets, and tests updated together?
- Does `npm run validate` pass?
- Does the change avoid private Discord data and secrets?
