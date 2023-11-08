import { Button } from '../../../../components/ui/button'
import Link from 'next/link'

export function Actions() {
  return (
    <Link href="/contact" prefetch={false}>
      <Button size="sm">Contact me</Button>
    </Link>
  )
}
