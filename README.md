# Trans Caledonia 2026 trail previews

A single page for the Trans Caledonia 2026 enduro (6 to 13 September 2026). It lists the
nine komoot routes from the collection
[Trans Caledonia 2026](https://www.komoot.com/collection/4330978/-trans-caledonia-2026),
embeds each route map, and breaks every route down into its timed stages with length,
drop, technicality and physicality from the race book. Each timed stage links YouTube
videos of that exact trail so you can preview it before riding it. The page also carries
the week at a glance schedule and the key information and mandatory kit list.

**Live page:** https://radulovic82.github.io/trans-caledonia-2026/

It also works offline: download `index.html` and `stages.js` into the same folder and
double-click `index.html`.

## Routes and timed stages

| Day | Route | Distance | Climb | Timed stages |
|-----|-------|----------|-------|--------------|
| 1.1 | Ballater | 19.1 km | 650 m | S1 Purple Gnome, S2 Heartbreak Ridge |
| 1.2 | Aboyne | 22.4 km | 640 m | S3 Masterblaster, S4 Rattus / Chix Lower, S5 Chutney |
| 1.3 | Scolty | 7.6 km | 150 m | S6 Boneyard into Corona |
| 2.1 | Pitfichie | 16.1 km | 670 m | S7 Tomb Steen, S8 Pitfichie DH, S9 Macchiato, S10 White Lady |
| 2.2 | Glenlivet | 9.8 km | 360 m | S11 Daimh Hard, S12 Mini DH |
| 3 | Laggan | 27.2 km | 1,040 m | S13 Mini Epic / Orca, S14 D&M, S15 Honey Monster, S16 Tombstone, S17 Laggan Brown, S18 Laggan Black, S19 Laggan Red |
| 4 | Dunkeld | 45.0 km | 1,490 m | S20 Dalmarnock, S21 Bambi's / 9.8, S22 Dunkeld DH, S23 Cairn to Cottage, S24 Rake n Ruin, S25 Crows Nest, S26 Rudder |
| 5 | Yair Inners | 58.7 km | 1,780 m | S27 Quarry into DD, S28 Ginger, S29 Angry Sheep, S30 Gold Run, S31 Cresta, S32 Matador |
| 6 | Golfie Glentress | 43.5 km | 1,640 m | S33 Big Baw, S34 Feed the Pony, S35 Dances with Wolves, S36 Flat White, S37 Repeat Offender, S38 Trail Fairy Plan, S39 Careless Whisper |

## Adding a video

1. Open `stages.js`.
2. Find the timed stage the video shows and append an entry to its `videos` array
   (or to the route's `areaVideos` if it covers the area generally):
   ```js
   { id: "dQw4w9WgXcQ", title: "What the video shows", note: "optional, e.g. channel or trail name" }
   ```
   The `id` is the 11-character value after `watch?v=` in the YouTube URL.
3. Run `node scripts/check-videos.mjs`. It confirms every video and komoot tour still resolves.
4. Open a pull request.

Good videos show a full run of the named trail, ideally recent.

## Coverage notes

- 38 of the 39 timed stages have at least one video, most have two or three. Only S1
  Purple Gnome at Ballater has none yet.
- Stage names are taken from the race book and may differ slightly from local trail names
  (for example Ginger is the Ginger Mullet descent at Yair, Laggan Black is Wolf of Badenoch).
- The race book, Rev 2.0, notes that stage details may be updated on 2 September. Check
  the official race book for the final word.
- Trans Caledonia's own 2026 route preview and recce clips are linked at the top of the page.

## Files

- `index.html` renders the page. No build step, no framework.
- `stages.js` holds the routes, timed stages, schedule and video data. This is the only file
  most contributors touch.
- `scripts/check-videos.mjs` verifies the data (Node 18 or newer).
