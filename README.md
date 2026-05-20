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
│   └── SectionTitle.tsx    ← Reusable heading block
├── data/
│   ├── tours.ts            ← All tour data (edit here)
│   ├── teamMembers.ts      ← Team member data (edit here)
│   └── achievements.ts     ← Achievement data (edit here)
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── TeamPage.tsx
│   ├── ToursPage.tsx
│   ├── TourDetailsPage.tsx       ← Dynamic route /tours/:tourSlug
│   ├── NewsletterPage.tsx        ← Newsletter hub with download & view buttons
│   ├── NewsletterOnlinePage.tsx  ← Online page-by-page viewer at /newsletter/loop_by_5
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

| URL                           | Page                          |
|-------------------------------|-------------------------------|
| `/`                           | Home                          |
| `/about`                      | About / Brand Story           |
| `/team`                       | Team Members                  |
| `/tours`                      | All Tours                     |
| `/tours/:tourSlug`            | Tour Details (dynamic)        |
| `/newsletter`                 | Newsletter hub                |
| `/newsletter/loop_by_5`       | Online newsletter viewer      |
| `/achievements`               | Achievements                  |
| `/future`                     | Future Goals                  |

**Tour URLs:**
- `/tours/haji-lane-the-lane-edit`
- `/tours/gardens-by-the-bay-marina-bay`
- `/tours/kampong-glam-cultural-heritage`
- `/tours/sustainability-retail-walk`
- `/tours/technology-innovation-circuit`

---

## 🖼️ Tour Images

Tour images are sourced from the presentation slides and newsletter:

| Tour | Image File | Source |
|------|-----------|--------|
| Haji Lane: The Lane Edit | `haji-lane.jpg` | Newsletter cover · Haji Lane street art |
| Gardens by the Bay | `gardens-bay.jpg` | Presentation Slide 7 |
| Marina Bay / Tech Tour | `marina-bay.jpg` | Presentation Slide 7 |
| Kampong Glam | `kampong-glam.jpg` | Presentation Slide 9 |
| Sustainability & Retail | `architecture-city.jpg` | Presentation Slide 8 |

To replace a tour image, drop the new file into:
```
public/media/images/tours/
```
and update the `image` field in `src/data/tours.ts`.

---

## 📰 Newsletter

The newsletter is stored at `public/media/documents/newsletter.pdf`.

The online viewer at `/newsletter/loop_by_5` uses pre-rendered page images from:
```
public/media/images/newsletter/page-01.jpg … page-11.jpg
```

These were generated from the PDF at 150 DPI. If you replace the PDF, re-run:
```bash
pdftoppm -jpeg -r 150 public/media/documents/newsletter.pdf public/media/images/newsletter/page
```

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

## 🖼️ Adding Team Photos

Place photos in:
```
public/media/images/team/
```
Names expected:
- `shin-thant-aung.jpg`
- `su-sandy-myint.jpg`
- `aung-min-thant.jpg`
- `shweta-suryawanshi.jpg`
- `sathya-subhavi-ravindra.jpg`

Until photos are added, initials avatars are shown automatically.

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

**PGDM Group 5 · Corporate Communication · ACETEK College · May 2026 · Lecturer: Mr. Seow**
