import Image, { StaticImageData } from 'next/image'

interface SkillItemProps {
  name: string
  context: string
  icon: StaticImageData
}

export function SkillItem({ icon, name, context }: SkillItemProps) {
  return (
    <div className="flex flex-col w-full gap-4 ">
      <div className="flex">
        <Image src={icon} alt="" className="h-12 w-12" />
      </div>

      <div className="flex flex-col w-full gap-2">
        <strong className="text-xl text-gray-palette-0 mt-px">{name}</strong>
        <small className="text-sm leading-relaxed">{context}</small>
      </div>
    </div>
  )
}
