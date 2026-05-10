// BankLayout - Official 1:1 Bank Design
// نسخ طبق الأصل من هوية البنك الرسمية - 175 بنك
// تصميم RTL مع خط Cairo ومتغيرات CSS --brand-*
// دعم شعارات PNG رسمية لكل بنك

import React, { useEffect, useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { banks, Bank } from '@/lib/banks';
import { applyBrandCSSVariables, clearAllBrandCSSVariables } from '@/components/DynamicBranding';
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  CreditCard, 
  Building2, 
  Globe, 
  Phone,
  Eye,
  EyeOff,
  User,
  Key,
  Calendar,
  FileText,
  AlertCircle,
  Verified,
  Fingerprint,
  Smartphone,
  Award,
  ShieldCheck
} from 'lucide-react';

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

// Helper to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
  }
  return '0, 0, 0';
}

// Get bank logo path with fallback - use official URL from banks.ts
const getBankLogoPath = (bank: Bank): string => {
  // Use the official logo URL from banks.ts
  if (bank.logo && bank.logo.startsWith('http')) {
    return bank.logo;
  }
  // Fallback to local paths for banks without official URL
  return `/images/brand-logos/${bank.id}.svg`;
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
      root.style.setProperty('--brand-primary', primaryColor);
      root.style.setProperty('--brand-gradient', gradient);
      root.style.setProperty('--brand-text-on-primary', textOnPrimary);
      root.style.setProperty('--bank-primary', primaryColor);
      root.style.setProperty('--bank-gradient', gradient);
      root.style.setProperty('--bank-text-on-primary', textOnPrimary);
      
      // Apply branding via DynamicBranding
      applyBrandCSSVariables({
        id: bankData.id,
        nameEn: bankData.name,
        nameAr: bankData.name_ar,
        colors: {
          primary: primaryColor,
          secondary: adjustColorBrightness(primaryColor, 20),
          background: '#FFFFFF',
          surface: surfaceColor,
          text: '#1F2937',
          textLight: '#6B7280',
          textOnPrimary: textOnPrimary,
          border: '#E5E5E5',
        },
        fonts: {
          primary: 'Cairo, sans-serif',
          secondary: 'Cairo, sans-serif',
          arabic: 'Cairo, sans-serif',
        },
        gradients: {
          primary: gradient,
          secondary: gradient,
          hero: gradient,
        },
        shadows: {
          sm: `0 1px 2px 0 rgba(${hexToRgb(primaryColor)}, 0.1)`,
          md: `0 4px 6px -1px rgba(${hexToRgb(primaryColor)}, 0.15)`,
          lg: `0 10px 15px -3px rgba(${hexToRgb(primaryColor)}, 0.2)`,
        },
        borderRadius: { sm: '8px', md: '12px', lg: '16px' },
      });
      
      console.log(`[BankLayout] Applied official branding for: ${bankData.name_ar}`, {
        color: primaryColor,
        type: bankData.type,
        country: countryInfo?.name
      });
    }
    return () => {
      const root = document.documentElement;
      root.style.removeProperty('--brand-primary');
      root.style.removeProperty('--brand-gradient');
      root.style.removeProperty('--brand-text-on-primary');
      root.style.removeProperty('--bank-primary');
      root.style.removeProperty('--bank-gradient');
      root.style.removeProperty('--bank-text-on-primary');
      clearAllBrandCSSVariables();
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
                    // Fallback to local SVG if official URL fails
                    const img = e.target as HTMLImageElement;
                    if (img.src.includes('alahli.com') || img.src.includes('alrajhi.com') || img.src.includes('riyadbank') || img.src.includes('sabb.com') || img.src.includes('alfransi') || img.src.includes('alinma') || img.src.includes('bankalbilad') || img.src.includes('baj.com.sa') || img.src.includes('anb.com.sa') || img.src.includes('bankfab') || img.src.includes('emiratesnbd') || img.src.includes('adcb.com') || img.src.includes('mashreq') || img.src.includes('dib.ae') || img.src.includes('adib.ae') || img.src.includes('cbd.ae') || img.src.includes('nbad')) {
                      img.src = `/images/brand-logos/${bankData.id}.svg`;
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
// Brand-colored card with official bank styling
interface BankCardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  accentLine?: boolean;
}

export const BankCard: React.FC<BankCardProps> = ({ 
  children, 
  className = '',
  highlight = false,
  accentLine = true
}) => {
  const bankColor = 'var(--brand-primary, var(--bank-primary, #003366))';
  const bankGradient = 'var(--brand-gradient, var(--bank-gradient, linear-gradient(135deg, #003366, #003366)))';
  
  return (
    <Card 
      className={`shadow-lg overflow-hidden ${className}`}
      style={{
        border: highlight ? `2px solid ${bankColor}` : '1px solid #E5E5E5',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Cairo, sans-serif',
      }}
    >
      {highlight && accentLine && (
        <div 
          className="h-1.5 w-full"
          style={{ background: bankGradient }}
        />
      )}
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

// Brand-colored button with official bank styling
interface BankButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const BankButton: React.FC<BankButtonProps> = ({ 
  variant = 'primary', 
  size = 'md',
  isLoading = false,
  fullWidth = false,
  children, 
  className = '',
  disabled,
  ...props 
}) => {
  const bankColor = 'var(--brand-primary, var(--bank-primary, #003366))';
  const bankGradient = 'var(--brand-gradient, var(--bank-gradient, linear-gradient(135deg, #003366, #003366)))';
  const textOnPrimary = 'var(--brand-text-on-primary, var(--bank-text-on-primary, #FFFFFF))';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  const baseClasses = 'font-bold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const disabledClasses = 'opacity-60 cursor-not-allowed';

  if (variant === 'primary') {
    return (
      <button
        className={`${baseClasses} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${disabled || isLoading ? disabledClasses : ''} ${className}`}
        style={{ 
          background: 'var(--brand-gradient-primary, linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%))',
          color: 'var(--brand-text-on-primary, #FFFFFF)',
          border: 'none',
          cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)',
          borderRadius: 'var(--brand-radius-md, 12px)',
        }}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>جاري التحميل...</span>
          </>
        ) : children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        className={`${baseClasses} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${disabled || isLoading ? disabledClasses : ''} ${className}`}
        style={{ 
          background: 'var(--brand-surface, #F3F4F6)',
          color: 'var(--brand-primary, var(--brand-text, #374151))',
          border: '1px solid var(--brand-border, #E5E7EB)',
          cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)',
          borderRadius: 'var(--brand-radius-md, 12px)',
        }}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-gray-400/30 border-t-gray-400 rounded-full animate-spin" />
            <span>جاري التحميل...</span>
          </>
        ) : children}
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        className={`${baseClasses} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} border-2 ${disabled || isLoading ? disabledClasses : ''} ${className}`}
        style={{ 
          background: 'transparent',
          color: 'var(--brand-primary)',
          border: '2px solid var(--brand-primary)',
          cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)',
          borderRadius: 'var(--brand-radius-md, 12px)',
        }}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <div className={`w-5 h-5 border-2 rounded-full animate-spin`} style={{ borderColor: `${bankColor}30`, borderTopColor: bankColor }} />
            <span>جاري التحميل...</span>
          </>
        ) : children}
      </button>
    );
  }

  // Ghost variant
  return (
    <button
      className={`${baseClasses} bg-transparent ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${disabled || isLoading ? disabledClasses : ''} ${className}`}
      style={{ 
        color: 'var(--brand-primary)',
        border: 'none',
        cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)',
      }}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </button>
  );
};

// Brand-colored input with official bank styling
interface BankInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

export const BankInput: React.FC<BankInputProps> = ({ 
  label, 
  error, 
  hint,
  icon,
  leftIcon,
  showPasswordToggle = false,
  className = '',
  type,
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const bankColor = 'var(--brand-primary, var(--bank-primary, #003366))';
  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          className="block text-sm font-semibold"
          style={{ fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)', color: 'var(--brand-text, #374151)' }}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div 
            className="absolute right-3 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--brand-primary)' }}
          >
            {icon}
          </div>
        )}
        <Input
          className={`rounded-xl border-2 transition-all duration-200 ${icon ? 'pr-10' : ''} ${leftIcon ? 'pl-10' : ''} ${error ? 'border-red-500 border-2' : ''} ${className}`}
          style={{ 
            borderColor: error ? '#EF4444' : 'var(--brand-border, #E5E7EB)',
            backgroundColor: 'var(--brand-background, #FFFFFF)',
            fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)',
            '--tw-ring-color': 'var(--brand-primary)',
            boxShadow: 'var(--brand-shadow-sm)',
          }}
          type={inputType}
          {...props}
        />
        {leftIcon && (
          <div 
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: bankColor }}
          >
            {leftIcon}
          </div>
        )}
        {showPasswordToggle && (
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {hint && !error && (
        <p className="text-xs" style={{ fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)', color: 'var(--brand-text-light, #6B7280)' }}>{hint}</p>
      )}
      {error && (
        <p className="text-sm flex items-center gap-1" style={{ fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)', color: '#EF4444' }}>
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// Credit card input with bank branding and formatting
export const BankCardInput: React.FC<BankInputProps> = ({ 
  label = 'رقم البطاقة',
  ...props 
}) => {
  const bankColor = 'var(--brand-primary, var(--bank-primary, #003366))';
  const [cardNumber, setCardNumber] = useState('');
  
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    props.onChange?.(e as any);
  };
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-semibold" style={{ fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)', color: 'var(--brand-text, #374151)' }}>
          {label}
        </label>
      )}
      <div 
        className="relative rounded-xl border-2 p-4 transition-all duration-200 focus-within:border-2"
        style={{ 
          borderColor: 'var(--brand-border, #E5E7EB)',
          background: 'var(--brand-background, linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%))',
          boxShadow: 'var(--brand-shadow-sm)',
        }}
      >
        <CreditCard 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-50"
          style={{ color: bankColor }}
        />
        <Input
          className="border-0 bg-transparent pr-12 text-lg tracking-wider font-mono"
          placeholder="xxxx xxxx xxxx xxxx"
          maxLength={19}
          value={cardNumber}
          onChange={handleChange}
          {...props}
        />
      </div>
    </div>
  );
};

// OTP Input component for bank authentication
interface BankOTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const BankOTPInput: React.FC<BankOTPInputProps> = ({
  length = 6,
  value,
  onChange,
  error
}) => {
  const bankColor = 'var(--brand-primary, var(--bank-primary, #003366))';
  const bankGradient = 'var(--brand-gradient, var(--bank-gradient, linear-gradient(135deg, #003366, #003366)))';
  
  const handleChange = (index: number, char: string) => {
    if (!/^\d*$/.test(char)) return;
    const newValue = value.split('');
    newValue[index] = char;
    onChange(newValue.join(''));
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      const input = document.querySelector(`#otp-${index - 1}`) as HTMLInputElement;
      input?.focus();
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-center gap-2">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-14 text-center text-2xl font-bold rounded-xl border-2 transition-all duration-200 focus:outline-none"
            style={{ 
              borderColor: value[index] ? 'var(--brand-primary)' : 'var(--brand-border, #E5E7EB)',
              backgroundColor: 'var(--brand-background, #FFFFFF)',
              boxShadow: value[index] ? '0 0 0 3px var(--brand-primary)20' : 'var(--brand-shadow-sm)',
              fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)',
            }}
          />
        ))}
      </div>
      {error && (
        <p className="text-sm text-center flex items-center justify-center gap-1" style={{ fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)', color: '#EF4444' }}>
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// Security indicator with bank branding
export const SecurityIndicator: React.FC<{ type?: 'safe' | 'warning' | 'secure' | 'verified' }> = ({ 
  type = 'secure' 
}) => {
  const bankColor = 'var(--brand-primary, var(--bank-primary, #003366))';
  
  const configs = {
    safe: { icon: CheckCircle2, color: '#10B981', label: 'آمن ومؤمن' },
    warning: { icon: Shield, color: '#F59E0B', label: 'انتبه' },
    secure: { icon: Lock, color: bankColor, label: 'مشفر 256-bit' },
    verified: { icon: Verified, color: '#10B981', label: 'موثق رسمياً' }
  };
  
  const config = configs[type];
  const Icon = config.icon;
  
  return (
    <div 
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
      style={{ 
        backgroundColor: `${config.color}15`,
        color: config.color,
        fontFamily: 'Cairo, sans-serif'
      }}
    >
      <Icon className="w-4 h-4" />
      <span>{config.label}</span>
    </div>
  );
};

// Biometric authentication button (fingerprint/face)
interface BankBiometricButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  method: 'fingerprint' | 'face';
}

export const BankBiometricButton: React.FC<BankBiometricButtonProps> = ({ 
  method,
  className = '',
  ...props 
}) => {
  const bankColor = 'var(--brand-primary, var(--bank-primary, #003366))';
  const Icon = method === 'fingerprint' ? Fingerprint : Smartphone;
  const label = method === 'fingerprint' ? 'المصادقة بالبصمة' : 'المصادقة بالوجه';
  
  return (
    <button
      className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-dashed transition-all duration-200 hover:border-solid hover:shadow-md ${className}`}
      style={{ 
        borderColor: 'var(--brand-primary)',
        color: 'var(--brand-primary)',
        backgroundColor: 'color-mix(in srgb, var(--brand-primary) 8%, transparent)',
        fontFamily: 'var(--brand-font-primary, Cairo, sans-serif)',
        cursor: 'pointer',
      }}
      {...props}
    >
      <Icon className="w-8 h-8" />
      <span className="font-semibold">{label}</span>
    </button>
  );
};