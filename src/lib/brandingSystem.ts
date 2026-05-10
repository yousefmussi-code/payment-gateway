// Branding System Configuration
// نظام الهوية البصرية - مع روابط SVG الرسمية

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

const defaultBorderRadius = { sm: '0px', md: '0px', lg: '0px' };

// Shipping Companies Branding
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
    logoUrl: 'https://www.aramex.com/etc/clientlibs/aramex/images/logo.svg',
    logoSvg: '/images/brand-logos/aramex.svg',
    websiteUrl: 'https://www.aramex.com/',
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
    fonts: defaultFonts,
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
    logoUrl: 'https://www.dhl.com/etc/designs/dhl/images/logo/dhl-logo.svg',
    logoSvg: '/images/brand-logos/dhl.svg',
    websiteUrl: 'https://www.dhl.com/',
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
    fonts: defaultFonts,
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
    logoUrl: 'https://www.fedex.com/etc/designs/fedex/images/logo/fedex-logo.svg',
    logoSvg: '/images/brand-logos/fedex.svg',
    websiteUrl: 'https://www.fedex.com/',
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
    fonts: defaultFonts,
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
    logoUrl: 'https://www.ups.com/assets/images/ups-logo.svg',
    logoSvg: '/images/brand-logos/ups.svg',
    websiteUrl: 'https://www.ups.com/',
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
    logoUrl: 'https://www.smsaexpress.com/assets/images/logo.svg',
    logoSvg: '/images/brand-logos/smsa.svg',
    websiteUrl: 'https://www.smsaexpress.com/',
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
    logoUrl: 'https://www.se.com.sa/assets/images/logo.svg',
    logoSvg: '/images/brand-logos/spl.svg',
    websiteUrl: 'https://www.splonline.com.sa/',
    description: 'المشغل الوطني للبريد والخدمات اللوجستية في السعودية',
  },
};

