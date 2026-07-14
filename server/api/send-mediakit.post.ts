import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Resend } from 'resend'

interface SendMediaKitBody {
  email?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const attachmentFilename = 'Agency BOSS April.xlsx'

function resolveMediaKitPath() {
  const candidates = [
    join(process.cwd(), 'public/assets/agency-boss-april.xlsx'),
    join(process.cwd(), '.output/public/assets/agency-boss-april.xlsx'),
    join(process.cwd(), '../public/assets/agency-boss-april.xlsx'),
  ]

  const found = candidates.find((candidate) => existsSync(candidate))

  if (!found) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Media kit file is not available',
    })
  }

  return found
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<SendMediaKitBody>(event)
  const email = body.email?.trim().toLowerCase()

  if (!email || !emailPattern.test(email) || email.length > 254) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Введите корректный email',
    })
  }

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email service is not configured',
    })
  }

  const mediaKit = await readFile(resolveMediaKitPath())
  const resend = new Resend(config.resendApiKey)

  const response = await resend.emails.send({
    from: config.mailFrom,
    to: email,
    replyTo: config.mailReplyTo,
    subject: 'Медиакит AGENCY BOSS',
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
        <h1 style="margin: 0 0 16px;">Медиакит AGENCY BOSS</h1>
        <p>Здравствуйте!</p>
        <p>Во вложении — таблица с актуальным списком площадок и ориентировочными условиями размещения.</p>
        <p>Если хотите получить подборку под конкретный продукт, ответьте на это письмо или напишите нам в Telegram.</p>
        <p style="margin-top: 24px;">AGENCY BOSS</p>
      </div>
    `,
    text:
      'Здравствуйте! Во вложении — таблица с актуальным списком площадок и ориентировочными условиями размещения. AGENCY BOSS',
    attachments: [
      {
        filename: attachmentFilename,
        content: mediaKit,
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
    ],
    tags: [
      {
        name: 'source',
        value: 'mediakit_form',
      },
    ],
  })

  if (response.error) {
    throw createError({
      statusCode: 502,
      statusMessage: response.error.message || 'Не удалось отправить письмо',
    })
  }

  return {
    ok: true,
  }
})
