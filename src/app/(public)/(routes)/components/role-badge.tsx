interface RoleBadgeProps {
  role: string
}

export function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <div className="border border-border rounded-full px-3 py-1 w-fit">
      <span>{role}</span>
    </div>
  )
}
