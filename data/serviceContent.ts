// data/serviceContent.ts
// Per-service deep content. Each entry powers the service detail page.

export interface ServiceContent {
  intro: string[];
  benefits: { title: string; desc: string }[];
  candidateIntro: string;
  candidates: string[];
  process: { title: string; desc: string }[];
}

export const serviceContent: Record<string, ServiceContent> = {

  'google-business-profile': {
    intro: [
      'Google Business Profile (GBP, formerly Google My Business) is the single highest-leverage local SEO asset for any Miami business. It controls how you appear in the Map Pack, the knowledge panel, and the local mobile search results — together accounting for 60–80% of a typical Miami small business\'s organic search traffic. Most "verified" GBPs are completing 30–40% of the available signal stack.',
      'Optimization is much deeper than verification. Primary and secondary category selection (the single biggest ranking lever in the GBP), service-area definition, services list with descriptions and pricing, photo cadence and tagging, weekly Posts, Q&A seeding and monitoring, attribute completeness, products module, messaging settings, and the half-dozen smaller modules that most businesses never touch. Specialists work through the full stack methodically — usually a 2–4 week initial project, then ongoing maintenance.',
      'Beyond the structural optimization, the ongoing work matters more than most realize. Posts published weekly, photos added monthly, Q&A monitored and seeded with FAQs, customer questions answered within hours, attribute updates as the business evolves. The "set it and forget it" GBPs lose ranking ground over time to actively-managed competitors — this is one of the most reliable patterns in local SEO.',
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
        desc: 'The specialist runs a full GBP audit and presents findings — what\'s set up correctly, what\'s suboptimal, what\'s missing. You see the audit before any contract.',
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
  },

  'local-citation-building': {
    intro: [
      'Citations — your Name, Address, and Phone (NAP) listed on directories and review sites — are the third-largest local ranking factor after GBP and reviews. They serve two purposes: directly as a ranking signal (Google uses them to confirm your business is legitimate and located where you claim), and indirectly through referral traffic from the highest-quality directories.',
      'For most Miami small businesses, 30–60 high-quality citations cover the practical ceiling. Apple Maps, Yelp, BBB, Bing Places, the major industry-specific directories (Healthgrades for medical, Avvo for legal, Houzz for home services), local Miami-area business directories, and a handful of niche directories relevant to your sector. The "build 200 citations" packages from cheap services usually waste budget on low-quality directories that no one uses and pass no ranking value.',
      'The cleanup work is harder than the build work. Most established Miami businesses have 5–20 inconsistent or duplicate citations created by data aggregators (Acxiom, Infogroup, Localeze) over the years — different business names, old addresses, disconnected phone numbers. Specialists work through the audit, claim what can be claimed, correct what can be corrected, and submit deletion requests for duplicates. The cleanup phase is usually the highest-impact week of work in a new local SEO engagement.',
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
        desc: 'The specialist runs a full audit of existing citations — typically 50–200 listings discovered across the major directories and aggregator data sources.',
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
  },

  'review-management': {
    intro: [
      'Reviews are the second-largest local ranking factor (after GBP signals) and the largest conversion factor — meaning even if reviews didn\'t affect ranking at all, they would still drive more business than any other local SEO investment. The combined effect of ranking + conversion makes review work the highest-ROI lever in most local SEO programs.',
      'Practical review management has three components: systematic acquisition (right post-purchase or post-service workflow, single-click review links, automated requests integrated with your CRM or POS), professional response strategy (every review responded to within 48 hours, calibrated tone, conversion-aware language), and negative-review handling within Google\'s policies (no incentivization, no fake-review removal — only legitimate policy-violation reporting).',
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
        desc: 'Beyond Google Reviews — Yelp, Facebook, sector-specific platforms (Avvo for legal, Healthgrades for medical). Single-acquisition workflow that distributes across the platforms relevant to your business.',
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
  },

  'on-page-local-seo': {
    intro: [
      'On-page local SEO is the website-side work that confirms geographic relevance to Google: local schema markup, location-specific landing pages, internal linking that builds topical authority around your service area, page-speed optimization (a confirmed ranking factor since 2021), and the technical foundations that distinguish a well-optimized local business website from a generic small-business site.',
      'For service-area businesses (plumbers, electricians, mobile services), the highest-impact piece is usually neighborhood landing pages — one page per major Miami neighborhood you actually serve, each with genuinely different content (testimonials specific to that area, neighborhood-relevant photos, local landmarks for context). Token-swap pages where "Brickell" is replaced with "Wynwood" and called done are penalized; real differentiation matters.',
      'For storefront businesses, the priorities shift towards local schema, store-specific landing page optimization, and the on-page signals that confirm geographic prominence — embedded maps, address consistency with GBP, hours and contact information using proper schema, and the local-business specific structured data that surfaces in rich results.',
    ],
    benefits: [
      {
        title: 'Local schema implementation',
        desc: 'LocalBusiness, Restaurant, Dentist, Attorney, or sector-specific schema implemented correctly. Most Miami small business sites have either no schema or wrong schema — fixing this is high-leverage technical work.',
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
        desc: 'A prioritized list of changes — what moves rankings most for your situation, what\'s nice-to-have, what can wait. With realistic time and cost estimates.',
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
  },

  'local-link-building': {
    intro: [
      'Local link building is materially different from generic SEO link building. Generic SEO targets domain authority — getting links from any high-authority site. Local SEO link building targets local relevance and proximity — getting links from Miami-area publications, business associations, charity partnerships, and Miami-relevant industry sites. A guest post in the Miami New Times is worth more for local rankings than one in TechCrunch, even though TechCrunch has higher domain authority.',
      'The practical sources are: sponsorships of local Miami events, awards programs (Miami Herald "Best of" lists, sector-specific recognition), guest contributions to Miami industry publications, partnerships with Miami charities, being interviewed as a local expert in Miami-area press, and the high-quality Miami business directories (Chamber of Commerce, well-known local trade associations) that pass real link value.',
      'None of these are quick. Most quality local links take 3–6 months from outreach to publication. The specialist plans the campaign, handles outreach, and tracks placements — but the relationships are yours to maintain. Local link building done right produces a slow accumulation of relationships and authority that compounds over years; done wrong (paid directory spam, low-quality guest posts) actively harms rather than helps.',
    ],
    benefits: [
      {
        title: 'Miami-relevant link prospecting',
        desc: 'Specialists identify the local publications, organizations, and partnership opportunities specifically relevant to your sector and Miami sub-market — not generic outreach lists.',
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
        desc: 'The specialist builds a prioritized prospect list — publications, organizations, sponsorship opportunities — specific to your sector and goals.',
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
  },

  'map-pack-optimization': {
    intro: [
      'The Map Pack — Google\'s top-3 local results — is what most clients actually mean when they say "I want to be on Google". It\'s the single most valuable local SEO outcome and the one that drives the majority of high-intent local search traffic. Unlike generic organic ranking, Map Pack ranking is driven by a specific signal stack: proximity (distance from searcher), prominence (overall authority), and relevance (match to the query).',
      'Map Pack optimization is the integrated strategy across GBP, reviews, citations, and on-page that puts your business in the top 3 for the queries you care about. It\'s not a tactic — it\'s the layer above the individual tactics, the framework that decides which tactics matter most for your specific competitive situation. Most engagements that promise "Map Pack ranking" deliver good citation building, decent GBP optimization, and call it done — without the strategic glue that actually wins ranking.',
      'No reputable specialist will guarantee specific Map Pack rankings. Algorithms change, competitors invest, and proximity (one of the three core factors) is outside any specialist\'s control. What good specialists guarantee: methodical execution of the proven ranking factor stack, transparent reporting via grid-based tracking (not the unreliable rank trackers most agencies use), and a realistic 6–9 month roadmap for competitive Miami queries.',
    ],
    benefits: [
      {
        title: 'Integrated multi-tactic strategy',
        desc: 'Not just GBP, not just citations — the strategic combination that actually moves rankings for your specific Miami sub-market and sector.',
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
        desc: 'Specialists tell you when you\'re competing with businesses that have spent 5 years and $100k+ on Map Pack ranking — and what that means for your timeline and budget.',
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
        desc: 'The specialist analyzes your top 3–5 Miami competitors across all ranking factors — GBP completeness, review velocity, citation profile, on-page, link profile.',
      },
      {
        title: 'Strategy and roadmap',
        desc: 'A 6–12 month roadmap covering all relevant ranking factors, prioritized by impact for your specific situation, with realistic milestones.',
      },
      {
        title: 'Execution',
        desc: 'Multi-tactic execution managed by the specialist — usually a monthly retainer covering GBP work, review acquisition, citation maintenance, on-page improvements, and link building.',
      },
      {
        title: 'Monthly reporting and adjustment',
        desc: 'Grid-based ranking reports, traffic and conversion data, and quarterly strategy adjustments as the competitive landscape evolves.',
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
        desc: 'Strategic content built around the specific questions Miami searchers are asking — not generic "what is local SEO" filler.',
      },
      {
        title: 'Neighborhood landing pages that rank',
        desc: 'For service-area businesses: differentiated, genuinely-local pages per Miami neighborhood served. The opposite of token-swap template pages.',
      },
      {
        title: 'Sustainable cadence',
        desc: 'Specialists set up a publishing rhythm you can actually sustain — weekly or fortnightly — and the editorial workflow that produces it without overwhelming the business owner.',
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
      'Multi-year time horizons — content compounds, but compounding requires sustained input',
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
        desc: 'Hybrid workflow established — interview, voice memo, or draft format that captures your expertise, with specialist editing and SEO optimization.',
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
  },
};

export const getServiceContent = (slug: string): ServiceContent =>
  serviceContent[slug] ?? serviceContent['google-business-profile'];
