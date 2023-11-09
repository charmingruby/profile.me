'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z
    .string()
    .min(6, {
      message: 'Name must have at least 6 characters.',
    })
    .max(80, {
      message: 'Name can have a maximum of 80 characters.',
    }),

  email: z.string().email({
    message: 'Email must have a valid format.',
  }),
  subject: z
    .string()
    .min(10, 'Subject must have at least 10 characters.')
    .max(32, 'Subject can have a maximum of 20 characters.'),
  message: z
    .string()
    .min(16, 'Message must have at least 16 characters.')
    .max(240, 'Message can have a maximum of 240 characters.'),
})

type FormData = z.infer<typeof formSchema>

export function useEmailController() {
  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  console.log(errors)

  const handleSubmit = hookFormHandleSubmit(
    ({ name, email, subject, message }: FormData) => {
      console.log({ name, email, subject, message })
    },
  )

  return { register, errors, isSubmitting, handleSubmit }
}
