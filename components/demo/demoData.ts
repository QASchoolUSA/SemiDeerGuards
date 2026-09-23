export interface DesignArchetype {
  id: number
  key: string
  name: string
  tagline: string
  category: 'Technical' | 'Rugged' | 'Luxury' | 'Enterprise' | 'Interactive' | 'Futuristic' | 'Heritage' | 'Brutalist' | 'Editorial' | 'Scientific' | 'Stealth' | 'Utility'
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
    category: 'Technical',
    accentColor: '#00D2FF',
    bgPreview: '#04101E',
    typography: 'JetBrains Mono / Space Grotesk / DIN',
    layoutStyle: 'Strict CAD coordinate grid with crosshairs, dimensional leader lines, live stress telemetry',
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
    category: 'Rugged',
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
    key: 'nordic',
    name: 'Nordic Minimalist / Swiss Modern',
    tagline: 'High-fashion metallurgical luxury with vast architectural negative space',
    category: 'Luxury',
    accentColor: '#9CA3AF',
    bgPreview: '#0A0A0B',
    typography: 'Cabinet Grotesk / Neue Montreal / Editorial Serif',
    layoutStyle: 'Ultra-spacious asymmetric grid, razor-thin 0.5px hairline rules, pure monochrome restraint',
    targetAudience: 'Executive fleet operators, premium European-inspired logistics brands, design purists',
    keyInnovations: [
      'Poetic long-form editorial storytelling focusing on pure metallurgy and silent protection',
      'Floating high-contrast product silhouettes that follow cursor movement',
      'Architectural lookbook layout with staggered magazine column rhythms',
      'Shop: Clean slide-out filter drawer with minimal typography-dominant price tags'
    ]
  },
  {
    id: 4,
    key: 'fleet',
    name: 'Highway Fleet Commander ERP',
    tagline: 'B2B enterprise operations portal with live ROI & multi-depot stock',
    category: 'Enterprise',
    accentColor: '#10B981',
    bgPreview: '#081412',
    typography: 'Inter / SF Pro Display / IBM Plex Sans',
    layoutStyle: 'High-density operations dashboard, telemetry cards, nationwide logistics hub map',
    targetAudience: 'Corporate fleet directors (100+ trucks), logistics VPs, maintenance supervisors',
    keyInnovations: [
      'Live Fleet Downtime Savings Ticker ($1.4M saved across 14,200 deployed units)',
      'Multi-VIN bulk batch fitment builder with fleet volume discount tiering (up to 28% off)',
      'Real-time inventory visibility across 5 US depots (Dallas, Chicago, Atlanta, Reno, Scranton)',
      'Shop: High-density spreadsheet grid with 1-click PO generator and CSV upload'
    ]
  },
  {
    id: 5,
    key: 'configurator',
    name: '3D Rig Configurator Studio',
    tagline: 'Interactive vehicle customizer bay with live Bill of Materials',
    category: 'Interactive',
    accentColor: '#8B5CF6',
    bgPreview: '#0D0E1A',
    typography: 'Syne / Plus Jakarta Sans',
    layoutStyle: '3D hangar studio bay with floating docked control panel and live component assembly',
    targetAudience: 'Truck customizers, show-truck builders, tech-forward drivers wanting exact visuals',
    keyInnovations: [
      '4-Step Interactive Customizer: Make & Model -> Guard Style -> Finish -> Radar Module',
      'Live dynamic weight, aerodynamic drag coefficient, and payload delta updates',
      'Interactive exploded preview toggling bumper fold-forward maintenance position',
      'Shop: Modular equipment cards that snap directly onto a live truck wireframe'
    ]
  },
  {
    id: 6,
    key: 'cyber',
    name: 'CyberRig Neo-Future',
    tagline: 'Autonomous sensor-shielded dark mode with glowing telemetry HUD',
    category: 'Futuristic',
    accentColor: '#00F0FF',
    bgPreview: '#020205',
    typography: 'Rajdhani / Orbitron / Space Mono',
    layoutStyle: 'True OLED pitch black, glowing neon vectors, HUD telemetry brackets, scanlines',
    targetAudience: 'Next-gen electric/autonomous truck fleets (Tesla Semi, Nikola, autonomous Cascadia)',
    keyInnovations: [
      'Active Radar Wave Simulator demonstrating 99.8% millimeter-wave CAS pass-through',
      'Lidar sensor optical transparency scorecards',
      'Futuristic telemetry readout of sensor line-of-sight and aerodynamic cooling ducting',
      'Shop: Hologram card deck with glowing sensor indicators and cyber chip filters'
    ]
  },
  {
    id: 7,
    key: 'heritage',
    name: 'Heritage Chrome & Route 66',
    tagline: '1970s Classic Americana, mirror chrome & handcrafted American steel',
    category: 'Heritage',
    accentColor: '#D97706',
    bgPreview: '#140E0A',
    typography: 'Cinzel / Playfair / Vintage Slab-Serif',
    layoutStyle: 'Embossed leather & brass rivets, warm parchment accents, vintage trade catalog feel',
    targetAudience: 'Long-haul veteran drivers, classic Peterbilt/Kenworth owners, traditional truckers',
    keyInnovations: [
      'Embossed "Hand-Forged in Ohio Since 1978" brass badge seals of authenticity',
      'Highway road stories from million-mile drivers who hit wildlife and drove away undamaged',
      'Vintage mirror-polish chrome specular reflection effects',
      'Shop: Classical parts catalog with direct phone hotline to the factory dispatcher'
    ]
  },
  {
    id: 8,
    key: 'brutalist',
    name: 'Raw Brutalist Steel Works',
    tagline: 'Stark, unapologetic industrial power with 3px solid borders & hard shadows',
    category: 'Brutalist',
    accentColor: '#E2F952',
    bgPreview: '#000000',
    typography: 'Druk Wide / Monument Extended / Courier Prime',
    layoutStyle: 'Heavy 3px borders, 6px hard offset drop-shadows, sticker-bombed stamps, hazard banners',
    targetAudience: 'Scrap haulers, heavy machinery transport, no-nonsense blue-collar operators',
    keyInnovations: [
      'Sticker-bombed industrial certification stamps ("100% US MIL-SPEC GRADE 50 STEEL")',
      'Live warehouse liquidation ticker showing actual crated pallet inventory',
      'Zero-fluff direct buy triggers with raw high-impact contrast',
      'Shop: Physical shipping manifest tickets with printable barcode labels'
    ]
  },
  {
    id: 9,
    key: 'storyboard',
    name: 'Kinetic Split Storyboard',
    tagline: '50/50 dual-pane visual storytelling with synced episodic chapters',
    category: 'Editorial',
    accentColor: '#EC4899',
    bgPreview: '#0B0912',
    typography: 'Epilogue / Instrument Serif / Clash Display',
    layoutStyle: '50/50 vertical split: left sticky cinematic viewport, right scrolling narrative chapters',
    targetAudience: 'Drivers and safety managers who respond to documentary-style proof and visual impact',
    keyInnovations: [
      'Synced 4-Chapter Journey: 01 The Danger (55k strikes/yr) -> 02 The Steel -> 03 The Lock -> 04 The Highway',
      'Interactive chapter scrubber with synchronized visual changes on the left pane',
      'Deep driver interviews detailing real-world strikes at 2 AM in Wyoming',
      'Shop: Magazine editorial spread pairing animal strike survivor photos with their guard'
    ]
  },
  {
    id: 10,
    key: 'crashlab',
    name: 'Crash-Test Safety Laboratory',
    tagline: 'IIHS-style scientific collision physics lab & impact velocity simulator',
    category: 'Scientific',
    accentColor: '#EF4444',
    bgPreview: '#0C0A0B',
    typography: 'Chivo Mono / Work Sans / DM Sans',
    layoutStyle: 'Laboratory test chamber grid, accelerometer charts, high-speed camera markers, stress curves',
    targetAudience: 'Insurance risk analysts, safety compliance officers, data-driven fleet managers',
    keyInnovations: [
      'Interactive Collision Physics Simulator: drag Speed (45-75 MPH) & Animal Mass (150-1200 lbs)',
      'Live calculated Kinetic Energy (kJ), Deceleration G-Forces, and Estimated Repair Savings ($)',
      'Certified Lab Impact Telemetry Scorecards with finite element analysis graphs',
      'Shop: Impact-Class certified matrix (Class I Highway, Class II Rural, Class III Moose Shield)'
    ]
  },
  {
    id: 11,
    key: 'stealth',
    name: 'Stealth Blackout / Midnight Express',
    tagline: 'Satin matte black luxury with carbon weave & dramatic studio spotlights',
    category: 'Stealth',
    accentColor: '#A855F7',
    bgPreview: '#050508',
    typography: 'Syncopate / Montserrat Bold / Manrope',
    layoutStyle: 'Subtle carbon-fiber weave patterns, moody studio spotlights, satin finish metal toggles',
    targetAudience: 'High-end custom haulers, show rig enthusiasts, luxury owner-operators',
    keyInnovations: [
      'Interactive Finish Switcher (Wrinkle Matte, Satin Gunmetal, Ceramic Tuxedo Black)',
      'Dramatic spotlight cursor illumination that highlights chassis welds and tube bends',
      'Murdered-out dark luxury aesthetics reminiscent of high-end automotive coachbuilders',
      'Shop: Dark studio product cards with reflective specular rim lighting'
    ]
  },
  {
    id: 12,
    key: 'terminal',
    name: 'Command Terminal / Fast Mechanic',
    tagline: 'Raycast/Superhuman-style keyboard-driven quick-order tool for dispatchers',
    category: 'Utility',
    accentColor: '#38BDF8',
    bgPreview: '#030712',
    typography: 'Fira Code / Geist Mono / Berkeley Mono',
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
  price: number
  comparePrice?: number
  gauge: string
  weightLbs: number
  impactRating: string
  casCompatible: boolean
  finish: string
  inStock: boolean
  stockCount: number
  tier: 'Tier 1' | 'Tier 2' | 'Tier 3'
  cadUrl?: string
  aeroDragDelta?: string
}

