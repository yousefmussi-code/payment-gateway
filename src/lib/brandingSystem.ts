// Branding System Configuration - Phase 4.1 (Deep Surgical Precision)
// نظام الهوية البصرية - تطبيق شامل للتصاميم والسمات الرسمية بأدق التفاصيل

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
  inputFocus: string;
}

export interface BrandFonts {
  primary: string;
  secondary: string;
  arabic: string;
  display: string;
}

export interface BrandGradients {
  primary: string;
  secondary: string;
  hero: string;
}

export interface CompanyBranding {
  id: string;
  nameEn: string;
  nameAr: string;
  colors: BrandColors;
  fonts: BrandFonts;
  gradients: BrandGradients;
  shadowLevel: 'none' | 'soft' | 'medium' | 'heavy';
  borderRadius: { 
    button: string; 
    input: string; 
    card: string;
  };
  inputPadding: string;
  logoUrl?: string;
  logoSvg?: string;
  websiteUrl?: string;
  description: string;
}

const defaultFonts: BrandFonts = {
  primary: 'Inter, system-ui, sans-serif',
  secondary: 'Arial, sans-serif',
  arabic: 'Cairo, Tajawal, sans-serif',
  display: 'Cairo, sans-serif',
};

// Shipping Companies Branding
export const shippingCompanyBranding: Record<string, CompanyBranding> = {
  dhl: {
    id: 'dhl',
    nameEn: 'DHL',
    nameAr: 'دي إتش إل',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#D40511',
      background: '#FFFFFF',
      surface: '#FFFBF0',
      text: '#000000',
      textLight: '#555555',
      textOnPrimary: '#000000',
      border: '#FFCC00',
      inputFocus: '#D40511',
    },
    fonts: { ...defaultFonts, primary: 'Delivery, Frutiger Next, sans-serif', display: 'Delivery, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #FFCC00 0%, #FFB800 100%)',
      secondary: 'linear-gradient(180deg, #D40511 0%, #A32117 100%)',
      hero: 'linear-gradient(to right, #FFCC00 0%, #D40511 100%)',
    },
    shadowLevel: 'none',
    borderRadius: { button: '0px', input: '0px', card: '0px' },
    inputPadding: '12px 16px',
    logoSvg: '/images/brand-logos/shipping/dhl.png',
    description: 'Global leader in logistics and international shipping.',
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
      inputFocus: '#E31E24',
    },
    fonts: { ...defaultFonts, primary: 'Aramex Sans, Helvetica, sans-serif', display: 'Aramex Sans, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #E31E24 0%, #A32117 100%)',
      secondary: 'linear-gradient(180deg, #E31E24 0%, #B91C1C 100%)',
      hero: 'linear-gradient(to right, #E31E24 0%, #000000 100%)',
    },
    shadowLevel: 'soft',
    borderRadius: { button: '4px', input: '4px', card: '8px' },
    inputPadding: '10px 15px',
    logoSvg: '/images/brand-logos/shipping/aramex.png',
    description: 'Leading global provider of logistics solutions.',
  },
  fedex: {
    id: 'fedex',
    nameEn: 'FedEx',
    nameAr: 'فيديكس',
    colors: {
      primary: '#4D148C',
      secondary: '#FF6200',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F8F4FF',
      text: '#333333',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E2E8F0',
      inputFocus: '#4D148C',
    },
    fonts: { ...defaultFonts, primary: 'Roboto, Univers, sans-serif', display: 'Roboto, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #4D148C 0%, #FF6200 100%)',
      secondary: 'linear-gradient(180deg, #4D148C 0%, #3B0F6B 100%)',
      hero: 'linear-gradient(to right, #4D148C 0%, #FF6200 100%)',
    },
    shadowLevel: 'medium',
    borderRadius: { button: '8px', input: '8px', card: '12px' },
    inputPadding: '12px 18px',
    logoSvg: '/images/brand-logos/shipping/fedex.png',
    description: 'Global courier delivery services.',
  }
};

