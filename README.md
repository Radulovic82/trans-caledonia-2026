# Trans Caledonia 2026 trail previews

A single page that lists all nine stages of the komoot collection
[Trans Caledonia 2026](https://www.komoot.com/collection/4330978/-trans-caledonia-2026)
and, for each stage, embeds the komoot route map and a handful of YouTube videos of the
trails so you can preview the terrain before riding it.

**Live page:** https://radulovic82.github.io/trans-caledonia-2026/

It also works offline: download `index.html` and `stages.js` into the same folder and
double-click `index.html`.

## Stages

| Day | Stage | Distance | Climb |
|-----|-------|----------|-------|
| 1.1 | Ballater | 19.1 km | 650 m |
| 1.2 | Aboyne | 22.4 km | 640 m |
| 1.3 | Scolty | 7.6 km | 150 m |
| 2.1 | Pitfichie | 16.1 km | 670 m |
| 2.2 | Glenlivet | 9.8 km | 360 m |
| 3 | Laggan | 27.2 km | 1,040 m |
| 4 | Dunkeld | 45.0 km | 1,490 m |
| 5 | Yair Inners | 58.7 km | 1,780 m |
| 6 | Golfie Glentress | 43.5 km | 1,640 m |

## Adding a video

1. Open `stages.js`.
2. Find the stage and append an entry to its `videos` array:
   ```js
   { id: "dQw4w9WgXcQ", title: "What the video shows", note: "optional, e.g. channel or trail name" }
   ```
   The `id` is the 11-character value after `watch?v=` in the YouTube URL.
3. Run `node scripts/check-videos.mjs`. It confirms every video and komoot tour still resolves.
4. Open a pull request.

Good videos show riding on the actual trails the stage uses. Trail names taken from the
komoot waypoints are noted on the relevant videos (for example Boneyard at Scolty,
Tomb Steen at Pitfichie, Grey Area and Mini DH at Glenlivet).

## Coverage notes

- Every stage currently has four videos. Trail centres like Laggan, Glentress, Golfie and
  Dunkeld have plenty of footage, so the picks there are a small sample.
- The exact timed stage lines are not always public trail centre routes. Where the komoot
  waypoints did not name a trail (Ballater, Aboyne, Dunkeld, Yair) the videos cover the
  best known trails in that area rather than guaranteed race lines.
- Trans Caledonia's own 2026 route preview and recce clips are linked at the top of the page.

## Files

- `index.html` renders the page. No build step, no framework.
- `stages.js` holds the stage and video data. This is the only file most contributors touch.
- `scripts/check-videos.mjs` verifies the data (Node 18 or newer).
