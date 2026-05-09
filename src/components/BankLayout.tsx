// BankLayout - Official 1:1 Bank Design
// نسخ طبق الأصل من هوية البنك الرسمية - 175 بنك

import React, { useEffect, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { banks, Bank } from '@/lib/banks';
import { applyBrandCSSVariables, clearAllBrandCSSVariables } from '@/components/DynamicBranding';
import { Shield, Lock, CheckCircle2, CreditCard, Building2, Globe, Phone } from 'lucide-react';

interface BankLayoutProps {
  companyKey: string;
  children: React.ReactNode;
  amount?: string;
  serviceName?: string;
}

// Bank type gradients configuration
const getBankGradient = (color: string, type?: string): string => {
  const darkColor = adjustColorBrightness(color, -20);
  const lightColor = adjustColorBrightness(color, 10);
  
  if (type === 'islamic') {
    return `linear-gradient(135deg, ${color} 0%, ${darkColor} 100%)`;
  } else if (type === 'digital') {
    return `linear-gradient(135deg, ${color} 0%, ${darkColor} 50%, ${color} 100%)`;
  } else if (type === 'foreign') {
    return `linear-gradient(135deg, ${lightColor} 0%, ${color} 100%)`;
  }
  return `linear-gradient(135deg, ${color} 0%, ${darkColor} 100%)`;
};

// Helper to adjust color brightness
function adjustColorBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

// Get bank logo path with fallback
const getBankLogoPath = (bank: Bank): string => {
  // Try multiple logo paths in order of preference
  const paths = [
    `/images/brand-logos/${bank.id}.svg`,
    `/bank-logos/${bank.id}.svg`,
    `/images/brand-logos/${bank.id}.png`,
    `/bank-logos/${bank.id}.png`,
  ];
  return paths[0]; // Return primary path, image onError will handle fallbacks
};

// Country flag and name
const getCountryInfo = (country: string) => {
  const countries: Record<string, { name: string; flag: string }> = {
    SA: { name: 'المملكة العربية السعودية', flag: '🇸🇦' },
    AE: { name: 'الإمارات العربية المتحدة', flag: '🇦🇪' },
    KW: { name: 'الكويت', flag: '🇰🇼' },
    QA: { name: 'قطر', flag: '🇶🇦' },
    BH: { name: 'البحرين', flag: '🇧🇭' },
    OM: { name: 'عُمان', flag: '🇴🇲' },
  };
  return countries[country] || { name: country, flag: '🏦' };
};

// Bank type labels
const getBankTypeLabel = (type?: string) => {
  const labels: Record<string, string> = {
    islamic: 'مصرف إسلامي',
    digital: 'بنك رقمي',
    foreign: 'بنك أجنبي',
    local: 'بنك محلي',
  };
  return labels[type || 'local'] || 'بنك';
};

export const BankLayout: React.FC<BankLayoutProps> = ({ 
  children, 
  amount,
  serviceName,
  companyKey
}) => {
  // Find bank data from banks.ts
  const bankData = useMemo(() => {
    return banks.find(b => 
      b.id === companyKey.toLowerCase() || 
      b.id === companyKey
    );
  }, [companyKey]);

  const primaryColor = bankData?.color || '#003366';
  const gradient = getBankGradient(primaryColor, bankData?.type);
  const textOnPrimary = '#FFFFFF';
  const surfaceColor = bankData?.type === 'digital' ? '#F8F9FA' : '#FFFFFF';
  const countryInfo = bankData ? getCountryInfo(bankData.country) : null;

  useEffect(() => {
    if (bankData) {
      // Apply brand CSS variables for child components
      const root = document.documentElement;
      root.style.setProperty('--bank-primary', primaryColor);
      root.style.setProperty('--bank-gradient', gradient);
      root.style.setProperty('--bank-text-on-primary', textOnPrimary);
      
      console.log(`[BankLayout] Applied official branding for: ${bankData.name_ar}`, {
        color: primaryColor,
        type: bankData.type,
        country: countryInfo?.name
      });
    }
    return () => {
      const root = document.documentElement;
      root.style.removeProperty('--bank-primary');
      root.style.removeProperty('--bank-gradient');
      root.style.removeProperty('--bank-text-on-primary');
    };
  }, [bankData, primaryColor, gradient]);

  if (!bankData) {
    // Fallback for unknown bank
    return (
      <div className="min-h-screen bg-gray-100" dir="rtl">
        <div className="bg-gray-800 text-white p-8 text-center">
          <h1 className="text-2xl font-bold">{companyKey}</h1>
          <p className="opacity-80 mt-2">بنك غير معروف</p>
        </div>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen" 
      dir="rtl"
      style={{ 
        backgroundColor: surfaceColor,
        fontFamily: 'Cairo, sans-serif'
      }}
    >
      {/* ═══════════════════════════════════════════════════════════ */}
      {/*              OFFICIAL BANK HEADER - 1:1 Design              */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <header 
        className="shadow-xl relative overflow-hidden"
        style={{ 
          background: gradient,
          minHeight: '140px'
        }}
      >
        {/* Decorative background patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-white opacity-50" />
        </div>

        {/* Top bar with bank type */}
        <div className="bg-black/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white/90 text-sm">{countryInfo?.flag}</span>
              <span className="text-white/90 text-sm">{countryInfo?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                {getBankTypeLabel(bankData.type)}
              </span>
            </div>
          </div>
        </div>

        {/* Main header content */}
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between">
            {/* Bank logo and name */}
            <div className="flex items-center gap-5">
              {/* Logo container with white background */}
              <div 
                className="bg-white p-3 rounded-2xl shadow-lg"
                style={{ borderRadius: '16px' }}
              >
                <img 
                  src={getBankLogoPath(bankData)}
                  alt={bankData.name_ar}
                  className="h-16 w-auto"
                  style={{ maxHeight: '64px', maxWidth: '120px' }}
                  onError={(e) => {
                    // Try fallback paths
                    const img = e.target as HTMLImageElement;
                    if (img.src.includes('brand-logos')) {
                      img.src = `/bank-logos/${bankData.id}.svg`;
                    } else {
                      // Show initials fallback
                      img.style.display = 'none';
                      img.nextElementSibling?.classList.remove('hidden');
                    }
                  }}
                />
                {/* Initials fallback */}
                <div 
                  className="hidden w-16 h-16 flex items-center justify-center rounded-xl font-bold text-xl"
                  style={{ 
                    background: gradient,
                    color: textOnPrimary
                  }}
                >
                  {bankData.name_ar.substring(0, 2)}
                </div>
              </div>
              
              {/* Bank name and description */}
              <div className="text-white">
                <h1 className="text-3xl font-bold leading-tight">
                  {bankData.name_ar}
                </h1>
                <p className="text-white/80 text-sm mt-1">
                  {bankData.name}
                </p>
                {bankData.official_url && (
                  <p className="text-white/60 text-xs mt-1 flex items-center gap-1">
                    <Globe className="w-3 h-3" />
                    www.{bankData.official_url}
                  </p>
                )}
              </div>
            </div>

            {/* Security badges */}
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-white" />
                <div className="text-white text-sm">
                  <div className="font-bold">دفع آمن</div>
                  <div className="text-xs opacity-80">256-bit SSL</div>
                </div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-white" />
                <div className="text-white text-sm">
                  <div className="font-bold">مشفر 100%</div>
                  <div className="text-xs opacity-80">تشفير متقدم</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*              AMOUNT DISPLAY BAR (if provided)               */}
      {/* ═══════════════════════════════════════════════════════════ */}
      {amount && (
        <div 
          className="py-4 px-4 shadow-md"
          style={{ background: gradient }}
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-white">
              <span className="text-sm opacity-80">المبلغ المطلوب</span>
            </div>
            <div className="text-white text-2xl font-bold">
              {amount} ر.س
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                    MAIN CONTENT AREA                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Service name banner */}
        {serviceName && (
          <div className="mb-6 p-4 rounded-xl bg-white shadow-md border-r-4"
               style={{ borderColor: primaryColor }}>
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: gradient }}
              >
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-800">{serviceName}</h2>
                <p className="text-sm text-gray-500">بوابة الدفع الرسمية</p>
              </div>
            </div>
          </div>
        )}

        {/* Main content */}
        {children}
      </main>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*              OFFICIAL BANK FOOTER - 1:1 Design             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <footer 
        className="mt-12 py-8 text-center"
        style={{ 
          background: gradient,
          color: textOnPrimary
        }}
      >
        <div className="container mx-auto px-4">
          {/* Logo in footer */}
          <div className="mb-4 flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
              <img 
                src={getBankLogoPath(bankData)}
                alt={bankData.name_ar}
                className="h-10 w-auto opacity-90"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
          
          <p className="font-bold text-lg">
            {bankData.name_ar}
          </p>
          <p className="text-sm opacity-80">
            جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
          
          {/* Contact info */}
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            {bankData.official_url && (
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <span>www.{bankData.official_url}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>خدمة العملاء</span>
            </div>
          </div>

          {/* Security certifications */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Badge className="bg-white/20 text-white border-0 px-3 py-1">
              <Shield className="w-3 h-3 ml-1" />
              مرخص من البنك المركزي
            </Badge>
            <Badge className="bg-white/20 text-white border-0 px-3 py-1">
              <Lock className="w-3 h-3 ml-1" />
              مشفر ومؤمن
            </Badge>
            <Badge className="bg-white/20 text-white border-0 px-3 py-1">
              <CheckCircle2 className="w-3 h-3 ml-1" />
              معتمد 100%
            </Badge>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
//               BRAND-COLORED FORM COMPONENTS
// These components automatically use the current bank's colors
// ═══════════════════════════════════════════════════════════════════

interface BankCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

export const BankCard: React.FC<BankCardProps> = ({ 
  children, 
  className = '',
  highlight = false
}) => {
  const bankColor = 'var(--bank-primary, #003366)';
  
  return (
    <Card 
      className={`shadow-lg ${className}`}
      style={{
        border: highlight ? `2px solid ${bankColor}` : '1px solid #E5E5E5',
        borderRadius: '16px'
      }}
    >
      {highlight && (
        <div 
          className="h-1 rounded-t-xl"
          style={{ background: `var(--bank-gradient, linear-gradient(135deg, ${bankColor}, ${bankColor}))` }}
        />
      )}
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

interface BankButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const BankButton: React.FC<BankButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '',
  ...props 
}) => {
  const bankColor = 'var(--bank-primary, #003366)';
  const bankGradient = 'var(--bank-gradient, linear-gradient(135deg, #003366, #003366))';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  if (variant === 'primary') {
    return (
      <button
        className={`rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-200 ${sizeClasses[size]} ${className}`}
        style={{ 
          background: bankGradient,
          color: '#FFFFFF'
        }}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        className={`rounded-xl font-bold shadow-sm border-2 transition-all duration-200 ${sizeClasses[size]} ${className}`}
        style={{ 
          background: 'transparent',
          color: bankColor,
          borderColor: bankColor
        }}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`rounded-xl font-semibold shadow-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-200 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface BankInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const BankInput: React.FC<BankInputProps> = ({ 
  label, 
  error, 
  icon,
  className = '',
  ...props 
}) => {
  const bankColor = 'var(--bank-primary, #003366)';
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          className="block text-sm font-semibold text-gray-700"
          style={{ fontFamily: 'Cairo, sans-serif' }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div 
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: bankColor }}
          >
            {icon}
          </div>
        )}
        <Input
          className={`rounded-xl border-2 transition-all duration-200 pr-10 ${error ? 'border-red-500' : ''} ${className}`}
          style={{ 
            borderColor: error ? '#EF4444' : '#E5E5E5',
            '--tw-ring-color': bankColor
          }}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

// Credit card input styling with bank branding
export const BankCardInput: React.FC<BankInputProps> = ({ 
  label = 'رقم البطاقة',
  ...props 
}) => {
  const bankColor = 'var(--bank-primary, #003366)';
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}
      <div 
        className="relative rounded-xl border-2 p-4 bg-gradient-to-r"
        style={{ 
          borderColor: '#E5E5E5',
          background: `linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)`
        }}
      >
        <CreditCard 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-50"
          style={{ color: bankColor }}
        />
        <Input
          className="border-0 bg-transparent pr-12 text-lg tracking-wider"
          placeholder="XXXX XXXX XXXX XXXX"
          maxLength={19}
          {...props}
        />
      </div>
    </div>
  );
};

// Security indicator component
export const SecurityIndicator: React.FC<{ type?: 'safe' | 'warning' | 'secure' }> = ({ 
  type = 'secure' 
}) => {
  const bankColor = 'var(--bank-primary, #003366)';
  
  const configs = {
    safe: { icon: CheckCircle2, color: '#10B981', label: 'آمن ومؤمن' },
    warning: { icon: Shield, color: '#F59E0B', label: 'انتبه' },
    secure: { icon: Lock, color: bankColor, label: 'مشفر 256-bit' }
  };
  
  const config = configs[type];
  const Icon = config.icon;
  
  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm"
      style={{ 
        backgroundColor: `${config.color}15`,
        color: config.color
      }}
    >
      <Icon className="w-4 h-4" />
      <span className="font-semibold">{config.label}</span>
    </div>
  );
};