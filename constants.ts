import { NavItem, Review, TeamMember, Page } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Tools', href: Page.SERVICES },
  { label: 'Cases', href: Page.CASES },
  { label: 'Over ons', href: Page.ABOUT },
  { label: 'Gratis Tools', href: Page.TOOLS },
  { label: 'Contact', href: Page.CONTACT },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Nick van den Bedem',
    role: 'Marketing Manager',
    company: 'TechCorp',
    rating: 5,
    content: "De samenwerking met Werftools was top! Dankzij de recruitmentcampagnes via Meta zagen we een flinke verbetering in het aantal sollicitaties. Al snel na de start ontvingen we veel sollicitaties en...",
    image: 'https://picsum.photos/seed/nick/100/100'
  },
  {
    id: 2,
    name: 'Sarah de Vries',
    role: 'HR Director',
    company: 'BouwGroep',
    rating: 5,
    content: "Werftools begrijpt onze doelgroep als geen ander. Ze hebben onze employer branding volledig naar een hoger niveau getild. Zeer aan te bevelen!",
    image: 'https://picsum.photos/seed/sarah/100/100'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 10,
    name: 'Remco',
    role: 'Founder & Recruitment Probleemoplosser',
    image: 'https://werfplaats.nl/wp-content/uploads/2023/08/RAW_711-scaled.jpg'
  },
  {
    id: 11,
    name: 'Barry',
    role: 'Founder & Ideeën-naar-Software Vertaler',
    image: 'https://xquintpfpzdsxupnhypj.supabase.co/storage/v1/object/public/public/uploads/barry.png'
  },
  {
    id: 12,
    name: 'Tatiana',
    role: 'Hoofd Regels & Compliance',
    image: 'https://xquintpfpzdsxupnhypj.supabase.co/storage/v1/object/public/public/uploads/Tatiana.png'
  },
  {
    id: 8,
    name: 'Remon',
    role: 'Recruitment & support Held',
    image: 'https://werfplaats.nl/wp-content/uploads/2023/08/RAW_7049-scaled-e1711024927794.jpg'
  },
  {
    id: 7,
    name: 'Joey',
    role: 'Chef Support & Probleemoplosser',
    image: 'https://werfplaats.nl/wp-content/uploads/2023/08/RAW_7022-kopie-scaled-e1711025387614.jpg'
  },
  {
    id: 6,
    name: 'Kim',
    role: 'Marketing Brein',
    image: 'https://werfplaats.nl/wp-content/uploads/2023/11/Kim-Leewens-WP-Foto.jpg'
  },
  {
    id: 5,
    name: 'Sandy',
    role: 'Recruitment & support Held',
    image: 'https://werfplaats.nl/wp-content/uploads/2025/01/Sandhya-Autar-Werfplaats.png'
  },
  {
    id: 4,
    name: 'Stan',
    role: 'Recruitment Support Held',
    image: 'https://werfplaats.nl/wp-content/uploads/2025/05/Stan-van-Dam-7.png'
  },
  {
    id: 3,
    name: 'Marte',
    role: 'Recruitment Support Held',
    image: 'https://werfplaats.nl/wp-content/uploads/2025/05/Marte-Koelstra-4.png'
  },
  {
    id: 1,
    name: 'Fenne',
    role: 'Recruitment Support Held',
    image: 'https://werfplaats.nl/wp-content/uploads/2025/10/Fenne-van-Schaffelaar.png'
  },
  {
    id: 2,
    name: 'Thom',
    role: 'Recruitment & support Held',
    image: 'https://werfplaats.nl/wp-content/uploads/2025/10/Fenne-van-Schaffelaar.png'
  }
];

export const CLIENT_LOGOS = [
  'Google', 'Bol.com', 'Coolblue', 'KPN', 'Philips', 'Shell', 'Unilever', 'Heineken'
];