/**
 * mock-data.js
 * Aligned with Client Reference Designs:
 * Sri Krishna Temple / శ్రీ కృష్ణ దేవాలయం (Kurnool)
 * ZERO Yellow: Clean text and neutral symbols
 */

// ── Temple Identity ────────────────────────────────────────────
export const templeInfo = {
  name: 'Sri Krishna Temple',
  nameTelugu: 'శ్రీ కృష్ణ దేవాలయం',
  tagline: 'A Sacred Sanctuary of Devotion, Culture & Community — Kurnool',
  established: '1987',
  deity: 'Lord Sri Krishna',
  deityTelugu: 'శ్రీ కృష్ణ స్వామి వారి ఆలయం',

  sacredQuote: {
    telugu: 'నా భక్తుడు నశింపడు',
    english: 'MY DEVOTEE NEVER PERISHES',
    source: 'Bhagavad Gita 9.31',
  },

  address: {
    line1: 'Near Old Bus Stand, Temple Road',
    line2: 'Kurnool',
    city: 'Kurnool',
    state: 'Andhra Pradesh',
    pincode: '518 001',
    country: 'India',
  },

  contact: {
    phone1: '+91 8518 220XXX',
    phone2: '+91 94400 XXXXX',
    email: 'contact@srikrishnatemple-kurnool.org',
    website: 'www.srikrishnatemple-kurnool.org',
  },

  social: {
    instagram: 'https://www.instagram.com/kurnool_spiritucal/',
    facebook: '#',
    youtube: '#',
    whatsapp: 'https://wa.me/919440000000',
  },
};

// ── Quick Action Cards (Reference: 02.20.48) ────────────────────
export const quickActions = [
  {
    id: 'daily-puja',
    title: 'Daily Puja Schedule',
    subtitle: 'నిత్య పూజా సమయాలు',
    icon: 'clock',
    color: 'red',
    target: '#darshan',
  },
  {
    id: 'book-seva',
    title: 'Book a Seva',
    subtitle: 'సేవా బుకింగ్',
    icon: 'lotus',
    color: 'red',
    target: 'modal-seva',
  },
  {
    id: 'festival-calendar',
    title: 'Festival Calendar',
    subtitle: 'ఉత్సవాల క్యాలెండర్',
    icon: 'calendar',
    color: 'red',
    target: '#festivals',
  },
  {
    id: 'temple-store',
    title: 'Temple Store',
    subtitle: 'ఆలయ ప్రసాదం & పుస్తకాలు',
    icon: 'store',
    color: 'green',
    target: '#store',
  },
];

// ── Day Schedule (Reference: 02.20.49) ─────────────────────────
export const daySchedule = [
  {
    time: '05:30 AM',
    title: 'Suprabhata Seva',
    telugu: 'సుప్రభాత సేవ',
    desc: 'Awakening chants, divine mangala arati and sacred suprabhatam recitation.',
    highlight: false,
  },
  {
    time: '06:00 AM',
    title: 'Nitya Abhishekam',
    telugu: 'నిత్య అభిషేకం',
    desc: 'Panchamrita snanam and sacred herbal water bath to Lord Sri Krishna.',
    highlight: false,
  },
  {
    time: '07:00 AM',
    title: 'Alankaram & Archana',
    telugu: 'అలంకారం & తులసి అర్చన',
    desc: 'Fresh flower ornamentation, tulasi garland offering, and ashtottara shatanama archana.',
    highlight: false,
  },
  {
    time: '07:30 AM',
    title: 'Sarva Darshanam',
    telugu: 'సర్వ దర్శనం ప్రారంభం',
    desc: 'Free darshan opens for all visiting devotees across the sanctum sanctorum.',
    highlight: true,
  },
  {
    time: '10:00 AM',
    title: 'Sahasranama Archana',
    telugu: 'సహస్రనామ అర్చన',
    desc: 'Chanting of Vishnu Sahasranamam with sacred bilva, tulasi and lotus offerings.',
    highlight: false,
  },
  {
    time: '12:30 PM',
    title: 'Maha Naivedyam & Annadanam',
    telugu: 'మహా నైవేద్యం & అన్నదానం',
    desc: 'Divine noon offering followed by complimentary blessed meals for all pilgrims.',
    highlight: true,
  },
  {
    time: '06:00 PM',
    title: 'Sandhya Arati & Deeparadhana',
    telugu: 'సంధ్యా ఆరతి & దీపారాధన',
    desc: 'Grand evening lamp arati accompanied by traditional mridangam and bells.',
    highlight: true,
  },
  {
    time: '08:30 PM',
    title: 'Shayanotsavam & Ekantha Seva',
    telugu: 'శయనోత్సవం & ఏకాంత సేవ',
    desc: 'Night lullaby song (Lali paata), floral swing ceremony, and sanctum closure.',
    highlight: false,
  },
];

