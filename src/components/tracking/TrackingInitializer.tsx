'use client';

import { useEffect } from 'react';
import { initializeTracking } from '@/utils/tracking/tracking-manager';

export default function TrackingInitializer() {
    useEffect(() => {
        initializeTracking();
    }, []);

    return null;
}
