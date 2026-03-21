# 01 Search Accommodations with Filters - Implementation Plan

## User Story

As a student or working adult looking for accommodation, I want to search for housing with multiple filters (location, price, room type, lease duration, facilities), so that I can quickly find suitable long-term accommodation that meets my specific needs.

## Pre-conditions

- Next.js 16.2.0 project with App Router
- Tailwind CSS v4 configured
- TypeScript with strict mode enabled
- No existing accommodation data or search functionality

## Design

### Visual Layout

The search interface consists of:
- **Hero Section**: Full-width header with search bar and value proposition
- **Filter Sidebar**: Left-aligned panel (desktop) / collapsible drawer (mobile) with filter categories
- **Results Area**: Grid/list view of accommodation cards
- **Map Toggle**: Switch between list and map views
- **Active Filters Bar**: Display and manage applied filters

### Color and Typography

- **Background Colors**: 
  - Primary: bg-white dark:bg-gray-900
  - Secondary: bg-gray-50 dark:bg-gray-800
  - Accent: bg-teal-600 hover:bg-teal-700
  
- **Typography**:
  - Hero Heading: font-inter text-4xl md:text-5xl font-bold text-gray-900 dark:text-white
  - Section Titles: font-inter text-2xl font-semibold text-gray-900 dark:text-white
  - Body: font-inter text-base text-gray-600 dark:text-gray-300
  - Filter Labels: text-sm font-medium text-gray-700 dark:text-gray-300

- **Component-Specific**:
  - Search Input: bg-white dark:bg-gray-800 border-gray-300 focus:border-teal-500 focus:ring-teal-500
  - Filter Chips: bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200
  - Listing Cards: bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow

### Interaction Patterns

- **Search Input**:
  - Focus: Border highlight with ring effect
  - Typing: Debounced search (500ms)
  - Clear button appears when text entered
  
- **Filter Selection**:
  - Checkboxes: Custom styled with teal accent
  - Range sliders: Teal track, responsive handles
  - Apply button: Updates results immediately
  - Clear filters: One-click reset

- **Listing Cards**:
  - Hover: Lift effect with enhanced shadow
  - Click: Navigate to detail page
  - Favorite button: Heart icon with fill animation

### Measurements and Spacing

- **Container**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Component Spacing**:
  - Section padding: py-12 md:py-16
  - Card grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
  - Filter sections: space-y-6
  - Input padding: px-4 py-3

### Responsive Behavior

- **Desktop (lg: 1024px+)**:
  - Sidebar: w-64 fixed, always visible
  - Grid: 3 columns
  - Search bar: Expanded in hero
  
- **Tablet (md: 768px - 1023px)**:
  - Sidebar: Collapsible drawer
  - Grid: 2 columns
  - Compact filters
  
- **Mobile (< 768px)**:
  - Filter drawer with bottom sheet
  - Grid: Single column
  - Sticky search bar

## Technical Requirements

### Component Structure

```
src/app/
├── page.tsx                           # Home page with search
├── search/
│   ├── page.tsx                       # Search results page
│   └── _components/
│       ├── SearchBar.tsx              # Main search input
│       ├── FilterSidebar.tsx          # Filter panel
│       ├── FilterSection.tsx          # Individual filter group
│       ├── PriceRangeFilter.tsx       # Price range slider
│       ├── FacilityCheckboxes.tsx     # Facilities checkboxes
│       ├── ActiveFilters.tsx          # Applied filters display
│       ├── ListingCard.tsx            # Single listing card
│       ├── ListingGrid.tsx            # Grid of listings
│       └── useSearchFilters.ts        # Filter state hook
src/types/
└── listing.ts                         # Listing type definitions
src/lib/
└── mockData.ts                        # Mock listing data
```

### Required Components

- SearchBar ⬜
- FilterSidebar ⬜
- FilterSection ⬜
- PriceRangeFilter ⬜
- FacilityCheckboxes ⬜
- ActiveFilters ⬜
- ListingCard ⬜
- ListingGrid ⬜
- useSearchFilters (hook) ⬜

### State Management Requirements

