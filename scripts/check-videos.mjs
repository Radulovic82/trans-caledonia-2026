// Verifies every YouTube video ID and komoot tour ID in stages.js.
// Run: node scripts/check-videos.mjs
import "../stages.js";
const stages = globalThis.STAGES;
let failures = 0;
const ok = (r) => r.ok || r.status === 405; // komoot may reject HEAD but the tour exists
async function checkVideo(label, v) {
  if (!/^[A-Za-z0-9_-]{11}$/.test(v.id)) { failures++; console.log(`FAIL bad id ${label}: ${v.id}`); return; }
  const r = await fetch(`https://www.youtube.com/oembed?url=https://youtu.be/${v.id}&format=json`);
  if (!r.ok) { failures++; console.log(`FAIL video ${label}: ${v.id} (${v.title}) HTTP ${r.status}`); }
}
for (const v of globalThis.COLLECTION.videos) await checkVideo("collection", v);
for (const s of stages) {
  const tour = await fetch(`https://www.komoot.com/tour/${s.komootId}`, { method: "HEAD", redirect: "follow" });
  if (!ok(tour)) { failures++; console.log(`FAIL komoot ${s.day} ${s.name}: HTTP ${tour.status}`); }
  for (const v of s.videos) await checkVideo(`${s.day} ${s.name}`, v);
  console.log(`ok ${s.day} ${s.name}: ${s.videos.length} videos`);
}
console.log(failures ? `${failures} failure(s)` : "all good");
process.exit(failures ? 1 : 0);
