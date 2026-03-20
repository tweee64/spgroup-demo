---
mode: 'agent'
tools: ['playwright', 'browser_click', 'browser_generate_playwright_test', 'browser_navigate', 'browser_type']
description: 'Playwright demo script'
---
I want you to navigate to the water-tracker page and execute the following steps:
1. Click on the "Add glass" button.
2. Make sure the progress bar is now 1/8 glasses.
3. Click on the "Customize goal" button, a modal should appear.
4. Set a new daily water goal of 12 glasses instead of 8.
5. Click on the "Save goal" button.
6. Make sure the progress bar is now 1/12 glasses.
7. Click on the "Add water" button twice.
8. Make sure the progress bar is now 3/12 glasses.