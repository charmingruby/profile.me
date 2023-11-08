import Image, { StaticImageData } from 'next/image'

interface SkillItemProps {
  name: string
  icon: StaticImageData
  category: string
}

export function SkillItem({ icon, name, category }: SkillItemProps) {
  return (
    <div className="flex flex-col items-center text-center w-full gap-4 border border-primary-300 bg-primary-400 rounded-lg shadow-md px-4 py-6">
      <div className="flex">
        <Image src={icon} alt="" className="h-12 w-12" />
      </div>

      <div className="flex flex-col w-full gap-0.5">
        <strong className="text-lg font-semibold text-gray-palette-0">
          {name}
        </strong>
        <span className="text-sm font-medium">{category}</span>
      </div>
    </div>
  )
}
