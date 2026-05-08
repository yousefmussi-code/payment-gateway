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
  websiteUrl?: string;
  description: string;
}

const defaultFonts: BrandFonts = {
  primary: 'Inter, system-ui, sans-serif',
  secondary: 'Arial, sans-serif',
  arabic: 'Cairo, Tajawal, sans-serif',
};

const defaultBorderRadius = { sm: '0px', md: '0px', lg: '0px' };

export const shippingCompanyBranding: Record<string, CompanyBranding> = {
  aramex: {
    id: 'aramex',
    nameEn: 'Aramex',
    nameAr: 'أرامكس',
    colors: {
      primary: '#DC291E',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F8F8F8',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E5E5E5',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #DC291E 0%, #A32117 100%)',
      secondary: 'linear-gradient(180deg, #DC291E 0%, #8B1A12 100%)',
      hero: 'linear-gradient(to right, #DC291E 0%, #A32117 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(220, 41, 30, 0.08)',
      md: '0 4px 6px -1px rgba(220, 41, 30, 0.15)',
      lg: '0 10px 15px -3px rgba(220, 41, 30, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'شركة عالمية لخدمات الشحن السريع واللوجستيات',
  },
  dhl: {
    id: 'dhl',
    nameEn: 'DHL',
    nameAr: 'دي إتش إل',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#FFF9E6',
      text: '#000000',
      textLight: '#555555',
      textOnPrimary: '#000000',
      border: '#FFCC00',
    },
    fonts: {
      ...defaultFonts,
      primary: 'Delivery, Helvetica, Arial, sans-serif',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #FFCC00 0%, #FFB800 100%)',
      secondary: 'linear-gradient(135deg, #D40511 0%, #A00410 100%)',
      hero: 'linear-gradient(90deg, #FFCC00 0%, #D40511 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(255, 204, 0, 0.10)',
      md: '0 4px 6px -1px rgba(255, 204, 0, 0.20)',
      lg: '0 10px 15px -3px rgba(255, 204, 0, 0.30)',
    },
    borderRadius: defaultBorderRadius,
    description: 'شبكة شحن عالمية توفر خدمات التوصيل السريع الدولي والمحلي',
  },
  fedex: {
    id: 'fedex',
    nameEn: 'FedEx',
    nameAr: 'فيديكس',
    colors: {
      primary: '#660099',
      secondary: '#FF6600',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F5F0FA',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E0D4ED',
    },
    fonts: {
      ...defaultFonts,
      primary: 'FedEx Sans, Arial, sans-serif',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #660099 0%, #4D148C 100%)',
      secondary: 'linear-gradient(135deg, #FF6600 0%, #FF8533 100%)',
      hero: 'linear-gradient(to right, #660099 0%, #FF6600 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(102, 0, 153, 0.08)',
      md: '0 4px 6px -1px rgba(102, 0, 153, 0.15)',
      lg: '0 10px 15px -3px rgba(102, 0, 153, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'خدمات شحن دولية موثوقة مع تتبع فوري للشحنات',
  },
  ups: {
    id: 'ups',
    nameEn: 'UPS',
    nameAr: 'يو بي إس',
    colors: {
      primary: '#351C15',
      secondary: '#FFB500',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#FAF8F7',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E5E0DC',
    },
    fonts: {
      ...defaultFonts,
      primary: 'UPS Sans, Arial, sans-serif',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #351C15 0%, #1F0F0A 100%)',
      secondary: 'linear-gradient(135deg, #FFB500 0%, #FFC933 100%)',
      hero: 'linear-gradient(to right, #351C15 0%, #FFB500 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(53, 28, 21, 0.08)',
      md: '0 4px 6px -1px rgba(53, 28, 21, 0.15)',
      lg: '0 10px 15px -3px rgba(53, 28, 21, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'حلول لوجستية متكاملة وخدمات شحن سريعة حول العالم',
  },
  smsa: {
    id: 'smsa',
    nameEn: 'SMSA Express',
    nameAr: 'سمسا إكسبرس',
    colors: {
      primary: '#004B87',
      secondary: '#E31E24',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F7F3FA',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E4D9ED',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #004B87 0%, #003057 100%)',
      secondary: 'linear-gradient(135deg, #E31E24 0%, #B3171C 100%)',
      hero: 'linear-gradient(to right, #004B87 0%, #E31E24 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 75, 135, 0.08)',
      md: '0 4px 6px -1px rgba(0, 75, 135, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 75, 135, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'أكبر شركة شحن سعودية متخصصة في التوصيل السريع',
  },
  spl: {
    id: 'spl',
    nameEn: 'Saudi Post (SPL)',
    nameAr: 'سبل (البريد السعودي)',
    colors: {
      primary: '#006847',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F5FAF7',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E8DC',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #006847 0%, #004D35 100%)',
      secondary: 'linear-gradient(180deg, #006847 0%, #009B42 100%)',
      hero: 'linear-gradient(to right, #006847 0%, #004D35 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 104, 71, 0.08)',
      md: '0 4px 6px -1px rgba(0, 104, 71, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 104, 71, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'المشغل الوطني للبريد والخدمات اللوجستية في السعودية',
  },
};

export const governmentPaymentBranding: Record<string, CompanyBranding> = {
  sadad: {
    id: 'sadad',
    nameEn: 'SADAD',
    nameAr: 'سداد',
    colors: {
      primary: '#F58220',
      secondary: '#E67317',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#FFF8F2',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#FFE5D0',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #F58220 0%, #E67317 100%)',
      secondary: 'linear-gradient(180deg, #F58220 0%, #E67317 100%)',
      hero: 'linear-gradient(to right, #F58220 0%, #E67317 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(245, 130, 32, 0.08)',
      md: '0 4px 6px -1px rgba(245, 130, 32, 0.15)',
      lg: '0 10px 15px -3px rgba(245, 130, 32, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'نظام المدفوعات الوطني السعودي',
  },
  knet: {
    id: 'knet',
    nameEn: 'KNET',
    nameAr: 'كي نت',
    colors: {
      primary: '#007A3D',
      secondary: '#CE1126',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F5FAF7',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E8DC',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #007A3D 0%, #005F2F 100%)',
      secondary: 'linear-gradient(135deg, #CE1126 0%, #A00E1D 100%)',
      hero: 'linear-gradient(to right, #007A3D 0%, #CE1126 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 122, 61, 0.08)',
      md: '0 4px 6px -1px rgba(0, 122, 61, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 122, 61, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'شركة الخدمات المصرفية الآلية المشتركة في الكويت',
  },
};

export const bankBranding: Record<string, CompanyBranding> = {
  alahli: {
    id: 'alahli',
    nameEn: 'SNB (AlAhli)',
    nameAr: 'البنك الأهلي السعودي',
    colors: {
      primary: '#00843D',
      secondary: '#FFFFFF',
      accent: '#D4AF37',
      background: '#FFFFFF',
      surface: '#F8F9FA',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D4DDE6',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #00843D 0%, #005C2B 100%)',
      secondary: 'linear-gradient(180deg, #00843D 0%, #00AD50 100%)',
      hero: 'linear-gradient(to right, #00843D 0%, #005C2B 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 132, 61, 0.08)',
      md: '0 4px 6px -1px rgba(0, 132, 61, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 132, 61, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'أكبر بنك في المملكة العربية السعودية',
  },
  alrajhi: {
    id: 'alrajhi',
    nameEn: 'Al Rajhi Bank',
    nameAr: 'مصرف الراجحي',
    colors: {
      primary: '#006C35',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#F5FAF7',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E8DC',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #006C35 0%, #004D26 100%)',
      secondary: 'linear-gradient(180deg, #006C35 0%, #009B42 100%)',
      hero: 'linear-gradient(to right, #006C35 0%, #004D26 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 108, 53, 0.08)',
      md: '0 4px 6px -1px rgba(0, 108, 53, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 108, 53, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    description: 'أكبر بنك إسلامي في العالم',
  },
};

export const getBrandingByCompany = (companyKey: string): CompanyBranding | null => {
  const key = companyKey.toLowerCase();
  return shippingCompanyBranding[key] || governmentPaymentBranding[key] || bankBranding[key] || null;
};
