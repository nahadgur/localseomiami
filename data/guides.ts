// data/guides.ts
//
// Pillar hubs for the /guides/ tree. Each hub owns one local-SEO head term,
// aligns to a /services pillar, and links down to its child spokes
// (data/blog.ts, matched by `hub`). US English, no em dashes, Miami-framed
// throughout (named neighborhoods, US terms, Florida market specifics).
// Matching framing: we connect businesses with vetted Miami specialists; we do
// not deliver SEO ourselves. Never paraphrase the UK SEO sites.

export interface GuideBlock {
  type: 'p' | 'h3' | 'list';
  text?: string;
  items?: string[];
}

export interface GuideSection {
  id: string;
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeading: string;
  heroIntro: string;
  serviceSlug?: string;
  intro: string[];
  sections: GuideSection[];
  faqs: GuideFAQ[];
  relatedHubs: string[];
  publishDate: string;
  updatedDate: string;
}

const PUBLISHED = '2026-05-04';
const REVIEWED = '2026-06-09';

export const guides: Guide[] = [
  // H1 -------------------------------------------------------------------
  {
    slug: 'google-business-profile-optimization',
    title: 'Google Business Profile Optimization for Miami Businesses',
    metaTitle: 'Google Business Profile Optimization Miami | Local Miami SEO',
    metaDescription: 'How Miami businesses optimize their Google Business Profile to rank in local search: categories, services, photos, posts, and the fixes that move the needle.',
    heroEyebrow: 'Google Business Profile',
    heroHeading: 'Google Business Profile optimization for Miami businesses',
    heroIntro: 'Your Google Business Profile is the single most important local ranking asset you control. This guide covers what to optimize, in what order, and the mistakes that keep Miami profiles out of the map pack.',
    serviceSlug: 'google-business-profile',
    relatedHubs: ['ranking-in-the-miami-map-pack', 'google-reviews-and-reputation'],
    intro: [
      'For a local business in Miami, the Google Business Profile (GBP) is the listing that decides whether you appear in the map pack, the knowledge panel, and Google Maps. It is free, it is fully in your control, and it is where most local ranking gains are won or lost.',
      'We are a matching service. We do not run profiles ourselves; we connect Miami businesses with vetted specialists who do. This guide explains the levers so you can judge what good looks like.',
    ],
    sections: [
      {
        id: 'categories',
        heading: 'Categories drive everything',
        blocks: [
          { type: 'p', text: `Your primary category is the strongest ranking lever on the profile. Choose the most specific category that describes the business, not a broad one. A Brickell firm listed as "Personal Injury Attorney" will outrank the same firm listed as "Lawyer" for the queries that matter, because the specific category matches search intent.` },
          { type: 'p', text: `Add every relevant secondary category too, but keep the primary category tightly matched to your highest-value service.` },
        ],
      },
      {
        id: 'completeness',
        heading: 'Complete every field',
        blocks: [
          { type: 'p', text: `Google rewards complete, accurate profiles. Fill in services with descriptions, the full attribute list for your category, hours (including special hours for US holidays and storm closures), and a service area if you travel to customers rather than serving them on-site.` },
          { type: 'list', items: [
            `Services and products, each with a short description.`,
            `Attributes (accessibility, payment methods, identity attributes where they apply).`,
            `Hours plus special hours for holidays and weather closures.`,
            `A primary category that matches your top service exactly.`,
          ] },
        ],
      },
      {
        id: 'photos-posts',
        heading: 'Photos and posts',
        blocks: [
          { type: 'p', text: `Profiles with strong, regularly updated photography earn more clicks, and click-through from the map pack is itself a ranking signal. Add real photos of the location, team, and work, geotagged where possible.` },
          { type: 'p', text: `Google Posts do not directly move rankings, but weekly posts improve engagement and keep the profile looking active, which supports click-through. Alternate between offers, updates, and events.` },
        ],
      },
    ],
    faqs: [
      { question: 'What is the most important Google Business Profile setting for ranking?', answer: `The primary category. Pick the most specific category that matches your highest-value service rather than a broad one, because it aligns your profile with what people are actually searching for.` },
      { question: 'Do Google Posts help my Miami business rank?', answer: `Posts do not directly change algorithmic ranking, but weekly posts improve click-through from the map pack and keep the profile active, both of which support local performance.` },
      { question: 'Why is my Google Business Profile not showing up?', answer: `Common causes are an unverified or suspended profile, a category mismatch, thin or inconsistent information, or strong proximity competition in dense areas like Brickell or Downtown. A specialist can diagnose which applies.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H2 -------------------------------------------------------------------
  {
    slug: 'ranking-in-the-miami-map-pack',
    title: 'Ranking in the Miami Map Pack',
    metaTitle: 'How to Rank in the Miami Map Pack | Local Miami SEO',
    metaDescription: 'How the Google map pack works in Miami: the three ranking factors, why proximity is brutal in dense neighborhoods, and how to compete across Brickell, Wynwood and beyond.',
    heroEyebrow: 'Map pack',
    heroHeading: 'Ranking in the Miami map pack',
    heroIntro: 'The map pack is the three-business block at the top of local results. This guide explains how Google ranks it, why Miami is harder than most US markets, and what actually moves you up.',
    serviceSlug: 'map-pack-optimization',
    relatedHubs: ['google-business-profile-optimization', 'near-me-voice-and-mobile-local-search'],
    intro: [
      'The map pack (also called the local pack) is the set of three businesses Google shows with a map at the top of local search results. For most Miami service businesses it drives more calls and visits than the organic links beneath it.',
      'Ranking is decided by three factors Google states openly: relevance, distance, and prominence. Miami makes distance especially punishing because the business density is so high.',
    ],
    sections: [
      {
        id: 'three-factors',
        heading: 'The three ranking factors',
        blocks: [
          { type: 'p', text: `Google ranks the map pack on relevance (how well your profile matches the query), distance (how close you are to the searcher), and prominence (how well-known and well-reviewed you are). You influence relevance and prominence directly; distance you can only work around.` },
          { type: 'list', items: [
            `Relevance: categories, services, and on-profile content that match the query.`,
            `Distance: the searcher's location relative to your address or service area.`,
            `Prominence: review volume and quality, citations, links, and overall web authority.`,
          ] },
        ],
      },
      {
        id: 'proximity',
        heading: 'Why proximity is brutal in Miami',
        blocks: [
          { type: 'p', text: `In a dense area like Brickell or Downtown, a competitor three blocks closer to the searcher can outrank you on distance alone, even with a weaker profile. This is why a single business rarely ranks across the whole metro; results shift as the searcher moves between neighborhoods.` },
          { type: 'p', text: `The practical response is to maximize relevance and prominence so you win wherever proximity is not decisive, and to target the neighborhoods where you are genuinely closest.` },
        ],
      },
      {
        id: 'per-neighborhood',
        heading: 'Per-neighborhood ranking',
        blocks: [
          { type: 'p', text: `Because of proximity, ranking is best understood neighborhood by neighborhood: Brickell, Wynwood, Little Havana, Coral Gables, Coconut Grove, Doral, and so on. Track your map-pack position from multiple points across your real service area rather than a single citywide check, which can be misleading.` },
        ],
      },
    ],
    faqs: [
      { question: 'How does the Google map pack work in Miami?', answer: `Google ranks the three-business map pack on relevance, distance, and prominence. In Miami the high density of businesses makes distance especially influential, so results change as the searcher moves between neighborhoods.` },
      { question: 'Why do competitors outrank me in the map pack?', answer: `Usually one of three things: they are closer to the searcher, their profile is more relevant (better categories and services), or they have more prominence (more reviews, citations, and links). Often it is proximity in dense areas.` },
      { question: 'Can one business rank across all of Miami?', answer: `Rarely. Because distance is a ranking factor, map-pack results shift by neighborhood. The realistic goal is to dominate the neighborhoods you genuinely serve closest and compete on relevance and prominence elsewhere.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H3 -------------------------------------------------------------------
  {
    slug: 'local-citations-and-nap-consistency',
    title: 'Local Citations and NAP Consistency',
    metaTitle: 'Local Citations and NAP Consistency for Miami SEO | Local Miami SEO',
    metaDescription: 'What local citations are, the directories that matter for Miami businesses, and why NAP consistency across the web underpins map-pack trust.',
    heroEyebrow: 'Citations and NAP',
    heroHeading: 'Local citations and NAP consistency',
    heroIntro: 'Citations are mentions of your business name, address, and phone number across the web. Consistency across them is a foundational local-SEO trust signal. This guide covers what to build and what to fix.',
    serviceSlug: 'local-citation-building',
    relatedHubs: ['local-link-building', 'google-business-profile-optimization'],
    intro: [
      'A citation is any online mention of your business name, address, and phone number (NAP), with or without a link. Directories, data aggregators, and industry sites all carry them, and Google uses their consistency as a signal that your business is real and located where you say it is.',
      'Citations are foundational rather than glamorous. They will not rocket you up the rankings on their own, but inconsistent or missing citations actively hold you back.',
    ],
    sections: [
      {
        id: 'what-they-are',
        heading: 'What citations are and why they matter',
        blocks: [
          { type: 'p', text: `Citations corroborate your location and identity across the web. When the same NAP appears consistently on the major US directories and aggregators, Google has more confidence in your profile, which supports map-pack prominence.` },
        ],
      },
      {
        id: 'which-directories',
        heading: 'Which directories matter',
        blocks: [
          { type: 'p', text: `Focus on the structured-data aggregators and the major general directories before chasing volume. Quality and consistency beat quantity.` },
          { type: 'list', items: [
            `Core general directories such as Google, Apple Maps, Bing Places, Yelp, and Facebook.`,
            `Data aggregators that feed many smaller directories.`,
            `Industry and Miami-specific directories relevant to your vertical.`,
          ] },
        ],
      },
      {
        id: 'consistency',
        heading: 'NAP consistency and cleanup',
        blocks: [
          { type: 'p', text: `Inconsistent NAP (an old address, a tracking phone number on one site, a slightly different business name) confuses Google and dilutes trust. The cleanup job is to find every existing citation, correct the inconsistent ones, and remove duplicate listings, which can split your signals.` },
          { type: 'p', text: `Get this right once and keep it current whenever you move or change your number.` },
        ],
      },
    ],
    faqs: [
      { question: 'What is a local citation?', answer: `A citation is an online mention of your business name, address, and phone number (NAP), such as a directory listing. Consistent citations across the web help Google trust that your business is real and located where you say.` },
      { question: 'How many citations does a Miami business need?', answer: `There is no magic number. Accuracy and consistency on the core directories and aggregators matter far more than raw volume. A clean set on the major platforms beats hundreds of inconsistent listings.` },
      { question: 'Do duplicate listings hurt my ranking?', answer: `Yes. Duplicate listings split your reviews and signals and confuse Google about which profile is authoritative. Finding and removing duplicates is a standard part of citation cleanup.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H4 -------------------------------------------------------------------
  {
    slug: 'google-reviews-and-reputation',
    title: 'Google Reviews and Reputation for Miami Businesses',
    metaTitle: 'Google Reviews and Reputation Management Miami | Local Miami SEO',
    metaDescription: 'How Miami businesses earn more Google reviews the FTC-compliant way, why reviews affect ranking, and how to respond to negatives without making things worse.',
    heroEyebrow: 'Reviews and reputation',
    heroHeading: 'Google reviews and reputation for Miami businesses',
    heroIntro: 'Reviews are both a ranking factor and the deciding factor for many customers choosing between map-pack results. This guide covers earning them compliantly and handling the negatives.',
    serviceSlug: 'review-management',
    relatedHubs: ['google-business-profile-optimization', 'choosing-a-miami-seo-agency'],
    intro: [
      'Review volume, rating, recency, and the keywords customers use all feed into local prominence, and they heavily influence the click once you are visible. A steady flow of genuine reviews is one of the highest-leverage local-SEO activities available to a Miami business.',
      'It has to be done within the rules. The FTC and Google both prohibit incentivized or gated reviews, and getting this wrong can cost you the profile.',
    ],
    sections: [
      {
        id: 'do-they-rank',
        heading: 'Do reviews affect ranking?',
        blocks: [
          { type: 'p', text: `Yes. Review signals contribute to prominence, one of Google's three local ranking factors. Volume and ongoing recency matter, and reviews that naturally mention your service and neighborhood add relevance for those terms.` },
        ],
      },
      {
        id: 'getting-more',
        heading: 'Getting more reviews, compliantly',
        blocks: [
          { type: 'p', text: `The reliable approach is a simple, consistent ask: request a review from every satisfied customer at the right moment, and make it one tap via your review link. What you must not do is offer incentives or filter who you ask based on how happy they are.` },
          { type: 'list', items: [
            `Ask every customer, not only the ones you expect to be positive (review gating breaches FTC and Google rules).`,
            `Never pay for or incentivize reviews.`,
            `Send the request promptly, while the experience is fresh, with a direct review link.`,
          ] },
        ],
      },
      {
        id: 'responding',
        heading: 'Responding to reviews',
        blocks: [
          { type: 'p', text: `Respond to every review, positive and negative. For negatives, stay calm, acknowledge the issue, avoid sharing private details, and move the detail offline. A measured public response reassures future customers far more than the original complaint worries them.` },
        ],
      },
    ],
    faqs: [
      { question: 'Do Google reviews help my Miami business rank?', answer: `Yes. Review volume, rating, and recency feed into prominence, one of Google's three local ranking factors, and reviews that mention your service and neighborhood add relevance for those terms.` },
      { question: 'Can I offer a discount for leaving a review?', answer: `No. Incentivized reviews breach both Google's policies and the FTC rules on endorsements. Ask every customer for honest feedback without any incentive, and never filter based on how happy they seem.` },
      { question: 'How should I respond to a negative review?', answer: `Respond promptly and calmly, acknowledge the concern, keep private details out of the public reply, and offer to resolve it offline. A professional response reassures prospective customers reading later.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H5 -------------------------------------------------------------------
  {
    slug: 'on-page-local-seo',
    title: 'On-Page Local SEO for Miami Websites',
    metaTitle: 'On-Page Local SEO for Miami Websites | Local Miami SEO',
    metaDescription: 'On-page local SEO for Miami businesses: title tags and meta, headers, keyword research and intent, optimizing service pages, and internal linking.',
    heroEyebrow: 'On-page',
    heroHeading: 'On-page local SEO for Miami websites',
    heroIntro: 'Your website still matters alongside the Google Business Profile. This guide covers the on-page work that helps Miami service and location pages rank in organic and support the map pack.',
    serviceSlug: 'on-page-local-seo',
    relatedHubs: ['technical-seo-for-local-business', 'local-content-strategy'],
    intro: [
      'On-page SEO is everything you control on your own pages: titles, headers, content, and internal links. For a local Miami business it is how your service and neighborhood pages earn organic rankings and reinforce the relevance signals behind your map-pack performance.',
      'The goal is pages that clearly match what a Miami searcher wants, written for people first and structured so Google can read them.',
    ],
    sections: [
      {
        id: 'titles-meta',
        heading: 'Title tags and meta descriptions',
        blocks: [
          { type: 'p', text: `The title tag is still one of the strongest on-page signals. For a local page, lead with the service and the location, for example "Water Damage Restoration in Coral Gables". Keep it within roughly 60 characters so it does not truncate. The meta description does not rank but drives click-through, so write it to sell the click.` },
        ],
      },
      {
        id: 'intent',
        heading: 'Keyword research and search intent',
        blocks: [
          { type: 'p', text: `Match the page to intent. A "near me" or "[service] [neighborhood]" query wants a local landing page with a clear offer and proof; an informational query wants a guide. Map your keywords to the right page type rather than forcing everything onto the homepage.` },
        ],
      },
      {
        id: 'service-pages',
        heading: 'Optimizing service and location pages',
        blocks: [
          { type: 'p', text: `Each core service deserves its own page with a specific title, a clear H1, genuinely useful content, and internal links to related services and relevant neighborhood pages. Avoid spinning up dozens of thin neighborhood pages that differ only by name; build location content with real local substance instead.` },
          { type: 'list', items: [
            `One focused page per core service, with a specific title and H1.`,
            `Internal links between related services and relevant location pages.`,
            `Local proof: real projects, named neighborhoods, and specifics.`,
          ] },
        ],
      },
    ],
    faqs: [
      { question: 'What should a local Miami title tag look like?', answer: `Lead with the service and the location, for example "Emergency Plumber in Brickell, Miami", and keep it within about 60 characters so it does not truncate in results. Make each page's title unique.` },
      { question: 'Should I make a page for every Miami neighborhood?', answer: `Only where you can write genuinely useful, distinct local content. Dozens of near-identical neighborhood pages are thin content and can hurt you. Build location pages with real local substance instead.` },
      { question: 'Does the meta description affect ranking?', answer: `Not directly, but it strongly affects click-through from the results page, which matters. Write it to earn the click and accurately describe the page.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H6 -------------------------------------------------------------------
  {
    slug: 'local-link-building',
    title: 'Local Link Building for Miami Businesses',
    metaTitle: 'Local Link Building for Miami Businesses | Local Miami SEO',
    metaDescription: 'Safe local link building for Miami businesses: what makes a good backlink, earning genuine local links through sponsorships and press, and the links to avoid.',
    heroEyebrow: 'Link building',
    heroHeading: 'Local link building for Miami businesses',
    heroIntro: 'Links from relevant, trusted sites build the authority behind your rankings. This guide covers earning genuine local Miami links and steering clear of the schemes that get sites penalized.',
    serviceSlug: 'local-link-building',
    relatedHubs: ['local-citations-and-nap-consistency', 'local-content-strategy'],
    intro: [
      'Backlinks remain one of the strongest authority signals in search. For a local business, the most valuable links are relevant and local: from Miami organizations, press, and partners that genuinely connect to your business.',
      'Link building done badly is one of the few SEO activities that can actively harm you, so the priority is safe, earned links rather than bought ones.',
    ],
    sections: [
      {
        id: 'what-makes-good',
        heading: 'What makes a good backlink',
        blocks: [
          { type: 'p', text: `A good link is relevant (from a site related to your industry or your city), from a genuinely trusted source, and earned editorially rather than paid for or self-placed at scale. One link from a respected Miami publication is worth more than hundreds from low-quality directories.` },
        ],
      },
      {
        id: 'local-links',
        heading: 'Earning local Miami links',
        blocks: [
          { type: 'p', text: `The most durable local links come from real-world activity. Sponsor a local event or team, partner with complementary Miami businesses, contribute expertise to local press, or support a community organization. Each creates a natural reason for a relevant local site to link to you.` },
          { type: 'list', items: [
            `Local sponsorships (events, sports teams, charities).`,
            `Press and digital PR with a genuine Miami news angle.`,
            `Partnerships with complementary local businesses.`,
          ] },
        ],
      },
      {
        id: 'toxic',
        heading: 'Links to avoid',
        blocks: [
          { type: 'p', text: `Avoid bought links, private blog networks, mass low-quality directories, and irrelevant foreign sites. These violate Google's link spam policies and can trigger ranking suppression. If an offer promises hundreds of links cheaply and fast, treat it as a warning sign.` },
        ],
      },
    ],
    faqs: [
      { question: 'What is the best way to build local links in Miami?', answer: `Earn them through real-world activity: local sponsorships, partnerships with complementary Miami businesses, and digital PR with a genuine local news angle. Relevant, earned links from trusted local sites are the most durable.` },
      { question: 'Can buying backlinks hurt my Miami business?', answer: `Yes. Bought links and link schemes violate Google's policies and can suppress your rankings. Focus on earned, relevant links rather than volume from low-quality sources.` },
      { question: 'How many backlinks do I need to rank?', answer: `There is no fixed number. A handful of relevant, trusted local links typically outperforms a large volume of low-quality ones. Quality and relevance matter more than count.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H7 -------------------------------------------------------------------
  {
    slug: 'local-content-strategy',
    title: 'Local Content Strategy for Miami SEO',
    metaTitle: 'Local Content Strategy for Miami SEO | Local Miami SEO',
    metaDescription: 'A local content strategy for Miami businesses: content that actually ranks, building neighborhood and service-area pages without thin content, and seasonal Miami demand.',
    heroEyebrow: 'Content strategy',
    heroHeading: 'Local content strategy for Miami SEO',
    heroIntro: 'Content earns rankings, links, and trust when it answers what local searchers actually want. This guide covers building a Miami content program that ranks without slipping into thin, templated pages.',
    serviceSlug: 'local-content-strategy',
    relatedHubs: ['on-page-local-seo', 'local-link-building'],
    intro: [
      'Local content strategy is the deliberate plan for the pages and articles that will earn your business rankings and links over time. For a Miami business it means service pages, genuinely local landing content, and helpful guides that match real demand.',
      'The trap to avoid is mass-producing near-identical pages. Google rewards distinct, useful content and discounts thin, templated pages.',
    ],
    sections: [
      {
        id: 'what-ranks',
        heading: 'Local content that ranks',
        blocks: [
          { type: 'p', text: `Content ranks when it matches intent and offers real value: a clear answer, local specifics, and a reason to trust you. For service businesses that usually means strong service pages, supported by guides that answer the questions customers ask before buying.` },
        ],
      },
      {
        id: 'neighborhood-content',
        heading: 'Neighborhood content without thin pages',
        blocks: [
          { type: 'p', text: `Neighborhood and service-area pages work when each one carries real local substance: the specific areas served, local context, real examples, and a genuine offer. They fail when they are the same page with the neighborhood name swapped in. If you cannot write something genuinely useful and distinct for a neighborhood, do not publish a page for it.` },
        ],
      },
      {
        id: 'seasonal',
        heading: 'Seasonal Miami demand',
        blocks: [
          { type: 'p', text: `Miami has distinct seasonal patterns, from hurricane season to the winter influx, that shift what customers search for. Planning content around those cycles, and publishing ahead of demand, captures traffic competitors who post reactively will miss.` },
        ],
      },
    ],
    faqs: [
      { question: 'What kind of content ranks for local SEO in Miami?', answer: `Content that matches search intent and adds real value: strong service pages, genuinely local landing content, and helpful guides answering pre-purchase questions, all with local specifics and a clear offer.` },
      { question: 'Are neighborhood landing pages worth it?', answer: `Yes, when each one carries real local substance. They backfire when they are near-identical pages with only the neighborhood name changed, which Google treats as thin content. Only publish a neighborhood page you can make genuinely useful.` },
      { question: 'Should a local business blog for SEO?', answer: `A focused blog that answers customer questions and targets local intent supports rankings and gives you something to earn links and reviews around. Quality and relevance matter far more than frequency.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H8 -------------------------------------------------------------------
  {
    slug: 'near-me-voice-and-mobile-local-search',
    title: '"Near Me", Voice and Mobile Local Search',
    metaTitle: 'Near Me, Voice and Mobile Local Search Miami | Local Miami SEO',
    metaDescription: 'How Miami businesses win "near me", voice, and mobile local searches: the signals behind them, local intent keywords, "open now", and local schema.',
    heroEyebrow: 'Near me and voice',
    heroHeading: '"Near me", voice and mobile local search',
    heroIntro: 'A large share of Miami local searches happen on a phone, on the move, often by voice and often "near me". This guide covers what drives those results and how to be the answer.',
    serviceSlug: 'google-business-profile',
    relatedHubs: ['ranking-in-the-miami-map-pack', 'google-business-profile-optimization'],
    intro: [
      '"Near me" searches do not need the user to name a location; Google infers it from the device. Voice assistants and mobile search lean heavily on the same local signals, usually returning a single best answer or a short map pack.',
      'There is no separate "near me" ranking system. Winning these searches comes down to the same fundamentals done well, plus a few mobile-specific details.',
    ],
    sections: [
      {
        id: 'how-near-me-works',
        heading: 'How "near me" search works',
        blocks: [
          { type: 'p', text: `"Near me" results are driven by the map pack: relevance, distance, and prominence. A complete, well-categorized Google Business Profile with strong reviews is what makes you eligible to be the "near me" answer in your area. You do not need the phrase "near me" anywhere on your site.` },
        ],
      },
      {
        id: 'mobile-open-now',
        heading: 'Mobile and "open now"',
        blocks: [
          { type: 'p', text: `Mobile searchers act fast, so accurate hours, a tap-to-call number, and a fast mobile site matter. "Open now" filters out closed businesses entirely, so keeping hours (and special hours for holidays and storm closures) current directly affects whether you appear at all.` },
        ],
      },
      {
        id: 'local-schema',
        heading: 'Local schema and intent keywords',
        blocks: [
          { type: 'p', text: `LocalBusiness structured data helps search engines understand your name, address, phone, hours, and area served. Combined with content that targets natural local intent phrases (the way people actually speak a request), it supports your eligibility for voice and "near me" results.` },
        ],
      },
    ],
    faqs: [
      { question: 'How do I rank for "near me" searches in Miami?', answer: `There is no separate "near me" system. Rank by strengthening the map-pack fundamentals: a complete, well-categorized Google Business Profile, strong reviews, accurate hours, and proximity to your service area. You do not need "near me" on your site.` },
      { question: 'Does voice search need different SEO?', answer: `Voice draws on the same local signals as the map pack, often returning a single answer. Accurate profile data, strong reviews, and natural-language content covering how people actually ask for your service all help.` },
      { question: 'Why does "open now" matter for ranking?', answer: `The "open now" filter removes closed businesses from results entirely, so inaccurate or outdated hours can make you disappear at the moment a customer is ready to act. Keep regular and special hours current.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H9 -------------------------------------------------------------------
  {
    slug: 'technical-seo-for-local-business',
    title: 'Technical SEO for Local Business Websites',
    metaTitle: 'Technical SEO for Local Business Sites | Local Miami SEO',
    metaDescription: 'Technical SEO essentials for Miami local business websites: Core Web Vitals and page speed, mobile-first, crawling and indexing, and schema basics.',
    heroEyebrow: 'Technical SEO',
    heroHeading: 'Technical SEO for local business websites',
    heroIntro: 'Technical SEO is the plumbing that lets your content rank at all. This guide covers the essentials a Miami local business site needs, without the jargon.',
    serviceSlug: 'on-page-local-seo',
    relatedHubs: ['on-page-local-seo', 'ranking-in-the-miami-map-pack'],
    intro: [
      'Technical SEO makes sure search engines can crawl, render, and index your site, and that the experience is fast and mobile-friendly. You do not need to be a developer to know what good looks like, but the basics have to be in place before content work pays off.',
      'For most local Miami businesses this is a small, finite checklist rather than an endless project.',
    ],
    sections: [
      {
        id: 'core-web-vitals',
        heading: 'Core Web Vitals and page speed',
        blocks: [
          { type: 'p', text: `Core Web Vitals measure loading, interactivity, and visual stability. Slow pages lose both rankings and customers, and mobile users on the move are especially impatient. Compress images, limit heavy scripts, and use a quality host so pages load fast on a phone.` },
        ],
      },
      {
        id: 'mobile-crawl',
        heading: 'Mobile-first, crawling and indexing',
        blocks: [
          { type: 'p', text: `Google indexes the mobile version of your site, so it must be fully usable on a phone. Make sure important pages are crawlable and indexable (not blocked by robots rules or stray noindex tags), submit a clean sitemap, and check Search Console for coverage issues.` },
          { type: 'list', items: [
            `A mobile layout that works, not just shrinks.`,
            `A clean XML sitemap and no accidental noindex on key pages.`,
            `Search Console monitoring for crawl and index errors.`,
          ] },
        ],
      },
      {
        id: 'schema',
        heading: 'Schema basics',
        blocks: [
          { type: 'p', text: `LocalBusiness schema gives search engines structured facts about your business: name, address, phone, hours, and area served. It will not rank you on its own, but it helps engines understand and present your business correctly, which supports local results.` },
        ],
      },
    ],
    faqs: [
      { question: 'Do Core Web Vitals affect my Miami business rankings?', answer: `Yes, page experience including Core Web Vitals is a ranking factor, and slow pages also lose customers, especially mobile users. Fast loading on a phone is the priority.` },
      { question: 'What is mobile-first indexing?', answer: `Google indexes the mobile version of your website rather than the desktop version. If your site is hard to use on a phone, it can hurt rankings, so the mobile experience must be fully functional.` },
      { question: 'Does my local site need schema markup?', answer: `LocalBusiness schema helps search engines understand your core details and present them correctly. It is a supporting signal rather than a ranking lever on its own, but it is worth having in place.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H10 ------------------------------------------------------------------
  {
    slug: 'choosing-a-miami-seo-agency',
    title: 'AI Search and Choosing a Miami SEO Agency',
    metaTitle: 'Choosing a Miami SEO Agency (and AI Search) | Local Miami SEO',
    metaDescription: 'How to choose a Miami local SEO agency: what to expect from a campaign, the red flags to avoid, how AI search changes local, and how our free matching works.',
    heroEyebrow: 'AI search and choosing an agency',
    heroHeading: 'AI search and choosing a Miami SEO agency',
    heroIntro: 'Picking the right partner is the decision that determines your results. This guide covers what a good Miami local-SEO engagement looks like, the red flags, how AI search is changing local, and how our matching works.',
    relatedHubs: ['google-reviews-and-reputation', 'ranking-in-the-miami-map-pack'],
    intro: [
      'Local SEO is competitive and slow to compound, so the quality of the specialist you choose matters more than almost anything else. This guide helps you judge an agency before you commit, and explains how the matching service works.',
      'We do not deliver SEO ourselves. We connect Miami businesses with vetted specialists and stay out of the way once you are matched.',
    ],
    sections: [
      {
        id: 'what-to-expect',
        heading: 'What to expect from a campaign',
        blocks: [
          { type: 'p', text: `Good local SEO is methodical: an audit, profile and citation cleanup, on-page and content work, reviews, and links, with progress reported transparently. Early movement often shows on long-tail queries within a few months, with map-pack gains building over time. Anyone promising instant page-one rankings is not being honest.` },
        ],
      },
      {
        id: 'red-flags',
        heading: 'Red flags when choosing',
        blocks: [
          { type: 'p', text: `Walk away from guaranteed rankings, secret or proprietary "tricks", bought links, long lock-in contracts with no reporting, and anyone who will not explain in plain terms what they will do. Ask for references and recent local results, and make sure you own your accounts and data.` },
          { type: 'list', items: [
            `Guarantees of specific rankings or instant results.`,
            `No transparent reporting or unwillingness to explain the plan.`,
            `Link schemes or anything that violates Google's policies.`,
            `Contracts where you do not own your own profile and website.`,
          ] },
        ],
      },
      {
        id: 'ai-search',
        heading: 'AI search and getting recommended',
        blocks: [
          { type: 'p', text: `AI Overviews and assistant answers increasingly summarize local options. The signals that earn a recommendation overlap heavily with classic local SEO: a strong, consistent profile, genuine reviews, clear and trustworthy content, and authority. Doing the fundamentals well is still the best way to be the business AI surfaces.` },
        ],
      },
      {
        id: 'how-matching-works',
        heading: 'How our matching works',
        blocks: [
          { type: 'p', text: `Tell us about your business and goals and we connect you with vetted Miami local-SEO specialists suited to your vertical and budget. The matching is free for businesses, with no obligation. We do not take over the work; we make the introduction.` },
        ],
      },
    ],
    faqs: [
      { question: 'How do I choose a Miami SEO agency?', answer: `Look for transparent reporting, a clear plan explained in plain terms, references and recent local results, and policies that keep you in ownership of your profile and site. Avoid anyone guaranteeing specific rankings or using link schemes.` },
      { question: 'How long does local SEO take to work?', answer: `Expect early movement on long-tail queries within a few months and map-pack gains building over time. Local SEO compounds; anyone promising instant page-one results is overpromising.` },
      { question: 'Does AI search change local SEO?', answer: `AI Overviews and assistants increasingly summarize local options, but the signals that earn a recommendation overlap with classic local SEO: a strong consistent profile, genuine reviews, trustworthy content, and authority. The fundamentals still win.` },
    ],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },
];

export const GUIDE_SLUGS = guides.map(g => g.slug);

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
