import { Montserrat } from 'next/font/google'

// Police principale pour les titres et le texte
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})
