import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getBrandingByCompany } from '@/lib/brandingSystem';
import { 
  CheckCircle2, 
  Package, 
  Calendar, 
  CreditCard,
  Download,
  Share2,
  Printer,
  Mail,
  MapPin,
  User,
  Hash,
  DollarSign,
  Clock
} from 'lucide-react';

interface ReceiptLayoutProps {
  companyKey: string;
  children: React.ReactNode;
  trackingNumber?: string;
  amount?: string;
  transactionId?: string;
  date?: string;
  recipientName?: string;
}

export const AramexReceipt: React.FC<ReceiptLayoutProps> = ({
  children,
  trackingNumber,
  amount,
  transactionId,
  date,
  recipientName
}) => {
  const branding = getBrandingByCompany('aramex');
  
  return (
    <div className="min-h-screen" dir="rtl" style={{ backgroundColor: 'var(--brand-bg-secondary)' }}>
      <div 
        className="h-32 flex items-center justify-center"
        style={{ background: 'var(--brand-gradient-primary)' }}
      >
        <div className="text-center text-white">
          <div 
            className="w-20 h-20 mx-auto mb-3 bg-white rounded-full flex items-center justify-center success-checkmark"
            style={{ borderRadius: 'var(--brand-radius-full)' }}
          >
            <CheckCircle2 className="w-12 h-12" style={{ color: 'var(--brand-primary)' }} />
          </div>
          <h1 className="text-3xl font-black mb-2">تم الدفع بنجاح</h1>
          <p className="text-sm opacity-90">Payment Successful</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12">
        <Card 
          className="max-w-2xl mx-auto p-8 shadow-2xl"
          style={{ 
            borderRadius: 'var(--brand-radius-xl)',
            boxShadow: 'var(--brand-shadow-2xl)',
            backgroundColor: 'var(--brand-bg-primary)'
          }}
        >
          <div className="text-center mb-8">
            <Badge 
              className="text-sm px-4 py-2"
              style={{ 
                backgroundColor: 'var(--brand-bg-tertiary)',
                color: 'var(--brand-primary)',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <CheckCircle2 className="w-4 h-4 ml-2" />
              عملية ناجحة
            </Badge>
          </div>

          <div className="space-y-4 mb-8">
            {trackingNumber && (
              <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'var(--brand-border)' }}>
                <div className="flex items-center gap-3">
                  <Hash className="w-5 h-5" style={{ color: 'var(--brand-text-muted)' }} />
                  <span style={{ color: 'var(--brand-text-secondary)' }}>رقم التتبع</span>
                </div>
                <span className="font-mono font-bold text-lg">{trackingNumber}</span>
              </div>
            )}

            {transactionId && (
              <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'var(--brand-border)' }}>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5" style={{ color: 'var(--brand-text-muted)' }} />
                  <span style={{ color: 'var(--brand-text-secondary)' }}>رقم المعاملة</span>
                </div>
                <span className="font-mono font-bold">{transactionId}</span>
              </div>
            )}

            {date && (
              <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'var(--brand-border)' }}>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" style={{ color: 'var(--brand-text-muted)' }} />
                  <span style={{ color: 'var(--brand-text-secondary)' }}>التاريخ</span>
                </div>
                <span className="font-semibold">{date}</span>
              </div>
            )}

            {amount && (
              <div 
                className="flex items-center justify-between py-4 px-4 rounded-lg"
                style={{ 
                  backgroundColor: 'var(--brand-bg-tertiary)',
                  borderRadius: 'var(--brand-radius-md)'
                }}
              >
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  <span className="font-bold">المبلغ المدفوع</span>
                </div>
                <span className="font-black text-2xl" style={{ color: 'var(--brand-primary)' }}>
                  {amount}
                </span>
              </div>
            )}

            {recipientName && (
              <div className="flex items-center justify-between py-3 border-b" style={{ borderColor: 'var(--brand-border)' }}>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5" style={{ color: 'var(--brand-text-muted)' }} />
                  <span style={{ color: 'var(--brand-text-secondary)' }}>المستلم</span>
                </div>
                <span className="font-semibold">{recipientName}</span>
              </div>
            )}
          </div>

          {children}

          <div className="grid grid-cols-3 gap-3 mt-8">
            {[
              { icon: Download, text: 'تحميل', bgVar: 'brand-bg-tertiary' },
              { icon: Share2, text: 'مشاركة', bgVar: 'brand-bg-secondary' },
              { icon: Printer, text: 'طباعة', bgVar: 'brand-bg-tertiary' }
            ].map((action, idx) => (
              <button
                key={idx}
                className="p-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2"
                style={{ 
                  backgroundColor: 'var(--brand-bg-secondary)',
                  borderColor: 'var(--brand-border)',
                  color: 'var(--brand-primary)',
                  borderRadius: 'var(--brand-radius-md)'
                }}
              >
                <action.icon className="w-5 h-5" />
                <span className="text-sm font-semibold">{action.text}</span>
              </button>
            ))}
          </div>
        </Card>

        <div className="max-w-2xl mx-auto mt-6 p-4 text-center text-sm" style={{ color: 'var(--brand-text-muted)' }}>
          <p>سيتم إرسال نسخة من الإيصال إلى بريدك الإلكتروني</p>
        </div>
      </div>
    </div>
  );
};

