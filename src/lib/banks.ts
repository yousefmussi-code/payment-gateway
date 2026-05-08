export interface Bank {
  id: string;
  name: string;
  name_ar: string;
  country: string;
  logo: string;
  color: string;
}

export const banks: Bank[] = [
  // SAUDI ARABIA
  { id: 'alrajhi', name: 'Al Rajhi Bank', name_ar: 'مصرف الراجحي', country: 'SA', logo: 'alrajhi.svg', color: '#006C35' },
  { id: 'alahli', name: 'SNB (AlAhli)', name_ar: 'البنك الأهلي السعودي', country: 'SA', logo: 'snb.svg', color: '#00843D' },
  { id: 'riyad', name: 'Riyad Bank', name_ar: 'بنك الرياض', country: 'SA', logo: 'riyad.svg', color: '#0066B2' },
  { id: 'alinma', name: 'Alinma Bank', name_ar: 'مصرف الإنماء', country: 'SA', logo: 'alinma.svg', color: '#003D7A' },
  { id: 'sabb', name: 'SABB', name_ar: 'ساب', country: 'SA', logo: 'sabb.svg', color: '#004A99' },
  { id: 'albilad', name: 'Bank AlBilad', name_ar: 'بنك البلاد', country: 'SA', logo: 'albilad.svg', color: '#0055AA' },
  { id: 'saib', name: 'SAIB', name_ar: 'البنك السعودي للاستثمار', country: 'SA', logo: 'saib.svg', color: '#003366' },
  { id: 'bsf', name: 'Banque Saudi Fransi', name_ar: 'البنك السعودي الفرنسي', country: 'SA', logo: 'bsf.svg', color: '#005B94' },
  { id: 'anb', name: 'ANB', name_ar: 'البنك العربي الوطني', country: 'SA', logo: 'anb.svg', color: '#004C8F' },
  { id: 'aljazira', name: 'Bank AlJazira', name_ar: 'بنك الجزيرة', country: 'SA', logo: 'aljazira.svg', color: '#003D7A' },

  // UAE
  { id: 'fab', name: 'First Abu Dhabi Bank', name_ar: 'بنك أبوظبي الأول', country: 'AE', logo: 'fab.svg', color: '#E0004D' },
  { id: 'enbd', name: 'Emirates NBD', name_ar: 'بنك الإمارات دبي الوطني', country: 'AE', logo: 'enbd.svg', color: '#003D7A' },
  { id: 'adcb', name: 'ADCB', name_ar: 'بنك أبوظبي التجاري', country: 'AE', logo: 'adcb.svg', color: '#ED1C24' },
  { id: 'dib', name: 'Dubai Islamic Bank', name_ar: 'بنك دبي الإسلامي', country: 'AE', logo: 'dib.svg', color: '#006C35' },
  { id: 'mashreq', name: 'Mashreq Bank', name_ar: 'بنك المشرق', country: 'AE', logo: 'mashreq.svg', color: '#FF7900' },
  { id: 'adib', name: 'ADIB', name_ar: 'مصرف أبوظبي الإسلامي', country: 'AE', logo: 'adib.svg', color: '#003D7A' },
  { id: 'sib', name: 'Sharjah Islamic Bank', name_ar: 'مصرف الشارقة الإسلامي', country: 'AE', logo: 'sib.svg', color: '#006C35' },
  { id: 'cbd', name: 'Commercial Bank of Dubai', name_ar: 'بنك دبي التجاري', country: 'AE', logo: 'cbd.svg', color: '#003D7A' },

  // KUWAIT
  { id: 'nbk', name: 'National Bank of Kuwait', name_ar: 'بنك الكويت الوطني', country: 'KW', logo: 'nbk.svg', color: '#003D7A' },
  { id: 'kfh', name: 'Kuwait Finance House', name_ar: 'بيت التمويل الكويتي', country: 'KW', logo: 'kfh.svg', color: '#006C35' },
  { id: 'cbk', name: 'Commercial Bank of Kuwait', name_ar: 'البنك التجاري الكويتي', country: 'KW', logo: 'cbk.svg', color: '#ED1C24' },
  { id: 'abk', name: 'Al Ahli Bank of Kuwait', name_ar: 'البنك الأهلي الكويتي', country: 'KW', logo: 'abk.svg', color: '#003D7A' },
  { id: 'boubyan', name: 'Boubyan Bank', name_ar: 'بنك بوبيان', country: 'KW', logo: 'boubyan.svg', color: '#003D7A' },
  { id: 'warba', name: 'Warba Bank', name_ar: 'بنك وربة', country: 'KW', logo: 'warba.svg', color: '#003D7A' },
  { id: 'burgan', name: 'Burgan Bank', name_ar: 'بنك برقان', country: 'KW', logo: 'burgan.svg', color: '#003D7A' },

  // QATAR
  { id: 'qnb', name: 'QNB', name_ar: 'بنك قطر الوطني', country: 'QA', logo: 'qnb.svg', color: '#7E191B' },
  { id: 'cbq', name: 'Commercial Bank of Qatar', name_ar: 'البنك التجاري القطري', country: 'QA', logo: 'cbq.svg', color: '#003D7A' },
  { id: 'masraf', name: 'Masraf Al Rayan', name_ar: 'مصرف الريان', country: 'QA', logo: 'masraf.svg', color: '#003D7A' },
  { id: 'qib', name: 'Qatar Islamic Bank', name_ar: 'مصرف قطر الإسلامي', country: 'QA', logo: 'qib.svg', color: '#003D7A' },
  { id: 'dukhan', name: 'Dukhan Bank', name_ar: 'بنك دخان', country: 'QA', logo: 'dukhan.svg', color: '#003D7A' },

  // BAHRAIN
  { id: 'bbk', name: 'BBK', name_ar: 'بنك البحرين والكويت', country: 'BH', logo: 'bbk.svg', color: '#003D7A' },
  { id: 'bisb', name: 'Bahrain Islamic Bank', name_ar: 'بنك البحرين الإسلامي', country: 'BH', logo: 'bisb.svg', color: '#006C35' },
  { id: 'nbb', name: 'National Bank of Bahrain', name_ar: 'بنك البحرين الوطني', country: 'BH', logo: 'nbb.svg', color: '#003D7A' },
  { id: 'ahli', name: 'Ahli United Bank', name_ar: 'البنك الأهلي المتحد', country: 'BH', logo: 'ahli.svg', color: '#003D7A' },

  // OMAN
  { id: 'muscat', name: 'Bank Muscat', name_ar: 'بنك مسقط', country: 'OM', logo: 'muscat.svg', color: '#003D7A' },
  { id: 'nbo', name: 'National Bank of Oman', name_ar: 'البنك الوطني العماني', country: 'OM', logo: 'nbo.svg', color: '#003D7A' },
  { id: 'dhofar', name: 'Bank Dhofar', name_ar: 'بنك ظفار', country: 'OM', logo: 'dhofar.svg', color: '#ED1C24' },
  { id: 'sohar', name: 'Sohar International', name_ar: 'صحار الدولي', country: 'OM', logo: 'sohar.svg', color: '#003D7A' },
];
