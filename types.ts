
export interface ExperienceLink {
  label: string;
  url: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
  skills?: string[];
  links?: ExperienceLink[];
}

export interface CaseCompItem {
  title: string;
  description: string;
  image: string;
  deckUrl: string;
}

export interface ProjectItem {
  title: string;
  description: string[];
  image: string;
  link?: string;
  linkTitle?: string;
  tags?: string[];
}

export interface PORItem {
  organization: string;
  position?: string;
  description: string[];
  link?: string;
  image?: string;
}
