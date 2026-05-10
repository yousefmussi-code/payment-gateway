import { shippingCompanyBranding, bankBranding, governmentPaymentBranding, getBrandingByCompany, CompanyBranding } from './brandingSystem';

export const applyDynamicIdentity = (entityKey: string) => {
  const branding = getBrandingByCompany(entityKey);
  if (!branding) return;

  const root = document.documentElement;
  
  // Colors
  root.style.setProperty('--dynamic-primary', branding.colors.primary);
  root.style.setProperty('--dynamic-secondary', branding.colors.secondary);
  root.style.setProperty('--dynamic-background', branding.colors.background);
  root.style.setProperty('--dynamic-surface', branding.colors.surface);
  root.style.setProperty('--dynamic-text', branding.colors.text);
  root.style.setProperty('--dynamic-border', branding.colors.border);
  root.style.setProperty('--dynamic-input-focus', branding.colors.inputFocus);
  
  // Radii
  root.style.setProperty('--dynamic-button-radius', branding.borderRadius.button);
  root.style.setProperty('--dynamic-input-radius', branding.borderRadius.input);
  root.style.setProperty('--dynamic-card-radius', branding.borderRadius.card);
  
  // Typography
  root.style.setProperty('--dynamic-font-primary', branding.fonts.primary);
  root.style.setProperty('--dynamic-font-display', branding.fonts.display);
  root.style.setProperty('--dynamic-font-arabic', branding.fonts.arabic);
  
  // Spacing
  root.style.setProperty('--dynamic-input-padding', branding.inputPadding);
  
  // Shadows
  const shadows = {
    none: 'none',
    soft: '0 2px 4px rgba(0,0,0,0.05)',
    medium: '0 4px 12px rgba(0,0,0,0.08)',
    heavy: '0 8px 24px rgba(0,0,0,0.12)'
  };
  root.style.setProperty('--dynamic-shadow', shadows[branding.shadowLevel]);
  
  // Gradients
  root.style.setProperty('--dynamic-gradient-primary', branding.gradients.primary);
  root.style.setProperty('--dynamic-gradient-hero', branding.gradients.hero);

  console.log(`[IDENTITY_APPLIED] ${branding.nameEn} (v4.1 Precision)`);
};

export const detectEntityFromURL = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get('entity') || params.get('type') || params.get('company') || params.get('service');
};

export const getEntityLogo = (entityKey: string): string | null => {
  const branding = getBrandingByCompany(entityKey);
  return branding?.logoSvg || null;
};

export const getEntityIdentity = (entityKey: string) => {
  return getBrandingByCompany(entityKey);
};

export const getEntityHeaderImages = (entityKey: string): string[] => {
  return [];
};

export const getEntityPaymentShareImage = (entityKey: string): string | null => {
  if (entityKey.startsWith('bank_')) {
    const bankId = entityKey.replace('bank_', '');
    return `/og-bank-${bankId}.jpg`;
  }
  return null;
};

export const getBankOGImage = (bankId: string): string => {
  return `/og-bank-${bankId}.jpg`;
};
