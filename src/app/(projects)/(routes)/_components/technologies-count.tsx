import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { TechnologyCountItem } from './technology-count-item'

export function TechnologiesCount() {
  return (
    <MaxWidthWrapper className="mb-4 flex items-center flex-wrap gap-2">
      <TechnologyCountItem count={2} name="Elixir" />
      <TechnologyCountItem count={2} name="Elixir" />
      <TechnologyCountItem count={2} name="Elixir" />
      <TechnologyCountItem count={2} name="Elixir" />
      <TechnologyCountItem count={2} name="Elixir" />
      <TechnologyCountItem count={2} name="Elixir" />
      <TechnologyCountItem count={2} name="Elixir" />
    </MaxWidthWrapper>
  )
}
