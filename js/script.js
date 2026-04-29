// =====================
// TRANSLATIONS
// =====================
const T = {
  en: {
    'nav-home':    '[0] Home',
    'nav-about':   '[1] About',
    'nav-services':'[2] Services',
    'nav-projects':'[3] Projects',
    'nav-contact': '[4] Contact',

    'hero-slogan': 'We Build. We Fix. You Play.',
    'hero-status': 'System Ready.',
    'btn-services':'[ View Services ]',
    'btn-contact': '[ Contact Us ]',

    'about-card1-title': 'Who We Are',
    'about-card1-text':  'CoreMod is a tech brand built around repairing and building computers — hardware and software. Not a faceless shop. A trusted creator who educates while we fix.',
    'about-card2-title': 'Our Mission',
    'about-card2-text':  'Make quality PC service accessible and affordable for Thai students, gamers, and small business owners. No overpricing. No confusion. Just honest tech help.',
    'about-card3-title': 'Our Values',
    'about-card3-text':  "Education first. Transparency always. We explain what's wrong, why it happened, and how to prevent it — confident customers are better customers.",
    'stat-label-1': 'Starting Price',
    'stat-label-2': 'Service Types',
    'stat-label-3': 'Remote Capable',

    'svc1-title': 'PC Repair & Diagnostics',
    'svc1-desc':  'Hardware troubleshooting, dust cleaning, thermal paste, power/boot fixes, Windows reinstall, driver setup, BIOS config.',
    'svc1-li1': '▸ Initial check — 100฿',
    'svc1-li2': '▸ Cleaning + thermal paste — 300–400฿',
    'svc1-li3': '▸ Hardware repair — 300฿',
    'svc1-li4': '▸ Windows reinstall — 300–500฿',

    'svc2-title': 'Custom PC Building',
    'svc2-desc':  'Budget gaming builds, second-hand builds, student and office bundles. Personalized to your needs and budget.',
    'svc2-li1': '▸ Budget gaming builds',
    'svc2-li2': '▸ 2nd-hand part sourcing',
    'svc2-li3': '▸ Student / office setups',
    'svc2-li4': '▸ Personalized builds',

    'svc3-title': 'Remote Tech Support',
    'svc3-desc':  'Online help via AnyDesk. Windows optimization, virus removal, lag fixes, software installs, game settings tuning.',
    'svc3-li1': '▸ PC cleanup / speedup — 100–300฿',
    'svc3-li2': '▸ Virus removal — 300฿',
    'svc3-li3': '▸ Software install — 300฿',
    'svc3-li4': '▸ Game optimization',

    'svc4-title': 'Upgrades & Storage',
    'svc4-desc':  'RAM, SSD, HDD, CPU, GPU upgrades. Data recovery for lost files.',
    'svc4-li1': '▸ RAM / SSD / HDD upgrade — 300฿',
    'svc4-li2': '▸ CPU / GPU swap — 300฿',
    'svc4-li3': '▸ Data recovery — 500฿',

    'svc5-title': 'DIY Guide Packs',
    'svc5-desc':  'Digital PDF + video guides. Build a PC under 5000฿, speed up your PC, how to choose safe 2nd-hand parts.',
    'svc5-li1': '▸ PDF + video format',
    'svc5-li2': '▸ Budget build guides',
    'svc5-li3': '▸ Safety checklists',
    'svc5-li4': '▸ Digital delivery',

    'price-from':    'FROM',
    'price-consult': 'CONSULT',
    'price-free':    'FREE',
    'price-label':   'PRICE',

    'proj1-name': 'CoreMod Website v1',
    'proj1-desc': 'Terminal-themed brand hub — this site.',
    'proj2-name': 'Budget Build Guide Pack',
    'proj2-desc': 'PDF + video guide for PC build under 5000฿.',
    'proj3-name': 'Repair Tracker Portal',
    'proj3-desc': 'Track your repair progress online. Coming soon.',
    'proj4-name': '2nd-Hand Parts Marketplace',
    'proj4-desc': 'Curated secondhand PC parts dropshipping.',
    'proj5-name': 'More incoming...',
    'proj5-desc': 'System expanding.',

    'contact-heading': '// Reach Us',
    'contact-status':  '[AVAILABLE] — Response within 24h',
    'contact-region':  'Thailand',

    'form-name-label':    '// Your Name',
    'form-email-label':   '// Your Email',
    'form-service-label': '// Service Needed',
    'form-msg-label':     '// Message',
    'form-name-ph':    'Enter name...',
    'form-email-ph':   'Enter email...',
    'form-msg-ph':     'Describe your issue or request...',
    'form-submit': '[ Send Message ]',
    'form-opt-0': '-- Select service --',
    'form-opt-1': 'PC Repair & Diagnostics',
    'form-opt-2': 'Custom PC Build',
    'form-opt-3': 'Remote Tech Support',
    'form-opt-4': 'Upgrades & Storage',
    'form-opt-5': 'DIY Guide Pack',
    'form-opt-6': 'Other',

    'footer-slogan': 'We Build. We Fix. You Play.',
    'footer-copy':   '© 2025 CoreMod — System Ready.',
  },

  th: {
    'nav-home':    '[0] หน้าหลัก',
    'nav-about':   '[1] เกี่ยวกับ',
    'nav-services':'[2] บริการ',
    'nav-projects':'[3] โปรเจกต์',
    'nav-contact': '[4] ติดต่อ',

    'hero-slogan': 'เราสร้าง เราซ่อม คุณเล่น',
    'hero-status': 'ระบบพร้อม',
    'btn-services':'[ ดูบริการ ]',
    'btn-contact': '[ ติดต่อเรา ]',

    'about-card1-title': 'เราคือใคร',
    'about-card1-text':  'CoreMod คือแบรนด์เทคโนโลยีที่เน้นการซ่อมและสร้างคอมพิวเตอร์ ทั้งฮาร์ดแวร์และซอฟต์แวร์ ไม่ใช่ร้านไม่มีชื่อ แต่เป็นผู้สร้างที่ไว้ใจได้ที่ให้ความรู้ขณะซ่อม',
    'about-card2-title': 'พันธกิจของเรา',
    'about-card2-text':  'ทำให้บริการพีซีคุณภาพดีเข้าถึงได้ในราคาไม่แพง สำหรับนักเรียน เกมเมอร์ และเจ้าของธุรกิจขนาดเล็กในไทย ไม่โก่งราคา ไม่สับสน แค่ความช่วยเหลือด้านเทคโนโลยีที่ซื่อสัตย์',
    'about-card3-title': 'คุณค่าของเรา',
    'about-card3-text':  'การศึกษาก่อนเสมอ ความโปร่งใสตลอดเวลา เราอธิบายสิ่งที่ผิดพลาด สาเหตุ และวิธีป้องกัน เพราะลูกค้าที่มั่นใจคือลูกค้าที่ดีกว่า',
    'stat-label-1': 'ราคาเริ่มต้น',
    'stat-label-2': 'ประเภทบริการ',
    'stat-label-3': 'รองรับระยะไกล',

    'svc1-title': 'ซ่อมและตรวจสอบพีซี',
    'svc1-desc':  'แก้ไขปัญหาฮาร์ดแวร์ ทำความสะอาดฝุ่น เปลี่ยนซิลิโคน ซ่อมปัญหาไฟและการบูต ลง Windows ไดรเวอร์ ตั้งค่า BIOS',
    'svc1-li1': '▸ ตรวจเช็คเบื้องต้น — 100฿',
    'svc1-li2': '▸ ทำความสะอาด + เปลี่ยนซิลิโคน — 300–400฿',
    'svc1-li3': '▸ ซ่อมฮาร์ดแวร์ — 300฿',
    'svc1-li4': '▸ ลง Windows ใหม่ — 300–500฿',

    'svc2-title': 'สร้างพีซีตามสั่ง',
    'svc2-desc':  'สร้างพีซีเกมมิ่งราคาประหยัด พีซีมือสอง แพ็กสำหรับนักเรียน/สำนักงาน ปรับแต่งตามความต้องการและงบประมาณ',
    'svc2-li1': '▸ สร้างพีซีเกมมิ่งงบประหยัด',
    'svc2-li2': '▸ หาอะไหล่มือสอง',
    'svc2-li3': '▸ แพ็กนักเรียน / สำนักงาน',
    'svc2-li4': '▸ สร้างตามสเปคที่ต้องการ',

    'svc3-title': 'ซัพพอร์ตระยะไกล',
    'svc3-desc':  'ช่วยเหลือออนไลน์ผ่าน AnyDesk ปรับปรุง Windows ลบไวรัส แก้ปัญหาหน่วง ติดตั้งซอฟต์แวร์ ตั้งค่าเกม',
    'svc3-li1': '▸ ทำความสะอาด / เร่งพีซี — 100–300฿',
    'svc3-li2': '▸ ลบไวรัส — 300฿',
    'svc3-li3': '▸ ติดตั้งซอฟต์แวร์ — 300฿',
    'svc3-li4': '▸ ตั้งค่าเกม',

    'svc4-title': 'อัปเกรดและจัดเก็บข้อมูล',
    'svc4-desc':  'อัปเกรด RAM SSD HDD CPU GPU กู้คืนข้อมูลที่สูญหาย',
    'svc4-li1': '▸ อัปเกรด RAM / SSD / HDD — 300฿',
    'svc4-li2': '▸ เปลี่ยน CPU / GPU — 300฿',
    'svc4-li3': '▸ กู้คืนข้อมูล — 500฿',

    'svc5-title': 'แพ็กคู่มือ DIY',
    'svc5-desc':  'คู่มือ PDF + วิดีโอ สร้างพีซีใต้ 5000฿ เร่งความเร็วพีซี วิธีเลือกอะไหล่มือสองอย่างปลอดภัย',
    'svc5-li1': '▸ ฟอร์แมต PDF + วิดีโอ',
    'svc5-li2': '▸ คู่มือสร้างพีซีงบประหยัด',
    'svc5-li3': '▸ เช็คลิสต์ความปลอดภัย',
    'svc5-li4': '▸ ส่งดิจิทัล',

    'price-from':    'เริ่มต้น',
    'price-consult': 'ปรึกษา',
    'price-free':    'ฟรี',
    'price-label':   'ราคา',

    'proj1-name': 'เว็บไซต์ CoreMod v1',
    'proj1-desc': 'เว็บแบรนด์สไตล์เทอร์มินัล — เว็บนี้',
    'proj2-name': 'แพ็กคู่มือสร้างพีซีงบประหยัด',
    'proj2-desc': 'คู่มือ PDF + วิดีโอสำหรับสร้างพีซีใต้ 5000฿',
    'proj3-name': 'พอร์ทัลติดตามการซ่อม',
    'proj3-desc': 'ติดตามความคืบหน้าการซ่อมออนไลน์ เร็วๆ นี้',
    'proj4-name': 'ตลาดอะไหล่มือสอง',
    'proj4-desc': 'ดรอปชิปอะไหล่พีซีมือสองที่คัดสรรแล้ว',
    'proj5-name': 'เพิ่มเติมเร็วๆ นี้...',
    'proj5-desc': 'ระบบกำลังขยาย',

    'contact-heading': '// ติดต่อเรา',
    'contact-status':  '[พร้อมให้บริการ] — ตอบกลับภายใน 24 ชั่วโมง',
    'contact-region':  'ประเทศไทย',

    'form-name-label':    '// ชื่อของคุณ',
    'form-email-label':   '// อีเมลของคุณ',
    'form-service-label': '// บริการที่ต้องการ',
    'form-msg-label':     '// ข้อความ',
    'form-name-ph':    'กรอกชื่อ...',
    'form-email-ph':   'กรอกอีเมล...',
    'form-msg-ph':     'อธิบายปัญหาหรือสิ่งที่ต้องการ...',
    'form-submit': '[ ส่งข้อความ ]',
    'form-opt-0': '-- เลือกบริการ --',
    'form-opt-1': 'ซ่อมและตรวจสอบพีซี',
    'form-opt-2': 'สร้างพีซีตามสั่ง',
    'form-opt-3': 'ซัพพอร์ตระยะไกล',
    'form-opt-4': 'อัปเกรดและจัดเก็บข้อมูล',
    'form-opt-5': 'แพ็กคู่มือ DIY',
    'form-opt-6': 'อื่นๆ',

    'footer-slogan': 'เราสร้าง เราซ่อม คุณเล่น',
    'footer-copy':   '© 2025 CoreMod — ระบบพร้อม',
  },
};

