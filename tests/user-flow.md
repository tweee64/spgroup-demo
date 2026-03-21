# E2E Test: User Search and Booking Flow

## Test Scenario: User searches for accommodation and requests a booking

### Setup
1. Navigate to http://localhost:3000

### Test Steps

#### Step 1: Verify Home Page
1. Navigate to `/`
2. Verify heading "Find Your Perfect Long-Term Home" is visible
3. Verify "Start Searching" button is visible
4. Verify at least 3 featured listings are displayed

#### Step 2: Navigate to Search
1. Click "Start Searching" button
2. Verify URL is `/search`
3. Verify page heading "Search Accommodations" is visible

#### Step 3: Apply Filters
1. Type "Studio" in the search box
2. Wait 500ms for results to update
3. Verify "Studio" appears in results

#### Step 4: Select a Listing
1. Click on the first listing card
2. Verify URL matches pattern `/listings/[id]`
3. Verify listing title is displayed
4. Verify price is displayed

#### Step 5: View Photo Gallery
1. Verify main image is visible
2. Verify image counter shows "1 / [number]"
3. Click on second thumbnail
4. Verify image counter updates to "2 / [number]"

#### Step 6: Submit Booking Request
1. Select a future date in the "Move-in Date" field
2. Select "6 months" from the lease duration dropdown
3. Type "I am very interested in this property" in the message field
4. Click "Request Booking" button
5. Verify success message "Booking request sent!" appears

### Expected Results
- User can successfully navigate from home to search
- User can filter listings
- User can view listing details with photo gallery
- User can submit a booking request
- Success confirmation is displayed

## Pass/Fail Criteria
- All steps complete without errors
- All verification points pass
- Booking request submission shows success message
