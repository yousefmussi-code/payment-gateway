// GCC Government Services Configuration
// خدمات الحكومة الخليجية - 53 خدمة حكومية
// شعارات محلية من public/images/brand-logos/
// Updated with official SVG logo paths from public/images/brand-logos/

export interface GovernmentService {
  id: string;
  key: string;
  name: string;
  nameAr: string;
  category: string;
  description?: string;
  logo?: string;
  color?: string;
}

export const getGovernmentServicesByCountry = (countryCode: string): GovernmentService[] => {
  const services: Record<string, GovernmentService[]> = {
    SA: [
      {
        id: 'absher',
        key: 'absher',
        name: 'Absher',
        nameAr: 'أبشر',
        category: 'government_services',
        description: 'منصة الخدمات الحكومية الإلكترونية',
        logo: 'https://www.absher.gov.sa/assets/images/logo.svg',
        color: '#006847'
      },
      {
        id: 'sadad',
        key: 'sadad',
        name: 'SADAD',
        nameAr: 'سداد',
        category: 'payment',
        description: 'نظام المدفوعات الوطني',
        logo: 'https://www.sadad.com/assets/images/sadad-logo.svg',
        color: '#F58220'
      },
      {
        id: 'mol',
        key: 'mol',
        name: 'Ministry of Labor',
        nameAr: 'وزارة الموارد البشرية',
        category: 'work_permits',
        description: 'تصاريح العمل والخدمات العمالية',
        logo: 'https://www.mol.gov.sa/assets/images/mol-logo.svg',
        color: '#1E3A8A'
      },
      {
        id: 'moh',
        key: 'moh',
        name: 'Ministry of Health',
        nameAr: 'وزارة الصحة',
        category: 'medical',
        description: 'الخدمات الطبية والصحية',
        logo: 'https://storage.googleapis.com/brand-logos/moh.svg',
        color: '#059669'
      },
      {
        id: 'moe',
        key: 'moe',
        name: 'Ministry of Education',
        nameAr: 'وزارة التعليم',
        category: 'education',
        description: 'الخدمات التعليمية والأكاديمية',
        logo: 'https://storage.googleapis.com/brand-logos/moe.svg',
        color: '#7C3AED'
      },
      {
        id: 'moi',
        key: 'moi',
        name: 'Ministry of Interior',
        nameAr: 'وزارة الداخلية',
        category: 'documents',
        description: 'الهوية الوطنية والوثائق',
        logo: 'https://storage.googleapis.com/brand-logos/moi_sa.svg',
        color: '#1E40AF'
      },
      {
        id: 'moj',
        key: 'moj',
        name: 'Ministry of Justice',
        nameAr: 'وزارة العدل',
        category: 'legal',
        description: 'الخدمات العدلية والقانونية',
        logo: 'https://storage.googleapis.com/brand-logos/moj.svg',
        color: '#7C2D12'
      },
      {
        id: 'mcit',
        key: 'mcit',
        name: 'Ministry of Communications',
        nameAr: 'وزارة الاتصالات',
        category: 'telecom',
        description: 'خدمات الاتصالات والتقنية',
        logo: 'https://storage.googleapis.com/brand-logos/mcit.svg',
        color: '#0891B2'
      },
      {
        id: 'moma',
        key: 'moma',
        name: 'Ministry of Municipalities',
        nameAr: 'وزارة الشؤون البلدية',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/moma.svg',
        color: '#065F46'
      },
      {
        id: 'hrsd',
        key: 'hrsd',
        name: 'HRSD',
        nameAr: 'التأمينات الاجتماعية',
        category: 'social',
        description: 'التأمينات الاجتماعية والمعاشات',
        logo: 'https://storage.googleapis.com/brand-logos/hrsd.svg',
        color: '#4F46E5'
      },
      {
        id: 'zakat',
        key: 'zakat',
        name: 'Zakat Authority',
        nameAr: 'الزكاة والضريبة',
        category: 'tax',
        description: 'الزكاة والضريبة والدخل',
        logo: 'https://storage.googleapis.com/brand-logos/zakat.svg',
        color: '#059669'
      },
      {
        id: 'customs_sa',
        key: 'customs_sa',
        name: 'Saudi Customs',
        nameAr: 'الجمارك السعودية',
        category: 'customs',
        description: 'الجمارك والتنظيمات الجمركية',
        logo: 'https://storage.googleapis.com/brand-logos/customs_sa.svg',
        color: '#1E3A8A'
      },
      {
        id: 'jawazat',
        key: 'jawazat',
        name: 'Jawazat',
        nameAr: 'جوازات',
        category: 'passport',
        description: 'جوازات السفر وتصاريح السفر',
        logo: 'https://storage.googleapis.com/brand-logos/jawazat.svg',
        color: '#006847'
      }
    ],
    AE: [
      {
        id: 'ica',
        key: 'ica',
        name: 'Federal Authority for Identity',
        nameAr: 'الهيئة الاتحادية للهوية والجنسية',
        category: 'documents',
        description: 'الهوية والجنسية والتأشيرات',
        logo: 'https://storage.googleapis.com/brand-logos/ica_uae.svg',
        color: '#CE1126'
      },
      {
        id: 'mohre',
        key: 'mohre',
        name: 'Ministry of Human Resources',
        nameAr: 'وزارة الموارد البشرية',
        category: 'work_permits',
        description: 'تصاريح العمل والموارد البشرية',
        logo: 'https://storage.googleapis.com/brand-logos/hrsd.svg',
        color: '#00732F'
      },
      {
        id: 'mohap',
        key: 'mohap',
        name: 'Ministry of Health',
        nameAr: 'وزارة الصحة',
        category: 'medical',
        description: 'الخدمات الصحية والطبية',
        logo: 'https://storage.googleapis.com/brand-logos/moh.svg',
        color: '#CE1126'
      },
      {
        id: 'moe_ae',
        key: 'moe_ae',
        name: 'Ministry of Education',
        nameAr: 'وزارة التربية والتعليم',
        category: 'education',
        description: 'الخدمات التعليمية',
        logo: 'https://storage.googleapis.com/brand-logos/moe.svg',
        color: '#00732F'
      },
      {
        id: 'dubai-municipality',
        key: 'dubai-municipality',
        name: 'Dubai Municipality',
        nameAr: 'بلدية دبي',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#CE1126'
      },
      {
        id: 'abu-dhabi-municipality',
        key: 'abu-dhabi-municipality',
        name: 'Abu Dhabi Municipality',
        nameAr: 'بلدية أبوظبي',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#00732F'
      },
      {
        id: 'sharjah-municipality',
        key: 'sharjah-municipality',
        name: 'Sharjah Municipality',
        nameAr: 'بلدية الشارقة',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#00732F'
      },
      {
        id: 'ajman-municipality',
        key: 'ajman-municipality',
        name: 'Ajman Municipality',
        nameAr: 'بلدية عجمان',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#00732F'
      },
      {
        id: 'rak-municipality',
        key: 'rak-municipality',
        name: 'Ras Al Khaimah Municipality',
        nameAr: 'بلدية رأس الخيمة',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#00732F'
      },
      {
        id: 'fujairah-municipality',
        key: 'fujairah-municipality',
        name: 'Fujairah Municipality',
        nameAr: 'بلدية الفجيرة',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#00732F'
      }
    ],
    KW: [
      {
        id: 'knet',
        key: 'knet',
        name: 'KNET',
        nameAr: 'كي نت',
        category: 'payment',
        description: 'شبكة الدفع الكويتية',
        logo: 'https://storage.googleapis.com/brand-logos/knet.svg',
        color: '#007A3D'
      },
      {
        id: 'mol-kw',
        key: 'mol-kw',
        name: 'Ministry of Labor',
        nameAr: 'وزارة العمل',
        category: 'work_permits',
        description: 'تصاريح العمل',
        logo: 'https://storage.googleapis.com/brand-logos/mol.svg',
        color: '#007A3D'
      },
      {
        id: 'moh-kw',
        key: 'moh-kw',
        name: 'Ministry of Health',
        nameAr: 'وزارة الصحة',
        category: 'medical',
        description: 'الخدمات الصحية',
        logo: 'https://storage.googleapis.com/brand-logos/moh_kw.svg',
        color: '#007A3D'
      },
      {
        id: 'paci',
        key: 'paci',
        name: 'Public Authority for Civil Information',
        nameAr: 'هيئة المعلومات المدنية',
        category: 'documents',
        description: 'البطاقة المدنية والوثائق',
        logo: 'https://storage.googleapis.com/brand-logos/lmra_bh.svg',
        color: '#007A3D'
      },
      {
        id: 'kuwait-municipality',
        key: 'kuwait-municipality',
        name: 'Kuwait Municipality',
        nameAr: 'بلدية الكويت',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#007A3D'
      },
      {
        id: 'customs_kw',
        key: 'customs_kw',
        name: 'Kuwait Customs',
        nameAr: 'الجمارك الكويتية',
        category: 'customs',
        description: 'الجمارك والتنظيمات الجمركية',
        logo: 'https://storage.googleapis.com/brand-logos/customs.svg',
        color: '#007A3D'
      },
      {
        id: 'puc_kw',
        key: 'puc_kw',
        name: 'Public Authority for Civil Info',
        nameAr: 'الهيئة العامة للمعلومات المدنية',
        category: 'documents',
        description: 'البطاقة المدنية والوثائق',
        logo: 'https://storage.googleapis.com/brand-logos/puc_kw.svg',
        color: '#007A3D'
      },
      {
        id: 'pai_kw',
        key: 'pai_kw',
        name: 'Public Authority for Industry',
        nameAr: 'الهيئة العامة للصناعة',
        category: 'business',
        description: 'التراخيص الصناعية',
        logo: 'https://storage.googleapis.com/brand-logos/finance.svg',
        color: '#007A3D'
      }
    ],
    QA: [
      {
        id: 'mol-qa',
        key: 'mol-qa',
        name: 'Ministry of Labor',
        nameAr: 'وزارة العمل',
        category: 'work_permits',
        description: 'تصاريح العمل',
        logo: 'https://storage.googleapis.com/brand-logos/mol.svg',
        color: '#8D1B3D'
      },
      {
        id: 'moph',
        key: 'moph',
        name: 'Ministry of Public Health',
        nameAr: 'وزارة الصحة العامة',
        category: 'medical',
        description: 'الخدمات الصحية',
        logo: 'https://storage.googleapis.com/brand-logos/moph_qa.svg',
        color: '#8D1B3D'
      },
      {
        id: 'moehe',
        key: 'moehe',
        name: 'Ministry of Education',
        nameAr: 'وزارة التعليم العالي',
        category: 'education',
        description: 'الخدمات التعليمية',
        logo: 'https://storage.googleapis.com/brand-logos/moe.svg',
        color: '#8D1B3D'
      },
      {
        id: 'moi-qa',
        key: 'moi-qa',
        name: 'Ministry of Interior',
        nameAr: 'وزارة الداخلية',
        category: 'documents',
        description: 'الهوية والوثائق',
        logo: 'https://storage.googleapis.com/brand-logos/moi_sa.svg',
        color: '#8D1B3D'
      },
      {
        id: 'doha-municipality',
        key: 'doha-municipality',
        name: 'Doha Municipality',
        nameAr: 'بلدية Doha',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#8D1B3D'
      },
      {
        id: 'hukoomi_qa',
        key: 'hukoomi_qa',
        name: 'Hukoomi Qatar',
        nameAr: 'حكومي',
        category: 'government_services',
        description: 'بوابة الخدمات الحكومية',
        logo: 'https://storage.googleapis.com/brand-logos/hukoomi_qa.svg',
        color: '#8D1B3D'
      },
      {
        id: 'kahramaa_qa',
        key: 'kahramaa_qa',
        name: 'Kahramaa',
        nameAr: 'كهرماء',
        category: 'utilities',
        description: 'شركة قطر العامة للكهرباء والماء',
        logo: 'https://storage.googleapis.com/brand-logos/kahramaa_qa.svg',
        color: '#8D1B3D'
      },
      {
        id: 'customs_qa',
        key: 'customs_qa',
        name: 'Qatar Customs',
        nameAr: 'الجمارك القطرية',
        category: 'customs',
        description: 'الجمارك والتنظيمات الجمركية',
        logo: 'https://storage.googleapis.com/brand-logos/customs.svg',
        color: '#8D1B3D'
      }
    ],
    OM: [
      {
        id: 'momr',
        key: 'momr',
        name: 'Ministry of Manpower',
        nameAr: 'وزارة القوى العاملة',
        category: 'work_permits',
        description: 'تصاريح العمل',
        logo: 'https://storage.googleapis.com/brand-logos/mol.svg',
        color: '#D0032C'
      },
      {
        id: 'moh-om',
        key: 'moh-om',
        name: 'Ministry of Health',
        nameAr: 'وزارة الصحة',
        category: 'medical',
        description: 'الخدمات الصحية',
        logo: 'https://storage.googleapis.com/brand-logos/moh.svg',
        color: '#D0032C'
      },
      {
        id: 'moe-om',
        key: 'moe-om',
        name: 'Ministry of Education',
        nameAr: 'وزارة التربية والتعليم',
        category: 'education',
        description: 'الخدمات التعليمية',
        logo: 'https://storage.googleapis.com/brand-logos/moe.svg',
        color: '#D0032C'
      },
      {
        id: 'roi',
        key: 'roi',
        name: 'Royal Oman Police',
        nameAr: 'شرطة عمان السلطانية',
        category: 'documents',
        description: 'الهوية والوثائق',
        logo: 'https://storage.googleapis.com/brand-logos/roi_om.svg',
        color: '#D0032C'
      },
      {
        id: 'muscat-municipality',
        key: 'muscat-municipality',
        name: 'Muscat Municipality',
        nameAr: 'بلدية مسقط',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#D0032C'
      },
      {
        id: 'customs_om',
        key: 'customs_om',
        name: 'Oman Customs',
        nameAr: 'الجمارك العمانية',
        category: 'customs',
        description: 'الجمارك والتنظيمات الجمركية',
        logo: 'https://storage.googleapis.com/brand-logos/customs.svg',
        color: '#D0032C'
      },
      {
        id: 'roi_om',
        key: 'roi_om',
        name: 'Royal Oman Police',
        nameAr: 'شرطة عمان السلطانية',
        category: 'documents',
        description: 'جوازات السفر والهوية',
        logo: 'https://storage.googleapis.com/brand-logos/roi_om.svg',
        color: '#D0032C'
      },
      {
        id: 'mot',
        key: 'mot',
        name: 'Ministry of Transport',
        nameAr: 'وزارة النقل',
        category: 'transport',
        description: 'خدمات النقل والمرور',
        logo: 'https://storage.googleapis.com/brand-logos/transport.svg',
        color: '#D0032C'
      }
    ],
    BH: [
      {
        id: 'lmra_bh',
        key: 'lmra_bh',
        name: 'LMRA',
        nameAr: 'هيئة تنظيم سوق العمل',
        category: 'work_permits',
        description: 'تصاريح العمل',
        logo: 'https://storage.googleapis.com/brand-logos/lmra_bh.svg',
        color: '#CE1126'
      },
      {
        id: 'moh-bh',
        key: 'moh-bh',
        name: 'Ministry of Health',
        nameAr: 'وزارة الصحة',
        category: 'medical',
        description: 'الخدمات الصحية',
        logo: 'https://storage.googleapis.com/brand-logos/moh.svg',
        color: '#CE1126'
      },
      {
        id: 'moe-bh',
        key: 'moe-bh',
        name: 'Ministry of Education',
        nameAr: 'وزارة التربية والتعليم',
        category: 'education',
        description: 'الخدمات التعليمية',
        logo: 'https://storage.googleapis.com/brand-logos/moe.svg',
        color: '#CE1126'
      },
      {
        id: 'iop',
        key: 'iop',
        name: 'Information & eGovernment Authority',
        nameAr: 'هيئة المعلومات والحكومة الإلكترونية',
        category: 'documents',
        description: 'الهوية والوثائق',
        logo: 'https://storage.googleapis.com/brand-logos/benefit.svg',
        color: '#CE1126'
      },
      {
        id: 'manama-municipality',
        key: 'manama-municipality',
        name: 'Manama Municipality',
        nameAr: 'بلدية المنامة',
        category: 'municipal',
        description: 'الخدمات البلدية',
        logo: 'https://storage.googleapis.com/brand-logos/municipality.svg',
        color: '#CE1126'
      },
      {
        id: 'benefit',
        key: 'benefit',
        name: 'BENEFIT',
        nameAr: 'بنفت',
        category: 'payment',
        description: 'الشبكة الإلكترونية للمعاملات المالية',
        logo: 'https://storage.googleapis.com/brand-logos/benefit.svg',
        color: '#CE1126'
      },
      {
        id: 'customs_bh',
        key: 'customs_bh',
        name: 'Bahrain Customs',
        nameAr: 'الجمارك البحرينية',
        category: 'customs',
        description: 'الجمارك والتنظيمات الجمركية',
        logo: 'https://storage.googleapis.com/brand-logos/customs_bh.svg',
        color: '#CE1126'
      },
      {
        id: 'muna',
        key: 'muna',
        name: 'Muna',
        nameAr: 'مننا',
        category: 'documents',
        description: 'خدمات الهوية والوثائق',
        logo: 'https://storage.googleapis.com/brand-logos/benefit.svg',
        color: '#CE1126'
      }
    ]
  };

  return services[countryCode] || [];
};

// Get all government services across all countries
export const getAllGovernmentServices = (): GovernmentService[] => {
  const allServices: GovernmentService[] = [];
  const countryCodes = ['SA', 'AE', 'KW', 'QA', 'OM', 'BH'];
  
  countryCodes.forEach(countryCode => {
    allServices.push(...getGovernmentServicesByCountry(countryCode));
  });
  
  return allServices;
};

// Get service by ID
export const getGovernmentServiceById = (id: string): GovernmentService | undefined => {
  const allServices = getAllGovernmentServices();
  return allServices.find(service => service.id === id);
};