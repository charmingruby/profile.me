import { Paragraph } from '@/components/ui/paragraph'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/card'
import { Badge } from '@/components/badge'
import { GithubButton } from '@/components/github-button'

interface ProjectCardProps {
  title: string
  subtitle: string
  description: string
  technologies: string[]
  repoUrl: string
  demoUrl?: string
}

export function ProjectCard({
  title,
  subtitle,
  description,
  repoUrl,
  technologies,
  demoUrl,
}: ProjectCardProps) {
  return (
    <Card className="gap-0 p-4 sm:p-8">
      <div className="flex flex-col gap-1">
        <div className="flex">
          <strong className="text-3xl text-gray-palette-0">{title}</strong>
        </div>

        <small className="text-sm font-semibold text-gray-palette-200">
          {subtitle}
        </small>
      </div>

      <Paragraph className="mt-4">{description}</Paragraph>

      <div className="flex items-center flex-wrap gap-2 my-6">
        {technologies.map((tec) => (
          <Badge key={tec}>{tec}</Badge>
        ))}
      </div>

      <div className="flex items-center gap-4 8 border-t border-border pt-6 mt-auto">
        <GithubButton url={repoUrl} />

        {demoUrl && (
          <div className="flex items-center text-base font-medium gap-1 text-gray-palette-200 hover:text-secondary-main cursor-pointer transition-colors">
            View demo <ArrowUpRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </Card>
  )
}
