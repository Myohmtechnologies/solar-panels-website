'use client';

import { useEffect, useState } from 'react';
import { EnvelopeIcon, PhoneIcon, UserIcon, CalendarDaysIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
  status: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/contact', { cache: 'no-store' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Impossible de charger les messages.');
      setContacts(result.data || []);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : 'Une erreur est survenue.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchContacts();
  }, []);

  return (
    <div className="min-h-screen space-y-6 bg-gray-50 py-2">
      <header className="flex flex-col gap-4 rounded-2xl bg-gradient-to-r from-[#0a3d5c] to-[#116290] p-6 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#ffdf64]">Boîte de réception</p>
          <h1 className="mt-1 text-2xl font-bold sm:text-3xl">Messages de contact</h1>
          <p className="mt-2 text-sm text-white/75">Les demandes envoyées depuis la page Contact, séparées des leads.</p>
        </div>
        <div className="flex items-center gap-3">
          {!loading && <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">{contacts.length} message{contacts.length > 1 ? 's' : ''}</span>}
          <button
            type="button"
            onClick={() => void fetchContacts()}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ffdf64] to-[#ffb700] px-4 py-2.5 text-sm font-bold text-[#123c54] transition hover:shadow-md disabled:opacity-60"
          >
            <ArrowPathIcon className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} /> Actualiser
          </button>
        </div>
      </header>

      {error && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">{error}</div>}

      {loading ? (
        <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center text-gray-500 shadow-sm">Chargement des messages…</div>
      ) : contacts.length === 0 ? (
        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-16 text-center shadow-sm">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#116290]/5 text-[#116290]"><EnvelopeIcon className="h-7 w-7" /></span>
          <h2 className="mt-4 text-lg font-bold text-[#102c40]">Aucun message pour le moment</h2>
          <p className="mt-2 text-sm text-gray-500">Les prochains messages du formulaire apparaîtront ici.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <article key={contact._id} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-bold text-[#102c40]">{contact.name}</h2>
                    <span className="rounded-full bg-[#fff7d7] px-3 py-1 text-xs font-bold text-[#8a6200]">Nouveau message</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{contact.subject}</p>
                </div>
                <div className="flex flex-none items-center gap-2 text-sm text-gray-500">
                  <CalendarDaysIcon className="h-4 w-4 text-[#116290]" />
                  {new Date(contact.createdAt).toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' })}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2 border-y border-gray-100 py-4 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
                <a href={`mailto:${contact.email}`} className="inline-flex min-w-0 items-center gap-2 font-medium text-[#116290] hover:underline"><EnvelopeIcon className="h-4 w-4 flex-none" /><span className="break-all">{contact.email}</span></a>
                {contact.phone && <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`} className="inline-flex items-center gap-2 font-medium text-[#116290] hover:underline"><PhoneIcon className="h-4 w-4" />{contact.phone}</a>}
                <span className="inline-flex items-center gap-2 text-gray-500"><UserIcon className="h-4 w-4" />Page contact</span>
              </div>

              <p className="whitespace-pre-wrap text-sm leading-6 text-gray-700">{contact.message}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
