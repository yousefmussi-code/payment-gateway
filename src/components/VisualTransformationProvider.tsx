import React, { useEffect, useState } from 'react';
import { detectEntityFromURL, getEntityIdentity } from '@/lib/dynamicIdentity';
import { Helmet } from 'react-helmet-async';

interface VisualTransformationProviderProps {
  children: React.ReactNode;
}

/**
 * VisualTransformationProvider
 * implements PHASE 3: INJECT CLONED DESIGN
 * Dynamically applies official visual styles (CSS, Meta, Theme)
 */
export const VisualTransformationProvider: React.FC<VisualTransformationProviderProps> = ({ children }) => {
  const [identity, setIdentity] = useState<any>(null);

  useEffect(() => {
    const entity = detectEntityFromURL();
    if (entity) {
      const entityIdentity = getEntityIdentity(entity);
      if (entityIdentity) {
        setIdentity(entityIdentity);
        applyDeepCloning(entityIdentity);
      }
    }
  }, []);

  const applyDeepCloning = (id: any) => {
    const root = document.documentElement;
    root.style.setProperty('--dynamic-primary', id.colors.primary);
    root.style.setProperty('--dynamic-secondary', id.colors.secondary);
    root.style.setProperty('--dynamic-background', id.colors.background);
    root.style.setProperty('--dynamic-button-radius', id.buttons.style === 'rounded' ? '24px' : '0px');
    
    // Add font inject logic if needed
    console.log(`[VISUAL_TRANSFORMATION] Applied: ${id.name_ar || 'Identity'}`);
  };

  return (
    <div 
      className={`visual-cloned-container ${identity ? 'is-cloned' : 'is-template'}`}
      style={{ 
        backgroundColor: identity?.colors.background || 'inherit'
      }}
    >
      {identity && (
        <Helmet>
          <meta name="theme-color" content={identity.colors.primary} />
        </Helmet>
      )}
      {children}
    </div>
  );
};
