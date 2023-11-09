import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { ProjectCard } from '../_components/project-card'
import { TechnologiesCount } from '../_components/technologies-count'
import { Heading } from '@/components/ui/heading'
import logoImg from '@/assets/logo/logo.svg'
import Image from 'next/image'

export default function Projects() {
  return (
    <div>
      <MaxWidthWrapper className="mb-8 flex items-center gap-4">
        <Image src={logoImg} alt="" className="h-10 w-10" />
        <Heading>Projects developt</Heading>
      </MaxWidthWrapper>

      <TechnologiesCount />
      <MaxWidthWrapper className="grid grid-cols-3 gap-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </MaxWidthWrapper>
    </div>
  )
}
