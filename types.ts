export interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: Page;
}

export enum PitchTone {
  CASUAL = 'Casual & Vlot',
  PROFESSIONAL = 'Zakelijk & Serieus',
  URGENT = 'Direct & Urgent',
}

export enum Page {
  HOME = 'home',
  SERVICES = 'services',
  CASES = 'cases',
  ABOUT = 'about',
  TOOLS = 'tools',
  CONTACT = 'contact'
}