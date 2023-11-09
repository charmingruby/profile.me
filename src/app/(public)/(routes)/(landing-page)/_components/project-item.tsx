import { Paragraph } from '@/components/ui/paragraph'
import { ArrowUpRight } from 'lucide-react'
import githubImg from '@/assets/socials/github.svg'
import Image from 'next/image'
import reactImg from '@/assets/technologies/react-original.svg'
import nextImg from '@/assets/technologies/nextjs-original.svg'
import { Card } from '@/components/card'

export function ProjectItem() {
  return (
    <Card className="gap-0 p-4 sm:p-8">
      <div className="flex flex-col gap-1">
        <div className="flex">
          <strong className="text-3xl text-gray-palette-0">Apperize</strong>
        </div>

        <small className="text-sm font-semibold text-gray-palette-200">
          Software House Platform
        </small>
      </div>

      <Paragraph className="mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quasi
        perferendis suscipit, eius obcaecati ratione numquam, sint animi iure in
        doloribus dolor magni vel totam voluptates mollitia nam, ipsa quam!
      </Paragraph>

      <div className="flex items-center flex-wrap gap-4 my-6">
        <Image src={reactImg} alt="" className="h-6 w-6" />
        <Image src={nextImg} alt="" className="h-6 w-6" />
      </div>

      <div className="flex items-center gap-4 8 border-t border-border pt-6">
        <Image src={githubImg} alt="" className="h-6 w-6" />

        <div className="flex items-center text-base font-medium gap-1 text-gray-palette-200 hover:text-secondary-main cursor-pointer transition-colors">
          View demo <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Card>
  )
}
