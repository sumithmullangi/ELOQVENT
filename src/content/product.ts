export const brand = {
  name: 'EWB MLRIT',
  fullName: 'Engineers Without Borders MLRIT',
  mark: 'EWB',
}

export const product = {
  name: 'ELOQVENT',
  shortName: 'ELOQVENT',
  maxName: 'ELOQVENT 2K26',
  tagline: 'Tech • Talk • Triumph',
  eyebrow: 'ELOQVENT 2K26',
}



export const navLinks = [
  { label: 'Store', href: '#shop' },
  { label: 'Lumen', href: '#hero' },
  { label: 'AuraOS', href: '#software' },
  { label: 'Watch', href: '#family' },
  { label: 'Audio', href: '#accessories' },
  { label: 'Support', href: '#values' },
]

export const exploreLinks = [
  { label: 'Highlights', href: '#highlights' },
  { label: 'Event brief', href: '#upgrade' },
  { label: 'Elocution', href: '#camera' },
  { label: 'Root riddle', href: '#performance' },
  { label: 'Contact', href: '#values' },
]


export const highlights = [
  {
    id: 'camera',
    label: 'Camera',
    title: '48MP Fusion main camera with variable aperture.',
    body: 'Brighter night scenes. Sharper motion. Depth you can actually shape.',
    tone: 'garnet' as const,
  },
  {
    id: 'battery',
    label: 'Battery',
    title: 'The longest endurance in the lineup.',
    body: 'Up to 43 hours of video playback on Lumen 18 Pro Max.',
    tone: 'graphite' as const,
  },
  {
    id: 'colours',
    label: 'Colours',
    title: 'Four finishes. Two sizes. One unibody.',
    body: 'Midnight, Frost, Mist, and Garnet — each with a satin metal frame.',
    tone: 'family' as const,
  },
  {
    id: 'chip',
    label: 'N20 Pro chip',
    title: 'Vapour-cooled silicon. Dual 16-core neural core.',
    body: 'Sustained graphics and on-device intelligence without the thermal fade.',
    tone: 'chip' as const,
  },
  {
    id: 'aura',
    label: 'Aura',
    title: 'Meet Aura. Your on-device assistant.',
    body: 'More personal. More capable. Built to stay on the device first.',
    tone: 'aura' as const,
  },
]

export const upgrade = {
  kicker: 'The essential leap',
  title: 'Most wanted.',
  body: 'Lumen 18 Pro is built for people who push a phone all day. Longer playback. Faster wired charging. A vapour-cooled N20 Pro chip for heavy creative and AI work. A new 48MP Fusion main camera with variable aperture for night scenes and cinematic depth. All inside a unibody with ceramic-glass front and back.',
  stats: [
    { value: '23 hrs', label: 'more video playback on Pro Max vs two generations back' },
    { value: '80%', label: 'faster 6-core CPU vs three generations back' },
    { value: '4×', label: 'faster 7-core GPU vs three generations back' },
  ],
}

export const switchOver = {
  kicker: 'Coming from Android',
  title: 'Move without starting over.',
  body: 'Keep your photos, chats, and accounts. The setup walkthrough maps your old phone to Lumen in a single sitting — then you get the battery, camera, and chip this page is actually about.',
  stats: [
    { value: '43 hrs', label: 'video playback on Lumen 18 Pro Max' },
    { value: 'Variable', label: 'aperture for night stills and video' },
    { value: 'N20 Pro', label: 'vapour-cooled chip for peak loads' },
  ],
}

export const design = {
  kicker: 'Design',
  title: 'Our finest unibody of work.',
  chips: [
    { id: 'colours', label: 'Colours', detail: 'Midnight, Frost, Mist, Garnet.' },
    { id: 'sizes', label: 'Two sizes', detail: '6.3″ Pro and 6.9″ Pro Max.' },
    { id: 'camera', label: 'New main camera', detail: 'Variable aperture, 48MP Fusion.' },
    { id: 'frame', label: 'Aluminium unibody', detail: 'One structure. Fewer seams.' },
  ],
}

export const colors = [
  { id: 'midnight', name: 'Midnight', hex: '#1c1c1e', metal: '#3a3a3c' },
  { id: 'frost', name: 'Frost', hex: '#d8d4cc', metal: '#ece8e1' },
  { id: 'mist', name: 'Mist', hex: '#8aa4c4', metal: '#b7c9dc' },
  { id: 'garnet', name: 'Garnet', hex: '#5c2a32', metal: '#7a3b44' },
]

