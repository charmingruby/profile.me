import { navigationOptions } from '../navigation-options'
import { NavItem } from './nav-item'

export function MainNav() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigationOptions.map(({ label, url }) => (
          <NavItem key={label} label={label} url={url} />
        ))}
      </ul>
    </nav>
  )
}
