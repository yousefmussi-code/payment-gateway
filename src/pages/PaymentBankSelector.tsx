import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { banks, Bank } from '@/lib/banks';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const PaymentBankSelector = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedCountry, setSelectedCountry] = useState('SA');

  const filteredBanks = banks.filter(bank => bank.country === selectedCountry);

  const countries = [
    { code: 'SA', name: 'Saudi Arabia', name_ar: 'السعودية' },
    { code: 'AE', name: 'UAE', name_ar: 'الإمارات' },
    { code: 'KW', name: 'Kuwait', name_ar: 'الكويت' },
    { code: 'QA', name: 'Qatar', name_ar: 'قطر' },
    { code: 'OM', name: 'Oman', name_ar: 'عمان' },
    { code: 'BH', name: 'Bahrain', name_ar: 'البحرين' },
  ];

  const handleBankSelect = (bankId: string) => {
    navigate(`/pay/${id}/bank-login?bank=${bankId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Choose Your Bank
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Select your bank to complete the payment securely
          </p>
        </div>

        <Tabs defaultValue="SA" onValueChange={setSelectedCountry} className="w-full">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-8 h-auto p-1 bg-white border border-slate-200">
            {countries.map(country => (
              <TabsTrigger 
                key={country.code} 
                value={country.code}
                className="py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                {country.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {countries.map(country => (
            <TabsContent key={country.code} value={country.code}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {banks.filter(b => b.country === country.code).map(bank => (
                  <Card 
                    key={bank.id} 
                    className="cursor-pointer hover:border-primary transition-all duration-200 border-2 border-transparent shadow-sm overflow-hidden"
                    onClick={() => handleBankSelect(bank.id)}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-100 flex items-center justify-center p-2 rounded">
                          <img 
                            src={`/assets/logos/banks/${bank.logo}`} 
                            alt={bank.name} 
                            className="max-w-full max-h-full object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48?text=Bank';
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{bank.name_ar}</p>
                          <p className="text-xs text-slate-500">{bank.name}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 p-6 bg-white border border-slate-200 text-center">
          <p className="text-sm text-slate-500">
            Powered by Secure Gateway. Your information is encrypted and never stored.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentBankSelector;
