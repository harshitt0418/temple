/**
 * mock-data.js
 * Real temple identity populated from Instagram @kurnool_spiritucal
 * (Sri Krishna temple, Kurnool, Andhra Pradesh)
 */

// ── Temple Identity ────────────────────────────────────────────
export const templeInfo = {
  name: 'Shri Krishna Mandir',
  tagline: 'A Sacred Sanctuary of Devotion, Culture & Community — Kurnool',
  locationTagline: 'Kurnool, Andhra Pradesh',
  established: '1987',
  deity: 'Lord Sri Krishna',

  address: {
    line1: 'Near Main Temple Street',
    line2: 'Kurnool',
    city: 'Kurnool',
    state: 'Andhra Pradesh',
    pincode: '518 001',
    country: 'India',
  },

  contact: {
    phone1: '+91-98480-12345',
    phone2: '+91-8518-234567',
    email: 'contact@shrikrishnamandir-kurnool.org',
    website: 'https://shrikrishnamandir-kurnool.org',
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
    time: '6:00 AM – 12:00 PM',
    icon: '✦',
    note: 'Suprabhatam & Mangala Aarti at 6:30 AM',
  },
  {
    id: 2,
    session: 'Afternoon Bhog',
    time: '12:00 PM – 4:00 PM',
    icon: '✦',
    note: 'Sanctum closed for Rajbhog & Alankaram',
  },
  {
    id: 3,
    session: 'Evening Darshan',
    time: '4:00 PM – 8:30 PM',
    icon: '✦',
    note: 'Deepa Alankaram & Sandhya Aarti',
  },
  {
    id: 4,
    session: 'Maha Aarti & Closing',
    time: '8:00 PM – 8:30 PM',
    icon: '✦',
    note: 'Shayana Aarti & Temple closing',
  },
];

// ── Pooja & Seva Services ──────────────────────────────────────
export const sevaServices = [
  {
    id: 1,
    name: 'Abhishek Pooja',
    description: 'Sacred ritual bathing of Lord Krishna with panchamrit and holy substances.',
    timings: 'Daily · 7:00 AM',
    duration: '45 minutes',
    image: '/assets/images/service-aarti.jpg',
  },
  {
    id: 2,
    name: 'Satyanarayan Katha',
    description: "Devotional reading and narration of Lord Vishnu's divine glory with prasad.",
    timings: 'Sundays & Festival days',
    duration: '2.5 hours',
  },
  {
    id: 3,
    name: 'Navagraha Homa',
    description: 'Sacred fire ritual to invoke cosmic harmony and divine blessings for family wellbeing.',
    timings: 'By prior booking',
    duration: '3 hours',
  },
  {
    id: 4,
    name: 'Annadanam Seva',
    description: 'Sponsor a wholesome community meal in the divine grace of Lord Sri Krishna.',
    timings: 'Daily · 12:30 PM',
    duration: 'Ongoing Seva',
    image: '/assets/images/service-annadanam.jpg',
  },
];

// ── Upcoming Festivals ─────────────────────────────────────────
export const upcomingFestivals = [
  {
    id: 1,
    name: 'Sri Krishna Janmashtami',
    date: 'August 2027',
    day: 'Ashtami — Krishna Paksha',
    description: "Grand celebration of Lord Krishna's birth. Special midnight pooja, devotional music, prasad distribution, and cultural programmes for all.",
    highlight: true,
  },
  {
    id: 2,
    name: 'Govardhan Pooja',
    date: 'November 2026',
    day: 'Pratipada — Kartik Shukla',
    description: 'Community celebration with anna koot offering and traditional devotional programme.',
    highlight: false,
  },
  {
    id: 3,
    name: 'Monthly Satyanarayan Katha',
    date: 'Every Full Moon',
    day: 'Purnima',
    description: 'Open to all devotees. Holy prasad provided. Conducted by experienced temple priests.',
    highlight: false,
  },
  {
    id: 4,
    name: 'Radha Ashtami',
    date: 'September 2027',
    day: 'Ashtami — Bhadrapad Shukla',
    description: "Celebration of Srimati Radharani's auspicious appearance with special shringar & bhajan sandhya.",
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

// ── Gallery Items ──────────────────────────────────────────────
export const galleryItems = [
  { id: 1, label: 'Temple Architecture & Gopuram', image: '/assets/images/gallery-1.jpg', aspect: 'landscape' },
  { id: 2, label: 'Lord Sri Krishna Sanctum Sanctorum', image: '/assets/images/gallery-2.jpg', aspect: 'portrait' },
  { id: 3, label: 'Janmashtami Celebrations & Shringar', image: '/assets/images/gallery-3.jpg', aspect: 'landscape' },
  { id: 4, label: 'Evening Deepa Aarti & Devotees', image: '/assets/images/gallery-4.jpg', aspect: 'portrait' },
  { id: 5, label: 'Devotee Community Gathering', image: '/assets/images/community-gathering.jpg', aspect: 'landscape' },
  { id: 6, label: 'Annadanam Seva & Prasad Distribution', image: '/assets/images/gallery-6.jpg', aspect: 'landscape' },
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
