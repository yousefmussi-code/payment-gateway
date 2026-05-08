# تقرير تدقيق عزل العلامات التجارية
## تطبيق payment-link-app
### تاريخ التدقيق: 2026-05-09

---

## 1. ملخص تنفيذي

تم تدقيق قاعدة كود تطبيق payment-link-app لتحديد جميع الكيانات (البنوك، الخدمات الحكومية، شركات الشحن) وتأثيراتها البصرية وأي مشكلات في عزل العلامات التجارية.

**الإحصائيات الرئيسية:**
- **البنوك**: ~150+ بنك (مع تكرارات)
- **الخدمات الحكومية**: 15 خدمة
- **شركات الشحن**: 35+ شركة
- **إجمالي الكيانات الفريدة**: ~200+ كيان

---

## 2. جميع الكيانات وهوياتها البصرية

### 2.1 البنوك (src/lib/banks.ts)

| الدولة | عدد البنوك | الملف |
|--------|-----------|-------|
| SA (السعودية) | 37 بنك | الأسطر 17-61 |
| AE (الإمارات) | 57 بنك | الأسطر 64-120 |
| KW (الكويت) | 22 بنك | الأسطر 123-154 |
| QA (قطر) | 16 بنك | الأسطر 157-182 |
| BH (البحرين) | 36 بنك | الأسطر 185-230 |
| OM (عمان) | 19 بنك | الأسطر 233-261 |

**ملاحظة**: هناك تكرارات في البنوك الإسلامية والأجنبية عبر الدول.

#### البنوك الرئيسية في كل دولة:

**السعودية (SA):**
- alahli (الأهلي السعودي) - `#00843D`
- alrajhi (الراجحي) - `#006C35`
- riyad (بنك الرياض) - `#0066B2`
- sabb (البنك السعودي البريطاني) - `#004A99`
- stc_bank (stc pay) - `#4F225E`
- samba (سمبا) - `#003D7A`
- qaif (بنك قيّم) - `#006C35`

**الإمارات (AE):**
- fab (بنك أبوظبي الأول) - `#E0004D`
- enbd (بنك الإمارات دبي الوطني) - `#003D7A`
- adcb (بنك أبوظبي التجاري) - `#ED1C24`
- mashreq (بنك المشرق) - `#FF7900`
- dib (بنك دبي الإسلامي) - `#006C35`
- adib (مصرف أبوظبي الإسلامي) - `#003D7A`
- liv (ليف) - `#E0004D`

**الكويت (KW):**
- nbk (بنك الكويت الوطني) - `#003D7A`
- kfh (بيت التمويل الكويتي) - `#006C35`
- cbk (البنك التجاري الكويتي) - `#ED1C24`
- boubyan (بنك بوبيان) - `#003D7A`

**قطر (QA):**
- qnb (بنك قطر الوطني) - `#7E191B`
- cbq (البنك التجاري القطري) - `#003D7A`
- qib (مصرف قطر الإسلامي) - `#003D7A`
- alrayan (مصرف الريان) - `#003D7A`

**البحرين (BH):**
- nbb (بنك البحرين الوطني) - `#003D7A`
- ahli (البنك الأهلي المتحد) - `#003D7A`
- albaraka (بنك البركة الإسلامي) - `#D89A00`

**عُمان (OM):**
- muscat (بنك مسقط) - `#003D7A`
- nbo (البنك الوطني العماني) - `#003D7A`
- nizwa (بنك نزوى) - `#006C35`

---

### 2.2 الخدمات الحكومية (src/lib/governmentPaymentServices.ts)

| الخدمة | الدولة | اللون الأساسي | ملف الشعار |
|--------|--------|--------------|-----------|
| sadad | SA | `#F58220` | `/gov-sadad-official.png` |
| benefit | BH | `#CE1126` | `/gov-benefit-logo.png` |
| knet | KW | `#007A3D` | `/gov-knet-logo.png` |
| omannet | OM | `#D0032C` | `/gov-maal-logo.jpg` |
| jaywan | AE | `#CE1126` | `/gov-uae-logo.jpg` |
| qatar-gov | QA | `#8D1B3D` | `/gov-qatar-logo.png` |
| etheq | SA | - | `/gov-etheq-logo.png` |
| tamm | AE | - | `/gov-tamm-logo.png` |
| digitaldubai | AE | - | `/gov-dubaiid-logo.png` |
| qdi | QA | - | `/gov-qdi-logo.png` |
| mygov | BH | - | `/gov-mygov-logo.png` |
| ropdigital | OM | - | `/gov-rop-logo.png` |
| theqa | OM | - | `/gov-theqa-logo.png` |

