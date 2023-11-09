import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'

export function Footer() {
  return (
    <footer className="w-full border-t py-6 border-border bg-gradient-to-br from-primary-600 to-gray-palette-900">
      <MaxWidthWrapper className="flex justify-center w-full gap-4">
        <span className="text-center">
          Crafted by and designed by{' '}
          <strong className="text-gray-palette-0">Gustavo Dias</strong>.{' '}
        </span>
      </MaxWidthWrapper>
    </footer>
  )
}
