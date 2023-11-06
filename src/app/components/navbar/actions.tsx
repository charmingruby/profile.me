import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Actions() {
  return (
    <Link href="/contact" prefetch={false}>
      <Button>Contact me</Button>
    </Link>
  )
}