export const DHLReceipt: React.FC<ReceiptLayoutProps> = ({
  children,
  trackingNumber,
  amount,
  transactionId,
  date
}) => {
  const branding = getBrandingByCompany('dhl');
  
  return (
    <div 
      className="min-h-screen"
      style={{ background: `linear-gradient(to bottom, var(--brand-bg-secondary), var(--brand-bg-primary))` }}
      dir="rtl"
    >
      <div 
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{ background: 'var(--brand-gradient-primary)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full" style={{ borderRadius: 'var(--brand-radius-full)' }} />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-black rounded-full" style={{ borderRadius: 'var(--brand-radius-full)' }} />
        </div>
        
        <div className="text-center z-10" style={{ color: 'var(--brand-text-primary)' }}>
          <div 
            className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-2xl success-checkmark"
            style={{ borderRadius: 'var(--brand-radius-full)' }}
          >
            <CheckCircle2 className="w-16 h-16" style={{ color: 'var(--brand-success)' }} />
          </div>
          <h1 className="text-4xl font-black mb-2">PAYMENT CONFIRMED</h1>
          <p className="text-lg font-bold">تم تأكيد الدفع بنجاح</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-12">
        <Card 
          className="max-w-3xl mx-auto p-10 shadow-2xl"
          style={{ 
            borderRadius: 'var(--brand-radius-xl)',
            boxShadow: 'var(--brand-shadow-2xl)',
            backgroundColor: 'var(--brand-bg-primary)'
          }}
        >
          <div 
            className="flex items-center justify-between mb-8 pb-6 border-b-4"
            style={{ borderBottomColor: 'var(--brand-secondary)' }}
          >
            <div>
              <h2 className="text-3xl font-black mb-1" style={{ color: 'var(--brand-text-primary)' }}>DHL EXPRESS</h2>
              <p style={{ color: 'var(--brand-text-muted)' }}>Shipment Receipt</p>
            </div>
            {date && (
              <div className="text-left">
                <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>Date</p>
                <p className="font-bold">{date}</p>
              </div>
            )}
          </div>

          {children}

          {(trackingNumber || transactionId || amount) && (
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {trackingNumber && (
                <div 
                  className="p-6 rounded-xl"
                  style={{ 
                    backgroundColor: 'var(--brand-bg-tertiary)',
                    borderRadius: 'var(--brand-radius-lg)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-5 h-5" style={{ color: 'var(--brand-secondary)' }} />
                    <p className="font-bold text-sm">Tracking Number</p>
                  </div>
                  <p className="font-mono text-xl font-bold">{trackingNumber}</p>
                </div>
              )}

              {amount && (
                <div 
                  className="p-6 rounded-xl text-white"
                  style={{ 
                    background: 'var(--brand-gradient-secondary)',
                    borderRadius: 'var(--brand-radius-lg)'
                  }}
                >
                  <p className="text-sm opacity-90 mb-2">Total Amount</p>
                  <p className="text-3xl font-black">{amount}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 pt-6 border-t grid grid-cols-3 gap-4" style={{ borderColor: 'var(--brand-border)' }}>
            <button 
              className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all"
              style={{ 
                backgroundColor: 'var(--brand-warning-bg)',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <Download className="w-6 h-6" style={{ color: 'var(--brand-warning-text)' }} />
              <span className="text-sm font-bold" style={{ color: 'var(--brand-warning-text)' }}>Download</span>
            </button>
            <button 
              className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all"
              style={{ 
                backgroundColor: 'var(--brand-error-bg)',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <Mail className="w-6 h-6" style={{ color: 'var(--brand-error-text)' }} />
              <span className="text-sm font-bold" style={{ color: 'var(--brand-error-text)' }}>Email</span>
            </button>
            <button 
              className="flex flex-col items-center gap-2 p-4 rounded-lg transition-all"
              style={{ 
                backgroundColor: 'var(--brand-bg-tertiary)',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <Printer className="w-6 h-6" style={{ color: 'var(--brand-text-primary)' }} />
              <span className="text-sm font-bold" style={{ color: 'var(--brand-text-primary)' }}>Print</span>
            </button>
          </div>
        </Card>

        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>
            © 2025 DHL International GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export const FedExReceipt: React.FC<ReceiptLayoutProps> = ({
  children,
  trackingNumber,
  amount,
  transactionId,
  date
}) => {
  const branding = getBrandingByCompany('fedex');
  
  return (
    <div className="min-h-screen" dir="rtl" style={{ backgroundColor: 'var(--brand-bg-secondary)' }}>
      <div 
        className="h-36"
        style={{ background: 'var(--brand-gradient-hero)' }}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-white">
          <div 
            className="w-20 h-20 mb-3 bg-white rounded-full flex items-center justify-center success-checkmark"
            style={{ borderRadius: 'var(--brand-radius-full)' }}
          >
            <CheckCircle2 className="w-12 h-12" style={{ color: 'var(--brand-success)' }} />
          </div>
          <h1 className="text-3xl font-black">Payment Complete</h1>
          <p className="text-sm opacity-90">تم إتمام الدفع بنجاح</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card 
              className="p-8 shadow-xl"
              style={{ 
                borderRadius: 'var(--brand-radius-xl)',
                boxShadow: 'var(--brand-shadow-xl)',
                backgroundColor: 'var(--brand-bg-primary)'
              }}
            >
              <div 
                className="flex items-center justify-between mb-6 pb-4 border-b-2"
                style={{ 
                  borderBottomColor: 'var(--brand-primary)',
                  fontFamily: 'var(--brand-font-arabic)'
                }}
              >
                <div>
                  <h2 className="text-2xl font-black" style={{ color: 'var(--brand-text-primary)' }}>FedEx</h2>
                  <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>Transaction Receipt</p>
                </div>
                <Badge 
                  className="px-4 py-2"
                  style={{ 
                    backgroundColor: 'var(--brand-primary)',
                    color: 'var(--brand-text-on-primary)',
                    borderRadius: 'var(--brand-radius-md)'
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 ml-1" />
                  CONFIRMED
                </Badge>
              </div>

              {children}
            </Card>
          </div>

          <div className="space-y-4">
            {amount && (
              <Card 
                className="p-6 text-center"
                style={{ 
                  background: 'var(--brand-gradient-primary)',
                  color: 'var(--brand-text-on-primary)',
                  borderRadius: 'var(--brand-radius-lg)'
                }}
              >
                <DollarSign className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm opacity-90 mb-1">Amount Paid</p>
                <p className="text-3xl font-black">{amount}</p>
              </Card>
            )}

            {trackingNumber && (
              <Card 
                className="p-6"
                style={{ 
                  borderRadius: 'var(--brand-radius-md)',
                  backgroundColor: 'var(--brand-bg-primary)',
                  boxShadow: 'var(--brand-shadow-md)'
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6" style={{ color: 'var(--brand-primary)' }} />
                  <p className="font-bold">Tracking Number</p>
                </div>
                <p className="font-mono text-lg font-bold">{trackingNumber}</p>
              </Card>
            )}

            {date && (
              <Card 
                className="p-6"
                style={{ 
                  borderRadius: 'var(--brand-radius-md)',
                  backgroundColor: 'var(--brand-bg-primary)',
                  boxShadow: 'var(--brand-shadow-md)'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5" style={{ color: 'var(--brand-secondary)' }} />
                  <p className="font-bold text-sm">Transaction Date</p>
                </div>
                <p className="text-sm" style={{ color: 'var(--brand-text-secondary)' }}>{date}</p>
              </Card>
            )}

            <Card 
              className="p-6"
              style={{ 
                backgroundColor: 'var(--brand-bg-tertiary)',
                borderRadius: 'var(--brand-radius-lg)'
              }}
            >
              <div className="space-y-3">
                <button 
                  className="w-full p-3 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: 'var(--brand-bg-primary)',
                    borderRadius: 'var(--brand-radius-md)',
                    boxShadow: 'var(--brand-shadow-sm)'
                  }}
                >
                  <Download className="w-5 h-5" style={{ color: 'var(--brand-primary)' }} />
                  <span className="font-bold">Download Receipt</span>
                </button>
                <button 
                  className="w-full p-3 rounded-lg shadow hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: 'var(--brand-bg-primary)',
                    borderRadius: 'var(--brand-radius-md)',
                    boxShadow: 'var(--brand-shadow-sm)'
                  }}
                >
                  <Mail className="w-5 h-5" style={{ color: 'var(--brand-secondary)' }} />
                  <span className="font-bold">Email Copy</span>
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SMSAReceipt: React.FC<ReceiptLayoutProps> = ({
  children,
  trackingNumber,
  amount,
  date
}) => {
  const branding = getBrandingByCompany('smsa');
  
  return (
    <div 
      className="min-h-screen"
      style={{ background: 'linear-gradient(to bottom right, var(--brand-surface), var(--brand-bg-secondary))' }}
      dir="rtl"
    >
      <div 
        className="h-48 flex items-center justify-center"
        style={{ background: 'var(--brand-gradient-primary)' }}
      >
        <div className="text-center text-white">
          <div 
            className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center success-checkmark shadow-2xl"
            style={{ borderRadius: 'var(--brand-radius-full)' }}
          >
            <CheckCircle2 className="w-16 h-16" style={{ color: 'var(--brand-success)' }} />
          </div>
          <h1 className="text-4xl font-black mb-2">تم بنجاح!</h1>
          <p className="text-lg opacity-95">SMSA Express - Payment Confirmed</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 pb-12">
        <Card 
          className="max-w-3xl mx-auto p-10 shadow-2xl"
          style={{ 
            borderRadius: 'var(--brand-radius-xl)',
            boxShadow: 'var(--brand-shadow-2xl)',
            backgroundColor: 'var(--brand-bg-primary)'
          }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--brand-gradient-primary)' }}
              >
                <Package className="w-8 h-8" style={{ color: 'var(--brand-text-on-primary)' }} />
              </div>
              <div>
                <h2 className="text-2xl font-black" style={{ color: 'var(--brand-text-primary)' }}>SMSA EXPRESS</h2>
                <p style={{ color: 'var(--brand-text-muted)' }}>إيصال الدفع - Payment Receipt</p>
              </div>
            </div>
            <Badge 
              className="px-4 py-2"
              style={{ 
                backgroundColor: 'var(--brand-primary)',
                color: 'var(--brand-text-on-primary)',
                borderRadius: 'var(--brand-radius-md)'
              }}
            >
              <CheckCircle2 className="w-4 h-4 ml-1" />
              مؤكد
            </Badge>
          </div>

          {children}

          {(trackingNumber || amount) && (
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {trackingNumber && (
                <Card 
                  className="p-6"
                  style={{ 
                    backgroundColor: 'var(--brand-bg-tertiary)',
                    borderRadius: 'var(--brand-radius-lg)'
                  }}
                >
                  <p className="text-sm" style={{ color: 'var(--brand-text-muted)' }}>رقم التتبع</p>
                  <p className="font-mono text-xl font-bold">{trackingNumber}</p>
                </Card>
              )}

              {amount && (
                <Card 
                  className="p-6 text-white"
                  style={{ 
                    background: 'var(--brand-gradient-secondary)',
                    borderRadius: 'var(--brand-radius-lg)'
                  }}
                >
                  <p className="text-sm opacity-90 mb-2">المبلغ المدفوع</p>
                  <p className="text-2xl font-black">{amount}</p>
                </Card>
              )}
            </div>
          )}

          <div className="mt-8 pt-6 border-t flex gap-3" style={{ borderColor: 'var(--brand-border)' }}>
            <button 
              className="flex-1 p-4 rounded-xl text-white font-bold hover:shadow-xl transition-all payment-button"
              style={{ 
                background: 'var(--brand-gradient-primary)',
                borderRadius: 'var(--brand-radius-lg)'
              }}
            >
              <Download className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">تحميل الإيصال</span>
            </button>
            <button 
              className="flex-1 p-4 rounded-xl border-2 font-bold hover:shadow-lg transition-all"
              style={{ 
                borderColor: 'var(--brand-primary)',
                color: 'var(--brand-primary)',
                borderRadius: 'var(--brand-radius-lg)'
              }}
            >
              <Share2 className="w-5 h-5 mx-auto mb-1" />
              <span className="text-sm">مشاركة</span>
            </button>
          </div>
        </Card>

        <div 
          className="max-w-3xl mx-auto mt-6 p-6 rounded-lg shadow text-center"
          style={{ 
            backgroundColor: 'var(--brand-bg-primary)',
            borderRadius: 'var(--brand-radius-lg)',
            boxShadow: 'var(--brand-shadow-md)'
          }}
        >
          <p className="text-sm mb-2" style={{ color: 'var(--brand-text-secondary)' }}>
            شكراً لاستخدامك SMSA Express - أكبر شركة شحن في المملكة
          </p>
          <p className="text-xs" style={{ color: 'var(--brand-text-muted)' }}>
            ISO 9001:2015 Certified • 50M+ Shipments in 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export const NAQELReceipt: React.FC<ReceiptLayoutProps> = ({
  children,
  trackingNumber,
  amount,
  date
}) => {
  const branding = getBrandingByCompany('naqel');
  
  return (
    <div className="min-h-screen" dir="rtl" style={{ backgroundColor: branding?.colors.background || '#F9FAFB' }}>
      <div 
        className="h-44"
        style={{ background: branding?.gradients.primary }}
      >
        <div className="container mx-auto h-full flex flex-col items-center justify-center text-white">
          <div className="w-28 h-28 mb-4 bg-white rounded-full flex items-center justify-center success-checkmark shadow-2xl">
            <CheckCircle2 className="w-20 h-20 text-green-600" />
          </div>
          <h1 className="text-4xl font-black mb-2">عملية ناجحة!</h1>
          <div className="flex items-center gap-3">
            <Badge className="bg-yellow-400 text-yellow-900 px-3 py-1">
              <span className="font-bold">#1 في السعودية</span>
            </Badge>
            <p className="text-sm opacity-90">NAQEL Express Payment</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-12">
        <Card className="max-w-3xl mx-auto p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-2">ناقل إكسبرس</h2>
            <p className="text-gray-600">NAQEL EXPRESS - Transaction Receipt</p>
          </div>

          {children}

          <div className="grid grid-cols-2 gap-4 mt-8">
            {trackingNumber && (
              <Card className="p-6 text-center" style={{ backgroundColor: `${branding?.colors.primary}10` }}>
                <Hash className="w-6 h-6 mx-auto mb-2" style={{ color: branding?.colors.primary }} />
                <p className="text-xs text-gray-600 mb-1">رقم التتبع</p>
                <p className="font-mono font-bold text-lg">{trackingNumber}</p>
              </Card>
            )}

            {amount && (
              <Card 
                className="p-6 text-center text-white"
                style={{ background: branding?.gradients.secondary }}
              >
                <DollarSign className="w-6 h-6 mx-auto mb-2" />
                <p className="text-xs opacity-90 mb-1">المبلغ</p>
                <p className="font-bold text-xl">{amount}</p>
              </Card>
            )}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-1">ناقل إكسبرس - #1 في الجودة</h3>
                <p className="text-sm text-gray-700">
                  أكثر من 50 مليون شحنة تم توصيلها بنجاح • تقييم 5 نجوم من هيئة النقل
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const getReceiptLayout = (companyKey: string) => {
  const key = companyKey.toLowerCase();
  
  switch (key) {
    case 'aramex':
      return AramexReceipt;
    case 'dhl':
    case 'dhlkw':
    case 'dhlqa':
    case 'dhlom':
    case 'dhlbh':
      return DHLReceipt;
    case 'fedex':
      return FedExReceipt;
    case 'smsa':
      return SMSAReceipt;
    case 'naqel':
      return NAQELReceipt;
    default:
      return AramexReceipt;
  }
};

export default {
  AramexReceipt,
  DHLReceipt,
  FedExReceipt,
  SMSAReceipt,
  NAQELReceipt,
  getReceiptLayout
};