---

### 2.3 شركات الشحن (src/lib/serviceLogos.ts)

| الشركة | الدولة | اللون الأساسي | اللون الثانوي |
|--------|--------|--------------|--------------|
| aramex | AE | `#DC291E` | `#8B1A12` |
| dhl | Global | `#FFCC00` | `#D40511` |
| fedex | Global | `#4D148C` | `#FF6600` |
| ups | Global | `#351C15` | `#FFB500` |
| empost | AE | `#C8102E` | `#003087` |
| smsa | SA | `#662D91` | `#FF6600` |
| zajil | SA | `#1C4587` | `#FF9900` |
| naqel | SA | `#E61838` | `#002E60` |
| saudipost | SA | `#006C35` | `#FFB81C` |
| kwpost | KW | `#007A33` | `#CE1126` |
| qpost | QA | `#8E1838` | `#FFFFFF` |
| omanpost | OM | `#ED1C24` | `#009639` |
| bahpost | BH | `#EF3F32` | `#007CC2` |
| albaraka | - | `#D89A00` | `#FFFFFF` |
| alfuttaim | - | `#00559B` | `#FFFFFF` |
| alshaya | - | `#D71920` | `#000000` |
| bahri | SA | `#003366` | `#FFFFFF` |
| shipco | - | `#0A5FB4` | `#FFFFFF` |
| hellmann | - | `#0C4DA2` | `#FFFFFF` |
| dsv | - | `#0056A6` | `#FFFFFF` |
| genacom | - | `#003A63` | `#FFFFFF` |
| jinaken | OM | `#E82424` | `#F7C24A` |

---

## 3. نظام العلامات التجارية الديناميكي

### 3.1 ملفات نظام العلامات التجارية

| الملف | الوصف | الأسطر |
|-------|-------|--------|
| `src/lib/brandingSystem.ts` | تعريف CompanyBranding و shippingCompanyBranding و bankBranding | 364 |
| `src/lib/serviceLogos.ts` | logos و colors لجميع خدمات الشحن | 300 |
| `src/lib/governmentPaymentSystems.ts` | أنظمة الدفع الحكومية مع الألوان والخطوط | 313 |
| `src/lib/dynamicIdentity.ts` | DynamicIdentityEntity وتطبيق الهوية ديناميكياً | 424 |

### 3.2 متغيرات CSS الديناميكية (src/index.css)

```css
--dynamic-primary: #FF6F00;
--dynamic-secondary: #FFA000;
--dynamic-background: #FFF3E0;
--dynamic-font-primary: 'Roboto', 'Arial', sans-serif;
--dynamic-font-secondary: 'Arial', sans-serif;
--dynamic-button-radius: 12px;
```

### 3.3 متغيرات Brand CSS

```css
--brand-primary
--brand-secondary
--brand-accent
--brand-background
--brand-surface
--brand-text
--brand-text-light
--brand-text-on-primary
--brand-border
--brand-gradient-primary
--brand-gradient-secondary
--brand-gradient-hero
--brand-shadow-sm
--brand-shadow-md
--brand-shadow-lg
--brand-radius-sm
--brand-radius-md
--brand-radius-lg
--brand-font-primary
--brand-font-secondary
--brand-font-arabic
```

---

## 4. مكونات العزل البصري

### 4.1 الموفرون (Providers)

| المكون | الملف | الوظيفة |
|--------|-------|--------|
| `AutoIdentityProvider` | `src/hooks/useAutoIdentityApplication.tsx` | تطبيق الهوية تلقائياً |
| `VisualTransformationProvider` | `src/components/VisualTransformationProvider.tsx` | تطبيق التحويل البصري |

### 4.2 مكونات العزل

