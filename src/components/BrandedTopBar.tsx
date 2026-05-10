import React from 'react';
import { ArrowLeft } from 'lucide-react';
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
    <div className="w-full branded-header" style={{ borderBottom: '1px solid var(--dynamic-border)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-4">
            {logo && <img src={logo} alt="Logo" className="h-8 sm:h-10 object-contain" />}
            <div>
              <h2 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--dynamic-text)' }}>
                {branding?.nameAr || serviceName}
              </h2>
              <p className="text-xs opacity-70" style={{ color: 'var(--dynamic-text)' }}>
                الدفع الآمن - Secure Payment
              </p>
            </div>
          </div>

          {showBackButton && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-black/5 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">رجوع</span>
            </button>
          )}
        </div>
      </div>
      <div className="h-1 w-full" style={{ background: 'var(--dynamic-gradient-primary)' }} />
    </div>
  );
};

export default BrandedTopBar;
