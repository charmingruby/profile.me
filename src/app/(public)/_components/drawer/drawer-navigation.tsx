import { navigationOptions } from '../navigation-options'
import { DrawerItem } from './drawer-item'

export function DrawerNavigation() {
  return (
    <div className="flex flex-col w-full justify-center-center divide-y divide-primary-300">
      {navigationOptions.map(({ label, url }) => (
        <DrawerItem key={label} label={label} url={url} />
      ))}
      <DrawerItem label="Contact" url="contact" />
    </div>
  )
}
