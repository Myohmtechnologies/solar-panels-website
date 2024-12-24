import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Réalisations | MyOhm Technologies',
  description: 'Découvrez nos projets d\'installation de panneaux solaires photovoltaïques. Des solutions sur mesure pour particuliers et professionnels.',
  openGraph: {
    title: 'Nos Réalisations | MyOhm Technologies',
    description: 'Découvrez nos projets d\'installation de panneaux solaires photovoltaïques. Des solutions sur mesure pour particuliers et professionnels.',
    type: 'website',
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
