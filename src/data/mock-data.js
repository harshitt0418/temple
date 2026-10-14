/**
 * mock-data.js
 * Real temple identity populated from Instagram @kurnool_spiritucal
 * (Sri Krishna temple, Kurnool, Andhra Pradesh)
 */

// ── Temple Identity ────────────────────────────────────────────
export const templeInfo = {
  name: 'Shri Krishna Mandir',
  nameDevanagari: 'శ్రీ కృష్ణ మందిర్',
  tagline: 'A Sacred Sanctuary of Devotion, Culture & Community — Kurnool',
  established: '1987',
  deity: 'Lord Sri Krishna',
  deityDevanagari: 'శ్రీ కృష్ణ భగవాన్',

  address: {
    line1: '[Street Address, Locality]',
    line2: 'Kurnool',
    city: 'Kurnool',
    state: 'Andhra Pradesh',
    pincode: '518 001',
    country: 'India',
  },

  contact: {
    phone1: '[+91-XXXXX-XXXXX]',
    phone2: '[+91-XXXXX-XXXXX]',
    email: '[info@shrikrishnamandir-kurnool.org]',
    website: '[www.shrikrishnamandir-kurnool.org]',
  },

  social: {
    instagram: 'https://www.instagram.com/kurnool_spiritucal/',
    facebook: '#',
    youtube: '#',
    whatsapp: '#',
  },
};

// ── Darshan Timings ────────────────────────────────────────────
export const darshanTimings = [
  {
    id: 1,
    session: 'Morning Darshan',
    sessionHindi: 'ప్రాతః దర్శన్',
    time: '6:00 AM – 12:00 PM',
    icon: '✦',
  },
  {
    id: 2,
    session: 'Afternoon Bhog',
    sessionHindi: 'మధ్యాహ్న భోగ్',
    time: '12:00 PM – 4:00 PM',
    icon: '✦',
    note: 'Sanctum closed for Bhog offering',
  },
  {
    id: 3,
    session: 'Evening Darshan',
    sessionHindi: 'సాయం దర్శన్',
    time: '4:00 PM – 8:30 PM',
    icon: '✦',
  },
  {
    id: 4,
    session: 'Aarti & Closing',
    sessionHindi: 'ఆరతి',
    time: '8:00 PM – 8:30 PM',
    icon: '✦',
  },
];

// ── Pooja & Seva Services ──────────────────────────────────────
export const sevaServices = [
  {
    id: 1,
    name: 'Abhishek Pooja',
    nameHindi: 'అభిషేక పూజ',
    description: 'Sacred ritual bathing of Lord Krishna with panchamrit and holy substances.',
    timings: 'Daily · 7:00 AM',
    duration: '45 minutes',
  },
  {
    id: 2,
    name: 'Satyanarayan Katha',
    nameHindi: 'సత్యనారాయణ కథ',
    description: "Devotional reading and narration of Lord Vishnu's glory.",
    timings: 'Sundays & Festival days',
    duration: '2.5 hours',
  },
  {
    id: 3,
    name: 'Navagraha Homa',
    nameHindi: 'నవగ్రహ హోమ',
    description: 'Sacred fire ritual to appease the nine celestial bodies.',
    timings: 'By prior booking',
    duration: '3 hours',
  },
  {
    id: 4,
    name: 'Annadanam Seva',
    nameHindi: 'అన్నదాన సేవ',
    description: 'Sponsor a community meal in the divine name of Lord Krishna.',
    timings: 'Daily · 12:30 PM',
    duration: 'Ongoing',
  },
];

// ── Upcoming Festivals ─────────────────────────────────────────
export const upcomingFestivals = [
  {
    id: 1,
    name: 'Sri Krishna Janmashtami',
    nameTelugu: 'శ్రీ కృష్ణ జన్మాష్టమి',
    date: 'August 2027',
    day: 'Ashtami — Krishna Paksha',
    description: 'Grand celebration of Lord Krishna\'s birth. Special midnight pooja, devotional music, prasad distribution, and cultural programmes for all.',
    highlight: true,
  },
  {
    id: 2,
    name: 'Govardhan Pooja',
    nameTelugu: 'గోవర్ధన పూజ',
    date: 'November 2026',
    day: 'Pratipada — Kartik Shukla',
    description: 'Community celebration with anna koot offering and cultural programme.',
    highlight: false,
  },
  {
    id: 3,
    name: 'Monthly Satyanarayan Katha',
    nameTelugu: 'మాసిక సత్యనారాయణ కథ',
    date: 'Every Full Moon',
    day: 'Purnima',
    description: 'Open to all devotees. Prasad provided. Conducted by temple priests.',
    highlight: false,
  },
  {
    id: 4,
    name: 'Radha Ashtami',
    nameTelugu: 'రాధా అష్టమి',
    date: 'September 2027',
    day: 'Ashtami — Bhadrapad Shukla',
    description: 'Celebration of Radharani\'s appearance. Special shringar and bhajan sandhya.',
    highlight: false,
  },
];

