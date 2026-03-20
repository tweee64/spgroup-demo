# User Story: 3 - View Daily Habit Streaks

**As a** user,
**I want** to see a streak count for my daily healthy habits,
**so that** I stay motivated to maintain consistency and not break my progress.

## Acceptance Criteria

*   The dashboard displays the current consecutive-day streak for tracked habits (starting with water intake).
*   A streak increments when the user meets their daily goal before midnight in their local timezone.
*   A streak resets to zero if the user misses a day.
*   The streak count is visible prominently to reinforce motivation.
*   The longest recorded streak is also displayed as a personal best.

## Notes

*   The Designer proposed streaks as a key motivational mechanism during the meeting.
*   Local timezone support is required to accurately determine the start/end of each day (raised by the developer).
