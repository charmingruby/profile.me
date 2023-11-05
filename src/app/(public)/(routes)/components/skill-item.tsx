import Image, { StaticImageData } from 'next/image'

interface SkillItemProps {
  name: string
  context: string
  icon: StaticImageData
}

export function SkillItem({ icon, name, context }: SkillItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <Image src={icon} alt="" className="h-10 w-10" />

      <div className="flex flex-col">
        <strong>{name}</strong>
        <small className="text-sm">{context}</small>
      </div>
    </div>
  )
}
