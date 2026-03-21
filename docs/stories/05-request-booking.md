# User Story: 05 - Request Booking

**As a** prospective tenant,
**I want** to submit a booking request for an accommodation,
**so that** I can secure my preferred housing for my desired dates.

## Acceptance Criteria

* Booking request button is prominently displayed on listing detail page
* Booking form includes:
  - Check-in date (move-in date)
  - Lease duration selection
  - Number of occupants
  - Optional message to landlord
  - User contact information
* Form validates:
  - Valid dates
  - Availability for selected dates
  - Required fields are completed
* Upon submission:
  - User receives confirmation message
  - Landlord is notified of the request
  - Request is saved and viewable in user's bookings dashboard
* Landlord can approve, decline, or request more information
* Users receive notifications about request status updates

## Notes

* For MVP, payment is handled offline (not in-app)
* Both instant booking and request-to-book flows to be supported
* This story focuses on request-to-book flow (instant booking is separate story)
* Future enhancement: in-app payment processing
* Real-time availability updates important to prevent double bookings