// ── Visiting Hours (Reference: 02.20.49 1) ───────────────────────
export const visitingHours = {
  morning: '5:30 AM – 1:00 PM',
  evening: '4:30 PM – 9:00 PM',
  isOpenNow: true,
  closesAt: '8:30 PM',
  statusText: 'Open now · closes at 8:30 PM',
};

// ── Seva Offerings ─────────────────────────────────────────────
export const sevaServices = [
  {
    id: 1,
    name: 'Suprabhata & Abhishekam',
    nameTelugu: 'సుప్రభాత & పంచామృత అభిషేకం',
    description: 'Participate in the divine morning sacred bath and alankaram of Lord Sri Krishna.',
    timings: 'Daily · 6:00 AM',
    duration: '45 mins',
    suggestedDonation: '₹ 500',
  },
  {
    id: 2,
    name: 'Sahasranama Archana',
    nameTelugu: 'సహస్రనామ కుంకుమ/తులసి అర్చన',
    description: 'Special chanting of 1008 divine holy names with tulasi leaves for family welfare.',
    timings: 'Daily · 10:00 AM & 6:30 PM',
    duration: '30 mins',
    suggestedDonation: '₹ 250',
  },
  {
    id: 3,
    name: 'Nitya Annadanam Seva',
    nameTelugu: 'నిత్య అన్నదాన సేవ',
    description: 'Sponsor a full day of wholesome meals for 100+ visiting pilgrims and devotees.',
    timings: 'Daily · 12:30 PM',
    duration: 'Continuous',
    suggestedDonation: '₹ 1,500',
  },
  {
    id: 4,
    name: 'Kalyanotsavam',
    nameTelugu: 'శ్రీ కృష్ణ కళ్యాణోత్సవం',
    description: 'Grand celestial marriage ritual conducted with traditional Vedic rites.',
    timings: 'Every Ekadashi & Festival Days',
    duration: '2 hours',
    suggestedDonation: '₹ 2,100',
  },
];

// ── Upcoming Festivals (Reference: 02.20.49 1 & 2) ─────────────
export const upcomingFestivals = [
  {
    id: 1,
    dateBadge: 'OCT 11',
    month: 'OCT',
    day: '11',
    title: 'Sri Krishna Navaratri Brahmotsavam',
    telugu: 'నవరాత్రి బ్రహ్మోత్సవాలు',
    time: 'Special Alankaram & Rathotsavam · 8:00 AM – 9:30 PM',
    desc: 'Grand 9-day annual festival with special chariot procession, pushpa yagam and daily classical kirtan recitals.',
    highlight: true,
  },
  {
    id: 2,
    dateBadge: 'OCT 20',
    month: 'OCT',
    day: '20',
    title: 'Kartika Deepotsavam & Tulasi Kalyanam',
    telugu: 'కార్తీక దీపోత్సవం & తులసి కళ్యాణం',
    time: 'Evening Deeparadhana · 6:00 PM onwards',
    desc: 'Lighting of 1,008 sacred lamps in the temple courtyard with special laksha tulasi archana ceremony.',
    highlight: false,
  },
  {
    id: 3,
    dateBadge: 'NOV 01',
    month: 'NOV',
    day: '01',
    title: 'Vaikuntha Ekadashi & Uttara Dwara Darshanam',
    telugu: 'వైకుంఠ ఏకాదశి ఉత్తర ద్వార దర్శనం',
    time: 'Special Gate Opens · 4:30 AM',
    desc: 'Auspicious gateway darshan with uninterrupted darshan, special prasadam distribution and continuous chanting.',
    highlight: true,
  },
];

// ── Chitramalika Gallery (Reference: 02.20.50 3 & 02.20.52 2) ──
export const galleryCategories = [
  { id: 'all', label: 'All Photos', telugu: 'అన్నీ' },
  { id: 'sanctum', label: 'Sanctum & Deities', telugu: 'గర్భాలయం' },
  { id: 'campus', label: 'Temple Campus', telugu: 'ఆలయ ప్రాంగణం' },
  { id: 'festivals', label: 'Festivals', telugu: 'ఉత్సవాలు' },
  { id: 'annadanam', label: 'Annadanam', telugu: 'అన్నదానం' },
];

