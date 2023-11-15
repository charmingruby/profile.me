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
    technologies: ['Next', 'React', 'TailwindCSS', 'Clerk', 'Prisma', 'MySQL'],
    repoUrl: 'https://github.com/charmingruby/apperize',
    demoUrl: 'https://www.apperize.com.br',
  },
  {
    title: 'Thissue',
    subtitle: 'Software House Platform',
    description: 'Centralizer of issues and errors of in production apps.',
    technologies: ['Elixir', 'Phoenix', 'Ecto', 'PostgreSQL'],
    repoUrl: 'https://github.com/charmingruby/thissue',
    demoUrl: '',
  },
  {
    title: 'Murdock',
    subtitle: 'Software House Platform',
    description: 'Law firm institutional website.',
    technologies: ['Next', 'TailwindCSS', 'GraphQL', 'TypeScript'],
    repoUrl: 'https://github.com/charmingruby/murdock',
    demoUrl: '',
  },
  {
    title: 'Pitaya Theme',
    subtitle: 'Software House Platform',
    description: 'Soft and clean theme for VSCode.',
    technologies: ['VSCode', 'Extension'],
    repoUrl: 'https://github.com/charmingruby/pitaya',
    demoUrl:
      'https://marketplace.visualstudio.com/items?itemName=GustavoDiasdeAlmeida.pitaya',
  },
  {
    title: 'Trinket Gym API',
    subtitle: 'Gym Pass',
    description:
      'Gym pass API all tested to deal with online check-in looking by Geolocalization.',
    technologies: [
      'Node',
      'Prisma',
      'Vitest',
      'Fastify',
      'Zod',
      'PostgreSQL',
      'TypeScript',
    ],
    repoUrl: 'https://github.com/charmingruby/trinket-gym-api',
    demoUrl: '',
  },
  {
    title: 'Ping API',
    subtitle: 'Notification service',
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
    title: 'Sloteam API',
    subtitle: 'Team projects management',
    description:
      'Projects management API made to deal with teams inside a project.',
    technologies: ['Node', 'Redis', 'Prisma', 'PostgreSQL', 'TypeScript'],
    repoUrl: 'https://github.com/charmingruby/sloteam-api',
    demoUrl: '',
  },
  {
    title: 'Spies',
    subtitle: 'Forum management',
    description:
      'Forum API to deal with a communications between instructors and students.',
    technologies: [
      'Node',
      'Nest',
      'Prisma',
      'Redis',
      'PostgreSQL',
      'Jest',
      'DDD',
      'Clean Architecture',
    ],
    repoUrl: 'https://github.com/charmingruby/sloteam-api',
    demoUrl: '',
  },
]
