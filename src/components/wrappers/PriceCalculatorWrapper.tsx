'use client';

import dynamic from 'next/dynamic';

const PriceCalculator = dynamic(
  () => import('@/components/calculators/PriceCalculator'),
  { ssr: false }
);

export default function PriceCalculatorWrapper() {
  return <PriceCalculator />;
}
