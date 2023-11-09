import { timelines } from '@/mocks/timelines'
import { TimelineItem } from './timeline-item'

export function Timeline() {
  const timelinesAmount = timelines.length

  return (
    <ul className="relative border-l border-dashed border-gray-700">
      {timelines.map(
        ({ role, entreprise, description, tecs, activityPeriod }, idx) => (
          <TimelineItem
            key={role}
            description={description}
            entreprise={entreprise}
            role={role}
            activityPeriod={activityPeriod}
            tecs={tecs}
            isTheLastItem={timelinesAmount - 1 === idx}
          />
        ),
      )}
    </ul>
  )
}
