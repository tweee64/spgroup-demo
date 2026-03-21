# 03 View Listings on Map - Implementation Plan

## User Story

As a user unfamiliar with the area, I want to view available accommodations on an interactive map, so that I can visually understand the locations and find housing in my preferred area.

## Pre-conditions

- Search functionality exists (Story 01)
- Listing data includes lat/lng coordinates
- Map toggle added to search results page

## Design

### Visual Layout

- **Map Container**: Full-width map view (replaces or sits alongside list view)
- **Map Markers**: Custom pins showing price and availability
- **Info Window**: Popup card on marker click with listing preview
- **Map Controls**: Zoom, pan, center on location
- **Toggle Button**: Switch between list and map views

### Color and Typography

- **Map Markers**: bg-teal-600 for available, bg-gray-400 for unavailable
- **Info Window**: bg-white shadow-lg rounded-lg
- **Price Badge**: bg-white text-teal-700 font-semibold

## Technical Requirements

### Component Structure

```
src/app/search/_components/
├── MapView.tsx                    # Map container component
├── MapMarker.tsx                  # Custom marker component
└── ListingInfoWindow.tsx          # Marker popup card
```

### Required Components

- MapView ⬜
- MapMarker ⬜
- ListingInfoWindow ⬜

## Status

⬜ NOT STARTED

1. Setup
   - [ ] Add map library placeholder (Leaflet or Google Maps API)
   - [ ] Add lat/lng to mock listings
   - [ ] Create map toggle UI

2. Implementation
   - [ ] Build MapView component
   - [ ] Create custom markers
   - [ ] Implement info windows
   - [ ] Add map controls

3. Integration
   - [ ] Connect to search filters
   - [ ] Sync map and list views
   - [ ] Add loading states

## Dependencies

- Story 01 (Search) - Uses same filter state

## Notes

### Technical Considerations

For MVP, we'll use a simple map library or placeholder. The key is to demonstrate the concept with markers and basic interaction.

## Testing Requirements

```typescript
describe('Map View', () => {
  it('should display markers for filtered listings', async () => {
    // Apply filter, verify markers shown
  });

  it('should show listing preview on marker click', async () => {
    // Click marker, verify popup appears
  });

  it('should sync with list view filters', async () => {
    // Change filter, verify map updates
  });
});
```
