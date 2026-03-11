export default function SimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f81ba]/5 to-[#d2edfa]/5">
      {children}
    </div>
  );
} 