// =====================
// LANGUAGE SYSTEM
// =====================
let currentLang = localStorage.getItem('coremod-lang') || 'en';

function applyLang(lang) {
  const dict = T[lang];

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Lang toggle button label (shows opposite language)
  document.getElementById('langBtn').textContent = lang === 'en' ? 'TH' : 'EN';

  document.documentElement.lang = lang;
  localStorage.setItem('coremod-lang', lang);
  currentLang = lang;
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'th' : 'en');
}

// =====================
// TERMINAL BOOT
// =====================
const BOOT_LINES = [
  '$ coremod --init',
  '> Booting CoreMod v1.0...',
  '> Loading service modules... [OK]',
  '> Remote support online....  [OK]',
  '> System Ready. Welcome.',
];

let lineIdx = 0;
let charIdx = 0;
const LINE_IDS = ['t1', 't2', 't3', 't4'];

function typeNext() {
  if (lineIdx >= LINE_IDS.length) return;
  const el = document.getElementById(LINE_IDS[lineIdx]);
  if (!el) return;
  const line = BOOT_LINES[lineIdx];
  if (charIdx < line.length) {
    el.textContent += line[charIdx];
    charIdx++;
    setTimeout(typeNext, 32);
  } else {
    lineIdx++;
    charIdx = 0;
    setTimeout(typeNext, 180);
  }
}