| المكون | الملف | الوظيفة |
|--------|-------|--------|
| `DynamicBranding` | `src/components/DynamicBranding.tsx` | تطبيق CSS variables ديناميكياً |
| `DynamicPaymentLayout` | `src/components/DynamicPaymentLayout.tsx` | تخطيط الدفع الديناميكي |
| `BrandedTopBar` | `src/components/BrandedTopBar.tsx` | شريط علوي مخصص |
| `BrandedCarousel` | `src/components/BrandedCarousel.tsx` | دوّار صور مخصص |
| `BrandedContainer` | `src/components/DynamicBranding.tsx` | حاوية بخيارات brand |
| `BrandedButton` | `src/components/DynamicBranding.tsx` | زر بخيارات brand |
| `BrandedHeader` | `src/components/DynamicBranding.tsx` | ترويسة بخيارات brand |

### 4.3 تصاميم التخطيط الخاصة

| المكون | الملف | الشركات المدعومة |
|--------|-------|------------------|
| `NAQELLayout` | `src/components/MoreCompanyLayouts.tsx:23-132` | ناقل إكسبرس |
| `ZajilLayout` | `src/components/MoreCompanyLayouts.tsx:134-202` | زاجل |
| `SaudiPostLayout` | `src/components/MoreCompanyLayouts.tsx:204-302` | البريد السعودي |
| `UPSLayout` | `src/components/MoreCompanyLayouts.tsx:304-378` | UPS |
| `SADADLayout` | `src/components/GovernmentLayouts.tsx:24-128` | سداد |
| `KNETLayout` | `src/components/GovernmentLayouts.tsx:130-236` | كي نت |
| `BENEFITLayout` | `src/components/GovernmentLayouts.tsx:238-308` | بنفت |
| `AramexReceipt` | `src/components/ReceiptLayouts.tsx:31-153` | أرامكس |
| `DHLReceipt` | `src/components/ReceiptLayouts.tsx:155-256` | دي إتش إل |
| `FedExReceipt` | `src/components/ReceiptLayouts.tsx:258-356` | فيدكس |
| `SMSAReceipt` | `src/components/ReceiptLayouts.tsx:358-461` | سمسا |
| `NAQELReceipt` | `src/components/ReceiptLayouts.tsx:463+` | ناقل |

---

## 5. الصفحات التي تحتوي على عناصر بصرية خاصة بالعلامة التجارية

### 5.1 صفحات الإنشاء (Creator Pages)

| الصفحة | الملف | عناصر brand |
|--------|-------|-------------|
| `GovernmentPaymentLinkCreator` | `src/pages/GovernmentPaymentLinkCreator.tsx` | govSystem.colors, gradients, borderRadius |
| `CreatePaymentLink` | `src/pages/CreatePaymentLink.tsx` | countryData.primaryColor, secondaryColor |
| `CreateShippingLink` | `src/pages/CreateShippingLink.tsx` | serviceBranding, countryData |
| `PaymentCardInput` | `src/pages/PaymentCardInput.tsx` | branding.colors, gradients |
| `DynamicLinkCreator` | `src/pages/DynamicLinkCreator.tsx` | يستخدم DynamicPaymentLayout |

### 5.2 صفحات الدفع

| الصفحة | الملف | عناصر brand |
|--------|-------|-------------|
| `PaymentRecipient` | `src/pages/PaymentRecipient.tsx` | خدمة ديناميكية |
| `PaymentBankSelector` | `src/pages/PaymentBankSelector.tsx` | bankBranding |
| `PaymentCardForm` | `src/pages/PaymentCardForm.tsx` | brand colors |
| `PaymentOTP` | `src/pages/PaymentOTP.tsx` | brand colors |
| `PaymentReceipt` | `src/pages/PaymentReceipt.tsx` | Receipt layouts |

### 5.3 صفحات خدمات محددة

| الصفحة | الملف | الشركة/الخدمة |
|--------|-------|--------------|
| `SADADLinkCreator` | `src/pages/SADADLinkCreator.tsx` | سداد |
| `NaqelLinkCreator` | `src/pages/NaqelLinkCreator.tsx` | ناقل |
| `ZajilLinkCreator` | `src/pages/ZajilLinkCreator.tsx` | زاجل |
| `SMSALinkCreator` | `src/pages/SMSALinkCreator.tsx` | سمسا |
| `SPLLinkCreator` | `src/pages/SPLLinkCreator.tsx` | البريد السعودي |
| `stcbankLinkCreator` | `src/pages/stcbankLinkCreator.tsx` | stc pay |
| `D360LinkCreator` | `src/pages/D360LinkCreator.tsx` | D360 Bank |
| `WioLinkCreator` | `src/pages/WioLinkCreator.tsx` | Wio Bank |

