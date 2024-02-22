import { StaticImageData } from 'next/image'

import reactImg from '@/assets/technologies/react-original.svg'
import nxtImg from '@/assets/technologies/nextjs-original.svg'
import graphQlImg from '@/assets/technologies/graphql-plain.svg'
import elixirImg from '@/assets/technologies/elixir-original.svg'
import dockerImg from '@/assets/technologies/docker-plain.svg'
import nodeImg from '@/assets/technologies/nodejs-original.svg'
import phoenixImg from '@/assets/technologies/phoenix-original.svg'
import mysqlImg from '@/assets/technologies/mysql-original.svg'
import pgImg from '@/assets/technologies/postgresql-original.svg'
import nestImg from '@/assets/technologies/nestjs-plain.svg'
import tailwindImg from '@/assets/technologies/tailwindcss-plain.svg'
import golangImg from '@/assets/technologies/go-original-wordmark.svg'

interface Skill {
  logo: StaticImageData
  name: string
  category: string
}

export const skills: Skill[] = [
  {
    logo: golangImg,
    name: 'Go',
    category: 'Backend',
  },
  {
    logo: elixirImg,
    name: 'Elixir',
    category: 'Backend',
  },
  {
    logo: phoenixImg,
    name: 'Phoenix',
    category: 'Backend',
  },
  {
    logo: reactImg,
    name: 'React',
    category: 'Frontend',
  },
  {
    logo: nxtImg,
    name: 'Next',
    category: 'Frontend',
  },
  {
    logo: tailwindImg,
    name: 'Tailwind',
    category: 'Frontend',
  },
  {
    logo: dockerImg,
    name: 'Docker',
    category: 'Infrastructure',
  },
  {
    logo: graphQlImg,
    name: 'GraphQL',
    category: 'API',
  },
  {
    logo: nodeImg,
    name: 'Node',
    category: 'Backend',
  },
  {
    logo: nestImg,
    name: 'Nest',
    category: 'Backend',
  },
  {
    logo: pgImg,
    name: 'PostgreSQL',
    category: 'Database',
  },
  {
    logo: mysqlImg,
    name: 'MySQL',
    category: 'Database',
  },
]
