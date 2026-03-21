# 02 View Listing Details with Photo Gallery - Implementation Plan

## User Story

As a prospective tenant, I want to view detailed information about a listing with high-quality photos in a gallery format, so that I can make an informed decision about the accommodation and trust the listing.

## Pre-conditions

- Listing type definition exists (from Story 01)
- Mock listing data available
- Next.js Image component configured
- Dynamic routing set up for listings

## Design

### Visual Layout

The listing detail page consists of:
- **Photo Gallery**: Full-width hero gallery with main image and thumbnails
- **Property Header**: Title, price, location, and quick actions
- **Details Section**: Tabbed or sectioned content (Overview, Amenities, Location)
- **Booking Panel**: Sticky sidebar with booking form (desktop) / bottom bar (mobile)
- **Contact Button**: Prominent call-to-action to message landlord

### Color and Typography

- **Background Colors**: 
  - Primary: bg-white dark:bg-gray-900
  - Card background: bg-gray-50 dark:bg-gray-800
  - Gallery overlay: bg-black/80

- **Typography**:
  - Property Title: font-inter text-3xl md:text-4xl font-bold text-gray-900 dark:text-white
  - Price: font-inter text-2xl font-semibold text-teal-600
  - Section Headings: font-inter text-xl font-semibold text-gray-900 dark:text-white
  - Body: font-inter text-base text-gray-600 dark:text-gray-300
  - Labels: text-sm font-medium text-gray-700 dark:text-gray-300

- **Component-Specific**:
  - Gallery thumbnails: border-2 border-teal-500 when active
  - Action buttons: bg-teal-600 hover:bg-teal-700 text-white
  - Amenity icons: text-teal-600

### Interaction Patterns

- **Photo Gallery**:
  - Click main image: Open full-screen lightbox
  - Swipe/arrows: Navigate between images
  - Thumbnails: Click to preview image
  - Zoom: Pinch or double-click in lightbox
  - ESC/X: Close lightbox

- **Booking Panel**:
  - Sticky on scroll (desktop)
  - Fixed bottom bar (mobile)
  - Date picker: Calendar overlay
  - Submit: Shows confirmation or validation errors

### Measurements and Spacing

- **Container**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Gallery**: Full width, aspect-ratio-16/9 for main image
- **Layout**: Two-column (2/3 content, 1/3 booking panel) on desktop
- **Component Spacing**:
  - Section padding: py-8 md:py-12
  - Content blocks: space-y-6
  - Thumbnail gap: gap-2
  - Card padding: p-6

### Responsive Behavior

- **Desktop (lg: 1024px+)**:
  - Two-column layout with sticky booking panel
  - Gallery: 5 thumbnail previews
  - Full details visible

- **Tablet (md: 768px)**:
  - Stacked layout
  - Gallery: 4 thumbnails
  - Booking panel at bottom of content

- **Mobile (< 768px)**:
  - Single column
  - Gallery: Swipeable, no thumbnails (dots instead)
  - Booking bar fixed at bottom
  - Collapsible sections

## Technical Requirements

### Component Structure

```
src/app/
├── listings/
│   └── [id]/
│       ├── page.tsx                  # Listing detail page
│       └── _components/
│           ├── PhotoGallery.tsx      # Main gallery component
│           ├── GalleryLightbox.tsx   # Full-screen image viewer
│           ├── PropertyHeader.tsx    # Title, price, location
│           ├── PropertyDetails.tsx   # Description and details
│           ├── AmenitiesList.tsx     # Facilities display
│           ├── LocationMap.tsx       # Map showing property location
│           ├── BookingPanel.tsx      # Booking form sidebar
│           └── ContactButton.tsx     # Message landlord button
src/components/
└── ui/
    ├── ImageCarousel.tsx             # Reusable carousel
    └── Modal.tsx                     # Modal wrapper
```

### Required Components

- PhotoGallery ⬜
- GalleryLightbox ⬜
- PropertyHeader ⬜
- PropertyDetails ⬜
- AmenitiesList ⬜
- LocationMap ⬜
- BookingPanel ⬜
- ContactButton ⬜

### State Management Requirements

