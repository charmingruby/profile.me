'use client'

import { Button } from '@/components/ui/button'
import { FieldErrorMessage } from '@/components/ui/form/field-error-message'
import { FieldRoot } from '@/components/ui/form/field-root'
import { Input } from '@/components/ui/form/input'
import { Textarea } from '@/components/ui/form/textarea'
import { useEmailController } from '@/hooks/use-send-email-controller'

export function EmailForm() {
  const { handleSubmit, register, errors } = useEmailController()

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-end gap-4">
      <FieldRoot>
        <Input
          hasError={!!errors.name}
          placeholder="Full name*"
          {...register('name')}
        />
        <FieldErrorMessage msg={errors.name?.message} />
      </FieldRoot>

      <FieldRoot>
        <Input
          hasError={!!errors.email}
          placeholder="Email*"
          {...register('email')}
        />
        <FieldErrorMessage msg={errors.email?.message} />
      </FieldRoot>

      <FieldRoot>
        <Input
          hasError={!!errors.subject}
          placeholder="Subject*"
          {...register('subject')}
        />
        <FieldErrorMessage msg={errors.subject?.message} />
      </FieldRoot>

      <FieldRoot>
        <Textarea
          hasError={!!errors.message}
          placeholder="Message*"
          {...register('message')}
        />
        <FieldErrorMessage msg={errors.message?.message} />
      </FieldRoot>

      <div className="w-full lg:w-fit lg:self-end">
        <Button size="lg">Send</Button>
      </div>
    </form>
  )
}
