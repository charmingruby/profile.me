interface Timeline {
  role: string
  entreprise: string
  finishedAt?: Date
  startedAt: Date
  description: string
  tecs: string[]
}

export const timelines: Timeline[] = [
  {
    role: 'Founder and Developer',
    entreprise: 'Apperize',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ex voluptatem at nihil iusto a laudantium officiis accusamus ullam, reiciendis ducimus debitis corporis quidem vel praesentium placeat recusandae quo repellat.',
    startedAt: new Date(),
    finishedAt: new Date(),
    tecs: ['Next', 'React'],
  },
  {
    role: 'Projects Assistant',
    entreprise: 'Code Jr.',
    description: "Developed an E-commerce, and maintained customer's websites.",
    startedAt: new Date(),
    finishedAt: new Date(),
    tecs: ['Elixir'],
  },
  {
    role: 'Professional Training',
    entreprise: 'UFJF',
    description: "Developed an E-commerce, and maintained customer's websites.",
    startedAt: new Date(),
    finishedAt: new Date(),
    tecs: ['Elixir'],
  },
  {
    role: 'Professional Training',
    entreprise: 'UFJF',
    description: "Developed an E-commerce, and maintained customer's websites.",
    startedAt: new Date(),
    finishedAt: new Date(),
    tecs: ['Elixir'],
  },
]