```typescript
interface GalleryState {
  currentIndex: number;
  isLightboxOpen: boolean;
  images: string[];
}

interface BookingFormState {
  checkIn: Date | null;
  leaseDuration: number;
  occupants: number;
  message: string;
  errors: Record<string, string>;
}

const galleryActions = {
  nextImage: () => void;
  prevImage: () => void;
  selectImage: (index: number) => void;
  openLightbox: (index?: number) => void;
  closeLightbox: () => void;
}

const bookingActions = {
  setCheckIn: (date: Date) => void;
  setLeaseDuration: (months: number) => void;
  setOccupants: (count: number) => void;
  setMessage: (message: string) => void;
  validateForm: () => boolean;
  submitBooking: () => Promise<void>;
}
```

## Acceptance Criteria

### Layout & Content

1. Photo Gallery Section
   ```
   - Hero image: Full-width, high-quality main photo
   - Thumbnail strip: 5 images below (desktop) or swipeable (mobile)
   - Image counter: "3 / 12" overlay
   - Full-screen button: "View all photos" with grid icon
   - Navigation arrows on main image
   ```

2. Property Header
   ```
   - Property title (h1)
   - Price per month (prominent, with currency)
   - Location (with map pin icon)
   - Quick stats: Room type, size (if available)
   - Action buttons: Share, Save (heart icon)
   ```

3. Details Sections
   ```
   - Overview: Full description, highlights
   - Amenities: Grid of facilities with icons
   - Location: Interactive map + description
   - Lease terms: Min/max duration, available dates
   - Landlord info: Name, response rate, member since
   ```

4. Booking Panel
   ```
   - Check-in date picker
   - Lease duration selector (1, 3, 6, 12+ months)
   - Number of occupants
   - Total price calculation
   - "Request Booking" button
   - Optional message to landlord
   ```

### Functionality

1. Photo Gallery

   - [x] Display minimum 5 photos per listing
   - [x] Main image responsive and optimized
   - [x] Click main image opens full-screen lightbox
   - [x] Lightbox supports swipe/arrow navigation
   - [x] Thumbnail strip shows all images
   - [x] Active thumbnail highlighted
   - [x] Close lightbox with ESC key or X button
   - [x] Images lazy-load for performance

2. Property Information

   - [x] Display all property details comprehensively
   - [x] Amenities shown with icons and labels
   - [x] Location displayed with map preview
   - [x] Landlord information accessible
   - [x] Mobile: Sections collapsible to save space

3. Booking Request
   - [x] Date picker shows available dates
   - [x] Lease duration affects price calculation
   - [x] Form validation before submission
   - [x] Success message after booking request
   - [x] Error handling for invalid input
   - [x] Disabled state when unavailable

### Navigation Rules

- Access via /listings/[id] route
- Back navigation returns to search results with filters preserved
- Share button copies URL to clipboard
- Breadcrumb: Home > Search > [Property Name]

### Error Handling

- Show 404 page if listing ID not found
- Display error message if images fail to load
- Validate booking dates (check-in must be future)
- Show inline errors on booking form
- Graceful degradation if map fails to load

## Modified Files

```
src/app/
├── listings/
│   └── [id]/
│       ├── page.tsx ⬜
│       ├── loading.tsx ⬜              # Loading skeleton
│       ├── not-found.tsx ⬜            # 404 page
│       └── _components/
│           ├── PhotoGallery.tsx ⬜
│           ├── GalleryLightbox.tsx ⬜
│           ├── PropertyHeader.tsx ⬜
│           ├── PropertyDetails.tsx ⬜
│           ├── AmenitiesList.tsx ⬜
│           ├── LocationMap.tsx ⬜
│           ├── BookingPanel.tsx ⬜
│           └── ContactButton.tsx ⬜
src/components/ui/
├── ImageCarousel.tsx ⬜
└── Modal.tsx ⬜
src/lib/
└── getListingById.ts ⬜               # Data fetching utility
```

## Status

⬜ NOT STARTED

1. Setup & Configuration

   - [ ] Set up dynamic routing for listing pages
   - [ ] Create loading and error states
   - [ ] Extend mock data with full listing details

