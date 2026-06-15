# Local Miami SEO (localseomiami) — silo plan

Niche: local SEO, Miami. Independent **matching** service ("get matched with vetted
Miami local SEO specialists"; does not deliver SEO itself). Domain localmiamiseo.com.
**US site -> US English** (optimize, color, $, neighborhood). Clean fleet model EXCEPT
there is no `/guides` route yet: services `/services/[serviceSlug]/`, locations
`/location/[area]/`, blog `/blog/[slug]/`. Build a `/guides/[slug]/` hub layer.

Status: 7 service pillars, 21 locations, 4 blog spokes, no hubs. Build: a 10-hub
`/guides` layer + blog draft gate + spoke buildout. Testimonials array is correctly
EMPTY (keep it that way until real, verifiable reviews). No fabricated reviews.

## 0. Cross-domain rule

Same niche as the UK SEO sites (SEO Enfield / Harlow). Different country/SERP, so
repeated SEO facts are fine, but every page must be Miami/US-framed (named Miami
neighborhoods, US terminology, Florida/Miami market specifics). NEVER paraphrase the
UK SEO sites.

## 1. Reserved head terms (not targeted by hubs/spokes)

| Reserved | Owned by |
|---|---|
| local SEO Miami / Miami SEO agency | Homepage + services index |
| [neighborhood] SEO (Brickell, Wynwood, Coral Gables...) | `/location/[area]/` |
| each hub head term (GBP, map pack, citations, reviews...) | the matching `/guides/` hub |

## 2. The ten pillar hubs (/guides), aligned to the 7 service pillars

| ID | Hub | Service pillar |
|---|---|---|
| H1 | Google Business Profile optimization | google-business-profile |
| H2 | Ranking in the Miami map pack | map-pack-optimization |
| H3 | Local citations and NAP consistency | local-citation-building |
| H4 | Google reviews and reputation | review-management |
| H5 | On-page local SEO | on-page-local-seo |
| H6 | Local link building | local-link-building |
| H7 | Local content strategy | local-content-strategy |
| H8 | 'Near me', voice and mobile local search | (cross GBP/map-pack) |
| H9 | Technical SEO for local business sites | (cross on-page) |
| H10 | AI search + choosing/working with a Miami SEO agency | the matching CTA |

## 3. Map the 4 existing spokes to hubs

- H2 map pack: "Why Miami local SEO takes longer than most other US cities".
- H1 GBP: "Google Business Profile mistakes Miami businesses make most often".
- H4 reviews: "Review acquisition strategy for Miami small businesses".
- H10 choosing: "How to evaluate a Miami local SEO agency before hiring".

## 4. Spoke fan-out to ~100 (10/hub, Miami/US-framed)

- **H1 GBP:** how to set up a GBP; choosing categories; GBP posts; products/services; photos that win clicks; verification/suspension fixes; service-area businesses; why your profile isn't showing; GBP vs a website.
- **H2 map pack:** how the Miami map pack works; the 3 ranking factors; proximity in dense Miami; per-neighborhood ranking (Brickell, Wynwood, Little Havana...); why competitors outrank you; tracking map-pack rank.
- **H3 citations:** what citations are; best US/Miami directories; NAP consistency; finding/fixing inconsistent citations; duplicate listings; citations vs backlinks; how many you need.
- **H4 reviews:** getting more reviews (FTC-compliant); do reviews affect ranking; responding to negatives; review gating and FTC rules; asking templates/timing; review platforms beyond Google.
- **H5 on-page:** title tags/meta; headers; keyword research; search intent; optimizing a service page; internal linking; content length; featured snippets.
- **H6 link building:** safe local link building; what makes a good backlink; local Miami links (sponsorships, press, partnerships); digital PR; guest posting; toxic links.
- **H7 content:** local content that ranks; neighborhood landing content without thin pages; service-area content; seasonal Miami demand; blogging for local SEO.
- **H8 near-me/voice:** ranking for 'near me'; voice search; mobile local; local intent keywords; 'open now'; local schema.
- **H9 technical:** Core Web Vitals; page speed; crawl/index; schema basics; mobile-first; technical audit.
- **H10 AI/agency:** AI Overviews and local; getting recommended by AI; how to choose a Miami SEO agency; what to expect from a campaign; red flags; how matching works.

## 5. Architecture prerequisite (Claude Code, before the writer runs)

1. Build a `/guides/[slug]/` route + `data/guides.ts` with the 10 hubs; align each to
   its service pillar; hub pages render a child-spoke grid by `hub`. Add Guides to nav
   + sitemap.
2. `data/blog.ts`: add `hub: string` + `draft: boolean` (keep the existing `category`
   enum or fold it in); set `hub` on the 4 existing spokes. Draft gate: draft:true
   404s, excluded from /blog, hub grids, sitemap.
3. Schema: Article + BreadcrumbList + FAQPage on hubs + spokes, author `@id` to the
   editorial entity, datePublished + dateModified.
4. Author byline = "LMS" (acronym of Local Miami SEO), an editorial entity `@id` (no
   invented person). Keep testimonials empty.
5. US-English sweep.

## 6. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub, to its `/services/<serviceSlug>/` pillar (and a
  `/location/<area>/` page where local), plus the matching CTA.
- Hubs link down to spokes + their service pillar; sideways to 1-2 adjacent hubs
  (H1<->H2, H3<->H6 citations/links, H8<->H2, H9<->H5).
- External: max 2/page, one per domain, named authority (Google Business Profile Help,
  FTC on reviews) first mention; attribute stats.

## 7. Automation (schedulers, mirror essexdental)

- **`miami-seo-writer`** (writer): one Miami/US-framed local-SEO spoke per run,
  draft:true, under the right hub, schema + up-link + pillar/location link + CTA.
  Never paraphrase the UK SEO sites. Created DISABLED until section 5 exists.
- **`miami-seo-publisher`** (publisher): flips the oldest parked draft live 2/week;
  non-YMYL, enable when you want auto-dripping.

## 8. Status tracker

10 hubs built. Spokes: 4 published + 10 draft buffer = 14 written of ~100 target. Buffer (parked drafts awaiting publisher): 10. Round-robin pass 2: H1 (GBP categories), H2 (map-pack rank tracking), H3 (best local directories), H4 (review gating + FTC rules, 2026-06-15) done; next: H5.

## Slug rules (writer: follow on every spoke)

Kebab-case: lowercase, hyphens only, ASCII only, 3-6 words, under ~60 chars.
Do NOT: include a year/date; reuse or near-duplicate an existing slug; use a
reserved head term or the parent hub's head term; keyword-stuff or repeat a word;
use stop words (a/the/to/for). Never 