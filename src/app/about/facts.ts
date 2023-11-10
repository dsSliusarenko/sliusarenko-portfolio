export interface Fact {
  icon: string;
  metric: number | string;
  description: string
}

export const FACTS: Fact[] = [
  {
    icon: 'project',
    metric: 10,
    description: '<strong>Scalable and reliable</strong> Web Apps developed'
  },
  {
    icon: 'hourglass',
    metric: 3,
    description: '<strong>Years of building</strong> commercial Web Applications'
  },
  {
    icon: 'dvr',
    metric: 6,
    description: '<strong>Years working in IT</strong> industry'
  },
  {
    icon: 'project',
    metric: '6 + 4',
    description: '<strong>libraries and Frameworks</strong> Implementing'
  }
]
