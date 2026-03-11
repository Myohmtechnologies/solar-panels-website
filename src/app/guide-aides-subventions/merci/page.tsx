import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Merci pour votre téléchargement | MyOhm Technologies',
  description: 'Merci d\'avoir téléchargé notre guide sur les aides et subventions pour l\'installation de panneaux solaires.',
  robots: {
    index: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <svg
              className="mx-auto h-12 w-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Merci pour votre téléchargement !
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Votre guide a été envoyé à votre adresse email.
            </p>
            <p className="mt-4 text-center text-sm text-gray-600">
              Notre équipe vous contactera prochainement pour discuter de votre projet.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
