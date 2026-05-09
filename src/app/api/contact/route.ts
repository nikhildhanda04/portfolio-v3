import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Send to yourself
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #fafaf9; border-radius: 12px;">
          <h2 style="font-size: 20px; color: #1c1917; margin: 0 0 24px 0; border-bottom: 1px solid #e7e5e4; padding-bottom: 16px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #78716c; font-size: 13px; width: 80px; vertical-align: top;">Name</td>
              <td style="padding: 8px 0; color: #1c1917; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #78716c; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; color: #1c1917; font-size: 14px;">
                <a href="mailto:${email}" style="color: #44403c; text-decoration: underline;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; color: #78716c; font-size: 13px; vertical-align: top;">Phone</td>
              <td style="padding: 8px 0; color: #1c1917; font-size: 14px;">${phone}</td>
            </tr>
            ` : ''}
          </table>

          <div style="margin-top: 20px; padding: 16px; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 8px;">
            <p style="color: #78716c; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="color: #1c1917; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 11px; color: #a8a29e; text-align: center;">
            Sent from nikhildhanda.vercel.app
          </p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
