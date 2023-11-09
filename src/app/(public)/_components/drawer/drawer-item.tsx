import Link from 'next/link'

interface DrawerItemProps {
  label: string
  url: string
}

export function DrawerItem({ label, url }: DrawerItemProps) {
  return (
    <Link
      href={`#${url}`}
      prefetch={false}
      className="flex justify-center w-full text-center py-4 hover:bg-primary-300 rounded-lg transition-colors"
    >
      <div className="text-xl font-medium">{label}</div>
    </Link>
  )
}
