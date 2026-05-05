// data/locations.ts, Miami metro neighborhoods
// Sub-areas listed per neighborhood for content signals (no separate pages).

export interface AreaHub {
  name: string;
  slug: string;
  zip: string;
  area: 'Central Miami' | 'Beach' | 'North Miami' | 'South Miami' | 'West Miami';
  subAreas: SubArea[];
}

export interface SubArea {
  name: string;
  zip?: string;
  note?: string;
}

export const AREA_HUBS: AreaHub[] = [
  {
    name: 'Brickell',
    slug: 'brickell',
    zip: '33131',
    area: 'Central Miami',
    subAreas: [
      { name: 'Brickell Avenue',      zip: '33131', note: 'Financial center spine, banks, law firms, family offices' },
      { name: 'Mary Brickell Village',zip: '33131', note: 'Retail and dining anchor for the financial district' },
      { name: 'Brickell Key',         zip: '33131', note: 'Island residential cluster south of the mainland' },
      { name: 'Brickell City Centre', zip: '33130', note: 'Mixed-use luxury development near the Metro' },
      { name: 'Eighth Street',        zip: '33130', note: 'Commercial corridor connecting to Little Havana' },
    ],
  },
  {
    name: 'Downtown Miami',
    slug: 'downtown',
    zip: '33132',
    area: 'Central Miami',
    subAreas: [
      { name: 'Flagler Street',       zip: '33130', note: 'Historic commercial spine of downtown' },
      { name: 'Bayside',              zip: '33132', note: 'Tourist marketplace and bay-front retail' },
      { name: 'Miami Riverwalk',      zip: '33130', note: 'River-adjacent mixed-use development' },
      { name: 'Park West',            zip: '33136', note: 'Northern downtown residential and entertainment' },
      { name: 'Government Center',    zip: '33128', note: 'Civic and federal court district' },
    ],
  },
  {
    name: 'Wynwood',
    slug: 'wynwood',
    zip: '33127',
    area: 'Central Miami',
    subAreas: [
      { name: 'Wynwood Walls',        zip: '33127', note: 'Outdoor street-art museum and tourist anchor' },
      { name: 'NW 2nd Avenue',        zip: '33127', note: 'Gallery and restaurant corridor' },
      { name: 'Edgewater border',     zip: '33137', note: 'Residential boundary towards Biscayne Bay' },
      { name: 'Allapattah edge',      zip: '33127', note: 'Working-arts community west of Wynwood proper' },
      { name: 'Design District',      zip: '33137', note: 'Adjacent luxury retail and design district' },
    ],
  },
  {
    name: 'South Beach',
    slug: 'south-beach',
    zip: '33139',
    area: 'Beach',
    subAreas: [
      { name: 'Ocean Drive',          zip: '33139', note: 'Art Deco hotel strip and tourist core' },
      { name: 'Lincoln Road',         zip: '33139', note: 'Pedestrian retail and dining mall' },
      { name: 'Collins Avenue',       zip: '33139', note: 'Hotel and luxury beachfront corridor' },
      { name: 'South of Fifth',       zip: '33139', note: 'Premium residential at the southern tip' },
      { name: 'Mid-Beach',            zip: '33140', note: 'Connecting strip towards Mid- and North Beach' },
    ],
  },
  {
    name: 'Coconut Grove',
    slug: 'coconut-grove',
    zip: '33133',
    area: 'South Miami',
    subAreas: [
      { name: 'CocoWalk',             zip: '33133', note: 'Outdoor lifestyle center and dining hub' },
      { name: 'Bayshore Drive',       zip: '33133', note: 'Bay-front residential and marina' },
      { name: 'McFarlane Road',       zip: '33133', note: 'Historic village commercial street' },
      { name: 'Center Grove',         zip: '33133', note: 'Established residential heart of the Grove' },
      { name: 'Silver Bluff',         zip: '33133', note: 'Adjacent residential bordering Coral Way' },
    ],
  },
  {
    name: 'Coral Gables',
    slug: 'coral-gables',
    zip: '33134',
    area: 'South Miami',
    subAreas: [
      { name: 'Miracle Mile',         zip: '33134', note: 'Pedestrian retail spine of Coral Gables' },
      { name: 'Giralda Plaza',        zip: '33134', note: 'Restaurant district off Miracle Mile' },
      { name: 'Ponce de Leon',        zip: '33134', note: 'Mediterranean-style commercial corridor' },
      { name: 'Riviera',              zip: '33146', note: 'University-of-Miami-adjacent residential' },
      { name: 'Old Cutler Trail',     zip: '33156', note: 'Premium residential bordering Pinecrest' },
    ],
  },
  {
    name: 'Little Havana',
    slug: 'little-havana',
    zip: '33135',
    area: 'Central Miami',
    subAreas: [
      { name: 'Calle Ocho (SW 8th)',  zip: '33135', note: 'Cultural and culinary heart of Cuban Miami' },
      { name: 'Domino Park',          zip: '33135', note: 'Iconic public park and community gathering point' },
      { name: 'Versailles area',      zip: '33135', note: 'Restaurant cluster around the historic Versailles café' },
      { name: 'East Little Havana',   zip: '33130', note: 'Boundary with Brickell, mixed residential' },
      { name: 'West Flagler',         zip: '33144', note: 'Western extension of the Cuban-American corridor' },
    ],
  },
  {
    name: 'Doral',
    slug: 'doral',
    zip: '33178',
    area: 'West Miami',
    subAreas: [
      { name: 'Downtown Doral',       zip: '33172', note: 'Mixed-use planned development with retail and dining' },
      { name: 'NW 36th Street',       zip: '33178', note: 'Industrial and warehouse corridor near MIA' },
      { name: 'Doral Boulevard',      zip: '33172', note: 'Main commercial spine through the city' },
      { name: 'Trump National',       zip: '33178', note: 'Golf resort area and upscale residential' },
      { name: 'Fontainebleau Park',   zip: '33172', note: 'Adjacent residential community' },
    ],
  },
  {
    name: 'Aventura',
    slug: 'aventura',
    zip: '33180',
    area: 'North Miami',
    subAreas: [
      { name: 'Aventura Mall',        zip: '33180', note: 'Major regional shopping anchor' },
      { name: 'Country Club Drive',   zip: '33180', note: 'Premier residential ring around the country club' },
      { name: 'Biscayne Boulevard',   zip: '33180', note: 'Commercial corridor running north-south' },
      { name: 'Hallandale border',    zip: '33009', note: 'Northern boundary with Hallandale Beach' },
      { name: 'Williams Island',      zip: '33180', note: 'Private island residential community' },
    ],
  },
  {
    name: 'Pinecrest',
    slug: 'pinecrest',
    zip: '33156',
    area: 'South Miami',
    subAreas: [
      { name: 'US-1 / South Dixie',   zip: '33156', note: 'Commercial spine through the village' },
      { name: 'Pinecrest Gardens',    zip: '33156', note: 'Public garden and community gathering point' },
      { name: 'Old Cutler Road',      zip: '33156', note: 'Established premium residential corridor' },
      { name: 'Ludlam Road',          zip: '33156', note: 'Quiet residential side streets' },
      { name: 'Palmetto Bay border',  zip: '33157', note: 'Southern boundary with Palmetto Bay' },
    ],
  },
];

// Helpers
export function getAreaHubBySlug(slug: string): AreaHub | undefined {
  return AREA_HUBS.find(a => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return AREA_HUBS.map(a => a.slug);
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
