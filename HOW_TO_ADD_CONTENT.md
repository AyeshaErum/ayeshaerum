# How to add or edit content on your portfolio

**Every piece of content on the site lives in one file: `src/data/cv.js`.**
You never need to touch layout code, styles, or any other file. Open
`src/data/cv.js` in VS Code, edit, save — the site updates automatically if
`npm run dev` is running.

Inside that file, each section is a list. Every list has a comment right above
it starting with `// TEMPLATE:` telling you which block to copy. The general
recipe is always the same:

1. Find the section you want (they're listed below).
2. Select an existing block — everything from its opening `{` to its closing
   `},` (or a single line, for simple sections).
3. Copy it, paste it on the line below (or above, to put it first), and edit
   the text between the quotes.
4. Save the file. Check the page in your browser.

Rules of thumb: keep the quotes around text, keep the commas at the ends of
lines, and don't delete the `[` `]` brackets that wrap each list.

## Where each thing lives (all in `src/data/cv.js`)

| What you want to add | List to edit | Shape |
| --- | --- | --- |
| A new job / internship | `experience` | Block with `role`, `org`, `period`, `logo`, `bullets`. Newest first. |
| A new certification | `certifications` | One line: `{ name: '...', issuer: '...' },` |
| A new training item | `training` | One quoted line: `'Course name',` |
| A new project | `projects` | Block with `name`, `file` (the little folder-tab label), `tags`, `bullets`. |
| A new award / achievement | `achievements` | One line: `{ place: '1st', title: '...', year: '2027' },` — use `'—'` as place for a star. |
| A new volunteering entry | `volunteering` | Block with `title` and `role`. |
| A new skill branch or skill | `skills` | Each block is one tree branch: `label` is the category, `items` are the leaves. |
| Your intro paragraph / links | `profile` | Edit the text directly. |
| GPA, graduation year, progress bar | `education` | Edit `gpa`, `expected`, `progress` (the number is the % shown on the bar). |

## Company logos on the Experience page

Each experience entry has a `logo` line pointing at a file in
`public/assets/logos/` (for example `qcri.svg`). The files there now are
placeholders. To show a real logo: get the logo image file, rename it to match
(e.g. `qcri.svg`, or `qcri.png` — if you use .png, also change the `logo:` path
in `src/data/cv.js` to end in `.png`), and drop it into `public/assets/logos/`,
replacing the old file. Nothing else needs to change.

## After editing

- If the site is running (`npm run dev`), changes appear instantly on save.
- If something breaks (blank page), you most likely deleted a comma or quote —
  press Ctrl+Z until it works again, then retry carefully.
