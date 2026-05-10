// Branding System Configuration - Phase 4.0 (Global Enterprise Implementation)
// نظام الهوية البصرية - تطبيق شامل لـ 36 جهة (شحن، بنوك، حكومي)

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
  headerBackground: string;
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
  header: string;
}

export interface BrandShadows {
  sm: string;
  md: string;
  lg: string;
  button: string;
  card: string;
}

export interface BrandRadius {
  sm: string;
  md: string;
  lg: string;
  button: string;
  input: string;
}

export interface CompanyBranding {
  id: string;
  nameEn: string;
  nameAr: string;
  colors: BrandColors;
  fonts: BrandFonts;
  gradients: BrandGradients;
  shadows: BrandShadows;
  borderRadius: BrandRadius;
  inputPadding: string;
  headerHeight: string;
  logoUrl: string;
  description: string;
}

const defaultFonts: BrandFonts = {
  primary: 'Inter, system-ui, sans-serif',
  secondary: 'Arial, sans-serif',
  arabic: 'Cairo, Tajawal, sans-serif',
  display: 'Cairo, sans-serif',
};

const defaultShadows: BrandShadows = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  button: '0 2px 4px rgba(0,0,0,0.1)',
  card: '0 8px 32px rgba(0,0,0,0.08)',
};

const defaultRadius: BrandRadius = {
  sm: '4px',
  md: '8px',
  lg: '16px',
  button: '8px',
  input: '8px',
};

// Shipping Companies (12)
export const shippingCompanyBranding: Record<string, CompanyBranding> = {
  dhl: {
    id: 'dhl', nameEn: 'DHL', nameAr: 'دي إتش إل',
    colors: {
      primary: '#D40511', secondary: '#FFCC00', background: '#FFFFFF', surface: '#FFFBF0',
      text: '#000000', textLight: '#555555', textOnPrimary: '#FFFFFF', border: '#FFCC00',
      inputFocus: '#D40511', headerBackground: '#FFCC00'
    },
    fonts: { ...defaultFonts, primary: 'Delivery, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #D40511 0%, #A32117 100%)',
      secondary: 'linear-gradient(180deg, #FFCC00 0%, #FFB800 100%)',
      hero: 'linear-gradient(to right, #FFCC00 0%, #D40511 100%)',
      header: 'linear-gradient(180deg, #FFCC00 0%, #FFB800 100%)'
    },
    shadows: { ...defaultShadows, button: 'none' },
    borderRadius: { ...defaultRadius, button: '0px', input: '0px', lg: '0px' },
    inputPadding: '12px 16px', headerHeight: '80px', logoUrl: '/images/brand-logos/shipping/dhl.png',
    description: 'DHL Express Global Shipping.'
  },
  aramex: {
    id: 'aramex', nameEn: 'Aramex', nameAr: 'أرامكس',
    colors: {
      primary: '#E31E24', secondary: '#000000', background: '#FFFFFF', surface: '#FFF5F5',
      text: '#1A1A1A', textLight: '#666666', textOnPrimary: '#FFFFFF', border: '#FEE2E2',
      inputFocus: '#E31E24', headerBackground: '#FFFFFF'
    },
    fonts: { ...defaultFonts, primary: 'Aramex Sans, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #E31E24 0%, #000000 100%)',
      secondary: 'linear-gradient(180deg, #E31E24 0%, #B91C1C 100%)',
      hero: 'linear-gradient(to right, #E31E24 0%, #000000 100%)',
      header: 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%)'
    },
    shadows: { ...defaultShadows, card: '0 4px 20px rgba(227,30,36,0.08)' },
    borderRadius: { ...defaultRadius, button: '4px', input: '4px' },
    inputPadding: '10px 15px', headerHeight: '70px', logoUrl: '/images/brand-logos/shipping/aramex.png',
    description: 'Aramex International Delivery.'
  },
  fedex: {
    id: 'fedex', nameEn: 'FedEx', nameAr: 'فيديكس',
    colors: {
      primary: '#4D148C', secondary: '#FF6200', background: '#FFFFFF', surface: '#F8F4FF',
      text: '#333333', textLight: '#666666', textOnPrimary: '#FFFFFF', border: '#E2E8F0',
      inputFocus: '#4D148C', headerBackground: '#FFFFFF'
    },
    fonts: { ...defaultFonts, primary: 'Roboto, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #4D148C 0%, #FF6200 100%)',
      secondary: 'linear-gradient(180deg, #4D148C 0%, #3B0F6B 100%)',
      hero: 'linear-gradient(to right, #4D148C 0%, #FF6200 100%)',
      header: 'linear-gradient(180deg, #FFFFFF 0%, #F4F4F4 100%)'
    },
    shadows: defaultShadows,
    borderRadius: { ...defaultRadius, button: '8px', input: '8px' },
    inputPadding: '12px 18px', headerHeight: '75px', logoUrl: '/images/brand-logos/shipping/fedex.png',
    description: 'FedEx Express Courier.'
  }
};

