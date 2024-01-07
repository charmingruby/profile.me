import Link from 'next/link'
import { NavigationOption } from '../navigation-options'

export function NavItem({ label, url }: NavigationOption) {
  return (
    <li>
      <Link href={`#${url}`} prefetch={false}>
        <span className="font-medium text-lg text-gray-palette-100 hover:text-secondary-main transition-colors">
          {label}
        </span>
      </Link>
    </li>
  )
}
