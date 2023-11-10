import { projects } from '@/data/projects'
import { ProjectItem } from './project-item'

export function PinnedProjects() {
  const projectsNameFilter = ['Apperize', 'Pitaya Theme', 'Thissue', 'Murdock']

  const filteredProjects = projects.filter((project) =>
    projectsNameFilter.includes(project.title),
  )

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      {filteredProjects.map(
        ({ description, repoUrl, subtitle, technologies, title, demoUrl }) => (
          <ProjectItem
            key={title}
            demoUrl={demoUrl ?? ''}
            description={description}
            repoUrl={repoUrl}
            subtitle={subtitle}
            technologies={technologies}
            title={title}
          />
        ),
      )}
    </div>
  )
}
