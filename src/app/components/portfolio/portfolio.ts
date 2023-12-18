export interface Project {
  title: string;
  description: string;
  linkGit: string;
  linkLive: string;
  isUnderNDA?: boolean;
  screenshotLink: string;
  technologies: Technology[];
}

export interface Technology {
  title: string;
  iconUrl: string;
}

export const Projects: Project[] = [
  {
    title: 'My website',
    description: 'Crafted on Angular, my personal website boasts responsive design. Explore my portfolio and discover more about me and my diverse array of projects',
    linkGit: 'https://github.com/dsSliusarenko/sliusarenko-portfolio',
    linkLive: 'https://dmytro-sliusarenko.netlify.app',
    screenshotLink: 'assets/images/projects/my-own-website.jpg',
    technologies: [
      {
        title: 'Angular',
        iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
      },
      {
        title: 'TS',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
      },
      {
        title: 'MATERIAL',
        iconUrl: 'https://material.angular.io/assets/img/angular-material-logo.svg'
      },
      {
        title: 'CSS',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png'
      },
      {
        title: 'HTML',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/61/20111018085326%21HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png'
      },
      {
        title: 'RxJS',
        iconUrl: 'https://cdn.worldvectorlogo.com/logos/rxjs-1.svg'
      }
    ]
  },
  {
    title: 'Flips And Match',
    description: 'Built using Angular with cross-platform support, this project is a memory game showcasing symbol placement on cards. Engage in a fun challenge across devices!',
    linkGit: 'https://github.com/dsSliusarenko/flip-and-match',
    linkLive: 'https://flip-and-match.netlify.app',
    screenshotLink: 'assets/images/projects/flips-and-match.jpg',
    technologies: [
      {
        title: 'TS',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
      },
      {
        title: 'Material',
        iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
      },
      {
        title: 'CSS',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png'
      },
      {
        title: 'HTML',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/61/20111018085326%21HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png'
      },
      {
        title: 'NgRx',
        iconUrl: 'https://seeklogo.com/images/N/ngrx-logo-D484A6B4B3-seeklogo.com.png'
      },
    ]
  },
  {
    title: 'Space Booker',
    description: 'A complex web CMS platform streamlining the process of creating and approving advertising content among international branches. All details under NDA',
    linkGit: '',
    linkLive: '',
    isUnderNDA: true,
    screenshotLink: 'assets/images/projects/global-flow.jpg',
    technologies: [
      {
        title: 'TS',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
      },
      {
        title: 'Material',
        iconUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
      },
      {
        title: 'CSS',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png'
      },
      {
        title: 'HTML',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/61/20111018085326%21HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png'
      },
      {
        title: 'NgRx',
        iconUrl: 'https://seeklogo.com/images/N/ngrx-logo-D484A6B4B3-seeklogo.com.png'
      },
    ]
  },
  {
    title: 'In Progress',
    description: 'This project has not been developed yet',
    linkGit: '',
    linkLive: '',
    screenshotLink: 'assets/images/projects/in-progress.jpg',
    technologies: [
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      }
    ]
  },
  {
    title: 'In Progress',
    description: 'This project has not been developed yet',
    linkGit: '',
    linkLive: '',
    screenshotLink: 'assets/images/projects/in-progress.jpg',
    technologies: [
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      }
    ]
  },
  {
    title: 'In Progress',
    description: 'This project has not been developed yet',
    linkGit: '',
    linkLive: '',
    screenshotLink: 'assets/images/projects/in-progress.jpg',
    technologies: [
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
      },
      {
        title: '?',
        iconUrl: 'https://www.svgrepo.com/show/131030/question-mark.svg'
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
