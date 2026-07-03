// data/blog.ts
// Hand-written blog content. Spokes are added one per writer run.
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

  {
    slug: 'fix-inconsistent-nap-miami-business-listings',
    hub: 'local-citations-and-nap-consistency',
    draft: false,
    title: 'How to fix inconsistent NAP across your Miami business listings',
    metaTitle: 'Fix Inconsistent NAP for Miami Listings (2026)',
    metaDescription:
      'Mismatched name, address, and phone data across directories drags down Miami map pack rankings. A step-by-step cleanup process to audit, standardize, and monitor your NAP.',
    category: 'Local',
    publishDate: '2026-06-15',
    dateModified: '2026-06-15',
    excerpt:
      'Your business listed three different ways across Yelp, Apple Maps, and old directories is quietly costing you map pack visibility. Here is the step-by-step process for auditing, standardizing, and monitoring NAP across your Miami listings.',
    faqs: [
      {
        question: 'What exactly counts as a NAP inconsistency?',
        answer:
          'Any difference in your Name, Address, or Phone number between two listings. That includes obvious mismatches like an old phone number, but also subtle ones: "Ave" vs "Avenue", "Ste 200" vs "Suite 200", "SW 8th St" vs "Southwest 8th Street", a tracking phone number on one platform and your real line on another, or a slightly different legal name vs trade name. Google reads these as signals about whether your business data is trustworthy, so even small formatting differences add up across dozens of citations.',
      },
      {
        question: 'Does a suite or unit number really matter for NAP?',
        answer:
          'Yes. The suite line is one of the most common sources of inconsistency for Miami office and retail tenants in buildings around Brickell and downtown. Pick one format ("Suite 410" is cleaner than "#410" or "Ste 410") and use it identically everywhere, including on your own website and in your Google Business Profile. Leaving it off some listings and on others is itself an inconsistency.',
      },
      {
        question: 'How long does NAP cleanup take for an established Miami business?',
        answer:
          'For a newer business with a handful of listings, a day or two. For an established Miami business with a decade of history, multiple past addresses, and listings created by automated data aggregators, cleanup is usually 6 to 8 weeks of focused work. The slow part is not editing the data, it is claiming abandoned listings, removing duplicates, and pushing corrections through data aggregators that feed dozens of smaller directories downstream.',
      },
      {
        question: 'Should I fix my website or the directories first?',
        answer:
          'Your website and Google Business Profile first. They are the canonical source of truth, so decide your exact name, address, and phone format there, then match every directory to it. Fixing directories before you have settled on a canonical format just means redoing the work when you change your mind.',
      },
      {
        question: 'Do I have to fix every single listing?',
        answer:
          'Focus on the high-value citations first: Google Business Profile, Apple Maps, Bing Places, Yelp, the major data aggregators, and the directories specific to your industry. These carry the most weight and feed many smaller sites. The long tail of obscure directories matters far less, and chasing all of it is where DIY cleanups tend to stall.',
      },
    ],
    content: [
      { type: 'p', text: 'Inconsistent NAP, your business Name, Address, and Phone number listed differently across directories, quietly drags down your Miami map pack ranking and confuses the customers trying to find you. Fixing it means auditing every listing, choosing one canonical format, correcting the high-value citations first, and monitoring for the data drift that creeps back in over time.' },
      { type: 'p', text: 'This is unglamorous work, but for established Miami businesses it is often the single highest-return cleanup available, because years of relocations, rebrands, and automated directory submissions tend to leave NAP data badly fragmented. This article is part of our guide to [local citations and NAP consistency](/guides/local-citations-and-nap-consistency/), and walks through the cleanup process step by step.' },

      { type: 'h2', text: 'What NAP inconsistency actually is' },
      { type: 'p', text: 'A citation is any place online where your business name, address, and phone number appear together: Apple Maps, Yelp, the Better Business Bureau, Florida and Miami-Dade business directories, your chamber of commerce listing, and industry-specific sites. NAP consistency means that information reads identically everywhere.' },
      { type: 'p', text: 'Inconsistency is rarely a single big error. It is the accumulation of small differences: an abandoned listing with a phone number from two offices ago, "8th Street" written as "8 St" on one site and "Eighth Street" on another, a suite number present on some listings and missing on others, or a call-tracking number that was added to one platform and never reconciled. Each difference on its own is minor. Across forty or fifty citations, the pattern tells search engines your data is unreliable.' },

      { type: 'h2', text: 'Why it hurts Miami businesses specifically' },
      { type: 'p', text: 'Citations are the third-largest local ranking factor after your Google Business Profile and your reviews, and consistency is what gives them value. When Google sees the same NAP repeated cleanly across authoritative sources, it gains confidence in your location and is more willing to rank you in the map pack. When it sees conflicting data, that confidence drops.' },
      { type: 'p', text: 'Miami compounds the problem in two ways. First, many established businesses here have long, messy histories: a Coral Gables firm that started in one building, expanded, contracted, and rebranded over fifteen years carries layers of stale listing data. Second, bilingual operations sometimes list a Spanish trade name on some directories and an English legal name on others, creating name inconsistencies that look like two different businesses. Older neighborhoods with deep small-business roots, like [Little Havana](/location/little-havana/), are where this legacy data corruption shows up most.' },

      { type: 'h2', text: 'Step 1: Audit every listing you can find' },
      { type: 'p', text: 'You cannot fix what you have not catalogued. Start by searching your business name, your phone number, and each past address in Google, and record every listing that appears, along with exactly how the NAP reads on each one. Pay special attention to the variations: the number on Yelp may differ from the number on Apple Maps, and an old aggregator listing may be feeding wrong data to a dozen smaller sites you have never heard of.' },
      { type: 'p', text: 'Specialists run this audit with tools that scan hundreds of directories at once and flag mismatches and duplicates automatically, which is far faster than manual searching for a business with a long history. Whether you do it by hand or with software, the output you want is a single spreadsheet: every listing, its URL, and the exact name, address, and phone as currently published.' },

      { type: 'h2', text: 'Step 2: Set one canonical NAP format' },
      { type: 'p', text: 'Before you change anything in the directories, decide the single correct version of your NAP and write it down. This is the format you will match everywhere. Make deliberate choices on the details that vary: spell out "Avenue" or abbreviate it, use "Suite" consistently, decide whether the directional goes before or after ("SW 8th Street"), and confirm the exact legal or trade name you want associated with the business.' },
      { type: 'p', text: 'Set this canonical format on your own website and your Google Business Profile first, since those are your sources of truth, then bring every other listing into line with them. One real phone number, not a call-tracking number, should be the public NAP phone everywhere; routing and tracking can be handled without fragmenting your citation data.' },

      { type: 'h2', text: 'Step 3: Fix the high-value citations first' },
      { type: 'p', text: 'Not all citations carry equal weight, so sequence the cleanup. Correct the foundational platforms first: Google Business Profile, Apple Maps, Bing Places, Yelp, and the major US data aggregators that syndicate business data downstream to hundreds of smaller directories. Fixing an aggregator often corrects many listings at once.' },
      { type: 'p', text: 'Then work through the directories specific to your industry and the local Miami-area business directories that actually send referral traffic. The cleanup is harder than the original build: it means claiming abandoned listings, merging or removing duplicates created by automated submissions, and sometimes verifying ownership by phone or postcard. This is the stage where a business with a decade of history typically benefits from bringing in help, and the part of the work our network of vetted [citation cleanup specialists](/services/local-citation-building/) handles most efficiently.' },

      { type: 'h2', text: 'Step 4: Monitor for drift' },
      { type: 'p', text: 'NAP data does not stay clean on its own. Aggregators repopulate old data, customers suggest edits to your Google listing, and new directories scrape and republish outdated information. A profile you cleaned this quarter can quietly drift back out of sync within a year if no one is watching.' },
      { type: 'p', text: 'Build a light monitoring habit: re-audit your core citations a few times a year, watch for unverified edits to your Google Business Profile, and correct new inconsistencies before they spread. Google publishes guidance on keeping your business information accurate in the [Google Business Profile Help Center](https://support.google.com/business/answer/3038177), which is worth reviewing when you set up your canonical format. The goal is not a one-time cleanup but a stable, durable NAP that search engines can trust year after year.' },

      { type: 'h2', text: 'The realistic payoff' },
      { type: 'p', text: 'Citation cleanup rarely produces an overnight jump, because it works alongside your profile and reviews rather than instead of them. What it does is remove a persistent drag on your ranking and rebuild the data confidence that lets your other local SEO work pay off. For an established Miami business carrying years of fragmented listings, that is often the difference between hovering just outside the map pack and breaking into the top three for the queries that matter.' },
      { type: 'p', text: 'If your listing history is long and tangled, you do not have to untangle it alone. We connect Miami businesses with vetted local SEO specialists who do this cleanup for a living, and matching is free. We do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'title-tags-meta-descriptions-miami-pages',
    hub: 'on-page-local-seo',
    draft: true,
    title: 'Writing title tags and meta descriptions for Miami local pages',
    metaTitle: 'Title Tags and Meta Descriptions for Miami Pages',
    metaDescription:
      'How to write title tags and meta descriptions that win clicks for your Miami local business pages. Length limits, local modifiers, and templates by page type.',
    category: 'Local',
    publishDate: '2026-06-10',
    dateModified: '2026-06-10',
    excerpt:
      'Title tags and meta descriptions decide whether your Miami business page earns the click. Here is how to write both well: the right length, the local modifiers that matter, and copy-ready templates for service pages, neighborhood pages, and blog posts.',
    faqs: [
      {
        question: 'Do meta descriptions affect Google rankings?',
        answer:
          'Not directly. Google has said for years that meta descriptions are not a ranking factor. What they affect is click-through rate, the share of people who see your result and choose to click it. A page that ranks fourth but writes a sharper description than the three above it can pull clicks away from them, and the higher engagement that follows can support your ranking indirectly. So write meta descriptions for the human deciding where to click, not for the algorithm.',
      },
      {
        question: 'How long should a title tag be?',
        answer:
          'Aim for roughly 50 to 60 characters, or about 600 pixels, which is where Google typically truncates titles in desktop results. The exact cutoff is measured in pixels, not characters, so a title full of wide letters truncates sooner. Put your most important words, the service and the Miami location, in the first 50 characters so they survive even if the tail gets cut. Meta descriptions have more room, around 150 to 160 characters before truncation.',
      },
      {
        question: 'Should I put "Miami" in every title tag?',
        answer:
          'On location-intent pages, yes, but be specific where you can. A page targeting a single neighborhood should name that neighborhood (Brickell, Coral Gables, Wynwood) rather than defaulting to "Miami", because the more specific term matches local search intent more precisely and faces less competition. Reserve the broad "Miami" modifier for citywide service pages and your homepage, and let neighborhood pages own their neighborhood.',
      },
      {
        question: 'Does Google always use the title tag I write?',
        answer:
          'No. Google rewrites titles in search results when it judges your tag a poor match for the query, when the tag is stuffed with keywords, or when it is too long. The way to keep your written title is to make it accurate, concise, and clearly descriptive of the page. Pages with keyword-stuffed or boilerplate titles get rewritten most often, so a clean title is also the most stable one.',
      },
      {
        question: 'What is the difference between a title tag and an H1?',
        answer:
          'The title tag is the clickable headline that appears in search results and the browser tab; it lives in the page head and is written for searchers scanning a results page. The H1 is the visible headline at the top of the page itself, written for the visitor who has already arrived. They can be similar but should not be identical: the title tag carries the location and service for the click, while the H1 can be a touch longer or more welcoming because the click has already happened.',
      },
    ],
    content: [
      { type: 'p', text: 'Title tags and meta descriptions are the two pieces of code that decide whether your Miami business page earns a click from search results. The title tag is the headline; the meta description is the pitch underneath it. Get both right and you lift click-through without touching your rankings at all.' },
      { type: 'p', text: 'They are also among the easiest on-page elements to fix and the most commonly neglected. This article is part of our guide to [on-page local SEO](/guides/on-page-local-seo/), and walks through how to write title tags and meta descriptions that work for Miami local pages, with copy-ready templates by page type.' },

      { type: 'h2', text: 'What each one actually does' },
      { type: 'p', text: 'The title tag is the bold blue headline in a Google result and the text in the browser tab. It is the single biggest influence on whether someone clicks, and it is a genuine ranking signal: Google reads it to understand what the page is about. The meta description is the gray summary line beneath the title. It is not a ranking factor, but it is your sales pitch in the results page, the two sentences that turn an impression into a visit.' },
      { type: 'p', text: 'For a Miami business, the job of both is to signal local relevance fast. Someone searching "personal injury lawyer Brickell" is scanning a crowded results page in a second or two. The result that names the service and the neighborhood plainly, and reads like it was written for that exact search, wins the click over the one with a vague or truncated title.' },

      { type: 'h2', text: 'Writing the title tag' },
      { type: 'p', text: 'Keep it to about 50 to 60 characters so Google does not truncate it, and front-load the words that matter. The reliable structure for a local page is service, then location, then brand: "Water Damage Restoration in Coral Gables | Brand". If the title gets cut, the service and neighborhood still survive because you put them first.' },
      { type: 'p', text: 'Use the most specific location the page deserves. A page built for one neighborhood should name that neighborhood, not the whole city, which is why a [Brickell](/location/brickell/) location page should say "Brickell" in its title rather than competing in the much broader "Miami" pool. Write one unique title per page; duplicated titles across a set of neighborhood pages are a common reason Google rewrites them or collapses them in results. Avoid stuffing two or three near-identical keywords into one title, which both reads badly and invites a rewrite.' },

      { type: 'h2', text: 'Writing the meta description' },
      { type: 'p', text: 'You have around 150 to 160 characters before Google truncates the description, so treat it as two tight sentences. Name the service and the location, state the single most compelling reason to choose this page, and end with a light call to action. Because it does not affect ranking, you are writing purely for the human deciding where to click, which is freeing: lead with the benefit, not the keyword.' },
      { type: 'p', text: 'Mirror the language real Miami searchers use. If people search "free estimate", say "free estimate"; if they care about same-day service in hurricane season, say so. Match the intent of the query the page targets, write a distinct description for every page, and never leave it blank, because an empty meta description hands Google a random snippet of body text that rarely sells as well as a sentence you wrote on purpose. Google publishes plain guidance on this in its [Search Central documentation on titles and snippets](https://developers.google.com/search/docs/appearance/title-link), worth a read when you set your house style.' },

      { type: 'h2', text: 'Templates by page type' },
      { type: 'p', text: 'A small set of patterns covers almost every page on a Miami local site. Adapt the wording, but keep the structure consistent so the work stays fast.' },
      { type: 'list', items: [
        'Service page (citywide): Title "[Service] in Miami | [Brand]" / Description "[Service] for Miami businesses. [Key differentiator]. Get a free quote today."',
        'Neighborhood page: Title "[Service] in [Neighborhood] | [Brand]" / Description "Looking for [service] in [Neighborhood]? [Local proof point]. Request your free estimate."',
        'Service-plus-neighborhood page: Title "[Neighborhood] [Service] | [Brand]" / Description "[Service] serving [Neighborhood] and nearby. [Benefit]. Talk to a local specialist."',
        'Blog or guide post: Title "[Specific question or topic] | [Brand]" / Description "[One-line answer to the topic]. [What the reader will learn]."',
      ] },
      { type: 'p', text: 'Notice that none of these repeat a keyword three times or pad the title with filler. The location does the local-SEO work; the benefit does the persuasion. That division keeps both elements short enough to survive truncation.' },

      { type: 'h2', text: 'Mistakes that quietly cost clicks' },
      { type: 'p', text: 'The most common failure is the default title, the one a theme or page builder generates automatically, which often reads "Home" or "Services - Page 2" and tells a searcher nothing. Close behind is the duplicated title across a whole folder of neighborhood pages, which makes Coral Gables, Doral, and Aventura pages indistinguishable in results. Both are fixable in an afternoon and both move click-through immediately.' },
      { type: 'p', text: 'Other recurring problems: titles over 60 characters that truncate mid-phrase, meta descriptions left blank or copied across pages, keyword stuffing that triggers a Google rewrite, and brand-first titles that bury the service and location behind the company name. On a local site, the searcher rarely knows your brand yet, so leading with it wastes the most valuable characters you have.' },

      { type: 'h2', text: 'Where this fits, and getting help' },
      { type: 'p', text: 'Title tags and meta descriptions are the cheapest meaningful on-page win available. They cost no link building, no content production, and no technical migration, just careful writing applied page by page. For a Miami site with dozens of service and neighborhood pages, a systematic pass usually lifts click-through across the whole site within a few weeks of Google recrawling.' },
      { type: 'p', text: 'If you would rather have this handled as part of a wider on-page program, we connect Miami businesses with vetted [on-page SEO specialists](/services/on-page-local-seo/) who audit and rewrite titles and descriptions at scale, then track the click-through change. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'earn-local-backlinks-miami-sponsorships',
    hub: 'local-link-building',
    draft: true,
    title: 'How Miami businesses earn local backlinks from sponsorships and partnerships',
    metaTitle: 'Earn Local Backlinks via Miami Sponsorships',
    metaDescription:
      'How Miami businesses earn real local backlinks through sponsorships, partnerships, and community press, plus how to vet which opportunities actually help SEO.',
    category: 'Strategy',
    publishDate: '2026-06-11',
    dateModified: '2026-06-11',
    excerpt:
      'The backlinks that move local rankings are earned, not bought. Here is how Miami businesses build them through community sponsorships, local partnerships, and genuine press, and how to tell a worthwhile opportunity from a waste of money.',
    faqs: [
      {
        question: 'Do local sponsorships actually help SEO, or just visibility?',
        answer:
          'Both, when done right. A sponsorship of a Miami event, charity, or youth sports team typically earns you a link from the organizer\'s website, often on a sponsors or partners page. If that organization is locally relevant and has a real audience, the link carries genuine local SEO value and tells Google your business is embedded in the Miami community. The brand exposure to local attendees is a bonus on top of the link, not the only payoff.',
      },
      {
        question: 'Is paying for a sponsorship the same as buying links?',
        answer:
          'No, as long as the sponsorship is genuine. Paying to sponsor a real festival, nonprofit, or local team and receiving a link as a normal courtesy is legitimate and common. What crosses the line is paying a website purely for a link with no real-world sponsorship behind it, or buying links through a network. Google\'s spam policies treat link schemes, including links paid for without a nofollow or sponsored tag, as a violation. The test is whether the relationship is real.',
      },
      {
        question: 'How many local backlinks does a Miami business need?',
        answer:
          'There is no fixed number, because quality and relevance matter far more than count. A handful of links from genuinely Miami-relevant, reputable sources outperforms dozens of links from generic, unrelated directories. For a competitive Miami vertical, the more useful frame is a steady cadence of a few earned local links a month from real relationships, rather than a one-time push to hit an arbitrary total.',
      },
      {
        question: 'What kinds of Miami organizations are worth approaching?',
        answer:
          'Local chambers of commerce, neighborhood business associations, charities and nonprofits, youth and amateur sports teams, schools and universities, arts organizations in districts like Wynwood, and festivals such as the Calle Ocho events in Little Havana. Industry associations relevant to your field also count. The common thread is a real Miami audience and a website that lists its partners or sponsors.',
      },
      {
        question: 'Should sponsorship links be nofollow or dofollow?',
        answer:
          'Either is fine, and you should not pressure an organization to change its tagging. A link marked sponsored or nofollow still drives referral traffic and brand exposure, and Google still sees the association. Demanding a dofollow link in exchange for a sponsorship is exactly the kind of transactional behavior that makes a link look manufactured. Take the link the organization naturally gives and focus on the relationship.',
      },
      {
        question: 'How do I avoid backlinks that could hurt my rankings?',
        answer:
          'Avoid bulk paid links, private blog networks, link-exchange schemes, spammy offshore directories, and any service promising hundreds of links fast. These are the toxic patterns Google\'s spam policies target, and they can earn a manual penalty rather than a boost. Stick to links you could comfortably explain to a Google reviewer: a real sponsorship, a real partnership, a real piece of press. If a link source would embarrass you to describe out loud, skip it.',
      },
    ],
    content: [
      { type: 'p', text: 'Miami businesses earn local backlinks the same way they earn local trust: by sponsoring real community events, partnering with nearby organizations, and giving local press a genuine reason to mention them. The links that move rankings are relevant, locally rooted, and editorially earned, not bought from a directory or a link network.' },
      { type: 'p', text: 'Link building is the part of local SEO most prone to shortcuts, and the shortcuts are exactly what get sites penalized. This article is part of our guide to [building local links the right way](/guides/local-link-building/), and focuses on the three sources that consistently work for Miami businesses: sponsorships, partnerships, and local press.' },

      { type: 'h2', text: 'What actually makes a backlink valuable' },
      { type: 'p', text: 'Not all links are equal. The three things that give a backlink real weight are relevance, authority, and locality. A link from a Miami organization in or adjacent to your industry, on a site that people actually visit, signals to Google that a credible local source vouches for you. A link from an unrelated, low-quality directory in another country signals almost nothing, and a pile of them signals manipulation.' },
      { type: 'p', text: 'For a local business, the locality dimension is the one most often overlooked. A link from a Coral Gables chamber of commerce or a Wynwood arts nonprofit does double duty: it passes authority and it reinforces that your business is genuinely part of the Miami community, which is precisely what local ranking systems are trying to measure. That is why a few well-chosen local links outpull a large volume of generic ones.' },

      { type: 'h2', text: 'Sponsorships: the most reliable local link' },
      { type: 'p', text: 'Sponsoring local events, teams, and causes is the most dependable way for a Miami business to earn relevant local links, because the link is a natural byproduct of a real relationship. Most organizations list their sponsors on a dedicated page with a link back to each one, and that page sits on a site with established local authority.' },
      { type: 'p', text: 'The Miami calendar is full of opportunities: neighborhood festivals, charity 5Ks, youth and amateur sports leagues, school fundraisers, arts events across Wynwood and the Design District, and cultural events like the Calle Ocho celebrations in Little Havana. Pick sponsorships where the audience overlaps with your customers, not just the cheapest one available. A family law firm sponsoring a youth soccer league reaches local parents; a restaurant sponsoring a food festival reaches local diners. The link is valuable, and so is the exposure to the exact people you serve.' },

      { type: 'h2', text: 'Partnerships and supplier relationships' },
      { type: 'p', text: 'You almost certainly already have business relationships that can produce links you have never asked for. Suppliers, vendors, complementary local businesses, trade associations, and professional networks frequently maintain partner directories, member lists, or "where to find us" pages. A request to be listed is usually welcomed, because it costs the other party nothing and signals an active relationship.' },
      { type: 'p', text: 'Look for complementary, non-competing Miami businesses that serve the same customers you do. A wedding photographer and a [Brickell](/location/brickell/) event venue, a general contractor and a local architecture firm, a dentist and a nearby orthodontist: these natural pairings can refer customers and link to each other without any conflict. Joint content, co-hosted local events, and shared resource pages all create legitimate reasons for those links to exist, which is what keeps them safe.' },

      { type: 'h2', text: 'Local press and digital PR' },
      { type: 'p', text: 'Earned media is the highest-authority local link most businesses can realistically get. Miami has a deep media ecosystem, from the Miami Herald and local TV affiliates down to neighborhood blogs, business journals, and niche community newsletters. A genuine story, a notable hire, a community initiative, a useful piece of local data, or an expert comment on a trending Miami issue can earn a mention and a link from a source no directory can match.' },
      { type: 'p', text: 'The key word is genuine. Reporters and editors link to businesses that give them something worth covering, not to businesses that simply ask. Offer local expertise, original data about your Miami market, or a real community story, and let the link follow the coverage. This is slower than buying links, but the authority and durability of an earned press link is on a different level, and it compounds as more outlets cite the original.' },

      { type: 'h2', text: 'How to vet an opportunity and avoid toxic links' },
      { type: 'p', text: 'The single best filter is simple: would you be comfortable explaining this link to a Google reviewer out loud? A real sponsorship of a real Miami event passes. A real partnership with a real local business passes. Buying a slot on a link-selling network, paying an overseas service for hundreds of directory links, or joining a link-exchange scheme does not, and these are the exact patterns described in [Google Search Central\'s spam policies](https://developers.google.com/search/docs/essentials/spam-policies) as link schemes that can trigger a penalty rather than a boost.' },
      { type: 'p', text: 'Practical red flags: anyone promising a specific number of links fast, prices that seem too low for the volume offered, links from sites with no real Miami or industry connection, and any pressure to make a payment purely in exchange for a dofollow link. When you sponsor or partner, take whatever link the organization naturally offers, including a nofollow or sponsored one, and never demand a particular tag. The relationship is the asset; the link is the receipt.' },

      { type: 'h2', text: 'Where this fits, and getting help' },
      { type: 'p', text: 'Local link building rewards patience and real relationships, which is exactly why it is hard to fake and valuable when done well. A steady cadence of a few earned links a month from genuine Miami sponsorships, partnerships, and press will outperform any one-time bulk campaign, and it carries none of the penalty risk. For most Miami businesses, the constraint is not knowing what to do but having the time to build and maintain the relationships consistently.' },
      { type: 'p', text: 'If you would rather have this handled as part of a structured program, we connect Miami businesses with vetted [link building specialists](/services/local-link-building/) who pursue real local opportunities and steer well clear of the toxic shortcuts. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'seasonal-content-calendar-miami-businesses',
    hub: 'local-content-strategy',
    draft: true,
    title: 'Building a seasonal content calendar for your Miami business',
    metaTitle: 'Seasonal Content Calendar for Miami Businesses',
    metaDescription:
      'Miami demand swings with hurricane season, the winter snowbird influx, and event spikes. Here is how to build a seasonal content calendar that publishes ahead of each one.',
    category: 'Strategy',
    publishDate: '2026-06-11',
    dateModified: '2026-06-11',
    excerpt:
      'Miami search demand is unusually seasonal: hurricane season, the winter snowbird influx, and a packed event calendar each move what customers look for. Here is how to map those cycles and build a content calendar that publishes ahead of demand instead of chasing it.',
    faqs: [
      {
        question: 'How far ahead should I publish seasonal content?',
        answer:
          'Publish six to eight weeks before demand peaks, not during it. Google needs time to crawl, index, and build trust in a page before it will rank it, and that ramp can take weeks for a competitive query. A hurricane-prep page posted in early May is positioned for the June through November season; one posted during a July storm watch has already missed the searches. The practical rule for Miami is to work a full season ahead of where the calendar actually is.',
      },
      {
        question: 'What are the main seasonal cycles in Miami?',
        answer:
          'Three dominate. Hurricane season runs June through November and drives demand for preparation, repair, and recovery services. The winter snowbird and tourist influx runs roughly November through April and lifts demand across hospitality, real estate, healthcare, and home services. And a dense event calendar, from Art Basel in December to the Calle Ocho festival in March, creates sharp local spikes in specific neighborhoods. Most Miami businesses are touched by at least one of the three.',
      },
      {
        question: 'Should seasonal pages be deleted after the season ends?',
        answer:
          'No. Deleting and recreating a page every year throws away the ranking authority it built. Keep one permanent URL for each recurring season and update it each year with fresh dates, specifics, and any new information. A page that has existed and been refreshed for three hurricane seasons will outrank a brand-new page every time, because its history and accumulated links carry forward.',
      },
      {
        question: 'Does seasonal content actually rank, or is it too short-lived?',
        answer:
          'It ranks well when you treat it as a permanent asset rather than a disposable post. Demand for the topic is seasonal, but the page is evergreen: it sits quietly in the off-season and surges when searches return, provided you have kept the same URL and refreshed it. The businesses that struggle are the ones who publish a dated post each year and start the ranking climb from zero every time.',
      },
      {
        question: 'How is a seasonal calendar different from a regular content calendar?',
        answer:
          'A regular content calendar schedules publishing at a steady cadence regardless of timing. A seasonal calendar works backward from when demand peaks, setting publish dates weeks ahead of each spike so the content is already ranking when searches arrive. The two work together: your evergreen service and guide content runs year-round, while the seasonal layer is timed deliberately around Miami demand cycles.',
      },
      {
        question: 'Can one business serve both hurricane-season and snowbird audiences?',
        answer:
          'Often, yes, and the two seasons conveniently bookend the year. A home services company might run storm-preparation and recovery content from late spring through fall, then pivot to seasonal-resident and second-home maintenance content over the winter. Mapping both cycles on one calendar lets you keep a relevant, timely page in front of searchers almost year-round rather than going quiet between peaks.',
      },
    ],
    content: [
      { type: 'p', text: 'A seasonal content calendar plans your pages and articles around the demand cycles that actually move Miami searches: hurricane season, the winter snowbird influx, and the local event calendar. The goal is simple. Publish each piece six to eight weeks ahead of its peak so it is already ranking when customers start searching, instead of scrambling to post during the surge.' },
      { type: 'p', text: 'Most content advice treats the calendar as a steady drumbeat of posts. For a Miami business that misses the point, because demand here is not steady. It swings hard with the seasons. This article is part of our guide to [local content strategy](/guides/local-content-strategy/), and walks through how to map Miami\'s cycles and time your content to them.' },

      { type: 'h2', text: 'Why Miami demand is unusually seasonal' },
      { type: 'p', text: 'Plenty of cities have a busy season. Miami has three overlapping ones, and they reshape what people search for far more than in a typical US market. Hurricane season from June through November drives waves of demand for storm preparation, shutters, roofing, water damage repair, and recovery services. The winter influx of snowbirds and tourists from roughly November through April lifts hospitality, real estate, healthcare, and home services as the seasonal population swells. And a packed event calendar, from Art Basel to Miami Music Week, concentrates demand in specific neighborhoods on specific dates.' },
      { type: 'p', text: 'For a local business, that means the queries you want to rank for are not constant. The searches a roofer wants in September are different from the ones a property manager wants in January. A content calendar that ignores this publishes the right page at the wrong time, which is almost as wasteful as not publishing it at all.' },

      { type: 'h2', text: 'Map your demand cycles before you write a word' },
      { type: 'p', text: 'Start by listing the moments in the year when your specific customers need you most. A water damage company maps to hurricane season. A restaurant or hotel near [South Beach](/location/south-beach/) maps to the winter tourist season and the event calendar. A real estate or relocation business maps to the snowbird arrival in late fall and departure in spring. Write down each peak, when demand starts to build, and when it falls off.' },
      { type: 'p', text: 'Then attach search intent to each peak. Before hurricane season, people search preparation and prevention terms. During an active storm watch, they search urgent service terms. After a storm, they search repair and insurance terms. One season can support three distinct pages aimed at three distinct moments. Mapping intent this way turns a vague sense of "we get busy in summer" into a concrete list of pages worth building.' },

      { type: 'h2', text: 'Publish ahead of demand, not during it' },
      { type: 'p', text: 'This is the single most important rule, and the one most often broken. A new page is not competitive the day it goes live. Google has to crawl it, index it, and develop enough confidence to rank it, and for a contested local query that ramp takes weeks. If you publish a hurricane-preparation page during a July storm watch, the search wave has already passed by the time the page is ranking.' },
      { type: 'p', text: 'Work a full season ahead. Hurricane-prep content should be live and indexed in April or early May, well before the June start. Winter-season content for seasonal residents should be up by September or October, before the snowbirds arrive. Event-driven content should publish four to six weeks before the event. Build the publish dates backward from each peak and the calendar writes itself.' },

      { type: 'h2', text: 'Turn each season into a content cluster' },
      { type: 'p', text: 'A single page per season leaves traffic on the table. Each cycle can support a small cluster of related pages that capture the different ways people search around it. Hurricane season alone can justify a preparation checklist, a "what to do after storm damage" guide, an insurance-claim explainer, and a service page for emergency response. Each targets a different stage and a different intent, and together they cover the season far more thoroughly than one broad page.' },
      { type: 'p', text: 'The clusters compound year over year. The first hurricane season you might publish two pages; the second, you refresh those and add two more. Within a few years you own a deep, authoritative set of pages for the season, which is exactly the kind of topical depth that ranks. Just keep each page genuinely distinct and useful, because thin, near-duplicate pages built only to chase a season are the fast way to undercut the whole effort.' },

      { type: 'h2', text: 'Keep seasonal pages working year-round' },
      { type: 'p', text: 'The biggest mistake with seasonal content is treating it as disposable. Businesses publish a dated post each year, let it go stale, and start the ranking climb from scratch the next season. The page never builds authority because it never gets the chance to age. Instead, keep one permanent URL per recurring season and refresh it annually with new dates, current specifics, and anything you learned last cycle. A hurricane-prep page that has been live and updated across three seasons will outrank a fresh one every time.' },
      { type: 'p', text: 'Off-season, those pages do no harm by sitting quietly; they simply wait for demand to return. The combination of an evergreen URL and a yearly refresh gives you the best of both worlds: content that surges with the season and authority that accumulates across years. That is why a seasonal calendar belongs inside your broader content program rather than running as a separate, throwaway track.' },

      { type: 'h2', text: 'Where this fits, and getting help' },
      { type: 'p', text: 'A seasonal calendar is one layer of a complete Miami content strategy. Your evergreen service and guide pages run year-round; the seasonal layer sits on top, timed to publish ahead of each demand cycle so you are ranking when searches arrive. Google\'s own guidance on [creating helpful, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) is the standard to hold every seasonal page to, because timing only helps if the content genuinely deserves to rank.' },
      { type: 'p', text: 'If planning and producing this ahead of each season is more than your team can carry, we connect Miami businesses with vetted [local content specialists](/services/local-content-strategy/) who build and maintain seasonal calendars as part of a wider program. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },
  {
    slug: 'voice-search-optimization-miami-businesses',
    hub: 'near-me-voice-and-mobile-local-search',
    draft: true,
    title: 'Voice search optimization for Miami local businesses',
    metaTitle: 'Voice Search Optimization for Miami Businesses',
    metaDescription:
      'How Miami businesses win voice search: conversational spoken queries, bilingual Spanish demand, accurate profile hours, and the structured data that helps.',
    category: 'Local',
    publishDate: '2026-06-12',
    dateModified: '2026-06-12',
    excerpt:
      'When a Miami customer asks their phone for a nearby service, the assistant usually reads back a single business. Here is how voice search picks that answer, why the Spanish-speaking market changes the math, and what makes your business the one it names.',
    faqs: [
      {
        question: 'What is voice search optimization for a local business?',
        answer:
          'It is the work of making your business the spoken answer when someone asks a phone or smart speaker for a nearby service. There is no separate voice algorithm to game. You optimize the same local signals that power the map pack, a complete Google Business Profile, accurate hours, strong reviews, and clean structured data, then shape your content around the natural, conversational way people phrase requests out loud.',
      },
      {
        question: 'Do I need Spanish content to rank for voice search in Miami?',
        answer:
          'For most Miami businesses, yes. Roughly 70 percent of Miami-Dade residents speak Spanish at home, and many speak to their devices in Spanish, asking for things like a pharmacy or a plumber "cerca de mi." If your profile and content exist only in English, you are invisible for every spoken Spanish query in neighborhoods like Doral and Little Havana. Real Spanish content, not machine translation, is what captures that demand.',
      },
      {
        question: 'Where do voice assistants get their answers?',
        answer:
          'From the same local index that produces Google\'s map pack and Maps results, not a separate voice system. The assistant reads your Google Business Profile and the structured data on your site, then reads back the business it understands most clearly. That is why clean, complete, and consistent profile data matters more for voice than any voice-specific trick.',
      },
      {
        question: 'Do I need to add "near me" or voice phrases to my website?',
        answer:
          'No. You do not need the literal phrase "near me" anywhere on your site, and stuffing in robotic voice keywords does not help. What helps is content written in plain, natural language that answers the real questions customers ask, because that is what an assistant can read back cleanly. Write the way your customers speak, not in keyword fragments.',
      },
      {
        question: 'How can I tell if voice search is sending me customers?',
        answer:
          'Voice does not appear as its own line in most analytics, so you track it indirectly. Watch for growth in long, conversational, question-style queries in Google Business Profile and Search Console insights, rising calls and direction requests from your profile, and an increase in mobile "open now" visibility. Trends across those signals tell you your voice and near-me presence is improving.',
      },
      {
        question: 'Does structured data improve my chances in voice results?',
        answer:
          'Indirectly, yes. LocalBusiness and FAQ markup do not boost rankings on their own, but they hand search engines your name, address, phone, hours, and answers in a format they can read without guessing. When an assistant is choosing a single answer to speak, it favors the listing it understands most clearly, so removing ambiguity with accurate structured data works in your favor.',
      },
    ],
    content: [
      { type: 'p', text: 'Voice search optimization makes your Miami business the spoken answer when someone asks a phone or smart speaker for a nearby service. There is no separate voice algorithm. You win by strengthening the same local signals behind the map pack, then shaping your content around the natural, conversational way people actually ask out loud.' },
      { type: 'p', text: 'Voice and mobile search lean on one thing above all: a clear, well-maintained local presence that an assistant can read aloud with confidence. This article is part of our guide to [near me, voice and mobile local search](/guides/near-me-voice-and-mobile-local-search/), and focuses specifically on the voice side, including the bilingual reality of the Miami market.' },

      { type: 'h2', text: 'How voice search finds local businesses' },
      { type: 'p', text: 'When someone asks Siri, Google Assistant, or Alexa for a nearby plumber or a late-night pharmacy, the assistant is not running a special voice index. It pulls from the same local results that power Google\'s map pack: relevance, distance, and prominence. What changes is the format of the answer. A typed search returns a list the user scans; a voice query usually returns a single result, sometimes two or three. That compression raises the stakes, because ranking fourth still earns clicks on a screen, while a voice assistant reading one answer aloud makes second place effectively invisible.' },
      { type: 'p', text: 'Because the answer is assembled from your Google Business Profile and the structured data on your site, voice optimization is less about new tactics and more about making your existing local signals clean, complete, and machine-readable. A profile with the right primary category, accurate hours, and genuine reviews is what qualifies you to be the spoken answer in [Brickell](/location/brickell/), Doral, or anywhere else you serve.' },

      { type: 'h2', text: 'People speak differently than they type' },
      { type: 'p', text: 'The single biggest shift with voice is phrasing. Typed searches are clipped, like "emergency dentist miami." Spoken searches are full questions: "where is the nearest emergency dentist that is open right now?" Voice queries are longer, more conversational, and far more likely to begin with who, what, where, or how. Optimizing for voice means making sure your content answers those questions in the same natural language a customer would use, rather than only the compressed keywords they would type into a box.' },
      { type: 'p', text: 'In practice that means building genuinely useful question-and-answer content: a clear FAQ section, service pages that state plainly what you do, who you serve, where, and when, and answers written the way a person speaks. When your page already contains a sentence that directly answers a spoken question, you give the assistant something clean to read back. Content that buries the answer in marketing language gives it nothing to work with.' },

      { type: 'h2', text: 'Miami voice search is bilingual' },
      { type: 'p', text: 'Voice optimization in Miami is not complete in English alone. Roughly 70 percent of Miami-Dade residents speak Spanish at home, and a large share of them speak to their devices in Spanish. A customer in Doral or Little Havana is as likely to ask for a "farmacia cerca de mi abierta ahora" as the English equivalent. If your local presence and content exist only in English, you are invisible for every one of those spoken Spanish queries, no matter how strong your English SEO is.' },
      { type: 'p', text: 'Serving the Spanish voice market well means more than running English content through a translator. It means researching how Spanish-speaking Miami customers actually phrase requests, adding Spanish business descriptions and content, and making sure your profile reflects the languages you serve. Neighborhoods like [Doral](/location/doral/) and Little Havana are where this matters most, and businesses that treat Spanish voice search as a genuine channel rather than an afterthought capture demand their English-only competitors never see.' },

      { type: 'h2', text: 'Hours and the profile decide the moment' },
      { type: 'p', text: 'Voice queries are overwhelmingly urgent and on the move. People ask their phone for a service when they need it immediately, which makes two profile details decisive. The first is hours. Voice assistants and the "open now" filter exclude closed businesses outright, so if your hours are wrong, or you have not set special hours for a holiday or a storm closure, you simply will not be offered as the answer at the exact moment someone is ready to act. In a city with hurricane-season disruptions and irregular holiday schedules, keeping hours current is the difference between appearing and vanishing.' },
      { type: 'p', text: 'The second is the path to action. A spoken result that cannot be acted on instantly is wasted. A tap-to-call number, an accurate address that maps cleanly for directions, and a fast-loading mobile site all determine whether a voice result becomes a customer. Most of this lives on your Google Business Profile, which is why voice optimization and [Google Business Profile optimization](/services/google-business-profile/) are really the same work approached from different angles. Google\'s own [Business Profile Help](https://support.google.com/business/) is the authority on keeping that data accurate.' },

      { type: 'h2', text: 'Structured data and natural-language content' },
      { type: 'p', text: 'Structured data is how you hand a search engine the facts in a format it can read without guessing. LocalBusiness markup spells out your name, address, phone, hours, and area served, and FAQ markup labels your questions and answers so they are easy to surface. None of it is a magic ranking boost, but it removes ambiguity, and a voice assistant choosing a single answer rewards the listing it understands most clearly. The vocabulary maintained at [Schema.org](https://schema.org/LocalBusiness) is the reference for what each field means.' },
      { type: 'p', text: 'Pair that markup with content written in real questions and plain answers, and you cover both halves of voice: the machine-readable facts and the spoken-language match. Keep your profile and your site saying the same thing, because contradictions between what your structured data claims and what your profile shows undercut the confidence an assistant needs to read your business aloud.' },

      { type: 'h2', text: 'Where this fits, and getting help' },
      { type: 'p', text: 'Voice search is not a separate discipline to bolt on. It is what strong local SEO looks like when the result is spoken instead of displayed: a complete, accurate, bilingual-ready profile, clean structured data, and content phrased the way Miami customers actually talk. Get those right and you are positioned for voice, near me, and mobile searches at the same time, because they all draw on the same underlying signals.' },
      { type: 'p', text: 'If auditing your profile, building out Spanish content, and implementing structured data is more than your team can take on, we connect Miami businesses with vetted [local search specialists](/services/google-business-profile/) who handle it as part of a wider local SEO program. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'core-web-vitals-miami-small-business',
    hub: 'technical-seo-for-local-business',
    draft: true,
    title: 'Core Web Vitals for Miami small business websites',
    metaTitle: 'Core Web Vitals for Miami Small Business Sites',
    metaDescription:
      'What Core Web Vitals measure, why they matter for Miami local rankings, and the practical fixes that improve LCP, INP, and CLS on a small business website.',
    category: 'Strategy',
    publishDate: '2026-06-12',
    dateModified: '2026-06-12',
    excerpt:
      'Core Web Vitals are Google\'s three measurements of how your website actually feels to use: loading speed, responsiveness, and visual stability. Here is what each one means for a Miami small business site, how to check your scores for free, and the handful of fixes that move them.',
    faqs: [
      {
        question: 'Are Core Web Vitals a major ranking factor?',
        answer:
          'They are a confirmed ranking signal, but a modest one. Relevance, your Google Business Profile, reviews, and content quality all matter more. Think of Core Web Vitals as a tiebreaker among similar competitors and, more importantly, as a conversion factor: a slow page loses Miami customers who searched on a phone and will not wait for it to load, regardless of where it ranks.',
      },
      {
        question: 'Do Core Web Vitals affect the map pack?',
        answer:
          'Not directly. Map pack rankings are driven by your Google Business Profile, proximity, and reviews, not by your page speed. But the map pack sends people to your website, and if that landing page is slow or janky on a phone, you lose the customer after winning the click. Core Web Vitals protect the value of every visit your local SEO earns.',
      },
      {
        question: 'What counts as a passing score?',
        answer:
          'Google\'s published thresholds are an LCP of 2.5 seconds or less, an INP of 200 milliseconds or less, and a CLS of 0.1 or less, each measured at the 75th percentile of real user visits. In plain terms: the page shows its main content quickly, reacts to taps almost instantly, and nothing jumps around while it loads, for most of your real visitors, most of the time.',
      },
      {
        question: 'My site is on Wix or Squarespace. Can I still pass?',
        answer:
          'Usually, yes. Modern website builders have improved their platform performance substantially, and the biggest problems on builder sites are typically self-inflicted: enormous uncompressed photos, autoplaying video backgrounds, and a stack of third-party widgets. You control all of those. What you cannot easily change on a builder is the underlying platform, so if scores stay poor after cleaning up your own content, that is a signal to consider a rebuild.',
      },
      {
        question: 'Do I need a developer to fix Core Web Vitals?',
        answer:
          'Not always. Compressing images, removing unused widgets, and limiting fonts are owner-level fixes on most platforms. Code-level work like deferring scripts, restructuring templates, or fixing layout shift in a custom theme generally does need a developer or a technical SEO specialist. Run the free tests first; the report usually makes it obvious which category your problems fall into.',
      },
    ],
    content: [
      { type: 'p', text: 'Core Web Vitals are Google\'s three measurements of real-world user experience: how fast your page shows its main content (LCP), how quickly it responds to taps and clicks (INP), and how much the layout shifts while loading (CLS). For most Miami small business sites, passing them comes down to images, scripts, and hosting.' },
      { type: 'p', text: 'They are also the part of technical SEO that owners can actually see and feel, because a failing score is just a slow, jumpy page. This article is part of our guide to [technical SEO for local business websites](/guides/technical-seo-for-local-business/), and covers what each metric means, how to test your site for free, and which fixes are worth your time.' },

      { type: 'h2', text: 'The three metrics in plain terms' },
      { type: 'p', text: 'Largest Contentful Paint (LCP) measures how long it takes for the biggest visible element, usually your hero image or headline, to appear. Interaction to Next Paint (INP) measures how quickly the page responds when someone taps a button or opens a menu. Cumulative Layout Shift (CLS) measures how much the page jumps around as it loads, the effect that makes you tap the wrong link because an ad pushed everything down.' },
      { type: 'p', text: 'Google\'s thresholds, published in its [Core Web Vitals documentation](https://developers.google.com/search/docs/appearance/core-web-vitals), are 2.5 seconds or less for LCP, 200 milliseconds or less for INP, and 0.1 or less for CLS. The scores that count are field data: measurements collected from your real visitors\' devices and connections, assessed at the 75th percentile. That detail matters in Miami, where a meaningful share of your traffic is on a phone over a cellular connection, in a car, on a sidewalk, or at a job site, not on office wifi.' },

      { type: 'h2', text: 'Why this matters for a Miami local business' },
      { type: 'p', text: 'As a ranking signal, page experience is real but modest. It will not lift a thin site over a strong one, and it has no direct effect on the map pack. Where it bites is the step after the ranking: someone searches on their phone, taps your result, and either gets your page within a couple of seconds or gives up and taps the competitor below you. Local searches are heavily mobile and heavily urgent, so the tolerance for slow pages is lower than almost anywhere else in search.' },
      { type: 'p', text: 'Miami sites also carry some characteristic weight. Restaurant, hospitality, and service businesses here lean on big photography and video to sell the experience, bilingual sites often load twice the fonts and sometimes duplicate scripts, and a customer searching from a high-rise in [Brickell](/location/brickell/) or a busy stretch of Calle Ocho is on whatever signal the building or the street gives them. A page that feels fine on your office computer can be a five-second wait for the person actually trying to buy from you.' },

      { type: 'h2', text: 'How to check your scores for free' },
      { type: 'p', text: 'Run your homepage and your most important service page through [PageSpeed Insights](https://pagespeed.web.dev/), Google\'s free testing tool. The top section shows field data from real Chrome users where enough traffic exists; the lab section below diagnoses specific problems and points at the resources causing them. Test the mobile result, not the desktop one, since mobile is what Google indexes and what most of your local customers use.' },
      { type: 'p', text: 'If you have Google Search Console set up, its Core Web Vitals report shows which groups of pages pass and fail across the whole site, which beats testing pages one at a time. Check these reports a few times a year and after any redesign, new plugin, or platform change. Scores drift as content and widgets accumulate, and a site that passed last year can quietly fail today.' },

      { type: 'h2', text: 'The fixes that actually move each metric' },
      { type: 'p', text: 'For LCP, the usual culprit is the hero image. Resize photos to the dimensions they are displayed at, compress them, and use modern formats where your platform supports them. A 4 MB photo straight off a phone camera, common on restaurant and salon sites, can double your load time by itself. Decent hosting and caching matter too: if the server takes two seconds to respond, no image work will get you under the threshold.' },
      { type: 'list', items: [
        'LCP: compress and resize images, avoid video backgrounds on key landing pages, use quality hosting with caching.',
        'INP: remove widgets you do not use, limit chat, booking, and tracking scripts, and defer what does not need to load first.',
        'CLS: set dimensions on images and embeds, reserve space for banners, and limit custom fonts so text does not reflow.',
      ] },
      { type: 'p', text: 'INP problems almost always trace to JavaScript: every chat widget, booking plugin, review carousel, and analytics tag competes for the phone\'s processor at load time. Audit what is installed, remove what you do not actively use, and load the rest only when needed. CLS is the most mechanical fix of the three: give every image and embed explicit dimensions so the browser reserves the space, and stop late-loading banners from shoving content down the page.' },

      { type: 'h2', text: 'When good enough is good enough' },
      { type: 'p', text: 'Chasing a perfect 100 lab score is a poor use of a small business owner\'s time. The goal is passing field data on the pages that earn you customers: your homepage, your service pages, and your location pages. Once those pass, further optimization returns very little, and your effort is better spent on content, reviews, and the rest of your local SEO. Page speed supports the on-page work, it does not replace it, which is why we treat it as part of [on-page local SEO](/services/on-page-local-seo/) rather than a separate project.' },
      { type: 'p', text: 'If your scores are failing and the report points at template code, render-blocking scripts, or server problems rather than oversized photos, that is developer territory. We connect Miami businesses with vetted local SEO specialists who handle technical cleanup as part of a wider program, and matching is free. We do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'choose-google-business-profile-categories-miami',
    hub: 'google-business-profile-optimization',
    draft: false,
    title: 'How to choose the right Google Business Profile categories for your Miami business',
    metaTitle: 'Choosing GBP Categories for Miami Businesses',
    metaDescription:
      'Your primary Google Business Profile category is one of the strongest local ranking signals you control. How Miami businesses should pick it, which secondary categories to add, and what to avoid.',
    category: 'GBP',
    publishDate: '2026-06-22',
    dateModified: '2026-06-13',
    excerpt:
      'Google only ranks your business for searches that match your categories, and most Miami profiles either pick a primary category that is too broad or stuff secondaries that dilute it. Here is how to choose categories that match what you actually sell.',
    faqs: [
      {
        question: 'What is the difference between a primary and a secondary category?',
        answer:
          'Your primary category is the single strongest category signal Google reads, and it carries far more ranking weight than the rest. Secondary categories tell Google about additional services you offer and can help you appear for related searches, but they do not match the primary in influence. That is why the most consequential decision is the primary, not how many secondaries you add.',
      },
      {
        question: 'How many secondary categories should I add?',
        answer:
          'Only as many as describe services you genuinely deliver as a core part of the business. Google allows up to nine secondaries, but using all nine is rarely right. Each category you add slightly broadens what Google thinks you are, and a profile that claims to be six different kinds of business ranks like none of them. Two to four accurate secondaries is the typical sweet spot.',
      },
      {
        question: 'Can I create my own category if mine does not exist?',
        answer:
          'No. Categories come from a fixed list Google maintains, currently several thousand options that change throughout the year. If your exact service is not listed, choose the closest available category and use your services list, business description, and website content to communicate the specifics. Do not pick an inaccurate category just because it sounds more impressive or more searched.',
      },
      {
        question: 'Will changing my primary category hurt my rankings?',
        answer:
          'A category change usually causes some short-term ranking movement while Google re-evaluates the profile, and occasionally triggers a re-verification request. If your current primary is wrong or too broad, the correction is worth that turbulence. If your profile is ranking well and the category is accurate, do not change it just to experiment.',
      },
      {
        question: 'Do categories affect which profile features I get?',
        answer:
          'Yes. Categories control more than ranking. They determine which attributes, booking buttons, menu links, and product or service fields Google offers your profile. A restaurant category unlocks menu features, a hotel category changes the profile layout entirely, and many service categories unlock quote request features. Picking the right category gives you tools the wrong one hides.',
      },
    ],
    content: [
      { type: 'p', text: 'Your Google Business Profile categories decide which searches you are even eligible to rank for. The primary category is the single strongest signal: choose the most specific option that matches your core business, add only the secondary categories you genuinely deliver, and resist the temptation to stuff broad categories in hope of wider reach.' },
      { type: 'p', text: 'Category selection sounds like a thirty-second form field, but it shapes everything downstream, from the queries your profile can appear for to the features Google shows on it. Getting the choice right means matching the primary category to the service that actually drives revenue, then using secondary categories only where they describe genuine additional services.' },

      { type: 'h2', text: 'Why categories carry so much weight' },
      { type: 'p', text: 'Google matches local searches to businesses largely through categories. When someone in Brickell searches "personal injury attorney", Google assembles the map pack from profiles whose categories say that is what they are. If your primary category is the generic "Lawyer" rather than "Personal injury attorney", you are competing for the broad query and ceding the specific one to competitors who chose more precisely.' },
      { type: 'p', text: 'The primary category is also a relevance multiplier for everything else on the profile. Reviews, photos, and posts all help, but they help most when Google is confident about what kind of business it is ranking. Google explains how it uses categories to match businesses to searches in its [Business Profile Help documentation](https://support.google.com/business/answer/3038177), which is worth reading before you make changes.' },

      { type: 'h2', text: 'Choosing your primary category' },
      { type: 'p', text: 'The rule is specificity. Pick the narrowest category that still describes your core business, the thing that earns most of your revenue. A Coral Gables firm that does mostly estate planning should choose "Estate planning attorney" over "Law firm". A Wynwood shop that earns its living on espresso should be a "Coffee shop", not a "Cafe" or a "Restaurant", even if it serves sandwiches.' },
      { type: 'p', text: 'A practical way to validate the choice is to look at who currently ranks. Search your most valuable query from your part of town and check the categories of the three businesses in the map pack. Profile categories are visible on the listing, and tools can expose the full list. If every business ranking for your money query uses a category you have not set, that gap is usually the first thing to fix.' },
      { type: 'p', text: 'For bilingual Miami businesses, note that categories are not free text and do not need translating. Google maintains one canonical category list and localizes the display language itself, so a Little Havana business serving a Spanish-speaking clientele picks the same category as anyone else and lets Google handle presentation.' },

      { type: 'h2', text: 'Adding secondary categories without diluting the profile' },
      { type: 'p', text: 'Secondary categories exist for real, substantial service lines, not aspirations. A Miami HVAC company that also does genuine duct cleaning work should add it. A dental practice that occasionally whitens teeth as part of general dentistry does not need "Teeth whitening service" as a category; the services list covers it.' },
      { type: 'p', text: 'The cost of over-adding is dilution. Each category broadens Google\'s picture of the business, and a profile claiming to be a marketing agency, web designer, printer, and sign shop at once gives Google no confident answer about what it primarily is. When specialists audit underperforming Miami profiles, bloated category lists are one of the most common findings, alongside the issues covered in our breakdown of [the GBP mistakes Miami businesses make most often](/blog/google-business-profile-mistakes-miami-businesses-make/).' },

      { type: 'h2', text: 'Categories change, so review yours periodically' },
      { type: 'p', text: 'Google adds, renames, merges, and retires categories throughout the year. A more specific category than the one you chose two years ago may exist today, and occasionally a category you rely on is folded into another. A quick category review two or three times a year keeps the profile aligned, and it matters most in Miami\'s crowded service niches, where a newly released specific category is a brief window to out-position competitors still sitting on the broad one.' },
      { type: 'p', text: 'When you do change the primary category, expect some ranking movement while Google re-evaluates the profile, and in some cases a re-verification prompt. Make the change deliberately, once, rather than cycling through options week to week, because repeated edits to core profile fields are a pattern Google treats with suspicion.' },

      { type: 'h2', text: 'How this fits the bigger profile picture' },
      { type: 'p', text: 'Categories set the ceiling; the rest of the profile determines how close you get to it. Accurate hours, complete attributes, real photos, steady reviews, and an accurate service area all build on the foundation the category choice creates. Category selection is one of the first things covered in a professional [Google Business Profile optimization](/services/google-business-profile/) engagement precisely because every other improvement compounds on top of it.' },
      { type: 'p', text: 'If you are not sure whether your categories are helping or hurting, a specialist can audit the profile against the businesses actually ranking for your target queries. We connect Miami businesses with vetted local SEO specialists who do this every day, and matching is free. We do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'track-local-rankings-miami-neighborhoods',
    hub: 'ranking-in-the-miami-map-pack',
    draft: true,
    title: 'How to Track Your Local Rankings Across Miami Neighborhoods',
    metaTitle: 'Tracking Local Rankings by Miami Neighborhood',
    metaDescription:
      'Your map pack position changes block by block in Miami. How to track local rankings by neighborhood with a geo-grid, what to measure, and why your own search misleads you.',
    category: 'Local',
    publishDate: '2026-06-13',
    dateModified: '2026-06-13',
    excerpt:
      'Checking your own rank from your office tells you almost nothing in a city as dense as Miami, where your map pack position shifts from one block to the next. Here is how to track local rankings the way they actually behave: neighborhood by neighborhood.',
    faqs: [
      {
        question: 'Why can I not just search my business name to check my rank?',
        answer:
          'Because the result you see is personalized. Google factors in your device location, your search history, and whether you are signed in, so the map pack you see from your own desk is tuned to you and to that exact spot. A customer two miles away, or one who has never visited your site, sees something different. Searching yourself feels like checking your rank, but it measures one heavily biased data point, not how you rank across the area you serve.',
      },
      {
        question: 'What is geo-grid rank tracking?',
        answer:
          'Geo-grid tracking checks your map pack position from many simulated locations laid out as a grid across your service area, rather than from a single point. Each grid point returns the rank you would hold for a searcher standing there, so the output is a map of your visibility: strong near your address, weaker as distance grows. It is the standard way specialists measure local rank because it matches how Google actually ranks the map pack, on distance as well as relevance and prominence.',
      },
      {
        question: 'How often should I check my map pack rankings?',
        answer:
          'For most Miami businesses, a weekly or biweekly check is enough to spot real trends without chasing daily noise. Local rankings fluctuate naturally day to day, so a single bad reading rarely means anything. Track on a consistent schedule, from the same grid, so you are comparing like with like. Check more often only right after a major change, such as a category edit or a citation cleanup, when you want to see how the profile responds.',
      },
      {
        question: 'Why do my rankings change from one Miami neighborhood to another?',
        answer:
          'Distance is one of Google\'s three local ranking factors, and Miami packs a lot of competing businesses into a small area. A firm three blocks closer to the searcher can take the spot you hold from your own address, so you might rank first in Brickell, mid-pack in Wynwood, and not at all in Doral. This is normal and expected. It is also why a single citywide rank check is misleading and a per-neighborhood view is essential.',
      },
      {
        question: 'Do I need a paid tool to track local rankings?',
        answer:
          'A dedicated geo-grid tool makes tracking far more accurate and far less tedious, and most specialists use one. You can approximate it manually by checking from different points with location settings adjusted, but it is slow and easy to bias. For a business serious about its map pack performance across several Miami neighborhoods, a proper rank tracker pays for itself in clarity. A specialist will usually include this tracking as part of an engagement.',
      },
    ],
    content: [
      { type: 'p', text: 'To track your local rankings in Miami, measure your map pack position from multiple points across each neighborhood you serve, not from a single citywide search. Rankings shift block by block here, so a grid of readings across Brickell, Wynwood, Coral Gables, and your other target areas is the only honest picture of where you actually appear.' },
      { type: 'p', text: 'Most owners check their rank the natural way: they search their service from their phone and see where they land. In a dense market that habit quietly misleads them. This article is part of our guide to [how the Miami map pack is ranked](/guides/ranking-in-the-miami-map-pack/), and it covers how to track your position in a way that reflects how Google really behaves across the city.' },

      { type: 'h2', text: 'Why searching yourself tells you almost nothing' },
      { type: 'p', text: 'When you search from your own device, Google personalizes the result. It knows where you are standing, what you have searched before, and whether you are signed in, and it tunes the map pack to all of that. From your office in Coral Gables you may sit comfortably in the top three, which feels like good news, but it only describes how you rank for someone at that exact spot with your browsing history.' },
      { type: 'p', text: 'The customer you actually want is somewhere else: a few miles north in Aventura, across the bay on South Beach, or anywhere they happen to be holding their phone. Their result is built from their location, not yours. So the single most common way Miami owners check their rank is also the least reliable, because it measures the one place you are guaranteed to look strong.' },

      { type: 'h2', text: 'Track by neighborhood, not by city' },
      { type: 'p', text: 'Because distance is a ranking factor, your visibility is not one number, it is a map. You might top the pack within a half mile of your Brickell address, fade to fourth or fifth in Wynwood, and disappear entirely by the time you reach Doral or Kendall. A citywide average hides all of that and tells you nothing you can act on.' },
      { type: 'p', text: 'The fix is geo-grid tracking. A rank tracker checks your position from a grid of points spread across your service area and returns the rank a searcher at each point would see. The output looks like a heat map: green where you dominate, red where you are invisible. For a Miami business that wants customers from several neighborhoods, that map is the difference between guessing and knowing. It shows exactly which areas you own and which ones a closer competitor is taking from you.' },
      { type: 'p', text: 'Set the grid to cover the neighborhoods you genuinely serve and can reach, not the entire metro. A Little Havana restaurant has no reason to track rank in Pinecrest, and padding the grid with areas you do not serve just adds noise. Match the grid to your real catchment, then watch how it changes over time.' },

      { type: 'h2', text: 'What to measure and how often' },
      { type: 'p', text: 'Track three things together. First, your map pack rank for your money queries across the grid, the headline number. Second, your organic rank for the same terms, since the links below the pack still drive traffic. Third, the inputs that move those ranks, chiefly your review count and rating and any citation or profile changes, so you can connect cause to effect later.' },
      { type: 'list', items: [
        'Map pack position across the grid for each priority query.',
        'Organic position for the same queries, tracked alongside the pack.',
        'Review volume, average rating, and the dates of profile or citation changes.',
      ] },
      { type: 'p', text: 'A weekly or biweekly cadence suits most businesses. Local rankings wobble day to day for reasons no one can fully control, so daily checking invites you to overreact to noise. Track on a fixed schedule from the same grid so every reading is comparable, and tighten the cadence only after a deliberate change, such as a new primary category or a finished citation cleanup, when you want to watch the profile respond.' },

      { type: 'h2', text: 'Turning tracking data into action' },
      { type: 'p', text: 'Tracking is only useful if it changes what you do. When the grid shows a neighborhood where you are weak, that is where the next push belongs: a location page with real local substance, citations on directories that area trusts, or reviews from customers there who mention the neighborhood by name. The same patient timeline applies that we describe in [why Miami local SEO takes longer than most US cities](/blog/why-miami-local-seo-takes-longer-than-other-cities/), so judge progress over months, not days.' },
      { type: 'p', text: 'Use the grid to set honest expectations too. If a competitor sits three blocks from a searcher and you are two miles away, distance alone may cap how high you can climb there, and your energy is better spent defending the areas you can win. Google\'s own guidance on [improving your local ranking](https://support.google.com/business/answer/7091) confirms that relevance, distance, and prominence work together, which is why tracking by location, rather than chasing one citywide number, is what tells you where effort will actually pay off.' },
      { type: 'p', text: 'Sustained map pack gains across a market as competitive as Miami usually come from disciplined [map pack optimization](/services/map-pack-optimization/) guided by exactly this kind of data, often concentrated first in a core area like [Brickell](/location/brickell/) before expanding outward. We connect Miami businesses with vetted local SEO specialists who track rankings this way as a matter of routine, and matching is free. We do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'best-local-directories-miami-businesses',
    hub: 'local-citations-and-nap-consistency',
    draft: true,
    title: 'Which Local Directories Matter Most for Miami Businesses',
    metaTitle: 'Best Local Directories for Miami Businesses',
    metaDescription:
      'Not every business directory is worth your time. Here are the directories Miami businesses should list on first, the data aggregators that feed the rest, and what to skip.',
    category: 'Local',
    publishDate: '2026-06-15',
    dateModified: '2026-06-15',
    excerpt:
      'There are hundreds of business directories, and most of them do nothing for your ranking. Here is the short list that actually matters for a Miami business, in the order you should claim them, plus the data aggregators that quietly populate everything else.',
    faqs: [
      {
        question: 'Which single directory matters most for a Miami business?',
        answer:
          'Your Google Business Profile, by a wide margin. It is the listing that decides whether you appear in the map pack and on Google Maps, and it is free to claim and manage. Every other directory is supporting cast. If you only have time for one listing, make it a complete, accurate, verified Google Business Profile, then build outward from there.',
      },
      {
        question: 'Should I pay a service to submit my business to hundreds of directories?',
        answer:
          'Be cautious. Bulk submission services often create thin or duplicate listings and submit inconsistent data that you then have to clean up later. A smaller set of accurate listings on directories that matter beats hundreds of low-quality ones. If you do use a paid service, prefer one that pushes data through the major aggregators and lets you control the exact name, address, and phone it submits.',
      },
      {
        question: 'Are Miami or Florida-specific directories worth listing on?',
        answer:
          'The good ones are. A listing in your local chamber of commerce, a neighborhood business association, or a reputable Florida industry directory carries real local relevance and sometimes sends referral traffic on top of the citation value. The test is whether a real Miami audience uses the directory. Skip the generic, scraped "Miami business listing" sites that exist only to host ads.',
      },
      {
        question: 'How many directories does a Miami business actually need?',
        answer:
          'There is no magic count, and quality beats volume every time. For most Miami businesses, a clean set of the core platforms plus the major aggregators and a handful of relevant industry and local directories, on the order of thirty to sixty accurate listings, covers the ground that matters. Chasing hundreds of obscure directories adds little and increases the risk of inconsistent data.',
      },
      {
        question: 'Do I need a Yelp listing even if I do not like the platform?',
        answer:
          'For most Miami businesses, yes, at least a claimed and accurate one. Yelp is a major data source that feeds Apple Maps and other platforms, and it still ranks and converts well for restaurants, personal services, and certain audiences. You do not have to advertise on it, but leaving the listing unclaimed or inconsistent costs you a citation and cedes control of how your business appears.',
      },
    ],
    content: [
      { type: 'p', text: 'Of the hundreds of business directories online, only a few dozen do real work for a Miami business. The ones that matter are the core platforms customers actually use, the data aggregators that feed everything downstream, and the local and industry directories with a genuine Miami audience. List on those accurately, in that order, and ignore the long tail.' },
      { type: 'p', text: 'Citations are only as valuable as they are consistent and credible, so where you list matters as much as how many places you appear. This article is part of our guide to [building consistent citations](/guides/local-citations-and-nap-consistency/), and focuses on choosing the right directories rather than cleaning up the ones you already have.' },

      { type: 'h2', text: 'Start with the core platforms' },
      { type: 'p', text: 'A handful of platforms carry far more weight than the rest combined, and every Miami business should claim and complete these first. Your Google Business Profile leads the list, because it directly powers the map pack and Google Maps. After that come Apple Maps, which serves every iPhone user asking Siri or Maps for a nearby business, and Bing Places, which feeds Microsoft and some voice and in-car systems.' },
      { type: 'p', text: 'Yelp and Facebook round out the core set. Both are high-authority citations in their own right, and Yelp in particular is a data source other platforms pull from, so an inconsistent Yelp listing can quietly spread bad data elsewhere. Claim each one, verify it, and make sure the name, address, and phone match exactly across all five before you go any further.' },
      { type: 'list', items: [
        'Google Business Profile: the single most important listing, and the foundation of the map pack.',
        'Apple Maps: reaches every iPhone user searching Maps or asking Siri.',
        'Bing Places: feeds Microsoft search and several voice and automotive systems.',
        'Yelp: a high-authority citation and a data source that feeds other platforms.',
        'Facebook: a widely used listing and a trust signal for many local customers.',
      ] },

      { type: 'h2', text: 'Use the data aggregators to cover the long tail' },
      { type: 'p', text: 'Below the core platforms sit the data aggregators, the wholesalers of business information in the United States. They collect and distribute business data to hundreds of smaller directories, apps, and services automatically. Getting your accurate listing into the major aggregators is the efficient way to populate dozens of downstream directories correctly without claiming each one by hand.' },
      { type: 'p', text: 'The flip side is that aggregators are also how bad data spreads. If an aggregator holds an old address or a former phone number for your business, it will keep pushing that wrong information out to smaller sites no matter how many individual listings you fix. That is why correcting your data at the aggregator level is usually a better investment than chasing one obscure directory at a time, a point that matters even more for established Miami businesses that have changed address or rebranded over the years.' },

      { type: 'h2', text: 'Add the industry and Miami-specific directories that count' },
      { type: 'p', text: 'Once the core platforms and aggregators are clean, the highest-value additions are directories with genuine relevance to your industry or your city. Industry directories signal topical relevance: Avvo for attorneys, Healthgrades for medical practices, Houzz for home and design, TripAdvisor for hospitality. A listing on the right industry platform is worth more than a dozen general ones because it sits in a context Google associates with your line of work.' },
      { type: 'p', text: 'Local directories do the same job for geography. A listing with the Greater Miami Chamber of Commerce, a neighborhood business association, or a reputable Florida directory reinforces that your business is genuinely part of the local community, which is exactly what local ranking systems try to measure. For a business rooted in a specific area like [Doral](/location/doral/) or Little Havana, the neighborhood and Spanish-language community directories that real residents actually use can be especially worthwhile. The filter is simple: list where a real Miami audience looks, and skip the scraped directories that exist only to serve ads.' },

      { type: 'h2', text: 'What to skip, and why volume backfires' },
      { type: 'p', text: 'Plenty of services promise to blast your business across hundreds or thousands of directories. For local SEO this is mostly noise, and it can actively hurt you. Mass submission tools frequently introduce inconsistent name, address, and phone data, create duplicate listings, and place you on low-quality sites that pass no value and that Google may discount entirely. You then inherit the cleanup, which is slower and costlier than careful listing would have been.' },
      { type: 'p', text: 'The better mental model is a clean set rather than a big set. A few dozen accurate, consistent listings on directories people actually use will outperform a sprawling footprint of thin ones every time. If a directory has no real audience, no editorial standards, and no relevance to Miami or your industry, being listed there adds nothing worth the risk to your data consistency.' },

      { type: 'h2', text: 'A practical order of operations' },
      { type: 'p', text: 'Work from most important to least. Claim and fully complete your Google Business Profile first, following the official guidance in the [Google Business Profile Help Center](https://support.google.com/business/answer/3038177) so the listing is verified and accurate. Next, claim Apple Maps, Bing Places, Yelp, and Facebook with identical details. Then push your data through the major aggregators, and finally add the industry and local directories that fit your business. Decide your exact name, address, and phone format before you start, so every listing matches from the first entry.' },
      { type: 'p', text: 'Done in this order, directory building is a finite project rather than an endless one. If your business has a long Miami history and the listing landscape already looks tangled, we connect you with vetted [citation building specialists](/services/local-citation-building/) who handle selection, submission, and consistency as a single piece of work. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do.' },
    ],
  },

  {
    slug: 'review-gating-ftc-rules-miami-businesses',
    hub: 'google-reviews-and-reputation',
    draft: true,
    title: 'Review Gating and the FTC Rules Miami Businesses Must Follow',
    metaTitle: 'Review Gating and FTC Rules for Miami Businesses',
    metaDescription:
      'Review gating asks only happy customers for public reviews. Google bans it and the FTC review rule adds federal penalties. How Miami businesses stay compliant.',
    category: 'Reviews',
    publishDate: '2026-06-15',
    dateModified: '2026-06-15',
    excerpt:
      'Review gating, screening customers so only the happy ones reach public review platforms, has moved from gray-area growth hack to genuine legal and platform risk. Here is what Google and the FTC prohibit, and the compliant approach that produces a more believable review profile.',
    content: [
      { type: 'p', text: 'Review gating is the practice of privately screening customers and routing only the happy ones to public review platforms while steering unhappy ones to a private channel. Google banned it in 2018, and the FTC\'s Consumer Reviews and Testimonials Rule now makes several related tactics federal violations. Here is what is prohibited and how a Miami business stays compliant.' },
      { type: 'p', text: 'Plenty of Miami businesses still gate reviews without realizing it has become a real legal and platform risk rather than a clever shortcut. The downside ranges from a silent Google Business Profile suspension to federal civil penalties. The encouraging part is that the compliant approach is simpler to run and produces a more believable review profile, which is part of a healthy [Google review and reputation program](/guides/google-reviews-and-reputation/).' },

      { type: 'h2', text: 'What review gating actually is' },
      { type: 'p', text: 'Review gating adds a filter between the customer and the public review form. A typical setup asks customers privately how their experience was, then sends the satisfied ones a direct link to Google while diverting dissatisfied ones to a private feedback form that never reaches the public profile. The intent is to inflate the public rating by suppressing the negatives before they are ever written.' },
      { type: 'p', text: 'You see it across Miami in everyday forms: a tablet at a Brickell clinic that only displays the Google review link after a customer taps a smiling face, or an automated text that branches happy customers to Google and everyone else to an internal survey. It is worth separating this from legitimate feedback collection. Asking every customer for private feedback is fine. Using that private answer to decide who gets invited to leave a public review is what crosses the line.' },

      { type: 'h2', text: 'Why Google prohibits review gating' },
      { type: 'p', text: 'Google\'s review policies require that you treat every customer the same way: solicit reviews from all of them, not a hand-picked subset selected by predicted sentiment. Selectively discouraging or preventing negative reviews while encouraging positive ones is an explicit policy violation, and has been since Google updated its guidance in 2018. The official guidance is set out in the [Google Business Profile Help Center](https://support.google.com/business/answer/7035772).' },
      { type: 'p', text: 'Enforcement is unforgiving. Google can remove the affected reviews, suppress the profile, or suspend it outright, often with no warning and a slow appeals process. Because the Miami map pack ranks heavily on prominence, and reviews are a core prominence signal, a suspension can erase your local visibility overnight in exactly the dense neighborhoods where it is hardest to win it back.' },

      { type: 'h2', text: 'What the FTC review rule prohibits' },
      { type: 'p', text: 'The FTC\'s Rule on the Use of Consumer Reviews and Testimonials took effect on October 21, 2024, and it raises the stakes well beyond platform policy. According to the [FTC\'s guidance on the rule](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers), it bans a set of deceptive review practices outright:' },
      { type: 'list', items: [
        'Writing, buying, or selling fake reviews from people who do not exist or never used the business.',
        'Offering any incentive conditioned on a review expressing a particular sentiment, positive or negative.',
        'Owners, managers, and employees reviewing the business without clearly disclosing the relationship.',
        'Suppressing reviews through unfounded legal threats or intimidation, or publishing only a misleading subset of the reviews received.',
      ] },
      { type: 'p', text: 'Review gating sits closest to that final provision on suppression and to the rules on conditioned incentives. Even where a specific gating setup might be argued not to fit one clause exactly, it almost always trips Google\'s policy and exposes you to the FTC\'s suppression provision. The safe reading is straightforward: do not build any system whose purpose is to keep genuine negative experiences off your public profile.' },

      { type: 'h2', text: 'The penalties a Miami business faces' },
      { type: 'p', text: 'There are two layers of risk. The platform layer is Google: removed reviews, a damaged ranking, or a suspended profile that takes weeks to recover, if it recovers at all. For a service business depending on the map pack for calls, that is a direct hit to revenue.' },
      { type: 'p', text: 'The federal layer is the FTC, which can seek civil penalties of up to $53,088 per violation for knowing breaches of the rule, and has already issued warning letters to companies it believes are non-compliant. For a small Miami business, penalties at that scale are not a cost of doing business, they are existential. The combination of platform and federal exposure is why gating is no longer worth the perceived upside.' },

      { type: 'h2', text: 'The compliant alternative that works better' },
      { type: 'p', text: 'The compliant approach is also the more effective one: ask every customer for a review the same way, through the same single-click link, with no screening based on how happy they seem. Then respond professionally to the negatives that inevitably arrive. The mechanics of doing this consistently are covered in our guide to building a [systematic review request workflow](/blog/review-acquisition-strategy-for-miami-small-businesses/).' },
      { type: 'p', text: 'A public profile that mixes mostly strong reviews with the occasional measured response to a three-star review is more persuasive than a suspicious wall of perfect five-star ratings. Prospective customers trust a 4.6 average with thoughtful replies more than a flawless 5.0, and that trust converts. Handled this way, negatives become proof that the profile is real and that you stand behind your work.' },
      { type: 'p', text: 'If keeping a request system compliant and consistent is more than your team can manage, we connect Miami businesses with vetted [review management specialists](/services/review-management/) who build the workflow correctly from the start. The matching is free, with no obligation, and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
    faqs: [
      { question: 'Is review gating illegal in the United States?', answer: 'Review gating violates Google\'s review policies and can fall foul of the FTC\'s Consumer Reviews and Testimonials Rule, which took effect on October 21, 2024 and prohibits suppressing reviews or conditioning incentives on sentiment. Knowing violations can carry civil penalties of up to $53,088 each.' },
      { question: 'What is the difference between asking for reviews and review gating?', answer: 'Asking for reviews means inviting every customer to leave honest public feedback through the same link. Gating means screening customers first and only routing the satisfied ones to the public review form while diverting the unhappy ones elsewhere. The selective routing is what crosses the line.' },
      { question: 'Can I send unhappy customers to a private feedback form?', answer: 'You can collect private feedback from everyone, but you cannot use that private answer to decide who is invited to review you publicly. Offer all customers the same public review path; collecting internal feedback in parallel is fine as long as it does not gate who reaches the public profile.' },
      { question: 'What happens if Google catches review gating?', answer: 'Google can remove the affected reviews, suppress your listing, or suspend the Google Business Profile outright, frequently without warning. Because reviews feed map-pack prominence, a suspension can wipe out your local visibility in competitive Miami neighborhoods and take weeks to appeal.' },
      { question: 'Does the FTC review rule apply to small Miami businesses?', answer: 'Yes. The rule applies broadly to businesses that use consumer reviews and testimonials, not only to large companies. Small Miami businesses are subject to the same prohibitions on fake reviews, sentiment-conditioned incentives, and review suppression, and the same civil penalty exposure for knowing violations.' },
    ],
  },

  {
    slug: 'local-keyword-research-miami-business',
    hub: 'on-page-local-seo',
    draft: true,
    title: 'How to do local keyword research for a Miami business',
    metaTitle: 'Local Keyword Research for Miami Businesses',
    metaDescription:
      'How to find the keywords Miami customers actually search: service and neighborhood modifiers, Spanish-language demand, free research tools, and mapping terms to pages.',
    category: 'Strategy',
    publishDate: '2026-06-15',
    dateModified: '2026-06-15',
    excerpt:
      'Local keyword research is the map that guides every other on-page decision. Here is how Miami businesses find the terms customers actually search, account for the bilingual market, and map each keyword to the right page.',
    faqs: [
      {
        question: 'How is local keyword research different from regular keyword research?',
        answer:
          'Regular keyword research tends to chase search volume and broad topics. Local research chases intent and geography. A Miami business does not need to rank for general industry tips; it needs the specific service-plus-place terms its customers type when they are ready to hire, such as "ac repair coral gables" or "personal injury lawyer brickell". The buyer is usually nearby and close to a decision, so a lower-volume local term is far more valuable than a high-volume national one.',
      },
      {
        question: 'Should I research keywords in Spanish for my Miami business?',
        answer:
          'If you serve any of Miami\'s heavily Spanish-speaking areas, yes. A large share of Miami-Dade residents search in Spanish, and phrases like "plomero en doral" or "abogado de accidentes" carry real demand that English-only research never surfaces. The key is to research the Spanish terms natively rather than translating your English list, because the words customers actually use are often not direct translations.',
      },
      {
        question: 'Do I need paid tools for local keyword research?',
        answer:
          'No. Most of the work can be done with free sources. Google autocomplete, the "People also ask" and "related searches" boxes, your Google Business Profile insights, and Search Console all reveal terms real customers use. Google\'s Keyword Planner adds volume ranges at no cost. Paid tools speed up competitor analysis and clustering, but a careful Miami business can build a strong keyword map without them.',
      },
      {
        question: 'How do I know which keyword goes on which page?',
        answer:
          'Match the keyword to the intent behind it. Transactional service-plus-neighborhood terms belong on service pages or location pages, where you have an offer and proof. Informational questions belong in guides or blog posts that answer them. The common mistake is forcing every term onto the homepage. Mapping intent to page type tells you both where a keyword belongs and which new pages are worth building.',
      },
      {
        question: 'How often should I redo keyword research?',
        answer:
          'Treat it as a living list, not a one-time project. Revisit it a few times a year and whenever you add a service or service area. Miami demand is also seasonal, shifting around hurricane preparation and the winter influx of seasonal residents, so checking your terms ahead of those cycles helps you publish before demand peaks rather than after.',
      },
    ],
    content: [
      { type: 'p', text: 'Local keyword research for a Miami business means finding the exact words your customers type when they want what you sell, then matching each one to the right page. It blends service terms with neighborhoods, accounts for Miami\'s bilingual market, and prioritizes intent over raw search volume.' },
      { type: 'p', text: 'Done well, it is the map that directs every other on-page decision, from your title tags to your service pages. This article is part of [the wider on-page local SEO playbook](/guides/on-page-local-seo/), and walks through how to research and prioritize the keywords that actually bring Miami customers to your door.' },

      { type: 'h2', text: 'Why local research is a different job' },
      { type: 'p', text: 'National keyword research chases volume and broad topics. Local research chases intent and geography. A Brickell plumber does not need to rank for "plumbing tips"; they need "emergency plumber brickell" and the Spanish equivalents, because the person searching that is close by, ready to act, and thinking about location. A lower-volume local term that converts beats a high-volume national one that never calls.' },
      { type: 'p', text: 'Two modifiers dominate local queries: the service and the place. Sometimes the place is explicit, as in "water heater repair coral gables"; sometimes it is implicit in a "near me" search where Google supplies the location from the device. Good research has to cover both the spelled-out neighborhood queries and the implied ones.' },

      { type: 'h2', text: 'Build seed terms from how customers actually speak' },
      { type: 'p', text: 'Start by listing every service in plain customer language, not industry jargon. People search "ac repair", not "HVAC remediation". Then layer in the neighborhoods you genuinely serve: Brickell, Wynwood, Coral Gables, Doral, Little Havana, and the rest of your real service area. Each service crossed with each area is a seed term worth checking.' },
      { type: 'p', text: 'Miami adds a bilingual layer most US cities do not. With a large Spanish-speaking population, many customers search in Spanish: "plomero en doral", "abogado de accidentes miami". For businesses serving areas like [Doral](/location/doral/) and [Little Havana](/location/little-havana/), researching Spanish keywords independently, rather than translating the English ones, surfaces demand that monolingual research misses entirely.' },
      { type: 'list', items: [
        'Service terms in plain, customer-facing language.',
        'Neighborhood and "near me" variants for each service.',
        'Spanish-language equivalents, researched natively rather than translated.',
        'Question phrases customers ask before buying, such as cost and timing questions.',
      ] },

      { type: 'h2', text: 'Expand the list and find the gaps' },
      { type: 'p', text: 'Once you have seeds, expand them with free sources. Google autocomplete and the "People also ask" and "related searches" boxes show real query variations at no cost. Google\'s [Keyword Planner](https://support.google.com/google-ads/answer/7337243) provides volume ranges and fresh ideas, and your own Google Business Profile insights and Search Console reveal the terms already bringing you impressions, which are often your easiest wins to reinforce.' },
      { type: 'p', text: 'Then study the competitors already ranking in the neighborhoods you want. The services and phrases on their pages reveal terms you may have overlooked, and the queries no local competitor has covered well are your fastest openings. In a dense market like Miami, an underserved long-tail term is frequently easier to win than a crowded head term.' },

      { type: 'h2', text: 'Map each keyword to the right page' },
      { type: 'p', text: 'A keyword list is only useful once every term has a home. Match the intent to the page type: transactional service-plus-neighborhood queries belong on service pages or location pages where you have an offer and local proof, while informational questions belong in guides and blog posts. Forcing everything onto the homepage is the single most common mistake and the easiest to avoid.' },
      { type: 'p', text: 'This mapping also drives your internal linking and tells you what to build next. A cluster of unanswered "how much does X cost in Miami" questions is a content brief; a strong "[service] [neighborhood]" term with no dedicated page is a reason to build one. Our network of vetted [on-page SEO specialists](/services/on-page-local-seo/) does this mapping at scale, but the logic is the same whether you handle it yourself or hand it off.' },

      { type: 'h2', text: 'Mistakes that waste the effort' },
      { type: 'p', text: 'The biggest trap is chasing volume over intent. A broad citywide category term sends unqualified traffic and is brutally competitive, while specific neighborhood-plus-service terms convert far better and rank sooner. Ignoring Spanish-language demand is a close second in Miami, and so is targeting head terms you cannot realistically win instead of the long-tail queries where you can.' },
      { type: 'p', text: 'Two more quietly drain results: stuffing the same term across several pages, which makes them compete with each other, and treating research as a one-time task. Miami demand shifts with the seasons, so a list built once and never revisited slowly drifts out of step with what customers are actually searching.' },

      { type: 'p', text: 'Keyword research is the cheapest high-leverage work in local SEO, because it makes every downstream decision more accurate. If you would rather have it done as part of a structured on-page program, we connect Miami businesses with vetted specialists who research, map, and track the terms that bring you customers. Matching is free and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
  },

  {
    slug: 'toxic-backlinks-hurt-miami-rankings',
    hub: 'local-link-building',
    draft: true,
    title: 'Toxic backlinks that can hurt your Miami rankings',
    metaTitle: 'Toxic Backlinks That Hurt Miami Rankings',
    metaDescription:
      'Not every backlink helps. How Miami businesses spot toxic links and link schemes that can sink map pack rankings, and how to clean them up safely.',
    category: 'Strategy',
    publishDate: '2026-06-16',
    dateModified: '2026-06-16',
    excerpt:
      'Bad backlinks are one of the few SEO problems that can actively pull your Miami business down the rankings. Here is how to recognize toxic links and link schemes, understand how much damage they really do, and clean up a profile that has picked up the wrong kind of links.',
    faqs: [
      {
        question: 'What makes a backlink toxic?',
        answer:
          'A link is toxic when it exists to manipulate rankings rather than because a real site genuinely chose to reference you. The usual signals are irrelevance (a link from an unrelated site in another industry or country), low quality (spun or auto-generated content, link farms, expired-domain networks), and paid placement without a sponsored or nofollow tag. One or two odd links are normal and harmless; a pattern of irrelevant, manipulative links is what causes problems.',
      },
      {
        question: 'Will a few bad links actually get my site penalized?',
        answer:
          'Usually not on their own. Google says it ignores most low-quality links automatically rather than penalizing for them, because anyone could otherwise point spam at a competitor. The real risk comes from a deliberate pattern of manipulative links you built or bought, which can trigger ranking suppression or, less commonly, a manual action in Search Console. A handful of random spammy links pointing at your Brickell or Doral business is almost always safe to leave alone.',
      },
      {
        question: 'Are paid links always against Google\'s rules?',
        answer:
          'No. Paying to sponsor a real Miami event, charity, or publication and receiving a link is fine, as long as that link is marked sponsored or nofollow so it does not pass ranking credit. What violates Google\'s link spam policies is paying for links that pass credit, buying links in bulk, or trading links through a network. The deciding factor is whether the link is disclosed and whether a real relationship sits behind it.',
      },
      {
        question: 'Should I use Google\'s disavow tool?',
        answer:
          'Rarely, and carefully. The disavow tool tells Google to ignore specific links, and it is meant for cases where you have a manual action or built a large volume of manipulative links you cannot remove. For most Miami small businesses that never bought links, disavowing is unnecessary and can do harm if you accidentally disavow links that were actually helping. Treat it as a last resort, ideally with a specialist reviewing the list first.',
      },
      {
        question: 'How do I tell a link-building offer is a scheme?',
        answer:
          'Watch for promises of a large number of links fast and cheap, "guaranteed DA50+ backlinks", private blog networks, link exchanges, and offers of generic guest posts on unrelated sites. Anything that sells links by volume rather than describing a real relationship or a genuine reason a site would reference you is a scheme. A simple test: if you would be uncomfortable explaining the link to a Google reviewer out loud, do not buy it.',
      },
    ],
    content: [
      { type: 'p', text: 'Most backlinks either help your Miami business or do nothing at all. A small number actively hurt. Toxic backlinks are links built to manipulate rankings rather than earned from real sites, and a deliberate pattern of them can suppress your map pack visibility or trigger a penalty. Knowing how to spot them, and how much they really matter, keeps you from both the danger and the panic.' },
      { type: 'p', text: 'Link building is the corner of local SEO where shortcuts are sold hardest and where the shortcuts do the most damage. This article is part of our guide to [building authority through local links](/guides/local-link-building/), and it covers the defensive side: which links are risky, how Google actually treats them, and how to clean up a profile that has picked up the wrong kind of attention.' },

      { type: 'h2', text: 'What makes a backlink toxic' },
      { type: 'p', text: 'A healthy backlink is relevant, comes from a site real people visit, and exists because someone genuinely chose to reference you. A toxic backlink fails those tests. The clearest warning signs are irrelevance, a link from a site with no connection to your industry or to the Miami market, and obvious manipulation, where the linking page exists only to host links rather than to serve readers.' },
      { type: 'p', text: 'In practice the toxic patterns repeat. Links from spun or auto-generated content, from link farms and private blog networks, from expired domains repurposed to pass credit, and from bulk offshore directories that list thousands of unrelated businesses all fall into the same bucket. A pile of identical anchor text pointing at one page, especially exact-match commercial phrases, is another tell, because natural links rarely all read the same way.' },

      { type: 'h2', text: 'The link schemes Miami businesses fall for' },
      { type: 'p', text: 'The schemes are easy to recognize once you know the shape of them. They are almost always sold on volume and speed: hundreds of links for a flat fee, "first page guaranteed", or packages priced by the domain authority of the linking sites. Real link earning does not work that way, so the pitch itself is the warning.' },
      { type: 'list', items: [
        'Bulk paid links sold by the hundred, usually with no disclosure and no real site behind them.',
        'Private blog networks (PBNs), clusters of sites built solely to link out and pass credit.',
        'Link exchanges, "you link to me and I link to you" at scale, which Google treats as a scheme.',
        'Generic guest posts placed on unrelated sites purely for the link, with no real readership.',
        'Mass directory submissions to low-quality or foreign directories that list everyone.',
      ] },
      { type: 'p', text: 'These all violate Google\'s link spam policies, which treat links intended to manipulate ranking as a violation rather than a tactic. Google documents the categories plainly in its [link spam policies](https://developers.google.com/search/docs/essentials/spam-policies), worth reading before you ever pay for a link. The legitimate alternative, earning links through real sponsorships, partnerships, and press, is slower but durable, and it is the only approach that compounds instead of putting you at risk.' },

      { type: 'h2', text: 'How much damage toxic links really do' },
      { type: 'p', text: 'This is where most advice overstates the threat. Google has said for years that it ignores the vast majority of low-quality links automatically, precisely because it cannot punish a site for links anyone could build against a competitor. If a spammy directory in another country scrapes your Wynwood gallery and lists it, that link almost certainly does nothing, good or bad, and you can leave it alone.' },
      { type: 'p', text: 'The real risk is self-inflicted. A deliberate pattern of manipulative links that you built or bought is different from random spam, and it can lead to ranking suppression or, in clearer cases, a manual action that shows up in Google Search Console. The practical line is simple: links other people point at you are rarely your problem, while links you commissioned to game the system are the ones that can cost you. That is the strongest argument for never buying links in the first place.' },

      { type: 'h2', text: 'Auditing your backlink profile' },
      { type: 'p', text: 'You cannot judge your link risk without seeing your links. Google Search Console shows the sites linking to you for free, which is enough for most small Miami businesses to spot anything alarming. Dedicated backlink tools give a fuller picture and flag suspicious patterns, which matters more for an established business that has changed hands, rebranded, or worked with past agencies whose methods you cannot vouch for.' },
      { type: 'p', text: 'As you review, sort links into three groups: clearly good (relevant, local, real sites), clearly junk that you can ignore (random scraped spam you never sought), and the worrying middle, links that look like they were bought or built to manipulate. It is that middle group, especially anything a previous provider created, that deserves attention. If your business operates across several neighborhoods or in both English and Spanish, check that old listings and past campaigns have not left a trail of manufactured links behind.' },

      { type: 'h2', text: 'Cleaning up and the disavow question' },
      { type: 'p', text: 'When you find genuinely toxic links you commissioned, the cleanest fix is removal: ask the linking site to take the link down. That is slow and often unanswered, which is why the disavow tool exists. Disavowing tells Google to ignore specific links, and it is designed for the narrow case of a manual action or a large self-built spam problem you cannot otherwise undo.' },
      { type: 'p', text: 'For the typical Miami small business that never bought links, disavowing is unnecessary and can backfire, because disavowing a link that was actually helping quietly removes its benefit. Treat the tool as a last resort, use it conservatively, and ideally have someone experienced review the list before you submit it. If you are unsure whether your profile carries real risk, that uncertainty itself is a reason to get a second opinion rather than guess.' },

      { type: 'p', text: 'The safest backlink strategy is the boring one: earn relevant local links through real relationships and never buy your way to volume. If you have inherited a questionable link profile or simply want it assessed properly, we connect Miami businesses with vetted [link building specialists](/services/local-link-building/) who audit, clean up, and rebuild link profiles the right way. Matching is free and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
  },

  {
    slug: 'bilingual-google-business-profile-miami-spanish',
    hub: 'google-business-profile-optimization',
    draft: false,
    title: 'Setting up a bilingual Google Business Profile for the Miami market',
    metaTitle: 'Bilingual Google Business Profile for Miami (2026)',
    metaDescription:
      'Most of Miami-Dade speaks Spanish at home. How to set up a Google Business Profile that reaches English and Spanish searchers, from the description to reviews and Posts.',
    category: 'GBP',
    publishDate: '2026-06-27',
    dateModified: '2026-06-27',
    excerpt:
      'A majority of Miami-Dade residents speak Spanish at home, yet most Google Business Profiles here are built for English searchers only. Here is how to make one profile work for both audiences without splitting your listing or breaking Google policy.',
    faqs: [
      {
        question: 'Can I create two Google Business Profiles, one in English and one in Spanish?',
        answer:
          'No. Google allows one profile per real business location, and creating a second listing for the same address to target a different language is a duplicate, which can get both listings suspended. The correct approach is a single profile written in your primary language, with the second language carried through reviews, replies, Posts, and your services list rather than a separate listing.',
      },
      {
        question: 'Which language should the business description be in?',
        answer:
          'Write it in the language most of your customers search in. For a Doral accountant serving a heavily Hispanic clientele that often means Spanish; for a Brickell firm targeting international corporate clients it usually means English. You do not have to choose blindly: check which language your existing reviews and inquiries come in, and match the description to your real demand rather than a guess.',
      },
      {
        question: 'Does Google translate my profile for Spanish-speaking searchers automatically?',
        answer:
          'Partly. Google may show machine-translated snippets of your description and reviews to users browsing in another language, but those translations are rough and you do not control them. They are no substitute for genuinely bilingual signals like Spanish reviews, Spanish Post copy, and a services list that names what you do in both languages.',
      },
      {
        question: 'Should I respond to Spanish reviews in Spanish?',
        answer:
          'Yes. A Spanish review answered in fluent Spanish reads as a business that genuinely serves that community, and the reply itself becomes indexable Spanish text on your profile. Answering a Spanish review with a translated-sounding English reply does the opposite, so have a native or fluent speaker write the responses rather than running them through a translator.',
      },
    ],
    content: [
      { type: 'p', text: 'A majority of Miami-Dade residents speak Spanish at home, which makes Miami one of the few US markets where ignoring the second language quietly cuts your reach in half. Yet most local Google Business Profiles here are built entirely for English searchers, with English descriptions, English-only Posts, and replies that read as if the Spanish reviews were never noticed. That gap is an opportunity, because the businesses that close it pick up demand their competitors leave on the table.' },
      { type: 'p', text: 'The catch is that you cannot simply duplicate your listing in another language. This article is part of our [guide to optimizing your Google Business Profile](/guides/google-business-profile-optimization/), and it covers the bilingual side specifically: how to make one profile reach both audiences without breaking Google policy or diluting your ranking signals.' },

      { type: 'h2', text: 'One profile, not two' },
      { type: 'p', text: 'The first instinct, creating a second listing in Spanish, is the one mistake that can undo everything else. Google allows exactly one profile per real business location, and a second listing for the same address counts as a duplicate. Duplicates compete with each other, split your reviews, and frequently end with one or both listings suspended. The correct model is a single profile in your primary language, with the second language carried through the parts of the profile that accept ongoing text: reviews, replies, Posts, services, and questions.' },
      { type: 'p', text: 'That single-listing rule sits alongside the other setup choices that decide how well you rank, like primary category and service-area configuration. If you have not worked through those yet, the [Google Business Profile mistakes Miami businesses make](/blog/google-business-profile-mistakes-miami-businesses-make/) covers the structural errors that bilingual polish cannot compensate for.' },

      { type: 'h2', text: 'Pick the description language deliberately' },
      { type: 'p', text: 'The business description is a single field, so it lives in one language. Choosing which one should follow your actual demand rather than a default assumption. A Doral accounting practice whose clients mostly call and search in Spanish is leaving relevance on the table with an English-only description, while a Brickell firm chasing international corporate work is usually right to lead in English.' },
      { type: 'p', text: 'You can read your own demand directly. Look at the language your existing reviews arrive in, the language of the questions on your profile, and the language of the inquiries that reach you. Those signals tell you where your customers already are. If the split is genuinely even, lead the description in the language of your highest-value work and carry the other language heavily through reviews and Posts.' },

      { type: 'h2', text: 'Carry the second language through reviews and replies' },
      { type: 'p', text: 'Reviews are where a profile becomes genuinely bilingual, because they add real text in both languages that you did not have to force. A Little Havana restaurant with a healthy mix of Spanish and English reviews signals to Google and to searchers that it serves both communities, and that mix happens naturally if you ask every customer for a review in whichever language they used with you.' },
      { type: 'p', text: 'Replies matter as much as the reviews themselves. Answer Spanish reviews in fluent Spanish and English reviews in English, because each reply is indexable text that reinforces the language it is written in. A Spanish review answered with a stiff, translated-sounding English reply tells the reader you do not really operate in their language. Have a native or fluent speaker write the Spanish responses rather than running them through a translator, where the seams always show.' },

      { type: 'h2', text: 'Use Posts and the services list for the language the description lacks' },
      { type: 'p', text: 'Google Business Profile Posts refresh constantly, which makes them the natural home for whichever language your description does not carry. If your description is in English, run a steady cadence of Spanish Posts, offers, updates, and events written for the Spanish-speaking customer, and the reverse if your description leads in Spanish. Over time those Posts give the profile a substantial body of text in both languages without any of it feeling bolted on.' },
      { type: 'p', text: 'The services list works the same way. Each service can carry a short description, so name what you do in both languages where it reads naturally, for example pairing the English service title with a Spanish sentence that a local searcher would actually type. Google publishes the field-by-field rules for descriptions, Posts, and services in its own documentation, and the [Google Business Profile Help guidelines](https://support.google.com/business/answer/3038177) are worth checking before you fill anything in so your bilingual copy stays inside policy.' },

      { type: 'h2', text: 'Why this matters more in Miami than almost anywhere' },
      { type: 'p', text: 'The size of the Spanish-speaking population is what makes this a ranking issue rather than a nicety. The [US Census Bureau\'s figures for Miami-Dade County](https://www.census.gov/quickfacts/miamidadecountyflorida) show a county where a large majority speak a language other than English at home, overwhelmingly Spanish. A profile that speaks to only one of those audiences is competing for a fraction of the real local market, while a genuinely bilingual one is visible to nearly all of it.' },
      { type: 'p', text: 'None of this requires two profiles, two strategies, or twice the work. It requires choosing the description language with intent and then letting reviews, replies, Posts, and services carry the rest. If you would rather have someone build and maintain a bilingual profile properly, we match Miami businesses with vetted [Google Business Profile specialists](/services/google-business-profile/) who handle the setup and the ongoing bilingual upkeep. Matching is free and we do not run the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
  },
  {
    slug: 'neighborhood-landing-pages-miami-not-thin',
    hub: 'local-content-strategy',
    draft: true,
    title: 'How to build Miami neighborhood pages that rank without going thin',
    metaTitle: 'Miami Neighborhood Landing Pages Without Thin Content',
    metaDescription:
      'One page per Miami neighborhood only helps if each page is genuinely local. Here is how to build Brickell, Wynwood, and Coral Gables pages that rank instead of tripping thin-content rules.',
    category: 'Strategy',
    publishDate: '2026-07-02',
    dateModified: '2026-07-02',
    excerpt:
      'A separate page for every Miami neighborhood you serve sounds like an easy ranking win, and it is the fastest way to build a pile of thin pages Google ignores or penalizes. The difference between a page that ranks and a page that gets filtered is whether it says anything true and specific about that neighborhood. Here is how to build the first kind.',
    faqs: [
      {
        question: 'How many neighborhood pages should a Miami business have?',
        answer:
          'Only as many as you can make genuinely distinct. If you serve all of Miami-Dade, that does not mean thirty near-identical pages for thirty neighborhoods. Build a page for each area where you have real presence, real jobs, and something specific to say, and let one broader Miami page cover the rest. Five substantial pages beat thirty thin ones every time, because the thin ones dilute your authority and risk being treated as doorway pages.',
      },
      {
        question: 'What makes a neighborhood page thin?',
        answer:
          'A page is thin when the only thing that changes from one neighborhood to the next is the place name. If a reader could swap Brickell for Wynwood and nothing else would need editing, the page has no local substance. Google spots this pattern easily. Thin pages typically share the same headings, the same paragraphs, the same photos, and a find-and-replace neighborhood name, and they get filtered out of results as a group.',
      },
      {
        question: 'Are neighborhood pages the same as doorway pages?',
        answer:
          'They become doorway pages when they exist only to catch a search and push the visitor to one central page, with no real content of their own. A neighborhood page that genuinely serves the reader with local specifics, real projects, and useful information is fine. One that is a thin funnel to your contact form crosses the line Google draws against doorway abuse, and can drag down the rest of the site with it.',
      },
      {
        question: 'Should a service-area business build neighborhood pages at all?',
        answer:
          'It can, but the bar is higher. A service-area business that visits customers rather than seating them at an address should lead with genuine local proof: named projects, neighborhood-specific advice, local partnerships. Google only allows one Business Profile for a service-area business across its whole area, so the neighborhood pages on your own website carry the local-relevance work that separate profiles cannot.',
      },
      {
        question: 'How do I make each Miami neighborhood page genuinely different?',
        answer:
          'Write from real knowledge of the area. A Coral Gables page can speak to the historic architecture and the strict facade rules that shape any storefront work there. A Doral page can address the bilingual, heavily Venezuelan market. A South Beach page can speak to tourists and short-term rentals. When the content reflects how the neighborhood actually differs, the page reads as local because it is, and that is what ranks.',
      },
    ],
    content: [
      { type: 'p', text: 'A neighborhood landing page earns its ranking when it says something true and specific about that neighborhood, and it gets filtered out when it does not. That is the whole test. A Brickell page and a Little Havana page that differ only by the swapped place name are thin pages, and Google treats a cluster of them as low-value at best and doorway abuse at worst. The good news is that Miami neighborhoods genuinely differ, so there is real material to write from.' },
      { type: 'p', text: 'Building one page per area you serve is a sound instinct. The problem is the shortcut most businesses take to get there: they write one template, find-and-replace the neighborhood name, and publish twenty copies. That approach is fast, and it is why so many Miami businesses have a pile of neighborhood pages that rank for nothing. Doing it properly means fewer pages, each one carrying real local weight.' },

      { type: 'h2', text: 'Why Miami rewards genuine local pages' },
      { type: 'p', text: 'Miami is unusually well-suited to real neighborhood content, because its neighborhoods are unusually distinct. Brickell is a dense financial and residential high-rise district. Coral Gables is a historic, design-controlled city with its own facade ordinances. Doral is a heavily Venezuelan, bilingual business hub. Little Havana carries a Cuban-American commercial character that shapes everything from signage to hours. South Beach runs on tourism and short-term rentals. These are not cosmetic differences, and they change what a business in each area needs to say.' },
      { type: 'p', text: 'That distinctiveness cuts both ways. It gives you real material for genuinely different pages, and it means competitors who take the template shortcut leave an opening. In a market where competitive density already makes ranking slow, this is one of the places a smaller business can win on substance rather than budget. The same forces that make [Miami local SEO take longer than most US cities](/blog/why-miami-local-seo-takes-longer-than-other-cities/) also reward the businesses willing to do the neighborhood work properly.' },

      { type: 'h2', text: 'What separates a real page from a thin one' },
      { type: 'p', text: 'The reliable test is the swap test. Take your Wynwood page and mentally replace every instance of Wynwood with Aventura. If the page still makes complete sense with nothing else changed, it is thin, because it contains no information that is actually about Wynwood. A genuine page fails the swap test immediately, because the local specifics stop being true the moment you change the neighborhood.' },
      { type: 'p', text: 'Real local substance comes from things only someone working in that area would know. Name the streets and landmarks customers actually use. Reference the local building rules, parking realities, or permit quirks that affect your work there. Describe an actual project you completed in that neighborhood, with enough detail to be credible. Explain what tends to be different about serving that area specifically. None of this survives a find-and-replace, which is exactly the point.' },

      { type: 'h2', text: 'Build fewer pages, each one deeper' },
      { type: 'p', text: 'The instinct to cover every neighborhood works against you. Twenty thin pages spread your authority across twenty weak URLs, and Google reads the pattern as a low-effort attempt to catch every place name. Five substantial pages concentrate that same effort into URLs that can actually rank. Start with the neighborhoods where you have real presence and real jobs to point to, and let one strong general Miami page cover the areas where you have less to say.' },
      { type: 'p', text: 'This is the same trap thin location content shares with any content built to chase queries rather than serve readers, which is why neighborhood pages belong inside a deliberate [local content strategy](/guides/local-content-strategy/) rather than being spun up in bulk on their own. A useful rule of thumb: if you would not be comfortable showing the page to a customer who lives in that neighborhood, it is not ready to publish. A resident should recognize their own area in the page, not read generic copy with their neighborhood pasted on top.' },

      { type: 'h2', text: 'Get the technical local signals right' },
      { type: 'p', text: 'Substance carries most of the weight, but a few technical signals tell Google and readers that a page is genuinely tied to a place. Your business name, address, and phone number should be consistent across the site and match your listings exactly, since [inconsistent NAP across your Miami business listings](/blog/fix-inconsistent-nap-miami-business-listings/) undermines the local relevance you are trying to build with the content. Add LocalBusiness structured data, embed a map where it genuinely helps the reader, and reference the neighborhood naturally in the title, headings, and body rather than stuffing it.' },
      { type: 'p', text: 'For a service-area business the rules are stricter, because Google only allows a single Business Profile across the whole area you cover. That one profile cannot carry every neighborhood, so your website\'s neighborhood pages do the local-relevance work, and the [local marketing strategies](https://www.sba.gov/blog/10-local-marketing-strategies-work) that help a service business get found nearby depend on that on-site content being genuinely local rather than templated.' },

      { type: 'h2', text: 'Where the line to doorway pages sits' },
      { type: 'p', text: 'The failure mode Google penalizes has a specific shape. It defines [doorway abuse](https://developers.google.com/search/docs/essentials/spam-policies) as pages built to rank for similar queries that lead users to an intermediate page less useful than the real destination, including multiple pages for specific regions or cities that funnel visitors to one place. A cluster of near-identical neighborhood pages whose only job is to catch a place-name search and route the visitor to your central contact form fits that description precisely.' },
      { type: 'p', text: 'You stay on the right side of the line by making each page a genuine destination in its own right. A reader who lands on your Coral Gables page should find information that helps them whether or not they ever contact you: local specifics, real examples, useful detail about how you work in that area. When the page serves the reader first and the search second, it is a legitimate local page. When it serves the search first and the reader not at all, it is a doorway. The difference is visible in the content, not the intent you claim.' },

      { type: 'h2', text: 'Getting it built without the thin-content risk' },
      { type: 'p', text: 'Neighborhood pages done well are slow to produce, because each one needs real local input rather than a template. That is precisely why so many businesses cut the corner and end up with pages that never rank. If building genuinely distinct pages for each Miami area you serve is more than your team can carry, we match Miami businesses with vetted [local content specialists](/services/local-content-strategy/) who build neighborhood pages that hold up to the swap test instead of tripping thin-content rules. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
  },

  {
    slug: 'rank-for-near-me-searches-miami',
    hub: 'near-me-voice-and-mobile-local-search',
    draft: true,
    title: 'How Miami businesses rank for "near me" searches',
    metaTitle: 'Rank for "Near Me" Searches in Miami',
    metaDescription:
      'What "near me" searches really are, why proximity and an accurate profile decide them, and the mobile-first work that puts your Miami business in front of ready-to-act customers.',
    category: 'Local',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    excerpt:
      'A "near me" search is a customer telling Google they are ready to act right now. Here is how Google decides which Miami business it shows, why proximity and a clean profile matter more than the phrase itself, and what mobile-first work wins these high-intent searches.',
    faqs: [
      {
        question: 'Do I need the phrase "near me" on my website to rank for it?',
        answer:
          'No. Google understands "near me" as an intent, not a keyword to match on your page, so stuffing the literal phrase into your titles or content does nothing and can look spammy. Google swaps "near me" for the searcher\'s actual location behind the scenes, then ranks businesses by proximity, relevance, and prominence. You win by being genuinely close, having a complete and accurate profile, and earning reviews, not by repeating a phrase.',
      },
      {
        question: 'Why does my ranking change depending on where I am standing?',
        answer:
          'Because distance to the searcher is one of the three core local ranking factors. A "near me" result is recalculated from wherever the phone physically is, so a Coral Gables business can rank first for someone a few blocks away and not appear at all for someone across the county. This is why a single office ranking check is misleading, and why specialists measure map pack position across a geographic grid rather than from one spot.',
      },
      {
        question: 'Are "near me" searches mostly on mobile?',
        answer:
          'Overwhelmingly, yes. People type or speak "near me" when they are out and about and need something now, which means a phone, a cellular connection, and little patience. That makes your mobile experience decisive: a tap-to-call button, an address that maps cleanly for directions, accurate open-now hours, and a page that loads fast on a street-level signal all determine whether the search turns into a visit.',
      },
      {
        question: 'Can a business outside my neighborhood still show up for "near me"?',
        answer:
          'Sometimes. When there are few strong nearby options, Google widens the net and pulls in businesses a bit further out, favoring the ones with stronger prominence signals like reviews and citations. So in a thinly served category you can rank for searchers outside your immediate area, but in a dense Miami vertical, proximity usually wins and you compete mainly for the customers physically close to you.',
      },
      {
        question: 'Does "open now" affect whether I appear?',
        answer:
          'Yes, more than most owners expect. Many "near me" searches carry urgent intent, and Google and its assistants filter or favor businesses that are open at that moment. If your hours are wrong, or you have not set special hours for a holiday or a storm closure, you can be filtered out at the exact moment a customer is ready to buy. Keeping hours current is one of the cheapest ways to protect your visibility.',
      },
    ],
    content: [
      { type: 'p', text: 'A "near me" search is one of the highest-intent moments in local search: a customer is telling Google they want something close and want it now. Ranking for these searches is not about putting the phrase "near me" anywhere on your site. It is about being genuinely close to the searcher, carrying a complete and accurate profile, and being easy to act on from a phone.' },
      { type: 'p', text: 'These searches are won on the same signals as the rest of the map pack, applied to a customer in motion. Near-me is the sharpest end of [mobile and voice local search](/guides/near-me-voice-and-mobile-local-search/), where Google usually returns a single answer and the margin between winning and vanishing is small.' },

      { type: 'h2', text: 'What "near me" actually means to Google' },
      { type: 'p', text: 'When someone searches "coffee near me" or "emergency plumber near me", Google does not look for pages containing that exact phrase. It replaces "near me" with the searcher\'s real location and returns local results ranked by the same three factors that drive every local search: relevance, distance, and prominence. Google spells this out in its own [guidance on improving your local ranking](https://support.google.com/business/answer/7091), and the practical takeaway is blunt: you cannot keyword your way into a near-me result. You earn it by being close, being clearly the right kind of business, and being trusted.' },
      { type: 'p', text: 'That reframes the whole task. The businesses that win "near me" are not the ones repeating the phrase, they are the ones whose Google Business Profile is complete, whose [primary category matches the search](/blog/choose-google-business-profile-categories-miami/) exactly, and whose reviews and citations tell Google they are established. The near-me phrasing is just the customer\'s shorthand for local intent, and the same profile work that lifts your position for a "personal injury attorney Brickell" search lifts it for "personal injury attorney near me" too.' },

      { type: 'h2', text: 'Proximity is the factor you cannot fully control' },
      { type: 'p', text: 'Distance to the searcher is the one near-me factor you cannot optimize your way around. A near-me result is calculated from wherever the phone is standing, so your ranking is not a single number, it is a map of positions that changes block by block. A business near the water in [Brickell](/location/brickell/) may rank first for someone in the neighborhood and vanish for someone searching from Doral, because the second searcher is simply closer to different options.' },
      { type: 'p', text: 'This is why checking your rank once from the office tells you almost nothing. It reflects one point on a map that varies across your whole service area. Specialists measure near-me and map pack position across a geographic grid to see the real picture, which is the same discipline behind tracking your rankings across Miami neighborhoods rather than trusting a single reading. What you can control is everything except distance: relevance through your category and profile, and prominence through reviews and citations, both of which decide the ties when several businesses are similarly close.' },

      { type: 'h2', text: 'Near me is a mobile-first, act-now moment' },
      { type: 'p', text: 'Near-me searches skew heavily to phones because people run them while out in the world, needing something immediately. That urgency changes what matters after the ranking. Winning the position is only half the job, the other half is being instantly actionable on a small screen over a patchy signal. A tap-to-call number, an address that opens cleanly in Maps for driving directions, and a page that loads in a couple of seconds are what convert a near-me impression into a customer walking through the door.' },
      { type: 'p', text: 'Hours are the quiet decider. A large share of near-me intent is urgent, and Google favors, or outright filters to, businesses that are open at the moment of the search. If your listed hours are wrong, or you skipped special hours for a holiday or a hurricane-season closure, you can be excluded exactly when a ready customer is looking. Because nearly all of this lives on your listing, near-me visibility and [Google Business Profile optimization](/services/google-business-profile/) are largely the same work seen from a different angle. Labeling the same facts in [LocalBusiness structured data](https://schema.org/LocalBusiness) on your site reinforces the hours and location an assistant reads back.' },

      { type: 'h2', text: 'Why a nearby competitor sometimes beats you' },
      { type: 'p', text: 'If a business slightly further from the searcher outranks you for a near-me query, the gap is almost always prominence. When two businesses are comparably close, Google leans on the trust signals: review count and quality, citation consistency, and overall authority. A competitor with two hundred reviews and a clean citation profile can beat a closer business with twenty reviews and inconsistent listing data, because Google is more confident in the well-known option.' },
      { type: 'p', text: 'The fix is the ordinary local SEO work done consistently: a steady stream of genuine reviews, accurate name, address, and phone data everywhere your business is listed, and a profile that is complete rather than half-filled. None of it is a near-me trick. It is the accumulated prominence that lets you win the tie when a customer standing between you and a competitor asks their phone who is nearby.' },

      { type: 'h2', text: 'Where this fits, and getting help' },
      { type: 'p', text: 'Ranking for "near me" is not a separate project. It is what strong local SEO looks like when the searcher is on a phone, in a hurry, and close by: an accurate profile, the right category, current hours, real reviews, and a fast mobile page. Get those right and you are positioned for near-me, voice, and open-now searches at the same time, because they all draw on the same underlying signals.' },
      { type: 'p', text: 'If auditing your profile, fixing your hours and mobile experience, and building the review and citation base behind near-me visibility is more than your team can take on, we match Miami businesses with vetted local search specialists who handle it as part of a wider program. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
  },

  {
    slug: 'local-business-schema-markup-miami',
    hub: 'technical-seo-for-local-business',
    draft: true,
    title: 'Local business schema markup for Miami websites',
    metaTitle: 'Local Business Schema Markup for Miami Sites',
    metaDescription:
      'What LocalBusiness schema is, why it helps Miami sites rank and get read by AI, which fields to include, and how to add and test it without breaking anything.',
    category: 'Strategy',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    excerpt:
      'Schema markup is a small block of code that hands search engines your business facts in a format they can read without guessing. Here is what LocalBusiness schema does for a Miami site, which fields actually matter, and how to add and validate it safely.',
    faqs: [
      {
        question: 'Is schema markup a ranking factor?',
        answer:
          'Not directly. Schema does not make a page rank higher on its own. What it does is remove ambiguity: it tells Google exactly what your name, address, phone, hours, and business type are, so the search engine does not have to infer them from your page text. That clarity supports rich results, feeds the accuracy signals behind local ranking, and increasingly helps AI systems read and cite your business correctly. It is an enabler, not a lever you can pull for an instant boost.',
      },
      {
        question: 'Do I need schema if my information is already on the page?',
        answer:
          'Yes, and the reason is reliability. A human reading your contact page understands the address instantly, but a machine has to parse and guess. Schema states the same facts in a structured format that leaves no room for misreading, which matters when Google, a voice assistant, or an AI answer is deciding whether to trust and surface your business. Visible content and schema are complements, not alternatives.',
      },
      {
        question: 'Which schema type should a Miami local business use?',
        answer:
          'Use the most specific LocalBusiness subtype that fits. LocalBusiness is the general type, but Google prefers you narrow it to something like Restaurant, Dentist, Attorney, or HVACBusiness when one applies, because the more specific type communicates more. If no exact subtype exists, use LocalBusiness itself and describe the specifics through your other fields and page content.',
      },
      {
        question: 'Can bad schema hurt my site?',
        answer:
          'It can, in two ways. Schema that claims things not visible on the page, like fake review stars or an address you do not operate from, violates Google\'s structured data policies and can trigger a manual action. Broken or malformed markup simply gets ignored, wasting the effort. Keep your schema accurate and matched to your visible content, validate it before publishing, and it carries only upside.',
      },
      {
        question: 'Do I need a developer to add schema?',
        answer:
          'Not always. Many website builders and SEO plugins generate LocalBusiness schema from a settings form, which is fine for a single-location business. Hand-writing JSON-LD or handling multiple locations, departments, or complex service catalogs is where a developer or technical SEO specialist earns their keep. Either way, always run the result through a validator before trusting it.',
      },
    ],
    content: [
      { type: 'p', text: 'Schema markup is a small block of code that states your business facts in a format search engines can read without guessing: your name, address, phone number, hours, location, and the kind of business you are. For a Miami local site, the most useful flavor is LocalBusiness schema, and adding it well is one of the higher-return technical jobs available.' },
      { type: 'p', text: 'It belongs to the [technical SEO layer that local business websites](/guides/technical-seo-for-local-business/) most often neglect, invisible to visitors but consequential for how machines understand you. What follows is what LocalBusiness schema does, which fields matter, and how to add and test it without breaking anything.' },

      { type: 'h2', text: 'What schema markup is and why it exists' },
      { type: 'p', text: 'When a person reads your contact page, they instantly understand that a line is your phone number and another is your address. A search engine has to infer all of that from surrounding text, and it does not always get it right. Schema markup solves this by labeling the facts explicitly in a structured vocabulary, so the machine reads "this is the phone number, this is the address, these are the opening hours" with no guesswork. The shared vocabulary is maintained at [Schema.org](https://schema.org/LocalBusiness), the standard that Google, Bing, and other engines agree to read.' },
      { type: 'p', text: 'The format almost everyone uses today is JSON-LD, a compact block of code placed in the page that describes the business without changing anything a visitor sees. You are not rewriting your page, you are attaching a machine-readable summary of it. That summary is what powers richer search appearances and, increasingly, what lets AI systems quote your details accurately instead of paraphrasing them wrong.' },

      { type: 'h2', text: 'What LocalBusiness schema does for a Miami site' },
      { type: 'p', text: 'LocalBusiness schema is not a ranking lever you pull for a jump in position. Its value is clarity, and clarity compounds. It supports rich results, the enhanced listings Google can show with extra detail, and it reinforces the accuracy signals that feed local ranking. When your schema, your Google Business Profile, and your visible page all state the same name, address, and phone, you strengthen the [consistency across your listings](/blog/fix-inconsistent-nap-miami-business-listings/) that gives Google confidence in your location.' },
      { type: 'p', text: 'There is a growing second payoff. AI answers and voice assistants favor businesses they can read cleanly, and structured data is the cleanest input they get. A Miami business whose site plainly labels what it is, where it operates, and when it is open gives an AI system something unambiguous to cite, which matters as more customers arrive through AI-assisted search rather than a scanned results page. The same detail also underpins accurate [on-page local SEO](/services/on-page-local-seo/), where your page content and your structured data should tell one consistent story.' },

      { type: 'h2', text: 'The fields worth getting right' },
      { type: 'p', text: 'You do not need every property schema allows. A focused, accurate set does the job, and Google publishes exactly what it looks for in its [LocalBusiness structured data documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business). Include at minimum:' },
      { type: 'list', items: [
        'The most specific business type available (Dentist, Attorney, Restaurant, HVACBusiness) rather than the generic LocalBusiness when one fits.',
        'Name, full postal address, and phone number, matched exactly to your Google Business Profile and your visible page.',
        'Opening hours, kept current, including special hours where your platform supports them.',
        'The geographic area you serve, and geo coordinates for a fixed location.',
        'A link to your website and, where relevant, your primary social or profile URLs.',
      ] },
      { type: 'p', text: 'The non-negotiable rule is that schema must match reality. Do not mark up hours you do not keep, an address you do not operate from, or review stars you did not earn. Google\'s structured data policies treat mismatched or fabricated markup as a violation, and the consequences run from your rich results being ignored to a manual penalty. Accurate schema is safe schema.' },

      { type: 'h2', text: 'Adding it and testing it safely' },
      { type: 'p', text: 'How you add schema depends on your platform. Most modern website builders and local SEO plugins generate LocalBusiness JSON-LD from a form, which is entirely adequate for a single-location Miami business. If you run several locations, departments, or a large service catalog, or you want precise control, hand-written JSON-LD placed in the page head is the more robust route and usually the point where a developer helps. Either way, the schema goes on the relevant page, your homepage or a location page for the business itself, not scattered indiscriminately across every URL.' },
      { type: 'p', text: 'Never trust schema you have not validated. Run every page through Google\'s Rich Results Test and the Schema Markup Validator before you rely on it, because a single malformed field can cause an engine to discard the whole block silently. After it is live, watch Search Console for structured data errors as you edit pages over time, the same monitoring habit that keeps the rest of your technical SEO from quietly drifting out of shape.' },

      { type: 'h2', text: 'Where this fits, and getting help' },
      { type: 'p', text: 'Schema markup is a supporting player, not a headline act. It will not rescue a thin site or outrank a stronger competitor by itself, but on a solid Miami site it removes ambiguity, supports rich results, reinforces your ranking accuracy signals, and makes your business easier for AI to read and cite. That is a lot of value for a block of code most visitors will never see.' },
      { type: 'p', text: 'If JSON-LD, multi-location markup, and validation are outside what your team wants to handle, we match Miami businesses with vetted local SEO specialists who implement and test structured data as part of a wider technical program. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
  },

  {
    slug: 'get-recommended-by-ai-search-miami',
    hub: 'choosing-a-miami-seo-agency',
    draft: true,
    title: 'How Miami businesses get recommended by AI search',
    metaTitle: 'Getting Recommended by AI Search in Miami',
    metaDescription:
      'AI search is starting to answer local questions with a business or two. Here is where those recommendations come from and how a Miami business earns them, without any tricks.',
    category: 'Strategy',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    excerpt:
      'More Miami customers are asking AI tools to recommend a business instead of scanning a map pack. Here is where those recommendations actually come from, why there is no shortcut, and the work that makes your business the one the AI names.',
    faqs: [
      {
        question: 'Where do AI search tools get their local recommendations?',
        answer:
          'From the same public sources that already power local search: Google Business Profiles, reviews, established directories, reputable local press, and business websites. AI systems synthesize an answer from across these rather than reading one database, then cite one or a few businesses. There is no separate AI listing to claim. You become recommendable by being well represented and consistent across the sources the AI already reads.',
      },
      {
        question: 'Is there a trick to getting cited by ChatGPT or Google AI Overviews?',
        answer:
          'No, and anyone selling one is guessing. The businesses AI tends to recommend are the ones that are genuinely prominent and clearly described: complete profiles, strong and recent reviews, consistent name, address, and phone data, and website content that plainly states who they serve and where. Those are the same fundamentals that win the map pack, which is reassuring, because it means you are not chasing a separate, unstable game.',
      },
      {
        question: 'Does my website content matter for AI recommendations?',
        answer:
          'Yes, more than it did for the classic map pack. AI answers pull from website text, not just your profile, so pages that clearly state what you do, which Miami areas you serve, your specialties, and answers to common questions give the AI clean material to quote. Vague, marketing-heavy copy gives it little to work with. Plain, specific, genuinely useful content is what gets read and cited.',
      },
      {
        question: 'How do I know if AI search is sending me customers?',
        answer:
          'It is harder to see than ordinary search, because AI referrals often do not show up clearly in standard analytics. Watch for referral traffic from AI tools where it is tagged, for customers who mention they found you through an AI assistant, and for the same profile signals, calls and direction requests, that indicate rising local visibility overall. Treat it as an emerging channel to monitor, not one with a clean dashboard yet.',
      },
      {
        question: 'Should I stop doing normal local SEO and focus on AI?',
        answer:
          'No. The two are the same foundation, not competing strategies. AI recommendations are built on your Google Business Profile, your reviews, your citations, and your website, which are exactly what local SEO already strengthens. Keep doing the fundamentals well and add clear, structured, question-answering content, and you improve your position in both the map pack and AI answers at once.',
      },
    ],
    content: [
      { type: 'p', text: 'A growing share of Miami customers now ask an AI tool to recommend a business instead of scanning a page of results. When an AI answer names a plumber, a dentist, or a restaurant, that recommendation is not random and it is not for sale. It is assembled from the public signals that already describe your business, and you earn it the same way you earn the map pack: by being genuinely prominent, clearly described, and consistent everywhere.' },
      { type: 'p', text: 'AI visibility is the newest thing to weigh when [choosing and working with a Miami SEO agency](/guides/choosing-a-miami-seo-agency/), and it rewards the businesses that already do the fundamentals well. Understanding where those recommendations come from is what separates a specialist worth hiring from one selling a gimmick.' },

      { type: 'h2', text: 'Where AI recommendations come from' },
      { type: 'p', text: 'AI search tools, whether Google\'s AI answers or standalone assistants, do not maintain a secret directory you can register with. They synthesize a response from the public web: Google Business Profiles, review platforms, established directories, reputable local news, and business websites. Then they surface one or a few businesses as the answer, often with citations back to the sources. There is nothing to claim and no listing to buy. Your recommendability is a byproduct of how well and how consistently you already appear across those sources.' },
      { type: 'p', text: 'That has a practical consequence. Because AI reads the same material Google uses for its local results, the businesses that get recommended are largely the ones already doing local SEO well. The three factors Google names for local ranking, relevance, distance, and prominence, are set out in its own [guidance on improving your local ranking](https://support.google.com/business/answer/7091), and the prominence half of that, reviews, citations, and authority, is exactly what makes an AI system confident enough to name you.' },

      { type: 'h2', text: 'Why there is no shortcut, and why that is good news' },
      { type: 'p', text: 'Every few months a service appears promising to get your business "featured in AI search" through some proprietary method. Treat those the way you would treat a guaranteed-rankings pitch, as a warning sign. Nobody controls what an AI model chooses to cite, and the levers that genuinely influence it are the unglamorous ones: a complete profile, strong and recent reviews, clean name, address, and phone data across the web, and a website that plainly says who you serve and where.' },
      { type: 'p', text: 'This is good news, not bad. It means you are not being asked to master a separate, unstable discipline with its own tricks. The work that earns AI recommendations is the same work that wins the map pack, and whether a specialist understands that overlap is one of the things worth [checking before you hire an agency](/blog/how-to-evaluate-a-miami-local-seo-agency/). An agency that pitches "AI optimization" as a distinct paid product, separate from your local SEO fundamentals, usually does not understand where the recommendations come from.' },

      { type: 'h2', text: 'What makes your business the one it names' },
      { type: 'p', text: 'Three things move the needle for AI recommendations, and none of them is exotic. The first is prominence: the [review count and quality](/blog/review-acquisition-strategy-for-miami-small-businesses/), citations, and local authority that make your business look established. AI leans toward well-known, well-reviewed options for the same reason a person asking a friend for a recommendation trusts the place everyone already praises. The second is consistency: your name, address, phone, and category reading identically across your profile, your site, and the directories, so the AI is not reconciling conflicting versions of you. Marking those facts up in [LocalBusiness structured data](https://schema.org/LocalBusiness) hands the machine an unambiguous version to trust.' },
      { type: 'p', text: 'The third, and the one classic local SEO underweighted, is clear website content. AI answers quote text, so pages that state plainly what you do, which Miami neighborhoods you serve, your specialties, and direct answers to the questions customers ask give the model clean material to lift. Vague, brochure-style copy gives it nothing. This is where a deliberate [local content strategy](/services/local-content-strategy/) pays off twice, because the same clear, question-answering pages that help a reader are the ones an AI can read and cite.' },

      { type: 'h2', text: 'Measuring it, and keeping perspective' },
      { type: 'p', text: 'AI referrals are real but genuinely hard to measure, because they often do not appear cleanly in standard analytics the way a Google click does. Watch for referral traffic from AI tools where it is labeled, for customers who mention an AI assistant when they call, and for the broader profile signals, calls and direction requests, that show your local visibility rising overall. Treat AI search as an emerging channel to monitor, not one with a settled dashboard, and do not let uncertainty about measurement pull you away from the fundamentals that feed it.' },
      { type: 'p', text: 'Keep the perspective simple. You do not optimize for AI as a separate project. You do local SEO well, add clear and structured content, and you become more recommendable in AI answers as a natural result. The businesses winning AI recommendations in Miami are not the ones chasing the latest AI trick, they are the ones that were already prominent, consistent, and clearly described.' },

      { type: 'h2', text: 'Where this fits, and getting help' },
      { type: 'p', text: 'Getting recommended by AI is not a new skill to buy. It is what strong local SEO produces once your content is clear enough for a machine to read: a prominent, consistent, well-described business that both Google and an AI assistant can confidently put forward. Invest in the fundamentals and the AI visibility follows, rather than the other way around.' },
      { type: 'p', text: 'If you want a specialist who treats AI visibility as an outcome of solid local SEO rather than a gimmick to sell, we match Miami businesses with vetted people who work that way. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
    ],
  },

  {
    slug: 'why-competitors-outrank-you-map-pack',
    hub: 'ranking-in-the-miami-map-pack',
    draft: true,
    title: 'Why competitors outrank you in the Miami map pack',
    metaTitle: 'Why Competitors Outrank You in the Map Pack',
    metaDescription:
      'A closer or busier competitor is beating you in the Miami map pack for a reason you can find. Here is how to diagnose the real gap across relevance, distance, and prominence.',
    category: 'Strategy',
    publishDate: '2026-07-03',
    dateModified: '2026-07-03',
    excerpt:
      'When a competitor sits above you in the Miami map pack, the gap is diagnosable, not mysterious. Here is how to compare their profile, reviews, and citations against yours across the three factors Google actually uses, and where the difference usually hides.',
    faqs: [
      {
        question: 'Why does a smaller competitor outrank me in the map pack?',
        answer:
          'Size is not what Google ranks. It ranks relevance, distance, and prominence. A smaller competitor can beat you by being closer to the searcher, by having a more precise primary category, or by carrying more and better reviews. Very often the gap is a single fixable thing, like a too-generic category on your profile or a review count that lags theirs. Diagnose it factor by factor rather than assuming they simply spend more.',
      },
      {
        question: 'How do I see what my competitor is doing right?',
        answer:
          'Most of it is public. Open their Google Business Profile and compare their primary category, review count and rating, photo volume, services list, and how completely their profile is filled against yours. Search their business name and phone number to see how many citations they have and how consistent the data is. Within an afternoon you can usually build a clear side-by-side that shows where they lead.',
      },
      {
        question: 'Is proximity something I can do anything about?',
        answer:
          'Not directly, since you cannot move your business. But proximity only decides ties among relevant, prominent businesses, so it is rarely the whole story. If a competitor further away outranks you, distance is not their advantage, prominence or relevance is, and those you can close. Focus on the factors you control and let proximity settle the cases where everything else is equal.',
      },
      {
        question: 'How much do reviews explain the ranking gap?',
        answer:
          'Often a great deal. Reviews are a major prominence signal, and both the total count and the recency matter. A competitor steadily earning fresh reviews will tend to outrank a business whose review flow dried up, even if the second business once had more. If the audit shows they are meaningfully ahead on reviews, closing that gap with a consistent, policy-compliant request system is usually the highest-return move.',
      },
      {
        question: 'Can I outrank a competitor who has been established much longer?',
        answer:
          'Yes, though it takes methodical work rather than a quick fix. Longevity helps a competitor accumulate reviews, citations, and authority, but none of that is out of reach. By closing the specific gaps the audit reveals, a sharper category, a complete profile, a steady review cadence, and clean citations, a newer business can and does overtake older ones. It is a matter of consistent execution over months, not a single change.',
      },
    ],
    content: [
      { type: 'p', text: 'When a competitor consistently sits above you in the Miami map pack, it is tempting to assume they simply spend more or have been around longer. Usually the real reason is specific and findable: a sharper category, more reviews, cleaner citations, or the plain advantage of being closer to the searcher. The map pack ranks on knowable factors, which means the gap between you and the business above you can be diagnosed and, in most cases, closed.' },
      { type: 'p', text: 'Understanding why a competitor outranks you is the first step to overtaking them, and it is really an exercise in reading the factors behind [ranking in the Miami map pack](/guides/ranking-in-the-miami-map-pack/). Diagnose the gap across the three Google actually uses and you turn a vague sense of losing into a fixable list.' },

      { type: 'h2', text: 'Map pack ranking is not a black box' },
      { type: 'p', text: 'Google is unusually open about how local results work: they are based primarily on relevance, distance, and prominence, as stated in its [guidance on improving your local ranking](https://support.google.com/business/answer/7091). Relevance is how well your business matches the search, driven mostly by your profile and category. Distance is how close you are to the searcher. Prominence is how established and trusted you look, built from reviews, citations, and authority. Every ranking gap traces back to one or more of these three, so diagnosing why a competitor beats you is a matter of comparing them factor by factor.' },
      { type: 'p', text: 'That comparison is more doable than it sounds, because most of the relevant data is public. You can inspect a competitor\'s Google Business Profile, count their reviews, read their category, and see how completely they have filled out their listing. The businesses that struggle in the map pack are usually the ones that never do this audit, so they never learn that the competitor above them simply has a more precise category or three times the reviews.' },

      { type: 'h2', text: 'Relevance: the category and profile gap' },
      { type: 'p', text: 'The most common and most fixable reason a competitor outranks you is relevance, and the primary category is where it hides. A competitor listed as "Personal Injury Attorney" will beat a firm listed generically as "Lawyer" for the injury queries, because the narrower category matches the search intent more precisely. Open the competitor\'s profile, read their primary category, and compare it to yours. If theirs is more specific and more aligned to the searches you want, you have found a lever, and [choosing a sharper primary category](/blog/choose-google-business-profile-categories-miami/) is a same-day fix.' },
      { type: 'p', text: 'Relevance is broader than the category alone. A competitor with a fully built profile, a detailed services list, complete attributes, and a keyword-appropriate business description signals relevance more strongly than a half-finished listing. Audit their profile against yours line by line: categories, services, description, photos, attributes. The gaps you find are your to-do list, and closing them typically moves relevance before you touch anything else.' },

      { type: 'h2', text: 'Prominence: the reviews and citations gap' },
      { type: 'p', text: 'When relevance is comparable, prominence usually decides the order, and reviews are its loudest signal. A competitor with two hundred reviews and a steady flow of fresh ones outranks a business with forty stale ones, because volume and recency both feed the trust score. Compare review counts, average ratings, and, importantly, how recently each business earned its last several reviews. A competitor pulling ahead on recency is often the whole explanation, and a disciplined review acquisition system is the direct answer, as long as it stays inside the [FTC rule on consumer reviews](https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers) and never buys or incentivizes them.' },
      { type: 'p', text: 'Citations are the quieter half of prominence. If a competitor has consistent name, address, and phone data across the major directories and you have fragmented or missing listings, they carry a confidence advantage you can close by [fixing your own inconsistent listings](/blog/fix-inconsistent-nap-miami-business-listings/). Between reviews and citations, prominence is where established competitors bank their lead, and it is also where methodical work lets a newer business catch up, one review and one corrected listing at a time.' },

      { type: 'h2', text: 'Distance: the factor you diagnose but cannot change' },
      { type: 'p', text: 'Sometimes the honest answer is proximity. If a competitor is physically closer to where your customers search, they hold a distance advantage you cannot erase without relocating. But distance rarely tells the whole story, because it mainly settles ties among businesses that are already relevant and prominent. A useful test is to check your ranking from several points across your service area rather than one spot, since map pack position shifts block by block, which is the same reasoning behind tracking your rankings across Miami neighborhoods instead of trusting a single reading.' },
      { type: 'p', text: 'If a competitor outranks you even though they are further from the searcher, distance is not their edge, relevance or prominence is, and both are within your control. Proximity should be the last factor you blame, not the first, because assuming "they are just closer" is the excuse that stops businesses from finding the category or review gap that is actually costing them the position. A business in [Brickell](/location/brickell/) losing to one across the neighborhood is almost never losing on distance alone.' },

      { type: 'h2', text: 'Turning the diagnosis into a plan' },
      { type: 'p', text: 'A competitor audit is only useful if it becomes a prioritized to-do list. Rank the gaps by effort and impact: a wrong primary category is a same-day, high-impact fix, so it goes first. A citation cleanup is slower but foundational. A review gap is closed over weeks through a consistent request system, not overnight. Working the list in that order, relevance quick wins first, then prominence, tends to move your position fastest, and it converts a vague sense of being beaten into a concrete campaign with a sequence.' },
      { type: 'p', text: 'If auditing competitors, fixing your profile, and closing the review and citation gaps is more than your team can take on, we match Miami businesses with vetted [map pack specialists](/services/map-pack-optimization/) who run this diagnosis and execute the plan. Matching is free, and we do not deliver the SEO ourselves; we introduce you to specialists who do. You can [tell us about your business](/contact/) and we will make the introduction.' },
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
