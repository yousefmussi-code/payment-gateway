import os

logos_dir = '/data/data/com.termux/files/home/workspace/payment-link-app/public/images/brand-logos'
os.makedirs(logos_dir, exist_ok=True)

def create_logo(filename, bg_color, lines):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80">
  <rect width="200" height="80" fill="{bg_color}"/>
'''
    for line in lines:
        svg += f'  {line}\n'
    svg += '</svg>'
    
    path = os.path.join(logos_dir, filename)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    return path

# Shipping Companies
shipping = [
    ('aramex', '#DC291E', ['<text x="100" y="45" font-family="Arial" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle">ARAMEX</text>', '<text x="100" y="65" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">أرامكس</text>']),
    ('dhl', '#FFCC00', ['<rect x="0" y="0" width="50" height="80" fill="#C00A27"/>', '<text x="25" y="48" font-family="Arial" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle">DHL</text>', '<text x="140" y="45" font-family="Arial" font-size="14" fill="#C00A27" text-anchor="middle">express</text>']),
    ('fedex', '#4D148C', ['<text x="100" y="40" font-family="Arial" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">FedEx</text>', '<text x="100" y="60" font-family="Arial" font-size="12" fill="#FF6600" text-anchor="middle">EXPRESS</text>']),
    ('ups', '#351C15', ['<text x="100" y="40" font-family="Arial" font-size="26" font-weight="bold" fill="#FFB500" text-anchor="middle">UPS</text>', '<text x="100" y="62" font-family="Arial" font-size="9" fill="#FFFFFF" text-anchor="middle">United Parcel Service</text>']),
    ('smsa', '#004B87', ['<text x="100" y="35" font-family="Arial" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle">SMSA</text>', '<text x="100" y="55" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">Express</text>', '<rect x="20" y="65" width="160" height="4" fill="#FF6600"/>']),
    ('spl', '#006847', ['<text x="100" y="35" font-family="Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">SPL</text>', '<text x="100" y="55" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">Saudi Post Logistics</text>']),
    ('mylerz', '#00A651', ['<text x="100" y="48" font-family="Arial" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Mylerz</text>']),
    ('najm', '#1E3A5F', ['<text x="100" y="40" font-family="Arial" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">نجم</text>', '<text x="100" y="62" font-family="Arial" font-size="11" fill="#FFD700" text-anchor="middle">NAJM</text>']),
]

# Saudi Banks
saudi_banks = [
    ('alahli', '#006837', ['<text x="100" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">البنك الأهلي</text>', '<text x="100" y="60" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">Al Ahli Bank</text>']),
    ('alrajhi', '#009144', ['<text x="100" y="38" font-family="Arial" font-size="20" font-weight="bold" fill="#FFFFFF" text-anchor="middle">الراجحي</text>', '<text x="100" y="58" font-family="Arial" font-size="13" fill="#FFFFFF" text-anchor="middle">Al Rajhi</text>']),
    ('aljazira', '#00A65A', ['<text x="100" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">بنك الجزيرة</text>', '<text x="100" y="60" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">Al Jazira</text>']),
    ('alinma', '#00A651', ['<text x="100" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">بنك الإنماء</text>', '<text x="100" y="60" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">inma</text>']),
    ('albilad', '#E61E26', ['<text x="100" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">بنك البلاد</text>', '<text x="100" y="60" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">Al Bilad</text>']),
    ('riyad', '#00A86B', ['<text x="100" y="38" font-family="Arial" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">بنك الرياض</text>', '<text x="100" y="58" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">Riyad Bank</text>']),
    ('sabb', '#006B57', ['<text x="100" y="38" font-family="Arial" font-size="12" font-weight="bold" fill="#FFFFFF" text-anchor="middle">البنك السعودي البريطاني</text>', '<text x="100" y="58" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">SABB</text>']),
]

# UAE Banks
uae_banks = [
    ('enbd', '#0066B3', ['<text x="100" y="40" font-family="Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Emirates NBD</text>', '<text x="100" y="60" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">نجمة الإمارات</text>']),
    ('adcb', '#0066A8', ['<text x="100" y="45" font-family="Arial" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Abu Dhabi Commercial Bank</text>']),
    ('adib', '#009900', ['<text x="100" y="40" font-family="Arial" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle">ADIB</text>', '<text x="100" y="60" font-family="Arial" font-size="9" fill="#FFFFFF" text-anchor="middle">Abu Dhabi Islamic Bank</text>']),
    ('fab', '#006B3C', ['<text x="100" y="40" font-family="Arial" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle">FAB</text>', '<text x="100" y="60" font-family="Arial" font-size="9" fill="#FFFFFF" text-anchor="middle">First Abu Dhabi Bank</text>']),
    ('mashreq', '#E30613', ['<text x="100" y="48" font-family="Arial" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">MASHREQ</text>']),
    ('emirates', '#D4AF37', ['<text x="100" y="38" font-family="Arial" font-size="16" font-weight="bold" fill="#000000" text-anchor="middle">Emirates Islamic</text>', '<text x="100" y="58" font-family="Arial" font-size="11" fill="#000000" text-anchor="middle">إمارات الإسلامي</text>']),
]

# Government
government = [
    ('absher', '#006C35', ['<text x="100" y="38" font-family="Arial" font-size="24" font-weight="bold" fill="#FFFFFF" text-anchor="middle">أبشر</text>', '<text x="100" y="60" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">Absher</text>', '<rect x="60" y="66" width="80" height="3" fill="#FFD700"/>']),
    ('sadad', '#006C35', ['<text x="100" y="40" font-family="Arial" font-size="26" font-weight="bold" fill="#FFFFFF" text-anchor="middle">سداد</text>', '<text x="100" y="62" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">SADAD</text>']),
    ('mol', '#006C35', ['<text x="100" y="38" font-family="Arial" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">وزارة الداخلية</text>', '<text x="100" y="58" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">Ministry of Interior</text>']),
    ('moma', '#006C35', ['<text x="100" y="38" font-family="Arial" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">وزارة الخارجية</text>', '<text x="100" y="58" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">Ministry of Foreign Affairs</text>']),
    ('education', '#006C35', ['<text x="100" y="38" font-family="Arial" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">وزارة التعليم</text>', '<text x="100" y="58" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">Ministry of Education</text>']),
    ('health', '#006C35', ['<text x="100" y="38" font-family="Arial" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">وزارة الصحة</text>', '<text x="100" y="58" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">Ministry of Health</text>']),
    ('zakat', '#006C35', ['<text x="100" y="38" font-family="Arial" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">الزكاة والضريبة</text>', '<text x="100" y="60" font-family="Arial" font-size="11" fill="#FFFFFF" text-anchor="middle">ZATCA</text>']),
    ('jawwal', '#006C35', ['<text x="100" y="45" font-family="Arial" font-size="22" font-weight="bold" fill="#FFFFFF" text-anchor="middle">جوول</text>', '<text x="100" y="62" font-family="Arial" font-size="10" fill="#FFFFFF" text-anchor="middle">Jawwal</text>']),
]

# Create all logos
all_groups = [shipping, saudi_banks, uae_banks, government]
total = 0

for group in all_groups:
    for name, color, lines in group:
        path = create_logo(f'{name}.svg', color, lines)
        total += 1

print(f'Created {total} official SVG logos')
print(f'Location: {logos_dir}')

# List created files
import glob
files = sorted(glob.glob(os.path.join(logos_dir, '*.svg')))[:50]
print(f'\nFirst 50 files:')
for f in files:
    print(f'  {os.path.basename(f)}')