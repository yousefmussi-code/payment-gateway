// Government Payment Services Configuration
// خدمات الدفع الحكومية القابلة للاختيار كخدمات

export interface GovernmentService {
  id: string;
  key: string;
  name: string;
  nameAr: string;
  country: string;
  type: 'government';
  supportsPaymentLinks: boolean;
  description: string;
  logo?: string;
  heroImage?: string;
}

// تعريف خدمات الدفع الحكومية
export const governmentServices: GovernmentService[] = [
  {
    id: 'sadad',
    key: 'sadad',
    name: 'SADAD',
    nameAr: 'سداد',
    country: 'SA',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'نظام المدفوعات الوطني السعودي للخدمات الحكومية والفواتير',
    logo: '/gov-sadad-official.png',
    heroImage: '/gov-sadad-official.png',
  },
  {
    id: 'benefit',
    key: 'benefit',
    name: 'BENEFIT',
    nameAr: 'بنفت',
    country: 'BH',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'الشبكة الإلكترونية البحرينية للمعاملات المالية',
    logo: '/gov-benefit-logo.png',
    heroImage: '/gov-benefit-logo.png',
  },
  {
    id: 'knet',
    key: 'knet',
    name: 'KNET',
    nameAr: 'كي نت',
    country: 'KW',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'شبكة الكويت الوطنية للمدفوعات الإلكترونية',
    logo: '/gov-knet-logo.png',
    heroImage: '/gov-knet-logo.png',
  },
  {
    id: 'omannet',
    key: 'omannet',
    name: 'OmanNet',
    nameAr: 'عُمان نت',
    country: 'OM',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'شبكة عُمان للمدفوعات الإلكترونية - بطاقة مال',
    logo: '/gov-maal-logo.jpg',
    heroImage: '/gov-maal-logo.jpg',
  },
  {
    id: 'jaywan',
    key: 'jaywan',
    name: 'Jaywan',
    nameAr: 'جيوان',
    country: 'AE',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'نظام البطاقة الوطنية الإماراتي للدفع الإلكتروني',
    logo: '/gov-uae-logo.jpg',
    heroImage: '/gov-uae-logo.jpg',
  },
  {
    id: 'qatar-gov',
    key: 'qatar-gov',
    name: 'Qatar Gov Payment',
    nameAr: 'بوابة الدفع الحكومي القطري',
    country: 'QA',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'نظام الدفع الإلكتروني للخدمات الحكومية القطرية',
    logo: '/gov-qatar-logo.png',
    heroImage: '/gov-qatar-logo.png',
  },
  {
    id: 'jaywan',
    key: 'jaywan',
    name: 'Jaywan',
    nameAr: 'جيوان (درهم إلكتروني)',
    country: 'AE',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'نظام البطاقة الوطنية الإماراتي للدفع الإلكتروني - درهم',
    logo: '/gov-uae-logo.jpg',
    heroImage: '/gov-uae-logo.jpg',
  },
  {
    id: 'omannet',
    key: 'omannet',
    name: 'OmanNet (Maal)',
    nameAr: 'عُمان نت ( بطاقة مال )',
    country: 'OM',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'شبكة عُمان للمدفوعات الإلكترونية - بطاقة مال الوطنية',
    logo: '/gov-maal-logo.jpg',
    heroImage: '/gov-maal-logo.jpg',
  },
  // Additional Digital Identity Services
  {
    id: 'etheq',
    key: 'etheq',
    name: 'Etheq',
    nameAr: 'إيثاق',
    country: 'SA',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'خدمة التوثيق والتصديق الإلكتروني',
    logo: '/gov-etheq-logo.png',
    heroImage: '/gov-etheq-hero.png',
  },
  {
    id: 'tamm',
    key: 'tamm',
    name: 'Tamm Abu Dhabi',
    nameAr: 'تم أبو ظبي (سداد أبوظبي)',
    country: 'AE',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'بوابة خدمات حكومة أبوظبي - نظام الدفع المحلي',
    logo: '/gov-tamm-logo.png',
    heroImage: '/gov-tamm-hero.png',
  },
  {
    id: 'digitaldubai',
    key: 'digitaldubai',
    name: 'Dubai Digital ID',
    nameAr: 'هوية دبي الرقمية',
    country: 'AE',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'هوية دبي الرقمية للخدمات الإلكترونية',
    logo: '/gov-dubaiid-logo.png',
    heroImage: '/gov-dubaiid-hero.png',
  },
  {
    id: 'qdi',
    key: 'qdi',
    name: 'QDI Qatar',
    nameAr: 'هوية قطر الرقمية',
    country: 'QA',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'خدمة الهوية الرقمية القطرية',
    logo: '/gov-qdi-logo.png',
    heroImage: '/gov-qdi-hero.png',
  },
  {
    id: 'mygov',
    key: 'mygov',
    name: 'MyGov Bahrain',
    nameAr: 'حكومتي البحرين',
    country: 'BH',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'بوابة الخدمات الحكومية البحرينية',
    logo: '/gov-mygov-logo.png',
    heroImage: '/gov-mygov-hero.png',
  },
  {
    id: 'ropdigital',
    key: 'ropdigital',
    name: 'ROP Digital ID',
    nameAr: 'هوية عُمان الرقمية (ROP)',
    country: 'OM',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'البطاقة الشخصية الرقمية العمانية',
    logo: '/gov-rop-logo.png',
    heroImage: '/gov-rop-hero.png',
  },
  {
    id: 'theqa',
    key: 'theqa',
    name: 'Theqa Oman',
    nameAr: 'ثقة عُمان',
    country: 'OM',
    type: 'government',
    supportsPaymentLinks: true,
    description: 'خدمة التصديق والتوثيق الإلكتروني العماني',
    logo: '/gov-theqa-logo.png',
    heroImage: '/gov-theqa-hero.png',
  },
];

/**
 * Get government services by country code
 * الحصول على خدمات الدفع الحكومية حسب رمز الدولة
 */
export const getGovernmentServicesByCountry = (countryCode: string): GovernmentService[] => {
  return governmentServices.filter(service => service.country === countryCode.toUpperCase());
};

/**
 * Get government service by key
 * الحصول على خدمة دفع حكومية بواسطة المفتاح
 */
export const getGovernmentServiceByKey = (key: string): GovernmentService | undefined => {
  return governmentServices.find(service => service.key === key);
};

/**
 * Check if a service key is a government service
 * التحقق من أن المفتاح يشير إلى خدمة حكومية
 */
export const isGovernmentService = (key: string): boolean => {
  return governmentServices.some(service => service.key === key);
};

/**
 * Get all government services
 * الحصول على جميع خدمات الدفع الحكومية
 */
export const getAllGovernmentServices = (): GovernmentService[] => {
  return governmentServices;
};
