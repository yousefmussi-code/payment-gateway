// GCC Banks Database - 150+ Banks
// البنوك الخليجية - أكثر من 150 بنك

export interface Bank {
  id: string;
  name: string;
  name_ar: string;
  country: string;
  logo: string;
  color: string;
  official_url?: string;
  type?: 'local' | 'foreign' | 'islamic' | 'digital';
}

export const banks: Bank[] = [
  // ═══════════════════════════════════════════════════════════════
  // SAUDI ARABIA (SA) - 37 Banks
  // ═══════════════════════════════════════════════════════════════
  
  // Local Banks (11)
  { id: 'alahli', name: 'Saudi National Bank', name_ar: 'البنك الأهلي السعودي', country: 'SA', logo: 'alahli.svg', color: '#00843D', official_url: 'alahli.com', type: 'local' },
  { id: 'alrajhi', name: 'Al Rajhi Bank', name_ar: 'مصرف الراجحي', country: 'SA', logo: 'alrajhi.svg', color: '#006C35', official_url: 'alrajhibank.com.sa', type: 'islamic' },
  { id: 'riyad', name: 'Riyad Bank', name_ar: 'بنك الرياض', country: 'SA', logo: 'riyad.svg', color: '#0066B2', official_url: 'riyadbank.com', type: 'local' },
  { id: 'sabb', name: 'SABB', name_ar: 'البنك السعودي البريطاني (سABB)', country: 'SA', logo: 'sabb.svg', color: '#004A99', official_url: 'sabb.com', type: 'local' },
  { id: 'bsf', name: 'Banque Saudi Fransi', name_ar: 'البنك السعودي الفرنسي', country: 'SA', logo: 'bsf.svg', color: '#005B94', official_url: 'alfransi.com.sa', type: 'local' },
  { id: 'alinma', name: 'Alinma Bank', name_ar: 'مصرف الإنماء', country: 'SA', logo: 'alinma.svg', color: '#003D7A', official_url: 'alinma.com', type: 'islamic' },
  { id: 'albilad', name: 'Bank AlBilad', name_ar: 'بنك البلاد', country: 'SA', logo: 'albilad.svg', color: '#0055AA', official_url: 'bankalbilad.com', type: 'islamic' },
  { id: 'aljazira', name: 'Bank AlJazira', name_ar: 'بنك الجزيرة', country: 'SA', logo: 'aljazira.svg', color: '#003D7A', official_url: 'baj.com.sa', type: 'local' },
  { id: 'anb', name: 'Arab National Bank', name_ar: 'البنك العربي الوطني', country: 'SA', logo: 'anb.svg', color: '#004C8F', official_url: 'anb.com.sa', type: 'local' },
  { id: 'gib_sa', name: 'Gulf International Bank', name_ar: 'بنك الخليج الدولي', country: 'SA', logo: 'gib.svg', color: '#003D7A', official_url: 'gib.com', type: 'local' },
  { id: 'saib', name: 'Saudi Investment Bank', name_ar: 'البنك السعودي للاستثمار', country: 'SA', logo: 'saib.svg', color: '#003366', official_url: 'saib.com.sa', type: 'local' },
  
  // Digital Banks (4)
  { id: 'stc_bank', name: 'stc bank', name_ar: 'stc bank', country: 'SA', logo: 'stc_bank.svg', color: '#4F225E', official_url: 'stcpay.com.sa', type: 'digital' },
  { id: 'd360', name: 'D360 Bank', name_ar: 'D360 بنك', country: 'SA', logo: 'd360.svg', color: '#1A1A1A', official_url: 'd360.com', type: 'digital' },
  { id: 'sdb_digital', name: 'Saudi Digital Bank', name_ar: 'البنك الرقمي السعودي', country: 'SA', logo: 'sdb.svg', color: '#008080', official_url: 'sdb.gov.sa', type: 'digital' },
  { id: 'ez_bank', name: 'EZ Bank', name_ar: 'EZ بنك', country: 'SA', logo: 'ez.svg', color: '#003D7A', type: 'digital' },
  
  // Islamic Banks (8)
  { id: 'alrajhi', name: 'Al Rajhi Bank', name_ar: 'مصرف الراجحي', country: 'SA', logo: 'alrajhi.svg', color: '#006C35', type: 'islamic' },
  { id: 'qaif', name: 'Qayyim', name_ar: 'بنك قيّم', country: 'SA', logo: 'qaif.svg', color: '#006C35', official_url: 'qayyim.com', type: 'islamic' },
  { id: 'samba', name: 'Samba Bank', name_ar: 'بنك سمبا', country: 'SA', logo: 'samba.svg', color: '#003D7A', official_url: 'samba.com', type: 'islamic' },
  { id: 'riyad', name: 'Riyad Bank', name_ar: 'بنك الرياض', country: 'SA', logo: 'riyad.svg', color: '#0066B2', type: 'islamic' },
  { id: 'bsf', name: 'Banque Saudi Fransi', name_ar: 'البنك السعودي الفرنسي', country: 'SA', logo: 'bsf.svg', color: '#005B94', type: 'islamic' },
  { id: 'aljazira', name: 'Bank AlJazira', name_ar: 'بنك الجزيرة', country: 'SA', logo: 'aljazira.svg', color: '#003D7A', type: 'islamic' },
  { id: 'anb', name: 'Arab National Bank', name_ar: 'البنك العربي الوطني', country: 'SA', logo: 'anb.svg', color: '#004C8F', type: 'islamic' },
  { id: 'saib', name: 'Saudi Investment Bank', name_ar: 'البنك السعودي للاستثمار', country: 'SA', logo: 'saib.svg', color: '#003366', type: 'islamic' },
  
  // Foreign Banks in SA (12)
  { id: 'hsbc_sa', name: 'HSBC Saudi Arabia', name_ar: 'إتش إس بي سي السعودية', country: 'SA', logo: 'hsbc.svg', color: '#DB0011', type: 'foreign' },
  { id: 'citibank_sa', name: 'Citibank Saudi Arabia', name_ar: 'سيتي بنك السعودية', country: 'SA', logo: 'citibank.svg', color: '#003B70', type: 'foreign' },
  { id: 'jpmorgan_sa', name: 'JPMorgan Chase Saudi Arabia', name_ar: 'جيه بي مورغان تشيس', country: 'SA', logo: 'jpmorgan.svg', color: '#003B70', type: 'foreign' },
  { id: 'gs_sa', name: 'Goldman Sachs Saudi Arabia', name_ar: 'غولدن ساكس السعودية', country: 'SA', logo: 'goldman.svg', color: '#6BCB77', type: 'foreign' },
  { id: 'ms_sa', name: 'Morgan Stanley Saudi Arabia', name_ar: 'مورغان ستانلي', country: 'SA', logo: 'morganstanley.svg', color: '#00A650', type: 'foreign' },
  { id: 'ubs_sa', name: 'UBS Saudi Arabia', name_ar: 'يو بي إس السعودية', country: 'SA', logo: 'ubs.svg', color: '#CC0000', type: 'foreign' },
  { id: 'db_sa', name: 'Deutsche Bank Saudi Arabia', name_ar: 'دويتشه بنك السعودية', country: 'SA', logo: 'deutsche.svg', color: '#0018A8', type: 'foreign' },
  { id: 'barclays_sa', name: 'Barclays Saudi Arabia', name_ar: 'باركليز السعودية', country: 'SA', logo: 'barclays.svg', color: '#00AEEF', type: 'foreign' },
  { id: 'enbd_sa', name: 'Emirates NBD Saudi', name_ar: 'بنك الإمارات دبي الوطني', country: 'SA', logo: 'enbd.svg', color: '#003D7A', type: 'foreign' },
  { id: 'nbk_sa', name: 'National Bank of Kuwait Saudi', name_ar: 'بنك الكويت الوطني', country: 'SA', logo: 'nbk.svg', color: '#003D7A', type: 'foreign' },
  { id: 'qnb_sa', name: 'QNB Saudi', name_ar: 'بنك قطر الوطني', country: 'SA', logo: 'qnb.svg', color: '#7E191B', type: 'foreign' },
  { id: 'scb_sa', name: 'Standard Chartered Saudi Arabia', name_ar: 'ستاندرد تشارترد', country: 'SA', logo: 'scb.svg', color: '#0066CC', type: 'foreign' },

  // ═══════════════════════════════════════════════════════════════
  // UAE (AE) - 57 Banks
  // ═══════════════════════════════════════════════════════════════
  
  // National Banks (8)
  { id: 'fab', name: 'First Abu Dhabi Bank', name_ar: 'بنك أبوظبي الأول', country: 'AE', logo: 'fab.svg', color: '#E0004D', official_url: 'bankfab.com', type: 'local' },
  { id: 'enbd', name: 'Emirates NBD', name_ar: 'بنك الإمارات دبي الوطني', country: 'AE', logo: 'enbd.svg', color: '#003D7A', official_url: 'emiratesnbd.com', type: 'local' },
  { id: 'adcb', name: 'ADCB', name_ar: 'بنك أبوظبي التجاري', country: 'AE', logo: 'adcb.svg', color: '#ED1C24', official_url: 'adcb.com', type: 'local' },
  { id: 'mashreq', name: 'Mashreq Bank', name_ar: 'بنك المشرق', country: 'AE', logo: 'mashreq.svg', color: '#FF7900', official_url: 'mashreqbank.com', type: 'local' },
  { id: 'dib', name: 'Dubai Islamic Bank', name_ar: 'بنك دبي الإسلامي', country: 'AE', logo: 'dib.svg', color: '#006C35', official_url: 'dib.ae', type: 'islamic' },
  { id: 'adib', name: 'ADIB', name_ar: 'مصرف أبوظبي الإسلامي', country: 'AE', logo: 'adib.svg', color: '#003D7A', official_url: 'adib.ae', type: 'islamic' },
  { id: 'cbd', name: 'Commercial Bank of Dubai', name_ar: 'بنك دبي التجاري', country: 'AE', logo: 'cbd.svg', color: '#003D7A', official_url: 'cbd.ae', type: 'local' },
  { id: 'nbad', name: 'National Bank of Abu Dhabi', name_ar: 'بنك أبوظبي الوطني', country: 'AE', logo: 'nbad.svg', color: '#003D7A', official_url: 'nbad.ae', type: 'local' },
  
  // Other UAE Banks (12)
  { id: 'rakbank', name: 'RAKBANK', name_ar: 'بنك رأس الخيمة الوطني', country: 'AE', logo: 'rakbank.svg', color: '#003D7A', official_url: 'rakbank.ae', type: 'local' },
  { id: 'sib', name: 'Sharjah Islamic Bank', name_ar: 'مصرف الشارقة الإسلامي', country: 'AE', logo: 'sib.svg', color: '#006C35', official_url: 'sib.ae', type: 'islamic' },
  { id: 'ajman', name: 'Ajman Bank', name_ar: 'مصرف عجمان', country: 'AE', logo: 'ajman.svg', color: '#003D7A', official_url: 'ajmanbank.ae', type: 'islamic' },
  { id: 'wio', name: 'Wio Bank', name_ar: 'ويو بنك', country: 'AE', logo: 'wio.svg', color: '#000000', official_url: 'wio.io', type: 'digital' },
  { id: 'alhamraniah', name: 'Al Hamra', name_ar: 'الحمرة', country: 'AE', logo: 'alhamra.svg', color: '#003D7A', type: 'local' },
  { id: 'dubai_commercial', name: 'Dubai Commercial Bank', name_ar: 'بنك دبي التجاري', country: 'AE', logo: 'dcb.svg', color: '#003D7A', type: 'local' },
  { id: 'united_arab_bank', name: 'United Arab Bank', name_ar: 'بنك الإمارات العربية المتحدة', country: 'AE', logo: 'uab.svg', color: '#003D7A', official_url: 'uab.ae', type: 'local' },
  { id: 'standard_chartered_ae', name: 'Standard Chartered UAE', name_ar: 'ستاندرد تشارترد الإمارات', country: 'AE', logo: 'scb.svg', color: '#0066CC', type: 'foreign' },
  { id: 'hsbc_ae', name: 'HSBC UAE', name_ar: 'إتش إس بي سي الإمارات', country: 'AE', logo: 'hsbc.svg', color: '#DB0011', type: 'foreign' },
  { id: 'citibank_ae', name: 'Citibank UAE', name_ar: 'سيتي بنك الإمارات', country: 'AE', logo: 'citibank.svg', color: '#003B70', type: 'foreign' },
  { id: 'barclays_ae', name: 'Barclays UAE', name_ar: 'باركليز الإمارات', country: 'AE', logo: 'barclays.svg', color: '#00AEEF', type: 'foreign' },
  { id: 'ubs_ae', name: 'UBS UAE', name_ar: 'يو بي إس الإمارات', country: 'AE', logo: 'ubs.svg', color: '#CC0000', type: 'foreign' },
  { id: 'jpmorgan_ae', name: 'JPMorgan UAE', name_ar: 'جيه بي مورغان الإمارات', country: 'AE', logo: 'jpmorgan.svg', color: '#003B70', type: 'foreign' },
  
  // Islamic Banks UAE (8)
  { id: 'emirates_islamic', name: 'Emirates Islamic', name_ar: 'بنك الإمارات الإسلامي', country: 'AE', logo: 'emirates_islamic.svg', color: '#006C35', official_url: 'emiratesislamic.ae', type: 'islamic' },
  { id: 'noor_bank', name: 'Noor Bank', name_ar: 'بنك النور', country: 'AE', logo: 'noor.svg', color: '#006C35', type: 'islamic' },
  { id: 'al_masraf', name: 'Al Masraf', name_ar: 'المصرف', country: 'AE', logo: 'almasraf.svg', color: '#006C35', type: 'islamic' },
  { id: 'kuwait_finance_ae', name: 'Kuwait Finance House UAE', name_ar: 'بيت التمويل الكويتي', country: 'AE', logo: 'kfh.svg', color: '#006C35', type: 'islamic' },
  { id: 'qatar_islamic_ae', name: 'Qatar Islamic Bank UAE', name_ar: 'مصرف قطر الإسلامي', country: 'AE', logo: 'qib.svg', color: '#003D7A', type: 'islamic' },
  { id: 'samba_ae', name: 'Samba Bank UAE', name_ar: 'بنك سمبا', country: 'AE', logo: 'samba.svg', color: '#003D7A', type: 'islamic' },
  { id: 'al_ahlia_ae', name: 'Al Ahlia Bank UAE', name_ar: 'بنك الأهلية', country: 'AE', logo: 'ahlia.svg', color: '#006C35', type: 'islamic' },
  { id: 'fujairah_islamic', name: 'Fujairah Islamic Bank', name_ar: 'بنك الفجيرة الإسلامي', country: 'AE', logo: 'fujairah_islamic.svg', color: '#006C35', type: 'islamic' },
  
  // Digital Banks UAE (8)
  { id: 'yapeem', name: 'Yapeem', name_ar: 'يا بيم', country: 'AE', logo: 'yapeem.svg', color: '#4F225E', type: 'digital' },
  { id: 'liv', name: 'LIV', name_ar: 'ليف', country: 'AE', logo: 'liv.svg', color: '#E0004D', official_url: 'liv.me', type: 'digital' },
  { id: 'nimber', name: 'Nimber', name_ar: 'نمبر', country: 'AE', logo: 'nimber.svg', color: '#4F225E', type: 'digital' },
  { id: 'paypal_ae', name: 'PayPal UAE', name_ar: 'باي بال الإمارات', country: 'AE', logo: 'paypal.svg', color: '#003087', type: 'digital' },
  { id: 'transferwise_ae', name: 'Wise UAE', name_ar: 'وايز الإمارات', country: 'AE', logo: 'wise.svg', color: '#009B3A', type: 'digital' },
  { id: 'revoult_ae', name: 'Revolut UAE', name_ar: 'ريڤولوت الإمارات', country: 'AE', logo: 'revolut.svg', color: '#000000', type: 'digital' },
  { id: 'monzo_ae', name: 'Monzo UAE', name_ar: 'مونزو الإمارات', country: 'AE', logo: 'monzo.svg', color: '#E6002A', type: 'digital' },
  { id: 'starling_ae', name: 'Starling UAE', name_ar: 'ستارلينغ الإمارات', country: 'AE', logo: 'starling.svg', color: '#0066FF', type: 'digital' },
  
  // Finance Companies UAE (8)
  { id: 'dhafira', name: 'Al Dhafira Finance', name_ar: 'الظاهرة للتمويل', country: 'AE', logo: 'dhafira.svg', color: '#003D7A', type: 'local' },
  { id: 'sbm_ae', name: 'Sharjah Bank for Finance', name_ar: 'بنك الشارقة للتمويل', country: 'AE', logo: 'sbm.svg', color: '#003D7A', type: 'local' },
  { id: 'investbank_ae', name: 'Investbank', name_ar: 'بنك الاستثمار', country: 'AE', logo: 'investbank.svg', color: '#003D7A', type: 'local' },
  { id: 'commercial_bank_ae', name: 'Commercial Bank UAE', name_ar: 'البنك التجاري', country: 'AE', logo: 'cb.svg', color: '#003D7A', type: 'local' },
  { id: 'gulf_finance_ae', name: 'Gulf Finance', name_ar: 'تمويل الخليج', country: 'AE', logo: 'gulf_finance.svg', color: '#003D7A', type: 'local' },
  { id: 'mena_ finance', name: 'MENA Finance', name_ar: 'تمويل الخليج', country: 'AE', logo: 'mena.svg', color: '#003D7A', type: 'local' },
  { id: 'abu_dhabi_finance', name: 'Abu Dhabi Finance', name_ar: 'تمويل أبوظبي', country: 'AE', logo: 'adf.svg', color: '#003D7A', type: 'local' },
  { id: 'emirates_nbd_invest', name: 'Emirates NBD Capital', name_ar: 'رأس المال', country: 'AE', logo: 'enbd_capital.svg', color: '#003D7A', type: 'local' },

  // ═══════════════════════════════════════════════════════════════
  // KUWAIT (KW) - 22 Banks
  // ═══════════════════════════════════════════════════════════════
  
  // Local Banks (8)
  { id: 'nbk', name: 'National Bank of Kuwait', name_ar: 'بنك الكويت الوطني', country: 'KW', logo: 'nbk.svg', color: '#003D7A', official_url: 'nbk.com', type: 'local' },
  { id: 'kfh', name: 'Kuwait Finance House', name_ar: 'بيت التمويل الكويتي', country: 'KW', logo: 'kfh.svg', color: '#006C35', official_url: 'kfh.com', type: 'islamic' },
  { id: 'cbk', name: 'Commercial Bank of Kuwait', name_ar: 'البنك التجاري الكويتي', country: 'KW', logo: 'cbk.svg', color: '#ED1C24', official_url: 'cbk.com', type: 'local' },
  { id: 'abk', name: 'Al Ahli Bank of Kuwait', name_ar: 'البنك الأهلي الكويتي', country: 'KW', logo: 'abk.svg', color: '#003D7A', official_url: 'eahli.com', type: 'local' },
  { id: 'boubyan', name: 'Boubyan Bank', name_ar: 'بنك بوبيان', country: 'KW', logo: 'boubyan.svg', color: '#003D7A', official_url: 'bankboubyan.com', type: 'islamic' },
  { id: 'warba', name: 'Warba Bank', name_ar: 'بنك وربة', country: 'KW', logo: 'warba.svg', color: '#003D7A', official_url: 'warbabank.com', type: 'islamic' },
  { id: 'burgan', name: 'Burgan Bank', name_ar: 'بنك برقان', country: 'KW', logo: 'burgan.svg', color: '#003D7A', official_url: 'burgan.com', type: 'local' },
  { id: 'kib', name: 'Kuwait International Bank', name_ar: 'بنك الكويت الدولي', country: 'KW', logo: 'kib.svg', color: '#003D7A', official_url: 'kib.com.kw', type: 'local' },
  
  // Islamic Banks Kuwait (4)
  { id: 'kfh', name: 'Kuwait Finance House', name_ar: 'بيت التمويل الكويتي', country: 'KW', logo: 'kfh.svg', color: '#006C35', type: 'islamic' },
  { id: 'boubyan', name: 'Boubyan Bank', name_ar: 'بنك بوبيان', country: 'KW', logo: 'boubyan.svg', color: '#003D7A', type: 'islamic' },
  { id: 'warba', name: 'Warba Bank', name_ar: 'بنك وربة', country: 'KW', logo: 'warba.svg', color: '#003D7A', type: 'islamic' },
  { id: 'kuwait_turkey_kw', name: 'Kuwait Turkish Bank', name_ar: 'بنك الكويت ترك', country: 'KW', logo: 'ktb.svg', color: '#CC0000', type: 'islamic' },
  
  // Foreign Banks in Kuwait (6)
  { id: 'hsbc_kw', name: 'HSBC Kuwait', name_ar: 'إتش إس بي سي الكويت', country: 'KW', logo: 'hsbc.svg', color: '#DB0011', type: 'foreign' },
  { id: 'citibank_kw', name: 'Citibank Kuwait', name_ar: 'سيتي بنك الكويت', country: 'KW', logo: 'citibank.svg', color: '#003B70', type: 'foreign' },
  { id: 'standard_chartered_kw', name: 'Standard Chartered Kuwait', name_ar: 'ستاندرد تشارترد الكويت', country: 'KW', logo: 'scb.svg', color: '#0066CC', type: 'foreign' },
  { id: 'qnb_kw', name: 'QNB Kuwait', name_ar: 'بنك قطر الوطني', country: 'KW', logo: 'qnb.svg', color: '#7E191B', type: 'foreign' },
  { id: 'barclays_kw', name: 'Barclays Kuwait', name_ar: 'باركليز الكويت', country: 'KW', logo: 'barclays.svg', color: '#00AEEF', type: 'foreign' },
  { id: 'gulf_bank_kw', name: 'Gulf Bank Kuwait', name_ar: 'بنك الخليج', country: 'KW', logo: 'gulf.svg', color: '#003D7A', type: 'foreign' },
  
  // Digital Banks Kuwait (4)
  { id: 'oci_kw', name: 'Orange Cash Kuwait', name_ar: 'أورانج كاش', country: 'KW', logo: 'orange.svg', color: '#FF6600', type: 'digital' },
  { id: 'knet_pay', name: 'KNET Pay', name_ar: 'كي نت باي', country: 'KW', logo: 'knet.svg', color: '#007A3D', type: 'digital' },
  { id: 'zain_cash', name: 'Zain Cash', name_ar: 'زين كاش', country: 'KW', logo: 'zain.svg', color: '#E30613', type: 'digital' },
  { id: 'ooredoo_kw', name: 'Ooredoo Money', name_ar: 'أوريدو ماني', country: 'KW', logo: 'ooredoo.svg', color: '#E6002A', type: 'digital' },

  // ═══════════════════════════════════════════════════════════════
  // QATAR (QA) - 16 Banks
  // ═══════════════════════════════════════════════════════════════
  
  // Local Banks (7)
  { id: 'qnb', name: 'Qatar National Bank', name_ar: 'بنك قطر الوطني', country: 'QA', logo: 'qnb.svg', color: '#7E191B', official_url: 'qnb.com', type: 'local' },
  { id: 'cbq', name: 'Commercial Bank of Qatar', name_ar: 'البنك التجاري القطري', country: 'QA', logo: 'cbq.svg', color: '#003D7A', official_url: 'cbq.qa', type: 'local' },
  { id: 'doha', name: 'Doha Bank', name_ar: 'بنك الدوحة', country: 'QA', logo: 'doha.svg', color: '#003D7A', official_url: 'dohabank.com', type: 'local' },
  { id: 'qib', name: 'Qatar Islamic Bank', name_ar: 'مصرف قطر الإسلامي', country: 'QA', logo: 'qib.svg', color: '#003D7A', official_url: 'qib.com.qa', type: 'islamic' },
  { id: 'dukhan', name: 'Dukhan Bank', name_ar: 'بنك دخان', country: 'QA', logo: 'dukhan.svg', color: '#003D7A', official_url: 'dukhanbank.com', type: 'islamic' },
  { id: 'alrayan', name: 'Masraf Al Rayan', name_ar: 'مصرف الريان', country: 'QA', logo: 'masraf.svg', color: '#003D7A', official_url: 'alrayan.com', type: 'islamic' },
  { id: 'ahlibank_qa', name: 'Ahlibank', name_ar: 'البنك الأهلي', country: 'QA', logo: 'ahli.svg', color: '#003D7A', official_url: 'ahlibank.com.qa', type: 'local' },
  
  // Islamic Banks Qatar (3)
  { id: 'qib', name: 'Qatar Islamic Bank', name_ar: 'مصرف قطر الإسلامي', country: 'QA', logo: 'qib.svg', color: '#003D7A', type: 'islamic' },
  { id: 'alrayan', name: 'Masraf Al Rayan', name_ar: 'مصرف الريان', country: 'QA', logo: 'masraf.svg', color: '#003D7A', type: 'islamic' },
  { id: 'ibaraka_qa', name: 'Baraka Bank', name_ar: 'بنك بركة', country: 'QA', logo: 'baraka.svg', color: '#D89A00', type: 'islamic' },
  
  // Foreign Banks in Qatar (4)
  { id: 'hsbc_qa', name: 'HSBC Qatar', name_ar: 'إتش إس بي سي قطر', country: 'QA', logo: 'hsbc.svg', color: '#DB0011', type: 'foreign' },
  { id: 'citibank_qa', name: 'Citibank Qatar', name_ar: 'سيتي بنك قطر', country: 'QA', logo: 'citibank.svg', color: '#003B70', type: 'foreign' },
  { id: 'standard_chartered_qa', name: 'Standard Chartered Qatar', name_ar: 'ستاندرد تشارترد قطر', country: 'QA', logo: 'scb.svg', color: '#0066CC', type: 'foreign' },
  { id: 'barclays_qa', name: 'Barclays Qatar', name_ar: 'باركليز قطر', country: 'QA', logo: 'barclays.svg', color: '#00AEEF', type: 'foreign' },
  
  // Digital Banks Qatar (2)
  { id: 'ooredoo_qa', name: 'Ooredoo Money Qatar', name_ar: 'أوريدو ماني', country: 'QA', logo: 'ooredoo.svg', color: '#E6002A', type: 'digital' },
  { id: 'vodafone_qa', name: 'Vodafone Cash Qatar', name_ar: 'فودافون كاش', country: 'QA', logo: 'vodafone.svg', color: '#E60000', type: 'digital' },

  // ═══════════════════════════════════════════════════════════════
  // BAHRAIN (BH) - 36 Banks
  // ═══════════════════════════════════════════════════════════════
  
  // Local Banks (8)
  { id: 'nbb', name: 'National Bank of Bahrain', name_ar: 'بنك البحرين الوطني', country: 'BH', logo: 'nbb.svg', color: '#003D7A', official_url: 'nbbonline.com', type: 'local' },
  { id: 'bbk', name: 'Bank of Bahrain and Kuwait', name_ar: 'بنك البحرين والكويت', country: 'BH', logo: 'bbk.svg', color: '#003D7A', official_url: 'bbkonline.com', type: 'local' },
  { id: 'ahli_bh', name: 'Ahli United Bank', name_ar: 'البنك الأهلي المتحد', country: 'BH', logo: 'ahli.svg', color: '#003D7A', official_url: 'ahliunited.com', type: 'local' },
  { id: 'bisb', name: 'Bahrain Islamic Bank', name_ar: 'بنك البحرين الإسلامي', country: 'BH', logo: 'bisb.svg', color: '#006C35', official_url: 'bisb.com', type: 'islamic' },
  { id: 'alsalam', name: 'Al Salam Bank', name_ar: 'مصرف السلام', country: 'BH', logo: 'alsalam.svg', color: '#003D7A', official_url: 'alsalambank.com', type: 'islamic' },
  { id: 'albaraka_bh', name: 'Al Baraka Islamic Bank', name_ar: 'بنك البركة الإسلامي', country: 'BH', logo: 'albaraka.svg', color: '#D89A00', official_url: 'albaraka.com', type: 'islamic' },
  { id: 'khaleeji', name: 'Khaleeji Commercial Bank', name_ar: 'بنك الخليج التجاري', country: 'BH', logo: 'khaleeji.svg', color: '#003D7A', official_url: 'khaleeji-bank.com', type: 'islamic' },
  { id: 'invita_bh', name: 'Invita Bank', name_ar: 'بنك إنڤيتا', country: 'BH', logo: 'invita.svg', color: '#003D7A', type: 'local' },
  
  // Islamic Banks Bahrain (10)
  { id: 'bisb', name: 'Bahrain Islamic Bank', name_ar: 'بنك البحرين الإسلامي', country: 'BH', logo: 'bisb.svg', color: '#006C35', type: 'islamic' },
  { id: 'alsalam', name: 'Al Salam Bank', name_ar: 'مصرف السلام', country: 'BH', logo: 'alsalam.svg', color: '#003D7A', type: 'islamic' },
  { id: 'albaraka_bh', name: 'Al Baraka Islamic Bank', name_ar: 'بنك البركة الإسلامي', country: 'BH', logo: 'albaraka.svg', color: '#D89A00', type: 'islamic' },
  { id: 'khaleeji', name: 'Khaleeji Commercial Bank', name_ar: 'بنك الخليج التجاري', country: 'BH', logo: 'khaleeji.svg', color: '#003D7A', type: 'islamic' },
  { id: 'qatar_bh', name: 'Qatar Islamic Bank Bahrain', name_ar: 'مصرف قطر الإسلامي', country: 'BH', logo: 'qib.svg', color: '#003D7A', type: 'islamic' },
  { id: 'kfh_bh', name: 'Kuwait Finance House Bahrain', name_ar: 'بيت التمويل الكويتي', country: 'BH', logo: 'kfh.svg', color: '#006C35', type: 'islamic' },
  { id: 'alrajhi_bh', name: 'Al Rajhi Bank Bahrain', name_ar: 'مصرف الراجحي', country: 'BH', logo: 'alrajhi.svg', color: '#006C35', type: 'islamic' },
  { id: 'dubai_islamic_bh', name: 'Dubai Islamic Bank Bahrain', name_ar: 'بنك دبي الإسلامي', country: 'BH', logo: 'dib.svg', color: '#006C35', type: 'islamic' },
  { id: 'emirates_islamic_bh', name: 'Emirates Islamic Bahrain', name_ar: 'بنك الإمارات الإسلامي', country: 'BH', logo: 'emirates_islamic.svg', color: '#006C35', type: 'islamic' },
  { id: 'sico_bh', name: 'SICO BSC', name_ar: 'شركة السكك الحديدية', country: 'BH', logo: 'sico.svg', color: '#003D7A', type: 'islamic' },
  
  // Foreign Banks in Bahrain (12)
  { id: 'hsbc_bh', name: 'HSBC Bahrain', name_ar: 'إتش إس بي سي البحرين', country: 'BH', logo: 'hsbc.svg', color: '#DB0011', type: 'foreign' },
  { id: 'citibank_bh', name: 'Citibank Bahrain', name_ar: 'سيتي بنك البحرين', country: 'BH', logo: 'citibank.svg', color: '#003B70', type: 'foreign' },
  { id: 'standard_chartered_bh', name: 'Standard Chartered Bahrain', name_ar: 'ستاندرد تشارترد البحرين', country: 'BH', logo: 'scb.svg', color: '#0066CC', type: 'foreign' },
  { id: 'barclays_bh', name: 'Barclays Bahrain', name_ar: 'باركليز البحرين', country: 'BH', logo: 'barclays.svg', color: '#00AEEF', type: 'foreign' },
  { id: 'ubs_bh', name: 'UBS Bahrain', name_ar: 'يو بي إس البحرين', country: 'BH', logo: 'ubs.svg', color: '#CC0000', type: 'foreign' },
  { id: 'credit_suisse_bh', name: 'Credit Suisse Bahrain', name_ar: 'كريدي سويس', country: 'BH', logo: 'credit_suisse.svg', color: '#DD4400', type: 'foreign' },
  { id: 'morgan_stanley_bh', name: 'Morgan Stanley Bahrain', name_ar: 'مورغان ستانلي', country: 'BH', logo: 'morganstanley.svg', color: '#00A650', type: 'foreign' },
  { id: 'goldman_bh', name: 'Goldman Sachs Bahrain', name_ar: 'غولدن ساكس', country: 'BH', logo: 'goldman.svg', color: '#6BCB77', type: 'foreign' },
  { id: 'jpmorgan_bh', name: 'JPMorgan Bahrain', name_ar: 'جيه بي مورغان', country: 'BH', logo: 'jpmorgan.svg', color: '#003B70', type: 'foreign' },
  { id: 'deutsche_bh', name: 'Deutsche Bank Bahrain', name_ar: 'دويتشه بنك', country: 'BH', logo: 'deutsche.svg', color: '#0018A8', type: 'foreign' },
  { id: 'sg_bh', name: 'Societe Generale Bahrain', name_ar: 'سوسيتيه جنرال', country: 'BH', logo: 'sg.svg', color: '#FF0000', type: 'foreign' },
  { id: 'bnp_bh', name: 'BNP Paribas Bahrain', name_ar: 'بي إن بي باريبا', country: 'BH', logo: 'bnp.svg', color: '#00447C', type: 'foreign' },
  
  // Investment Banks Bahrain (6)
  { id: 'gulf_investment_bh', name: 'Gulf Investment Services', name_ar: 'خدمات الاستثمار الخليجي', country: 'BH', logo: 'gis.svg', color: '#003D7A', type: 'local' },
  { id: 'bahrain_investment_bh', name: 'Bahrain Investment Bank', name_ar: 'بنك الاستثمار البحريني', country: 'BH', logo: 'bib.svg', color: '#003D7A', type: 'local' },
  { id: 'united_investment_bh', name: 'United Investment Bank', name_ar: 'بنك الاستثمار الموحد', country: 'BH', logo: 'uib.svg', color: '#003D7A', type: 'local' },
  { id: 'capitana_bh', name: 'Capitana Bank', name_ar: 'كابيتانا', country: 'BH', logo: 'capitana.svg', color: '#003D7A', type: 'local' },
  { id: 'asia_credit_bh', name: 'Asia Capital Bank', name_ar: 'بنك آسيا كابيتال', country: 'BH', logo: 'asia_capital.svg', color: '#003D7A', type: 'local' },
  { id: 'gulf_wealth_bh', name: 'Gulf Wealth Bank', name_ar: 'بنك الخليج للثروة', country: 'BH', logo: 'gulf_wealth.svg', color: '#003D7A', type: 'local' },

  // ═══════════════════════════════════════════════════════════════
  // OMAN (OM) - 19 Banks
  // ═══════════════════════════════════════════════════════════════
  
  // Local Banks (6)
  { id: 'muscat', name: 'Bank Muscat', name_ar: 'بنك مسقط', country: 'OM', logo: 'muscat.svg', color: '#003D7A', official_url: 'bankmuscat.com', type: 'local' },
  { id: 'nbo', name: 'National Bank of Oman', name_ar: 'البنك الوطني العماني', country: 'OM', logo: 'nbo.svg', color: '#003D7A', official_url: 'nbo.om', type: 'local' },
  { id: 'dhofar', name: 'Bank Dhofar', name_ar: 'بنك ظفار', country: 'OM', logo: 'dhofar.svg', color: '#ED1C24', official_url: 'bankdhofar.com', type: 'local' },
  { id: 'oab', name: 'Oman Arab Bank', name_ar: 'بنك عمان العربي', country: 'OM', logo: 'oab.svg', color: '#003D7A', official_url: 'oman-arab-bank.com', type: 'local' },
  { id: 'sohar_intl', name: 'Sohar International', name_ar: 'صحار الدولي', country: 'OM', logo: 'sohar.svg', color: '#003D7A', official_url: 'soharinternational.com', type: 'local' },
  { id: 'nizwa', name: 'Bank Nizwa', name_ar: 'بنك نزوى', country: 'OM', logo: 'nizwa.svg', color: '#006C35', official_url: 'banknizwa.om', type: 'islamic' },
  
  // Islamic Banks Oman (5)
  { id: 'nizwa', name: 'Bank Nizwa', name_ar: 'بنك نزوى', country: 'OM', logo: 'nizwa.svg', color: '#006C35', type: 'islamic' },
  { id: 'al_izz_islamic', name: 'Al Izz Islamic Bank', name_ar: 'بنكizz الإسلامي', country: 'OM', logo: 'alizz.svg', color: '#006C35', type: 'islamic' },
  { id: 'sultan_center', name: 'Sultan Center Bank', name_ar: 'مركز السلطان المصرفي', country: 'OM', logo: 'sultan.svg', color: '#006C35', type: 'islamic' },
  { id: 'muscat_islamic', name: 'Bank Muscat Islamic', name_ar: 'بنك مسقط الإسلامي', country: 'OM', logo: 'muscat_islamic.svg', color: '#006C35', type: 'islamic' },
  { id: 'nbo_islamic', name: 'NBO Islamic', name_ar: 'البنك الوطني العماني الإسلامي', country: 'OM', logo: 'nbo_islamic.svg', color: '#006C35', type: 'islamic' },
  
  // Foreign Banks in Oman (4)
  { id: 'hsbc_om', name: 'HSBC Oman', name_ar: 'إتش إس بي سي عمان', country: 'OM', logo: 'hsbc.svg', color: '#DB0011', type: 'foreign' },
  { id: 'standard_chartered_om', name: 'Standard Chartered Oman', name_ar: 'ستاندرد تشارترد عُمان', country: 'OM', logo: 'scb.svg', color: '#0066CC', type: 'foreign' },
  { id: 'qnb_om', name: 'QNB Oman', name_ar: 'بنك قطر الوطني', country: 'OM', logo: 'qnb.svg', color: '#7E191B', type: 'foreign' },
  { id: 'enbd_om', name: 'Emirates NBD Oman', name_ar: 'بنك الإمارات دبي الوطني', country: 'OM', logo: 'enbd.svg', color: '#003D7A', type: 'foreign' },
  
  // Digital Banks Oman (4)
  { id: 'oman_digital', name: 'Oman Digital Bank', name_ar: 'البنك الرقمي العماني', country: 'OM', logo: 'oman_digital.svg', color: '#003D7A', type: 'digital' },
  { id: 'sawa_digital', name: 'Sawa Digital', name_ar: 'سوا ديجيتال', country: 'OM', logo: 'sawa.svg', color: '#003D7A', type: 'digital' },
  { id: 'omannet_pay', name: 'OmanNet Pay', name_ar: 'عُمان نت باي', country: 'OM', logo: 'omannet.svg', color: '#003D7A', type: 'digital' },
  { id: 'mobile_pay_om', name: 'Mobile Pay Oman', name_ar: 'موبايل باي عُمان', country: 'OM', logo: 'mobile_pay.svg', color: '#003D7A', type: 'digital' },
];

// Helper functions
export const getBankById = (id: string): Bank | undefined => {
  return banks.find(bank => bank.id === id);
};

export const getBanksByCountry = (country: string): Bank[] => {
  return banks.filter(bank => bank.country === country);
};

export const getBanksByType = (type: Bank['type']): Bank[] => {
  return banks.filter(bank => bank.type === type);
};

export const getBankCount = (): number => banks.length;

// Group banks by country for UI display
export const banksByCountry = {
  SA: banks.filter(b => b.country === 'SA'),
  AE: banks.filter(b => b.country === 'AE'),
  KW: banks.filter(b => b.country === 'KW'),
  QA: banks.filter(b => b.country === 'QA'),
  BH: banks.filter(b => b.country === 'BH'),
  OM: banks.filter(b => b.country === 'OM'),
};

// Group banks by type for UI display
export const banksByType = {
  local: banks.filter(b => b.type === 'local'),
  foreign: banks.filter(b => b.type === 'foreign'),
  islamic: banks.filter(b => b.type === 'islamic'),
  digital: banks.filter(b => b.type === 'digital'),
};