import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/form/input'
import { Textarea } from '@/components/ui/form/textarea'
import { Send } from 'lucide-react'

export function EmailForm() {
  return (
    <form className="flex flex-col  justify-end gap-6">
      {/* Full name */}
      <Input placeholder="Full name*" />

      {/* Email address */}
      <Input placeholder="Email*" />

      {/* Subject */}
      <Input placeholder="Subject*" />

      {/* Message */}
      <Textarea placeholder="Message*" />

      <div className="self-end">
        <Button>
          Send <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
