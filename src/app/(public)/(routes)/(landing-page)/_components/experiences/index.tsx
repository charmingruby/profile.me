import { timelines } from '@/mocks/timelines'
import { TimelineItem } from './timeline-item'

export function Timeline() {
  const timelinesAmount = timelines.length

  return (
    <ul className="relative border-l border-dashed border-gray-200 dark:border-gray-700">
      {timelines.map(
        (
          { role, entreprise, description, startedAt, tecs, finishedAt },
          idx,
        ) => (
          <TimelineItem
            key={role}
            description={description}
            entreprise={entreprise}
            role={role}
            startedAt={startedAt}
            tecs={tecs}
            finishedAt={finishedAt}
            isTheLastItem={timelinesAmount - 1 === idx}
            isTheMostRecent={idx === 0}
          />
        ),
      )}
    </ul>
  )
}
