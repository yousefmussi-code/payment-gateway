// BankLayout - تخطيط البنك بالعلامة التجارية الكاملة
// نسخ طبق الأصل من هوية البنك الرسمية

import React, { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { getBrandingByCompany, CompanyBranding } from '@/lib/brandingSystem';
import { banks } from '@/lib/banks';
import { applyBrandCSSVariables, clearAllBrandCSSVariables } from '@/components/DynamicBranding';
import { BrandLogo } from '@/components/BrandLogo';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

interface BankLayoutProps {
  companyKey: string;
  children: React.ReactNode;
  amount?: string;
  serviceName?: string;
}

export const BankLayout: React.FC<BankLayoutProps> = ({ 
  children, 
  amount,
  serviceName,
  companyKey
}) => {
  // محاولة الحصول على branding من banks.ts أولاً
  const bankData = banks.find(b => b.id === companyKey.toLowerCase());
  const brandingFromSystem = getBrandingByCompany(companyKey);
  
  // استخدام بيانات البنك من banks.ts إذا وجدت
  const brand: CompanyBranding | null = bankData ? {
    id: bankData.id,
    nameEn: bankData.name,
    nameAr: bankData.name_ar,
    colors: {
      primary: bankData.color,
      secondary: bankData.color,
      accent: bankData.color,
      background: '#FFFFFF',
      surface: '#F8F9FA',
      text: '#1A1A1A',
      textLight: '#666666',
      textOnPrimary: '#FFFFFF',
      border: '#E5E5E5',
    },
    fonts: { primary: 'Inter, sans-serif', secondary: 'Cairo, sans-serif', arabic: 'Cairo, sans-serif' },
    gradients: {
      primary: `linear-gradient(135deg, ${bankData.color}, ${bankData.color})`,
      secondary: `linear-gradient(135deg, ${bankData.color}, ${bankData.color})`,
      hero: `linear-gradient(135deg, ${bankData.color}, ${bankData.color})`,
    },
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    },
    borderRadius: { sm: '4px', md: '8px', lg: '12px' },
    logoUrl: `/images/brand-logos/${bankData.id}.svg`,
    description: bankData.name_ar,
  } : (brandingFromSystem || null);

  useEffect(() => {
    if (brand) {
      applyBrandCSSVariables(brand);
      console.log(`[BankLayout] Applied branding for: ${companyKey}`, brand);
    }
    return () => {
      clearAllBrandCSSVariables();
    };
  }, [brand, companyKey]);

  const primaryColor = brand?.colors.primary || '#003366';
  const textOnPrimary = brand?.colors.textOnPrimary || '#FFFFFF';
  const surfaceColor = brand?.colors.surface || '#F8F9FA';

  return (
    <div 
      className="min-h-screen" 
      dir="rtl"
      style={{ 
        backgroundColor: surfaceColor,
        fontFamily: brand?.fonts.arabic || 'Cairo, sans-serif'
      }}
    >
      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                    الهيدر الرسمي للبنك                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <header 
        className="shadow-lg relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor})`,
          minHeight: '120px'
        }}
      >
        {/* خلفية زخرفية */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* الشعار والاسم */}
            <div className="flex items-center gap-4">
              <div 
                className="bg-white p-3 rounded-xl shadow-md"
                style={{ borderRadius: '12px' }}
              >
                {brand?.logoUrl ? (
                  <img 
                    src={brand.logoUrl} 
                    alt={brand.nameAr} 
                    className="h-14 w-auto"
                    style={{ maxHeight: '56px' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <BrandLogo brandId={companyKey} size="xl" />
                )}
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">
                  {brand?.nameAr || bankData?.name_ar || serviceName || companyKey}
                </h1>
                <p className="text-sm opacity-90">
                  {bankData?.official_url || brand?.description || 'بنك موثوق'}
                </p>
              </div>
            </div>

            {/* شارة الأمان */}
            <div className="hidden sm:flex items-center gap-2">
              <Badge 
                className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white border-0"
                style={{ borderRadius: '20px' }}
              >
                <Shield className="w-4 h-4 ml-1" />
                دفع آمن
              </Badge>
            </div>
          </div>
        </div>

        {/* معلومات البنك */}
        {bankData && (
          <div className="bg-black/10 py-2">
            <div className="container mx-auto px-4 flex items-center justify-between text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>موقع آمن ومشفر</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>مرخص من البنك المركزي</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                    المحتوى الرئيسي                        */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                    الفوتر الرسمي                          */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <footer 
        className="mt-8 py-6 text-center text-sm"
        style={{ 
          backgroundColor: primaryColor,
          color: textOnPrimary
        }}
      >
        <div className="container mx-auto px-4">
          <p className="mb-2">
            {brand?.nameAr || bankData?.name_ar || companyKey} - جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
          <p className="opacity-80 text-xs">
            {bankData?.official_url ? `www.${bankData.official_url}` : ''}
          </p>
        </div>
      </footer>
    </div>
  );
};