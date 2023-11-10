import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { TechnologiesCount } from '../_components/technologies-count'
import { Heading } from '@/components/ui/heading'
import { AllProjectsDisplay } from '../_components/all-projects-display'
import { Annotation } from '@/components/annotation'
import { IntroductionWrapper } from '@/components/introduction-wrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gustavo Dias | Projects',
  description: "Gustavo's Personal Projects.",
}

export default function Projects() {
  return (
    <MaxWidthWrapper>
      <IntroductionWrapper className="mb-6 lg:mb-6">
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <Heading>Projects developt</Heading>
            <Annotation>Most relevant works.</Annotation>
          </div>
        </div>
      </IntroductionWrapper>

      <TechnologiesCount />
      <AllProjectsDisplay />
    </MaxWidthWrapper>
  )
}
