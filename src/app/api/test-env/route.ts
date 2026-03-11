import { NextResponse } from 'next/server';

export async function GET() {
  // Ne pas afficher la clé complète, juste vérifier si elle existe et montrer les premiers caractères
  const hasResendKey = !!process.env.RESEND_API_KEY;
  const keyPreview = hasResendKey 
    ? `${process.env.RESEND_API_KEY.substring(0, 3)}...${process.env.RESEND_API_KEY.substring(process.env.RESEND_API_KEY.length - 3)}` 
    : 'non définie';
  
  // Vérifier la variable CONTACT_EMAIL
  const hasContactEmail = !!process.env.CONTACT_EMAIL;
  const contactEmailPreview = hasContactEmail
    ? `${process.env.CONTACT_EMAIL.substring(0, 3)}...${process.env.CONTACT_EMAIL.includes('@') ? process.env.CONTACT_EMAIL.substring(process.env.CONTACT_EMAIL.indexOf('@')) : ''}` 
    : 'non définie';
  
  return NextResponse.json({
    hasResendKey,
    keyPreview,
    hasContactEmail,
    contactEmailPreview,
    nodeEnv: process.env.NODE_ENV
  });
}
