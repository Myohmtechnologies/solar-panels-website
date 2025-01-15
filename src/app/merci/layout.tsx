export default function MerciLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="merci-layout">
      {children}
    </main>
  );
}
