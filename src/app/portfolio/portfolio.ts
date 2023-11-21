export interface Projects {
  title: string;
  description: string;
  linkGit: string;
  linkLive: string;
  colorPhotoLink: string;
  blackAndWhitePhotoLink: string;
  stack: Technology[];
}

export interface Technology {
  title: string;
  iconUrl: string;
}

export const Projects: Projects[] = [
  {
    title: 'Global Flow Material',
    description: 'A complex web CMS platform streamlining the process of creating and approving advertising content among international branches',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black2.png',
    stack: [
      {
        title: 'TypeScript',
        iconUrl: 'typescript'
      },
      {
        title: 'Material',
        iconUrl: 'material'
      },
      {
        title: 'CSS',
        iconUrl: 'css'
      },
      {
        title: 'HTML',
        iconUrl: 'html'
      }
    ]
  },
  {
    title: 'Global Flow Prime',
    description: 'It sounds like you want to use a transparent background',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black2.jpeg',
    stack: [
      {
        title: 'TypeScript',
        iconUrl: 'typescript'
      },
      {
        title: 'Material',
        iconUrl: 'material'
      },
      {
        title: 'CSS',
        iconUrl: 'css'
      },
      {
        title: 'HTML',
        iconUrl: 'html'
      }
    ]
  },
  {
    title: 'Space Booker',
    description: 'It sounds like you want to use a transparent background',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black.jpg',
    stack: [
      {
        title: 'TypeScript',
        iconUrl: 'typescript'
      },
      {
        title: 'Material',
        iconUrl: 'material'
      },
      {
        title: 'CSS',
        iconUrl: 'css'
      },
      {
        title: 'HTML',
        iconUrl: 'html'
      }
    ]
  },
  {
    title: 'Space Booker',
    description: 'It sounds like you want to use a transparent background',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black.jpg',
    stack: [
      {
        title: 'TypeScript',
        iconUrl: 'typescript'
      },
      {
        title: 'Material',
        iconUrl: 'material'
      },
      {
        title: 'CSS',
        iconUrl: 'css'
      },
      {
        title: 'HTML',
        iconUrl: 'html'
      }
    ]
  },
  {
    title: 'Space Booker',
    description: 'It sounds like you want to use a transparent background',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black.jpg',
    stack: [
      {
        title: 'TypeScript',
        iconUrl: 'typescript'
      },
      {
        title: 'Material',
        iconUrl: 'material'
      },
      {
        title: 'CSS',
        iconUrl: 'css'
      },
      {
        title: 'HTML',
        iconUrl: 'html'
      }
    ]
  },
  {
    title: 'Space Booker',
    description: 'It sounds like you want to use a transparent background',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black.jpg',
    stack: [
      {
        title: 'TypeScript',
        iconUrl: 'typescript'
      },
      {
        title: 'Material',
        iconUrl: 'material'
      },
      {
        title: 'CSS',
        iconUrl: 'css'
      },
      {
        title: 'HTML',
        iconUrl: 'html'
      }
    ]
  }
]

export enum ProjectFilters {
  ALL = 'ALL',
  MATERIAL = 'MATERIAL',
  PRIME_NG = 'PRIME_NG'
}

export interface ProjectFiltersItem {
  label: string;
  value: ProjectFilters;
}

export const PROJECT_FILTERS: ProjectFiltersItem[] = [
  {
    label: 'ALL',
    value: ProjectFilters.ALL
  },
  {
    label: 'MATERIAL',
    value: ProjectFilters.MATERIAL
  },
  {
    label: 'PRIME NG',
    value: ProjectFilters.PRIME_NG
  }
]
