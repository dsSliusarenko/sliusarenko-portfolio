export interface Fact {
  icon: string;
  metric: number;
  description: string
}

export const FACTS: Fact[] = [
  {
    icon: 'project',
    metric: 2300,
    description: '<strong>High-quality and maintainable</strong> lines of code written'
  },
  {
    icon: 'hourglass',
    metric: 48,
    description: '<strong>Months of building</strong> commercial Web Applications'
  },
  {
    icon: 'dvr',
    metric: 99,
    description: '<strong>Сomponents and modules</strong> are described in the documentation'
  },
  {
    icon: 'history',
    metric: 72,
    description: '<strong>Months of working</strong> in the IT industry'
  }
]
