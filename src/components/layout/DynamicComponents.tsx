'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ClientLayout = dynamic(() => import('@/components/layout/ClientLayout'), { 
  ssr: false,
  loading: () => <div className="min-h-screen" /> 
});

const ConversionTracker = dynamic(() => import('@/components/tracking/ConversionTracker'), { 
  ssr: false 
});

const TrackingInitializer = dynamic(() => import('@/components/tracking/TrackingInitializer'), { 
  ssr: false 
});

const TeamAuth = dynamic(() => import('@/components/admin/TeamAuth'), { 
  ssr: false 
});

const Analytics = dynamic(() => import('@/components/analytics/Analytics'), { 
  ssr: false 
});

interface DynamicComponentsProps {
  children: React.ReactNode;
}

export default function DynamicComponents({ children }: DynamicComponentsProps) {
  return (
    <>
      <ClientLayout>
        {children}
      </ClientLayout>
      <Analytics />
      <TrackingInitializer />
      <ConversionTracker />
      <TeamAuth />
    </>
  );
}
