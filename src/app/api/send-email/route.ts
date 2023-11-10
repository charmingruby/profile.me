import {
  EmailMessageTemplate,
  EmailMessageTemplateProps,
} from '@/emails/message-template'
import { email } from '@/site/contact'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { authorEmail, authorName, message, subject } =
      body as EmailMessageTemplateProps

    console.log(body)
    const data = await resend.emails.send({
      from: authorEmail,
      to: [email],
      subject,
      text: `Portfolio - ${authorName} message.`,
      react: EmailMessageTemplate({
        authorEmail,
        authorName,
        message,
        subject,
      }),
    })

    console.log(data)

    return NextResponse.json({ status: 'ok' })
  } catch (error) {
    NextResponse.json(JSON.stringify(error), { status: 400 })
  }
}
