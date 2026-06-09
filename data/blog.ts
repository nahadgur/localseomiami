// data/blog.ts
// Hand-written blog content. Start with 4 posts; add as you go.
// All posts are non-AI hand-written for genuine local SEO authority signals.

export interface ContentBlock {
  type: 'p' | 'h2' | 'h3' | 'list' | 'note';
  text?: string;
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Strategy' | 'GBP' | 'Reviews' | 'Local';
  hub: string;                 // parent guide-hub slug
  draft: boolean;              // draft:true 404s and is excluded everywhere
  publishDate: string;
  dateModified?: string;
  excerpt: string;
  faqs?: { question: string; answer: string }[];
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'why-miami-local-seo-takes-longer-than-other-cities',
    hub: 'ranking-in-the-miami-map-pack',
    draft: false,
    title: 'Why Miami local SEO takes longer than most other US cities',
    metaTitle: 'Why Miami Local SEO Takes Longer (2026)',
    metaDescription:
      'Miami local SEO timelines are longer than typical US cities. Here is why: competitive density, bilingual market dynamics, and what realistic ranking timelines look like.',
    category: 'Strategy',
    publishDate: '2026-05-04',
    excerpt:
      'Most agencies promise local SEO results in 30–90 days. In Miami, that timeline is honest only for the easiest 20% of businesses. Here is what is different about ranking in Miami and what realistic timelines actually look like.',
    content: [
      { type: 'p', text: 'Local SEO timelines vary materially by city. The "30 days to first page" pitch you see in agency marketing is achievable in some smaller US markets, against weak competitors, for low-volume queries. In Miami, that timeline is honest only for businesses competing in low-density verticals or specific neighborhoods where local SEO investment has been historically light.' },
      { type: 'p', text: 'For most Miami businesses, especially those in Brickell, Coral Gables, South Beach, and the major commercial centers, realistic Map Pack ranking takes 6–12 months for competitive queries. Here is why.' },

      { type: 'h2', text: 'Reason 1: Competitive density is high' },
      { type: 'p', text: 'Miami is the third-largest US city by metropolitan population (behind only New York and Los Angeles), and a major international business center. The professional services and hospitality verticals are extremely well-served, meaning the businesses you\'re competing against for Map Pack ranking are often well-resourced, well-organized, and already running sophisticated local SEO programs.' },
      { type: 'p', text: 'A Brickell law firm competing for "Miami corporate lawyer" is typically up against firms with 200+ Google Reviews, 50+ citations, multiple Miami press placements, full GBP optimization, and an active blog. Catching that profile from zero takes time. Usually 9–12 months of methodical work.' },

      { type: 'h2', text: 'Reason 2: The bilingual market doubles the work' },
      { type: 'p', text: 'Roughly 70% of Miami-Dade residents speak Spanish at home. For businesses serving the Hispanic market (restaurants in Little Havana, professional services in Doral, retail across the city) local SEO is genuinely bilingual work. Spanish keyword research, Spanish GBP descriptions, Spanish content programs, Spanish review responses.' },
      { type: 'p', text: 'Bilingual local SEO is not "twice the work" exactly, but it is materially more work than English-only. Specialists who try to copy English work into Spanish via translation underperform meaningfully against specialists who research the Spanish keywords independently and produce native-quality Spanish content.' },

      { type: 'h2', text: 'Reason 3: Multi-platform optimization is broader' },
      { type: 'p', text: 'For tourism-vertical businesses on South Beach, Wynwood, and Coconut Grove, the platform mix extends well beyond Google. TripAdvisor matters more than Google in some segments. OpenTable drives restaurant bookings. Booking.com and Expedia drive hotel reservations. Yelp ranks above Google for some local query types and demographics.' },
      { type: 'p', text: 'Properly optimizing across 4–6 platforms takes longer than optimizing for Google alone. The work is not duplicative, each platform has its own ranking algorithm, its own optimization playbook, and its own review acquisition strategy.' },

      { type: 'h2', text: 'Reason 4: Citation cleanup is harder in older Miami businesses' },
      { type: 'p', text: 'Many established Miami businesses have decades of digital presence, multiple business name variations, multiple addresses (relocations, expansions, contractions), multiple phone numbers (acquired during merger or rebrand), and the citation data corruption that accumulates over 10+ years.' },
      { type: 'p', text: 'Cleaning up an established Miami business\'s citation profile often takes 6–8 weeks of focused work: claiming abandoned listings, correcting inconsistent NAP data, deleting duplicates introduced by automated aggregators. The cleanup typically pays back materially in ranking improvement, but it is not fast work.' },

      { type: 'h2', text: 'What does a realistic Miami timeline look like?' },
      { type: 'list', items: [
        'Months 1–2: GBP audit and optimization, citation audit and cleanup, on-page audit. Foundation work, no ranking movement yet.',
        'Months 3–4: First citations built, review acquisition system live, first content published. Early ranking movement on long-tail queries.',
        'Months 5–7: Continued citation building, first link placements, content cadence established. Meaningful Map Pack movement on mid-competitive queries.',
        'Months 8–12: Sustained execution, top-3 placement on competitive queries, leveraging accumulated authority for harder targets.',
      ] },
      { type: 'p', text: 'This is the realistic shape for a competitive Miami vertical. Faster timelines exist, but only for genuinely lower-competition situations. Any specialist promising "30-day Map Pack ranking" for a competitive Miami query is either lying or planning to disappear after the third invoice.' },

      { type: 'h2', text: 'How to evaluate proposed timelines' },
      { type: 'p', text: 'When a specialist proposes a timeline, ask:' },
      { type: 'list', items: [
        'What is your competitive analysis showing? (You should see specific competitor citation counts, review counts, and link profiles.)',
        'What ranking factors are you addressing in months 1–3 vs 4–6 vs 7–12? (Real strategy distinguishes between foundation, building, and competitive phases.)',
        'What are the top 3 risks to my timeline? (Honest specialists name specific risks; sales-pitch specialists wave them away.)',
        'How will we know if we\'re behind schedule? (Specific milestones with specific metrics.)',
      ] },
      { type: 'p', text: 'A specialist who can answer all four questions specifically has thought about your situation. A specialist who answers in generalities is selling you a generic playbook that may or may not fit your situation.' },
    ],
  },

  {
    slug: 'google-business-profile-mistakes-miami-businesses-make',
    hub: 'google-business-profile-optimization',
    draft: false,
    title: 'Google Business Profile mistakes Miami businesses make most often',
    metaTitle: 'GBP Mistakes Miami Businesses Make (2026)',
    metaDescription:
      'The most common Google Business Profile errors we see in Miami audits. Category misalignment, wrong service-area setup, photo policy violations, and how to fix them.',
    category: 'GBP',
    publishDate: '2026-05-04',
    excerpt:
      'Most Miami business GBPs are completing only 30–40% of the available signal stack. The missing 60% includes the highest-impact ranking levers. Here are the mistakes we see most often.',
    content: [
      { type: 'p', text: 'When we audit Miami business Google Business Profiles, the same mistakes appear repeatedly. Most are not technically broken (the GBP is verified, the basic info is right), but the signal stack that actually drives ranking is incomplete or actively misconfigured.' },
      { type: 'p', text: 'Here are the GBP mistakes we see most often in Miami audits, ranked by ranking-impact severity.' },

      { type: 'h2', text: 'Mistake 1: Wrong primary category' },
      { type: 'p', text: 'Primary category selection is the single biggest GBP ranking lever, and the most commonly mis-set field. Many Miami businesses chose their primary category at signup years ago, before Google had introduced more specific subcategories, and have never revisited the choice.' },
      { type: 'p', text: 'Example: a personal injury law firm in Brickell with primary category "Lawyer" instead of "Personal Injury Attorney". The narrower specific category ranks substantially better for the relevant queries because it matches user search intent more precisely. We see this pattern across nearly every vertical, generic primary categories where specific ones are available and would rank better.' },

      { type: 'h2', text: 'Mistake 2: Service-area-business address showing publicly' },
      { type: 'p', text: 'Service-area businesses (plumbers, electricians, mobile services, home-based consultants) should hide their address and define a service area. Many Miami service-area businesses have their home address showing publicly. This both invites GBP suspension (Google\'s policy explicitly requires hiding the address for service-area businesses) and visibly diminishes the listing in search results.' },
      { type: 'p', text: 'Fix: in GBP settings, set the business location to "I deliver goods and services to my customers", define the service area by city or radius, and remove the public-facing address.' },

      { type: 'h2', text: 'Mistake 3: Photos uploaded but not categorized' },
      { type: 'p', text: 'Google\'s GBP photo system has explicit categories: Cover, Logo, Interior, Exterior, At Work, Team, Identity, and several sector-specific options. Photos uploaded without categorization (which is the default if you upload via the mobile app without specifying) provide weaker ranking and discovery signals than properly-categorized photos.' },
      { type: 'p', text: 'Fix: categorize all photos correctly. Cover photo should be the most representative single image of the business. Logo should be the actual brand logo. Interior, exterior, and team photos should be sorted accordingly. Photos in unrelated categories actively hurt. A "team" photo classified as "exterior" is a confusing signal.' },

      { type: 'h2', text: 'Mistake 4: Q&A unmonitored and unseeded' },
      { type: 'p', text: 'Anyone, including competitors, can post questions to your GBP. Many Miami businesses have unanswered questions sitting on their listings, sometimes for months. Worse, some have intentionally-misleading questions posted by competitors and never addressed.' },
      { type: 'p', text: 'Fix: enable Q&A notifications, respond to every question within 48 hours, and proactively seed Q&A with the FAQs you actually want answered publicly. The seeded Q&A becomes a search asset (questions and answers index) and prevents competitors from defining the conversation about your business.' },

      { type: 'h2', text: 'Mistake 5: Posts published once and abandoned' },
      { type: 'p', text: 'GBP Posts have a 7-day default visibility (longer for events and products). A post that gets uploaded once and then never refreshed is invisible after 7 days. Many Miami businesses have a single old Post from when they first set up the GBP and have not posted since.' },
      { type: 'p', text: 'Fix: weekly Posts, alternating between offer, event, update, and product types. Posts don\'t directly move algorithmic ranking, but they materially improve click-through rate from Map Pack and knowledge panel impressions, which is itself a ranking signal.' },

      { type: 'h2', text: 'Mistake 6: Services list empty or generic' },
      { type: 'p', text: 'The Services module on GBP lets you list specific services with descriptions and pricing. Most Miami businesses either leave this blank or fill it with generic single-line entries.' },
      { type: 'p', text: 'Fix: add 5–15 services, each with a 2–3 sentence description that includes relevant keywords naturally, and pricing where possible. The services list is one of the most overlooked GBP fields and contributes meaningfully to ranking for service-specific queries.' },

      { type: 'h2', text: 'Mistake 7: Attributes incomplete' },
      { type: 'p', text: 'GBP attributes (wheelchair accessibility, Wi-Fi, payment methods, accessibility features, identity attributes like LGBTQ+-owned or veteran-owned) populate features in search results. Most Miami businesses have completed 2–3 attributes out of the 30+ available for their business category.' },
      { type: 'p', text: 'Fix: review the full attribute list for your category and complete every applicable one. Time investment is 10–15 minutes; ranking impact is meaningful for queries where attribute filters apply.' },

      { type: 'h2', text: 'Mistake 8: Hours wrong, especially holiday hours' },
      { type: 'p', text: 'Inaccurate or missing holiday hours actively damage trust signals, Google notices when listed hours don\'t match call-in patterns, and customer complaints about wrong hours feed into local-business trust scoring.' },
      { type: 'p', text: 'Fix: set special hours for every Miami-relevant holiday (US federal holidays, plus relevant cultural calendars for businesses serving specific communities). Update hours within hours of any temporary change (storm closures, special events).' },

      { type: 'h2', text: 'How serious are these mistakes?' },
      { type: 'p', text: 'Cumulatively, very. A Miami GBP completing only 30–40% of the available signal stack is competing with one hand tied behind its back. Fixing the stack to 90%+ completion typically produces 30–60% improvement in GBP-driven calls within 90 days, before any other local SEO work begins.' },
      { type: 'p', text: 'The encouraging part: GBP optimization is the single highest-ROI local SEO project. The work is finite (2–4 weeks for a structural optimization, then ongoing maintenance), the cost is moderate ($500–$1,500 one-time plus monthly maintenance), and the ranking impact is genuine and measurable.' },
    ],
  },

  {
    slug: 'review-acquisition-strategy-for-miami-small-businesses',
    hub: 'google-reviews-and-reputation',
    draft: false,
    title: 'Review acquisition strategy for Miami small businesses',
    metaTitle: 'Review Acquisition for Miami Businesses (2026)',
    metaDescription:
      'How to build a systematic review acquisition system for your Miami business. Workflow design, request timing, multi-platform coverage, and what not to do.',
    category: 'Reviews',
    publishDate: '2026-05-04',
    excerpt:
      'Reviews are the second-largest local ranking factor and the largest conversion factor. But most Miami businesses ask for reviews ad-hoc and inconsistently. Here is what a systematic review acquisition system looks like.',
    content: [
      { type: 'p', text: 'Reviews drive both ranking and conversion in local search. The combined effect makes review work the highest-ROI lever in most local SEO programs. But most Miami businesses ask for reviews ad-hoc, inconsistently, and at the wrong moments. The result is a steady trickle of reviews when a systematic system would produce a steady stream.' },
      { type: 'p', text: 'Here is what a working review acquisition system looks like, and the key decisions in setting one up.' },

      { type: 'h2', text: 'Decision 1: When to ask' },
      { type: 'p', text: 'The review request should land at the moment of peak satisfaction: typically right after a positive customer interaction. For most Miami business types, this looks like:' },
      { type: 'list', items: [
        'Restaurants: 10–20 minutes after the customer leaves the table (give them time to walk to their car or settle the bill, not so long that the experience fades)',
        'Hotels: morning of check-out, before the customer has fully detached from the experience',
        'Service providers (plumbers, electricians, HVAC): right after the job is completed and the customer has confirmed satisfaction',
        'Retail: 2–4 hours after purchase if the product is for immediate use; 1–2 days later if it requires unboxing or installation',
        'Professional services (legal, medical, financial): at the natural transaction completion point (case closed, treatment finished, advice delivered)',
      ] },
      { type: 'p', text: 'Wrong timing kills the response rate. Asking too early (before the customer has fully experienced the service) feels presumptuous. Asking too late (after the experience has faded) gets ignored. The right timing is "the experience is fresh enough to motivate but complete enough to evaluate."' },

      { type: 'h2', text: 'Decision 2: How to ask' },
      { type: 'p', text: 'The technical mechanism matters less than people think. SMS, email, and printed cards with QR codes all work. What matters is that the request is single-click (no need to log in, search for the business, navigate to the right page) and personal (mentions the customer\'s name and the specific service or product).' },
      { type: 'p', text: 'Single-click review links are easy to generate from your GBP, the place ID makes a unique URL that opens the review submission form directly. Most CRM and POS systems can generate these automatically per customer.' },
      { type: 'p', text: 'Personalization beats generic by 3–5x in our experience. "Hi Maria, thank you for choosing us for your closing today. If you have a moment, we\'d be grateful for a quick review at [link]" outperforms "We hope you had a great experience! Please leave us a review."' },

      { type: 'h2', text: 'Decision 3: Which platforms' },
      { type: 'p', text: 'Most Miami businesses should focus on Google Reviews first and only. Google is by far the dominant platform for local search ranking and conversion. Once you have 50+ Google Reviews, then consider expanding to:' },
      { type: 'list', items: [
        'Yelp (still meaningful for restaurants, personal services, certain demographics)',
        'TripAdvisor (essential for tourism-vertical businesses on South Beach, Wynwood, Coconut Grove)',
        'Industry-specific platforms (Avvo for legal, Healthgrades for medical, Houzz for home services)',
        'Facebook Reviews (lower SEO impact than Google but still worth a basic presence)',
      ] },
      { type: 'p', text: 'Spreading review requests across 4 platforms from day one dilutes the effort and produces 4 thin profiles instead of one strong Google Reviews profile. Build to 50 Google Reviews first, then expand.' },

      { type: 'h2', text: 'What not to do' },
      { type: 'h3', text: 'Don\'t incentivize reviews' },
      { type: 'p', text: 'Google\'s review policy explicitly prohibits offering anything of value (discounts, freebies, contest entries, gift cards) in exchange for reviews. Violating this policy risks GBP suspension, once-and-done, with no warning. The "leave us a review and get 10% off" approach is one of the most common policy violations we see in Miami business audits, and one of the most damaging when caught.' },

      { type: 'h3', text: 'Don\'t pre-screen reviews via "review gating"' },
      { type: 'p', text: '"Review gating", asking customers privately whether they\'re happy and only routing happy customers to public review platforms, was banned by Google in 2018. The practice is still common in Miami business operations but is now an explicit policy violation.' },
      { type: 'p', text: 'Fix: ask all customers for reviews, route all customers to the same review platforms, and accept that the public review profile reflects the actual range of customer experiences. The professional response strategy handles negative reviews far better than gating ever did.' },

      { type: 'h3', text: 'Don\'t use review-buying services' },
      { type: 'p', text: 'Fake review services advertise heavily in some Miami markets. They produce policy-violating reviews from sock puppet accounts, and Google\'s detection algorithms are increasingly effective at catching them. The result is GBP suspension, sometimes weeks of removed reviews, and reputational damage. Always avoid.' },

      { type: 'h2', text: 'How to handle negative reviews' },
      { type: 'p', text: 'Negative reviews are inevitable. The professional response strategy converts undecided prospects far better than no negatives at all (a perfect 5.0 average looks suspicious; a 4.6 with thoughtful responses to occasional 3-star reviews looks human and trustworthy).' },
      { type: 'list', items: [
        'Respond within 48 hours, every time',
        'Acknowledge the specific complaint, don\'t use a template',
        'Take the conversation offline ("please email us at [address] so we can resolve this")',
        'Don\'t argue, don\'t blame the customer, don\'t reveal private details',
        'Demonstrate that the issue is being taken seriously, even when you disagree with the substance of the complaint',
      ] },
      { type: 'p', text: 'Reviews that genuinely violate Google\'s policies (fake, off-topic, illegal content, conflict of interest) can be reported for removal. Most negative reviews don\'t qualify, they\'re just unhappy customers. The professional response is the answer there, not removal.' },

      { type: 'h2', text: 'Realistic acquisition rates' },
      { type: 'p', text: 'A well-executed review request system in Miami typically achieves 15–25% conversion, meaning 15–25 reviews per 100 review requests sent. Below 10% suggests timing or message problems; above 30% is rare and usually only in very high-touch service relationships.' },
      { type: 'p', text: 'For most small Miami businesses, 30–60 days of disciplined request workflow takes the review count from "low and stagnant" to "growing steadily and competitively positioned". The work is finite (the system, once built, runs largely automatically); the impact is durable (the reviews continue to drive ranking and conversion for years).' },
    ],
  },

  {
    slug: 'how-to-evaluate-a-miami-local-seo-agency',
    hub: 'choosing-a-miami-seo-agency',
    draft: false,
    title: 'How to evaluate a Miami local SEO agency before hiring',
    metaTitle: 'How to Evaluate a Miami Local SEO Agency',
    metaDescription:
      'Practical guide to evaluating Miami local SEO agencies before hiring. Specific questions to ask, red flags to watch for, and what realistic deliverables look like.',
    category: 'Strategy',
    publishDate: '2026-05-04',
    excerpt:
      'Most Miami businesses hire the first agency that pitches them. Here is how to evaluate properly, specific questions to ask, red flags to watch, and what realistic deliverables actually look like.',
    content: [
      { type: 'p', text: 'Most Miami businesses hire the first local SEO agency that pitches them, get a year of underwhelming results, and move to the next agency that pitches them. The cycle continues. The actual mistake is upstream of any specific agency choice. It\'s the lack of an evaluation framework before signing the first contract.' },
      { type: 'p', text: 'Here is the evaluation framework we use for vetting agencies into our matching network. Use it to evaluate any agency you\'re considering, whether through us or directly.' },

      { type: 'h2', text: '1. Ask for live ranking proof in your sector' },
      { type: 'p', text: 'The single most important evaluation question: "Show me three current clients in my sector who are ranking in the Map Pack for competitive Miami queries, with the queries and the ranking position."' },
      { type: 'p', text: 'A specialist with genuine track record can name specific clients (with permission), specific queries, and specific ranking positions, and you can verify them in real time by Google searching. A specialist without genuine track record will deflect to "case studies", "industry experience", or "we\'d need to discuss confidentiality".' },
      { type: 'p', text: 'Watch for: vague case studies that don\'t name the client, "we got XYZ business to page 1" claims for non-competitive queries, and agencies that have only done work in sectors very different from yours.' },

      { type: 'h2', text: '2. Ask what the first 90 days actually contains' },
      { type: 'p', text: 'A real specialist can describe the first 90 days of work specifically, the audit deliverables, the optimization phases, the ranking factor stack being addressed in what order, the initial milestones. A weak specialist describes the first 90 days as "we\'ll work on your local SEO" without specifics.' },
      { type: 'p', text: 'Realistic 90-day work plan for a typical Miami small business retainer:' },
      { type: 'list', items: [
        'Weeks 1–2: Full GBP audit, citation audit, on-page audit, competitive analysis. Deliverable: written audit document and 90-day roadmap.',
        'Weeks 3–6: GBP structural optimization (categories, services, photos, attributes). Citation cleanup phase. Initial review acquisition system setup.',
        'Weeks 7–10: Citation building (high-quality, sector-specific). On-page schema implementation. First content piece live.',
        'Weeks 11–12: Initial review acquisition data, first GBP ranking grid measurements, content cadence established.',
      ] },
      { type: 'p', text: 'If the proposed plan doesn\'t look like this, if it\'s vaguer, slower, or skipping major ranking factor categories, push back.' },

      { type: 'h2', text: '3. Ask how they track Map Pack rankings' },
      { type: 'p', text: 'Map Pack rankings vary by where the searcher is physically standing. Generic rank trackers (Ahrefs, SEMrush) measure ranking from a single fixed location and miss the geographic variation entirely. Local-specific tools (Local Falcon, BrightLocal Local Search Grid) track ranking across geographic grids and show you the real picture.' },
      { type: 'p', text: 'A real specialist uses grid-based local rank tracking. A weak one uses generic rank trackers and reports misleadingly favorable numbers. If the proposal mentions only Ahrefs or SEMrush for rank tracking, that\'s a red flag, those tools don\'t actually measure Map Pack performance.' },

      { type: 'h2', text: '4. Ask about specific ranking-factor work' },
      { type: 'p', text: 'Test their understanding of what actually drives Map Pack rankings:' },
      { type: 'list', items: [
        '"What\'s the most common GBP category mistake you see?", Real answer: too-generic primary categories, e.g. "Lawyer" instead of "Personal Injury Attorney". Vague answer: "Wrong categories." (No detail = no expertise.)',
        '"How do you handle citation cleanup vs. citation building?", Real answer: cleanup first, build second; specific tools like BrightLocal or Whitespark for the audit. Vague answer: "We\'ll submit your business to 100 directories." (Wrong answer entirely.)',
        '"What\'s your review acquisition workflow?", Real answer: post-purchase trigger, single-click links, personalization, multi-platform after Google saturation. Vague answer: "We\'ll help you get more reviews." (No process = no system.)',
      ] },

      { type: 'h2', text: 'Red flags that disqualify' },
      { type: 'list', items: [
        '"Guaranteed page 1 rankings in 30 days." Map Pack rankings cannot be guaranteed by any reputable specialist. Algorithms change; competitors invest. Anyone guaranteeing specific rankings is lying.',
        '"We\'ll submit you to 100+ directories." Most directories pass no link value and are penalized by Google. The right citation strategy is 30–60 high-quality directories, not 100+ low-quality ones.',
        '"We do guest posting on high-DA sites for local SEO." For Map Pack rankings, local Miami press and industry publications matter more than national authority. An agency leading with national guest posting for local SEO doesn\'t understand what it\'s selling.',
        '"We use proprietary AI to optimize your GBP." GBP optimization is well-understood, manual, and not improved by AI tooling. "Proprietary AI" usually means "we use the same publicly-available tools as everyone else, plus marketing language."',
        '"6-month minimum contract." 6-month minimums are common but not universal, push for 30-day cancellation. Agencies that lock you in are usually doing so because they expect you to want to leave.',
      ] },

      { type: 'h2', text: 'Realistic deliverables' },
      { type: 'p', text: 'A monthly retainer at $1,500–$3,000/month for Miami local SEO should produce:' },
      { type: 'list', items: [
        '4–8 hours of strategic work and audit/analysis per month (not just task execution)',
        '2–5 GBP Posts per month',
        '5–15 photos uploaded to GBP per month',
        '3–8 new citation submissions per month (after the cleanup phase is complete)',
        '1–2 pieces of new content (blog post, neighborhood landing page, FAQ) per month',
        '0–2 new outreach link placements per month (link building is slow)',
        'Weekly review acquisition workflow execution',
        'Monthly written report with grid-based ranking data, traffic data, and call/lead data where trackable',
      ] },
      { type: 'p', text: 'Less than this for the price range is underdelivery. Substantially more is either a higher price point ($3,000+) or a smaller agency cutting corners on margin.' },

      { type: 'h2', text: 'When in doubt, start with an audit' },
      { type: 'p', text: 'If you\'re unsure whether a particular agency is right, start with a paid one-time audit ($500–$1,500) before committing to a retainer. The audit reveals more about the agency\'s thinking and process than any sales pitch, you\'ll see what they actually look for, how they prioritize findings, and whether their analysis matches your business reality.' },
      { type: 'p', text: 'Most genuinely strong specialists are happy to do paid audits. Most weak specialists try to convert audit conversations directly to retainer pitches without producing the audit document. The pattern is informative.' },
    ],
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find(a => a.slug === slug);

// Draft gate: draft spokes 404 and are excluded from /blog, hub grids and the
// sitemap until the publisher flips them live.
export const getPublishedArticles = (): BlogArticle[] => blogArticles.filter(a => !a.draft);
export const getArticlesByHub = (hub: string): BlogArticle[] =>
  blogArticles.filter(a => a.hub === hub && !a.draft);

export const getAllBlogSlugs = (): string[] => getPublishedArticles().map(a => a.slug);
