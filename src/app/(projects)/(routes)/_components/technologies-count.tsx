import { TechnologyCountItem } from './technology-count-item'
import { projects } from '@/data/projects'

interface TechnologyCount {
  name: string
  count: number
}

export function TechnologiesCount() {
  function generateCount() {
    const technologyCountArray: TechnologyCount[] = []

    for (const project of projects) {
      for (const technology of project.technologies) {
        if (technology) {
          const existingTech = technologyCountArray.find(
            (item) => item.name === technology,
          )
          if (existingTech) {
            existingTech.count++
          } else {
            technologyCountArray.push({ name: technology, count: 1 })
          }
        }
      }
    }

    return technologyCountArray
  }

  const techsCount = generateCount()
  const sortedTechsCount = techsCount.sort((a, b) => b.count - a.count)

  return (
    <div className="mb-4 flex items-center flex-wrap gap-2">
      {sortedTechsCount.map(({ count, name }) => (
        <TechnologyCountItem key={name} count={count} name={name} />
      ))}
    </div>
  )
}