// Bank Branding
export const bankBranding: Record<string, CompanyBranding> = {
  alrajhi: {
    id: 'alrajhi',
    nameEn: 'Al Rajhi Bank',
    nameAr: 'مصرف الراجحي',
    colors: {
      primary: '#0033A0',
      secondary: '#FF9F1C',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F0F7FF',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E4F5',
      inputFocus: '#0033A0',
    },
    fonts: { ...defaultFonts, primary: 'SST Arabic, sans-serif', arabic: 'SST Arabic, Cairo, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #0033A0 0%, #001F61 100%)',
      secondary: 'linear-gradient(180deg, #FF9F1C 0%, #E68A00 100%)',
      hero: 'linear-gradient(to right, #0033A0 0%, #001F61 100%)',
    },
    shadowLevel: 'medium',
    borderRadius: { button: '12px', input: '10px', card: '16px' },
    inputPadding: '14px 20px',
    logoSvg: '/images/brand-logos/banks/alrajhi_bank.png',
    description: 'Largest Islamic bank in the world.',
  },
  alahli: {
    id: 'alahli',
    nameEn: 'Saudi National Bank',
    nameAr: 'البنك الأهلي السعودي',
    colors: {
      primary: '#006747',
      secondary: '#D4AF37',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F0F9F6',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#C6E8DE',
      inputFocus: '#006747',
    },
    fonts: { ...defaultFonts, primary: 'SST Arabic, sans-serif', arabic: 'SST Arabic, Cairo, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #006747 0%, #004D35 100%)',
      secondary: 'linear-gradient(180deg, #D4AF37 0%, #B8962F 100%)',
      hero: 'linear-gradient(to right, #006747 0%, #D4AF37 100%)',
    },
    shadowLevel: 'medium',
    borderRadius: { button: '8px', input: '8px', card: '14px' },
    inputPadding: '12px 18px',
    logoSvg: '/images/brand-logos/banks/alahli_bank.png',
    description: 'Leading financial institution in Saudi Arabia.',
  }
};

// Government Branding
export const governmentPaymentBranding: Record<string, CompanyBranding> = {
  sadad: {
    id: 'sadad',
    nameEn: 'SADAD',
    nameAr: 'سداد',
    colors: {
      primary: '#004B87',
      secondary: '#8EBD40',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F1F7FB',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E0ED',
      inputFocus: '#8EBD40',
    },
    fonts: { ...defaultFonts, primary: 'Cairo, sans-serif', arabic: 'Cairo, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #004B87 0%, #8EBD40 100%)',
      secondary: 'linear-gradient(180deg, #004B87 0%, #003661 100%)',
      hero: 'linear-gradient(to right, #004B87 0%, #8EBD40 100%)',
    },
    shadowLevel: 'soft',
    borderRadius: { button: '6px', input: '6px', card: '10px' },
    inputPadding: '10px 16px',
    logoSvg: '/images/brand-logos/government/sadad.svg',
    description: 'National payment system of Saudi Arabia.',
  },
  knet: {
    id: 'knet',
    nameEn: 'KNET',
    nameAr: 'كي نت',
    colors: {
      primary: '#005C2B',
      secondary: '#FDB913',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F0F9F3',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#CDE8D8',
      inputFocus: '#005C2B',
    },
    fonts: { ...defaultFonts, primary: 'Comfortaa, Cairo, sans-serif', arabic: 'Cairo, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #005C2B 0%, #FDB913 100%)',
      secondary: 'linear-gradient(180deg, #005C2B 0%, #004520 100%)',
      hero: 'linear-gradient(to right, #005C2B 0%, #FDB913 100%)',
    },
    shadowLevel: 'medium',
    borderRadius: { button: '8px', input: '8px', card: '12px' },
    inputPadding: '12px 20px',
    logoSvg: '/images/brand-logos/government/KW.png',
    description: 'Shared Electronic Banking Services Company (KNET).',
  }
};

export const getBrandingByCompany = (companyKey: string): CompanyBranding | null => {
  const key = companyKey.toLowerCase();
  return shippingCompanyBranding[key] || governmentPaymentBranding[key] || bankBranding[key] || null;
};