export const camera = {
  kicker: 'Pro camera system',
  title: 'Eye-opening control.',
  body: 'A three-camera 48MP array with a variable-aperture main lens, optical-quality reach, and tools that stay useful after you tap the shutter.',
  specs: [
    {
      name: 'Fusion Main',
      detail: '48MP · 24/48 mm · ƒ/1.48–ƒ/4.0 · 2.44 µm quad-pixel',
    },
    {
      name: 'Fusion Ultra Wide',
      detail: '48MP · 13 mm · ƒ/2.2 · macro · 1.4 µm quad-pixel',
    },
    {
      name: 'Fusion Telephoto',
      detail: '48MP · 100/200 mm · ƒ/2.8 · 4x/8x optical-quality',
    },
  ],
}

export const apertures = [
  {
    value: 'ƒ/1.48',
    title: 'Maximum light.',
    body: 'About 50% better low-light gathering — indoor scenes, night streets, faster Night mode.',
  },
  {
    value: 'ƒ/1.8',
    title: 'Default.',
    body: 'The everyday balance between glow and depth.',
  },
  {
    value: 'ƒ/2.8',
    title: 'More depth.',
    body: 'Keep the subject sharp while the room behind it stays readable.',
  },
  {
    value: 'ƒ/4.0',
    title: 'Maximum depth.',
    body: 'Manual starbursts, layered interiors, and scenes that need the whole frame.',
  },
]

export const controlCards = [
  {
    title: 'Pro controls.',
    body: 'Pin aperture, shutter, white balance, and histogram to the top of Camera for one-thumb access.',
  },
  {
    title: 'Photographic styles.',
    body: 'Tune tone, colour, texture, and grain. Soften skin or push a film look — then reverse it later.',
  },
  {
    title: 'Intelligent editing.',
    body: 'Reframe after capture, extend a tight crop, and remove larger distractions with on-device fill.',
  },
  {
    title: 'Smart focus tracking.',
    body: 'Lock a subject in stills or video. Tracking holds even if they leave and re-enter the frame.',
  },
  {
    title: '8x optical-quality zoom.',
    body: 'A 16x total optical zoom range for reach without the mush of digital crop.',
  },
  {
    title: '48MP Ultra Wide.',
    body: 'Landscapes and macro in the same sensor family as the main camera.',
  },
  {
    title: 'Center Stage front camera.',
    body: 'Rotate from portrait to landscape without flipping the phone. Group shots stay framed.',
  },
  {
    title: 'Signed originals.',
    body: 'Pixel-level capture signing so you can prove a frame came from this sensor, unaltered.',
  },
]

export const video = {
  kicker: 'Pro video',
  title: 'Make it cinematic. After the fact.',
  body: 'Add cinematic depth to regular clips later. 60 fps keeps slow motion smooth. Audio Mix isolates a performance from the room.',
  cards: [
    {
      title: 'Better low-light video.',
      body: 'Aperture and frame rate adapt together so night footage stays bright without turning to mush.',
    },
    {
      title: '4K time-lapse.',
      body: 'Record longer stories in 4K with HDR colour that still grades cleanly.',
    },
    {
      title: 'Audio Mix for music.',
      body: 'Separate voice and instruments from street noise after you shoot.',
    },
    {
      title: 'Creator tools.',
      body: 'ProRes RAW, Log 2, genlock, and 4K 120 fps HDR for multi-cam days.',
    },
    {
      title: 'Dual Capture.',
      body: 'Front and rear at once — reaction and scene, same take.',
    },
  ],
}

export const battery = {
  kicker: 'Battery life',
  title: 'Greatest of hour time.',
  lead: 'Up to 29 hours of mixed use on Lumen 18 Pro Max.',
  body: 'Pro Max jumps to 43 hours of video playback — six more than last year’s Max. More capacity plus a cooler, more efficient chip means streaming, gaming, and maps last through the long days.',
  charge: {
    title: 'There’s a new Pro in charge.',
    body: 'Reach about 50% in around 15 minutes on a compatible adapter. Five minutes can add up to 7 hours of video on Pro Max — useful before a flight.',
    stat: '50%',
    statLabel: 'charge in around 15 minutes',
  },
}

