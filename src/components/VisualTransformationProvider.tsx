import React, { useEffect, useState } from 'react';
import { detectEntityFromURL, applyDynamicIdentity, getEntityLogo } from '@/lib/dynamicIdentity';
import { Helmet } from 'react-helmet-async';

interface VisualTransformationProviderProps {
  children: React.ReactNode;
}

export const VisualTransformationProvider: React.FC<VisualTransformationProviderProps> = ({ children }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const entity = detectEntityFromURL();
    if (entity) {
      applyDynamicIdentity(entity);
      setActive(true);
    }
  }, []);

  return (
    <div className={`app-container ${active ? 'is-branded' : 'is-default'}`}>
      {children}
    </div>
  );
};
