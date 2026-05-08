
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useSupabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const ContractLinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: 'card',
      entityId: 'contract'
    });
  };

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center bg-[#F4F7F9]" style={{ fontFamily: 'Cairo, sans-serif' }}>
      <Card className="w-full max-w-lg shadow-2xl border-0 overflow-hidden">
        <div className="h-2 bg-[#2C3E50]"></div>
        <div className="p-8 space-y-8 bg-white">
          <div className="flex flex-col items-center space-y-4">
            <img src={`/assets/logos/contract.svg`} alt="Contract" className="h-20 object-contain" />
            <h1 className="text-2xl font-black text-slate-800 text-center">العقود والاتفاقيات</h1>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">المبلغ المطلوب</label>
              <Input 
                placeholder="0.00" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                className="h-14 border-2 border-slate-100 rounded-none text-xl focus:border-[#2C3E50] transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">وصف الخدمة</label>
              <Input 
                placeholder="ادخل الوصف هنا" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                className="h-14 border-2 border-slate-100 rounded-none focus:border-[#2C3E50] transition-colors"
              />
            </div>

            <Button 
              onClick={handleCreate} 
              disabled={loading}
              className="w-full h-16 text-xl font-black rounded-none shadow-lg transform transition-transform active:scale-95"
              style={{ backgroundColor: '#2C3E50', color: '#fff' }}
            >
              {loading ? 'جاري الإصدار...' : 'إصدار رابط دفع آمن'}
            </Button>

            {generatedLink && (
              <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#2C3E50] space-y-4 animate-in fade-in">
                <p className="font-bold text-slate-700">الرابط المولد:</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white p-3 border text-xs break-all font-mono">
                    {generatedLink}
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => navigator.clipboard.writeText(generatedLink)}
                    className="border-2 border-[#2C3E50] text-[#2C3E50] font-bold"
                  >
                    نسخ
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <div className="pt-6 border-t border-slate-50 flex justify-between items-center text-[10px] text-slate-400">
            <span>نظام سداد الخليجي الموحد</span>
            <span>حماية البيانات العالمية</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContractLinkCreator;
