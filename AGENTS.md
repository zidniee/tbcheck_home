<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# TBCheck Official Website Design Rules (design.md)

When working on or referencing the `design.md` file (or building features based on it), follow these guidelines:
1. **Target Audience**: The website is a public-facing product showcase. It is meant for the general public, patients, and healthcare providers.
2. **Avoid Deep Technical Jargon**: Do not dive into deep ML/AI architectural terms (like Conv1D FP16) when generating public-facing content. Instead, explain *what* the technology does (e.g., using MFCC to extract sound features) rather than the complex implementation details. Focus on the value proposition.
3. **Core Concept**: The website's primary goal is to educate users, showcase the TBCheck mobile app features, and drive app downloads. It does NOT run the core AI screening features on the web itself.
4. **Consistency**: Always align UI components, copywriting, and layout structures with the specifications outlined in `design.md`.

