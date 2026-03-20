# User Story: 5 - Opt-In Hydration Reminders

**As a** user,
**I want** to opt in to push notification reminders for drinking water,
**so that** I am prompted to stay hydrated throughout the day without being forced to receive notifications.

## Acceptance Criteria

*   Reminders are **disabled by default**; the user must explicitly opt in.
*   The user can enable or disable reminders at any time from app settings.
*   When enabled, the app requests the device's notification permission if not already granted.
*   If the user denies the notification permission, the app gracefully informs them and does not break.
*   The user can configure the reminder frequency or time windows (e.g., every 2 hours between 8 AM–10 PM).
*   Reminders respect the user's local timezone.

## Notes

*   Explicitly described as **optional** push notifications by the PO and Designer.
*   The Developer flagged that notification permissions must be checked at runtime on mobile platforms.
*   Local timezone support is needed for accurate scheduling (raised by the developer).