// Government Payment Systems Branding
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
    logoUrl: 'https://www.sadad.com/assets/images/sadad-logo.svg',
    logoSvg: '/images/brand-logos/sadad.svg',
    websiteUrl: 'https://www.sadad.com/',
    description: 'نظام المدفوعات الوطني السعودي',
  },
  knet: {
    id: 'knet',
    nameEn: 'KNET',
    nameAr: 'كي نت',
    colors: {
      primary: '#003DA5',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F5F8FF',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D0D9ED',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #003DA5 0%, #002880 100%)',
      secondary: 'linear-gradient(135deg, #FFD700 0%, #FFCC00 100%)',
      hero: 'linear-gradient(to right, #003DA5 0%, #FFD700 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 61, 165, 0.08)',
      md: '0 4px 6px -1px rgba(0, 61, 165, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 61, 165, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.knet.gov.kw',
    logoSvg: '/images/brand-logos/knet.svg',
    websiteUrl: 'https://www.knet.gov.kw',
    description: 'شبكة الدفع الإلكتروني في الكويت',
  },
  absher: {
    id: 'absher',
    nameEn: 'Absher',
    nameAr: 'أبشر',
    colors: {
      primary: '#006847',
      secondary: '#004D35',
      accent: '#D4AF37',
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
    logoUrl: 'https://www.absher.gov.sa/assets/images/logo.svg',
    logoSvg: '/images/brand-logos/absher.svg',
    websiteUrl: 'https://www.absher.sa/',
    description: 'منصة الخدمات الحكومية الإلكترونية في السعودية',
  },
  jaywan: {
    id: 'jaywan',
    nameEn: 'Jaywan',
    nameAr: 'جيوان',
    colors: {
      primary: '#CE1126',
      secondary: '#00732F',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#FDF5F5',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#F5D5D6',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #CE1126 0%, #A00E1D 100%)',
      secondary: 'linear-gradient(135deg, #00732F 0%, #005C26 100%)',
      hero: 'linear-gradient(to right, #CE1126 0%, #00732F 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(206, 17, 38, 0.08)',
      md: '0 4px 6px -1px rgba(206, 17, 38, 0.15)',
      lg: '0 10px 15px -3px rgba(206, 17, 38, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.jaywan.ae',
    logoSvg: '/images/brand-logos/jaywan.svg',
    websiteUrl: 'https://www.jaywan.ae',
    description: 'نظام الدفع الإلكتروني في الإمارات العربية المتحدة',
  },
  benefit: {
    id: 'benefit',
    nameEn: 'BENEFIT',
    nameAr: 'بنفت',
    colors: {
      primary: '#1B3B6F',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F5F7FA',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D0D9E6',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #1B3B6F 0%, #132B50 100%)',
      secondary: 'linear-gradient(135deg, #FFD700 0%, #FFCC00 100%)',
      hero: 'linear-gradient(to right, #1B3B6F 0%, #FFD700 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(27, 59, 111, 0.08)',
      md: '0 4px 6px -1px rgba(27, 59, 111, 0.15)',
      lg: '0 10px 15px -3px rgba(27, 59, 111, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.benefit-gateway.com',
    logoSvg: '/images/brand-logos/benefit.svg',
    websiteUrl: 'https://www.benefit-gateway.com',
    description: 'شركة بنفت للخدمات المصرفية الإلكترونية في البحرين',
  },
  maal: {
    id: 'maal',
    nameEn: 'MAAL',
    nameAr: 'معامل',
    colors: {
      primary: '#CC0000',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#FFF5F5',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#FFD9D9',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)',
      secondary: 'linear-gradient(135deg, #FFD700 0%, #FFCC00 100%)',
      hero: 'linear-gradient(to right, #CC0000 0%, #FFD700 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(204, 0, 0, 0.08)',
      md: '0 4px 6px -1px rgba(204, 0, 0, 0.15)',
      lg: '0 10px 15px -3px rgba(204, 0, 0, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.mafcmt.com',
    logoSvg: '/images/brand-logos/maal.svg',
    websiteUrl: 'https://www.mafcmt.com',
    description: 'نظام المدفوعات الحكومية في سلطنة عمان',
  },
  qatarPayment: {
    id: 'qatarPayment',
    nameEn: 'Qatar Payment',
    nameAr: 'قطر بايمنت',
    colors: {
      primary: '#8B0000',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#FFF5F5',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#F5D5D5',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #8B0000 0%, #6B0000 100%)',
      secondary: 'linear-gradient(135deg, #FFD700 0%, #FFCC00 100%)',
      hero: 'linear-gradient(to right, #8B0000 0%, #FFD700 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(139, 0, 0, 0.08)',
      md: '0 4px 6px -1px rgba(139, 0, 0, 0.15)',
      lg: '0 10px 15px -3px rgba(139, 0, 0, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.qpay.com.qa',
    logoSvg: '/images/brand-logos/qatar-payment.svg',
    websiteUrl: 'https://www.qpay.com.qa',
    description: 'شبكة المدفوعات في دولة قطر',
  },
};

// Bank Branding
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
    logoUrl: 'https://www.alahli.com/static/media/snbl_logo.0a7fed0d.svg',
    logoSvg: 'https://www.alahli.com/static/media/snbl_logo.0a7fed0d.svg',
    websiteUrl: 'https://www.alahli.com/',
    description: 'أكبر بنك في المملكة العربية السعودية',
  },
  alrajhi: {
    id: 'alrajhi',
    nameEn: 'Al Rajhi Bank',
    nameAr: 'مصرف الراجحي',
    colors: {
      primary: '#221BFF',
      secondary: '#00B2FF',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F0F4FF',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1D9FF',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #221BFF 0%, #0A0A99 100%)',
      secondary: 'linear-gradient(180deg, #00B2FF 0%, #0088CC 100%)',
      hero: 'linear-gradient(to right, #221BFF 0%, #00B2FF 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(34, 27, 255, 0.08)',
      md: '0 4px 6px -1px rgba(34, 27, 255, 0.15)',
      lg: '0 10px 15px -3px rgba(34, 27, 255, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.alrajhibank.com.sa/-/media/images/global/logo.svg',
    logoSvg: 'https://www.alrajhibank.com.sa/-/media/images/global/logo.svg',
    websiteUrl: 'https://www.alrajhibank.com.sa/',
    description: 'أكبر بنك إسلامي في العالم',
  },
  aljazira: {
    id: 'aljazira',
    nameEn: 'Bank AlJazira',
    nameAr: 'بنك الجزيرة',
    colors: {
      primary: '#003D7A',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F5F5FA',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1D9E6',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #003D7A 0%, #002855 100%)',
      secondary: 'linear-gradient(180deg, #003D7A 0%, #0055AA 100%)',
      hero: 'linear-gradient(to right, #003D7A 0%, #002855 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 61, 122, 0.08)',
      md: '0 4px 6px -1px rgba(0, 61, 122, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 61, 122, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.baj.com.sa/etc/designs/baj/images/logo.svg',
    logoSvg: 'https://www.baj.com.sa/etc/designs/baj/images/logo.svg',
    websiteUrl: 'https://www.baj.com.sa/',
    description: 'بنك سعودي رائد يخدم العملاء منذ 1976',
  },
  qnb: {
    id: 'qnb',
    nameEn: 'Qatar National Bank',
    nameAr: 'بنك قطر الوطني',
    colors: {
      primary: '#7E191B',
      secondary: '#FFFFFF',
      accent: '#D4AF37',
      background: '#FFFFFF',
      surface: '#F9F9F9',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E8D4D5',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #7E191B 0%, #5E1315 100%)',
      secondary: 'linear-gradient(180deg, #7E191B 0%, #A02428 100%)',
      hero: 'linear-gradient(to right, #7E191B 0%, #5E1315 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(126, 25, 27, 0.08)',
      md: '0 4px 6px -1px rgba(126, 25, 27, 0.15)',
      lg: '0 10px 15px -3px rgba(126, 25, 27, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.qnb.com/etc/designs/qnb/images/logo.svg',
    logoSvg: 'https://www.qnb.com/etc/designs/qnb/images/logo.svg',
    websiteUrl: 'https://www.qnb.com/',
    description: 'أكبر بنك في الشرق الأوسط وشمال أفريقيا',
  },
  enbd: {
    id: 'enbd',
    nameEn: 'Emirates NBD',
    nameAr: 'بنك الإمارات دبي الوطني',
    colors: {
      primary: '#003D7A',
      secondary: '#FFD700',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F5F8FA',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D4DDE6',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #003D7A 0%, #002855 100%)',
      secondary: 'linear-gradient(180deg, #003D7A 0%, #0055AA 100%)',
      hero: 'linear-gradient(to right, #003D7A 0%, #002855 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 61, 122, 0.08)',
      md: '0 4px 6px -1px rgba(0, 61, 122, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 61, 122, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.emiratesnbd.com/assets/img/logo.svg',
    logoSvg: 'https://www.emiratesnbd.com/assets/img/logo.svg',
    websiteUrl: 'https://www.emiratesnbd.com/',
    description: 'أكبر بنك في منطقة الشرق الأوسط',
  },
  adcb: {
    id: 'adcb',
    nameEn: 'ADCB',
    nameAr: 'بنك أبوظبي التجاري',
    colors: {
      primary: '#ED1C24',
      secondary: '#FFFFFF',
      accent: '#000000',
      background: '#FFFFFF',
      surface: '#FDF5F5',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#F5D5D6',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #ED1C24 0%, #C4151D 100%)',
      secondary: 'linear-gradient(180deg, #ED1C24 0%, #FF4D5A 100%)',
      hero: 'linear-gradient(to right, #ED1C24 0%, #C4151D 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(237, 28, 36, 0.08)',
      md: '0 4px 6px -1px rgba(237, 28, 36, 0.15)',
      lg: '0 10px 15px -3px rgba(237, 28, 36, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.adcb.com/assets/images/logo.svg',
    logoSvg: 'https://www.adcb.com/assets/images/logo.svg',
    websiteUrl: 'https://www.adcb.com/',
    description: 'بنك رائد في أبوظبي والإمارات',
  },
  adib: {
    id: 'adib',
    nameEn: 'ADIB',
    nameAr: 'مصرف أبوظبي الإسلامي',
    colors: {
      primary: '#003D7A',
      secondary: '#006847',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      surface: '#F5FAF8',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#D1E8DC',
    },
    fonts: defaultFonts,
    gradients: {
      primary: 'linear-gradient(135deg, #003D7A 0%, #002855 100%)',
      secondary: 'linear-gradient(180deg, #003D7A 0%, #0055AA 100%)',
      hero: 'linear-gradient(to right, #003D7A 0%, #006847 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 61, 122, 0.08)',
      md: '0 4px 6px -1px rgba(0, 61, 122, 0.15)',
      lg: '0 10px 15px -3px rgba(0, 61, 122, 0.20)',
    },
    borderRadius: defaultBorderRadius,
    logoUrl: 'https://www.adib.ae/assets/images/logo.svg',
    logoSvg: 'https://www.adib.ae/assets/images/logo.svg',
    websiteUrl: 'https://www.adib.ae/',
    description: 'مصرف إسلامي رائد في الإمارات',
  },
};

// Get branding by company key
export const getBrandingByCompany = (companyKey: string): CompanyBranding | null => {
  const key = companyKey.toLowerCase();
  return shippingCompanyBranding[key] || governmentPaymentBranding[key] || bankBranding[key] || null;
};

// Get logo URL for a company
export const getCompanyLogoUrl = (companyKey: string): string | undefined => {
  const branding = getBrandingByCompany(companyKey);
  return branding?.logoUrl || branding?.logoSvg;
};

// Check if company has SVG logo
export const hasSvgLogo = (companyKey: string): boolean => {
  const branding = getBrandingByCompany(companyKey);
  return !!branding?.logoSvg;
};