export const DEMO_PRODUCTS: DemoProduct[] = [
  {
    id: 'g-vnl760',
    name: 'AeroShield Heavy Duty Guard',
    truck: 'Volvo',
    model: 'VNL 760 / 860',
    price: 2199,
    comparePrice: 2499,
    gauge: '1/4" High-Tensile Steel',
    weightLbs: 98,
    impactRating: '14,200 Joules (70 MPH Whitetail)',
    casCompatible: true,
    finish: 'Matte Powder-Coat',
    inStock: true,
    stockCount: 24,
    tier: 'Tier 2',
    aeroDragDelta: '-0.4% Cd'
  },
  {
    id: 'g-cascadia',
    name: 'Titan Pro Sentinel Guard',
    truck: 'Freightliner',
    model: 'Cascadia (2018–2026)',
    price: 2349,
    comparePrice: 2599,
    gauge: '3/8" Cold-Rolled Carbon Steel',
    weightLbs: 112,
    impactRating: '18,500 Joules (75 MPH Mule Deer)',
    casCompatible: true,
    finish: 'Mirror Chrome / Black',
    inStock: true,
    stockCount: 38,
    tier: 'Tier 2',
    aeroDragDelta: '-0.2% Cd'
  },
  {
    id: 'g-t680',
    name: 'AeroFlow CAS Radar Guard',
    truck: 'Kenworth',
    model: 'T680 Next Gen',
    price: 1899,
    gauge: '3.5" OD High-Yield Tubing',
    weightLbs: 89,
    impactRating: '12,800 Joules (65 MPH Deer)',
    casCompatible: true,
    finish: 'Brushed Aluminum',
    inStock: true,
    stockCount: 17,
    tier: 'Tier 1',
    aeroDragDelta: '+0.1% Cd'
  },
  {
    id: 'g-w900',
    name: 'Road Train Moose Destroyer',
    truck: 'Kenworth',
    model: 'W900 / W990',
    price: 2699,
    comparePrice: 2999,
    gauge: '1/2" Boxed Truss Structural Steel',
    weightLbs: 146,
    impactRating: '29,400 Joules (80 MPH Bull Elk/Moose)',
    casCompatible: false,
    finish: 'Mirror Chrome Plate',
    inStock: true,
    stockCount: 9,
    tier: 'Tier 3',
    aeroDragDelta: '+1.2% Cd'
  },
  {
    id: 'g-peterbilt389',
    name: 'Defender Highway Brawler',
    truck: 'Peterbilt',
    model: '389 / 589 Heritage',
    price: 2099,
    gauge: '3" Polished Stainless Steel',
    weightLbs: 104,
    impactRating: '16,000 Joules (70 MPH Impact)',
    casCompatible: false,
    finish: 'Mirror Finish Stainless',
    inStock: true,
    stockCount: 15,
    tier: 'Tier 2',
    aeroDragDelta: '+0.8% Cd'
  },
  {
    id: 'g-peterbilt579',
    name: 'EpiCenter Aero Guard',
    truck: 'Peterbilt',
    model: '579 Ultraloft',
    price: 2250,
    gauge: 'High-Strength 6061-T6 Aluminum',
    weightLbs: 76,
    impactRating: '13,500 Joules (65 MPH Deer)',
    casCompatible: true,
    finish: 'Satin Powder Black',
    inStock: true,
    stockCount: 21,
    tier: 'Tier 1',
    aeroDragDelta: '-0.3% Cd'
  },
  {
    id: 'g-mack-anthem',
    name: 'Bulldog Armored Strike Shield',
    truck: 'Mack',
    model: 'Anthem / Pinnacle',
    price: 1999,
    gauge: '1/4" Welded Tubular Steel',
    weightLbs: 95,
    impactRating: '15,200 Joules (70 MPH Impact)',
    casCompatible: true,
    finish: 'Textured Wrinkle Black',
    inStock: false,
    stockCount: 0,
    tier: 'Tier 2',
    aeroDragDelta: '-0.1% Cd'
  },
  {
    id: 'g-international-lt',
    name: 'Interstate Interceptor Shield',
    truck: 'International',
    model: 'LT / RH Series',
    price: 1849,
    gauge: 'Steel Tubular with Lower Skid Plate',
    weightLbs: 92,
    impactRating: '13,100 Joules (65 MPH Impact)',
    casCompatible: true,
    finish: 'Gloss Black Powder',
    inStock: true,
    stockCount: 12,
    tier: 'Tier 1',
    aeroDragDelta: '+0.0% Cd'
  }
]
