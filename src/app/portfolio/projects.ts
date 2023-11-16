export interface Projects {
  title: string;
  description: string;
  linkGit: string;
  linkLive: string;
  colorPhotoLink: string;
  blackAndWhitePhotoLink: string;
  stack: Technology[]
}

export interface Technology {
  title: string;
  icon: string;
}

export const Projects: Projects[] = [
  {
    title: 'Global Flow',
    description: 'A complex web CMS platform streamlining the process of creating and approving advertising content among international branches',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black2.png',
    stack: [
      {
        title: 'TypeScript',
        icon: 'typescript'
      },
      {
        title: 'Material',
        icon: 'material'
      },
      {
        title: 'CSS',
        icon: 'css'
      },
      {
        title: 'HTML',
        icon: 'html'
      }
    ]
  },
  {
    title: 'Global Flow',
    description: 'It sounds like you want to use a transparent background',
    linkGit: '',
    linkLive: '',
    colorPhotoLink: 'assets/images/projects/color.jpg',
    blackAndWhitePhotoLink: 'assets/images/projects/black.jpg',
    stack: [
      {
        title: 'TypeScript',
        icon: 'typescript'
      },
      {
        title: 'Material',
        icon: 'material'
      },
      {
        title: 'CSS',
        icon: 'css'
      },
      {
        title: 'HTML',
        icon: 'html'
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
        icon: 'typescript'
      },
      {
        title: 'Material',
        icon: 'material'
      },
      {
        title: 'CSS',
        icon: 'css'
      },
      {
        title: 'HTML',
        icon: 'html'
      }
    ]
  },
  // {
  //   title: 'Space Booker',
  //   description: 'It sounds like you want to use a transparent background',
  //   linkGit: '',
  //   linkLive: '',
  //   colorPhotoLink: 'assets/images/projects/color.jpg',
  //   blackAndWhitePhotoLink: 'assets/images/projects/black.jpg'
  // }
]
