import { Sparkles } from 'lucide-react'

interface RoleBadgeProps {
  role: string
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-gray-palette-0 bg-gradient-to-tr from-secondary-dark to-secondary-light border border-secondary-dark rounded-full px-3 py-1 w-fit">
      <Sparkles className="h-4 w-4 fill-gray-palette-0" />
      <span className="font-medium mt-px">{role}</span>
    </div>
  )
}
