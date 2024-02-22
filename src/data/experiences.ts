interface Experiences {
  role: string
  entreprise: string
  activityPeriod: string
  description: string
  tecs: string[]
}

export const experiences: Experiences[] = [
  {
    entreprise: 'Concatech',
    role: 'Backend Developer Jr.',
    description: `Develop new features and maintain existing applications.`,
    tecs: ['Elixir', 'Phoenix', 'Ecto', 'Postgres', 'Tests'],
    activityPeriod: '2023 Nov - Moment',
  },
  {
    entreprise: 'Apperize',
    role: 'Founder and Developer',
    description: `Acting as a Full Stack Developer creating and maintaining applications. In addition, dealing with customers.`,
    tecs: [
      'Go',
      'Elixir',
      'Phoenix',
      'TypeScript',
      'React',
      'Next',
      'TailwindCSS',
      'GraphQL',
      'Node',
      'MySQL',
    ],
    activityPeriod: '2023 Jun - Moment',
  },
  {
    entreprise: 'UFJF',
    role: 'Professional Training',
    description:
      'Developed a teleconsultation application for remote medical care of patients with no financial conditions.',
    tecs: ['React Native', 'Node', 'UI/UX'],
    activityPeriod: '2022 - 2023',
  },
  {
    entreprise: 'UFJF',
    role: 'Professional Training',
    description: `Developed a project that analyzes developer's skills by the commits on Github.`,
    tecs: ['Java', 'Git'],
    activityPeriod: '2022 - 2023',
  },
  {
    entreprise: 'Code Jr.',
    role: 'Projects Assistant',
    description: `Developed an E-commerce, and maintained customer's websites.`,
    tecs: ['JavaScript', 'TypeScript', 'React', 'PHP', 'HTML', 'CSS', 'MySQL'],
    activityPeriod: '2022 - 2023',
  },
]
