'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/form/input'
import { Textarea } from '@/components/ui/form/textarea'
import { useEmailController } from '@/hooks/use-send-email-controller'

export function EmailForm() {
  const { handleSubmit, register } = useEmailController()

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-end gap-6">
      {/* Full name */}
      <Input placeholder="Full name*" {...register('name')} />

      {/* Email address */}
      <Input placeholder="Email*" {...register('email')} />

      {/* Subject */}
      <Input placeholder="Subject*" {...register('subject')} />

      {/* Message */}
      <Textarea placeholder="Message*" {...register('message')} />

      <div className="w-full lg:w-fit lg:self-end">
        <Button size="lg">Send</Button>
      </div>
    </form>
  )
}
