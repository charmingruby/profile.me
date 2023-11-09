export interface NavigationOption {
  url: string
  label: string
}

export const navigationOptions: NavigationOption[] = [
  {
    label: 'About',
    url: 'about',
  },
  {
    label: 'Skills',
    url: 'skills',
  },
  { label: 'Projects', url: 'projects' },
  { label: 'Experiences', url: 'experiences' },
]
