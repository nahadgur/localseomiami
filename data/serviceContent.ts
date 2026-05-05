// data/serviceContent.ts
// Per-service deep content. Each entry powers the service detail page.

export interface WorkedExample {
  title: string;
  body: string;
}

export interface ServiceContent {
  intro: string[];
  benefits: { title: string; desc: string }[];
  candidateIntro: string;
  candidates: string[];
  process: { title: string; desc: string }[];
  // Long-form deepening sections, each ~1,000 words combined per service
  // populated to lift pillar word count from ~600 (intro + benefits +
  // candidates + process) into the 2,500–4,000 range the SEO playbook
  // requires for a real service pillar.
  deepDive?: string[];               // 4 paragraphs, mechanics + how it really works
  edgeCases?: string[];              // 3 paragraphs, where the standard playbook breaks
  workedExamples?: WorkedExample[];  // 3 named scenarios with concrete $-amounts
}

export const serviceContent: Record<string, ServiceContent> = {

  'google-business-profile': {
    intro: [
      'Google Business Profile (GBP, formerly Google My Business) is the single highest-leverage local SEO asset for any Miami business. It controls how you appear in the Map Pack, the knowledge panel, and the local mobile search results, together accounting for 60–80% of a typical Miami small business\'s organic search traffic. Most "verified" GBPs are completing 30–40% of the available signal stack.',
      'Optimization is much deeper than verification. Primary and secondary category selection (the single biggest ranking lever in the GBP), service-area definition, services list with descriptions and pricing, photo cadence and tagging, weekly Posts, Q&A seeding and monitoring, attribute completeness, products module, messaging settings, and the half-dozen smaller modules that most businesses never touch. Specialists work through the full stack methodically, usually a 2–4 week initial project, then ongoing maintenance.',
      'Beyond the structural optimization, the ongoing work matters more than most realize. Posts published weekly, photos added monthly, Q&A monitored and seeded with FAQs, customer questions answered within hours, attribute updates as the business evolves. The "set it and forget it" GBPs lose ranking ground over time to actively-managed competitors. This is one of the most reliable patterns in local SEO.',
    ],
    benefits: [
      {
        title: 'Category selection that actually ranks',
        desc: 'Primary and secondary GBP categories are the single biggest ranking lever and the most commonly mis-set field. Specialists pick categories based on actual ranking competition data, not the obvious-but-wrong choices.',
      },
      {
        title: 'Photo cadence and tagging strategy',
        desc: 'GBPs with 100+ photos rank meaningfully better than those with 10. Specialists set up monthly photo upload routines, tag photos correctly, and use the photo categories Google actually uses for ranking.',
      },
      {
        title: 'Q&A seeded with the right questions',
        desc: 'Anyone can post questions to your GBP, including competitors. Specialists seed Q&A with the FAQs you actually want to answer publicly, monitor for new questions, and respond within Google\'s expected timeline.',
      },
      {
        title: 'Posts that drive CTR, not waste time',
        desc: 'Weekly Posts improve click-through-rate from the Map Pack and knowledge panel. Specialists run Posts with proper CTAs, image specs, and the cadence Google\'s engagement algorithms actually reward.',
      },
    ],
    candidateIntro: 'GBP optimization is the right first project if any of the following describe your situation:',
    candidates: [
      'You are not currently appearing in the Map Pack for queries you should be ranking for',
      'Your GBP is verified but you have not touched it in 6+ months beyond updating hours',
      'Your category settings were chosen at signup and have never been re-evaluated',
      'You have fewer than 30 photos on your GBP, or photos are not tagged correctly',
      'You have never published a GBP Post, or post irregularly',
      'You are getting GBP messages or Q&A and not responding to them within hours',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us your business, what kind of business it is, where in Miami it\'s based, and what your current GBP situation looks like.',
      },
      {
        title: 'We make the introduction',
        desc: 'Within 24 business hours we connect you with a matched specialist who has GBP experience in your sector and Miami sub-market.',
      },
      {
        title: 'Discovery call and audit',
        desc: 'The specialist runs a full GBP audit and presents findings: what\'s set up correctly, what\'s suboptimal, what\'s missing. You see the audit before any contract.',
      },
      {
        title: 'Initial optimization project',
        desc: 'A 2–4 week structural optimization project addresses categories, services, photos, attributes, and the foundational signal stack.',
      },
      {
        title: 'Ongoing maintenance',
        desc: 'Most retainers continue with weekly Posts, photo uploads, Q&A monitoring, and quarterly category and service-list reviews as the business evolves.',
      },
    ],
    deepDive: [
      'The single most under-explained mechanic of a Google Business Profile is how Google\'s entity graph reads a primary category. When you select "Personal Injury Attorney" instead of "Lawyer," you are not picking a label, you are tagging your business node in Google\'s knowledge graph against a specific intent cluster. Queries like "car accident lawyer near me" and "slip and fall attorney miami" route through that cluster, and a "Lawyer" tag will not match cleanly. Most Miami GBPs have category settings selected at signup years ago, when "Lawyer" felt safer than committing to a niche. That conservatism costs Map Pack ranking on the queries that actually convert.',
      'Secondary categories work multiplicatively, not additively. Adding "Estate Planning Attorney" as a secondary category does not give the GBP equal weight on estate planning queries, it gives the listing eligibility for those queries while keeping primary-intent ranking. The right pattern is one tightly-scoped primary category that matches the highest-revenue query cluster, and 2-4 secondary categories covering adjacent clusters the business genuinely serves. Stuffing 9 secondary categories does not help, it dilutes the signal and looks spammy to Google\'s quality systems.',
      'Service-list entries are the most over-looked GBP module. Each service can carry a 300-character description plus pricing. Most Miami businesses have either no services listed or a 5-word service title with no description. The service descriptions are indexed and read against query intent, meaning a well-written service description for "emergency plumbing repair Miami" with proper keyword density routes the GBP into queries it would otherwise miss. Specialists treat services as mini landing pages within the GBP, with proper hierarchy, pricing transparency where applicable, and service-area definition.',
      'GBP Posts are still misunderstood as direct ranking signals. They are not. Posts drive engagement metrics (clicks, calls, direction requests) which feed the prominence signal Google uses for Map Pack ranking. A Post that drives no engagement is wasted; a Post that drives 30 clicks materially lifts the listing for the next 7-14 days. The cadence that works is once weekly with a calibrated mix of offers, events, product spotlights, and educational content, all with strong CTAs. Posting daily generic content actively suppresses ranking through low-engagement noise.',
    ],
    edgeCases: [
      'Multi-location GBPs carry distinct edge-case complexity. Each location needs its own GBP with proper bulk-management hierarchy, but Google\'s duplicate-detection systems will suspend listings if locations are too close together (under a half mile in dense urban Miami zones) without distinct addresses, distinct phone numbers, and distinct staff. The work-around for genuinely close-together locations is service-area definition with a single GBP rather than two listings, but most franchises and chains insist on the listing-per-location pattern, accept the duplicate-detection risk, and budget for the inevitable suspensions and reinstatements.',
      'GBPs in heavily-saturated Miami categories (Brickell law firms, South Beach restaurants, Coral Gables medical practices) hit a different ceiling. Once a category is dense, Google\'s ranking system increasingly weights review velocity and proximity over GBP completeness. A perfectly-optimized GBP in a dense category still ranks behind a 70%-optimized listing with 2x the reviews and a closer address to the searcher. The conclusion most specialists arrive at: GBP optimization is necessary but not sufficient, and the budget split between GBP work and review acquisition has to shift toward reviews once the listing is structurally complete.',
      'Service-area-business GBPs (mobile services, plumbers, electricians, locksmiths) have a separate set of constraints. Showing the business address publicly violates Google\'s policy if the address is a residential one and there is no walk-in service, and the policy violation invites suspension. The right setup is hidden address with declared service-area zip codes, but some specialists still leave the address visible because hiding it correlates with a small short-term ranking dip. The dip is real, the suspension risk is real, and reputable specialists choose policy compliance over the marginal short-term ranking benefit.',
    ],
    workedExamples: [
      {
        title: 'Brickell injury law firm: category re-set + service-list rewrite',
        body: 'Five-attorney firm with category set to "Lawyer" and one-line service entries. Specialist re-set primary to "Personal Injury Attorney" with secondaries for "Auto Accident Attorney" and "Workers Compensation Attorney." Rewrote the service list as 12 properly-scoped entries with 250-300 char descriptions and starting-price ranges. Investment: $1,800 one-time GBP rebuild, then $650/month maintenance. After 90 days: 47% lift in profile views, 34% lift in calls, Map Pack appearance for "personal injury attorney brickell" moved from position 8 to position 2.',
      },
      {
        title: 'South Beach Cuban restaurant: photo cadence + Posts cycle',
        body: 'Family restaurant with 18 photos uploaded over three years, no Posts ever published, GBP otherwise complete. Specialist set up monthly food-photography session ($400 per session), weekly Posts cycle alternating menu features, events, and customer spotlights. Investment: $400/month photography + $750/month management. After 6 months: 162 photos uploaded, 24 Posts published, profile views up 89%, direction requests up 52%, organic traffic to the menu landing page up 31% via GBP referral.',
      },
      {
        title: 'Coral Gables dental practice: Q&A seeding + review response',
        body: 'Established practice with 280 reviews, no Q&A seeded, response rate at 45% averaging two-week reply latency. Specialist seeded 14 anchor Q&As covering insurance accepted, emergency hours, parking, COVID protocols. Set up daily review-monitoring with 24-hour response SLA, response templates calibrated to the practice voice. Investment: $580/month integrated review and Q&A management. After 90 days: response rate at 100% averaging 14 hours, 6 unprompted patient questions answered (would have sat unanswered previously), Map Pack ranking improvement attributed by the specialist roughly 20% to the engagement signal lift.',
      },
    ],
  },

  'local-citation-building': {
    intro: [
      'Citations (your Name, Address, and Phone listed on directories and review sites) are the third-largest local ranking factor after GBP and reviews. They serve two purposes: directly as a ranking signal (Google uses them to confirm your business is legitimate and located where you claim), and indirectly through referral traffic from the highest-quality directories.',
      'For most Miami small businesses, 30–60 high-quality citations cover the practical ceiling. Apple Maps, Yelp, BBB, Bing Places, the major industry-specific directories (Healthgrades for medical, Avvo for legal, Houzz for home services), local Miami-area business directories, and a handful of niche directories relevant to your sector. The "build 200 citations" packages from cheap services usually waste budget on low-quality directories that no one uses and pass no ranking value.',
      'The cleanup work is harder than the build work. Most established Miami businesses have 5–20 inconsistent or duplicate citations created by data aggregators (Acxiom, Infogroup, Localeze) over the years: different business names, old addresses, disconnected phone numbers. Specialists work through the audit, claim what can be claimed, correct what can be corrected, and submit deletion requests for duplicates. The cleanup phase is usually the highest-impact week of work in a new local SEO engagement.',
    ],
    benefits: [
      {
        title: 'NAP consistency audit and cleanup',
        desc: 'Inconsistent business name, address, or phone data across citations confuses Google\'s entity matching. Specialists audit existing citations, identify inconsistencies, and execute the corrections.',
      },
      {
        title: 'Duplicate listing removal',
        desc: 'Duplicate listings dilute ranking authority and confuse customers. Specialists identify duplicates (often created by automated aggregators) and submit deletion requests through proper channels.',
      },
      {
        title: 'High-quality citation building',
        desc: 'Specialists build out the 30–60 citations that actually pass ranking value, prioritizing your sector\'s industry-specific directories and high-authority Miami-area business directories.',
      },
      {
        title: 'Ongoing monitoring',
        desc: 'Citation data corrupts over time as aggregators re-introduce old data. Quarterly monitoring and correction prevents slow erosion of NAP consistency.',
      },
    ],
    candidateIntro: 'Citation building is the right project when:',
    candidates: [
      'Your business name, address, or phone has changed in the last 2 years and citations weren\'t systematically updated',
      'You moved your office or storefront and old addresses are still listed on directories',
      'You\'ve never had a citation audit done',
      'Your phone-call attribution data shows inconsistent caller-ID formatting (a sign of NAP inconsistency)',
      'You operate in a sector with strong industry-specific directories (medical, legal, home services) where missing the major listings costs both ranking and referrals',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us your business, current locations and contact details, and any business-name changes or relocations in the last few years.',
      },
      {
        title: 'Citation audit',
        desc: 'The specialist runs a full audit of existing citations. Typically 50–200 listings are discovered across the major directories and aggregator data sources.',
      },
      {
        title: 'Cleanup phase',
        desc: 'Inconsistent listings corrected, duplicates removed, abandoned listings claimed. This is the most labor-intensive phase but also the highest-impact.',
      },
      {
        title: 'Build phase',
        desc: 'New high-quality citations built across the major directories your business is missing from, prioritizing sector-specific and Miami-area listings.',
      },
      {
        title: 'Quarterly monitoring',
        desc: 'Ongoing watch for new duplicates re-introduced by aggregators and any data drift in existing citations.',
      },
    ],
    deepDive: [
      'Citations work as a confirmation signal in Google\'s ranking system, not a primary lift signal. Google trusts a Miami business at 1428 Brickell Avenue more when 47 independent directories list that exact NAP combination than when only the GBP claims it. The threshold for confirmation is not a fixed number; it is a saturation point relative to the business category. A Miami restaurant probably needs 60+ citations to reach saturation. A boutique commercial law firm probably reaches saturation at 35. Building beyond the saturation point is wasted budget; building below it leaves the listing under-confirmed and ranking-sensitive to small NAP discrepancies.',
      'NAP consistency is enforced by Google\'s entity matching, which uses fuzzy matching on each field with declining tolerance as inconsistencies multiply. One inconsistent suite number across 80 citations is tolerated. Three inconsistent variations across the same 80 citations starts to fragment the entity, with Google treating the business as potentially-different listings. The fragmentation suppresses ranking because none of the variations carry full prominence weight. Specialists track a "consistency score" against a canonical NAP record and treat anything below 95% as a cleanup priority.',
      'The aggregator layer (Acxiom, Infogroup-Localeze, Foursquare-Factual, Neustar) is the upstream source for most directory data. Most cleanup work that does not include aggregator-level submissions reverts within 90-180 days as aggregators push their old data back into directories. Specialists know which directories pull from which aggregators, and either submit at the aggregator level (now mostly automated through paid services like Yext or BrightLocal) or accept that downstream directories will need re-cleanup. The cheap "we cleaned 80 directories" service that does not touch aggregators is selling work that will undo itself within a quarter.',
      'Sector-specific directories carry disproportionate weight relative to their domain authority. A listing in Avvo for a Miami attorney passes more local-ranking value than a listing in Yelp, even though Yelp\'s general authority is higher, because Avvo\'s topical alignment with the legal sector is more valuable to Google\'s entity-matching for legal queries. The same logic applies to Healthgrades for medical, Houzz for home services, TripAdvisor for hospitality. Specialists prioritize sector-specific high-authority listings over generic-but-popular directories.',
    ],
    edgeCases: [
      'Businesses that have moved within Miami in the last 24 months face the hardest citation cleanup case. Old addresses live on in directories, aggregator caches, and the long-tail of niche directories that almost never get updated. The cleanup work involves not only correcting current listings but actively submitting redirect/correction requests through aggregators, monitoring for the corrections to propagate, and accepting that some citations will simply never update because the source publication is dormant. Most established specialists scope citation cleanup at $1,200-2,500 for a moved business, vs. $400-700 for a stable one.',
      'Doctors, dentists, lawyers, and other professionals with both a personal-name listing and a firm-name listing on Google routinely create accidental duplicate citations. A solo Miami attorney with "Jane Smith Law Firm" and "Jane Smith, Esq." tracking as separate entities across directories has effectively halved the citation authority of each entity. The cleanup involves picking the canonical name, abandoning the other, and systematically correcting or removing listings under the abandoned name. The process takes 60-90 days and feels frustrating because the visible cleanup count is high but the new-citation count is zero.',
      'Franchise businesses face the inverse edge case. The franchisor publishes corporate citations (usually the headquarters address), and the local franchisee runs their own GBP and citation set against the local Miami address. Without coordination, the franchisor citations create entity-confusion that suppresses the franchisee\'s ranking. Most major franchises have formal local-listing programs (Yext-managed or similar) that distinguish corporate from local listings, but smaller franchises rely on franchisees to handle this themselves, which most never do.',
    ],
    workedExamples: [
      {
        title: 'Doral logistics firm: post-relocation NAP cleanup',
        body: 'Freight forwarding business that moved offices 14 months prior, citations not systematically updated, ranking down 40% on category queries. Specialist audit found 73 citations with old address, 14 with current address, NAP consistency score 38%. Cleanup phase: 81 citations corrected via direct claims, aggregator-level submission via Yext ($199/mo), 12 dormant duplicates left as-is with deletion submission flagged. Investment: $1,650 one-time cleanup + $199/mo Yext for aggregator coverage. After 4 months: NAP consistency score 96%, ranking recovery on 7 of 9 priority queries.',
      },
      {
        title: 'Wynwood restaurant: sector-specific build-out',
        body: 'Independent restaurant with thin citation profile (12 listings, all generic directories like Yelp/Foursquare). Specialist prioritized sector-specific build-out: TripAdvisor optimization, OpenTable, MenuPages, Resy, plus Miami-specific directories (Miami New Times Best Of, Eater Miami, Time Out Miami). Investment: $850 one-time build + $300/quarter monitoring. After 6 months: 47 active citations, 16 sector-specific, profile views from non-Google referral up 28%, GBP Map Pack appearance for "wynwood restaurant" moved from page 2 to position 4.',
      },
      {
        title: 'Coral Gables solo attorney: name-collision cleanup',
        body: 'Estate planning attorney with both "Jane Smith Esq." and "Smith Law Office" tracking as separate entities across 40+ legal directories. Specialist canonicalized to "Smith Law Office," updated 28 listings, deleted 9 abandoned ones, submitted aggregator corrections. Investment: $1,100 one-time + $150/quarter monitoring. After 90 days: single canonical entity, ranking improvement on "estate planning attorney coral gables" from position 11 to position 4.',
      },
    ],
  },

  'review-management': {
    intro: [
      'Reviews are the second-largest local ranking factor (after GBP signals) and the largest conversion factor, meaning even if reviews didn\'t affect ranking at all, they would still drive more business than any other local SEO investment. The combined effect of ranking + conversion makes review work the highest-ROI lever in most local SEO programs.',
      'Practical review management has three components: systematic acquisition (right post-purchase or post-service workflow, single-click review links, automated requests integrated with your CRM or POS), professional response strategy (every review responded to within 48 hours, calibrated tone, conversion-aware language), and negative-review handling within Google\'s policies (no incentivization, no fake-review removal, only legitimate policy-violation reporting).',
      'The benchmark that matters is not "more reviews than you have now" but "your top 3 competitors\' average review count plus 25%". If your competitors all have 200+ reviews, you need a multi-month acquisition push to catch up. If they have 30, you can be competitive at 40. The matched specialist tells you the actual benchmark, not a generic "more is better" answer.',
    ],
    benefits: [
      {
        title: 'Systematic review acquisition workflow',
        desc: 'Most businesses ask for reviews ad-hoc and inconsistently. Specialists set up automated post-purchase or post-service review request workflows that 5x typical acquisition rates.',
      },
      {
        title: 'Professional response strategy',
        desc: 'Every review responded to within 48 hours, with calibrated tone and conversion-aware language. Response rate is itself a ranking signal, and quality responses convert undecided prospects.',
      },
      {
        title: 'Negative review management',
        desc: 'Specialists identify reviews that genuinely violate Google\'s policies and submit removal requests through proper channels. Genuine-but-negative reviews get the strategic professional response that often converts the reviewer back.',
      },
      {
        title: 'Multi-platform integration',
        desc: 'Beyond Google Reviews: Yelp, Facebook, and sector-specific platforms (Avvo for legal, Healthgrades for medical). Single-acquisition workflow that distributes across the platforms relevant to your business.',
      },
    ],
    candidateIntro: 'Review management is most valuable if:',
    candidates: [
      'Your review count is meaningfully below your top 3 Miami competitors',
      'You have lots of happy customers but few of them leave reviews',
      'You respond to reviews inconsistently or not at all',
      'You\'ve had a recent negative review and don\'t know how to handle it',
      'You operate in a high-review-volume sector (restaurants, hotels, medical, legal) where review velocity itself ranks',
      'You have multiple Miami locations and reviews are scattered across them inconsistently',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us your business, current review count, and what your post-customer interaction workflow looks like (POS system, CRM, manual follow-up).',
      },
      {
        title: 'Acquisition system setup',
        desc: 'Integration with your existing CRM or POS, single-click review link generation, automated trigger setup, and message-template design.',
      },
      {
        title: 'Response system setup',
        desc: 'Notification routing for new reviews, response templates calibrated to your brand voice, and clear escalation rules for negative reviews.',
      },
      {
        title: 'Ongoing acquisition and response',
        desc: 'Weekly review velocity targets, response within 48-hour windows, monthly acquisition reporting.',
      },
      {
        title: 'Quarterly strategy review',
        desc: 'Where competitor benchmarks have moved, where new platforms (industry-specific) need integration, where the acquisition workflow needs adjustment.',
      },
    ],
    deepDive: [
      'Review velocity, the rate at which new reviews come in over time, matters more to ranking than total review count once a business passes a category-typical threshold. A Miami business with 85 reviews receiving 4-6 new reviews per month outranks a competitor with 320 reviews receiving 1 new review every other month, holding other factors constant. The ranking system reads velocity as a freshness signal, with ongoing customer volume implying ongoing operational legitimacy. Specialists optimize for sustained velocity rather than burst acquisition, because a 90-review burst followed by silence reads as suspicious and triggers algorithmic review filtering.',
      'Response rate is a separate ranking signal from review count. Google rewards listings that respond to customer reviews within a timely window, generally 48 hours, and the response rate target most specialists work toward is 100%. A response rate of 60% with witty, brand-aligned, conversion-aware responses outperforms a response rate of 100% with copy-pasted "Thanks for your review!" replies. The response itself is indexed and read for relevance, meaning responses that contain natural language about the service performed contribute to the listing\'s topical authority for those service queries.',
      'The mathematics of negative review impact is counter-intuitive. A single 1-star review on a 4.9-rated business with 280 reviews drops the average to 4.86, a barely-noticeable difference. The damage is not the rating drop, it is the prominent display of the negative review near the top of the listing for the next several weeks. A well-crafted public response to a negative review, one that acknowledges the experience, shows the issue was addressed, and doesn\'t descend into argument, often converts more new business than the review itself loses. Specialists treat negative reviews as conversion opportunities, not damage events.',
      'Review acquisition workflow integration with POS or CRM systems is the difference between an active program and a passive one. Manual review requests rarely scale past 20-30 per quarter even with diligent owner effort. Automated workflows tied to transactions (booking confirmation, post-service delivery, post-purchase) generate 40-200 review requests per month and convert at 8-15% with single-tap review links. The technical integration is moderate complexity: most modern POS systems (Toast, Square, Clover) and CRM platforms (HubSpot, Salesforce, healthcare practice management systems) have either built-in review request features or supported third-party integrations.',
    ],
    edgeCases: [
      'Industries where customer relationships are private or sensitive (medical, legal, mental health, certain B2B services) face acquisition challenges that the general review playbook does not solve. Asking patients for online reviews is regulated, often by HIPAA-adjacent norms, and asking opposing-counsel litigation clients for reviews is professionally awkward. Specialists in these sectors run modified workflows: opt-in language at intake, review requests delivered by support staff rather than the practitioner, and a heavier reliance on platform-specific review systems (Avvo for legal, Healthgrades for medical) where the asking norms are different.',
      'Multi-location businesses confront the problem of review-volume distribution across listings. A 15-location Miami franchise with 600 total reviews distributed unevenly will have some locations at 80 reviews and others at 12. The under-represented locations rank poorly regardless of the franchise-wide reputation. Equalization efforts are slow, location-by-location acquisition pushes that take 12-18 months to balance. Specialists who quote a multi-location business 3-month results are usually focused on the visible big-volume locations and ignoring the long-tail under-served ones.',
      'Review platforms beyond Google have their own rules, and the cross-platform review strategy is often messier than single-platform plans. Yelp\'s review filter algorithm aggressively suppresses reviews from accounts with low Yelp activity, meaning a Miami business that drives 50 customers to Yelp for reviews will see 35 of those reviews filtered into the "not currently recommended" section, where they do not affect the displayed rating. Specialists know which platforms each sector\'s customers actually use (TripAdvisor for hospitality, Avvo for legal, Healthgrades for medical) and avoid pushing customers to platforms where the reviews will be suppressed.',
    ],
    workedExamples: [
      {
        title: 'Brickell HVAC company: workflow integration',
        body: 'Service company with 38 reviews, ad-hoc acquisition averaging 1-2 reviews/month, response rate 12%. Specialist integrated post-service review request workflow with the dispatch software (ServiceTitan), single-tap Google review links sent 24 hours after job completion, response template setup with same-day SLA. Investment: $1,400 one-time setup + $480/month management. After 6 months: 67 new reviews acquired (4.6 average), response rate 100% averaging 8 hours, Map Pack ranking for "ac repair brickell" moved from position 6 to position 2.',
      },
      {
        title: 'Coconut Grove dental practice: HIPAA-aware acquisition',
        body: 'Dental practice with 142 reviews, manual end-of-visit ask producing 3-4 reviews/month, no formal compliance review of acquisition language. Specialist redesigned the front-desk handoff with HIPAA-aware messaging, opt-in language at intake, post-appointment text-based review request (90 minutes after visit). Investment: $2,200 one-time staff training + script + $390/month management. After 12 months: 98 new reviews, no compliance issues, response rate 100% averaging 10 hours.',
      },
      {
        title: 'Doral restaurant: negative review crisis response',
        body: 'Restaurant with 4.7 average over 380 reviews, hit by 4 detailed 1-star reviews in 10 days alleging food quality issues, average dropped to 4.4 rapidly. Specialist crisis response: investigated each complaint with the kitchen, drafted detailed public responses acknowledging specific issues and naming concrete operational changes, accelerated acquisition workflow for the next 60 days, requested removal of 1 review meeting Google\'s policy violation criteria. Investment: $1,800 one-time crisis package + temporary $750/month elevated management. After 90 days: 1 review removed, 67 new positive reviews acquired, average back to 4.6, no permanent ranking damage.',
      },
    ],
  },

  'on-page-local-seo': {
    intro: [
      'On-page local SEO is the website-side work that confirms geographic relevance to Google: local schema markup, location-specific landing pages, internal linking that builds topical authority around your service area, page-speed optimization (a confirmed ranking factor since 2021), and the technical foundations that distinguish a well-optimized local business website from a generic small-business site.',
      'For service-area businesses (plumbers, electricians, mobile services), the highest-impact piece is usually neighborhood landing pages: one page per major Miami neighborhood you actually serve, each with genuinely different content (testimonials specific to that area, neighborhood-relevant photos, local landmarks for context). Token-swap pages where "Brickell" is replaced with "Wynwood" and called done are penalized; real differentiation matters.',
      'For storefront businesses, the priorities shift towards local schema, store-specific landing page optimization, and the on-page signals that confirm geographic prominence: embedded maps, address consistency with GBP, hours and contact information using proper schema, and the local-business specific structured data that surfaces in rich results.',
    ],
    benefits: [
      {
        title: 'Local schema implementation',
        desc: 'LocalBusiness, Restaurant, Dentist, Attorney, or sector-specific schema implemented correctly. Most Miami small business sites have either no schema or wrong schema. Fixing this is high-leverage technical work.',
      },
      {
        title: 'Neighborhood landing pages that don\'t look templated',
        desc: 'For service-area businesses: genuine, differentiated landing pages per Miami neighborhood served. Real local detail, not search-replace templates that Google penalizes.',
      },
      {
        title: 'Mobile page-speed optimization',
        desc: 'Most Miami local search is mobile, and mobile page speed is a confirmed ranking factor. Specialists optimize Largest Contentful Paint, Cumulative Layout Shift, and image delivery as part of any meaningful retainer.',
      },
      {
        title: 'Internal linking for topical authority',
        desc: 'Strategic internal linking from high-traffic pages to service and location pages compounds ranking value. Specialists audit and optimize the internal link graph.',
      },
    ],
    candidateIntro: 'On-page local SEO is appropriate when:',
    candidates: [
      'Your website has no schema markup, or inconsistent schema',
      'You are a service-area business without neighborhood landing pages',
      'You have neighborhood pages but they were built with token-swap templates',
      'Your mobile page-speed scores are below 50 in Google\'s PageSpeed Insights',
      'Your GBP and website show different addresses, hours, or business names',
      'You\'ve done other local SEO work (citations, GBP) but rankings haven\'t moved as expected',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us your business, current website (if any), and what kind of on-page work you suspect you need.',
      },
      {
        title: 'Technical audit',
        desc: 'The specialist runs a full audit covering schema, page-speed, mobile responsiveness, internal linking, and Core Web Vitals.',
      },
      {
        title: 'Implementation roadmap',
        desc: 'A prioritized list of changes: what moves rankings most for your situation, what\'s nice-to-have, what can wait. With realistic time and cost estimates.',
      },
      {
        title: 'Implementation phase',
        desc: 'Schema markup, neighborhood pages, page-speed work, internal linking. Usually 4–8 weeks for the structural project.',
      },
      {
        title: 'Ongoing maintenance',
        desc: 'New pages produced as your business expands, schema updates as Google\'s spec evolves, page-speed monitoring as you add features over time.',
      },
    ],
    deepDive: [
      'Schema markup is the single most under-invested on-page lever for Miami small business sites. Properly-implemented LocalBusiness schema (or one of its 80+ subtypes: Restaurant, Dentist, Attorney, HomeAndConstructionBusiness, etc.) gives Google explicit structured data confirming what the page is about, where the business is, and how it should be represented in rich results. The result is enhanced SERP appearances (knowledge panels, breadcrumb chains, business hours surfaced inline) that compound CTR. Most agencies skip schema because it requires JSON-LD authoring rather than copy editing, and the work is invisible to non-technical clients.',
      'Neighborhood landing pages are the highest-volume on-page work for service-area Miami businesses, and the highest-risk one. The right pattern is one page per service-area neighborhood with genuinely-differentiated content: neighborhood-specific testimonials, photos taken in that area, references to local landmarks, mentions of nearby zip codes and sub-neighborhoods, and a service-list scoped to what is actually offered in that area. The wrong pattern is token-swap templates where the only difference between the Brickell page and the Wynwood page is the city name. Google\'s Helpful Content system penalizes the latter pattern aggressively, and the penalty often shows up as ranking suppression across the entire site, not just on the templated pages.',
      'Page speed and Core Web Vitals are confirmed mobile ranking factors as of 2021, with Largest Contentful Paint (LCP) under 2.5 seconds, Cumulative Layout Shift (CLS) under 0.1, and First Input Delay (FID, now Interaction to Next Paint) being the practical thresholds. For Miami small business sites built on WordPress with bloated theme stacks, hitting these thresholds is non-trivial: image optimization, render-blocking script removal, font loading strategy, deferred JS, and often a CDN. Specialists who quote on-page work without explicitly addressing Core Web Vitals are quoting incomplete work.',
      'Internal linking is the most under-explained ranking signal in local SEO. The internal link graph distributes ranking authority across pages, with high-traffic pages passing more value than low-traffic ones. A Miami home services site where the homepage links to "/services" but not to specific service pages, and "/services" links to specific service pages with generic anchor text ("learn more"), is leaking ranking value. The right pattern is descriptive anchor text linking from high-authority pages directly to revenue pages, with a clear topical hierarchy that mirrors how Google\'s entity graph wants to read the site.',
    ],
    edgeCases: [
      'Sites built on website builders (Wix, Squarespace, GoDaddy) face technical limitations that complicate schema and Core Web Vitals work. Wix has improved its schema support significantly but still does not allow full JSON-LD customization for advanced LocalBusiness subtypes. Squarespace blocks third-party JS in ways that prevent some performance optimizations. The honest specialist response is to evaluate whether the platform constraint is worth the engagement cost, and in some cases recommend a migration to WordPress or a headless setup before substantial on-page work begins.',
      'Multi-location businesses with shared service-area overlap (a Miami HVAC chain with three locations all serving Brickell) face a content-cannibalization problem. Each location wants to rank for "hvac brickell" but all three locations have legitimate claim. Google ranks one location and suppresses the others, and the suppression often falls on the location that does not have the strongest GBP signal stack regardless of which has the better website content. The on-page solution involves clear service-area distinction (the Brickell-physical-location targets Brickell, the Doral-physical-location targets Doral and the Brickell secondary service area gets a sub-page rather than a competing main page).',
      'Heavily-bilingual Miami markets (Hialeah, Little Havana, parts of Doral) face the question of whether to run Spanish-language pages, English-language pages, or both. Google\'s hreflang system handles bilingual sites, but most small Miami businesses have neither the budget to maintain two parallel content sets nor the volume to make hreflang implementation worthwhile. The pragmatic answer for most businesses is to run a primary-English site with Spanish-language landing pages for the highest-traffic queries, hreflang properly declared, and accept that the Spanish-language coverage is partial.',
    ],
    workedExamples: [
      {
        title: 'Brickell law firm: schema + Core Web Vitals',
        body: 'Mid-size firm on WordPress, no schema, mobile LCP at 4.8 seconds. Specialist implemented LegalService schema with proper Person markup for each attorney, optimized hero image delivery, deferred analytics JS, switched to a CDN. Investment: $4,200 one-time on-page rebuild + $250/month maintenance. After 6 months: mobile LCP 1.9 seconds, schema-driven rich results appearing for attorney name queries, organic traffic up 38% YoY.',
      },
      {
        title: 'Kendall mobile mechanic: 8 neighborhood pages, properly differentiated',
        body: 'Mobile mechanic service serving 8 South Miami neighborhoods, currently ranking only for "mobile mechanic miami" generic. Specialist built 8 neighborhood pages with photos taken in each area, neighborhood-specific testimonials, references to local zip codes and landmarks, distinct service-mix priorities per area (Brickell heavier on luxury cars, Hialeah heavier on commercial vehicles). Investment: $3,800 one-time content + photography + $150/month per page maintenance. After 9 months: 6 of 8 pages ranking on page 1 for "mobile mechanic [neighborhood]" queries, organic leads up 220%.',
      },
      {
        title: 'Coral Gables medical practice: bilingual hreflang',
        body: 'OB/GYN practice serving heavily-bilingual demographic. Currently English-only site with Spanish search queries flowing to competitors. Specialist built 6 highest-traffic Spanish-language landing pages, hreflang declarations across both versions, schema in both languages. Investment: $5,500 one-time + $400/month bilingual content maintenance. After 12 months: Spanish-query traffic up from 0 to 38% of organic, total organic traffic up 42%.',
      },
    ],
  },

  'local-link-building': {
    intro: [
      'Local link building is materially different from generic SEO link building. Generic SEO targets domain authority by getting links from any high-authority site. Local SEO link building targets local relevance and proximity by getting links from Miami-area publications, business associations, charity partnerships, and Miami-relevant industry sites. A guest post in the Miami New Times is worth more for local rankings than one in TechCrunch, even though TechCrunch has higher domain authority.',
      'The practical sources are: sponsorships of local Miami events, awards programs (Miami Herald "Best of" lists, sector-specific recognition), guest contributions to Miami industry publications, partnerships with Miami charities, being interviewed as a local expert in Miami-area press, and the high-quality Miami business directories (Chamber of Commerce, well-known local trade associations) that pass real link value.',
      'None of these are quick. Most quality local links take 3–6 months from outreach to publication. The specialist plans the campaign, handles outreach, and tracks placements, but the relationships are yours to maintain. Local link building done right produces a slow accumulation of relationships and authority that compounds over years; done wrong (paid directory spam, low-quality guest posts) actively harms rather than helps.',
    ],
    benefits: [
      {
        title: 'Miami-relevant link prospecting',
        desc: 'Specialists identify the local publications, organizations, and partnership opportunities specifically relevant to your sector and Miami sub-market, not generic outreach lists.',
      },
      {
        title: 'Outreach handling',
        desc: 'Outreach is labor-intensive and specialist-skill-dependent. Most agencies that "do link building" outsource this to inexperienced VAs whose response rates are 1–2%. Quality specialists run 8–15% response rates through better targeting and message quality.',
      },
      {
        title: 'Sponsorship and partnership identification',
        desc: 'Beyond outreach: identifying paid and pro-bono sponsorship opportunities (events, charities, sector associations) that produce both links and real business relationships.',
      },
      {
        title: 'Honest reporting',
        desc: 'Local link building is slow. Most monthly reports show 1–3 placements for an active campaign. Specialists are transparent about this rather than padding reports with low-quality directory submissions.',
      },
    ],
    candidateIntro: 'Local link building is the right investment when:',
    candidates: [
      'You\'ve done the foundational work (GBP optimized, citations clean, reviews flowing) and rankings have plateaued',
      'You\'re competing in a high-authority sector (real estate, legal, medical) where competitors have meaningful Miami press coverage',
      'You have an established Miami business with real partnership and sponsorship potential, just no organized outreach effort',
      'You have a 6–12 month time horizon for ranking improvement (link building does not produce 30-day results)',
      'You\'ve been burned by cheap link-building services and want to rebuild with quality outreach',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us your business, current ranking situation, and any existing local relationships (sponsorships, charity work, association memberships).',
      },
      {
        title: 'Prospect list and strategy',
        desc: 'The specialist builds a prioritized prospect list (publications, organizations, sponsorship opportunities) specific to your sector and goals.',
      },
      {
        title: 'Outreach campaign',
        desc: 'Personalized outreach handled by the specialist. Most campaigns run 3–6 month cycles to allow time for response, follow-up, and content negotiation.',
      },
      {
        title: 'Placement and integration',
        desc: 'When placements close, content is produced (interviews, guest posts, directory submissions), links checked, and the result reported.',
      },
      {
        title: 'Quarterly review',
        desc: 'What\'s working, what\'s not, where to invest more outreach effort, where to retire prospects that haven\'t responded.',
      },
    ],
    deepDive: [
      'Local relevance and topical alignment determine link value for Map Pack ranking, not raw domain authority. A backlink from the Miami Herald or Miami New Times to a Miami business is worth substantially more for local rankings than a backlink from a generic high-DA site, because Google\'s ranking system reads the link as topical-and-geographic confirmation. The ranking models have evolved past the simple PageRank-style authority metric for local queries, and specialists who chase domain-authority numbers without weighting local relevance are optimizing for the wrong objective.',
      'Sponsorship-based link acquisition is the most underutilized local-SEO link source. A Miami business that sponsors a 5K race, a school fundraiser, a neighborhood arts festival, or a local charity gala will routinely receive a sponsor-page backlink with the business named, often with a link to the business website. The sponsorship investment ($500-5,000 typical) is a fraction of what equivalent paid link placements would cost, the link is high-trust because it comes with a real-world relationship, and the secondary brand exposure (event signage, social media mentions) compounds the value. Specialists prospect actively for sponsorship opportunities aligned with the business\'s sector and audience.',
      'Resource link-building, getting your business listed on a "best of" or "top X" page maintained by a local publication, blog, or association, is the slow but durable form of local link acquisition. Most Miami sectors have well-trafficked resource pages: "Best Personal Injury Lawyers in Miami," "Top Cuban Restaurants in Wynwood," "Recommended Pediatricians in Coral Gables." Getting added to these pages requires outreach, often a brief interview or testimonial submission, and sometimes a paid placement fee on the lower-quality publishers. The good ones cannot be paid for, only earned through outreach quality and business reputation.',
      'Brand mentions without links are an increasingly important secondary signal. Google\'s natural language processing has matured to the point where unlinked mentions of a business in trustworthy local publications contribute to entity authority almost as much as linked mentions. The implication is that PR work which produces media coverage even without a direct hyperlink (a quote in a Miami Herald article about local business trends, a mention in a podcast interview, an inclusion in a city-guide listing) still moves the ranking needle. Specialists who track only links and ignore brand mentions miss meaningful signal.',
    ],
    edgeCases: [
      'New Miami businesses without an established local network face the cold-start problem in local link-building. The fastest paths are: pursuing memberships in trade associations or chambers of commerce that publish member directories, sponsoring small local events at the entry-tier ($300-800 sponsor levels), and pitching local industry publications with educational rather than promotional content. The expectation should be 3-6 months of low link-acquisition velocity (1-2 placements per month) before relationships and brand recognition compound into faster placement rates.',
      'Highly-saturated competitive Miami sectors (personal injury law, cosmetic dentistry, real estate) have established competitors with 100+ local backlinks built over many years. New entrants in these sectors cannot link-build their way to parity in 12 months, and specialists who imply otherwise are setting unrealistic expectations. The honest framework: build the foundational link profile (50-80 quality local links) over 12-18 months, accept that Map Pack ranking against decade-old competitors will require investment beyond just link acquisition (review velocity, sustained content, paid acquisition for revenue while organics build), and treat link-building as one component of a multi-quarter strategy rather than the magic-bullet solution.',
      'Sectors with regulated marketing constraints (legal, medical, financial advisory) face additional limits on link acquisition tactics. State bar rules, HIPAA, FINRA, and other regulators restrict what testimonials can be solicited, what publication sponsorships are appropriate, and what content can be syndicated. Specialists who work in these sectors know which tactics are off-limits and which are permitted; the wrong specialist for a Miami medical practice will run a tactic suite designed for unregulated services and create compliance exposure.',
    ],
    workedExamples: [
      {
        title: 'South Miami real estate firm: 12-month sponsorship program',
        body: 'Boutique brokerage with thin link profile (8 local backlinks). Specialist designed 12-month program: 4 mid-tier event sponsorships ($1,500-3,000 each), 6 charity sponsorships ($500-1,500 each), pitched 8 Miami publication features. Investment: $22,000 sponsorship budget + $1,800/month outreach management. After 12 months: 31 new local backlinks acquired (avg DA 38), brand mention growth in unlinked Miami press, ranking improvement on "south miami real estate" from position 14 to position 4.',
      },
      {
        title: 'Wynwood law firm: resource page placement campaign',
        body: 'Personal injury firm targeting "best personal injury lawyer wynwood" type resource pages. Specialist identified 22 candidate resource pages, ran 6-month outreach campaign with case-result-led pitches. Investment: $9,600 over 6 months management. After 6 months: 7 placements secured (4 paid placement fees totaling $2,800, 3 earned), Map Pack ranking improvement on resource-page-driven query cluster from page 2 average to position 5 average.',
      },
      {
        title: 'Brickell financial advisor: regulated-sector compliance navigation',
        body: 'Wealth management firm subject to FINRA marketing rules. Specialist designed compliance-aware program: industry publication contributions (educational, no client testimonials), local Chamber of Commerce membership and directory placement, speaking engagements at Miami business associations. Investment: $1,200/month over 12 months. After 12 months: 18 quality backlinks acquired, all FINRA-compliant, no review or testimonial-driven content, ranking improvement primarily through topical authority rather than direct link weight.',
      },
    ],
  },

  'map-pack-optimization': {
    intro: [
      'The Map Pack, Google\'s top-3 local results, is what most clients actually mean when they say "I want to be on Google". It\'s the single most valuable local SEO outcome and the one that drives the majority of high-intent local search traffic. Unlike generic organic ranking, Map Pack ranking is driven by a specific signal stack: proximity (distance from searcher), prominence (overall authority), and relevance (match to the query).',
      'Map Pack optimization is the integrated strategy across GBP, reviews, citations, and on-page that puts your business in the top 3 for the queries you care about. It\'s not a tactic; it\'s the layer above the individual tactics, the framework that decides which tactics matter most for your specific competitive situation. Most engagements that promise "Map Pack ranking" deliver good citation building, decent GBP optimization, and call it done without the strategic glue that actually wins ranking.',
      'No reputable specialist will guarantee specific Map Pack rankings. Algorithms change, competitors invest, and proximity (one of the three core factors) is outside any specialist\'s control. What good specialists guarantee: methodical execution of the proven ranking factor stack, transparent reporting via grid-based tracking (not the unreliable rank trackers most agencies use), and a realistic 6–9 month roadmap for competitive Miami queries.',
    ],
    benefits: [
      {
        title: 'Integrated multi-tactic strategy',
        desc: 'Not just GBP, not just citations: the strategic combination that actually moves rankings for your specific Miami sub-market and sector.',
      },
      {
        title: 'Grid-based rank tracking',
        desc: 'Map Pack rankings vary by where the searcher is standing. Generic rank trackers don\'t capture this. Local-specific tools (Local Falcon, BrightLocal Local Search Grid) track ranking across geographic grids and reveal proximity-driven blind spots.',
      },
      {
        title: 'Realistic roadmaps',
        desc: 'Specialists give you a realistic 6–9 month timeline for competitive Miami queries, not a "30-day results" sales pitch. The expectations match what local SEO can actually deliver.',
      },
      {
        title: 'Honest competitor analysis',
        desc: 'Specialists tell you when you\'re competing with businesses that have spent 5 years and $100k+ on Map Pack ranking, and what that means for your timeline and budget.',
      },
    ],
    candidateIntro: 'Map Pack optimization is the right scope when:',
    candidates: [
      'You want top-3 ranking for "service + Miami" or "service + neighborhood" queries',
      'You have realistic expectations about timelines (6–9 months for competitive verticals)',
      'You\'re willing to invest in the full ranking factor stack, not just one tactic',
      'You\'re competing in a high-value Miami vertical (real estate, legal, medical, home services) where the ROI of top-3 ranking justifies sustained investment',
      'You\'ve had a previous local SEO engagement that focused on one tactic and didn\'t move rankings',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us your business, your target queries, your current ranking situation, and your timeline.',
      },
      {
        title: 'Competitive audit',
        desc: 'The specialist analyzes your top 3–5 Miami competitors across all ranking factors: GBP completeness, review velocity, citation profile, on-page, link profile.',
      },
      {
        title: 'Strategy and roadmap',
        desc: 'A 6–12 month roadmap covering all relevant ranking factors, prioritized by impact for your specific situation, with realistic milestones.',
      },
      {
        title: 'Execution',
        desc: 'Multi-tactic execution managed by the specialist, usually as a monthly retainer covering GBP work, review acquisition, citation maintenance, on-page improvements, and link building.',
      },
      {
        title: 'Monthly reporting and adjustment',
        desc: 'Grid-based ranking reports, traffic and conversion data, and quarterly strategy adjustments as the competitive landscape evolves.',
      },
    ],
    deepDive: [
      'Map Pack ranking is decided by three primary factors weighted differently for each query: relevance (how well your business matches the search intent), distance (proximity from the searcher to your business), and prominence (overall authority and reputation). The three factors are not equal in weight across all queries; for high-intent commercial queries ("emergency plumber miami"), distance and prominence dominate. For research queries ("best personal injury lawyer miami"), prominence and relevance dominate. Specialists tune the strategy around the dominant factors for the target query cluster, rather than treating all three as equally tunable.',
      'The proximity factor cannot be optimized through SEO; it is geographic reality. A business at 1428 Brickell Avenue cannot rank above a competitor at 1450 Brickell Avenue for searchers walking south on Brickell Avenue, all else being equal. What can be optimized is the search-radius coverage: ensuring strong ranking from multiple search points across the target service area, accepting that no single business will rank #1 from every search point in a given Miami zone. Geo-grid tracking (Local Falcon, BrightLocal Local Search Grid) reveals the actual proximity-decay curve and identifies the search points where ranking is weakest, often pointing to specific tactics (citation building in adjacent zip codes, GBP service-area expansion) that close the gap.',
      'The prominence factor is the single most actionable lever, and the slowest to move. Prominence aggregates GBP completeness, review velocity and average rating, citation density, link profile, brand search volume, and engagement signals into a single weighted score that the ranking system uses for tie-breaking and for ranking sparse-result queries. Most Miami small businesses score in the 25-50 prominence percentile for their category; reaching the top quartile requires sustained 12+ month investment across all factor categories. Specialists who promise 90-day prominence shifts are usually delivering one-factor optimization that produces visible movement on a narrow query subset rather than category-wide ranking lift.',
      'The relevance factor is the most tactical lever for query expansion. A business currently ranking for "personal injury attorney brickell" can systematically expand into adjacent query clusters ("car accident lawyer brickell," "slip and fall attorney brickell," "abogado de accidentes brickell") through GBP service-list expansion, on-page content development, and citation-listing optimization in the adjacent categories. The relevance work compounds because each adjacent cluster captured strengthens the overall topical authority for the parent category. Specialists who treat relevance as static ("you rank for X queries, that\'s your set") are leaving query expansion value on the table.',
    ],
    edgeCases: [
      'Geo-modifier query splitting (a single Miami business targeting multiple neighborhood queries) is common but often misexecuted. A Coral Gables law firm trying to rank for both "personal injury attorney coral gables" and "personal injury attorney miami" faces an inherent tension: the strongest possible coral-gables-specific signal (precise GBP location, hyper-local content) weakens the broader miami-wide claim. Specialists work around this through a clear primary-target query, a service-area-business GBP setup with explicit zip code coverage, and content infrastructure that supports both targets without diluting either. The wrong approach, content that switches between "we serve Coral Gables" and "we serve all of Miami" within the same page, splits ranking signals and underperforms either single-target alternative.',
      'Cross-border Miami metro coverage (a business serving both Miami-Dade and Broward) requires a fundamentally different strategy than single-county businesses. Google\'s ranking system reads metro boundaries strongly, with a Miami business that pivots to Broward queries facing distance penalties that Map Pack ranking cannot fully overcome. The pragmatic solution is either physical location splitting (a real Broward office), aggressive GBP service-area work plus inferior-but-acceptable Broward ranking, or accepting that the business serves Miami-Dade primarily and pursues Broward queries through paid search rather than organic Map Pack ranking.',
      'Heavily-competed Miami categories (Brickell injury law, South Beach restaurants, Coral Gables medical) hit a Map Pack ceiling that organic optimization alone cannot break through. Once the top 3 ranking positions are occupied by businesses with 5+ years of sustained investment and 500+ reviews, ranking #4 or #5 organically requires either a compounding multi-year program (3-5 years to displace incumbents) or a paid-acquisition supplement that lets the business compete commercially while organic ranking slowly compounds. Honest specialists name this constraint at the outset rather than promising fast organic ranking results in saturated categories.',
    ],
    workedExamples: [
      {
        title: 'Brickell HVAC firm: 9-month integrated Map Pack program',
        body: 'AC repair business ranking position 8-12 average across Map Pack queries. Specialist ran integrated program: GBP rebuild ($2,400), citation cleanup ($1,800), review acquisition workflow ($580/mo), neighborhood landing pages ($3,400), local link-building ($800/mo). Total 9-month investment: $19,200. Outcome: ranking position 2-4 average across target queries, monthly call volume from GBP up 187%, organic conversion revenue up estimated $42,000/month vs. baseline.',
      },
      {
        title: 'Coral Gables aesthetic clinic: prominence-led 12-month strategy',
        body: 'Med-spa with strong reviews (340, 4.9 average) but weak prominence in adjacent factor categories. Specialist focused on under-developed factors: 32 sector-specific citations built ($1,200), aesthetic-industry publication features for prominence-by-association ($4,800), schema-driven Person markup for the lead practitioner ($600), sustained content program around procedure-specific queries ($800/mo). Total 12-month investment: $16,200. Outcome: Map Pack ranking position 1-2 average across procedure queries, prominence percentile moved from 41st to 78th in category.',
      },
      {
        title: 'Doral logistics firm: relevance expansion into adjacent queries',
        body: 'Freight forwarder ranking solidly for "freight forwarder miami" but missing adjacent commercial query clusters. Specialist expanded relevance via GBP service-list rebuild (24 specific service entries with descriptions), 6 adjacent-cluster landing pages (LCL freight, customs brokerage, warehousing), citation-list expansion in logistics-specific directories. Total 8-month investment: $11,400. Outcome: ranking on 14 new commercial query clusters, organic lead volume up 89%.',
      },
    ],
  },

  'local-content-strategy': {
    intro: [
      'Local content strategy is the editorial engine that captures long-tail local search queries before competitors do. Neighborhood-specific landing pages, "best of" content for your sector, blog content built around Miami-relevant topics and questions, and the steady cadence of publishing that compounds ranking authority over months and years.',
      'Most local SEO programs underinvest here because content takes longer to produce and longer to rank. A neighborhood page published today rarely ranks for 90 days. A weekly blog rhythm sustained for 12 months produces 50+ pieces of content, each capturing a different long-tail query, each compounding the site\'s topical authority. This is the slow-but-durable side of local SEO.',
      'The strongest local content programs hybrid: business owner provides the actual expertise (via interview, voice memo, rough draft), specialist edits and polishes for SEO and readability. Pure AI-generated content underperforms because it\'s generic and light on specific local detail. Pure agency-written content can lack authentic voice. The hybrid produces genuinely useful content faster than either extreme.',
    ],
    benefits: [
      {
        title: 'Long-tail query capture',
        desc: 'Strategic content built around the specific questions Miami searchers are asking, not generic "what is local SEO" filler.',
      },
      {
        title: 'Neighborhood landing pages that rank',
        desc: 'For service-area businesses: differentiated, genuinely-local pages per Miami neighborhood served. The opposite of token-swap template pages.',
      },
      {
        title: 'Sustainable cadence',
        desc: 'Specialists set up a publishing rhythm you can actually sustain (weekly or fortnightly) plus the editorial workflow that produces it without overwhelming the business owner.',
      },
      {
        title: 'Compounding authority',
        desc: 'Content compounds. A 12-month consistent program produces 50+ pieces, each capturing different searches, each strengthening the site\'s topical authority. The slow-but-durable lever.',
      },
    ],
    candidateIntro: 'Local content strategy is right for:',
    candidates: [
      'Established Miami businesses with deep expertise to share but no consistent content output',
      'Service-area businesses needing high-quality neighborhood landing pages',
      'Businesses in topical-authority-driven verticals (legal, medical, financial) where blog content is a major ranking driver',
      'Owners willing to provide expertise via interview or rough draft, even if not via finished writing',
      'Multi-year time horizons; content compounds, but compounding requires sustained input',
    ],
    process: [
      {
        title: 'Submit the matching form',
        desc: 'Tell us your business, your sector, and the topics you have genuine expertise in.',
      },
      {
        title: 'Topic research and content calendar',
        desc: 'The specialist researches search queries, builds a topic calendar prioritized by search volume and competitive difficulty, and proposes a publishing cadence that fits your capacity.',
      },
      {
        title: 'Production workflow setup',
        desc: 'Hybrid workflow established (interview, voice memo, or draft format) to capture your expertise, with specialist editing and SEO optimization.',
      },
      {
        title: 'Steady publication',
        desc: 'Weekly or fortnightly publication, with internal linking from new content back to service and location pages, and from existing high-traffic pages forward to new content.',
      },
      {
        title: 'Quarterly review',
        desc: 'Which posts are ranking, which queries are still uncompeted, where the content strategy needs to evolve.',
      },
    ],
    deepDive: [
      'The single most important framing for local content strategy is "topical authority through cluster coverage." Google\'s ranking system reads the breadth of content a site has on a topic cluster as evidence of authority on that cluster. A Miami immigration law firm with 4 generic blog posts ("what is an H1B visa", "what is a green card", "do I need a lawyer for asylum", "USCIS processing times") has weak topical authority compared to a competitor with 47 posts covering the same topic at multiple depths, breadths, and query angles. Cluster coverage compounds, and the compounding is what produces durable ranking; one-off posts rarely rank on competitive queries regardless of post quality.',
      'Content cadence determines compounding velocity. A site publishing 1 post per week for 12 months produces 50+ posts; a site publishing 4 posts in burst-then-silence produces 4 posts and zero compounding effect. The slow-but-sustained pattern is not a stylistic preference, it is the mechanism through which topical authority builds. Specialists who quote content programs of 8-12 posts as a "complete" engagement are usually delivering a one-quarter package that does not compound, and the client should expect minimal ranking lift from that volume in competitive Miami markets. Sustained 12-24 month publishing is the realistic minimum for content-led ranking outcomes.',
      'The hybrid production model (business owner provides expertise via interview or rough draft, specialist edits for SEO and readability) outperforms both pure-AI and pure-agency-written content on the metrics that matter for local ranking: dwell time, scroll depth, return visits, and the qualitative signals that suggest content is genuinely useful rather than search-engine-bait. Pure-AI content is generic, light on specific local detail, and fails the "would a real expert have written this?" sniff test that informs Google\'s Helpful Content updates. Pure-agency-written content can lack authentic voice and miss the practitioner-specific insight that ranks. The hybrid produces useful content faster than either extreme.',
      'Internal linking from new content back to revenue pages is half the value of a content program. A Miami local SEO blog post that ranks for "how to rank in Google Maps" but does not link to the service page selling Map Pack optimization is leaking commercial intent. The right pattern is purposeful internal linking from each new post to the closest commercial page, with descriptive anchor text, and reverse linking from existing high-traffic pages to new content as it publishes. Specialists who treat internal linking as an afterthought rather than a core part of the production workflow miss most of the commercial value of content investment.',
    ],
    edgeCases: [
      'Topics where business owners have low expertise face an authenticity problem in the hybrid model. A specialist writing 90% of the content with thin owner input produces material that reads competently but lacks the practitioner-specific detail that makes content truly useful. The honest workaround is either heavy investment in capturing owner expertise (longer interviews, voice memos, watching the owner work and transcribing observations) or scoping the content program to topics the owner genuinely owns, accepting that the owner\'s topic coverage may be narrower than the SEO opportunity suggests.',
      'Bilingual Miami markets create a content strategy fork. Spanish-language content for Miami Hispanic audiences ranks against a less-competitive query landscape but produces less revenue per visitor (some businesses have higher English-language conversion rates). Whether to invest in bilingual content depends on the business\'s actual revenue mix, the specialist\'s honest assessment of conversion patterns, and the operational capacity to maintain two parallel content sets. Many Miami specialists recommend partial Spanish coverage (top 5-10 highest-volume queries translated and adapted) rather than full mirroring, as a middle path that captures the easiest wins without committing to two parallel programs.',
      'Regulated sectors face content-topic limits that reshape the strategy. A Miami medical practice cannot publish content that constitutes medical advice without compliance review; a law firm cannot publish content that could be construed as legal advice or attorney-client communication; a financial advisor faces FINRA rules on testimonials and projections. Specialists in these sectors design topic calendars that work around the constraints (educational rather than advisory, general rather than client-specific, historical rather than predictive) and accept that some valuable query clusters will remain uncovered because the compliance cost outweighs the SEO benefit.',
    ],
    workedExamples: [
      {
        title: 'Wynwood digital agency: 18-month topical authority build',
        body: 'B2B agency targeting "miami digital marketing" cluster. Specialist designed 18-month content program: 78 posts published (one per week), hybrid model with founder providing draft outlines via voice memo. Investment: $1,400/month for 18 months ($25,200 total). Outcome: organic traffic up 412%, agency now ranks position 1-3 across 14 cluster queries, content-driven monthly leads up from 4 to 38.',
      },
      {
        title: 'Coral Gables pediatric practice: bilingual content fork',
        body: 'Established practice with 60% bilingual patient base. Specialist designed asymmetric program: 40 English posts/year covering full pediatric topic cluster, 12 Spanish posts/year on highest-volume Spanish queries, hreflang properly configured. Investment: $2,200/month for 12 months ($26,400 total). Outcome: Spanish-query traffic share up from 0 to 27%, English organic traffic up 86%, total new-patient inquiries up 142%.',
      },
      {
        title: 'Doral law firm: regulated-sector content design',
        body: 'Family law firm in compliance-aware sector. Specialist scoped topic calendar to permitted territory: educational content on Florida family law processes (no client-specific advice), case studies anonymized and reviewed by firm partner, statutory updates and explainers. Investment: $1,800/month for 12 months ($21,600 total). Outcome: 48 posts published with 100% compliance approval, organic traffic up 198%, ranking on 22 educational queries that drive consult bookings.',
      },
    ],
  },
};

export const getServiceContent = (slug: string): ServiceContent =>
  serviceContent[slug] ?? serviceContent['google-business-profile'];