```typescript
interface SearchFilters {
  // Search
  query: string;
  
  // Location
  location: string;
  
  // Price
  priceMin: number;
  priceMax: number;
  
  // Room Type
  roomTypes: string[];
  
  // Lease Duration
  leaseDuration: string;
  
  // Facilities
  facilities: string[];
  
  // View Mode
  viewMode: 'list' | 'map';
}

interface SearchState {
  filters: SearchFilters;
  results: Listing[];
  isLoading: boolean;
  error: string | null;
}

const actions = {
  setQuery: (query: string) => void;
  setLocation: (location: string) => void;
  setPriceRange: (min: number, max: number) => void;
  toggleRoomType: (type: string) => void;
  toggleFacility: (facility: string) => void;
  setLeaseDuration: (duration: string) => void;
  clearFilters: () => void;
  toggleViewMode: () => void;
}
```

## Acceptance Criteria

### Layout & Content

1. Hero Section
   ```
   - Centered heading: "Find Your Perfect Long-Term Home"
   - Subtitle: "Flexible accommodation for students and professionals"
   - Large search input with location autocomplete
   - Quick filter buttons (Popular, Budget-Friendly, Near University)
   ```

2. Filter Sidebar
   ```
   - Collapsible sections for each filter category
   - Price range: Dual-handle slider (£0 - £3000+)
   - Room types: Checkboxes (Studio, Shared, Co-living, Student Housing)
   - Lease duration: Dropdown (1 month, 3 months, 6 months, 12+ months)
   - Facilities: Checkboxes (Wi-Fi, Gym, Laundry, AC, Parking, Furnished)
   - Apply/Reset buttons at bottom
   ```

3. Results Area
   ```
   - Results count: "Showing X of Y accommodations"
   - Sort dropdown: Price, Distance, Rating, Newest
   - Grid/List toggle buttons
   - Listing cards with image, price, location, key features
   - Load more / pagination
   ```

### Functionality

1. Search and Filtering

   - [x] Search input filters listings by title/description
   - [x] Location filter works with text input (mock autocomplete for MVP)
   - [x] Price range updates results in real-time
   - [x] Room type checkboxes allow multiple selections
   - [x] Lease duration filters available options
   - [x] Facility checkboxes filter listings with AND logic
   - [x] Results update immediately when filters change
   - [x] Loading state shown during filter updates

2. Active Filters Management

   - [x] Active filters displayed as removable chips
   - [x] Each chip shows filter type and value
   - [x] Clicking X on chip removes that filter
   - [x] "Clear all" button removes all filters
   - [x] Filter count badge shows on mobile filter button

3. Results Display
   - [x] Listings display in responsive grid
   - [x] Each card shows: image, price, title, location, facilities
   - [x] Hover state provides visual feedback
   - [x] Click navigates to listing detail page
   - [x] "No results" message when no matches
   - [x] Results are sorted by selected criteria

### Navigation Rules

- Home page (/) shows hero with search and featured listings
- Search page (/search) shows full search interface with filters
- URL parameters preserve filter state (shareable links)
- Back button restores previous filter state

### Error Handling

- Display user-friendly message if no results found
- Show error state if data fetching fails
- Validate price range inputs (min < max)
- Handle empty search gracefully

## Modified Files

```
src/app/
├── page.tsx ⬜                        # Add hero and featured listings
├── search/
│   ├── page.tsx ⬜                    # Main search page
│   └── _components/
│       ├── SearchBar.tsx ⬜
│       ├── FilterSidebar.tsx ⬜
│       ├── FilterSection.tsx ⬜
│       ├── PriceRangeFilter.tsx ⬜
│       ├── FacilityCheckboxes.tsx ⬜
│       ├── ActiveFilters.tsx ⬜
│       ├── ListingCard.tsx ⬜
│       ├── ListingGrid.tsx ⬜
│       └── useSearchFilters.ts ⬜
src/types/
└── listing.ts ⬜
src/lib/
└── mockData.ts ⬜
src/app/
└── globals.css ⬜                     # Add custom utilities
```

## Status

⬜ NOT STARTED