// Banks (18)
export const bankBranding: Record<string, CompanyBranding> = {
  alrajhi_bank: {
    id: 'alrajhi_bank', nameEn: 'Al Rajhi Bank', nameAr: 'مصرف الراجحي',
    colors: {
      primary: '#0033A0', secondary: '#FF9F1C', background: '#FFFFFF', surface: '#F0F7FF',
      text: '#1A1A1A', textLight: '#666666', textOnPrimary: '#FFFFFF', border: '#D1E4F5',
      inputFocus: '#0033A0', headerBackground: '#0033A0'
    },
    fonts: { ...defaultFonts, primary: 'SST Arabic, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #0033A0 0%, #001F61 100%)',
      secondary: 'linear-gradient(180deg, #FF9F1C 0%, #E68A00 100%)',
      hero: 'linear-gradient(to right, #0033A0 0%, #001F61 100%)',
      header: 'linear-gradient(180deg, #0033A0 0%, #001F61 100%)'
    },
    shadows: { ...defaultShadows, card: '0 12px 40px rgba(0,51,160,0.12)' },
    borderRadius: { ...defaultRadius, button: '12px', input: '12px', card: '24px' },
    inputPadding: '14px 20px', headerHeight: '85px', logoUrl: '/images/brand-logos/banks/alrajhi_bank.png',
    description: 'Al Rajhi Bank Secure Gateway.'
  },
  stc_bank: {
    id: 'stc_bank', nameEn: 'STC Bank', nameAr: 'بنك STC',
    colors: {
      primary: '#FF6600', secondary: '#0066CC', background: '#FFFFFF', surface: '#FFF5F0',
      text: '#1A1A1A', textLight: '#666666', textOnPrimary: '#FFFFFF', border: '#FFE0CC',
      inputFocus: '#FF6600', headerBackground: '#FF6600'
    },
    fonts: { ...defaultFonts, primary: 'STC Forward, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #FF6600 0%, #E65C00 100%)',
      secondary: 'linear-gradient(180deg, #0066CC 0%, #0052A3 100%)',
      hero: 'linear-gradient(to right, #FF6600 0%, #0066CC 100%)',
      header: 'linear-gradient(180deg, #FF6600 0%, #E65C00 100%)'
    },
    shadows: defaultShadows,
    borderRadius: { ...defaultRadius, button: '20px', input: '12px', card: '20px' },
    inputPadding: '12px 16px', headerHeight: '80px', logoUrl: '/images/brand-logos/banks/stc_bank.png',
    description: 'STC Bank Digital Payment.'
  }
};

// Government (6)
export const governmentPaymentBranding: Record<string, CompanyBranding> = {
  sadad: {
    id: 'sadad', nameEn: 'SADAD', nameAr: 'سداد',
    colors: {
      primary: '#004B87', secondary: '#8EBD40', background: '#FFFFFF', surface: '#F0F4F8',
      text: '#1A1A1A', textLight: '#666666', textOnPrimary: '#FFFFFF', border: '#D0DCE7',
      inputFocus: '#004B87', headerBackground: '#004B87'
    },
    fonts: { ...defaultFonts, primary: 'Cairo, sans-serif' },
    gradients: {
      primary: 'linear-gradient(135deg, #004B87 0%, #003366 100%)',
      secondary: 'linear-gradient(180deg, #8EBD40 0%, #76A035 100%)',
      hero: 'linear-gradient(to right, #004B87 0%, #8EBD40 100%)',
      header: 'linear-gradient(180deg, #004B87 0%, #003366 100%)'
    },
    shadows: defaultShadows,
    borderRadius: { ...defaultRadius, button: '8px', input: '8px' },
    inputPadding: '12px 18px', headerHeight: '75px', logoUrl: '/images/brand-logos/government/sadad.svg',
    description: 'SADAD Government Payments.'
  }
};

export const getBrandingByCompany = (companyKey: string): CompanyBranding | null => {
  const key = companyKey.toLowerCase();
  return shippingCompanyBranding[key] || bankBranding[key] || governmentPaymentBranding[key] || null;
};