export const galleryItems = [
  {
    id: 1,
    title: 'Lord Sri Krishna in Divyabharan Alankaram',
    category: 'sanctum',
    image: '/assets/images/krishna-sanctum.jpg',
    tag: 'Moolavar Deity',
  },
  {
    id: 2,
    title: 'Sacred Sanctum Portal & Divine Form',
    category: 'sanctum',
    image: '/assets/images/krishna-hero.jpg',
    tag: 'Sanctum Arati',
  },
  {
    id: 3,
    title: 'Maha Annadanam Prasad Distribution',
    category: 'annadanam',
    image: '/assets/images/annadanam-prasad.jpg',
    tag: 'Daily Prasad',
  },
  {
    id: 4,
    title: 'Pushpa Alankaram & Sacred Rituals',
    category: 'festivals',
    image: '/assets/images/gallery-1.jpg',
    tag: 'Special Puja',
  },
  {
    id: 5,
    title: 'Temple Gopuram & Courtyard',
    category: 'campus',
    image: '/assets/images/gallery-2.jpg',
    tag: 'Gopuram',
  },
  {
    id: 6,
    title: 'Devotee Pradakshina & Morning Gathering',
    category: 'campus',
    image: '/assets/images/gallery-3.jpg',
    tag: 'Darshan Queue',
  },
  {
    id: 7,
    title: 'Festive Illumination & Deeparadhana',
    category: 'festivals',
    image: '/assets/images/gallery-4.jpg',
    tag: 'Evening Deepam',
  },
];

// ── Announcements (Ticker) ─────────────────────────────────────
export const announcements = [
  '✦ Daily Darshan: 5:30 AM – 1:00 PM & 4:30 PM – 9:00 PM',
  '✦ Sri Krishna Navaratri Brahmotsavam celebrations ongoing — all are cordially invited',
  '✦ Nitya Annadanam served daily at 12:30 PM — open to all pilgrims and devotees',
  '✦ Book special Archana and Kalyana Seva online or at the temple counter',
  '✦ Sri Krishna Temple, Kurnool, Andhra Pradesh · Serving with devotion since 1987',
];

// ── School & Cultural Heritage ─────────────────────────────────
export const schoolActivities = [
  {
    id: 1,
    name: 'Veda Pathashala & Sanskrit',
    telugu: 'వేద పాఠశాల & సంస్కృత అధ్యయనం',
    icon: '✦',
    description: 'Chanting of Vedic Suktams, Bhagavad Gita shlokas and foundational Sanskrit for children and youth.',
    schedule: 'Saturdays & Sundays · 8:00 AM – 11:00 AM',
    ageGroup: 'Ages 6–18',
  },
  {
    id: 2,
    name: 'Vaishnava Kirtan & Bhajans',
    telugu: 'సంకీర్తన & భజన శిక్షణ',
    icon: '✦',
    description: 'Learning classical Annamacharya and Tyagaraja kirtans with mridangam and harmonium accompaniment.',
    schedule: 'Sundays · 4:00 PM – 6:00 PM',
    ageGroup: 'All age groups',
  },
  {
    id: 3,
    name: 'Nitya Annadanam Trust',
    telugu: 'నిత్య అన్నదాన ట్రస్ట్',
    icon: '✦',
    description: 'Over 500 meals served daily with pure ghee, sambar, rice and sweet pongal prasadam.',
    schedule: 'Every day · 12:30 PM onwards',
    ageGroup: 'Open to everyone',
  },
  {
    id: 4,
    name: 'Dharmic Values & Cultural Workshops',
    telugu: 'ధార్మిక విలువల శిక్షణ',
    icon: '✦',
    description: 'Interactive moral education, Ramayana & Mahabharata story circles, and Indian heritage seminars.',
    schedule: 'First Sunday of each month',
    ageGroup: 'Families & Children',
  },
];

// ── Navigation Links ───────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Darshan & Seva', href: '#darshan' },
  { label: 'Day Schedule', href: '#schedule' },
  { label: 'Festivals', href: '#festivals' },
  { label: 'Chitramalika', href: '#gallery' },
  { label: 'Heritage & School', href: '#school' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

// ── Devotee Words ──────────────────────────────────────────────
export const devoteeWords = [
  {
    id: 1,
    name: 'Lakshmi Devi Garu',
    city: 'Kurnool',
    text: 'Visiting Sri Krishna Temple brings supreme tranquility. The morning Suprabhatam and Tulasi Archana fill the entire day with positive spiritual energy.',
    initials: 'LD',
  },
  {
    id: 2,
    name: 'Dr. K. Ramaiah',
    city: 'Nandyal',
    text: 'The priests chant the Vedic hymns with flawless devotion and authenticity. The Annadanam prasadam is served with utmost cleanliness and warmth.',
    initials: 'KR',
  },
  {
    id: 3,
    name: 'Srinivasa Rao & Family',
    city: 'Hyderabad',
    text: 'A truly divine temple right in the heart of Kurnool. Our children participate enthusiastically in the weekend Veda Pathashala chanting.',
    initials: 'SR',
  },
];
