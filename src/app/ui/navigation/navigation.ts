export interface Navigation {
  label: string;
  path?: string;
  icon?: string;
}

export const navigationItems: Navigation[] = [
  {
    label: 'About',
    path: 'about',
    icon: 'person',
  },
  {
    label: 'Resume',
    path: 'resume',
    icon: 'file',
  },
  {
    label: 'Tools',
    path: 'tools',
    icon: 'tools',
  },
  {
    label: 'Portfolio',
    path: 'portfolio',
    icon: 'portfolio',
  },
  {
    label: 'Contact',
    path: 'contact',
    icon: 'mail-forward',
  }
];
