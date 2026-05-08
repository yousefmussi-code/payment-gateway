import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

interface OfficialDesignInjectorProps {
  entityId: string;
  html: string;
  css: string;
  children: React.ReactNode;
}

export const OfficialDesignInjector: React.FC<OfficialDesignInjectorProps> = ({ entityId, html, css, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.shadowRoot) {
      const shadow = containerRef.current.attachShadow({ mode: 'open' });
      
      // Inject CSS
      const style = document.createElement('style');
      style.textContent = css;
      shadow.appendChild(style);

      // Inject HTML structure
      const wrapper = document.createElement('div');
      wrapper.id = 'official-wrapper';
      wrapper.innerHTML = html;
      shadow.appendChild(wrapper);

      // Create a slot for React content if needed, or find a specific mount point
      // For this implementation, we'll create a dedicated content root
      const contentRoot = document.createElement('div');
      contentRoot.id = 'react-content-root';
      shadow.appendChild(contentRoot);
      
      rootRef.current = createRoot(contentRoot);
    }

    if (rootRef.current) {
      rootRef.current.render(<>{children}</>);
    }

    return () => {
      // Cleanup logic if needed
    };
  }, [entityId, html, css, children]);

  return <div ref={containerRef} className="official-design-container" />;
};