2. Photo Gallery Implementation

   - [ ] Build PhotoGallery component with thumbnails
   - [ ] Implement GalleryLightbox with navigation
   - [ ] Add swipe gestures for mobile
   - [ ] Optimize images with Next.js Image
   - [ ] Add keyboard navigation

3. Property Display

   - [ ] Implement PropertyHeader
   - [ ] Build PropertyDetails section
   - [ ] Create AmenitiesList with icons
   - [ ] Add LocationMap placeholder (mock for MVP)
   - [ ] Add share and save functionality

4. Booking Integration
   - [ ] Build BookingPanel component
   - [ ] Implement date picker
   - [ ] Add form validation
   - [ ] Create booking submission flow
   - [ ] Add success/error states

5. Testing
   - [ ] Test image navigation
   - [ ] Test responsive behavior
   - [ ] Test booking form validation
   - [ ] Test accessibility

## Dependencies

- Story 01 (Search) - Provides listing type definitions and mock data
- Story 04 (Contact Owner) - Contact button links to messaging
- Story 05 (Request Booking) - Booking panel submits request

## Related Stories

- 01 (Search) - Users navigate from search results
- 04 (Contact) - Contact button integration
- 05 (Booking) - Booking panel functionality

## Notes

### Technical Considerations

1. **Image Optimization**: Use Next.js Image with priority for first image, lazy load rest
2. **Performance**: Implement intersection observer for image lazy loading
3. **Accessibility**: Ensure gallery keyboard navigable, proper alt text for all images
4. **SEO**: Add structured data (JSON-LD) for better search visibility
5. **State Management**: Use URL params to deep-link to specific images (e.g., ?photo=3)

### Business Requirements

- Minimum 5 high-quality photos required per listing
- Image guidelines: Min 1200x800px, max 5MB per image
- Supported formats: JPG, PNG, WebP
- First image is the primary listing photo

### API Integration (Future)

```typescript
// For MVP, use mock data
async function getListingById(id: string): Promise<Listing | null> {
  // In production, this would fetch from API
  return mockListings.find(l => l.id === id) || null;
}
```

### Image Upload Guidelines (for Landlords - Story 06)

- Bedroom photos: At least 2 angles
- Bathroom: 1-2 photos
- Common areas: Kitchen, living room
- Exterior: Building entrance, neighborhood
- Optional: View from windows, nearby amenities

## Testing Requirements

### Integration Tests

1. Gallery Functionality Tests

```typescript
describe('Photo Gallery', () => {
  it('should display all listing images', async () => {
    // Render gallery, verify all images loaded
  });

  it('should open lightbox when main image clicked', async () => {
    // Click image, verify lightbox opens
  });

  it('should navigate between images in lightbox', async () => {
    // Use arrows, verify image changes
  });

  it('should close lightbox with ESC key', async () => {
    // Press ESC, verify lightbox closes
  });

  it('should update main image when thumbnail clicked', async () => {
    // Click thumbnail, verify main image updates
  });
});
```

2. Booking Form Tests

```typescript
describe('Booking Form', () => {
  it('should validate required fields', async () => {
    // Submit empty form, verify errors shown
  });

  it('should calculate total price correctly', async () => {
    // Select duration, verify price calculation
  });

  it('should prevent past dates', async () => {
    // Try to select past date, verify prevented
  });

  it('should submit booking request successfully', async () => {
    // Fill valid form, submit, verify success message
  });
});
```

3. Responsive Tests

```typescript
describe('Responsive Behavior', () => {
  it('should show thumbnail strip on desktop', async () => {
    // Desktop viewport, verify thumbnails visible
  });

  it('should show swipeable gallery on mobile', async () => {
    // Mobile viewport, verify swipe works
  });

  it('should position booking panel correctly', async () => {
    // Test different viewports, verify panel position
  });
});
```

### Accessibility Tests

```typescript
describe('Accessibility', () => {
  it('should allow keyboard navigation in gallery', async () => {
    // Tab and arrow keys work correctly
  });

  it('should have proper ARIA labels', async () => {
    // Verify all interactive elements labeled
  });

  it('should announce image changes to screen readers', async () => {
    // Verify ARIA live region updates
  });
});
```
