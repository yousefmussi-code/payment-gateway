import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

interface ShadowIsolatedPageProps {
  children: React.ReactNode;
  css?: string;
  className?: string;
}

export const ShadowIsolatedPage: React.FC<ShadowIsolatedPageProps> = ({ children, css, className }) => {
  const shadowRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shadowRootRef.current && !shadowRootRef.current.shadowRoot) {
      const shadow = shadowRootRef.current.attachShadow({ mode: 'open' });
      
      // Inject CSS if provided
      if (css) {
        const style = document.createElement('style');
        style.textContent = css;
        shadow.appendChild(style);
      }

      // We use a container inside shadow to render React children
      const container = document.createElement('div');
      container.className = className || 'shadow-content';
      shadow.appendChild(container);
      
      const root = createRoot(container);
      root.render(<>{children}</>);
    }
  }, [children, css, className]);

  return <div ref={shadowRootRef} />;
};