1. Setup & Configuration

   - [ ] Create type definitions for Listing
   - [ ] Create mock data for development
   - [ ] Set up routing structure

2. Core Search Components

   - [ ] Implement SearchBar component
   - [ ] Implement useSearchFilters hook
   - [ ] Implement ActiveFilters display

3. Filter Components

   - [ ] Implement FilterSidebar container
   - [ ] Implement FilterSection wrapper
   - [ ] Implement PriceRangeFilter
   - [ ] Implement FacilityCheckboxes
   - [ ] Implement room type selection
   - [ ] Implement lease duration selection

4. Results Display

   - [ ] Implement ListingCard component
   - [ ] Implement ListingGrid container
   - [ ] Add loading states
   - [ ] Add empty state

5. Page Integration
   - [ ] Build home page with hero
   - [ ] Build search results page
   - [ ] Implement URL parameter syncing
   - [ ] Add responsive mobile layout

## Dependencies

- No external dependencies required for MVP
- Future: Maps API integration for location autocomplete
- Future: Backend API for real data

## Related Stories

- 02 (View Listing Details) - Listings link to detail pages
- 03 (Map View) - Requires same filtering logic

## Notes

### Technical Considerations

1. **Filter Performance**: Use debounced search (500ms) to avoid excessive re-renders
2. **URL State**: Sync filters with URL search params for shareable links
3. **Accessibility**: Ensure all filters keyboard navigable with proper ARIA labels
4. **Mobile Experience**: Bottom sheet drawer for filters on mobile
5. **Data Structure**: Design flexible schema to support future filter additions

### Business Requirements

- Minimum 5 mock listings for demonstration
- Price range: £300 - £3000 per month
- Support major UK cities (London, Manchester, Birmingham, Edinburgh)
- Default sort: Relevance (for MVP, use price ascending)

### Mock Data Structure

```typescript
interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: {
    city: string;
    area: string;
    postcode: string;
    lat?: number;
    lng?: number;
  };
  roomType: 'studio' | 'shared' | 'student-housing' | 'co-living';
  leaseDuration: {
    min: number; // months
    max?: number;
  };
  facilities: string[];
  images: string[];
  available: boolean;
  landlord: {
    id: string;
    name: string;
  };
}
```

## Testing Requirements

### Integration Tests (Target: 80% Coverage)

1. Filter Functionality Tests

```typescript
describe('Search Filters', () => {
  it('should filter listings by price range', async () => {
    // Set price range, verify filtered results
  });

  it('should filter by multiple room types', async () => {
    // Select multiple types, verify results include all types
  });

  it('should filter by facilities with AND logic', async () => {
    // Select multiple facilities, verify results have all
  });

  it('should show active filter chips', async () => {
    // Apply filters, verify chips displayed correctly
  });

  it('should remove filter when chip is clicked', async () => {
    // Apply filter, click chip, verify filter removed
  });

  it('should clear all filters at once', async () => {
    // Apply multiple filters, clear all, verify reset
  });
});
```

2. Search Tests

```typescript
describe('Search Functionality', () => {
  it('should filter listings by search query', async () => {
    // Type query, verify matching results
  });

  it('should debounce search input', async () => {
    // Verify search doesn't trigger on every keystroke
  });

  it('should handle empty search results', async () => {
    // Search for non-existent term, verify empty state
  });
});
```

3. Responsive Tests

```typescript
describe('Responsive Behavior', () => {
  it('should show filter drawer on mobile', async () => {
    // Set mobile viewport, verify drawer behavior
  });

  it('should show filter sidebar on desktop', async () => {
    // Set desktop viewport, verify sidebar visible
  });

  it('should adapt grid columns to viewport', async () => {
    // Test different viewports, verify column counts
  });
});
```

### Accessibility Tests

```typescript
describe('Accessibility', () => {
  it('should allow keyboard navigation through filters', async () => {
    // Tab through filters, verify focus management
  });

  it('should announce filter changes to screen readers', async () => {
    // Apply filter, verify ARIA live region updates
  });

  it('should have proper labels for form elements', async () => {
    // Verify all inputs have associated labels
  });
});
```
