import CityLayout from '@/components/layout/CityLayout';

export default function HautesAlpesVillesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CityLayout>{children}</CityLayout>;
}