// =====================
// NAV
// =====================
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

const sections = document.querySelectorAll('section[id]');

function updateNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 90) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// =====================
// SCROLL TO TOP
// =====================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  updateNav();
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
}, { passive: true });

// =====================
// FADE-IN
// =====================
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// =====================
// CONTACT FORM
// =====================
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const origText = submitBtn.textContent;
  submitBtn.textContent = currentLang === 'th' ? '[ กำลังส่ง... ]' : '[ Sending... ]';
  submitBtn.disabled = true;
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  try {
    const res  = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form),
    });
    const json = await res.json();

    if (json.success) {
      formStatus.textContent = currentLang === 'th'
        ? '> ส่งสำเร็จ เราจะตอบกลับภายใน 24 ชั่วโมง'
        : "> Message sent. We'll reply within 24h.";
      formStatus.classList.add('success');
      form.reset();
    } else {
      throw new Error(json.message || 'Submission failed.');
    }
  } catch (err) {
    formStatus.textContent = currentLang === 'th'
      ? '> เกิดข้อผิดพลาด — ติดต่อผ่าน Line: @059qaouj หรือ Facebook'
      : '> Error — Contact via Line: @059qaouj or Facebook';
    formStatus.classList.add('error');
  }

  submitBtn.textContent = origText;
  submitBtn.disabled = false;
});

// =====================
// INIT
// =====================
window.addEventListener('load', () => {
  applyLang(currentLang);
  setTimeout(typeNext, 400);
  updateNav();
});
