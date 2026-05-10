// BrandLogo Component - Displays brand logos with fallback
// مكون شعارات العلامات التجارية مع بديل

import React from 'react';

interface BrandLogoProps {
  brandId: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showFallback?: boolean;
}

// Logo mapping for all brands - خريطة الشعارات لجميع العلامات التجارية
const logoMap: Record<string, string> = {
  // Shipping Companies - شركات الشحن
  'dhl': '/images/brand-logos/shipping/dhl.png',
  'fedex': '/images/brand-logos/shipping/fedex.png',
  'aramex': '/images/brand-logos/shipping/aramex.png',
  'ups': '/images/brand-logos/shipping/ups.png',
  'smsa': '/images/brand-logos/shipping/smsa.svg',
  'zajil': '/images/brand-logos/shipping/zajil.png',
  'naqel': '/images/brand-logos/shipping/naqel.jpg',
  'spl': '/images/brand-logos/shipping/saudipost.png',
  'saudipost': '/images/brand-logos/shipping/saudipost.png',
  'kwpost': '/images/brand-logos/shipping/kwpost.png',
  'qpost': '/images/brand-logos/shipping/qpost.png',
  'qatarpost': '/images/brand-logos/shipping/qpost.png',
  'omanpost': '/images/brand-logos/shipping/omanpost.png',
  'bahpost': '/images/brand-logos/shipping/bahpost.png',
  'bahrainpost': '/images/brand-logos/shipping/bahpost.png',

  // Banks - البنوك
  'alrajhi': '/images/brand-logos/banks/alrajhi_bank.png',
  'alrajhi_bank': '/images/brand-logos/banks/alrajhi_bank.png',
  'alahli': '/images/brand-logos/banks/alahli_bank.png',
  'alahli_bank': '/images/brand-logos/banks/alahli_bank.png',
  'samba': '/images/brand-logos/banks/samba_bank.png',
  'samba_bank': '/images/brand-logos/banks/samba_bank.png',
  'stc_bank': '/images/brand-logos/banks/stc_bank.png',
  'emirates_nbd': '/images/brand-logos/banks/emirates_nbd.png',
  'fab': '/images/brand-logos/banks/fab.png',
  'dib': '/images/brand-logos/banks/dib.png',
  'nbk': '/images/brand-logos/banks/nbk.png',
  'kfh': '/images/brand-logos/banks/kfh.png',
  'gulf_bank': '/images/brand-logos/banks/gulf_bank.png',
  'qnb': '/images/brand-logos/banks/qnb.png',
  'cbq': '/images/brand-logos/banks/cbq.png',
  'doha_bank': '/images/brand-logos/banks/doha_bank.png',
  'bank_muscat': '/images/brand-logos/banks/bank_muscat.png',
  'national_bank_oman': '/images/brand-logos/banks/national_bank_oman.png',
  'nbb': '/images/brand-logos/banks/nbb.png',
  'bisb': '/images/brand-logos/banks/bisb.png',

  // Government Payment Systems - أنظمة الدفع الحكومية
  'sadad': '/images/brand-logos/government/sadad.svg',
  'jaywan': '/images/brand-logos/government/jaywan.svg',
  'knet': '/images/brand-logos/government/KW.png',
  'benefit': '/images/brand-logos/government/BH.png',
  'maal': '/images/brand-logos/government/OM.svg',
  'qatar_payment': '/images/brand-logos/government/QA.png',
};

// Size configurations - تكوين الأحجام
const sizeStyles: Record<string, { width: string; height: string; fontSize: string }> = {
  sm: { width: '32px', height: '32px', fontSize: '12px' },
  md: { width: '48px', height: '48px', fontSize: '14px' },
  lg: { width: '80px', height: '80px', fontSize: '18px' },
  xl: { width: '120px', height: '120px', fontSize: '24px' },
};

// Default brand colors for fallback - الألوان الافتراضية للعلامات التجارية
const brandColors: Record<string, string> = {
  // Shipping - الشحن
  dhl: '#FFCC00',
  fedex: '#4D148C',
  aramex: '#DC291E',
  ups: '#351C15',
  smsa: '#662D91',
  zajil: '#1C4587',
  naqel: '#E61838',
  spl: '#006847',
  saudiapost: '#006847',
  kwpost: '#007A33',
  kuwaitpost: '#007A33',
  qpost: '#003366',
  qatarpost: '#003366',
  omanpost: '#003366',
  bahpost: '#EF3F32',
  bahrainpost: '#EF3F32',
  empost: '#C8102E',
  bahri: '#003366',
  // Banks - البنوك
  alrajhi: '#006C35',
  alahli: '#00843D',
  alahlibank: '#00843D',
  fab: '#E0004D',
  firstabudhabi: '#E0004D',
  enbd: '#003D7A',
  emiratesnbd: '#003D7A',
  dib: '#006C35',
  nbk: '#003D7A',
  nationalbank: '#003D7A',
  qnb: '#7E191B',
  bankmuscat: '#006633',
  adcb: '#ED1C24',
  adib: '#003D7A',
  mashreq: '#003D7A',
  stcpay: '#4F225E',
  stc_bank: '#4F225E',
  sabb: '#004A99',
  riyad: '#0066B2',
  riyadbank: '#0066B2',
  samba: '#003D7A',
  alinma: '#00A651',
  albilad: '#C8102E',
  kfh: '#006C35',
  kuwaitfinance: '#006C35',
  boubyan: '#003D7A',
  cbq: '#003D7A',
  // Government - حكومي
  sadad: '#F58220',
  knet: '#007A3D',
  benefit: '#F58220',
  jaywan: '#00A651',
  omannet: '#003366',
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
    
    // Fallback: Display brand initials - بديل: عرض الأحرف الأولى
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