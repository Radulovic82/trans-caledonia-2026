# Trail Preview Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A single static page listing the nine Trans Caledonia 2026 stages with a komoot map embed and curated YouTube trail videos per stage, published on GitHub Pages.

**Architecture:** One `index.html` with the stage data as a JS array at the top and a small render function below. A Node script `scripts/check-videos.mjs` reads the same array (exposed via a `stages.js` module) and verifies each YouTube ID resolves. No build step.

**Tech Stack:** Plain HTML/CSS/JS, Node 18+ (for the check script only, uses global fetch), git, gh CLI.

**Spec:** `docs/superpowers/specs/2026-09-02-trail-preview-page-design.md`

## Global Constraints

- Page must work when opened from disk (`file://`), so no `fetch` of local files at runtime.
- No frameworks, no build step, no API keys.
- komoot embed URL format: `https://www.komoot.com/tour/<id>/embed?profile=1`
- YouTube thumbnail: `https://i.ytimg.com/vi/<id>/hqdefault.jpg`; player: `https://www.youtube-nocookie.com/embed/<id>?autoplay=1`
- Stage order and komoot IDs are fixed (see Task 1 data).

---

## File structure

- `stages.js`. Exports `const STAGES = [...]` as an ES module AND is also loadable by a classic `<script>` tag. To satisfy both, `stages.js` assigns `globalThis.STAGES = [...]` and `scripts/check-videos.mjs` imports it for its side effect and reads `globalThis.STAGES`.
- `index.html`. Loads `stages.js` with `<script src="stages.js">`, then inline render script. Inline CSS.
- `scripts/check-videos.mjs`. Verifies every video ID via `https://www.youtube.com/oembed?url=https://youtu.be/<id>&format=json` (200 = ok) and every komoot ID via a HEAD request to the tour page.
- `README.md`.

Note: `file://` pages can load a sibling classic script tag, so `stages.js` as a separate file still satisfies the disk constraint. This keeps data and rendering separate, and contributors only touch `stages.js`.

---

### Task 1: Stage data file with researched videos

**Files:**
- Create: `stages.js`

**Interfaces:**
- Produces: `globalThis.STAGES: Array<{day:string, name:string, komootId:string, distanceKm:number, elevationM:number, duration:string, searchQuery:string, videos:Array<{id:string, title:string, note?:string}>}>`

- [x] **Step 1: Research videos.** For each stage, run YouTube searches (WebSearch / WebFetch on `https://www.youtube.com/results?search_query=...`) for the trail centres and named trails on the route. Candidate queries:
  - 1.1 Ballater: "Ballater mountain bike", "Cambus o' May MTB", "Deeside trails Ballater"
  - 1.2 Aboyne: "Aboyne mountain bike trails", "Aboyne Bike Park"
  - 1.3 Scolty: "Scolty Hill mountain bike", "Scolty trails Banchory"
  - 2.1 Pitfichie: "Pitfichie mountain bike", "Pitfichie red route"
  - 2.2 Glenlivet: "Glenlivet mountain bike trails", "Glenlivet red trail"
  - 3 Laggan: "Laggan Wolftrax", "Laggan Wolftrax red black"
  - 4 Dunkeld: "Dunkeld mountain bike", "Dunkeld enduro trails", "Craigvinean"
  - 5 Yair Inners: "Yair Forest mountain bike", "Innerleithen trails", "Innerleithen Golfie"
  - 6 Golfie Glentress: "Golfie Innerleithen", "Glentress red route", "Glentress black"
  Pick 2 to 4 per stage that show riding on the trails. Record the 11-character video ID and title.

- [x] **Step 2: Write `stages.js`** with this shape, filled with the researched IDs:

```js
// Stage data for the Trans Caledonia 2026 preview page.
// To add a video: find the 11-character ID in the YouTube URL (youtube.com/watch?v=ID)
// and append { id: "ID", title: "..." } to the stage's videos array.
globalThis.STAGES = [
  { day: "1.1", name: "Ballater", komootId: "3022879431", distanceKm: 19.1, elevationM: 650, duration: "2:29",
    searchQuery: "Ballater mountain bike trail", videos: [] },
  { day: "1.2", name: "Aboyne", komootId: "2948015571", distanceKm: 22.4, elevationM: 640, duration: "2:30",
    searchQuery: "Aboyne mountain bike trails", videos: [] },
  { day: "1.3", name: "Scolty", komootId: "2948021354", distanceKm: 7.6, elevationM: 150, duration: "0:36",
    searchQuery: "Scolty Hill mountain bike", videos: [] },
  { day: "2.1", name: "Pitfichie", komootId: "3022983698", distanceKm: 16.1, elevationM: 670, duration: "2:22",
    searchQuery: "Pitfichie mountain bike", videos: [] },
  { day: "2.2", name: "Glenlivet", komootId: "2948027139", distanceKm: 9.8, elevationM: 360, duration: "1:11",
    searchQuery: "Glenlivet mountain bike trails", videos: [] },
  { day: "3", name: "Laggan", komootId: "2948028245", distanceKm: 27.2, elevationM: 1040, duration: "3:19",
    searchQuery: "Laggan Wolftrax mountain bike", videos: [] },
  { day: "4", name: "Dunkeld", komootId: "3023308781", distanceKm: 45.0, elevationM: 1490, duration: "5:01",
    searchQuery: "Dunkeld mountain bike trails", videos: [] },
  { day: "5", name: "Yair Inners", komootId: "2948030306", distanceKm: 58.7, elevationM: 1780, duration: "6:04",
    searchQuery: "Innerleithen mountain bike trails", videos: [] },
  { day: "6", name: "Golfie Glentress", komootId: "2948031069", distanceKm: 43.5, elevationM: 1640, duration: "5:09",
    searchQuery: "Glentress Golfie mountain bike", videos: [] },
];
```

