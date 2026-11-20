# Job Board: Developer Guide

## Project files

- `index.html` contains the page structure and loads the scripts and styles.
- `jobs-scriptw.js` contains the job data, expiry filtering, rendering, selection, and email behavior.
- `jobs-style.css`, `apply-date-style.css`, and `reneve-theme.css` control page appearance.

Keep these files together; the page references them by relative filename.

## Run locally

This is a static page with no build step or package installation:

1. Open the project folder in File Explorer or VS Code.
2. Open `index.html` in a browser (double-click it in File Explorer, or use **Open with Live Server** in VS Code if that extension is installed).
3. After editing, reload the browser page with **Ctrl+R**.

The page uses internet-hosted fonts and the EmailJS browser library, so those features require network access. Email sending also depends on the EmailJS service and template configured in `jobs-scriptw.js`.

## Update job listings

Edit the `MAJORS` object in `jobs-scriptw.js`. Each department has a `jobs` array; a job entry uses this shape:

```js
{ title: "Example Intern", company: "Example Co.", link: "https://example.com/job", applyBy: "2026-12-01" }
```

Use an ISO date (`YYYY-MM-DD`) for `applyBy`. The date parser also accepts the existing `Month DD, YYYY` format. A job with an `applyBy` date earlier than the visitor's local date is hidden on page load; jobs due today remain visible. Jobs without a valid date are kept, so check those manually.

New jobs are not fetched from Symplicity automatically. Adding or correcting listings in this page does not change postings in Symplicity; update the `MAJORS` data manually or implement an authorized data integration separately.

## Validation

After editing JavaScript, check for syntax errors from PowerShell:

```powershell
node --check .\jobs-scriptw.js
```

Then reload the page and check the affected department, deadline display, selection/email flow, and browser console.
