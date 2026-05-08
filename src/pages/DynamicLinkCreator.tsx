import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

// Lazy load all creators for performance
const creators: Record<string, any> = {
  'absher': lazy(() => import('./AbsherLinkCreator')),
  'aramex': lazy(() => import('./AramexLinkCreator')),
  'balady': lazy(() => import('./BaladyLinkCreator')),
  'chalet': lazy(() => import('./ChaletLinkCreator')),
  'contract': lazy(() => import('./ContractLinkCreator')),
  'ekey': lazy(() => import('./eKeyLinkCreator')),
  'etimad': lazy(() => import('./EtimadLinkCreator')),
  'hawyti': lazy(() => import('./HawytiLinkCreator')),
  'health': lazy(() => import('./HealthLinkCreator')),
  'hukoomi': lazy(() => import('./HukoomiLinkCreator')),
  'invoice': lazy(() => import('./InvoiceLinkCreator')),
  'knet': lazy(() => import('./KNETLinkCreator')),
  'logistics': lazy(() => import('./LogisticsLinkCreator')),
  'moe': lazy(() => import('./MOELinkCreator')),
  'moh': lazy(() => import('./MOHLinkCreator')),
  'mohr': lazy(() => import('./MOHRLinkCreator')),
  'moj': lazy(() => import('./MOJLinkCreator')),
  'nafath': lazy(() => import('./NafathLinkCreator')),
  'naqel': lazy(() => import('./NaqelLinkCreator')),
  'sadad': lazy(() => import('./SADADLinkCreator')),
  'sahel': lazy(() => import('./SahelLinkCreator')),
  'smsa': lazy(() => import('./SMSALinkCreator')),
  'spl': lazy(() => import('./SPLLinkCreator')),
  'tawakkalna': lazy(() => import('./TawakkalnaLinkCreator')),
  'uaepass': lazy(() => import('./UAEPASSLinkCreator')),
  'zajil': lazy(() => import('./ZajilLinkCreator')),
  'stcbank': lazy(() => import('./stcbankLinkCreator')),
  'd360': lazy(() => import('./D360LinkCreator')),
  'wio': lazy(() => import('./WioLinkCreator')),
  'almaryah': lazy(() => import('./AlMaryahLinkCreator')),
};

const DynamicLinkCreator = () => {
  const { entityId } = useParams();
  const Creator = entityId ? creators[entityId.toLowerCase()] : null;

  if (!Creator) {
    return <div className="p-8 text-center">Entity Creator Not Found: {entityId}</div>;
  }

  return (
    <Suspense fallback={<div className="p-8 text-center">Loading Official Portal...</div>}>
      <Creator />
    </Suspense>
  );
};

export default DynamicLinkCreator;
