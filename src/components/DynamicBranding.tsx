import React, { useEffect, useCallback } from 'react';
import { getBrandingByCompany } from '@/lib/brandingSystem';

// قائمة شاملة بجميع متغيرات CSS للعلامة التجارية
const BRAND_CSS_VARIABLES = [
  '--brand-primary',
  '--brand-secondary',
  '--brand-accent',
  '--brand-background',
  '--brand-surface',
  '--brand-text',
  '--brand-text-light',
  '--brand-text-on-primary',
  '--brand-border',
  '--brand-gradient-primary',
  '--brand-gradient-secondary',
  '--brand-gradient-hero',
  '--brand-shadow-sm',
  '--brand-shadow-md',
  '--brand-shadow-lg',
  '--brand-radius-sm',
  '--brand-radius-md',
  '--brand-radius-lg',
  '--brand-font-primary',
  '--brand-font-secondary',
  '--brand-font-arabic',
  // متغيرات الهوية الديناميكية
  '--dynamic-primary',
  '--dynamic-secondary',
  '--dynamic-background',
  '--dynamic-font-primary',
  '--dynamic-font-secondary',
  '--dynamic-button-radius',
  // متغيرات تحويم البطاقات
  '--card-hover-offset',
  '--card-hover-shadow',
];

// دالة لمسح جميع متغيرات CSS للعلامة التجارية
// هذه الدالة تضمن عدم تلوث العلامات التجارية ببعضها
export const clearAllBrandCSSVariables = () => {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  
  // مسح جميع متغيرات العلامة التجارية
  BRAND_CSS_VARIABLES.forEach(variable => {
    root.style.removeProperty(variable);
  });
  
  // إزالة السمات المخصصة
  root.removeAttribute('data-entity');
  root.removeAttribute('data-button-hover');
  root.removeAttribute('data-brand-active');
};

// دالة لتطبيق متغيرات العلامة التجارية مع المسح أولاً
export const applyBrandCSSVariables = (branding: any) => {
  if (typeof document === 'undefined' || !branding) return;
  
  const root = document.documentElement;
  
  // أولاً: مسح جميع متغيرات العلامة التجارية القديمة
  clearAllBrandCSSVariables();
  
  // ثانياً: تطبيق المتغيرات الجديدة
  if (branding.colors) {
    root.style.setProperty('--brand-primary', branding.colors.primary);
    root.style.setProperty('--brand-secondary', branding.colors.secondary || branding.colors.primary);
    root.style.setProperty('--brand-accent', branding.colors.accent || branding.colors.primary);
    root.style.setProperty('--brand-background', branding.colors.background || '#FFFFFF');
    root.style.setProperty('--brand-surface', branding.colors.surface || '#F8FAFC');
    root.style.setProperty('--brand-text', branding.colors.text || '#1F2937');
    root.style.setProperty('--brand-text-light', branding.colors.textLight || '#6B7280');
    root.style.setProperty('--brand-text-on-primary', branding.colors.textOnPrimary || '#FFFFFF');
    root.style.setProperty('--brand-border', branding.colors.border || '#E5E7EB');
  }
  
  if (branding.gradients) {
    root.style.setProperty('--brand-gradient-primary', branding.gradients.primary);
    root.style.setProperty('--brand-gradient-secondary', branding.gradients.secondary);
    root.style.setProperty('--brand-gradient-hero', branding.gradients.hero);
  }
  
  if (branding.shadows) {
    root.style.setProperty('--brand-shadow-sm', branding.shadows.sm);
    root.style.setProperty('--brand-shadow-md', branding.shadows.md);
    root.style.setProperty('--brand-shadow-lg', branding.shadows.lg);
  }
  
  if (branding.borderRadius) {
    root.style.setProperty('--brand-radius-sm', branding.borderRadius.sm);
    root.style.setProperty('--brand-radius-md', branding.borderRadius.md);
    root.style.setProperty('--brand-radius-lg', branding.borderRadius.lg);
  }
  
  if (branding.fonts) {
    root.style.setProperty('--brand-font-primary', branding.fonts.primary);
    root.style.setProperty('--brand-font-secondary', branding.fonts.secondary);
    root.style.setProperty('--brand-font-arabic', branding.fonts.arabic);
  }
  
  // إضافة سمة لتحديد العلامة التجارية النشطة
  root.setAttribute('data-brand-active', 'true');
};

interface DynamicBrandingProps {
  companyKey: string;
  children?: React.ReactNode;
  autoCleanup?: boolean; // تنظيف تلقائي عند إلغاء تحميل المكون
}

