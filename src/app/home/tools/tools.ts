export enum ListType {
  LANGUAGES = 'LANGUAGES',
  FRAMEWORKS = 'FRAMEWORKS',
  LIBRARIES = 'LIBRARIES'
}

export interface ToolsList {
  listType: ListType;
  tools: Tool [];
}

export interface Tool {
  title: string;
  description: string;
  icon: string;
  sourceUrl: string;
}

export const TOOLS: ToolsList [] = [
  {
    listType: ListType.LANGUAGES,
    tools: [
      {
        title: 'TypeScript',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'typescript',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'JavaScript',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'javascript',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'CSS',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'css',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'HTML',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'html',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'Java',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'java',
        sourceUrl: 'https://material.angular.io'
      }
    ]
  },
  {
    listType: ListType.FRAMEWORKS,
    tools: [
      {
        title: 'Angular',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'angular',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'NestJS',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'nestjs',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'React',
        description: 'UI component infrastructure and Material Design components for mobile and desktop Angular web applications.',
        icon: 'react',
        sourceUrl: 'https://material.angular.io'
      }
    ]
  },
  {
    listType: ListType.LIBRARIES,
    tools: [
      {
        title: 'Angular-Material',
        description: 'Bootstrap lkghkjdfhgjksdfhgkjsdfhgkjsdfhkghsdfk',
        icon: 'material',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'Bootstrap',
        description: 'Bootstrap',
        icon: 'bootstrap',
        sourceUrl: 'https://material.angular.io'
      },
      {
        title: 'PrimeNG',
        description: 'Bootstrap',
        icon: 'primeng',
        sourceUrl: 'https://material.angular.io'
      }
    ]
  }
];