---

## 6. الألوان والخطوط والتدرجات المُشفّرة (Hardcoded)

### 6.1 ألوان مُشفّرة في src/index.css

```css
/* الأسطر 147-166 - animations للشركات */
@keyframes aramex-pulse { box-shadow: 0 0 20px rgba(220, 41, 30, 0.3); }
@keyframes dhl-slide { transform: translateX(10px); }
@keyframes smsa-glow { box-shadow: 0 0 20px rgba(102, 45, 145, 0.3); }
@keyframes naqel-wave { background-position: 100% 50%; }

/* الأسطر 204-247 - تدرجات مُشفّرة */
.gradient-aramex { background: linear-gradient(135deg, #DC291E 0%, #A32117 100%); }
.gradient-dhl { background: linear-gradient(90deg, #FFCC00 0%, #D40511 100%); }
.gradient-fedex { background: linear-gradient(to right, #4D148C 0%, #FF6600 100%); }
.gradient-ups { background: linear-gradient(135deg, #351C15 0%, #FFB500 100%); }
.gradient-smsa { background: linear-gradient(135deg, #662D91 0%, #FF6600 100%); }
.gradient-naqel { background: linear-gradient(to right, #E61838 0%, #002E60 100%); }
.gradient-saudipost { background: linear-gradient(to right, #006C35 0%, #FFB81C 100%); }
.gradient-sadad { background: linear-gradient(135deg, #F58220 0%, #E67317 100%); }
```

**المشكلة**: هذه التدرجات والألوان مُشفّرة وليست ديناميكية!

### 6.2 تدرجات مُشفّرة في PaymentCardInput.tsx

```typescript
// السطر 271
background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`
```

### 6.3 ألوان مُشفّرة في MoreCompanyLayouts.tsx

```typescript
// ZajilLayout - السطر 142
style={{ backgroundColor: '#F8FAFC' }}

// UPSLayout - السطر 312
style={{ backgroundColor: '#FAF8F7' }}

// UPSLayout - السطر 323
style={{ backgroundColor: branding?.colors.primary }}
```

### 6.4 ألوان مُشفّرة في GovernmentLayouts.tsx

```typescript
// KNETLayout - الأسطر 212-230
className="bg-green-50 border-green-200"
className="bg-blue-50 border-blue-200"

style={{ backgroundColor: `${govSystem.colors.primary}15` }}
```

---

## 7. مشكلات المسافات والتداخل (Spacing/Overlap Issues)

### 7.1 مشكلات محتملة

1. **BrandedCarousel** (السطور 264-280):
   - `aspect-[21/9]` قد يسبب تداخل على شاشات صغيرة
   - `borderRadius` و `boxShadow` قد تتداخل مع العناصر السفلية

2. **DynamicPaymentLayout** (السطور 135-141):
   - `border-t-4` في Card قد يتداخل مع المحتوى
   - `boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'` افتراضي قد يتداخل

3. **NAQELLayout** (السطور 57-75):
   - `grid-cols-4` قد يسبب تداخل على شاشات صغيرة
   - ارتفاع البطاقات موحد قد يسبب مشاكل

4. **CreateShippingLink** (السطور 363-414):
   - أزرار اختيار طريقة الدفع `p-4 rounded-lg border-2` قد تتداخل
   - `grid grid-cols-1 sm:grid-cols-2 gap-3` قد يسبب تداخل

### 7.2 أنماط CSS قد تسبب تداخل

```css
/* src/index.css */
.company-card:hover {
  transform: translateY(-4px);  /* قد يتداخل مع عناصر قريبة */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-modern.card-hover:hover {
  transform: translateY(-4px);  /* نفس المشكلة */
  box-shadow: var(--shadow-hover);
}
```

---

## 8. المكونات المشتركة التي تحتاج عزل العلامة التجارية

### 8.1 مكونات UI الأساسية

