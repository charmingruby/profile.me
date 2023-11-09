interface Timeline {
  role: string
  entreprise: string
  activityPeriod: string
  description: string
  tecs: string[]
}

export const timelines: Timeline[] = [
  {
    entreprise: 'Apperize',
    role: 'Founder and Developer',
    description: `Developed an E-commerce, and maintained customer's websites.`,
    tecs: ['javascript', 'typescript', 'react', 'php', 'html', 'css', 'mysql'],
    activityPeriod: '2022 - 2023',
  },
  {
    entreprise: 'Code Jr.',
    role: 'Projects Assistant',
    description: `Developed an E-commerce, and maintained customer's websites.`,
    tecs: ['javascript', 'typescript', 'react', 'php', 'html', 'css', 'mysql'],
    activityPeriod: '2022 - 2023',
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
    tecs: ['Java'],
    activityPeriod: '2022 - 2023',
  },
]
