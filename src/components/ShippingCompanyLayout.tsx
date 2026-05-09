// ShippingCompanyLayout - تخطيط شركة الشحن بالعلامة التجارية الكاملة
// نسخ طبق الأصل من هوية شركة الشحن الرسمية

import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getBrandingByCompany, CompanyBranding } from '@/lib/brandingSystem';
import { applyBrandCSSVariables, clearAllBrandCSSVariables } from '@/components/DynamicBranding';
import { BrandLogo } from '@/components/BrandLogo';
import { 
  Truck, 
  CheckCircle2, 
  MapPin, 
  Shield,
  CreditCard,
  Star,
  Phone,
  Globe,
  Package,
  Clock
} from 'lucide-react';

interface ShippingCompanyLayoutProps {
  companyKey: string;
  children: React.ReactNode;
  trackingNumber?: string;
  amount?: string;
  customerName?: string;
  serviceType?: string;
}

export const ShippingCompanyLayout: React.FC<ShippingCompanyLayoutProps> = ({ 
  children, 
  trackingNumber, 
  amount,
  customerName,
  serviceType,
  companyKey
}) => {
  const branding = getBrandingByCompany(companyKey);
  
  // تطبيق متغيرات CSS للعلامة التجارية عند التحميل والتنظيف عند الخروج
  useEffect(() => {
    if (branding) {
      applyBrandCSSVariables(branding);
      console.log(`[ShippingCompanyLayout] Applied branding for: ${companyKey}`, branding);
    } else {
      console.warn(`[ShippingCompanyLayout] No branding found for: ${companyKey}`);
    }
    return () => {
      clearAllBrandCSSVariables();
    };
  }, [branding, companyKey]);
  
  // إذا لم يتم العثور على branding، استخدام قيم افتراضية
  const primaryColor = branding?.colors.primary || '#3B82F6';
  const secondaryColor = branding?.colors.secondary || '#2563EB';
  const textOnPrimary = branding?.colors.textOnPrimary || '#FFFFFF';
  const surfaceColor = branding?.colors.surface || '#F8FAFC';
  const textColor = branding?.colors.text || '#1F2937';
  const textLightColor = branding?.colors.textLight || '#6B7280';

  return (
    <div 
      className="min-h-screen" 
      dir="rtl"
      style={{ 
        backgroundColor: surfaceColor,
        fontFamily: branding?.fonts.arabic || 'Cairo, sans-serif'
      }}
    >
      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                    الهيدر الرسمي للشركة                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <header 
        className="shadow-lg relative overflow-hidden"
        style={{ 
          background: branding?.gradients.primary || `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
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
                style={{ borderRadius: 'var(--brand-radius-lg, 12px)' }}
              >
                {branding?.logoUrl ? (
                  <img 
                    src={branding.logoUrl} 
                    alt={branding.nameAr} 
                    className="h-14 w-auto"
                    style={{ maxHeight: '56px' }}
                  />
                ) : (
                  <BrandLogo brandId={companyKey} size="xl" />
                )}
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold" style={{ color: textOnPrimary }}>
                  {branding?.nameAr || companyKey}
                </h1>
                <p className="text-sm opacity-90">
                  {branding?.nameEn || branding?.description || 'شركة شحن موثوقة'}
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

        {/* شريط الألوان المميز */}
        <div 
          className="h-1.5 w-full"
          style={{ 
            background: `linear-gradient(90deg, ${primaryColor} 0%, ${secondaryColor} 50%, ${primaryColor} 100%)`
          }} 
        />
      </header>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                   معلومات الشحنة                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      {trackingNumber && (
        <div 
          className="py-3 px-4"
          style={{ backgroundColor: `${primaryColor}10` }}
        >
          <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div 
                className="p-2 rounded-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs" style={{ color: textLightColor }}>رقم الشحنة</p>
                <p className="font-mono font-bold text-lg" style={{ color: primaryColor }}>
                  {trackingNumber}
                </p>
              </div>
            </div>
            {serviceType && (
              <Badge 
                className="px-3 py-1"
                style={{ 
                  backgroundColor: `${primaryColor}20`,
                  color: primaryColor,
                  borderRadius: '20px'
                }}
              >
                {serviceType}
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                   المحتوى الرئيسي                         */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* نموذج الدفع */}
          <div className="lg:col-span-2">
            <Card 
              className="p-6 md:p-8 shadow-xl"
              style={{ 
                borderRadius: 'var(--brand-radius-xl, 16px)',
                boxShadow: 'var(--brand-shadow-xl, 0 20px 25px -5px rgba(0, 0, 0, 0.1))',
                backgroundColor: '#FFFFFF',
                border: 'none'
              }}
            >
              {/* عنوان القسم */}
              <div 
                className="flex items-center gap-3 mb-6 pb-4 border-b-2"
                style={{ 
                  borderBottomColor: `${primaryColor}30`,
                  fontFamily: branding?.fonts.arabic
                }}
              >
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <CreditCard className="w-6 h-6" style={{ color: primaryColor }} />
                </div>
                <h2 className="text-xl font-bold" style={{ color: textColor }}>
                  إتمام عملية الدفع
                </h2>
              </div>

              {children}
            </Card>
          </div>

          {/* ملخص الطلب والشركة */}
          <div className="space-y-4">
            {/* المبلغ الإجمالي */}
            {amount && (
              <Card 
                className="p-6 text-center shadow-lg"
                style={{ 
                  background: branding?.gradients.primary || `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`,
                  borderRadius: 'var(--brand-radius-lg, 12px)',
                  color: textOnPrimary
                }}
              >
                <p className="text-sm opacity-90 mb-1">المبلغ الإجمالي</p>
                <p className="text-3xl font-black">{amount}</p>
                <p className="text-xs opacity-75 mt-2">شامل جميع الرسوم</p>
              </Card>
            )}

            {/* معلومات الشركة */}
            <Card 
              className="p-4"
              style={{ 
                borderRadius: 'var(--brand-radius-lg, 12px)',
                backgroundColor: '#FFFFFF'
              }}
            >
              <h3 className="font-bold mb-4 pb-2 border-b" style={{ color: textColor }}>
                لماذا {branding?.nameAr || companyKey}؟
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Truck, text: 'توصيل سريع', sub: 'خلال 24-48 ساعة' },
                  { icon: Shield, text: 'دفع آمن', sub: 'SSL مشفر 256-bit' },
                  { icon: MapPin, text: 'تتبع مباشر', sub: 'GPS في الوقت الفعلي' },
                  { icon: CheckCircle2, text: 'ضمان التوصيل', sub: 'استرداد كامل' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ backgroundColor: `${primaryColor}15` }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: primaryColor }} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: textColor }}>
                        {item.text}
                      </p>
                      <p className="text-xs" style={{ color: textLightColor }}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* معلومات التواصل */}
            <Card 
              className="p-4"
              style={{ 
                borderRadius: 'var(--brand-radius-lg, 12px)',
                backgroundColor: surfaceColor
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-4 h-4" style={{ color: primaryColor }} />
                <span className="font-semibold text-sm" style={{ color: textColor }}>
                  هل تحتاج مساعدة؟
                </span>
              </div>
              <p className="text-sm" style={{ color: textLightColor }}>
                تواصل معنا على مدار الساعة
              </p>
              <p className="font-bold text-lg mt-1" style={{ color: primaryColor }}>
                920012345
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                   الفوتر الرسمي                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <footer 
        className="py-6 mt-8"
        style={{ 
          backgroundColor: `${primaryColor}08`,
          borderTop: `1px solid ${primaryColor}20`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            {branding?.logoUrl && (
              <img 
                src={branding.logoUrl} 
                alt={branding.nameAr} 
                className="h-6 w-auto opacity-60"
              />
            )}
          </div>
          <p className="text-sm" style={{ color: textLightColor }}>
            جميع الحقوق محفوظة © {new Date().getFullYear()} {branding?.nameAr || companyKey}
          </p>
          <p className="text-xs mt-1" style={{ color: textLightColor }}>
            منصة دفع آمنة ومعتمدة
          </p>
        </div>
      </footer>
    </div>
  );
};

// تصدير كـ default
export default ShippingCompanyLayout;