// ── Announcements (Ticker) ─────────────────────────────────────
export const announcements = [
  '✦ Special Janmashtami darshan extended till midnight — all devotees welcome',
  '✦ Monthly Satyanarayan Katha every Purnima — 10:00 AM onwards',
  '✦ Vedic School admissions open — Saturdays & Sundays · Ages 6–16',
  '✦ Darshan Timings: Morning 6 AM – 12 PM  |  Evening 4 PM – 8:30 PM',
  '✦ Seva bookings: Call [+91-XXXXX-XXXXX]  |  Hari Bol!',
  '✦ Sri Krishna Mandir, Kurnool — Serving the community since 1987',
];

// ── School / Education ─────────────────────────────────────────
export const schoolActivities = [
  {
    id: 1,
    name: 'Vedic Studies & Sanskrit',
    icon: '✦',
    description: 'Introduction to Sanskrit shlokas, Gita chanting, and Dharmic values for children.',
    schedule: 'Saturdays · 9:00 AM – 12:00 PM',
    ageGroup: 'Ages 6–16',
  },
  {
    id: 2,
    name: 'Bhajan & Kirtan',
    icon: '✦',
    description: 'Devotional singing classes — learn traditional Vaishnav kirtans and bhajans.',
    schedule: 'Sundays · 9:00 AM – 11:00 AM',
    ageGroup: 'All ages',
  },
  {
    id: 3,
    name: 'Yoga & Pranayama',
    icon: '✦',
    description: 'Traditional Hatha Yoga and breathing techniques. All levels welcome.',
    schedule: 'Mon, Wed, Fri · 6:30 AM – 7:30 AM',
    ageGroup: 'Adults',
  },
  {
    id: 4,
    name: 'Annadanam — Free Meals',
    icon: '✦',
    description: 'Free prasad meals for all on festival days and Ekadashi. Volunteer and donate.',
    schedule: 'Festival Days & Ekadashi',
    ageGroup: 'Open to all',
  },
];

// ── Gallery (placeholder frames) ──────────────────────────────
export const galleryItems = [
  { id: 1, label: 'Temple Exterior', type: 'image', aspect: 'landscape' },
  { id: 2, label: 'Sri Krishna Deity', type: 'image', aspect: 'portrait' },
  { id: 3, label: 'Janmashtami Celebration', type: 'image', aspect: 'landscape' },
  { id: 4, label: 'Evening Aarti', type: 'image', aspect: 'portrait' },
  { id: 5, label: 'Vedic School', type: 'image', aspect: 'landscape' },
  { id: 6, label: 'Community Gathering', type: 'image', aspect: 'landscape' },
];

// ── Navigation Links ───────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Darshan & Seva', href: '#darshan' },
  { label: 'Festivals', href: '#festivals' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'School', href: '#school' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
];

// ── Testimonials / Devotee Words ───────────────────────────────
export const devoteeWords = [
  {
    id: 1,
    name: 'Lakshmi Devi',
    city: 'Kurnool',
    text: 'This mandir has been a spiritual home for our family for over two decades. The peace one feels here is beyond words — it is truly a place of divine grace.',
    initials: 'LD',
  },
  {
    id: 2,
    name: 'Ramaiah Garu',
    city: 'Kurnool',
    text: 'The Janmashtami celebrations here are the most authentic and moving I have attended. The priests are deeply knowledgeable and the atmosphere is always serene.',
    initials: 'RG',
  },
  {
    id: 3,
    name: 'Sunita & Family',
    city: 'Hyderabad',
    text: 'We make it a point to visit whenever we are in Kurnool. Our children have learned so much from the Vedic school here. A true community treasure.',
    initials: 'SF',
  },
];
