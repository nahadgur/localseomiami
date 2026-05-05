// data/services.ts
export interface FAQ { question: string; answer: string; }
export interface Service {
  id: string;
  title: string;
  slug: string;
  shortLabel: string;
  description: string;
  icon: string;
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    id: 'google-business-profile',
    title: 'Google Business Profile optimization',
    slug: 'google-business-profile',
    shortLabel: 'Google Business Profile (GBP) optimization',
    description:
      'The single highest-leverage local SEO asset. Specialists optimize categories, services, attributes, photos, posts, Q&A, and the GBP signal stack that drives Map Pack ranking. Most Miami businesses see 30–60% improvement in GBP-driven calls within 90 days of correct optimization.',
    icon: 'MapPin',
    faqs: [
      {
        question: 'My Google Business Profile is already verified. What is there to optimize?',
        answer:
          'Verification is just the entry ticket. The optimization stack is much deeper: primary and secondary category selection (often the single biggest ranking lever), service-area definition, service list with descriptions and pricing, photo cadence and tagging, weekly Posts, Q&A seeding and monitoring, attribute completeness, and the products/services modules. Most "verified" GBPs are completing 30–40% of the available signal stack. Getting to 90%+ moves rankings.',
      },
      {
        question: 'Should I use my home address or a service area for my GBP?',
        answer:
          'Service-area businesses without public-facing premises (plumbers, electricians, mobile services) should hide the address and define the service area. Storefront businesses should use the storefront address. Hybrid businesses (consultants who see clients at home AND travel) face a real choice; the specialist will explain the tradeoff. Wrong selection here causes either suspension (showing a hidden home address) or weaker rankings (treating a storefront like a service-area business).',
      },
      {
        question: 'Do GBP posts actually help rankings?',
        answer:
          'Indirectly. Posts don\'t move ranking algorithmically (Google has been clear about this), but they materially improve click-through rate from the Map Pack and the knowledge panel. Higher CTR from impressions is itself a ranking signal. Practically: posts work, just not via the path most agencies claim.',
      },
    ],
  },

  {
    id: 'local-citation-building',
    title: 'Local citation building & cleanup',
    slug: 'local-citation-building',
    shortLabel: 'Local citation building & cleanup',
    description:
      'Citations (your NAP, Name, Address and Phone, listed on directories and review sites) are the third-largest local ranking factor after GBP and reviews. Specialists clean up inconsistent or duplicate listings, build out missing high-value citations, and monitor for ongoing data corruption.',
    icon: 'List',
    faqs: [
      {
        question: 'How many citations do I actually need?',
        answer:
          'For most Miami small businesses, 30–60 high-quality citations cover the practical ceiling: Apple Maps, Yelp, BBB, the major industry-specific directories, local Miami-area business directories, and a handful of niche directories relevant to your sector. The "build 200 citations" packages from cheap services usually waste budget on low-quality directories that no one uses.',
      },
      {
        question: 'My business name is slightly different on different sites. Does that matter?',
        answer:
          'Yes, more than most realize. Inconsistent NAP data confuses Google\'s entity matching. When "Joe\'s Plumbing" on Yelp doesn\'t match "Joe\'s Plumbing LLC" on the BBB and "Joe Plumbing" on Apple Maps, the algorithm treats these as potentially three different businesses. Citation consistency cleanup is often the highest-impact week of work in a new local SEO engagement.',
      },
      {
        question: 'Can\'t I just submit to all the directories myself?',
        answer:
          'You can, but the cleanup work is harder than the build work. Removing duplicates, claiming abandoned listings created by automated aggregators, and fixing legacy data inconsistencies often requires verification calls, postcard verification, or specialist relationships with directory operators. DIY citation building works for the easy 20%. The messy long tail is what specialists do efficiently.',
      },
    ],
  },

  {
    id: 'review-management',
    title: 'Review acquisition & management',
    slug: 'review-management',
    shortLabel: 'Review acquisition & management',
    description:
      'Reviews are the second-largest local ranking factor and the largest conversion factor. Specialists set up systematic review request workflows (post-purchase, post-service), respond to reviews professionally, and manage negative review situations within Google\'s policies.',
    icon: 'Star',
    faqs: [
      {
        question: 'How many reviews do I need to compete?',
        answer:
          'Depends entirely on your sector and Miami sub-market. A Brickell law firm may need 100+ reviews to compete in the Map Pack; a Coral Gables boutique may rank well at 30. The right benchmark is your top 3 competitors\' average review count plus 25%. The matched specialist will tell you what your actual benchmark is, not a generic "more is better" answer.',
      },
      {
        question: 'Is it OK to incentivize reviews?',
        answer:
          'No. Google\'s review policy explicitly prohibits offering anything of value (discounts, freebies, contest entries) in exchange for reviews. Violating this risks GBP suspension. Specialists structure review requests around timing (right after positive customer interaction) and ease (single-click links), not incentives.',
      },
      {
        question: 'What about negative reviews, can they be removed?',
        answer:
          'Only if they violate Google\'s policies (fake, off-topic, conflict of interest, illegal content). Genuine-but-negative reviews cannot be removed. The professional response strategy (acknowledge, take the conversation offline, demonstrate the issue is being handled) actually converts better than no negatives at all. A 5.0 average looks suspicious; a 4.6 with thoughtful responses to occasional 3-star reviews looks human.',
      },
    ],
  },

  {
    id: 'on-page-local-seo',
    title: 'On-page local SEO',
    slug: 'on-page-local-seo',
    shortLabel: 'On-page local SEO (schema, content, technical)',
    description:
      'The website-side work, local schema markup, location-specific landing pages, internal linking, page-speed optimization, and the technical foundations Google uses to confirm geographic relevance. Often the difference between ranking 4th and 1st in the Map Pack.',
    icon: 'Code',
    faqs: [
      {
        question: 'Do I need separate landing pages for every Miami neighborhood I serve?',
        answer:
          'For service-area businesses (plumbers, electricians, cleaners), yes, with caveats. A single landing page per major neighborhood you actually serve, each with genuinely different content (testimonials specific to that area, neighborhood-relevant photos, local landmarks for context). Token-swap pages where you replace "Brickell" with "Wynwood" and call it done are penalized. Real differentiation, real local relevance.',
      },
      {
        question: 'What is local schema and why does it matter?',
        answer:
          'Schema is structured data markup that tells Google explicitly "this is a LocalBusiness, this is its address, this is its phone number, these are its opening hours, this is its service area." The major search engines have stated that proper schema improves ranking and rich-result eligibility. Most Miami small business websites have either no schema or wrong schema. Fixing this is one of the highest-leverage technical interventions.',
      },
      {
        question: 'How does page speed affect local SEO?',
        answer:
          'Page speed is a confirmed Google ranking factor (Core Web Vitals) and a major conversion factor. Every additional second of load time costs ~10% of your conversions. For local SEO specifically, mobile page speed matters most because most local search is mobile. Specialists optimize Largest Contentful Paint, Cumulative Layout Shift, and mobile responsiveness as part of any meaningful retainer.',
      },
    ],
  },

  {
    id: 'local-link-building',
    title: 'Local link building',
    slug: 'local-link-building',
    shortLabel: 'Local link building',
    description:
      'Backlinks from Miami-area publications, local business associations, charity partnerships, sponsorships, and Miami-relevant industry sites. Local links are a different ranking factor from generic SEO link building. Proximity-and-prominence focused, not just domain authority.',
    icon: 'Link',
    faqs: [
      {
        question: 'How do I get local Miami publications to link to my business?',
        answer:
          'Sponsorships of local events, awards programs (like Miami Herald\'s "Best of" lists), guest contributions to industry publications, partnerships with local charities, and being interviewed as a local expert. None of these are quick, most quality local links take 3–6 months from outreach to publication. The specialist plans the campaign and handles the outreach, but the relationships are yours to maintain.',
      },
      {
        question: 'Are paid local directory links worth it?',
        answer:
          'Some are, most aren\'t. The Miami Chamber of Commerce, well-known local trade associations, and a few high-quality Miami-specific business directories pass real link value. The "pay $50 to be listed in 100 directories" services pass nothing. Google has long since discounted those.',
      },
      {
        question: 'Should I be guest-posting on national sites for local SEO?',
        answer:
          'Generally no for Map Pack rankings, national authority links help blue-link organic SEO but contribute less to Map Pack signals. For local SEO, a guest post in the Miami New Times is worth more than one in TechCrunch. Optimize for local relevance, not generic authority.',
      },
    ],
  },

  {
    id: 'map-pack-optimization',
    title: 'Map Pack ranking strategy',
    slug: 'map-pack-optimization',
    shortLabel: 'Map Pack 3-pack ranking strategy',
    description:
      'The integrated strategy across GBP, reviews, citations, and on-page that puts your business in the top 3 results for high-value local queries. This is what most clients actually want when they say "local SEO": the layer above the individual tactical services.',
    icon: 'Target',
    faqs: [
      {
        question: 'Can you guarantee top-3 Map Pack ranking?',
        answer:
          'No reputable specialist will guarantee specific rankings. Any agency that does is lying. Map Pack rankings are driven by Google\'s algorithm and competitor activity, both of which are outside any specialist\'s control. What specialists can guarantee: methodical execution of the proven ranking factor stack, transparent reporting of progress, and a realistic 6–9 month roadmap for competitive queries.',
      },
      {
        question: 'What kind of queries can realistically get into the Map Pack?',
        answer:
          'Most "service + city" and "service + neighborhood" queries are achievable for properly-optimized businesses with sufficient reviews. Highly competitive verticals in Miami (real estate, personal injury law, plastic surgery, dentistry in Brickell) require longer timelines and bigger investments: typically 9–12 months for top-3 placement against established competitors.',
      },
      {
        question: 'How do I track Map Pack rankings?',
        answer:
          'Generic "rank tracking" tools (Ahrefs, SEMrush) do not accurately track Map Pack, geographic ranking varies by where the searcher is physically standing. Local-specific tools (Local Falcon, BrightLocal Local Search Grid) track ranking across geographic grids around your location. Most matched specialists include grid-based tracking in retainers as standard.',
      },
    ],
  },

  {
    id: 'local-content-strategy',
    title: 'Local content strategy',
    slug: 'local-content-strategy',
    shortLabel: 'Local content strategy',
    description:
      'Editorial content built around Miami-relevant topics, neighborhood-specific landing pages, "best of" content for your service category, and the local-intent blog content that captures long-tail queries before competitors do. Ongoing rather than one-off.',
    icon: 'FileText',
    faqs: [
      {
        question: 'How often should I publish local content?',
        answer:
          'Once per week for most small businesses, once per two weeks for service businesses with limited topical breadth. Less than monthly is below the threshold for meaningful momentum. More than weekly is generally counterproductive. Quality drops faster than quantity helps.',
      },
      {
        question: 'Should I write the content myself or have the specialist do it?',
        answer:
          'Whichever produces better content. Specialists typically charge $200–$500 per local article, worth it if you don\'t have the time, but the result is generic if the writer doesn\'t actually know your business. Many of the strongest local content programs use a hybrid: business owner provides the expertise via interview or voice memo, specialist edits and polishes for SEO and readability.',
      },
      {
        question: 'Does AI-generated content work for local SEO?',
        answer:
          'Pure AI-generated local content underperforms genuine human content meaningfully, not because Google detects AI per se, but because AI content is generic, light on specific local detail, and doesn\'t answer the specific questions Miami searchers are asking. The strong programs use AI as an editor and ideation tool, not as the writer.',
      },
    ],
  },
];

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find(s => s.slug === slug);
