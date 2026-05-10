// Shipping Companies Configuration
// تكوين شركات الشحن لدول الخليج
// Updated with official SVG logo paths from public/images/brand-logos/

export interface ShippingCompany {
  id: string;
  nameAr: string;
  nameEn: string;
  country: string;
  logo?: string;
  website?: string;
  trackingUrl?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textLight: string;
    textOnPrimary: string;
    border: string;
  };
  fonts: {
    primaryAr: string;
    primary: string;
    secondary: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    header: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const shippingCompanies: Record<string, ShippingCompany> = {
  // أرامكس (Aramex)
  aramex: {
    id: 'aramex',
    nameAr: 'أرامكس',
    nameEn: 'Aramex',
    country: 'AE',
    logo: '/images/brand-logos/shipping/aramex.png',
    website: 'https://www.aramex.com/',
    trackingUrl: 'https://www.aramex.com/en/track/results?ShipmentNumber=',
    colors: {
      primary: '#E31E24',
      secondary: '#000000',
      accent: '#FFB74D',
      background: '#FFFFFF',
      surface: '#FFF8F5',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#FFE0B2',
    },
    fonts: {
      primaryAr: 'Cairo',
      primary: 'Inter',
      secondary: 'Cairo',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #FF6B00, #E65100)',
      secondary: 'linear-gradient(135deg, #E65100, #FF6B00)',
      header: 'linear-gradient(180deg, #FF6B00 0%, #E65100 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(255, 107, 0, 0.08)',
      md: '0 4px 6px -1px rgba(255, 107, 0, 0.12)',
      lg: '0 10px 15px -3px rgba(255, 107, 0, 0.18)',
    },
    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
    },
  },

  // دي اتش ال (DHL)
  dhl: {
    id: 'dhl',
    nameAr: 'دي اتش ال',
    nameEn: 'DHL',
    country: 'DE',
    logo: '/images/brand-logos/shipping/dhl.png',
    website: 'https://www.dhl.com/',
    trackingUrl: 'https://www.dhl.com/en/express/tracking.html?AWB=',
    colors: {
      primary: '#FFCC00',
      secondary: '#D40511',
      accent: '#FFB800',
      background: '#FFFFFF',
      surface: '#FFFBF0',
      text: '#000000',
      textLight: '#555555',
      textOnPrimary: '#000000',
      border: '#FFCC00',
    },
    fonts: {
      primaryAr: 'Cairo',
      primary: 'Delivery',
      secondary: 'Cairo',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #FFCC00, #D40511)',
      secondary: 'linear-gradient(135deg, #D40511, #FFCC00)',
      header: 'linear-gradient(180deg, #FFCC00 0%, #D40511 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(255, 204, 0, 0.08)',
      md: '0 4px 6px -1px rgba(255, 204, 0, 0.12)',
      lg: '0 10px 15px -3px rgba(255, 204, 0, 0.18)',
    },
    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
    },
  },

  // فيديكس (FedEx)
  fedex: {
    id: 'fedex',
    nameAr: 'فيديكس',
    nameEn: 'FedEx',
    country: 'US',
    logo: '/images/brand-logos/fedex.svg',
    website: 'https://www.fedex.com/',
    trackingUrl: 'https://www.fedex.com/fedextrack/?trknbr=',
    colors: {
      primary: '#4D148C',
      secondary: '#FF6600',
      accent: '#FF9933',
      background: '#FFFFFF',
      surface: '#FAF5FF',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E5D0FF',
    },
    fonts: {
      primaryAr: 'Cairo',
      primary: 'Inter',
      secondary: 'Cairo',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #4D148C, #FF6600)',
      secondary: 'linear-gradient(135deg, #FF6600, #4D148C)',
      header: 'linear-gradient(180deg, #4D148C 0%, #FF6600 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(77, 20, 140, 0.08)',
      md: '0 4px 6px -1px rgba(77, 20, 140, 0.12)',
      lg: '0 10px 15px -3px rgba(77, 20, 140, 0.18)',
    },
    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
    },
  },

  // يو بي إس (UPS)
  ups: {
    id: 'ups',
    nameAr: 'يو بي إس',
    nameEn: 'UPS',
    country: 'US',
    logo: '/images/brand-logos/ups.svg',
    website: 'https://www.ups.com/',
    trackingUrl: 'https://www.ups.com/track?tracknum=',
    colors: {
      primary: '#351C15',
      secondary: '#FFB500',
      accent: '#FFD966',
      background: '#FFFFFF',
      surface: '#FDFBF7',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#F5E6CC',
    },
    fonts: {
      primaryAr: 'Cairo',
      primary: 'Inter',
      secondary: 'Cairo',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #351C15, #FFB500)',
      secondary: 'linear-gradient(135deg, #FFB500, #351C15)',
      header: 'linear-gradient(180deg, #351C15 0%, #5D3A2E 50%, #FFB500 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(53, 28, 21, 0.08)',
      md: '0 4px 6px -1px rgba(53, 28, 21, 0.12)',
      lg: '0 10px 15px -3px rgba(53, 28, 21, 0.18)',
    },
    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
    },
  },

  // البريد السعودي (SPL - Saudi Post)
  spl: {
    id: 'spl',
    nameAr: 'بريد快车',
    nameEn: 'SPL',
    country: 'SA',
    logo: '/images/brand-logos/spl.svg',
    website: 'https://www.splonline.com.sa/',
    trackingUrl: 'https://www.splonline.com.sa/en/track/',
    colors: {
      primary: '#006B3F',
      secondary: '#00A651',
      accent: '#66CC80',
      background: '#FFFFFF',
      surface: '#F0FFF5',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#B3E5C1',
    },
    fonts: {
      primaryAr: 'Cairo',
      primary: 'Inter',
      secondary: 'Cairo',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #006B3F, #00A651)',
      secondary: 'linear-gradient(135deg, #00A651, #006B3F)',
      header: 'linear-gradient(180deg, #006B3F 0%, #00A651 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 107, 63, 0.08)',
      md: '0 4px 6px -1px rgba(0, 107, 63, 0.12)',
      lg: '0 10px 15px -3px rgba(0, 107, 63, 0.18)',
    },
    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
    },
  },

  // إسمية (SMSA Express)
  smsa: {
    id: 'smsa',
    nameAr: 'إسمية إكسبريس',
    nameEn: 'SMSA',
    country: 'SA',
    logo: '/images/brand-logos/smsa.svg',
    website: 'https://www.smsaexpress.com/',
    trackingUrl: 'https://www.smsaexpress.com/TrackingResult',
    colors: {
      primary: '#E31837',
      secondary: '#C71524',
      accent: '#FF6680',
      background: '#FFFFFF',
      surface: '#FFF5F6',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#FFCCD4',
    },
    fonts: {
      primaryAr: 'Cairo',
      primary: 'Inter',
      secondary: 'Cairo',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #E31837, #C71524)',
      secondary: 'linear-gradient(135deg, #C71524, #E31837)',
      header: 'linear-gradient(180deg, #E31837 0%, #C71524 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(227, 24, 55, 0.08)',
      md: '0 4px 6px -1px rgba(227, 24, 55, 0.12)',
      lg: '0 10px 15px -3px rgba(227, 24, 55, 0.18)',
    },
    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
    },
  },

  // البريد الإماراتي (Emirates Post)
  emirates_post: {
    id: 'emirates_post',
    nameAr: 'بريد الإمارات',
    nameEn: 'Emirates Post',
    country: 'AE',
    logo: '/images/brand-logos/emirates_post.svg',
    website: 'https://www.emiratespost.ae/',
    colors: {
      primary: '#C8102E',
      secondary: '#00843D',
      accent: '#FFD700',
      background: '#FFFFFF',
      surface: '#FFF8F8',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#FFE4E8',
    },
    fonts: {
      primaryAr: 'Cairo',
      primary: 'Inter',
      secondary: 'Cairo',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #C8102E, #00843D)',
      secondary: 'linear-gradient(135deg, #00843D, #C8102E)',
      header: 'linear-gradient(180deg, #C8102E 0%, #00843D 50%, #FFD700 100%)',
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(200, 16, 46, 0.08)',
      md: '0 4px 6px -1px rgba(200, 16, 46, 0.12)',
      lg: '0 10px 15px -3px rgba(200, 16, 46, 0.18)',
    },
    borderRadius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
    },
  },
};

/**
 * Get shipping company by ID
 */
export const getShippingCompany = (id: string): ShippingCompany | undefined => {
  return shippingCompanies[id.toLowerCase()];
};

/**
 * Get all shipping companies
 */
export const getAllShippingCompanies = (): ShippingCompany[] => {
  return Object.values(shippingCompanies);
};
