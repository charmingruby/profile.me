import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import Link from 'next/link'

export function Actions() {
  return (
    <Link href="/contact" prefetch={false}>
      <Button>
        Download CV <Download className="h-4 w-4" />
      </Button>
    </Link>
  )
}
