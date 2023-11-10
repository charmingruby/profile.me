import { projects } from '@/data/projects'
import { ProjectCard } from './project-card'

export function AllProjectsDisplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(({ ...props }) => (
        <ProjectCard key={props.title} {...props} />
      ))}
    </div>
  )
}
