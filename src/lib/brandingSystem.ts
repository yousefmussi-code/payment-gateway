// Branding System Configuration - Phase 4.0
// نظام الهوية البصرية - تطبيق شامل للتصاميم والسمات الرسمية

export interface BrandColors {
  primary: string;
  secondary: string;
  accent?: string;
  background: string;
  surface: string;
  text: string;
  textLight: string;
  textOnPrimary: string;
  border: string;
}

export interface BrandFonts {
  primary: string;
  secondary: string;
  arabic: string;
}

export interface BrandGradients {
  primary: string;
  secondary: string;
  hero: string;
}

export interface BrandShadows {
  sm: string;
  md: string;
  lg: string;
}

export interface CompanyBranding {
  id: string;
  nameEn: string;
  nameAr: string;
  colors: BrandColors;
  fonts: BrandFonts;
  gradients: BrandGradients;
  shadows: BrandShadows;
  borderRadius: { sm: string, md: string, lg: string };
  logoUrl?: string;
  logoSvg?: string;
  websiteUrl?: string;
  description: string;
}

const defaultFonts: BrandFonts = {
  primary: 'Inter, system-ui, sans-serif',
  secondary: 'Arial, sans-serif',
  arabic: 'Cairo, Tajawal, sans-serif',
};

const defaultBorderRadius = { sm: '4px', md: '8px', lg: '12px' };

// Shipping Companies Branding
export const shippingCompanyBranding: Record<string, CompanyBranding> = {
  dhl: {
    id: 'dhl',
    nameEn: 'DHL',
    nameAr: 'دي إتش إل',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#FFFBF0',
      text: '#000000',
      textLight: '#555555',
      textOnPrimary: '#000000',
      border: '#FFCC00',
    },
    fonts: { ...defaultFonts, primary: 'Delivery, Frutiger Next, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #FFCC00 0%, #D40511 100%)',
      secondary: 'linear-gradient(180deg, #FFCC00 0%, #FFB800 100%)',
      hero: 'linear-gradient(to right, #FFCC00 0%, #D40511 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0,0,0,0.05)',
      md: '0 4px 6px rgba(0,0,0,0.1)',
      lg: '0 10px 15px rgba(0,0,0,0.1)',
    },
    borderRadius: { sm: '0px', md: '0px', lg: '0px' },
    logoSvg: '/images/brand-logos/shipping/dhl.png',
    description: 'Global leader in logistics and international shipping.',
  },
  fedex: {
    id: 'fedex',
    nameEn: 'FedEx',
    nameAr: 'فيديكس',
    colors: {
      primary: '#4D148C',
      secondary: '#FF6600',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F8F4FF',
      text: '#333333',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E0E0E0',
    },
    fonts: { ...defaultFonts, primary: 'Futura, Univers, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #4D148C 0%, #FF6600 100%)',
      secondary: 'linear-gradient(180deg, #4D148C 0%, #3B0F6B 100%)',
      hero: 'linear-gradient(to right, #4D148C 0%, #FF6600 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(77,20,140,0.1)',
      md: '0 4px 6px rgba(77,20,140,0.15)',
      lg: '0 10px 15px rgba(77,20,140,0.2)',
    },
    borderRadius: defaultBorderRadius,
    logoSvg: '/images/brand-logos/shipping/fedex.png',
    description: 'Reliable global shipping and delivery services.',
  },
  aramex: {
    id: 'aramex',
    nameEn: 'Aramex',
    nameAr: 'أرامكس',
    colors: {
      primary: '#E31E24',
      secondary: '#000000',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#FFF5F5',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#FEE2E2',
    },
    fonts: { ...defaultFonts, primary: 'Aramex Sans, Helvetica, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #E31E24 0%, #000000 100%)',
      secondary: 'linear-gradient(180deg, #E31E24 0%, #B91C1C 100%)',
      hero: 'linear-gradient(to right, #E31E24 0%, #000000 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(227,30,36,0.1)',
      md: '0 4px 6px rgba(227,30,36,0.15)',
      lg: '0 10px 15px rgba(227,30,36,0.2)',
    },
    borderRadius: { sm: '0px', md: '0px', lg: '0px' },
    logoSvg: '/images/brand-logos/shipping/aramex.png',
    description: 'Leading global provider of logistics and transportation solutions.',
  }
};

