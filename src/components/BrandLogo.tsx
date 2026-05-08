// BrandLogo Component - Displays brand logos with fallback
// مكون شعارات العلامات التجارية مع بديل

import React from 'react';

interface BrandLogoProps {
  brandId: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showFallback?: boolean;
}

// Logo mapping for all brands
const logoMap: Record<string, string> = {
  // Shipping Companies - شركات الشحن
  'dhl': '/images/brand-logos/dhl.svg',
  'fedex': '/images/brand-logos/fedex.png',
  'aramex': '/images/brand-logos/aramex.svg',
  'ups': '/images/brand-logos/ups.svg',
  'smsa': '/images/brand-logos/smsa.svg',
  'zajil': '/images/brand-logos/zajil.svg',
  'naqel': '/images/brand-logos/naqel.svg',
  'spl': '/images/brand-logos/spl.svg',
  'saudipost': '/images/brand-logos/spl.svg',
  'kwpost': '/images/brand-logos/kwpost.svg',
  'qpost': '/images/brand-logos/qpost.svg',
  'omanpost': '/images/brand-logos/omanpost.svg',
  'bahpost': '/images/brand-logos/bahpost.svg',
  'empost': '/images/brand-logos/empost.svg',
  
  // Banks - البنوك
  'alahli': '/images/brand-logos/alahli.svg',
  'alrajhi': '/images/brand-logos/alrajhi.svg',
  'riyad': '/images/brand-logos/riyad.svg',
  'sabb': '/images/brand-logos/sabb.svg',
  'bsf': '/images/brand-logos/bsf.svg',
  'alinma': '/images/brand-logos/alinma.svg',
  'albilad': '/images/brand-logos/albilad.svg',
  'aljazira': '/images/brand-logos/aljazira.svg',
  'anb': '/images/brand-logos/anb.svg',
  'fab': '/images/brand-logos/fab.svg',
  'enbd': '/images/brand-logos/enbd.svg',
  'adcb': '/images/brand-logos/adcb.svg',
  'mashreq': '/images/brand-logos/mashreq.svg',
  'dib': '/images/brand-logos/dib.svg',
  'adib': '/images/brand-logos/adib.svg',
  'nbk': '/images/brand-logos/nbk.svg',
  'qnb': '/images/brand-logos/qnb.svg',
  'bankmuscat': '/images/brand-logos/bankmuscat.svg',
  'stcpay': '/images/brand-logos/stcpay.svg',
  'stc_bank': '/images/brand-logos/stcpay.svg',
  
  // Government Payment Systems - أنظمة الدفع الحكومية
  'sadad': '/images/brand-logos/sadad.svg',
  'knet': '/images/brand-logos/knet.svg',
  'benefit': '/images/brand-logos/benefit.svg',
  'jaywan': '/images/brand-logos/jaywan.svg',
  'omannet': '/images/brand-logos/omannet.svg',
  'maal': '/images/brand-logos/omannet.svg',
};

// Size configurations - تكوين الأحجام
const sizeStyles: Record<string, { width: string; height: string; fontSize: string }> = {
  sm: { width: '32px', height: '32px', fontSize: '12px' },
  md: { width: '48px', height: '48px', fontSize: '14px' },
  lg: { width: '80px', height: '80px', fontSize: '18px' },
  xl: { width: '120px', height: '120px', fontSize: '24px' },
};

// Default brand colors for fallback
const brandColors: Record<string, string> = {
  dhl: '#FFCC00',
  fedex: '#4D148C',
  aramex: '#DC291E',
  ups: '#351C15',
  smsa: '#662D91',
  zajil: '#1C4587',
  naqel: '#E61838',
  alrajhi: '#006C35',
  alahli: '#00843D',
  fab: '#E0004D',
  enbd: '#003D7A',
  dib: '#006C35',
  nbk: '#003D7A',
  qnb: '#7E191B',
  sadad: '#F58220',
  knet: '#007A3D',
  benefit: '#F58220',
  jaywan: '#00A651',
  spl: '#006847',
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brandId,
  size = 'md',
  className = '',
  showFallback = true
}) => {
  const logoUrl = logoMap[brandId.toLowerCase()];
  const color = brandColors[brandId.toLowerCase()] || '#0EA5E9';
  const style = sizeStyles[size];

  if (!logoUrl) {
    if (!showFallback) return null;
    
    // Fallback: Display brand initials
    const initials = brandId.slice(0, 2).toUpperCase();
    return (
      <div
        className={`flex items-center justify-center rounded ${className}`}
        style={{
          width: style.width,
          height: style.height,
          backgroundColor: color,
          minWidth: style.width,
          minHeight: style.height,
        }}
      >
        <span
          className="font-bold text-white"
          style={{ fontSize: style.fontSize }}
        >
          {initials}
        </span>
      </div>
    );
  }

  const isSvg = logoUrl.endsWith('.svg');
  const imgStyle = isSvg
    ? { maxWidth: style.width, maxHeight: style.height, width: 'auto', height: 'auto' }
    : { width: style.width, height: style.height, objectFit: 'contain' as const };

  return (
    <img
      src={logoUrl}
      alt={brandId}
      className={className}
      style={imgStyle}
      onError={(e) => {
        if (showFallback) {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `<div class="flex items-center justify-center rounded" style="width:${style.width};height:${style.height};background-color:${color};min-width:${style.width};min-height:${style.height};">
              <span class="font-bold text-white" style="font-size:${style.fontSize}">${brandId.slice(0, 2).toUpperCase()}</span>
            </div>`;
          }
        }
      }}
    />
  );
};

export default BrandLogo;