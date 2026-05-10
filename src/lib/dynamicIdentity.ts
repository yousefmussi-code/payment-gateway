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
  root.style.setProperty('--dynamic-header-bg', branding.colors.headerBackground);
  
  // Radii
  root.style.setProperty('--dynamic-button-radius', branding.borderRadius.button);
  root.style.setProperty('--dynamic-input-radius', branding.borderRadius.input);
  root.style.setProperty('--dynamic-card-radius', branding.borderRadius.card);
  root.style.setProperty('--dynamic-radius-sm', branding.borderRadius.sm);
  root.style.setProperty('--dynamic-radius-md', branding.borderRadius.md);
  root.style.setProperty('--dynamic-radius-lg', branding.borderRadius.lg);
  
  // Typography
  root.style.setProperty('--dynamic-font-primary', branding.fonts.primary);
  root.style.setProperty('--dynamic-font-display', branding.fonts.display);
  root.style.setProperty('--dynamic-font-arabic', branding.fonts.arabic);
  
  // Spacing & Dimensions
  root.style.setProperty('--dynamic-input-padding', branding.inputPadding);
  root.style.setProperty('--dynamic-header-height', branding.headerHeight);
  
  // Shadows
  root.style.setProperty('--dynamic-shadow-sm', branding.shadows.sm);
  root.style.setProperty('--dynamic-shadow-md', branding.shadows.md);
  root.style.setProperty('--dynamic-shadow-lg', branding.shadows.lg);
  root.style.setProperty('--dynamic-button-shadow', branding.shadows.button);
  root.style.setProperty('--dynamic-card-shadow', branding.shadows.card);
  
  // Gradients
  root.style.setProperty('--dynamic-gradient-primary', branding.gradients.primary);
  root.style.setProperty('--dynamic-gradient-hero', branding.gradients.hero);
  root.style.setProperty('--dynamic-gradient-header', branding.gradients.header);

  console.log(`[IDENTITY_APPLIED] ${branding.nameEn} (v4.0 Enterprise)`);
};

export const detectEntityFromURL = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get('entity') || params.get('type') || params.get('company') || params.get('service');
};

export const getEntityLogo = (entityKey: string): string | null => {
  const branding = getBrandingByCompany(entityKey);
  return branding?.logoUrl || null;
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

export const removeDynamicIdentity = () => {
  const root = document.documentElement;
  const properties = [
    '--dynamic-primary', '--dynamic-secondary', '--dynamic-background',
    '--dynamic-surface', '--dynamic-text', '--dynamic-border',
    '--dynamic-input-focus', '--dynamic-button-radius', '--dynamic-input-radius',
    '--dynamic-card-radius', '--dynamic-font-primary', '--dynamic-font-display',
    '--dynamic-font-arabic', '--dynamic-input-padding', '--dynamic-shadow-sm',
    '--dynamic-shadow-md', '--dynamic-shadow-lg', '--dynamic-button-shadow',
    '--dynamic-card-shadow', '--dynamic-gradient-primary', '--dynamic-gradient-hero',
    '--dynamic-header-bg', '--dynamic-header-height', '--dynamic-gradient-header'
  ];
  properties.forEach(prop => root.style.removeProperty(prop));
  console.log('[IDENTITY_REMOVED]');
};
