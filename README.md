# The Loop by 5 — Walk Smart Tours Website

**React / TypeScript Website for PGDM Group 5**
Built for the Corporate Communication module at ACETEK College, Singapore.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm 9+ installed

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          ← Main navigation + mobile menu
│   ├── Footer.tsx          ← Footer with links
│   ├── TourCard.tsx        ← Tour card with "See More" button
│   ├── TeamCard.tsx        ← Team member card
│   ├── AchievementCard.tsx ← Achievement stat card
│   ├── SectionTitle.tsx    ← Reusable heading block
│   └── GalleryGrid.tsx     ← Photo gallery grid
├── data/
│   ├── tours.ts            ← All tour data (edit here)
│   ├── teamMembers.ts      ← Team member data (edit here)
│   └── achievements.ts     ← Achievement data (edit here)
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── TeamPage.tsx
│   ├── ToursPage.tsx
│   ├── TourDetailsPage.tsx ← Dynamic route /tours/:tourSlug
│   ├── GalleryPage.tsx
│   ├── NewsletterPage.tsx
│   ├── AchievementsPage.tsx
│   └── FuturePage.tsx
├── styles/
│   ├── global.css
│   └── responsive.css
├── App.tsx                 ← Router setup
└── main.tsx                ← Entry point
```

---

## 🌐 Routes

| URL                           | Page                  |
|-------------------------------|-----------------------|
| `/`                           | Home                  |
| `/about`                      | About / Brand Story   |
| `/team`                       | Team Members          |
| `/tours`                      | All Tours             |
| `/tours/:tourSlug`            | Tour Details (dynamic)|
| `/gallery`                    | Photo Gallery         |
| `/newsletter`                 | Newsletter            |
| `/achievements`               | Achievements          |
| `/future`                     | Future Goals          |

**Example tour URLs:**
- `/tours/haji-lane-the-lane-edit`
- `/tours/gardens-by-the-bay-marina-bay`
- `/tours/kampong-glam-cultural-heritage`
- `/tours/sustainability-retail-walk`
- `/tours/technology-innovation-circuit`

---

## 🎨 Brand Colours

| Name         | Hex       | Usage                              |
|--------------|-----------|------------------------------------|
| Dark Brown   | `#320000` | Navbar, footer, headings, buttons  |
| Warm Brown   | `#543004` | Secondary backgrounds, hover       |
| White        | `#FFFFFF` | Text on dark, clean areas          |
| Light Beige  | `#F5EFE6` | Section backgrounds, card surfaces |
| Gold Accent  | `#C89B5A` | Highlights, icons, dividers        |

---

## 🖼️ Adding Images

Place images in the `public/media/images/` folder:

```
public/
└── media/
    └── images/
        ├── team/
        │   ├── shin-thant-aung.jpg
        │   ├── su-sandy-myint.jpg
        │   ├── aung-min-thant.jpg
        │   ├── shweta-suryawanshi.jpg
        │   └── sathya-subhavi-ravindra.jpg
        ├── tours/
        │   ├── haji-lane.jpg
        │   ├── gardens-bay.jpg
        │   ├── kampong-glam.jpg
        │   ├── sustainability-retail.jpg
        │   └── technology-innovation.jpg
        └── gallery/
            ├── haji-lane-01.jpg
            └── ... (see GalleryPage.tsx for full list)
```

All images gracefully fall back to placeholders if not found.

---

## 📰 Adding the Newsletter PDF

Place the newsletter file at:
```
public/media/documents/newsletter.pdf
```

---

## ✏️ Updating Content

- **Tours**: Edit `src/data/tours.ts`
- **Team members**: Edit `src/data/teamMembers.ts`
- **Achievements**: Edit `src/data/achievements.ts`

---

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel
3. `vercel.json` is already configured for SPA routing

---

## 👥 Team

| Name                     | Country    | Focus Area           |
|--------------------------|------------|----------------------|
| Shin Thant Aung          | Myanmar 🇲🇲 | Technology           |
| Su Sandy Myint           | Myanmar 🇲🇲 | Technology           |
| Aung Min Thant           | Myanmar 🇲🇲 | Sustainability & Retail |
| Shweta Suryawanshi       | India 🇮🇳   | Architecture         |
| Sathya Subhavi Ravindra  | Sri Lanka 🇱🇰 | Art & Culture      |

**PGDM Group 5 · Corporate Communication · ACETEK College · May 2026**
**Lecturer: Mr. Seow**
