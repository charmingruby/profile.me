import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function CVDownloadButton() {
  return (
    <Button className="w-fit py-1 sm:py-2 px-4">
      <a
        href="/GustavoDias_CV_2024.pdf"
        target="_blank"
        download
        className="flex items-center gap-2 "
      >
        <strong className="text-base text-white mt-0.5">
          <span className="hidden sm:inline">Download</span> CV
        </strong>
        <Download className="h-4 w-4" />
      </a>
    </Button>
  )
}
