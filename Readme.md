# DigiHub — Nepal's Leading Capital Markets Technology Partner

Live: https://digihub.com.np

## Tech Stack (2025 Elite Setup)

| Category           | Technology                          |
|--------------------|-------------------------------------|
| Framework          | React 18 + TypeScript               |
| Build Tool         | Vite (lightning fast)               |
| Styling            | Tailwind CSS + Headless UI          |
| Routing            | React Router v6.22+                 |
| Animations         | Framer Motion 11+                   |
| Icons              | Lucide React                        |
| Deployment         | Vercel (zero-config)                |
| Code Quality       | ESLint + Prettier + TypeScript      |

## Project Structure
src/
├── app/                  # All pages & routing
│   ├── routes/           # Lazy-loaded page components
│   └── layout/           # Shared layouts (Header, Footer)
│
├── components/           # Reusable UI
│   ├── ui/               # Buttons, Cards, Inputs
│   ├── layout/           # Header, Footer, Floating CTA
│   ├── home/             # Hero, Stats, Marquee
│   └── common/           # Loading, ErrorBoundary
│
├── data/                 # Static content & mock data
├── lib/                  # Utilities (icons, className, etc.)
├── hooks/                # Custom React hooks
├── types/                # Shared TypeScript types
└── styles/               # Global CSS


## Key Features

- Blazing fast hero carousel with manual + auto controls
- Smooth scroll navigation with active state highlight
- Animated counters (50+ brokers, 100K+ traders)
- Floating "Book a Demo button on every page
- Client marquee with hover pause + manual arrows
- Fully responsive (mobile-first)
- Dark/Light mode with persistent preference
- SEO optimized with React Helmet Async
- 100+ Lighthouse score ready

## Pages

| Route         | Component                  | Purpose                             |
|---------------|----------------------------|-------------------------------------|
| `/`           | `home.tsx`                 | Hero + Stats + Clients + CTA        |
| `/about`      | `about.tsx`                | Company story & trust pillars       |
| `/services`   | `services.tsx`             | Service grid                        |
| `/services/:id` | `service-detail.tsx`     | Individual service page             |
| `/portfolio`  | `portfolio.tsx`            | Project showcase                    |
| `/portfolio/:id` | `project-detail.tsx`   | Case study with gallery             |
| `/contact`    | `contact.tsx`              | Form + contact info                 |

## Development

```bash
# Install
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview



