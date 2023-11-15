import { Paragraph } from '@/components/ui/paragraph'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/card'
import { GithubButton } from '../../../../../components/github-button'
import { Badge } from '@/components/badge'
import Link from 'next/link'

interface ProjectItemProps {
  description: string
  repoUrl: string
  subtitle: string
  technologies: string[]
  title: string
  demoUrl: string
}

export function ProjectItem({
  description,
  repoUrl,
  subtitle,
  technologies,
  title,
  demoUrl,
}: ProjectItemProps) {
  return (
    <Card className="gap-0 p-4 sm:p-6">
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
          <Link href={demoUrl} prefetch={false}>
            <div className="flex items-center text-base font-medium gap-1 text-gray-palette-200 hover:text-secondary-main cursor-pointer transition-colors">
              View demo <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        )}
      </div>
    </Card>
  )
}
