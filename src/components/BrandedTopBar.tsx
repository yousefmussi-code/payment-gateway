import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { detectEntityFromURL, getEntityLogo } from '@/lib/dynamicIdentity';
import { getBrandingByCompany } from '@/lib/brandingSystem';

interface BrandedTopBarProps {
  serviceName: string;
  showBackButton?: boolean;
  backPath?: string;
}

const BrandedTopBar: React.FC<BrandedTopBarProps> = ({
  serviceName,
  showBackButton = true,
  backPath,
}) => {
  const navigate = useNavigate();
  const entity = detectEntityFromURL();
  const logo = getEntityLogo(entity || '');
  const branding = getBrandingByCompany(entity || '');

  const handleBack = () => {
    if (backPath) navigate(backPath);
    else navigate(-1);
  };

  return (
    <div 
      className="w-full branded-header transition-all duration-300" 
      style={{ 
        height: 'var(--dynamic-header-height, 64px)',
        background: 'var(--dynamic-gradient-header, #FFFFFF)',
        borderBottom: '1px solid var(--dynamic-border)',
        boxShadow: 'var(--dynamic-shadow-md)'
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            {logo && (
              <img 
                src={logo} 
                alt="Logo" 
                className="h-2/3 max-h-12 object-contain" 
                loading="eager"
              />
            )}
            <div className="hidden sm:block">
              <h2 className="text-lg font-bold" style={{ color: 'var(--dynamic-text)' }}>
                {branding?.nameAr || serviceName}
              </h2>
              <p className="text-xs opacity-70" style={{ color: 'var(--dynamic-text)' }}>
                الدفع الآمن - Secure Payment
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-xs font-medium text-white">Encrypted</span>
            </div>
            
            {showBackButton && (
              <button
                onClick={handleBack}
                className="p-2 rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" style={{ color: 'var(--dynamic-text)' }} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandedTopBar;
