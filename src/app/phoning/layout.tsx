import React from 'react';

export default function PhoningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="phoning-layout">
      {children}
    </div>
  );
}
