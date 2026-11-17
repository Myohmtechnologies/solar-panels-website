import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Installation ballon d’eau chaude électrique | My Ohm Technologies',
  description: 'Installation et remplacement de ballon d’eau chaude électrique en région PACA. Étude de vos besoins, pose et mise en service. Demandez votre devis.',
  keywords: ['installation ballon eau chaude électrique', 'remplacement chauffe-eau électrique', 'pose ballon eau chaude PACA'],
};

export default function InstallationBallonEauChaudeLayout({ children }: { children: ReactNode }) {
  return children;
}
