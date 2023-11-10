import { experiences } from '@/data/experiences'
import { TimelineItem } from './timeline-item'

export function Timeline() {
  const timelinesAmount = experiences.length

  return (
    <ul className="relative border-l border-dashed border-gray-700">
      {experiences.map(
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
