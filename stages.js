// Stage data for the Trans Caledonia 2026 preview page.
//
// To add a video: find the 11-character ID in the YouTube URL
// (youtube.com/watch?v=ID) and append { id: "ID", title: "..." } to the
// stage's videos array. "note" is optional. Then run
// `node scripts/check-videos.mjs` and open a pull request.

globalThis.COLLECTION = {
  title: "Trans Caledonia 2026",
  url: "https://www.komoot.com/collection/4330978/-trans-caledonia-2026",
  videos: [
    { id: "nU8rb7Zkk94", title: "Trans Caledonia 2026 - Where we're going!", note: "Official event preview" },
    { id: "kKUOxs3YtEM", title: "Trans Caledonia - 1 Minute From Our 6-Day Recce", note: "Official recce footage" },
  ],
};

globalThis.STAGES = [
  {
    day: "1.1", name: "Ballater", komootId: "3022879431",
    distanceKm: 19.1, elevationM: 650, duration: "2:29",
    searchQuery: "Ballater mountain bike trails",
    videos: [
      { id: "OfrCoevWLWc", title: "The Finest Singletrack for your MTB in Scotland || Ballater and Braemar", note: "Scotty Laughland" },
      { id: "iatudLaC6A0", title: "Heartbreak Ridge Ballater MTB", note: "Street Pigeon MTB" },
      { id: "5GSk555NTZo", title: "Ballater MTB | Mastermind", note: "Street Pigeon MTB" },
      { id: "hF-H4rGhsFE", title: "Ballater & Braemar: Storm, Kate Moss, Heartbreak Ridge", note: "alex737" },
    ],
  },
  {
    day: "1.2", name: "Aboyne", komootId: "2948015571",
    distanceKm: 22.4, elevationM: 640, duration: "2:30",
    searchQuery: "Aboyne mountain bike trails",
    videos: [
      { id: "p2S3U60Dagc", title: "Mountain Biking in Aboyne is Magic!", note: "Street Pigeon MTB" },
      { id: "zLUCHDsRdBw", title: "Aboyne mtb trails are amazing: Chix, Deliverance, Twisted Sister, Schwing", note: "alex737" },
      { id: "D_1M3SOpicg", title: "Aboyne Enduro all stages recce", note: "MTB Brian Bruce Martin" },
      { id: "nIOFZyTM-4Y", title: "The BEST of Aboyne MTB", note: "Mindful Trail Biker" },
    ],
  },
  {
    day: "1.3", name: "Scolty", komootId: "2948021354",
    distanceKm: 7.6, elevationM: 150, duration: "0:36",
    searchQuery: "Scolty Hill Banchory mountain bike",
    videos: [
      { id: "eXSDPoTBzaw", title: "Scolty - Boneyard", note: "MTB Scotland RAW. Boneyard is named on the stage" },
      { id: "RLZUVjjy4Nc", title: "The BEST Enduro Trail You've Never Heard Of? | Scolty MTB | Boneyard, Squamish AB, Corona", note: "" },
      { id: "aU5eLUJ0aHw", title: "THE BEST ROCK SLAB TRAILS IN SCOTLAND | SCOLTY W/ DAN FITTON", note: "Calum McBain" },
      { id: "YVlr2n3TzBc", title: "Scolty | Gnarly Squamish style MTB trails you won't believe are in the UK!", note: "Laura Jane & Wee Tam" },
    ],
  },
  {
    day: "2.1", name: "Pitfichie", komootId: "3022983698",
    distanceKm: 16.1, elevationM: 670, duration: "2:22",
    searchQuery: "Pitfichie mountain bike trails",
    videos: [
      { id: "dzKCPcAnn7k", title: "Pitfichie Enduro 2024 - Tomb Steen Stage Preview", note: "Tomb Steen is named on the stage" },
      { id: "VEBI5ZRkG8k", title: "Pitfichie - Tomb Steen", note: "MTB Scotland RAW" },
      { id: "hWaqpYtemAA", title: "Pitfichie Forest MTB | Scotland's amazing granite rock Enduro & DH trails!", note: "Laura Jane & Wee Tam" },
      { id: "yDPaObO61Lw", title: "These trails will eat you alive! | Pitfichie MTB Trails", note: "Street Pigeon MTB" },
    ],
  },
  {
    day: "2.2", name: "Glenlivet", komootId: "2948027139",
    distanceKm: 9.8, elevationM: 360, duration: "1:11",
    searchQuery: "Bike Glenlivet mountain bike trails",
    videos: [
      { id: "5twZ0bm3v4Y", title: "Glenlivet - The Grey Area", note: "Grey Area is named on the stage" },
      { id: "Y2SmD42VnBs", title: "The Grey Area - Glenlivet 2025", note: "Alexander Fyfe" },
      { id: "WGa5UTX9NII", title: "Mini DH - Glenlivet 2025", note: "Mini DH is the stage finish" },
      { id: "4HGv1gDDcwM", title: "Glenlivet - Glenlivet Red (The Big One)", note: "MTB Scotland RAW" },
    ],
  },
  {
    day: "3", name: "Laggan", komootId: "2948028245",
    distanceKm: 27.2, elevationM: 1040, duration: "3:19",
    searchQuery: "Laggan Wolftrax mountain bike",
    videos: [
      { id: "wnOmYjXU3F4", title: "Rock Slabs And Rain Drops - Laggan Wolftrax - Mtb Scotland", note: "McTrail Guide" },
      { id: "MgLwbe7H7h4", title: "Wolf Of Badenoch Black - RAW GoPro - Laggan Wolftrax", note: "Phil Crombie MTB" },
      { id: "06SlFwAaisA", title: "Riding The EPIC Red Trails At LAGGAN WOLFTRAX Trail Centre!", note: "The Search MTB" },
      { id: "qQZoqaslRc8", title: "The Other Side of Laggan Wolftrax Demands Respect! | MTB Scotland", note: "Laura Jane & Wee Tam" },
    ],
  },
  {
    day: "4", name: "Dunkeld", komootId: "3023308781",
    distanceKm: 45.0, elevationM: 1490, duration: "5:01",
    searchQuery: "Dunkeld mountain bike trails",
    videos: [
      { id: "-OiYbPqopJA", title: "The BEST Hand Built MTB Trails in Scotland || Dunkeld, Comrie Croft and Aberfeldy", note: "Scotty Laughland" },
      { id: "BVZEmGkFpD8", title: "Follow a Pro Down Epic MTB Trails In Dunkeld - Must Ride!", note: "The Loam Wolf" },
      { id: "aaO6c31hSl0", title: "The Dunkeld Enduro 2023 Epic Weekend - 10 Stages - 2 Days", note: "Dan San MTB" },
      { id: "GCYVKGBIz9I", title: "Dunkeld... Great Trails That ALWAYS improve your riding!", note: "Laura Jane & Wee Tam" },
    ],
  },
  {
    day: "5", name: "Yair Inners", komootId: "2948030306",
    distanceKm: 58.7, elevationM: 1780, duration: "6:04",
    searchQuery: "Yair Forest Innerleithen mountain bike",
    videos: [
      { id: "OwEgI_st2Ig", title: "I was not expecting that! Yair MTB", note: "Street Pigeon MTB" },
      { id: "luk5rxmFZyk", title: "Yair Enduro Trails", note: "Street Pigeon MTB" },
      { id: "EtfN-QbTMvk", title: "Raelees Revenge into Drop and Sprint into The Scorpion, Yair Forest", note: "Dave MTB" },
      { id: "iQja4s5V7R4", title: "Are Innerleithen DH Trails The Best Of The Tweed Valley?", note: "Trail Hub" },
    ],
  },
  {
    day: "6", name: "Golfie Glentress", komootId: "2948031069",
    distanceKm: 43.5, elevationM: 1640, duration: "5:09",
    searchQuery: "Golfie Innerleithen Glentress mountain bike",
    videos: [
      { id: "Jq6ySAmt6ro", title: "What To Expect When Riding The GOLFIE INNERLEITHEN!", note: "Trail Hub" },
      { id: "-EWvJYctMU4", title: "GOLFIE MTB - 6 of the BEST Tweed Valley Trails", note: "UPHILLPHILL and McTrail Guide" },
      { id: "GlPJukYXge8", title: "MEGA TRACK - Innerleithen Golfie's Best Trail Full Run!", note: "Tom Wilson" },
      { id: "Vz3xmS_0Qf4", title: "Glentress Red MTB Trail Highlights", note: "The Search MTB" },
    ],
  },
];
