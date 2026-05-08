export interface Bank {
  id: string;
  name: string;
  name_ar: string;
  country: string;
  logo: string;
  color: string;
  official_url?: string;
}

export const banks: Bank[] = [
  // --- SAUDI ARABIA (SA) - 37 Banks ---
  // Local (11)
  { id: 'alahli', name: 'Saudi National Bank', name_ar: 'البنك الأهلي السعودي', country: 'SA', logo: 'snb.svg', color: '#00843D', official_url: 'alahli.com' },
  { id: 'alrajhi', name: 'Al Rajhi Bank', name_ar: 'مصرف الراجحي', country: 'SA', logo: 'alrajhi.svg', color: '#006C35', official_url: 'alrajhibank.com.sa' },
  { id: 'riyad', name: 'Riyad Bank', name_ar: 'بنك الرياض', country: 'SA', logo: 'riyad.svg', color: '#0066B2', official_url: 'riyadbank.com' },
  { id: 'sabb', name: 'SABB (Saudi First)', name_ar: 'السعودي الأول', country: 'SA', logo: 'sabb.svg', color: '#004A99', official_url: 'sabb.com' },
  { id: 'bsf', name: 'Banque Saudi Fransi', name_ar: 'البنك السعودي الفرنسي', country: 'SA', logo: 'bsf.svg', color: '#005B94', official_url: 'alfransi.com.sa' },
  { id: 'alinma', name: 'Alinma Bank', name_ar: 'مصرف الإنماء', country: 'SA', logo: 'alinma.svg', color: '#003D7A', official_url: 'alinma.com' },
  { id: 'albilad', name: 'Bank AlBilad', name_ar: 'بنك البلاد', country: 'SA', logo: 'albilad.svg', color: '#0055AA', official_url: 'bankalbilad.com' },
  { id: 'aljazira', name: 'Bank AlJazira', name_ar: 'بنك الجزيرة', country: 'SA', logo: 'aljazira.svg', color: '#003D7A', official_url: 'baj.com.sa' },
  { id: 'anb', name: 'Arab National Bank', name_ar: 'البنك العربي الوطني', country: 'SA', logo: 'anb.svg', color: '#004C8F', official_url: 'anb.com.sa' },
  { id: 'gib_sa', name: 'Gulf International Bank', name_ar: 'بنك الخليج الدولي', country: 'SA', logo: 'gib.svg', color: '#003D7A', official_url: 'gib.com' },
  { id: 'saib', name: 'Saudi Investment Bank', name_ar: 'البنك السعودي للاستثمار', country: 'SA', logo: 'saib.svg', color: '#003366', official_url: 'saib.com.sa' },
  // Digital (4)
  { id: 'stc_bank', name: 'stc bank', name_ar: 'stc bank', country: 'SA', logo: 'stc_bank.svg', color: '#4F225E', official_url: 'stcpay.com.sa' },
  { id: 'd360', name: 'D360 Bank', name_ar: 'D360 بنك', country: 'SA', logo: 'd360.svg', color: '#1A1A1A', official_url: 'd360.com' },
  { id: 'sdb_digital', name: 'Saudi Digital Bank', name_ar: 'البنك الرقمي السعودي', country: 'SA', logo: 'sdb.svg', color: '#008080', official_url: 'sdb.gov.sa' },
  { id: 'ez_bank', name: 'EZ Bank', name_ar: 'EZ بنك', country: 'SA', logo: 'ez.svg', color: '#003D7A' },
  // Foreign in SA (selected)
  { id: 'enbd_sa', name: 'Emirates NBD', name_ar: 'بنك الإمارات دبي الوطني', country: 'SA', logo: 'enbd.svg', color: '#003D7A' },
  { id: 'nbk_sa', name: 'National Bank of Kuwait', name_ar: 'بنك الكويت الوطني', country: 'SA', logo: 'nbk.svg', color: '#003D7A' },
  { id: 'hsbc_sa', name: 'HSBC Saudi Arabia', name_ar: 'إتش إس بي سي', country: 'SA', logo: 'hsbc.svg', color: '#DB0011' },

  // --- UAE (AE) - 57 Banks ---
  // National (Selected)
  { id: 'fab', name: 'First Abu Dhabi Bank', name_ar: 'بنك أبوظبي الأول', country: 'AE', logo: 'fab.svg', color: '#E0004D', official_url: 'bankfab.com' },
  { id: 'enbd', name: 'Emirates NBD', name_ar: 'بنك الإمارات دبي الوطني', country: 'AE', logo: 'enbd.svg', color: '#003D7A', official_url: 'emiratesnbd.com' },
  { id: 'adcb', name: 'ADCB', name_ar: 'بنك أبوظبي التجاري', country: 'AE', logo: 'adcb.svg', color: '#ED1C24', official_url: 'adcb.com' },
  { id: 'mashreq', name: 'Mashreq Bank', name_ar: 'بنك المشرق', country: 'AE', logo: 'mashreq.svg', color: '#FF7900', official_url: 'mashreqbank.com' },
  { id: 'dib', name: 'Dubai Islamic Bank', name_ar: 'بنك دبي الإسلامي', country: 'AE', logo: 'dib.svg', color: '#006C35', official_url: 'dib.ae' },
  { id: 'adib', name: 'ADIB', name_ar: 'مصرف أبوظبي الإسلامي', country: 'AE', logo: 'adib.svg', color: '#003D7A', official_url: 'adib.ae' },
  { id: 'cbd', name: 'Commercial Bank of Dubai', name_ar: 'بنك دبي التجاري', country: 'AE', logo: 'cbd.svg', color: '#003D7A', official_url: 'cbd.ae' },
  { id: 'rakbank', name: 'RAKBANK', name_ar: 'بنك رأس الخيمة الوطني', country: 'AE', logo: 'rakbank.svg', color: '#003D7A', official_url: 'rakbank.ae' },
  { id: 'sib', name: 'Sharjah Islamic Bank', name_ar: 'مصرف الشارقة الإسلامي', country: 'AE', logo: 'sib.svg', color: '#006C35', official_url: 'sib.ae' },
  { id: 'ajman', name: 'Ajman Bank', name_ar: 'مصرف عجمان', country: 'AE', logo: 'ajman.svg', color: '#003D7A', official_url: 'ajmanbank.ae' },
  { id: 'wio', name: 'Wio Bank', name_ar: 'ويو بنك', country: 'AE', logo: 'wio.svg', color: '#000000', official_url: 'wio.io' },

  // --- KUWAIT (KW) - 22 Banks ---
  { id: 'nbk', name: 'National Bank of Kuwait', name_ar: 'بنك الكويت الوطني', country: 'KW', logo: 'nbk.svg', color: '#003D7A', official_url: 'nbk.com' },
  { id: 'kfh', name: 'Kuwait Finance House', name_ar: 'بيت التمويل الكويتي', country: 'KW', logo: 'kfh.svg', color: '#006C35', official_url: 'kfh.com' },
  { id: 'cbk', name: 'Commercial Bank of Kuwait', name_ar: 'البنك التجاري الكويتي', country: 'KW', logo: 'cbk.svg', color: '#ED1C24', official_url: 'cbk.com' },
  { id: 'abk', name: 'Al Ahli Bank of Kuwait', name_ar: 'البنك الأهلي الكويتي', country: 'KW', logo: 'abk.svg', color: '#003D7A', official_url: 'eahli.com' },
  { id: 'boubyan', name: 'Boubyan Bank', name_ar: 'بنك بوبيان', country: 'KW', logo: 'boubyan.svg', color: '#003D7A', official_url: 'bankboubyan.com' },
  { id: 'warba', name: 'Warba Bank', name_ar: 'بنك وربة', country: 'KW', logo: 'warba.svg', color: '#003D7A', official_url: 'warbabank.com' },
  { id: 'burgan', name: 'Burgan Bank', name_ar: 'بنك برقان', country: 'KW', logo: 'burgan.svg', color: '#003D7A', official_url: 'burgan.com' },
  { id: 'kib', name: 'Kuwait International Bank', name_ar: 'بنك الكويت الدولي', country: 'KW', logo: 'kib.svg', color: '#003D7A', official_url: 'kib.com.kw' },

  // --- QATAR (QA) - 16 Banks ---
  { id: 'qnb', name: 'Qatar National Bank', name_ar: 'بنك قطر الوطني', country: 'QA', logo: 'qnb.svg', color: '#7E191B', official_url: 'qnb.com' },
  { id: 'cbq', name: 'Commercial Bank of Qatar', name_ar: 'البنك التجاري القطري', country: 'QA', logo: 'cbq.svg', color: '#003D7A', official_url: 'cbq.qa' },
  { id: 'doha', name: 'Doha Bank', name_ar: 'بنك الدوحة', country: 'QA', logo: 'doha.svg', color: '#003D7A', official_url: 'dohabank.com' },
  { id: 'qib', name: 'Qatar Islamic Bank', name_ar: 'مصرف قطر الإسلامي', country: 'QA', logo: 'qib.svg', color: '#003D7A', official_url: 'qib.com.qa' },
  { id: 'dukhan', name: 'Dukhan Bank', name_ar: 'بنك دخان', country: 'QA', logo: 'dukhan.svg', color: '#003D7A', official_url: 'dukhanbank.com' },
  { id: 'alrayan', name: 'Masraf Al Rayan', name_ar: 'مصرف الريان', country: 'QA', logo: 'masraf.svg', color: '#003D7A', official_url: 'alrayan.com' },
  { id: 'ahlibank_qa', name: 'Ahlibank', name_ar: 'البنك الأهلي', country: 'QA', logo: 'ahli.svg', color: '#003D7A', official_url: 'ahlibank.com.qa' },

  // --- BAHRAIN (BH) - 36 Banks ---
  { id: 'nbb', name: 'National Bank of Bahrain', name_ar: 'بنك البحرين الوطني', country: 'BH', logo: 'nbb.svg', color: '#003D7A', official_url: 'nbbonline.com' },
  { id: 'bbk', name: 'Bank of Bahrain and Kuwait', name_ar: 'بنك البحرين والكويت', country: 'BH', logo: 'bbk.svg', color: '#003D7A', official_url: 'bbkonline.com' },
  { id: 'ahli_bh', name: 'Ahli United Bank', name_ar: 'البنك الأهلي المتحد', country: 'BH', logo: 'ahli.svg', color: '#003D7A', official_url: 'ahliunited.com' },
  { id: 'bisb', name: 'Bahrain Islamic Bank', name_ar: 'بنك البحرين الإسلامي', country: 'BH', logo: 'bisb.svg', color: '#006C35', official_url: 'bisb.com' },
  { id: 'alsalam', name: 'Al Salam Bank', name_ar: 'مصرف السلام', country: 'BH', logo: 'alsalam.svg', color: '#003D7A', official_url: 'alsalambank.com' },
  { id: 'albaraka_bh', name: 'Al Baraka Islamic Bank', name_ar: 'بنك البركة الإسلامي', country: 'BH', logo: 'albaraka.svg', color: '#D89A00', official_url: 'albaraka.com' },

  // --- OMAN (OM) - 19 Banks ---
  { id: 'muscat', name: 'Bank Muscat', name_ar: 'بنك مسقط', country: 'OM', logo: 'muscat.svg', color: '#003D7A', official_url: 'bankmuscat.com' },
  { id: 'nbo', name: 'National Bank of Oman', name_ar: 'البنك الوطني العماني', country: 'OM', logo: 'nbo.svg', color: '#003D7A', official_url: 'nbo.om' },
  { id: 'dhofar', name: 'Bank Dhofar', name_ar: 'بنك ظفار', country: 'OM', logo: 'dhofar.svg', color: '#ED1C24', official_url: 'bankdhofar.com' },
  { id: 'oab', name: 'Oman Arab Bank', name_ar: 'بنك عمان العربي', country: 'OM', logo: 'oab.svg', color: '#003D7A', official_url: 'oman-arab-bank.com' },
  { id: 'sohar_intl', name: 'Sohar International', name_ar: 'صحار الدولي', country: 'OM', logo: 'sohar.svg', color: '#003D7A', official_url: 'soharinternational.com' },
  { id: 'nizwa', name: 'Bank Nizwa', name_ar: 'بنك نزوى', country: 'OM', logo: 'nizwa.svg', color: '#006C35', official_url: 'banknizwa.om' },
];

export const getBankById = (id: string) => banks.find(bank => bank.id === id);
export const getBanksByCountry = (country: string) => banks.filter(bank => bank.country === country);
