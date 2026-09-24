export interface DesignArchetype {
  id: number
  key: string
  name: string
  tagline: string
  category: string
  accentColor: string
  bgPreview: string
  typography: string
  layoutStyle: string
  targetAudience: string
  keyInnovations: string[]
}

export const ARCHETYPES: DesignArchetype[] = [
  {
    id: 1,
    key: 'blueprint',
    name: 'CAD Blueprint & Telemetry',
    tagline: 'Engineering-first technical schematics & dimensional callouts',
    category: 'Technical E-Commerce',
    accentColor: '#00D2FF',
    bgPreview: '#04101E',
    typography: 'JetBrains Mono / Space Grotesk',
    layoutStyle: 'Strict CAD coordinate grid with crosshairs, dimensional callouts, live stress telemetry',
    targetAudience: 'Mechanical engineers, fleet safety directors, spec-driven procurement officers',
    keyInnovations: [
      'Interactive vector exploded-parts schematic with coordinate pins',
      'Live finite element stress-strain simulation preview',
      'Direct downloadable STEP/CAD fitment files & technical spec sheets',
      'Shop: Technical data-matrix view with tube wall gauge & radar pass-through sliders'
    ]
  },
  {
    id: 2,
    key: 'baja',
    name: 'Tactical Baja Heavy Hauler',
    tagline: 'Aggressive 12° chamfered geometry, impact badges & mud attitude',
    category: 'Severe Duty E-Commerce',
    accentColor: '#FF6B00',
    bgPreview: '#120F0D',
    typography: 'Impact / Barlow Black / Industry Shock',
    layoutStyle: '12-degree angled polygons, hazard diagonal chevrons, heavy steel plates, oversized impact badges',
    targetAudience: 'Owner-operators, timber & oilfield haulers, northern wilderness truckers',
    keyInnovations: [
      'Kinetic Impact Energy Absorption Gauge (measuring Joules at 70 MPH)',
      'Combat Armor Tier badges (Tier 1 Whitetail to Tier 3 Alaskan Moose)',
      'Reinforced bull bar toggle with integrated dual-row LED lightbar tabs',
      'Shop: Heavy-duty armor tiles with mud-tested durability stamps'
    ]
  },
  {
    id: 3,
    key: 'express',
    name: 'Highway Express Direct',
    tagline: 'High-converting driver e-store with 10-second rig finder & same-day freight',
    category: 'Direct Driver E-Commerce',
    accentColor: '#3B82F6',
    bgPreview: '#0B132B',
    typography: 'Inter / Plus Jakarta Sans',
    layoutStyle: 'Clean retail e-commerce with prominent Make/Model/Year selector, Affirm monthly payment chips, and stock badges',
    targetAudience: 'Solo truck drivers, owner-operators buying 1 guard with fast delivery',
    keyInnovations: [
      '10-Second Truck Fitment Finder (Make -> Model -> Year)',
      'Affirm monthly financing callout ($79/mo)',
      'Guaranteed 100% bolt-on no-drill promise with free freight over $500',
      'Shop: High-converting card grid with real truck photography and same-day dispatch badges'
    ]
  },
  {
    id: 4,
    key: 'owneroperator',
    name: 'Owner-Operator Pro Shop',
    tagline: 'Tailored for independent drivers & 1–3 truck fleet operators',
    category: 'Pro Driver Bundles',
    accentColor: '#10B981',
    bgPreview: '#061A14',
    typography: 'Barlow / SF Pro Display',
    layoutStyle: 'Complete protection bundle showcase (Guard + Bracket + Free Terminal Delivery), multi-truck savings selector',
    targetAudience: 'Owner-operators running 1 rig or small fleets with 2 to 4 trucks',
    keyInnovations: [
      'Multi-Rig Bundle Switcher: 1 Truck ($2,199) vs 2-3 Trucks ($2,049/ea - Save $150/guard)',
      'Free Freight delivery to any truck stop, terminal, or repair shop in lower 48',
      'All-inclusive bracket kits with Grade-8 mounting hardware included',
      'Shop: Clear quantity discount tiers and instant driver purchase order trigger'
    ]
  },
  {
    id: 5,
    key: 'visualstudio',
    name: 'Visual Bumper Bay & Fitment Guide',
    tagline: 'See the guard on your exact truck before you buy with hood-tilt clearances',
    category: 'Visual Fitment E-Commerce',
    accentColor: '#8B5CF6',
    bgPreview: '#0D0E1A',
    typography: 'Plus Jakarta Sans / Syne',
    layoutStyle: 'Visual vehicle bay showcasing high-resolution truck photography with 12-second hood tilt demo',
    targetAudience: 'Drivers who want visual proof of how the guard looks on their exact truck front end',
    keyInnovations: [
      'Visual Rig Switcher: View guard mounted on Volvo VNL, Cascadia, T680, and Peterbilt',
      'Hood Tilt Animation Demo: Shows how dual stainless pins allow easy pre-trip fluid checks',
      'Real-time weight and aerodynamic delta readouts',
      'Shop: Direct visual catalog with bracket compatibility indicators and quick buy'
    ]
  },
  {
    id: 6,
    key: 'casradar',
    name: 'CAS Radar-Safe Shield E-Store',
    tagline: 'Guaranteed zero interference with Detroit Assurance, Bendix Fusion & Volvo Active Driver Assist',
    category: 'Radar Safety E-Commerce',
    accentColor: '#00F0FF',
    bgPreview: '#030C1A',
    typography: 'Space Grotesk / Inter',
    layoutStyle: 'High-contrast safety certification styling, radar aperture diagrams, 100% false-alarm-free guarantee',
    targetAudience: 'Modern truck owners worried about deer guards blocking their radar safety sensors',
    keyInnovations: [
      'Certified 100% CMS Radar Compatibility guarantee with zero phantom emergency braking',
      'Laser-cut sensor pass-through window with 180° radar propagation cone',
      'Driver proof: Over 14 million miles logged with zero sensor occlusion errors',
      'Shop: Safety-certified product listings highlighting radar sensor pass-through verification'
    ]
  },
  {
    id: 7,
    key: 'classicchrome',
    name: 'Big Rig Classic Chrome & Stainless',
    tagline: 'Hand-polished 304 stainless steel and mirror chrome that never rusts',
    category: 'Chrome Heritage E-Commerce',
    accentColor: '#F59E0B',
    bgPreview: '#120D08',
    typography: 'Barlow Condensed / Georgia / Playfair',
    layoutStyle: 'Traditional American trucker catalog, gleaming chrome photography, phone order dispatch hotline',
    targetAudience: 'Drivers who love classic and modern chrome rigs (Peterbilt 389, W900, Western Star)',
    keyInnovations: [
      'Mirror-polished triple-dip 304 stainless steel with lifetime rust-through warranty',
      '24/7 Trucker Phone Dispatch Hotline ("Call and speak with a real parts specialist")',
      'Made in USA from domestic mill-certified steel tubing',
      'Shop: Gleaming chrome product cards with stainless tube gauge callouts and 1-click buy'
    ]
  },
  {
    id: 8,
    key: 'northernmoose',
    name: 'Northern Route Moose & Elk Armor',
    tagline: 'Extreme wildlife collision defense for I-80, I-90, Alaska, Wyoming & Canada',
    category: 'Extreme Wildlife E-Commerce',
    accentColor: '#DC2626',
    bgPreview: '#140A0A',
    typography: 'Impact / Barlow / Chivo',
    layoutStyle: 'Severe weather and wildlife threat matrix, 1/2" boxed steel specs, radiator protection warranty',
    targetAudience: 'Cross-country haulers running northern routes where hitting a 1,000-lb animal is a daily threat',
    keyInnovations: [
      '"Hit an Animal or We Replace It" structural replacement warranty',
      'Categorized by animal threat level: Whitetail (150 lbs) to Bull Moose (1,400 lbs)',
      'Heavy boxed-truss construction protecting radiator, intercooler, and steering box',
      'Shop: Severe-duty armor cards with strike force ratings and heavy hardware kits'
    ]
  },
  {
    id: 9,
    key: 'driverproof',
    name: 'Driver Proof & Field Test Store',
    tagline: 'Real trucker crash stories, before/after strike photos, and verified reviews',
    category: 'Social Proof E-Commerce',
    accentColor: '#EC4899',
    bgPreview: '#100B17',
    typography: 'Epilogue / Inter',
    layoutStyle: 'Customer photo review cards, verified buyer badges, driver star ratings, dashcam testimonial clips',
    targetAudience: 'Drivers who want proof from other truckers who hit deer and drove away without a scratch',
    keyInnovations: [
      'Real driver photos with their rigs ("Dave M. saved his $18,000 radiator in Nebraska")',
      'Verified Owner-Operator Review Scorecards (4.9 / 5 Stars across 820+ drivers)',
      'Zero Tow Bill guarantee with customer service support by former truckers',
      'Shop: Review-first e-commerce cards pairing truck photos with verified buyer reviews'
    ]
  },
  {
    id: 10,
    key: 'downtime',
    name: 'Downtime Loss Prevention Store',
    tagline: 'Save $18,000+ in towing, radiator replacement, and lost freight revenue',
    category: 'Financial ROI E-Commerce',
    accentColor: '#10B981',
    bgPreview: '#05140F',
    typography: 'Work Sans / Inter',
    layoutStyle: 'Financial cost-benefit comparison, downtime avoidance calculator, insurance deduction certificates',
    targetAudience: 'Bottom-line-focused owner-operators who know that 1 collision can put them out of business',
    keyInnovations: [
      'Interactive Collision Cost Breakdown: $6,500 Radiator/CAC + $1,800 Tow + $12,000 Lost Loads',
      '"Your Guard Pays For Itself On The Very First Strike" guarantee',
      'Insurance premium discount documentation provided with every purchase',
      'Shop: ROI-driven product cards showing cost savings per truck and 1-click checkout'
    ]
  },
  {
    id: 11,
    key: 'stealth',
    name: 'Stealth Blackout / Midnight Express',
    tagline: 'Satin matte black luxury with carbon weave & dramatic studio spotlights',
    category: 'Custom Rig E-Commerce',
    accentColor: '#A855F7',
    bgPreview: '#050508',
    typography: 'Montserrat Bold / Manrope',
    layoutStyle: 'Subtle carbon-fiber weave patterns, moody studio spotlights, satin finish metal toggles',
    targetAudience: 'High-end custom haulers, show rig enthusiasts, luxury owner-operators',
    keyInnovations: [
      'Interactive Finish Switcher (Wrinkle Matte, Satin Gunmetal, Ceramic Tuxedo Black)',
      'Dramatic spotlight cursor illumination that highlights chassis welds and tube bends',
      'Murdered-out dark luxury aesthetics for show trucks and custom rigs',
      'Shop: Dark studio product cards with reflective specular rim lighting'
    ]
  },
  {
    id: 12,
    key: 'terminal',
    name: 'Command Terminal / Fast Mechanic',
    tagline: 'Raycast/Superhuman-style keyboard-driven quick-order tool for dispatchers',
    category: 'Rapid Dispatch Utility',
    accentColor: '#38BDF8',
    bgPreview: '#030712',
    typography: 'Fira Code / Geist Mono',
    layoutStyle: 'Ultra-compact terminal command palette, keyboard shortcuts, zero latency, tabular speed',
    targetAudience: 'Busy shop mechanics, fleet parts managers, dispatchers who need to order in 15 seconds',
    keyInnovations: [
      'Universal Command Bar [Cmd+K]: instant search by VIN, OEM part number, or truck model',
      'Hotkeys: Press [1-6] to select brands, [Enter] to checkout, [Space] to toggle spec sheet',
      'Sub-100ms instant filter response with zero marketing fluff',
      'Shop: High-speed keyboard navigable tabular manifest with instant stock verification'
    ]
  }
]

