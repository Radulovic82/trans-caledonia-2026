# Trans Caledonia 2026 trail preview page

## Purpose

A single public web page that lists all nine stages of the komoot collection
"Trans Caledonia 2026" (https://www.komoot.com/collection/4330978/-trans-caledonia-2026)
and, for each stage, links curated YouTube videos of the trails so riders can preview
the terrain before the event.

## Delivery

- Public GitHub repo `Radulovic82/trans-caledonia-2026`.
- Hosted on GitHub Pages from the `main` branch root.
- The page must also work when `index.html` is downloaded and opened from disk.

## Files

- `index.html`. The whole site. Inline CSS, inline JS, no build step, no framework.
  Stage data lives in a clearly commented JS array near the top of the file so it can
  be edited without touching the rest of the page.
- `README.md`. What the page is, the Pages link, and how to add a video (edit the
  array, open a pull request).
- `docs/superpowers/specs/`. This spec.

## Data model

One entry per stage, in collection order:

```
{
  day: "1.1",
  name: "Ballater",
  komootId: "3022879431",
  distanceKm: 19.1, elevationM: 650, duration: "2:29",
  searchQuery: "Ballater mountain bike trail",
  videos: [ { id: "<youtube id>", title: "...", note: "optional one-liner" } ]
}
```

Stats are shown only if present; the komoot embed already displays them, so they are
optional and kept small.

## Page layout

- Header: collection title, short subtitle, link to the komoot collection, total
  distance and elevation.
- Nine stage cards in order. Each card:
  - Stage label and name, linking to the komoot tour.
  - komoot iframe embed of the tour (`https://www.komoot.com/tour/<id>/embed?profile=1`).
  - Row of video tiles. Each tile shows the YouTube thumbnail and title; clicking swaps
    in the YouTube player iframe. No player iframes load until clicked.
  - A "Search YouTube" link using `searchQuery` as fallback.
  - If a stage has no videos, the card says so and shows only the search link.
- Responsive: one column on phones, video tiles wrap.

## Video research

For each stage, search YouTube for the trail centres and named trails along the route
(Ballater, Aboyne, Scolty, Pitfichie, Glenlivet, Laggan Wolftrax, Dunkeld, Yair and
Innerleithen, Golfie and Glentress). Pick 2 to 4 videos per stage that show riding on
the actual trails. Record thin coverage in the README.

## Out of scope

- Live YouTube API search.
- Any server, database, or login.
- Editing UI in the page itself.

## Testing

- Open `index.html` from disk and via GitHub Pages.
- Every komoot embed loads.
- Every video ID resolves to a playable video (checked via the oEmbed endpoint).
- Page renders sensibly at phone width.