// Bank Branding
export const bankBranding: Record<string, CompanyBranding> = {
  alrajhi: {
    id: 'alrajhi',
    nameEn: 'Al Rajhi Bank',
    nameAr: 'مصرف الراجحي',
    colors: {
      primary: '#0054A6',
      secondary: '#003366',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F0F7FF',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E4F5',
    },
    fonts: { ...defaultFonts, primary: 'SST Arabic, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #0054A6 0%, #003366 100%)',
      secondary: 'linear-gradient(180deg, #0054A6 0%, #004080 100%)',
      hero: 'linear-gradient(to right, #0054A6 0%, #003366 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0,84,166,0.1)',
      md: '0 4px 6px rgba(0,84,166,0.15)',
      lg: '0 10px 15px rgba(0,84,166,0.2)',
    },
    borderRadius: { sm: '8px', md: '12px', lg: '16px' },
    logoSvg: '/images/brand-logos/banks/alrajhi_bank.png',
    description: 'The world\'s largest Islamic bank.',
  },
  alahli: {
    id: 'alahli',
    nameEn: 'SNB (AlAhli)',
    nameAr: 'البنك الأهلي السعودي',
    colors: {
      primary: '#00843D',
      secondary: '#FFFFFF',
      accent: '#D4AF37',
      background: '#FFFFFF',
      surface: '#F4F9F6',
      text: '#1A1A1A',
      textLight: '#4B5563',
      textOnPrimary: '#FFFFFF',
      border: '#D1E8DC',
    },
    fonts: { ...defaultFonts, primary: 'SNB Sans, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #00843D 0%, #006837 100%)',
      secondary: 'linear-gradient(180deg, #00843D 0%, #00A64D 100%)',
      hero: 'linear-gradient(to right, #00843D 0%, #D4AF37 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0,132,61,0.1)',
      md: '0 4px 6px rgba(0,132,61,0.15)',
      lg: '0 10px 15px rgba(0,132,61,0.2)',
    },
    borderRadius: defaultBorderRadius,
    logoSvg: '/images/brand-logos/banks/alahli_bank.png',
    description: 'The premier financial institution in Saudi Arabia.',
  }
};

// Government Payment Branding
export const governmentPaymentBranding: Record<string, CompanyBranding> = {
  sadad: {
    id: 'sadad',
    nameEn: 'SADAD',
    nameAr: 'سداد',
    colors: {
      primary: '#007A5E',
      secondary: '#231F20',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F1F9F7',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E9E4',
    },
    fonts: { ...defaultFonts, primary: 'SAMA Sans, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #007A5E 0%, #005C46 100%)',
      secondary: 'linear-gradient(180deg, #007A5E 0%, #009975 100%)',
      hero: 'linear-gradient(to right, #007A5E 0%, #231F20 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0,122,94,0.1)',
      md: '0 4px 6px rgba(0,122,94,0.15)',
      lg: '0 10px 15px rgba(0,122,94,0.2)',
    },
    borderRadius: defaultBorderRadius,
    logoSvg: '/images/brand-logos/government/sadad.svg',
    description: 'The central payment system for the Kingdom of Saudi Arabia.',
  }
};

// Get branding by company key
export const getBrandingByCompany = (companyKey: string): CompanyBranding | null => {
  const key = companyKey.toLowerCase();
  return shippingCompanyBranding[key] || governmentPaymentBranding[key] || bankBranding[key] || null;
};

// Get logo URL for a company
export const getCompanyLogoUrl = (companyKey: string): string | undefined => {
  const branding = getBrandingByCompany(companyKey);
  return branding?.logoSvg;
};

// Check if company has SVG logo
export const hasSvgLogo = (companyKey: string): boolean => {
  const branding = getBrandingByCompany(companyKey);
  return !!branding?.logoSvg;
};
