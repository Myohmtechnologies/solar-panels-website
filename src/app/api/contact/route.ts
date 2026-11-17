import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { clientPromise } from '@/lib/mongodb';
import { verifyAdminToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value || '';
  if (!(await verifyAdminToken(token))) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  try {
    const client = await clientPromise;
    const contacts = await client
      .db('myohm')
      .collection('contacts')
      .find({}, { projection: { name: 1, email: 1, phone: 1, subject: 1, message: 1, createdAt: 1, status: 1 } })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, data: contacts.map((contact) => ({
      ...contact,
      _id: contact._id.toString(),
      createdAt: contact.createdAt instanceof Date ? contact.createdAt.toISOString() : contact.createdAt,
    })) });
  } catch (error) {
    console.error('Erreur lors de la récupération des messages de contact:', error);
    return NextResponse.json({ error: 'Impossible de charger les messages de contact' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const subject = typeof body.subject === 'string' ? body.subject.trim() : 'Demande depuis la page contact';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: 'Veuillez renseigner un nom, une adresse e-mail valide et votre message.' },
        { status: 400 }
      );
    }

    const contact = {
      name,
      email,
      phone,
      subject,
      message,
      createdAt: new Date(),
      status: 'NOUVEAU',
    };

    const client = await clientPromise;
    const result = await client.db('myohm').collection('contacts').insertOne(contact);

    // La sauvegarde reste acquise même si la notification e-mail échoue.
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.CONTACT_EMAIL,
        subject: `Nouveau contact - ${subject}`,
        text: `Nouveau message de contact\n\nNom : ${name}\nEmail : ${email}\nTéléphone : ${phone || 'Non renseigné'}\nSujet : ${subject}\n\nMessage :\n${message}`,
        replyTo: email,
      });
    } catch (emailError) {
      console.error('Message de contact enregistré, mais notification e-mail échouée:', emailError);
    }

    return NextResponse.json({ success: true, message: 'Message envoyé avec succès', id: result.insertedId.toString() }, { status: 201 });
  } catch (error) {
    console.error('Erreur lors de l’enregistrement du message de contact:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l’enregistrement de votre message.' },
      { status: 500 }
    );
  }
}