- [x] **Step 3: Commit**

```bash
git add stages.js
git commit -m "Add stage data with curated trail videos"
```

---

### Task 2: Video and tour verification script

**Files:**
- Create: `scripts/check-videos.mjs`

**Interfaces:**
- Consumes: `globalThis.STAGES` from `stages.js`.

- [x] **Step 1: Write the script**

```js
// Verifies every YouTube video ID and komoot tour ID in stages.js.
// Run: node scripts/check-videos.mjs
import "../stages.js";
const stages = globalThis.STAGES;
let failures = 0;
for (const s of stages) {
  const tour = await fetch(`https://www.komoot.com/tour/${s.komootId}`, { method: "HEAD", redirect: "follow" });
  if (!tour.ok) { failures++; console.log(`FAIL komoot ${s.day} ${s.name}: HTTP ${tour.status}`); }
  for (const v of s.videos) {
    if (!/^[A-Za-z0-9_-]{11}$/.test(v.id)) { failures++; console.log(`FAIL bad id ${s.day}: ${v.id}`); continue; }
    const r = await fetch(`https://www.youtube.com/oembed?url=https://youtu.be/${v.id}&format=json`);
    if (!r.ok) { failures++; console.log(`FAIL video ${s.day} ${s.name}: ${v.id} (${v.title}) HTTP ${r.status}`); }
  }
  console.log(`ok ${s.day} ${s.name}: ${s.videos.length} videos`);
}
console.log(failures ? `${failures} failure(s)` : "all good");
process.exit(failures ? 1 : 0);
```

- [x] **Step 2: Run it.** `node scripts/check-videos.mjs`. Expected: `all good`, exit 0. Fix or drop any failing IDs in `stages.js`.

- [x] **Step 3: Commit**

```bash
git add scripts/check-videos.mjs stages.js
git commit -m "Add video and tour verification script"
```

---

### Task 3: index.html

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: `globalThis.STAGES` via `<script src="stages.js">`.

- [x] **Step 1: Write `index.html`.** Requirements the implementation must meet:
  - `<title>Trans Caledonia 2026 trail previews</title>`, viewport meta.
  - Header: h1 "Trans Caledonia 2026", subtitle "Trail previews for all nine stages", link to `https://www.komoot.com/collection/4330978/-trans-caledonia-2026`, computed totals (sum of distanceKm and elevationM).
  - For each stage, a `<section class="stage" id="stage-<day with dot replaced by dash>">` containing:
    - `<h2>` with "Day {day} · {name}" wrapped in a link to `https://www.komoot.com/tour/{komootId}`.
    - Small stats line: `{distanceKm} km · {elevationM} m up · {duration} h`.
    - `<iframe src="https://www.komoot.com/tour/{komootId}/embed?profile=1" loading="lazy" allowfullscreen>` with a fixed height of 420px, 100% width.
    - `<div class="videos">` with one `<button class="video" data-id="{id}">` per video containing `<img src="https://i.ytimg.com/vi/{id}/hqdefault.jpg" loading="lazy" alt="">`, a play glyph, and the title (and note if present). Clicking replaces the button with `<iframe src="https://www.youtube-nocookie.com/embed/{id}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen>` at 16:9.
    - If `videos` is empty, a `<p class="empty">No videos found yet for this stage.</p>`.
    - `<a class="search" href="https://www.youtube.com/results?search_query={encodeURIComponent(searchQuery)}" target="_blank" rel="noopener">Search YouTube</a>`.
  - Sticky top nav with one small link per stage (`#stage-…`).
  - CSS: system font stack, max-width 1100px, cards with light border and radius, videos grid `repeat(auto-fill, minmax(260px, 1fr))`, dark-mode via `prefers-color-scheme`.
  - Rendering built with DOM APIs or a template string; escape titles with `textContent`, never innerHTML with raw data.

- [x] **Step 2: Verify from disk.** `open index.html`. Check: 9 cards, komoot maps load, clicking a thumbnail plays the video, no console errors.

- [x] **Step 3: Verify at phone width.** Resize the window to ~390px wide. Nav wraps, one column, video tiles stack.

- [x] **Step 4: Commit**

```bash
git add index.html
git commit -m "Add trail preview page"
```

---

### Task 4: README, GitHub repo, Pages

**Files:**
- Create: `README.md`

- [x] **Step 1: Write README.md** covering: what the page is, the live link `https://radulovic82.github.io/trans-caledonia-2026/`, the komoot collection link, how to add a video (edit `stages.js`, run `node scripts/check-videos.mjs`, open a PR), and a "Coverage notes" section listing stages with thin or no footage.

- [x] **Step 2: Create the public repo and push**

```bash
gh repo create Radulovic82/trans-caledonia-2026 --public --source=. --remote=origin \
  --description "Trail preview page for the Trans Caledonia 2026 stages" --push
```

- [x] **Step 3: Enable Pages from main root**

```bash
gh api -X POST repos/Radulovic82/trans-caledonia-2026/pages \
  -f 'source[branch]=main' -f 'source[path]=/'
```

- [x] **Step 4: Verify the live page.** Poll `curl -sI https://radulovic82.github.io/trans-caledonia-2026/ | head -1` until `200`, then open it in the browser and repeat the Task 3 checks.

- [x] **Step 5: Commit README** (before push if written first; otherwise push again)

```bash
git add README.md && git commit -m "Add README" && git push
```
