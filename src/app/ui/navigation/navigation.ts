export interface Navigation {
  label: string;
  path?: string;
  icon?: string;
}

export const navigationItems: Navigation[] = [
  {
    label: 'About',
    path: 'home/about',
    icon: 'person',
  },
  {
    label: 'Resume',
    path: 'home/resume',
    icon: 'file',
  },
  {
    label: 'Tools',
    path: 'home/tools',
    icon: 'tools',
  },
  {
    label: 'Portfolio',
    path: 'home/portfolio',
    icon: 'portfolio',
  },
  {
    label: 'Contact',
    path: 'home/contact',
    icon: 'mail-forward',
  }
];
