'use client';

import { useState, useEffect } from 'react';
import { markAsInternalUser, markAsExternalUser } from '@/services/trafficFilter';

const InternalUserMarker = () => {
  const [isInternal, setIsInternal] = useState(false);

  useEffect(() => {
    const internalStatus = localStorage.getItem('isInternalUser') === 'true';
    setIsInternal(internalStatus);
  }, []);

  const handleToggle = () => {
    if (isInternal) {
      markAsExternalUser();
    } else {
      markAsInternalUser();
    }
    setIsInternal(!isInternal);
  };

  // Only show in development or with admin query param
  if (process.env.NODE_ENV !== 'development' && !window.location.search.includes('admin')) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg z-50 text-sm">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isInternal}
          onChange={handleToggle}
          className="form-checkbox h-4 w-4 text-blue-600"
        />
        <span>Utilisateur Interne</span>
      </label>
    </div>
  );
};

export default InternalUserMarker;
