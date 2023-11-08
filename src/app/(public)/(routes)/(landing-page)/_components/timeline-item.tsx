import { Calendar } from 'lucide-react'

interface TimelineItemProps {
  role: string
  entreprise: string
  finishedAt?: Date
  startedAt: Date
  description: string
  tecs: string[]
  isTheLastItem: boolean
  isTheMostRecent: boolean
}

export function TimelineItem({
  role,
  description,
  entreprise,
  startedAt,
  finishedAt,
  tecs,
  isTheLastItem,
  isTheMostRecent,
}: TimelineItemProps) {
  const title = role + ' · ' + entreprise

  return (
    <li className={`ml-8 ${isTheLastItem ? 'mb-0' : 'mb-10'}`}>
      <span className="animate-pulse absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-secondary-main/20 bg-secondary-dark">
        <Calendar className="h-3.5 w-3.5" />
      </span>

      <h3 className="flex items-center mb-2 text-2xl font-semibold text-gray-palette-0">
        {title}{' '}
        {isTheMostRecent && (
          <span className=" bg-secondary-main text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full ml-3">
            Latest
          </span>
        )}
      </h3>

      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Jan - Jun, 2023
      </time>

      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>

      <div className="flex flex-row gap-2 mt-4">
        {tecs.map((tec) => (
          <div
            key={tec}
            className="bg-secondary-main w-fit px-3 py-0.5 rounded-full"
          >
            <span className="font-semibold text-white text-sm">{tec}</span>
          </div>
        ))}
      </div>
    </li>
  )
}
