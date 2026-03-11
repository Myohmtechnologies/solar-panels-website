import CityLayout from '@/components/layout/CityLayout';

export default function AlpesDeHauteProvenceVillesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout>{children}</CityLayout>;
}
