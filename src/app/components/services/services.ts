export interface Service {
  title: string,
  description: string,
  icon: string
}

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Developing responsive and dynamic websites using Angular and React',
    icon: 'development'
  },
  {
    title: 'Migration and Upgrades',
    description: 'Assisting in migrating projects to newer versions of Angular and upgrading existing applications',
    icon: 'update'
  },
  {
    title: 'Support and Technical Consultation',
    description: 'Providing support and consultation for Angular and React to clients already using this framework',
    icon: 'support'
  },
  {
    title: 'Custom Component Development',
    description: 'Creating reusable and custom components tailored to specific project requirements, enhancing the overall functionality of applications',
    icon: 'component'
  },
  {
    title: 'Cross-platform Development',
    description: 'Utilizing to develop cross-platform applications for web, mobile, and desktop, leveraging frameworks like Ionic or Electron',
    icon: 'device'
  },
  {
    title: 'Responsive Design Implementation',
    description: 'Ensuring that applications are fully responsive, adapting gracefully to different screen sizes and devices',
    icon: 'design'
  },
  {
    title: 'Code Review and Refactoring',
    description: 'Conducting thorough code reviews and refactoring existing projects to improve code quality, maintainability, and performance',
    icon: 'review'
  },
  {
    title: 'Consulting for Best Practices',
    description: 'Providing consultancy on best practices, architecture, and design patterns for the projects development',
    icon: 'best'
  },
  {
    title: 'Education and Training',
    description: 'Creating educational content or training courses for other developers',
    icon: 'education'
  }
]
