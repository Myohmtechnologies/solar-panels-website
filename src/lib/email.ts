import nodemailer from 'nodemailer';

type EmailParams = {
  to: string;
  subject: string;
  html: string;
};

// Configuration du transporteur SMTP OVH
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail({ to, subject, html }: EmailParams) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to,
      subject,
      html,
    });

    console.log('Email envoyé:', info.messageId);
    return info;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    throw error;
  }
}
