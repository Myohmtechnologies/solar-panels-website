import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-[40vh] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-6C8D2F">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Réalisation introuvable</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Désolé, nous n&apos;avons pas trouvé la réalisation que vous recherchez.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/nos-realisation"
            className="rounded-md bg-6C8D2F px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-5a7526 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-6C8D2F"
          >
            Retour aux réalisations
          </Link>
          <Link href="/" className="text-sm font-semibold text-gray-900">
            Retour à l&apos;accueil <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
