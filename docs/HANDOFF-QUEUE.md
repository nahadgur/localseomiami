# Handoff queue (localseomiami)

Dated run-blocks from the `miami-seo-writer` scheduler and any build handoffs
for Claude Code. Newest at top.

## 2026-06-10 — miami-seo-writer run

- Site: localseomiami (localmiamiseo.com)
- Spoke written: `fix-inconsistent-nap-miami-business-listings`
  - Title: "How to fix inconsistent NAP across your Miami business listings"
  - Hub: `local-citations-and-nap-consistency` (H3, was 0 spokes — thinnest hub)
  - Category: Local. `draft: true`. publishDate/dateModified: 2026-06-10.
  - ~1,473 words, answer-first opening, 7 H2 sections, 5 distinct FAQs.
  - Linking: inline UP-link to the H3 hub; contextual links to the
    `/services/local-citation-building/` pillar and `/location/little-havana/`;
    one external authority (Google Business Profile Help). No sibling links (H3
    had no published spokes). Matching CTA is the automatic bottom section.
  - US English, matching framing (we connect, we do not deliver SEO),
    testimonials untouched/empty, LMS editorial byline. No fabricated reviews.
- tsc: `npx tsc --noEmit` clean (exit 0).
- git: BLOCKED. A stale `.git/index.lock` is present and the sandbox cannot
  remove it (Operation not permitted on the mounted path). `git add`/`commit`/
  `push` could not run. ACTION FOR CLAUDE CODE / operator: delete
  `.git/index.lock`, then `git add -A && git commit && git push` on `main`.
  Working-tree changes are staged-ready and intact.

### Build note (structural change this run)

- `app/blog/[slug]/ClientPage.tsx`: added a `renderText()` helper that parses
  markdown-style `[label](href)` inside `p`, `list`, and `note` blocks. Internal
  paths render via `next/link`; `http(s)` links render as `target="_blank"
  rel="noopener noreferrer"`. Backward-compatible: existing posts contain no
  `[..](..)` syntax, so they render unchanged. This was needed because the body
  renderer previously output plain text only, with no way to place the inline
  silo links the writer spec requires. Imported `type ReactNode` from `react`.
- Incidental: the working copies of `data/blog.ts` and `ClientPage.tsx` had been
  left with CRLF endings that corrupted in-place edits; both were rebuilt from
  `git HEAD` and rewritten LF-only. `.gitattributes` (`* text=auto eol=lf`) is
  in place; check no CRLF creeps back on the Windows side.

### Status

- Hubs: 10 built. Spokes: 4 published + 1 draft buffer = 5 of ~100 target.
- Buffer size (parked drafts awaiting publisher): 1.
- Next run: fill a thin hub round-robin — H5 on-page, H6 link building,
  H7 content, H8 near-me/voice, H9 technical (all 0 spokes).

## 2026-06-10 — miami-seo-writer run

- Site: localseomiami. Spoke written: `title-tags-meta-descriptions-miami-pages`
  (hub `on-page-local-seo` / H5), draft:true. First spoke under H5.
- ~1,100-word body, answer-first opening, 6 sections, 5 FAQs. US English.
- Links: UP to /guides/on-page-local-seo/; /location/brickell/ (local example);
  /services/on-page-local-seo/ pillar; one external authority
  (Google Search Central, title-link docs); matching CTA. No sibling links (hub
  was empty). Schema (Article + BreadcrumbList + FAQPage) emitted by the page
  from data fields; author @id = LMS editorial entity; testimonials untouched.
- tsc: clean (`npx tsc --noEmit`, exit 0). SILO-PLAN section 8 updated to
  4 published + 2 draft = 6 written; buffer 2.
- NOTE: in-place Edit of data/blog.ts truncated on the Windows side again (the
  recurring CRLF-corruption symptom); the tail was rebuilt LF-only via shell
  from the clean prefix, then typechecked. Watch this on future runs.
- git: commit on main; push attempted (see status below).
- Next run: continue thin-hub round-robin — H6 link building, H7 content,
  H8 near-me/voice, H9 technical (all still 0 spokes).

### 2026-06-10 run — git status correction

- Commit `9adbf7c` is on local `main` but NOT pushed: this sandbox has no GitHub
  credentials (`could not read Username for https://github.com`). Claude Code
  (native, credentialed) should `git push origin main`.
- The repo `.git` mount here forbids unlink, so commits were made via an external
  GIT_INDEX_FILE. A stale `.git/index.lock` (06:19) could not be removed from the
  sandbox; it is harmless to a native Claude Code session. The default `.git/index`
  was left dirty by the workaround — run `git reset` (native) to tidy; working
  tree and HEAD are correct.
- `.next-dev.log` was accidentally swept into commit `9adbf7c` by `git add -A`.
  A follow-up commit to untrack it FAILED: failed git ops left stuck
  `.git/HEAD.lock` and `.git/objects/maintenance.lock` that the sandbox cannot
  unlink. Native cleanup: `rm -f .git/*.lock .git/objects/maintenance.lock`,
  then `git rm --cached .next-dev.log`, add `.next-dev.log` to `.gitignore`,
  commit, and `git push origin main`. `.gitignore` already has the entry staged
  in the working tree.

## 2026-06-11 — miami-seo-writer run
- Site: localseomiami
- Spoke: earn-local-backlinks-miami-sponsorships (hub: local-link-building, draft: true)
- New spoke for the previously empty H6 link-building hub (round-robin into a thin hub).
- ~1150 words, answer-first opening, 6 sections, 6 FAQs. Up-link to /guides/local-link-building/, pillar link to /services/local-link-building/, location link to /location/brickell/, matching CTA. External: Google Search Central spam policies. Testimonials empty, LMS editorial byline.
- tsc --noEmit: clean. check-links: 0 broken (17 slugs). Commit + push below.