export interface DemoProduct {
  id: string
  name: string
  truck: string
  model: string
  yearRange: string
  price: number
  comparePrice?: number
  monthlyPayment: number
  gauge: string
  weightLbs: number
  impactRating: string
  casCompatible: boolean
  finish: string
  inStock: boolean
  stockCount: number
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3'
  tubeDiameter: string
  material: string
  radarCompliant: boolean
  affirmMonthly: number
  aeroDragDelta: string
  image: string
  isolatedImage: string
  rating: number
  reviewCount: number
  driverReview: string
  driverName: string
  driverLocation: string
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: 'g-vnl760',
    name: 'AeroShield Heavy Duty Guard — Volvo VNL',
    truck: 'Volvo',
    model: 'VNL 760 / 860',
    yearRange: '2018–2026',
    price: 2199,
    comparePrice: 2499,
    monthlyPayment: 78,
    affirmMonthly: 78,
    gauge: '1/4" High-Tensile Steel',
    tubeDiameter: '3.0" OD Heavy-Wall Tubing',
    material: 'High-Tensile Carbon Steel',
    weightLbs: 98,
    impactRating: '18,500 Joules (70 MPH Whitetail)',
    radarCompliant: true,
    casCompatible: true,
    aeroDragDelta: '-0.2%',
    finish: 'Matte Black Powder-Coat',
    inStock: true,
    stockCount: 24,
    tier: 'Tier 2',
    image: '/images/guards/guard-volvo-vnl.jpg',
    isolatedImage: '/images/guards/guard-isolated-black.jpg',
    rating: 4.9,
    reviewCount: 142,
    driverReview: 'Saved my radiator on I-80 in Wyoming. Hit a 250lb buck at 68 MPH. Guard didn’t budge!',
    driverName: 'Dave K.',
    driverLocation: 'Omaha, NE'
  },
  {
    id: 'g-cascadia',
    name: 'Titan Pro Sentinel Guard — Cascadia',
    truck: 'Freightliner',
    model: 'Cascadia (All Trims)',
    yearRange: '2018–2026',
    price: 2349,
    comparePrice: 2599,
    monthlyPayment: 83,
    affirmMonthly: 83,
    gauge: '3/8" Cold-Rolled Carbon Steel',
    tubeDiameter: '3.0" Mandrel Bent Steel',
    material: 'Cold-Rolled Carbon Steel',
    weightLbs: 112,
    impactRating: '19,200 Joules (75 MPH Mule Deer)',
    radarCompliant: true,
    casCompatible: true,
    aeroDragDelta: '-0.1%',
    finish: 'Textured Black Powder',
    inStock: true,
    stockCount: 38,
    tier: 'Tier 2',
    image: '/images/guards/guard-freightliner-cascadia.jpg',
    isolatedImage: '/images/guards/guard-isolated-black.jpg',
    rating: 4.8,
    reviewCount: 214,
    driverReview: 'Zero issues with Detroit Assurance radar. The fold-down pins make morning pre-trips a breeze.',
    driverName: 'Marcus T.',
    driverLocation: 'Fort Worth, TX'
  },
  {
    id: 'g-t680',
    name: 'AeroFlow CAS Radar Guard — Kenworth T680',
    truck: 'Kenworth',
    model: 'T680 Next Gen / Classic',
    yearRange: '2016–2026',
    price: 1899,
    comparePrice: 2149,
    monthlyPayment: 67,
    affirmMonthly: 67,
    gauge: '3.5" OD High-Yield Tubing',
    tubeDiameter: '3.5" OD Aerodynamic Contour',
    material: 'High-Yield Tubular Steel',
    weightLbs: 89,
    impactRating: '14,800 Joules (65 MPH Deer)',
    radarCompliant: true,
    casCompatible: true,
    aeroDragDelta: '+0.1%',
    finish: 'Satin Black E-Coat',
    inStock: true,
    stockCount: 17,
    tier: 'Tier 1',
    image: '/images/guards/guard-kenworth-t680.jpg',
    isolatedImage: '/images/guards/guard-isolated-black.jpg',
    rating: 4.9,
    reviewCount: 96,
    driverReview: 'Aero shape cut fuel drag. Looks like it came straight from the Kenworth factory floor.',
    driverName: 'Stanislav R.',
    driverLocation: 'Boise, ID'
  },
  {
    id: 'g-peterbilt389',
    name: 'Classic Road King Moose Guard — Peterbilt 389',
    truck: 'Peterbilt',
    model: '389 / 589 Heritage',
    yearRange: '2008–2026',
    price: 2699,
    comparePrice: 2999,
    monthlyPayment: 96,
    affirmMonthly: 96,
    gauge: '3" Polished 304 Stainless Steel',
    tubeDiameter: '3.5" Heavy-Wall Stainless',
    material: 'Polished 304 Stainless Steel',
    weightLbs: 138,
    impactRating: '29,400 Joules (80 MPH Bull Elk/Moose)',
    radarCompliant: false,
    casCompatible: false,
    aeroDragDelta: '+0.8%',
    finish: 'Mirror Finish Chrome',
    inStock: true,
    stockCount: 15,
    tier: 'Tier 3',
    image: '/images/guards/guard-peterbilt-389.jpg',
    isolatedImage: '/images/guards/guard-isolated-chrome.jpg',
    rating: 5.0,
    reviewCount: 88,
    driverReview: 'Pure American chrome. Hit a cow elk in Montana and drove 900 miles without a dent.',
    driverName: 'Wyatt B.',
    driverLocation: 'Billings, MT'
  },
  {
    id: 'g-w900',
    name: 'Road Train Moose Destroyer — Kenworth W900',
    truck: 'Kenworth',
    model: 'W900L / W990',
    yearRange: '2000–2026',
    price: 2799,
    comparePrice: 3199,
    monthlyPayment: 99,
    affirmMonthly: 99,
    gauge: '1/2" Boxed Truss Structural Steel',
    tubeDiameter: '4.0" Extra-Heavy Schedule 40',
    material: 'Boxed Truss Structural Steel',
    weightLbs: 146,
    impactRating: '31,000 Joules (Alaskan Moose Shield)',
    radarCompliant: false,
    casCompatible: false,
    aeroDragDelta: '+1.2%',
    finish: 'Heavy Duty Black / Chrome',
    inStock: true,
    stockCount: 9,
    tier: 'Tier 3',
    image: '/images/guards/guard-winter-moose.jpg',
    isolatedImage: '/images/guards/guard-isolated-chrome.jpg',
    rating: 4.9,
    reviewCount: 52,
    driverReview: 'Logging haul road tested in Fairbanks. Best $2,800 insurance you can put on a tractor.',
    driverName: 'Travis J.',
    driverLocation: 'Anchorage, AK'
  },
  {
    id: 'g-mack-anthem',
    name: 'Bulldog Armored Strike Shield — Mack',
    truck: 'Mack',
    model: 'Anthem / Pinnacle',
    yearRange: '2018–2026',
    price: 1999,
    comparePrice: 2299,
    monthlyPayment: 71,
    affirmMonthly: 71,
    gauge: '1/4" Welded Tubular Steel',
    tubeDiameter: '3.0" Heavy Boxed Tubing',
    material: 'Structural Carbon Steel',
    weightLbs: 95,
    impactRating: '16,200 Joules (70 MPH Impact)',
    radarCompliant: true,
    casCompatible: true,
    aeroDragDelta: '-0.3%',
    finish: 'Textured Wrinkle Black',
    inStock: true,
    stockCount: 14,
    tier: 'Tier 2',
    image: '/images/guards/guard-mack-anthem.jpg',
    isolatedImage: '/images/guards/guard-isolated-black.jpg',
    rating: 4.8,
    reviewCount: 64,
    driverReview: 'Bolted right into the tow hook pins in 25 minutes. Built as tough as the Mack Bulldog.',
    driverName: 'Greg P.',
    driverLocation: 'Scranton, PA'
  }
]