export const performance = {
  kicker: 'Performance',
  title: 'Welcome to the mother chip.',
  body: 'N20 Pro is the most powerful and efficient chip in a Lumen. Packaging borrowed from our studio computers sits beside a next-generation vapour chamber for graphics that stay up to 40% faster than last year’s Pro under load — plus a dual 16-core neural engine with twice the on-device compute.',
  points: [
    {
      title: 'Exceptional on-device AI',
      body: 'Neural accelerators, a dual 16-core engine, and 50% more memory bandwidth for assistant, camera, and editing features.',
    },
    {
      title: 'Side-by-side packaging',
      body: 'Silicon and memory sit adjacent so heat has somewhere to go — the reason sustained clocks hold.',
    },
    {
      title: 'Next-generation C2 modem',
      body: 'Smarter cellular reliability and up to 50% faster uploads in supported markets, using less battery.',
    },
  ],
}

export const cooling = {
  kicker: 'Thermal system',
  title: 'Bigger vapour chamber. Let the heat drop.',
  body: 'Three times the surface area, more conductive materials, and the N20 Pro package together deliver up to 40% better sustained performance than last year’s Pro. High-frame games and larger on-device models last longer before they throttle.',
}

export const comparisonRows = [
  { label: 'Fusion main + variable aperture', from17: true, from16: true, from15: true },
  { label: 'Up to 80% faster 6-core CPU', from17: false, from16: true, from15: true },
  { label: 'Hours more video on Pro Max', from17: '6 hrs', from16: '14 hrs', from15: '23 hrs' },
  { label: '≈50% charge in ~15 minutes', from17: true, from16: true, from15: true },
  { label: '18MP Center Stage front camera', from17: true, from16: true, from15: true },
  { label: 'Aura with systemwide dictation', from17: true, from16: true, from15: true },
]

export const family = {
  kicker: 'All in the family',
  title: 'All the must-haves. All on Lumen.',
  body: 'Every current Lumen includes Aura, on-device writing and photo tools, child-safety controls, Wi‑Fi 7, Bluetooth 6, and eSIM.',
}

export const assistant = {
  kicker: 'Aura',
  title: 'Meet Aura. More personal. More powerful.',
  note: 'Aura is rolling out in English first.',
  cards: [
    {
      title: 'Just ask.',
      body: 'Open-ended questions, brainstorming on the move, and back-and-forth that stays in context.',
    },
    {
      title: 'Personal context.',
      body: 'Find a photo from years ago, a buried mail thread, or a note you swore you saved.',
    },
    {
      title: 'App actions.',
      body: 'Edit a message you just sent or add the song in the car to tonight’s playlist.',
    },
    {
      title: 'World knowledge.',
      body: 'Facts, recipes, travel plans — with live references when the answer lives online.',
    },
    {
      title: 'Aura app.',
      body: 'One thread across Lumen and tablet. Pin conversations. Pick up later.',
    },
    {
      title: 'Camera mode.',
      body: 'Ask about what the lens sees and act on it without leaving Camera.',
    },
    {
      title: 'Customise Aura.',
      body: 'Voice, pace, and expressivity until it sounds like someone you’d actually ask.',
    },
    {
      title: 'Write with Aura.',
      body: 'Drafts from a sentence, notes on your draft, and tone matching in Mail and Messages.',
    },
  ],
}

export const softwareCards = [
  {
    title: 'Call Context',
    body: 'Surface a confirmation code from Mail when you call the airline — without hunting.',
  },
  {
    title: 'Child safety',
    body: 'Expanded controls that help guardians keep younger users safer online.',
  },
  {
    title: 'Clean Up',
    body: 'Remove larger objects with higher-quality fill that respects the background.',
  },
  {
    title: 'Image Playground',
    body: 'Generate and reshape images from a description or a finger on the canvas.',
  },
  {
    title: 'Suggestions',
    body: 'Messages and Mail offer the next action — a calendar block, a photo search — in one tap.',
  },
  {
    title: 'Safari tabs',
    body: 'Group related pages, watch a price, and build small automations for sites you live in.',
  },
  {
    title: 'Shortcuts',
    body: 'Describe a daily task; get an automation that actually spans your apps.',
  },
]

export const connectivity = [
  {
    title: 'eSIM',
    body: 'Travel without a plastic card. Dual plans, faster swaps, fewer things to lose.',
  },
  {
    title: 'Crash Detection',
    body: 'If sensors read a severe collision and you can’t respond, Lumen can call for help.',
  },
  {
    title: 'Find',
    body: 'Locate the phone, shared items, and people you choose — including when a device is offline.',
  },
]

