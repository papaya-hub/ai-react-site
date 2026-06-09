# CodeLearn - Interactive Coding Platform

A modern, interactive coding education platform built with **Astro**, **React**, **Redux Toolkit (RTK)**, and **Progressive Web App (PWA)** capabilities.

## 🎯 Features

### 🌐 Frontend
- **Astro Framework**: Fast static site generation with island architecture
- **React Integration**: Interactive components with Astro
- **Green Theme**: Beautiful, modern UI with consistent green color palette
- **Responsive Design**: Mobile-first, accessible design patterns
- **SEO Optimized**: Server-side rendering for Google indexing

### 🔐 State Management
- **Redux Toolkit**: Centralized state management for:
  - User authentication & profiles
  - Course enrollment & progress
  - Search functionality

### 📱 PWA Features
- **Service Worker**: Offline functionality and app caching
- **Web Manifest**: Install as standalone app
- **Offline Support**: Continue learning without internet
- **Background Sync**: Sync progress when online
- **Push Notifications**: Course updates and reminders

### 🔍 Searchability
- **SEO Best Practices**: Meta tags, structured data
- **Google Indexing**: All pages discoverable by search engines
- **Real-time Search**: Instant course and lesson search

### 🎓 Core Pages
- **Home**: Hero section with features showcase
- **Courses**: Browse 50+ interactive courses with filters
- **Login**: Secure authentication (ready for OAuth integration)
- **Offline Page**: Graceful offline experience

## 📦 Project Structure

```
src/
├── layouts/
│   └── Layout.astro         # Main page template
├── pages/
│   ├── index.astro          # Home page
│   ├── courses.astro        # Courses listing
│   └── login.astro          # Login page
├── components/
│   ├── Header.tsx           # Main navigation
│   ├── SearchBar.tsx        # Course search
│   ├── CourseCard.tsx       # Course display
│   └── Hero.tsx             # Hero section
├── store/
│   ├── store.ts             # Redux store config
│   └── slices/
│       ├── authSlice.ts     # Auth state
│       ├── coursesSlice.ts  # Courses state
│       └── searchSlice.ts   # Search state
└── styles/
    └── global.css           # Global styles & green theme

public/
├── manifest.json            # PWA manifest
├── sw.js                    # Service Worker
└── offline.html             # Offline page
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:3000` in your browser.

## 🎨 Green Theme Colors

```css
Primary:      #10b981 (Emerald Green)
Primary Dark: #059669
Primary Light:#6ee7b7
Accents:      #d1fae5 (Light green backgrounds)
```

## 📱 PWA Installation

The site is installable as a PWA:
1. Open in a modern browser
2. Click the "Install" button or use browser menu
3. Access offline-first course content
4. Sync progress when back online

## 🔐 Authentication

Currently supports:
- Email/password login form
- Integration points for:
  - Google OAuth
  - GitHub OAuth
  - JWT token management

## 🔎 SEO Features

- ✅ Server-side rendered pages
- ✅ Meta descriptions on all pages
- ✅ Open Graph tags ready
- ✅ Structured data support
- ✅ Fast Core Web Vitals
- ✅ Mobile-optimized

## 🧪 Testing & Deployment

### Test PWA locally
```bash
npm run build
npm run preview
# Install as PWA and test offline
```

### Deploy
The site is ready for deployment to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- GitHub Pages

## 📚 Course Data Structure

Each course includes:
```typescript
{
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  image: string;
  lessons: Lesson[];
  duration: number; // in hours
  rating: number;
  students: number;
}
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Astro 4+ |
| UI Library | React 18+ |
| State Management | Redux Toolkit 1.9+ |
| Language | TypeScript 5+ |
| Styling | CSS 3 (Custom theme) |
| PWA | Workbox, Service Workers |
| Icons | Unicode Emoji (scalable) |

## 📖 Learning Resources

The platform includes comprehensive coverage of:
- React fundamentals & advanced patterns
- JavaScript ES6+ features
- TypeScript mastery
- Web design & CSS
- Full-stack development
- AI integration for developers

## 🔄 Next Steps

1. **Implement OAuth** for social authentication
2. **Add course content** with interactive code editors
3. **Build lesson player** with video/code side-by-side
4. **Create dashboard** for enrolled courses
5. **Add payment integration** for premium courses
6. **Implement real-time collaboration** for pair programming

## 📝 License

MIT License - feel free to use for your projects

## 🤝 Support

For questions or issues:
1. Check documentation
2. Review example courses
3. Open GitHub issues

---

**Happy Learning! 💚**