export const DynamicBranding: React.FC<DynamicBrandingProps> = ({ 
  companyKey, 
  children,
  autoCleanup = true 
}) => {
  const branding = getBrandingByCompany(companyKey);

  useEffect(() => {
    if (!branding) {
      // مسح المتغيرات إذا لم يتم العثور على branding
      clearAllBrandCSSVariables();
      return;
    }

    // تطبيق متغيرات العلامة التجارية مع المسح أولاً
    applyBrandCSSVariables(branding);

    // تنظيف عند إلغاء تحميل المكون
    if (autoCleanup) {
      return () => {
        clearAllBrandCSSVariables();
      };
    }
  }, [branding, companyKey, autoCleanup]);

  if (!branding) {
    return <>{children}</>;
  }

  return <>{children}</>;
};

// خط للـ hooks للاستخدام في المكونات
export const useBranding = (companyKey: string) => {
  return getBrandingByCompany(companyKey);
};

// خط لتطبيق العلامة التجارية مع التنظيف
export const useBrandApplication = (companyKey: string) => {
  useEffect(() => {
    if (!companyKey) {
      clearAllBrandCSSVariables();
      return;
    }
    
    const branding = getBrandingByCompany(companyKey);
    if (branding) {
      applyBrandCSSVariables(branding);
    }
    
    return () => {
      // تنظيف عند إلغاء تحميل الخطاف
      clearAllBrandCSSVariables();
    };
  }, [companyKey]);
};

interface BrandedContainerProps {
  companyKey: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'surface' | 'gradient';
}

export const BrandedContainer: React.FC<BrandedContainerProps> = ({ 
  companyKey, 
  children, 
  className = '',
  variant = 'surface'
}) => {
  const branding = getBrandingByCompany(companyKey);

  if (!branding) {
    return <div className={className}>{children}</div>;
  }

  const styles: React.CSSProperties = {
    backgroundColor: variant === 'primary' 
      ? branding.colors.primary 
      : variant === 'secondary'
      ? branding.colors.secondary
      : variant === 'gradient'
      ? 'transparent'
      : branding.colors.surface,
    color: variant === 'primary' || variant === 'secondary'
      ? branding.colors.textOnPrimary
      : branding.colors.text,
    borderRadius: branding.borderRadius.md,
    ...(variant === 'gradient' && {
      background: branding.gradients.hero,
      color: branding.colors.textOnPrimary,
    }),
  };

  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
};

interface BrandedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  companyKey: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const BrandedButton: React.FC<BrandedButtonProps> = ({
  companyKey,
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const branding = getBrandingByCompany(companyKey);

  if (!branding) {
    return <button className={className} {...props}>{children}</button>;
  }

  const styles: React.CSSProperties = {
    backgroundColor: variant === 'primary'
      ? branding.colors.primary
      : variant === 'secondary'
      ? branding.colors.secondary
      : 'transparent',
    color: variant === 'outline'
      ? branding.colors.primary
      : branding.colors.textOnPrimary,
    border: variant === 'outline'
      ? `2px solid ${branding.colors.primary}`
      : 'none',
    borderRadius: branding.borderRadius.md,
    padding: '12px 24px',
    fontFamily: branding.fonts.primary,
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: branding.shadows.md,
  };

  const hoverStyles: React.CSSProperties = {
    transform: 'translateY(-2px)',
    boxShadow: branding.shadows.lg,
  };

  return (
    <button
      className={className}
      style={isHovered ? { ...styles, ...hoverStyles } : styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

interface BrandedHeaderProps {
  companyKey: string;
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  className?: string;
}

export const BrandedHeader: React.FC<BrandedHeaderProps> = ({
  companyKey,
  title,
  subtitle,
  showLogo = true,
  className = '',
}) => {
  const branding = getBrandingByCompany(companyKey);

  if (!branding) {
    return (
      <div className={className}>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    );
  }

  const headerStyles: React.CSSProperties = {
    background: branding.gradients.hero,
    color: branding.colors.textOnPrimary,
    padding: '32px 24px',
    borderRadius: branding.borderRadius.lg,
    boxShadow: branding.shadows.lg,
    textAlign: 'center',
    fontFamily: branding.fonts.arabic,
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: subtitle ? '8px' : '0',
  };

  const subtitleStyles: React.CSSProperties = {
    fontSize: '18px',
    opacity: 0.9,
  };

  return (
    <div className={className} style={headerStyles}>
      {showLogo && branding.logoUrl && (
        <img
          src={branding.logoUrl}
          alt={branding.nameEn}
          style={{
            maxHeight: '60px',
            marginBottom: '16px',
            filter: 'brightness(0) invert(1)',
          }}
        />
      )}
      <h1 style={titleStyles}>{title}</h1>
      {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
    </div>
  );
};

export default DynamicBranding;