export const accessories = {
  kicker: 'Accessories',
  title: 'Addition by attraction.',
  body: 'Snap on magnetic cases and wallets. Go hands-free with the Wrist Strap or Crossbody Strap in new colours.',
}

export const shopping = [
  {
    id: 'trade',
    title: 'Trade In',
    subtitle: 'Credit toward a new Lumen when you send in an eligible phone.',
    modalTitle: 'Instant credit, on your terms.',
    modalBody:
      'Get an estimate in minutes. Complete the exchange at your door when the new device arrives, or finish it in a studio when you pick up.',
  },
  {
    id: 'pay',
    title: 'Ways to Buy',
    subtitle: 'Monthly options with leading banks, plus GST invoicing for business.',
    modalTitle: 'Payments made even.',
    modalBody:
      'Pay outright or spread it out. Eligible purchases can use no-cost EMI for up to six months from participating banks.',
  },
  {
    id: 'setup',
    title: 'Personal Setup',
    subtitle: 'One-to-one sessions to move your life onto the new phone.',
    modalTitle: 'Guided, not rushed.',
    modalBody:
      'Specialists walk through data transfer, camera, and Aura whenever you have an hour — from wherever you are.',
  },
  {
    id: 'delivery',
    title: 'Delivery & Pickup',
    subtitle: 'Free delivery or same-day pickup at a nearby studio.',
    modalTitle: 'Flexible by design.',
    modalBody:
      'Order online and collect locally, or have it arrive at your door. You’ll see live inventory before you commit.',
  },
  {
    id: 'guided',
    title: 'Guided Shopping',
    subtitle: 'Shop live with a specialist, in studio or on a video call.',
    modalTitle: 'Find the right configuration.',
    modalBody:
      'Compare sizes, colours, and storage with someone who can actually answer the weird questions.',
  },
  {
    id: 'app',
    title: 'Auralis Store app',
    subtitle: 'Saves, order tracking, and product news in one place.',
    modalTitle: 'A store that remembers you.',
    modalBody:
      'Recommendations, comparisons, and pickup notifications — opt in only for the updates you want.',
  },
]

export const values = [
  {
    title: 'A plan as serious as the product.',
    body: 'We’re working toward net-zero operations across the footprint this decade.',
    hrefLabel: 'Read the environment report',
  },
  {
    title: 'Privacy, on purpose.',
    body: 'Assistant, photos, and health data are designed to stay under your control.',
    hrefLabel: 'How privacy works',
  },
  {
    title: 'Accessible by default.',
    body: 'Vision, hearing, motor, and cognitive tools are built in — not bolted on.',
    hrefLabel: 'Explore accessibility',
  },
]

export const footnotes = [
  'Battery life varies by use, settings, signal, and many other factors. The battery has limited charge cycles.',
  'Playback and mixed-use figures are based on internal lab profiles using pre-production hardware and default settings unless noted.',
  'Aura and on-device intelligence features require a supported language. Some capabilities roll out in English first and may have daily usage limits.',
  'Fast-charge claims require a compatible high-wattage adapter and cable. Actual charge time varies with temperature and prior state of charge.',
  'Display sizes are measured as standard rectangles; actual viewable area is less due to rounded corners.',
  'Wireless features such as Wi‑Fi 7, 5G, and eSIM depend on carrier and regional support.',
]

export const footerGroups = [
  {
    title: 'Shop and learn',
    links: ['Store', 'Lumen', 'Tablet', 'Watch', 'Audio', 'Accessories'],
  },
  {
    title: 'Services',
    links: ['Aura+', 'Cloud', 'Fitness', 'TV', 'Pay', 'Arcade'],
  },
  {
    title: 'Account',
    links: ['Manage ID', 'Auralis Store account', 'Cloud+', 'Downloads'],
  },
  {
    title: 'Auralis Store',
    links: ['Find a studio', 'Today at Auralis', 'Order status', 'Financing'],
  },
  {
    title: 'For business',
    links: ['Auralis and business', 'Shop for business'],
  },
  {
    title: 'About Auralis',
    links: ['Newsroom', 'Leadership', 'Career opportunities', 'Ethics', 'Contact'],
  },
]
