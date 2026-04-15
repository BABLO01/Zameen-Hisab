# 🌱 Zameen Hisab v3.0 — زمین حساب

## پاکستانی کاشتکاروں کے لیے ذہین فارم مینجمنٹ PWA ایپ

> Intelligent Farm Management Progressive Web App for Pakistani Farmers

---

## 📱 فیچرز / Features

- 🌾 **فصل حساب** — 6 فصلوں کا مکمل حساب (گندم، چاول، کپاس، مکئی، گنا، سرسوں)
- 💰 **اخراجات ٹریکر** — تمام اخراجات ریکارڈ، خالص منافع خودکار
- 👨‍🌾 **فارمر گائیڈ لائن** — 15 ماہرانہ ہدایات
- 🧑‍💼 **زمیندار گائیڈ لائن** — 15 زمین مینجمنٹ ہدایات
- 🎨 **دو تھیمز** — Dark Green Glass + White Liquid Glass
- 🌐 **اردو + انگریزی** — دونوں زبانوں میں
- 📱 **آف لائن** — بغیر انٹرنیٹ کام کرتی ہے
- 💾 **ڈیٹا محفوظ** — سب کچھ فون میں save ہوتا ہے

---

## 📂 فائل ڈھانچہ / File Structure

```
zameen-hisab/
├── index.html          ← Main app file
├── manifest.json       ← PWA manifest
├── sw.js               ← Service Worker (offline support)
└── icons/
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-128.png
    ├── icon-144.png
    ├── icon-152.png
    ├── icon-192.png     ← Used on Android home screen
    ├── icon-384.png
    ├── icon-512.png     ← Used for splash screen
    └── screenshot1.png  ← App store screenshot
```

---

## 🚀 GitHub پر Deploy کریں / Deploy on GitHub

### Step 1: GitHub Account بنائیں
1. [github.com](https://github.com) پر جائیں
2. Sign Up کریں

### Step 2: New Repository بنائیں
1. **"New Repository"** پر کلک کریں
2. نام دیں: `zameen-hisab`
3. **Public** رکھیں
4. **"Add README"** ✓ check کریں
5. **"Create repository"** پر کلک کریں

### Step 3: فائلیں Upload کریں
1. **"Add file → Upload files"** پر کلک کریں
2. یہ سب فائلیں upload کریں:
   - `index.html` (نام بدل کر index.html رکھیں)
   - `manifest.json`
   - `sw.js`
   - `icons/` فولڈر کی تمام فائلیں

### Step 4: GitHub Pages Enable کریں
1. Repository Settings میں جائیں
2. **Pages** section تلاش کریں
3. **Source:** "Deploy from a branch"
4. **Branch:** `main` → `/root`
5. **Save** کریں
6. چند منٹ بعد آپ کی ایپ live ہو گی!
   URL: `https://[username].github.io/zameen-hisab`

### Step 5: PWA Install کریں
1. Chrome میں ایپ کا URL کھولیں
2. Address bar میں **install icon** نظر آئے گا
3. یا menu سے **"Add to Home Screen"** کریں
4. ایپ آپ کے فون پر install ہو جائے گی!

---

## 🔧 PWABuilder سے APK بنائیں

1. [pwabuilder.com](https://pwabuilder.com) پر جائیں
2. اپنی GitHub Pages URL داخل کریں
3. **"Start"** کریں
4. **Android** → **"Download Package"**
5. APK file ملے گی جو آپ directly install کر سکتے ہیں

---

## 👨‍💻 Developer

**Muhammad Usman**
Zameen Hisab v3.0 — Liquid Glass Edition

---

*یہ ایپ پاکستانی کاشتکاروں کی مدد کے لیے بنائی گئی ہے۔*
*Built to help Pakistani farmers manage their land and crops better.*