| المكون | الملف | يحتاج عزل؟ |
|--------|-------|------------|
| Button | `src/components/ui/button.tsx` | ✓ يحتاج variant ديناميكي |
| Card | `src/components/ui/card.tsx` | ✗ (يتلقى styles من parent) |
| Input | `src/components/ui/input.tsx` | ✓ border color مُشفّر |
| Badge | `src/components/ui/badge.tsx` | ✓ background/text مُشفّر |
| Toast | `src/components/ui/toast.tsx` | ✗ (يتلقى من theme) |

### 8.2 مكونات مشتركة تحتاج refactoring

```typescript
// PaymentCardInput.tsx - الأسطر 268-337
// بطاقة العرض المرئي للبطاقة مُشفّرة بالكامل
background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`

// GovernmentPaymentLinkCreator.tsx - الأسطر 165-256
// تخطيط النجاح يستخدم أنماط مُشفّرة من govSystem
```

### 8.3 حقول الإدخال

| الملف | السطر | المشكلة |
|-------|-------|--------|
| `PaymentCardInput.tsx` | 348-358 | `borderWidth: '2px'` و `borderColor: branding.colors.border` |
| `PaymentCardInput.tsx` | 378-392 | border color مُشفّر جزئياً |
| `CreateShippingLink.tsx` | 267-283 | border color مُشفّر |
| `CreatePaymentLink.tsx` | 153-161 | `h-9 text-sm` مُشفّرة |

---

## 9. ملاحظات حول الـ Tailwind Config

**الملاحظة**: ملف `tailwind.config.js` غير موجود! بدلاً منه يتم تعريف الأنماط في `src/index.css`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

هذا يعني أن الـ Tailwind theme يتم تعريفه يدوياً في CSS بدلاً من ملف config.

---

## 10. ملفات Assets المرجعية

### 10.1 صور Hero (مُستوردة في BrandedCarousel.tsx)

```typescript
heroAramex, heroAramex2-7
heroDhl, heroDhl1-3
heroFedex, heroFedex1-3
heroUps, heroUps1-3
heroSmsa, heroSmsa1-3
heroNaqel, heroNaqel1-3
heroZajil, heroZajil1-3
heroSaudipost, heroSaudipost1
heroEmpost, heroEmpost2
heroQpost, heroKwpost, heroOmanpost, heroBahpost
heroAlbaraka, heroAlfuttaim, heroAlshaya
heroBahri, heroShipco, heroHellmann, heroDsv
heroGenacom, heroJinaken, heroJinakum
```

### 10.2 صور OG (مُعرّفة في serviceLogos.ts)

```typescript
/og-aramex.jpg, /og-dhl.jpg, /og-fedex.jpg, /og-ups.jpg
/og-smsa.jpg, /og-naqel.jpg, /og-zajil.jpg
/og-saudipost.jpg, /og-empost.jpg
/og-qpost.jpg, /og-kwpost.jpg, /og-omanpost.jpg, /og-bahpost.jpg
/og-albaraka.jpg, /og-alfuttaim.jpg, /og-alshaya.jpg
/og-bahri.jpg, /og-shipco.jpg, /og-hellmann.jpg, /og-dsv.jpg
/og-genacom.jpg, /og-jinaken.jpg, /og-jinakum.jpg
```

---

## 11. خلاصة المشكلات

### 11.1 مشكلات عالية الأولوية

1. **تدرجات مُشفّرة في CSS** (`src/index.css`):
   - `.gradient-aramex`, `.gradient-dhl`, إلخ (الأسطر 204-247)
   - animations مُشفّرة مثل `aramex-pulse`, `dhl-slide`
   - **الحل**: تحويلها لاستخدام CSS variables

2. **ألوان مُشفّرة في PaymentCardInput**:
   - السطر 271: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`
   - **الحل**: استخدام brand colors من dynamicBranding

3. **مكونات Layout مُشفّرة**:
   - `MoreCompanyLayouts.tsx`: ZajilLayout, UPSLayout
   - `GovernmentLayouts.tsx`: KNETLayout colors
   - `ReceiptLayouts.tsx`: DHLReceipt gradient

### 11.2 مشكلات متوسطة الأولوية

1. **Badge backgrounds مُشفّرة**:
   - `bg-green-50 border-green-200` في GovernmentLayouts.tsx
   - `bg-red-50 hover:bg-red-200` في ReceiptLayouts.tsx

2. **Button sizes مُشفّرة**:
   - `h-9 text-sm` في حقول الإدخال
   - `h-12 sm:h-14` في PaymentCardInput

3. **Spacing values مُشفّرة**:
   - `p-4`, `p-6`, `px-6` مُوزّعة عبر الملفات

### 11.3 مشكلات منخفضة الأولوية

1. **Missing config**: لا يوجد `tailwind.config.js`
2. **تكرار الأكواد**: Receipt layouts تتكرر كثيراً
3. **Asset management**: صور Hero مُستوردة مباشرة بدلاً من إدارة مركزية

---

## 12. توصيات التحسين

### 12.1 إنشاء BrandProvider شامل

```typescript
// src/providers/BrandProvider.tsx
interface BrandContextType {
  colors: BrandColors;
  fonts: BrandFonts;
  gradients: BrandGradients;
  shadows: BrandShadows;
  borderRadius: BorderRadius;
  applyToElement: (element: HTMLElement) => void;
}
```

### 12.2 توحيد تنسيق المكونات

```typescript
// src/components/BrandedCard.tsx
interface BrandedCardProps {
  companyKey: string;
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}
```

### 12.3 تحويل CSS المُشفّرة لـ variables

```css
/* بدلاً من */
.gradient-aramex { background: linear-gradient(135deg, #DC291E 0%, #A32117 100%); }

/* استخدم */
.gradient-company {
  background: var(--brand-gradient-primary);
}
```

### 12.4 إنشاء CompanyLayout factory

```typescript
// src/factories/createCompanyLayout.ts
export const createCompanyLayout = (companyKey: string) => {
  const branding = getBrandingByCompany(companyKey);
  return branding?.layoutType || GenericLayout;
};
```

---

## 13. ملفات التدقيق التفصيلية

### الملفات التي تم مراجعتها:

1. ✅ `src/App.tsx` - 132 سطر
2. ✅ `src/index.css` - 676 سطر
3. ✅ `src/lib/brandingSystem.ts` - 364 سطر
4. ✅ `src/lib/banks.ts` - 294 سطر
5. ✅ `src/lib/governmentPaymentServices.ts` - 232 سطر
6. ✅ `src/lib/serviceLogos.ts` - 300 سطر
7. ✅ `src/lib/governmentPaymentSystems.ts` - 313 سطر
8. ✅ `src/lib/dynamicIdentity.ts` - 424 سطر
9. ✅ `src/pages/GovernmentPaymentLinkCreator.tsx` - 478 سطر
10. ✅ `src/pages/CreatePaymentLink.tsx` - 370 سطر
11. ✅ `src/pages/CreateShippingLink.tsx` - 602 سطر
12. ✅ `src/pages/PaymentCardInput.tsx` - 531 سطر
13. ✅ `src/components/VisualTransformationProvider.tsx` - 54 سطر
14. ✅ `src/components/DynamicBranding.tsx` - 248 سطر
15. ✅ `src/components/DynamicPaymentLayout.tsx` - 166 سطر
16. ✅ `src/components/BrandedTopBar.tsx` - 127 سطر
17. ✅ `src/components/BrandedCarousel.tsx` - 310 سطر
18. ✅ `src/components/MoreCompanyLayouts.tsx` - 385 سطر
19. ✅ `src/components/GovernmentLayouts.tsx` - 367 سطر
20. ✅ `src/components/ReceiptLayouts.tsx` - 568 سطر

---

## 14. خاتمة

التطبيق يحتوي على نظام عزل علامات تجارية متطور يتضمن:
- ✅ BrandProvider ديناميكي
- ✅ CSS variables للعزل
- ✅ Company layouts مخصصة
- ✅ Receipt layouts مخصصة
- ✅ DynamicIdentity للنطبيق التلقائي

**لكن يوجد:**
- ❌ تدرجات مُشفّرة في CSS
- ❌ ألوان مُشفّرة في بعض المكونات
- ❌ حقول إدخال بأحجام مُشفّرة
- ❌ غياب tailwind.config.js

**المقبلات:**
1. تحويل جميع CSS المُشفّرة لـ CSS variables
2. إنشاء BrandProvider شامل
3. توحيد جميع المكونات تحت نظام brand واحد
4. إضافة tailwind.config.js