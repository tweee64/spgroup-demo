# HomeStay - Long-Term Accommodation Platform

A modern web application for finding mid to long-term accommodation, designed for students and working professionals. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

### Core Functionality (MVP)
- ✅ **Smart Search**: Filter accommodations by location, price, room type, lease duration, and facilities
- ✅ **Listing Details**: Comprehensive property information with high-quality photo galleries
- ✅ **Interactive Photo Gallery**: Swipeable gallery with lightbox view and thumbnail navigation
- ✅ **Booking Requests**: Request bookings with move-in dates and lease duration selection
- ✅ **Responsive Design**: Fully responsive for mobile, tablet, and desktop
- ✅ **Dark Mode**: Full dark mode support

### Property Types
- Studio apartments
- Shared accommodations
- Student housing
- Co-living spaces

### Search Filters
- **Location**: Search by city or area
- **Price Range**: Min/max price filters (£300 - £3000/month)
- **Room Type**: Multiple room type selection
- **Lease Duration**: 1, 3, 6, 9, or 12+ months
- **Facilities**: Wi-Fi, Gym, Laundry, Parking, Furnished, Air Conditioning, and more

## Tech Stack

- **Framework**: Next.js 16.2.0 with App Router
- **Frontend**: React 19.2.4
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **Testing**: Playwright for E2E tests
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tweee64/spgroup-demo.git
cd spgroup-demo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
spgroup-demo/
├── docs/
│   ├── stories/                    # User stories from product discussions
│   └── implementation-plans/       # Detailed technical implementation plans
├── src/
│   ├── app/
│   │   ├── page.tsx               # Home page with hero and featured listings
│   │   ├── search/                # Search page with filters
│   │   ├── listings/[id]/         # Dynamic listing detail pages
│   │   └── _components/           # Shared components
│   ├── types/
│   │   └── listing.ts             # TypeScript type definitions
│   └── lib/
│       └── mockData.ts            # Mock listing data (6 properties)
├── tests/
│   ├── home.spec.ts               # Home page E2E tests
│   ├── search.spec.ts             # Search functionality tests
│   ├── listing-detail.spec.ts     # Listing detail page tests
│   ├── user-flow.md               # Manual test documentation
│   └── README.md                  # Testing guide
└── playwright.config.ts           # Playwright configuration
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test:e2e` - Run Playwright E2E tests
- `npm run test:e2e:ui` - Run tests in interactive UI mode
- `npm run test:e2e:headed` - Run tests with visible browser

## Testing

This project includes comprehensive E2E tests using Playwright.

### Run all tests:
```bash
npm run test:e2e
```

### Interactive testing with UI:
```bash
npm run test:e2e:ui
```

See [tests/README.md](tests/README.md) for detailed testing documentation.

## Features in Detail

### Home Page
- Eye-catching hero section with clear value proposition
- Featured listings showcase
- Quick access to search functionality
- Feature highlights (Smart Search, Verified Listings, Easy Contact)

### Search Page
- Comprehensive filter sidebar
- Real-time search results
- Active filter management with clear all option
- Mobile-friendly filter drawer
- Responsive grid layout
- Empty state handling

### Listing Detail Page
- Full-screen photo gallery with lightbox
- Swipeable images with thumbnail navigation
- Comprehensive property information
- Amenities list with icons
- Lease terms display
- Landlord information
- Booking request panel with date picker
- Price calculation based on lease duration
- Contact landlord functionality

## Mock Data

The application includes 6 realistic mock listings across different UK cities:
1. Modern Studio near King's Cross (London) - £1,200/month
2. Spacious Shared Apartment (Manchester) - £650/month
3. Student Housing near University (Edinburgh) - £850/month
4. Co-Living Space with Community (Birmingham) - £750/month
5. Bright Studio with Garden View (Bristol) - £950/month
6. Luxury Student Accommodation (Glasgow) - £1,100/month

Each listing includes:
- Multiple high-quality images (5+ per listing)
- Detailed descriptions
- Comprehensive facility lists
- Location information with coordinates
- Landlord details
- Lease duration options

## User Stories

Detailed user stories are documented in `docs/stories/`:
- Search accommodations with filters
- View listing details with photo gallery
- View listings on map (planned)
- Contact property owner (planned)
- Request booking (implemented)
- Create property listing (planned)
- Save and manage searches (planned)
- Leave and view reviews (planned)

## Implementation Plans

Technical implementation plans are in `docs/implementation-plans/`:
- Detailed component architecture
- Design specifications
- State management requirements
- Testing requirements
- Acceptance criteria

## Contributing

This is a demo project. For production use, consider:
- Implementing real backend API
- Adding user authentication
- Integrating payment processing
- Adding real-time messaging
- Implementing map view with actual maps API
- Adding review and rating system
- Implementing saved searches with notifications

## License

This is a demo project for educational purposes.

## Acknowledgments

Built as part of a Next.js and TypeScript learning project, showcasing modern web development practices and E2E testing with Playwright.
