// Verifies every YouTube video ID and komoot tour ID in stages.js.
// Run: node scripts/check-videos.mjs
import "../stages.js";
const stages = globalThis.STAGES;
let failures = 0, total = 0;
const seen = new Map();
async function checkVideo(label, v) {
  total++;
  if (!/^[A-Za-z0-9_-]{11}$/.test(v.id)) { failures++; console.log(`FAIL bad id ${label}: ${v.id}`); return; }
  if (seen.has(v.id)) console.log(`note: ${v.id} appears in both "${seen.get(v.id)}" and "${label}"`);
  seen.set(v.id, label);
  const r = await fetch(`https://www.youtube.com/oembed?url=https://youtu.be/${v.id}&format=json`);
  if (r.status === 401) { console.log(`warn ${label}: ${v.id} (${v.title}) has embedding disabled; the link still works`); return; }
  if (!r.ok) { failures++; console.log(`FAIL video ${label}: ${v.id} (${v.title}) HTTP ${r.status}`); }
}
for (const v of globalThis.COLLECTION.videos) await checkVideo("collection", v);
for (const s of stages) {
  const tour = await fetch(`https://www.komoot.com/tour/${s.komootId}`, { method: "HEAD", redirect: "follow" });
  if (!(tour.ok || tour.status === 405)) { failures++; console.log(`FAIL komoot ${s.day} ${s.name}: HTTP ${tour.status}`); }
  let n = 0;
  for (const t of s.timed) { for (const v of t.videos) { await checkVideo(`S${t.n} ${t.name}`, v); n++; } }
  for (const v of s.areaVideos) { await checkVideo(`${s.day} ${s.name} area`, v); n++; }
  const empty = s.timed.filter((t) => !t.videos.length).map((t) => `S${t.n} ${t.name}`);
  console.log(`ok ${s.day} ${s.name}: ${s.timed.length} timed stages, ${n} videos${empty.length ? `, no videos for ${empty.join(", ")}` : ""}`);
}
console.log(failures ? `${failures} failure(s) of ${total}` : `all good, ${total} videos checked`);
process.exit(failures ? 1 : 0);
