import Link from 'next/link'
import { NavigationOption } from '../navigation-options'

export function NavItem({ label, url }: NavigationOption) {
  return (
    <li>
      <Link href={url} prefetch={false}>
        <span className="font-medium text-gray-palette-300">{label}</span>
      </Link>
    </li>
  )
}
