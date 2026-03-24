# Daily Hydration Tracker 💧

A modern, intuitive web application to help users build healthy daily hydration habits. Track your water intake, visualize your progress, and stay motivated to reach your daily goals.

![Water Tracker Dashboard](https://img.shields.io/badge/status-ready-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## ✨ Features

- ✅ **Daily Water Tracking** - Log your water intake with a simple click
- ✅ **Visual Progress** - See your progress with animated progress bars and glass icons
- ✅ **Data Persistence** - Your progress is automatically saved and persists across sessions
- ✅ **Daily Goals** - Default 8 glasses per day (customizable in future versions)
- ✅ **Automatic Reset** - Counter resets daily at midnight
- ✅ **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- ✅ **Accessibility** - Full keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/tweee64/spgroup-demo.git
cd spgroup-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 📖 Documentation

- **[Quick Start Guide](docs/QUICK_START.md)** - Get up and running quickly
- **[Implementation Summary](docs/IMPLEMENTATION_SUMMARY.md)** - Complete technical overview
- **[User Stories](docs/stories/)** - Product requirements and features
- **[Implementation Plans](docs/implementation-plans/)** - Detailed technical specifications

## 🧪 Testing

The project includes comprehensive end-to-end tests using Playwright.

```bash
# Run E2E tests
npm run test:e2e

# Run tests with UI (interactive mode)
npm run test:e2e:ui
```

Test scenarios cover:
- ✅ Initial page load and default state
- ✅ Adding water and updating counter
- ✅ Reaching daily goal
- ✅ Data persistence across page refreshes
- ✅ Visual feedback and animations
- ✅ Progress bar accuracy

## 🏗️ Built With

- **[Next.js 16.2.0](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.4](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS
- **[Playwright](https://playwright.dev/)** - E2E testing framework

## 📁 Project Structure

```
spgroup-demo/
├── docs/                       # Documentation
│   ├── stories/               # User stories
│   ├── implementation-plans/  # Technical specs
│   ├── IMPLEMENTATION_SUMMARY.md
│   └── QUICK_START.md
├── src/
│   ├── app/                   # Next.js pages and layouts
│   ├── components/            # React components
│   │   └── water-tracker/    # Water tracking components
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript definitions
├── tests/
│   └── e2e/                   # Playwright tests
└── playwright.config.ts       # Test configuration
```

## 🎯 Roadmap

### Current Release (v1.0) ✅
- [x] Water intake tracking dashboard
- [x] Visual progress indicators
- [x] Data persistence with localStorage
- [x] Responsive design
- [x] E2E test coverage

### Upcoming Features
- [ ] Customizable daily goals
- [ ] Push notification reminders
- [ ] Daily streak tracking
- [ ] Achievement badges
- [ ] Multi-habit tracking (steps, sleep, meditation)
- [ ] Backend API integration
- [ ] Historical data and analytics

## 🤝 Contributing

This project was built following the user stories in `docs/stories/`. 

To contribute:
1. Review the user stories and implementation plans
2. Check existing issues or create a new one
3. Fork the repository
4. Create a feature branch
5. Submit a pull request

## 📝 License

This project is for demonstration purposes.

## 🙏 Acknowledgments

- Design inspired by Palo IT's modern, impact-driven aesthetic
- Built with modern web technologies and best practices
- Comprehensive test coverage for reliability

---

**Built with ❤️ for healthier hydration habits**
