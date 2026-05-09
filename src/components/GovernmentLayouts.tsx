import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getBrandingByCompany } from '@/lib/brandingSystem';
import { governmentPaymentSystems } from '@/lib/governmentPaymentSystems';
import { 
  Shield, 
  Lock, 
  CheckCircle2, 
  CreditCard,
  Building2,
  Globe,
  Phone,
  Smartphone
} from 'lucide-react';

interface GovernmentLayoutProps {
  countryCode: string;
  children: React.ReactNode;
  amount?: string;
  serviceName?: string;
}

export const SADADLayout: React.FC<GovernmentLayoutProps> = ({ 
export const SADADLayout: React.FC<GovernmentLayoutProps> = ({ 
  children, 
  amount, 
  serviceName 
}) => {
  const govSystem = governmentPaymentSystems.SA;
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--brand-bg-secondary)' }} dir="rtl">
      <div 
        className="h-24"
        style={{ background: 'var(--brand-gradient-primary)' }}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-xl" style={{ borderRadius: 'var(--brand-radius-lg)' }}>
              {govSystem.logo && (
                <img src={govSystem.logo} alt="سداد" className="h-12" />
              )}
            </div>
            <div className="text-white">
              <h1 className="font-bold text-2xl" style={{ fontFamily: 'var(--brand-font-arabic)' }}>سداد</h1>
              <p className="text-sm opacity-90">نظام المدفوعات الوطني</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge 
              className="px-3 py-1"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.2)', 
                color: 'white',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <Shield className="w-4 h-4 ml-1" />
              معتمد من SAMA
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { icon: Shield, text: 'آمن ومعتمد', desc: 'البنك المركزي' },
            { icon: Lock, text: 'مشفر بالكامل', desc: 'SSL 256-bit' },
            { icon: Globe, text: 'متاح 24/7', desc: 'على مدار الساعة' },
            { icon: CheckCircle2, text: 'فوري', desc: 'تنفيذ لحظي' }
          ].map((item, idx) => (
            <Card 
              key={idx}
              className="p-4 text-center hover:shadow-lg transition-all"
              style={{ 
                borderColor: 'var(--brand-primary)',
                borderWidth: '1px', 
                borderStyle: 'solid',
                borderRadius: 'var(--brand-radius-md)',
                backgroundColor: 'var(--brand-bg-primary)'
              }}
            >
              <div 
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2"
                style={{ backgroundColor: 'var(--brand-bg-tertiary)' }}
              >
                <item.icon className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
              </div>
              <p className="font-bold text-sm" style={{ color: 'var(--brand-text-primary)' }}>{item.text}</p>
              <p className="text-xs" style={{ color: 'var(--brand-text-muted)' }}>{item.desc}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card 
            className="p-8 shadow-2xl"
            style={{ 
              borderRadius: 'var(--brand-radius-xl)',
              boxShadow: 'var(--brand-shadow-2xl)',
              backgroundColor: 'var(--brand-bg-primary)'
            }}
          >
            <div 
              className="flex items-center gap-4 mb-6 pb-4 border-b-2"
              style={{ 
                borderBottomColor: 'var(--brand-primary)',
                fontFamily: 'var(--brand-font-arabic)'
              }}
            >
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--brand-bg-tertiary)' }}
              >
                <CreditCard className="w-7 h-7" style={{ color: 'var(--brand-primary)' }} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--brand-text-primary)' }}>بوابة الدفع الحكومية</h2>
                <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>{serviceName || 'خدمة حكومية'}</p>
              </div>
              {amount && (
                <div 
                  className="px-6 py-3 rounded-xl font-bold text-xl"
                  style={{ 
                    backgroundColor: 'var(--brand-primary)',
                    color: 'var(--brand-text-on-primary)',
                    borderRadius: 'var(--brand-radius-lg)'
                  }}
                >
                  {amount}
                </div>
              )}
            </div>

            {children}
          </Card>

          <div 
            className="mt-6 p-6 rounded-xl text-white"
            style={{ 
              background: 'var(--brand-gradient-primary)',
              borderRadius: 'var(--brand-radius-lg)'
            }}
          >
            <div className="text-center">
              <Building2 className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">نظام سداد - SADAD</h3>
              <p className="text-sm opacity-90">
                نظام المدفوعات الوطني السعودي المعتمد من البنك المركزي السعودي (SAMA)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const KNETLayout: React.FC<GovernmentLayoutProps> = ({ 
  children, 
  amount, 
  serviceName 
}) => {
  const govSystem = governmentPaymentSystems.KW;
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--brand-surface)' }} dir="rtl">
      <div 
        className="h-20"
        style={{ background: 'var(--brand-gradient-primary)' }}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-lg" style={{ borderRadius: 'var(--brand-radius-md)' }}>
              {govSystem.logo && (
                <img src={govSystem.logo} alt="KNET" className="h-10" />
              )}
            </div>
            <div className="text-white">
              <h1 className="font-bold text-xl" style={{ fontFamily: 'var(--brand-font-arabic)' }}>KNET - كي نت</h1>
              <p className="text-xs opacity-90">شبكة الكويت الوطنية للمدفوعات</p>
            </div>
          </div>
          <Badge 
            className="px-3 py-1"
            style={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              borderRadius: 'var(--brand-radius-md)'
            }}
          >
            أول نظام دفع إلكتروني في الخليج
          </Badge>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            {[
              { icon: Shield, text: 'آمن' },
              { icon: Lock, text: 'مشفر' },
              { icon: CheckCircle2, text: 'معتمد' },
              { icon: Globe, text: '24/7' }
            ].map((item, idx) => (
              <Badge 
                key={idx}
                className="px-4 py-2 text-sm"
                style={{
                  backgroundColor: 'var(--brand-bg-tertiary)',
                  color: 'var(--brand-primary)',
                  border: '1px solid var(--brand-border)',
                  borderRadius: 'var(--brand-radius-md)'
                }}
              >
                <item.icon className="w-4 h-4 ml-2" />
                {item.text}
              </Badge>
            ))}
          </div>

          <Card 
            className="p-8 shadow-2xl"
            style={{ 
              borderRadius: 'var(--brand-radius-xl)',
              boxShadow: 'var(--brand-shadow-2xl)',
              backgroundColor: 'var(--brand-bg-primary)'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{ background: 'var(--brand-gradient-primary)' }}
              >
                <CreditCard className="w-7 h-7" style={{ color: 'var(--brand-text-on-primary)' }} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--brand-text-primary)' }}>الدفع عبر كي نت</h2>
                <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>نظام الدفع الإلكتروني الكويتي</p>
              </div>
              {amount && (
                <div 
                  className="text-left px-5 py-2 rounded-lg"
                  style={{ 
                    backgroundColor: 'var(--brand-bg-tertiary)',
                    borderRadius: 'var(--brand-radius-md)'
                  }}
                >
                  <p className="text-xs" style={{ color: 'var(--brand-primary)' }}>المبلغ</p>
                  <p className="text-xl font-bold" style={{ color: 'var(--brand-primary)' }}>{amount}</p>
                </div>
              )}
            </div>

            {children}
          </Card>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card 
              className="p-4"
              style={{ 
                backgroundColor: 'var(--brand-bg-secondary)', 
                borderColor: 'var(--brand-border)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--brand-text-primary)' }}>KNET Approved</p>
                  <p className="text-xs" style={{ color: 'var(--brand-text-muted)' }}>معتمد من البنك المركزي</p>
                </div>
              </div>
            </Card>

            <Card 
              className="p-4"
              style={{ 
                backgroundColor: 'var(--brand-bg-secondary)', 
                borderColor: 'var(--brand-border)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" style={{ color: 'var(--brand-secondary)' }} />
                <div>
                  <p className="font-bold text-sm" style={{ color: 'var(--brand-text-primary)' }}>WAMD Ready</p>
                  <p className="text-xs" style={{ color: 'var(--brand-text-muted)' }}>الدفع الفوري الجديد</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BENEFITLayout: React.FC<GovernmentLayoutProps> = ({ 
  children, 
  amount, 
  serviceName 
}) => {
  const govSystem = governmentPaymentSystems.BH;
  
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--brand-surface)' }} dir="rtl">
      <div 
        className="h-20"
        style={{ background: 'var(--brand-gradient-primary)' }}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-xl" style={{ borderRadius: 'var(--brand-radius-lg)' }}>
              {govSystem.logo && (
                <img src={govSystem.logo} alt="BENEFIT" className="h-10" />
              )}
            </div>
            <div className="text-white">
              <h1 className="font-bold text-xl" style={{ fontFamily: 'var(--brand-font-arabic)' }}>BENEFIT - بنفت</h1>
              <p className="text-xs opacity-90">الشبكة الإلكترونية للمعاملات المالية</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card 
            className="p-8 shadow-2xl"
            style={{ 
              borderRadius: 'var(--brand-radius-xl)',
              boxShadow: 'var(--brand-shadow-2xl)',
              backgroundColor: 'var(--brand-bg-primary)'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--brand-primary)' }}
              >
                <CreditCard className="w-7 h-7" style={{ color: 'var(--brand-text-on-primary)' }} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--brand-text-primary)' }}>BenefitPay</h2>
                <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>المحفظة الإلكترونية الوطنية</p>
              </div>
              {amount && (
                <div 
                  className="px-6 py-3 rounded-lg font-bold text-xl"
                  style={{ 
                    backgroundColor: 'var(--brand-primary)',
                    color: 'var(--brand-text-on-primary)',
                    borderRadius: 'var(--brand-radius-md)'
                  }}
                >
                  {amount}
                </div>
              )}
            </div>

            {children}
          </Card>

          <Card 
            className="mt-6 p-6"
            style={{ 
              background: 'var(--brand-gradient-error)',
              borderRadius: 'var(--brand-radius-lg)'
            }}
          >
            <div className="flex items-center gap-4">
              <Shield className="w-10 h-10" style={{ color: 'var(--brand-text-on-primary)' }} />
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--brand-text-on-primary)' }}>BENEFIT Secure Payment</h3>
                <p className="text-sm" style={{ color: 'var(--brand-text-on-primary)', opacity: 0.9 }}>
                  نظام دفع وطني معتمد من مصرف البحرين المركزي منذ 1997
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface GovernmentBadgeProps {
  countryCode: string;
}

export const GovernmentSecurityBadge: React.FC<GovernmentBadgeProps> = ({ countryCode }) => {
  const govSystem = governmentPaymentSystems[countryCode as keyof typeof governmentPaymentSystems];
  
  if (!govSystem) return null;
  
  return (
    <Card 
      className="p-6 text-white mb-6"
      style={{ 
        background: 'var(--brand-gradient-primary)',
        borderRadius: 'var(--brand-radius-lg)'
      }}
    >
      <div className="flex items-center gap-4">
        <Shield className="w-12 h-12" />
        <div>
          <h3 className="font-bold text-lg mb-1">{govSystem.nameAr}</h3>
          <p className="text-sm opacity-90">{govSystem.description}</p>
        </div>
      </div>
      
      <div 
        className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.2)' }}
      >
        {[
          { icon: Lock, text: 'تشفير SSL' },
          { icon: CheckCircle2, text: 'معتمد حكومياً' },
          { icon: Building2, text: 'نظام وطني' }
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

export const getGovernmentLayout = (countryCode: string) => {
  switch (countryCode.toUpperCase()) {
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

export default {
  SADADLayout,
  KNETLayout,
  BENEFITLayout,
  GovernmentSecurityBadge,
  getGovernmentLayout
};
