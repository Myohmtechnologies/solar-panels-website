export default function DefaultError() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Une erreur est survenue
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Nous nous excusons pour la gêne occasionnée
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <a
            href="/"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
