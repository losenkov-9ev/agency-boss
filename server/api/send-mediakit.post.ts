import { Resend } from 'resend'

interface SendMediaKitBody {
  email?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const mediaKitUrl =
  'https://docs.google.com/spreadsheets/d/1UzL097-AVyefaGWv5DvXLYQDvh6wWKvFDbR6oIVrVdY/edit?gid=0#gid=0'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const body = await readBody<SendMediaKitBody>(event)
  const email = body.email?.trim().toLowerCase()

  if (!email || !emailPattern.test(email) || email.length > 254) {
    throw createError({
      statusCode: 400,
      message: 'Введите корректный email',
    })
  }

  if (!config.resendApiKey) {
    throw createError({
      statusCode: 500,
      message: 'Email service is not configured',
    })
  }

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
        <p>Таблица с актуальным списком площадок и ориентировочными условиями размещения доступна по ссылке:</p>
        <p>
          <a href="${mediaKitUrl}" style="color: #0f6fff; font-weight: 700;">Открыть медиакит AGENCY BOSS</a>
        </p>
        <p>Если хотите получить подборку под конкретный продукт, ответьте на это письмо или напишите нам в Telegram.</p>
        <p style="margin-top: 24px;">AGENCY BOSS</p>
      </div>
    `,
    text: `Здравствуйте! Таблица с актуальным списком площадок и ориентировочными условиями размещения доступна по ссылке: ${mediaKitUrl} AGENCY BOSS`,
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
      message: response.error.message || 'Не удалось отправить письмо',
    })
  }

  return {
    ok: true,
  }
})
