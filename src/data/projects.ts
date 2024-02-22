export interface Project {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  repoUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Apperize',
    subtitle: 'Software House Platform',
    description:
      'Platform that integrates customers and developers into a on demand software.',
    technologies: ['Next', 'React', 'TailwindCSS'],
    repoUrl: 'https://github.com/charmingruby/apperize',
    demoUrl: 'https://www.apperize.com.br',
  },
  {
    title: 'Clize',
    subtitle: 'API',
    description:
      'CLI for internal project team assignments quick communication.',
    technologies: ['Go', 'Redis', 'Cobra', 'Gin'],
    repoUrl: 'https://github.com/charmingruby/clize',
    demoUrl: '',
  },
  {
    title: 'Backpago',
    subtitle: 'API',
    description: 'File storage service.',
    technologies: ['Go', 'AWS', 'RabbitMQ', 'PostgreSQL'],
    repoUrl: 'https://github.com/charmingruby/backpago',
    demoUrl: '',
  },
  {
    title: 'Consulmagno e Assis',
    subtitle: 'Freelance',
    description: 'Law firm institutional website.',
    technologies: ['Next', 'TailwindCSS', 'GraphQL', 'TypeScript'],
    repoUrl: 'https://github.com/charmingruby/murdock',
    demoUrl: '',
  },
  {
    title: 'Lider Instituto',
    subtitle: 'Freelance',
    description: 'Dentists institute institutional website.',
    technologies: ['Next', 'TailwindCSS', 'TypeScript'],
    repoUrl: 'https://github.com/charmingruby/dentists-institute-freelance',
    demoUrl: 'https://www.liderinstituto.com.br/',
  },
  {
    title: 'Pitaya Theme',
    subtitle: 'VSCode Theme',
    description: 'Soft and clean theme for VSCode.',
    technologies: ['VSCode Theme'],
    repoUrl: 'https://github.com/charmingruby/pitaya',
    demoUrl:
      'https://marketplace.visualstudio.com/items?itemName=GustavoDiasdeAlmeida.pitaya',
  },
  {
    title: 'Quasar',
    subtitle: 'MVP',
    description: 'Barber shop scheduling MVP.',
    technologies: ['Next', 'React', 'SQLite', 'Prisma', 'TailwindCSS'],
    repoUrl: 'https://github.com/charmingruby/quasar',
    demoUrl: '',
  },
  {
    title: 'Trinket Gym',
    subtitle: 'API',
    description:
      'Gym pass API all tested to deal with online check-in looking by Geolocalization.',
    technologies: [
      'Node',
      'Prisma',
      'Vitest',
      'Fastify',
      'PostgreSQL',
      'TypeScript',
    ],
    repoUrl: 'https://github.com/charmingruby/trinket-gym-api',
    demoUrl: '',
  },
  {
    title: 'Ping',
    subtitle: 'API',
    description: 'Notification API made to deal with notifications management.',
    technologies: [
      'Node',
      'Nest',
      'Prisma',
      'Jest',
      'PostgreSQL',
      'TypeScript',
    ],
    repoUrl: 'https://github.com/charmingruby/ping-api',
    demoUrl: '',
  },
  {
    title: 'Sloteam',
    subtitle: 'API',
    description:
      'Projects management API made to deal with teams inside a project.',
    technologies: ['Node', 'Redis', 'Prisma', 'PostgreSQL', 'TypeScript'],
    repoUrl: 'https://github.com/charmingruby/sloteam-api',
    demoUrl: '',
  },
  {
    title: 'Spies',
    subtitle: 'API',
    description:
      'Forum API to deal with a communications between instructors and students.',
    technologies: ['Node', 'Nest', 'Prisma', 'Redis', 'PostgreSQL', 'Jest'],
    repoUrl: 'https://github.com/charmingruby/sloteam-api',
    demoUrl: '',
  },
]
