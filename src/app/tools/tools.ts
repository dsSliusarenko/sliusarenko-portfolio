export enum ListType {
  LANGUAGES = 'LANGUAGES',
  FRAMEWORKS = 'FRAMEWORKS',
  LIBRARIES = 'LIBRARIES',
  SOFTWARE = 'SOFTWARE',
  VERSIONS_CONTROL = 'VERSIONS_CONTROL'
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
        description: 'TypeScript is a statically typed superset of JavaScript, enhancing code quality and maintainability. It catches type errors early, aiding robust development.',
        icon: 'typescript',
        sourceUrl: 'BootstrapSSSSSSS'
      },
      {
        title: 'JavaScript',
        description: 'JavaScript powers web interactivity, handling client-side tasks like form validation and dynamic content updates. It\'s a versatile, essential web programming language.',
        icon: 'javascript',
        sourceUrl: 'BootstrapSSSSSSS'
      },
      {
        title: 'Java',
        description: 'Java: versatile, widely used programming language for applications, known for its portability and robustness.',
        icon: 'java',
        sourceUrl: 'BootstrapSSSSSSS'
      },
      {
        title: 'CSS',
        description: 'CSS styles web content, controlling layout and design. It enhances visual appeal and user experience.',
        icon: 'css',
        sourceUrl: 'BootstrapSSSSSSS'
      },
      {
        title: 'HTML',
        description: 'HTML structures web content, defining page elements and layout. It\'s essential for web development.',
        icon: 'html',
        sourceUrl: 'BootstrapSSSSSSS'
      }
    ]
  },
  {
    listType: ListType.FRAMEWORKS,
    tools: [
      {
        title: 'Angular',
        description: 'Angular is a powerful JavaScript framework for building dynamic web applications, providing tools for data binding, routing, and component-based development.\n',
        icon: 'angular',
        sourceUrl: 'https://angular.io/'
      },
      {
        title: 'NestJS',
        description: 'NestJS simplifies backend development with TypeScript, offering a framework for building scalable and maintainable Node.js applications.',
        icon: 'nestjs',
        sourceUrl: 'https://nestjs.com/'
      },
      {
        title: 'React',
        description: 'React is a JavaScript library for building user interfaces, focusing on efficient rendering and component-based development.',
        icon: 'react',
        sourceUrl: 'https://react.dev/'
      }
    ]
  },
  {
    listType: ListType.LIBRARIES,
    tools: [
      {
        title: 'Angular-Material',
        description: 'Angular Material is a UI component library for Angular applications, offering a wide range of pre-designed, responsive, and customizable elements. It simplifies the development of sleek and consistent user interfaces.',
        icon: 'material',
        sourceUrl: 'https://material.angular.io/'
      },
      {
        title: 'Bootstrap',
        description: 'Bootstrap: popular front-end framework for creating responsive and visually appealing websites. It simplifies web development with pre-designed components and responsive grid system.',
        icon: 'bootstrap',
        sourceUrl: 'https://getbootstrap.com/'
      },
      {
        title: 'PrimeNG',
        description: 'PrimeNG empowers web developers with a comprehensive set of UI components for creating feature-rich web applications.',
        icon: 'primeng',
        sourceUrl: 'https://primeng.org/'
      },
      {
        title: 'LeafletJS',
        description: 'LeafletJS: A JavaScript library enabling interactive web maps with simplicity and flexibility.',
        icon: 'leaflet',
        sourceUrl: 'https://leafletjs.com/'
      },
      {
        title: 'RxJS',
        description: 'Reactive programming tool in JavaScript for managing asynchronous data streams.',
        icon: 'rxjs',
        sourceUrl: 'https://rxjs.dev/'
      }
    ]
  },
  {
    listType: ListType.SOFTWARE,
    tools: [
      {
        title: 'IntelliJ IDEA',
        description: 'IntelliJ IDEA: A powerful IDE for Java development with code analysis, debugging, and seamless integration.',
        icon: 'idea',
        sourceUrl: 'https://www.jetbrains.com/idea/'
      },
      {
        title: 'Docker',
        description: 'Containerization platform for packaging, distributing, and running applications with isolation and efficiency. Enables consistent deployment across environments.',
        icon: 'docker',
        sourceUrl: 'https://www.docker.com/'
      },
      {
        title: 'MongoDB',
        description: 'MongoDB is a NoSQL database used for flexible, scalable, and document-oriented data storage and retrieval. It\'s ideal for handling unstructured or semi-structured data efficiently.',
        icon: 'mongodb',
        sourceUrl: 'https://www.mongodb.com/'
      },
      {
        title: 'Swagger',
        description: 'Swagger is a tool for documenting and testing RESTful APIs, simplifying API development and communication.',
        icon: 'swagger',
        sourceUrl: 'https://swagger.io/'
      },
      {
        title: 'Postman',
        description: 'Postman: API testing and development tool, simplifies testing and automation, streamlines API workflows.',
        icon: 'postman',
        sourceUrl: 'https://www.postman.com/'
      },
      {
        title: 'GraphQl',
        description: 'GraphQL: Query language for APIs, offers precise data retrieval, reducing over-fetching, and enabling efficient client-server communication.',
        icon: 'graphql',
        sourceUrl: 'https://graphql.org/'
      },
      {
        title: 'Jira',
        description: 'Jira is a versatile project management tool for tracking tasks, issues, and software development progress. It offers agile and customizable features.',
        icon: 'jira',
        sourceUrl: 'https://www.atlassian.com'
      },
      {
        title: 'Confluence',
        description: 'Collaboration tool for teams: Create, share, and manage content seamlessly. Foster teamwork and knowledge sharing.',
        icon: 'confluence',
        sourceUrl: 'https://www.atlassian.com'
      }
    ]
  },
  {
    listType: ListType.VERSIONS_CONTROL,
    tools: [
      {
        title: 'GitHub',
        description: 'GitHub is a web-based platform for version control and collaboration, enabling developers to manage code repositories efficiently.',
        icon: 'github',
        sourceUrl: 'https://github.com/'
      },
      {
        title: 'BitBucket',
        description: 'BitBucket facilitates team collaboration with Git and Mercurial repositories, aiding code management and project integration.',
        icon: 'bitbucket',
        sourceUrl: 'https://bitbucket.org/'
      },
      {
        title: 'Gitlab',
        description: 'GitLab is a web-based Git repository that provides free open and private repositories, issue-following capabilities, and wikis.',
        icon: 'gitlab',
        sourceUrl: 'https://about.gitlab.com/'
      }
    ]
  }
];
