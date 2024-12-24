export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">404 - Page non trouvée</h2>
      <a 
        href="/"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Retour à l'accueil
      </a>
    </div>
  )
}
