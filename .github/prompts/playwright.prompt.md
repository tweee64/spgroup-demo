---
mode: "agent"
tools: ["browser_navigate", "browser_click", "browser_type"]
description: "Test executor for plain text test files"
---

Given a path to a text or markdown file containing test steps, execute those steps in the browser.

Steps:

1. Receive the path to a text/markdown file containing test steps.
2. Parse the test steps from the file.
3. Execute each step in sequence, including:
   - Navigation actions
   - Click actions
   - Text input actions
   - Verification steps (reporting if elements are visible or contain expected text)
4. Report the results of each step (pass/fail and any errors).

The test file should contain numbered steps in natural language describing browser actions and verification checks.

Example input: `tests/add_water_test.md`
