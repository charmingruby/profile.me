import { Calendar } from 'lucide-react'

interface TimelineItemProps {
  role: string
  entreprise: string
  activityPeriod: string
  description: string
  tecs: string[]
  isTheLastItem: boolean
}

export function TimelineItem({
  role,
  description,
  entreprise,
  tecs,
  isTheLastItem,
  activityPeriod,
}: TimelineItemProps) {
  const title = role + ' · ' + entreprise

  return (
    <li className={`ml-8 ${isTheLastItem ? 'mb-0' : 'mb-10'}`}>
      <span className="animate-pulse absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-secondary-main/20 bg-secondary-main">
        <Calendar className="h-3.5 w-3.5 text-white" />
      </span>

      <h3 className="flex items-center text-2xl font-semibold text-gray-palette-0">
        {title}{' '}
      </h3>

      <time className="block mt-2 text-sm font-normal leading-none text-gray-palette-300">
        {activityPeriod}
      </time>

      <p className="text-base font-normal text-gray-palette-100 mt-4">
        {description}
      </p>

      <div className="flex flex-row flex-wrap gap-2 mt-4">
        {tecs.map((tec) => (
          <div
            key={tec}
            className="bg-secondary-main w-fit px-3 py-0.5 rounded-sm"
          >
            <span className="font-semibold text-white text-sm capitalize">
              {tec}
            </span>
          </div>
        ))}
      </div>
    </li>
  )
}
