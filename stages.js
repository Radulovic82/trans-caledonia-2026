// Stage data for the Trans Caledonia 2026 preview page.
//
// Route data comes from the komoot collection. Timed stage names, stats and day
// descriptions come from the Trans Caledonia Race Book 2026 (Rev 2.0).
// Timed stage stats: lengthM = stage length in metres, dropM = descent in metres,
// tech = technicality 1 to 5, phys = physicality 1 to 5.
//
// To add a video: find the 11-character ID in the YouTube URL
// (youtube.com/watch?v=ID) and append { id: "ID", title: "..." } to the
// videos array of the timed stage it shows, or to the route's areaVideos if it
// covers the area generally. "note" is optional. Then run
// `node scripts/check-videos.mjs` and open a pull request.

globalThis.COLLECTION = {
  title: "Trans Caledonia 2026",
  dates: "6 to 13 September 2026",
  tagline: "Six days. Thirty-nine timed stages. Royal Deeside, the Cairngorms and Highlands, Perthshire and the Tweed Valley.",
  url: "https://www.komoot.com/collection/4330978/-trans-caledonia-2026",
  site: "https://www.trans-caledonia.com",
  packingList: "https://keep.google.com/#LIST/1HYXOKSz-TCYwKmiMcBbFJ2JJB6Q2ErUGsXY8Ox9i_Gv6GgqEqluMVhH5zCGY-c4",
  videos: [
    { id: "nU8rb7Zkk94", title: "Trans Caledonia 2026 - Where we're going!", note: "Official event preview" },
    { id: "kKUOxs3YtEM", title: "Trans Caledonia - 1 Minute From Our 6-Day Recce", note: "Official recce footage" },
  ],
  // Week at a glance, from the race book. Times are approximate.
  week: [
    { day: "Day 0", date: "Sun 6 Sep", bus: "13:00 to 13:30", plan: "Pick-up at Peebles Hydro or Moxy Edinburgh Airport, transfer to Aberdeen, sign-on and briefing", finish: "17:00", stay: "Ardoe House" },
    { day: "Day 1", date: "Mon 7 Sep", bus: "08:00", plan: "Ballater stages 1 to 2, Aboyne stages 3 to 5, Scolty stage 6", lunch: "12:45 to 13:45", finish: "16:30 to 17:30", stay: "Ardoe House" },
    { day: "Day 2", date: "Tue 8 Sep", bus: "08:30", plan: "Pitfichie stages 7 to 10, Glenlivet stages 11 to 12", lunch: "12:00 to 13:00", finish: "15:30 to 16:30", stay: "Badaguish" },
    { day: "Day 3", date: "Wed 9 Sep", bus: "08:30", plan: "Laggan Strathmashie stages 13 to 17, Laggan Wolftrax stages 18 to 19", lunch: "13:30 to 14:15", finish: "15:30 to 16:30", stay: "Pitlochry" },
    { day: "Day 4", date: "Thu 10 Sep", bus: "08:30", plan: "Dunkeld Craigvinean stages 20 to 23, Birnam and Newtyle stages 24 to 26", lunch: "12:45 to 13:45", finish: "16:00 to 17:00", stay: "Peebles Hydro" },
    { day: "Day 5", date: "Fri 11 Sep", bus: "08:30", plan: "Yair stages 27 to 28, Traquair stage 29, Innerleithen stages 30 to 32", lunch: "12:30 to 13:30", finish: "16:00 to 17:00", stay: "Peebles Hydro" },
    { day: "Day 6", date: "Sat 12 Sep", bus: "08:00", plan: "Caberston and Golfie stages 33 to 37, Glentress stages 38 to 39, then event village and ceilidh", lunch: "12:45 to 13:45", finish: "15:30 to 16:30", stay: "Peebles Hydro" },
    { day: "Day 7", date: "Sun 13 Sep", bus: "08:00", plan: "Breakfast, check-out by 11:00, airport shuttles at 08:00, 09:00 and 11:45", stay: "" },
  ],
  // Key information from the race book.
  essentials: [
    "Be ready to load bikes 15 minutes before the stated departure time. Prep kit and bike the night before.",
    "Breakfast, lunch, post-race snack and dinner are provided. Carry your own snacks for between stages.",
    "Carry water for a full day. Water is available at lunch but not guaranteed elsewhere on the hill.",
    "Mandatory kit: full face helmet (removable chin guard allowed), waterproof jacket, pack with 1.5 litres of water and snacks, phone with WhatsApp plus a navigation device, and bike tools (multi-tool, tube or tubeless repair, pump or CO2, chain links).",
    "Timing chips go on the right hand side of the fork and stay on for the week.",
    "Routes are on komoot. Download them offline before you arrive. Signs can be moved or missed, so do not rely on them alone.",
    "Bike wash with pressure washers is available every evening from Monday. No mechanic support in the mornings.",
    "Check yourself for ticks through the week.",
  ],
};

globalThis.STAGES = [
  {
    day: "1.1", name: "Ballater", komootId: "3022879431",
    distanceKm: 19.1, elevationM: 650, duration: "2:29",
    date: "Monday 7 September", region: "Royal Deeside, Aberdeenshire",
    description: "Race week opens on Royal Deeside. From Ballater Square it is straight into the granite and heather classics above the Dee. Stage 1, Purple Gnome, is short and sweet, so ease yourself in. Then a long climb to the iconic Heartbreak Ridge with views across to Lochnagar and the Cairngorm Munros. Watch your back wheel on the granite rocks.",
    searchQuery: "Ballater mountain bike trails",
    timed: [
      { n: 1, name: "Purple Gnome", lengthM: 700, dropM: 125, tech: 2, phys: 1, videos: [] },
      { n: 2, name: "Heartbreak Ridge", lengthM: 4000, dropM: 350, tech: 3, phys: 5, videos: [
        { id: "Usz_qvWj15Q", title: "Heartbreak Ridge - Ballater - Full run", note: "TrailDazed" },
        { id: "iatudLaC6A0", title: "Heartbreak Ridge Ballater MTB", note: "Street Pigeon MTB" },
        { id: "DR8x6aYsdVc", title: "Heartbreak Ridge Ballater POV", note: "Adam Brayton" },
      ] },
    ],
    areaVideos: [
      { id: "OfrCoevWLWc", title: "The Finest Singletrack for your MTB in Scotland || Ballater and Braemar", note: "Scotty Laughland" },
      { id: "dC_wCJz7u-k", title: "Ballater's Finest With 20Twenty", note: "McTrail Guide" },
    ],
  },
  {
    day: "1.2", name: "Aboyne", komootId: "2948015571",
    distanceKm: 22.4, elevationM: 640, duration: "2:30",
    date: "Monday 7 September", region: "Glen Tanar and Birse, Aberdeenshire",
    description: "Glen Tanar serves up the physical Masterblaster, while Birse delivers the Rattus slabs and Chutney. Lunch sits between the Ballater and Aboyne blocks.",
    searchQuery: "Aboyne mountain bike trails",
    timed: [
      { n: 3, name: "Masterblaster", lengthM: 2000, dropM: 220, tech: 3, phys: 5, videos: [
        { id: "toaldjPFqmg", title: "Masterblaster - Aboyne 2023", note: "Alexander Fyfe" },
        { id: "ph3hIn0Qrw8", title: "Aboyne Enduro 2025 - Masterblaster Stage Preview", note: "DoonThaBrae Events" },
      ] },
      { n: 4, name: "Rattus / Chix Lower", lengthM: 1000, dropM: 190, tech: 5, phys: 2, videos: [
        { id: "bk2zSpPfG0I", title: "Aboyne - Rattus Norvegicus", note: "Aidan Wood" },
        { id: "42RsASiLZrU", title: "Rattus + Brown Rat - Aboyne", note: "Sunny_with_a_chance_" },
        { id: "1gwn3iduso0", title: "Chix - Aboyne 2024", note: "Alexander Fyfe" },
      ] },
      { n: 5, name: "Chutney", lengthM: 1700, dropM: 150, tech: 1, phys: 2, videos: [
        { id: "Mbr71fJ5uWY", title: "Aboyne - Chutney (Part 1, 2 & 3)", note: "MTB Scotland RAW" },
        { id: "L17og_j4WSQ", title: "Chutney - Aboyne", note: "Dan San MTB" },
      ] },
    ],
    areaVideos: [
      { id: "p2S3U60Dagc", title: "Mountain Biking in Aboyne is Magic!", note: "Street Pigeon MTB" },
      { id: "GIkTvbi3BEg", title: "Best enduro trails! Aboyne MTB Trails: Deliverance, Brown Rat, Rattus, Panic Button", note: "Mud and no makeup MTB" },
    ],
  },
  {
    day: "1.3", name: "Scolty", komootId: "2948021354",
    distanceKm: 7.6, elevationM: 150, duration: "0:36",
    date: "Monday 7 September", region: "Scolty Hill, Banchory",
    description: "The day finishes with a Deeside classic: Boneyard into Corona, ending on the banks of the River Dee. A proper Aberdeenshire welcome.",
    searchQuery: "Scolty Hill Banchory mountain bike",
    timed: [
      { n: 6, name: "Boneyard into Corona", lengthM: 1700, dropM: 150, tech: 4, phys: 4, videos: [
        { id: "F_D89mt4ttU", title: "Boneyard - Scolty", note: "Alexander Fyfe" },
        { id: "eXSDPoTBzaw", title: "Scolty - Boneyard", note: "MTB Scotland RAW" },
        { id: "8yGZBUCh_gc", title: "SCOLTY | Corona Drop / Corona Time", note: "Point of Lew" },
        { id: "6LFxnyGQU_E", title: "Corona Time - Scolty", note: "Gregor Price" },
      ] },
    ],
    areaVideos: [
      { id: "RLZUVjjy4Nc", title: "The BEST Enduro Trail You've Never Heard Of? | Scolty MTB | Boneyard, Squamish AB, Corona", note: "TheExtraCrank" },
      { id: "aU5eLUJ0aHw", title: "THE BEST ROCK SLAB TRAILS IN SCOTLAND | SCOLTY W/ DAN FITTON", note: "Calum McBain" },
    ],
  },
  {
    day: "2.1", name: "Pitfichie", komootId: "3022983698",
    distanceKm: 16.1, elevationM: 670, duration: "2:22",
    date: "Tuesday 8 September", region: "Pitfichie Forest, Don Valley, Aberdeenshire",
    description: "Day 2 heads into the Don Valley and Pitfichie Forest, famed for granite slabs and fast, rocky DH tracks. Tomb Steen warms you up before the classic rocky Pitfichie DH. Enjoy the flow of Macchiato before tackling the infamous White Lady rock and root garden. Watch your back wheel, the granite packs a punch.",
    searchQuery: "Pitfichie mountain bike trails",
    timed: [
      { n: 7, name: "Tomb Steen", lengthM: 1100, dropM: 120, tech: 2, phys: 2, videos: [
        { id: "dzKCPcAnn7k", title: "Pitfichie Enduro 2024 - Tomb Steen Stage Preview", note: "DoonThaBrae Events" },
        { id: "-P7TUm9uu8A", title: "Tomb Steen - Pitfichie 2022", note: "Alexander Fyfe" },
      ] },
      { n: 8, name: "Pitfichie DH", lengthM: 1300, dropM: 170, tech: 4, phys: 3, videos: [
        { id: "zRN0LygC9Tw", title: "Pitfichie - Pitfichie DH", note: "MTB Scotland RAW" },
        { id: "Ma05q2slTo4", title: "HOW TO FIND THE FASTEST LINE | PITFICHIE DOWNHILL", note: "Calum McBain" },
        { id: "bvYHGwzwgek", title: "Dialled In Downhill Track Previews | Pitfichie | 2025", note: "Dialled In Downhill" },
      ] },
      { n: 9, name: "Macchiato", lengthM: 1200, dropM: 170, tech: 3, phys: 2, videos: [
        { id: "WJ6CUubTV9E", title: "Macchiato - Pitfichie", note: "Alexander Fyfe" },
        { id: "xRXpdzR3twA", title: "Pitfichie - Macchiato", note: "MTB Scotland RAW" },
      ] },
      { n: 10, name: "White Lady", lengthM: 1000, dropM: 130, tech: 3, phys: 3, videos: [
        { id: "9f5k6K1rxI4", title: "White Lady (Boglouster) - Pitfichie", note: "Alexander Fyfe" },
        { id: "PraNLzE0rCw", title: "Doon tha Brae - Pitfichie Enduro - White Lady", note: "seanridesbikes" },
      ] },
    ],
    areaVideos: [
      { id: "hWaqpYtemAA", title: "Pitfichie Forest MTB | Scotland's amazing granite rock Enduro & DH trails!", note: "Laura Jane & Wee Tam" },
      { id: "JkaH10jRdW0", title: "Classic Scottish downhill enduro MTB trails | Pitfichie MTB | Phoenix DH Macchiato", note: "Mud and no makeup MTB" },
    ],
  },
  {
    day: "2.2", name: "Glenlivet", komootId: "2948027139",
    distanceKm: 9.8, elevationM: 360, duration: "1:11",
    date: "Tuesday 8 September", region: "Bike Glenlivet, Moray",
    description: "After lunch it is into whisky country at Glenlivet, with a mix of trail centre and natural trails. Daimh Hard first, then Mini DH to finish. There may even be a wee dram waiting at the bottom. The night is at Badaguish Lodges in the Cairngorms.",
    searchQuery: "Bike Glenlivet mountain bike trails",
    timed: [
      { n: 11, name: "Daimh Hard", lengthM: 3000, dropM: 300, tech: 3, phys: 5, videos: [
        { id: "3BcMqT34W8Y", title: "Glenlivet - Daimh Hard", note: "MTB Scotland RAW" },
        { id: "H0eG-YIKjwc", title: "Daimh Hard - Bike Glenlivet 2022", note: "Alexander Fyfe" },
        { id: "t5rI2sTsz4w", title: "Glenlivet Enduro 2025 - Daimh Hard Stage Preview", note: "DoonThaBrae Events" },
      ] },
      { n: 12, name: "Mini DH", lengthM: 1000, dropM: 100, tech: 2, phys: 1, videos: [
        { id: "sSHdWc5ZRD8", title: "Glenlivet - Mini DH", note: "MTB Scotland RAW" },
        { id: "WGa5UTX9NII", title: "Mini DH - Glenlivet 2025", note: "Alexander Fyfe" },
      ] },
    ],
    areaVideos: [
      { id: "ocWGCpkBkMk", title: "Glenlivet MTB Trails are getting BIGGER and BETTER!", note: "Street Pigeon MTB" },
      { id: "4HGv1gDDcwM", title: "Glenlivet - Glenlivet Red (The Big One)", note: "MTB Scotland RAW" },
    ],
  },
  {
    day: "3", name: "Laggan", komootId: "2948028245",
    distanceKm: 27.2, elevationM: 1040, duration: "3:19",
    date: "Wednesday 9 September", region: "Strathmashie and Wolftrax, Highlands",
    description: "A full Highland day. The morning traverses Strathmashie, starting with a hike-a-bike to the top of Mini Epic, worth every step for the views towards Ben Nevis. Then D&M before crossing to Dùn dà Làmh, an ancient Pictish fort, home to Honey Monster, Tombstone and Laggan Brown. After lunch it is pure Wolftrax: the infamous Wolf of Badenoch, full of slabs and blind crests (main line with confidence), followed by the flowy Laggan Red to finish. Then south to Pitlochry with pizza waiting.",
    searchQuery: "Laggan Wolftrax mountain bike",
    timed: [
      { n: 13, name: "Mini Epic / Orca", lengthM: 1800, dropM: 260, tech: 4, phys: 5, videos: [
        { id: "AlvR7lcfvYE", title: "Orca - Laggan 2025", note: "Alexander Fyfe" },
        { id: "rgcgxKhvUOg", title: "Laggan Enduro 2025 - Orca Stage Preview", note: "DoonThaBrae Events" },
        { id: "25YNoOJ53eQ", title: "Laggan Enduro Off Piste - Orca", note: "Dan San MTB" },
      ] },
      { n: 14, name: "D&M", lengthM: 900, dropM: 140, tech: 4, phys: 3, videos: [
        { id: "5R2nr90oAsE", title: "Lower D&M - Laggan 2025", note: "Alexander Fyfe" },
        { id: "vRDBw5j4k-4", title: "Laggan Moby and Upper D&M", note: "MTB Brian Bruce Martin" },
      ] },
      { n: 15, name: "Honey Monster", lengthM: 600, dropM: 120, tech: 3, phys: 2, videos: [
        { id: "GFAOo84kRms", title: "Honey Monster - Laggan", note: "McTrail Guide" },
        { id: "b1Lubmwjue0", title: "Honey Monster - Laggan MTB GoPro", note: "jonathan wilson" },
      ] },
      { n: 16, name: "Tombstone", lengthM: 600, dropM: 130, tech: 4, phys: 2, videos: [
        { id: "_6wL5D47Yws", title: "Tomb Stone - Laggan 2025", note: "Alexander Fyfe" },
      ] },
      { n: 17, name: "Laggan Brown", lengthM: 1000, dropM: 160, tech: 4, phys: 4, videos: [
        { id: "QnUjR3DL61A", title: "Laggan Brown | Scotland's Hardest MTB Trails?", note: "Street Pigeon MTB" },
        { id: "3l5nqMARO4M", title: "Laggan Brown - Laggan", note: "McTrail Guide" },
      ] },
      { n: 18, name: "Laggan Black (Wolf of Badenoch)", lengthM: 1800, dropM: 175, tech: 4, phys: 5, videos: [
        { id: "MgLwbe7H7h4", title: "Wolf Of Badenoch Black - RAW GoPro - Laggan Wolftrax", note: "Phil Crombie MTB" },
        { id: "0pkqn80m9HI", title: "Laggan Wolftrax - Black Run", note: "McTrail Guide" },
      ] },
      { n: 19, name: "Laggan Red", lengthM: 1500, dropM: 120, tech: 1, phys: 3, videos: [
        { id: "alzTOJ6uUyU", title: "Leapin' Wolf - Red Trail - Laggan Wolftrax", note: "Jack Anstey" },
        { id: "86WjT1xXneU", title: "Alpha Descent - Red Trail - Laggan Wolftrax", note: "Jack Anstey" },
        { id: "WMoRUtgKpr4", title: "MUST DO Laggan Wolftrax Red MTB Trails", note: "Big Stoozer Adventures" },
      ] },
    ],
    areaVideos: [
      { id: "wnOmYjXU3F4", title: "Rock Slabs And Rain Drops - Laggan Wolftrax", note: "McTrail Guide" },
      { id: "qQZoqaslRc8", title: "The Other Side of Laggan Wolftrax Demands Respect!", note: "Laura Jane & Wee Tam" },
    ],
  },
  {
    day: "4", name: "Dunkeld", komootId: "3023308781",
    distanceKm: 45.0, elevationM: 1490, duration: "5:01",
    date: "Thursday 10 September", region: "Craigvinean, Birnam and Newtyle, Perthshire",
    description: "Dunkeld is a Scottish MTB classic, Perthshire big-forest riding at its best. Craigvinean brings Dalmarnock, Bambi's, the classic DH track and Cairn to Cottage in a shuttle-assisted morning. Be prepared for some tech. After lunch at Rumbling Bridge it is up Birnam Hill, famous to mountain bikers for the iconic Rake n Ruin. From Birnam, cross the River Tay for Newtyle's final steep stages, Crows Nest and Rudder. Then south to the Tweed Valley.",
    searchQuery: "Dunkeld mountain bike trails",
    timed: [
      { n: 20, name: "Dalmarnock", lengthM: 2200, dropM: 310, tech: 2, phys: 4, videos: [
        { id: "C2nmp_M_Hmc", title: "Dalmarnock, Dunkeld", note: "Random mtb rides" },
        { id: "gVEn6kNDx-k", title: "Dalmarnock at Dunkeld", note: "Kirsty McCarlie" },
      ] },
      { n: 21, name: "Bambi's / 9.8", lengthM: 1100, dropM: 220, tech: 4, phys: 4, videos: [
        { id: "8JIXdue0mfs", title: "Bambi's Farts + 9.8 Dunkeld MTB", note: "OverthebarsMTB" },
        { id: "vpbfK8anf9I", title: "Dunkeld MTB Enduro Trails - Commit or Cry - Phoenix Link - Bambi's Farts", note: "Dan San MTB" },
      ] },
      { n: 22, name: "Dunkeld DH", lengthM: 900, dropM: 135, tech: 3, phys: 3, videos: [
        { id: "uVXuak1a6aA", title: "Dunkeld Craigvinean DH sesh day!", note: "A H" },
        { id: "j9alEFsB52g", title: "Craigvinean DH Alternative Run from Progression Bikes", note: "MrAdamFlint" },
      ] },
      { n: 23, name: "Cairn to Cottage", lengthM: 800, dropM: 165, tech: 5, phys: 3, videos: [
        { id: "x4p3s3Xx56g", title: "Cairn to Cottage Dunkeld Trail", note: "jonathan wilson" },
        { id: "zDng9U-0tvs", title: "Dunkeld Enduro 2021 / Stage 3 / Cairn to Cottage", note: "Cheviot Hill Rider" },
        { id: "4_atusMd-8o", title: "Cairn To Cottage [DUNKELD]", note: "Tony's Trails" },
      ] },
      { n: 24, name: "Rake n Ruin", lengthM: 1700, dropM: 300, tech: 2, phys: 4, videos: [
        { id: "0osxd92nOW0", title: "Rake and Ruin - Dunkeld MTB", note: "Dan San MTB" },
        { id: "9s7nSCqyAfo", title: "Rake & Ruin - Red Trail - Birnam Hill, Dunkeld", note: "Jack Anstey" },
        { id: "vi5ds80vCww", title: "\"Pink Floyd\" and \"Rake and Ruin\" Dunkeld", note: "McTrail Guide" },
      ] },
      { n: 25, name: "Crows Nest", lengthM: 700, dropM: 175, tech: 4, phys: 3, videos: [
        { id: "b-IP-_yekn8", title: "Crows Nest, Dunkeld", note: "Si Cam" },
        { id: "D-Q8wAv936w", title: "Crows Nest | Dunkeld | Hardtail Lover", note: "Paolo Carlos MTB" },
      ] },
      { n: 26, name: "Rudder", lengthM: 700, dropM: 175, tech: 4, phys: 3, videos: [
        { id: "8jKXi6Tm5Go", title: "One of the Classics at Dunkeld - Rudder", note: "Dan San MTB" },
        { id: "iehb0P65mNI", title: "The Rudder - Dunkeld", note: "Russel Kesson" },
      ] },
    ],
    areaVideos: [
      { id: "-OiYbPqopJA", title: "The BEST Hand Built MTB Trails in Scotland || Dunkeld, Comrie Croft and Aberfeldy", note: "Scotty Laughland" },
      { id: "e_nFm5fNwKg", title: "Scotland's Dunkeld Enduro 2023 | 3rd Place MTB Race Runs", note: "Laura Jane & Wee Tam" },
    ],
  },
  {
    day: "5", name: "Yair Inners", komootId: "2948030306",
    distanceKm: 58.7, elevationM: 1780, duration: "6:04",
    date: "Friday 11 September", region: "Tweed Valley, Scottish Borders",
    description: "Welcome to the Tweed Valley. Starting in Yair, a quieter corner of the valley, climb to the Three Brethren, three 16th-century stone cairns high above the valley. Quarry into DD and Ginger Mullet first, then follow the Southern Upland Way on a long traverse towards a first taste of Innerleithen: Angry Sheep. After lunch it is into Innerleithen's DH trails for an uplift-assisted mash-up of Gold Run, Cresta and Matador, before spinning back to the Hydro along the River Tweed.",
    searchQuery: "Yair Forest Innerleithen mountain bike",
    timed: [
      { n: 27, name: "Quarry into DD", lengthM: 1800, dropM: 260, tech: 3, phys: 3, videos: [
        { id: "nBhgemSc1hA", title: "Quarry Descent into Double Decker, Yair", note: "Kev Welsh" },
        { id: "0Prpk7ZyaSw", title: "[Yair] Quarry DD", note: "Tony's Trails" },
        { id: "TdTApjsqi-c", title: "Yair Forest DD Descent | Two Full Runs", note: "The Sweary Bikers MTB" },
      ] },
      { n: 28, name: "Ginger (Ginger Mullet)", lengthM: 1300, dropM: 160, tech: 1, phys: 3, videos: [
        { id: "4ZlVKaS6sL0", title: "Tweed Valley Trails - Stony Knowe Descent (Ginger Mullet)", note: "tweed valley singletrack" },
        { id: "qhlJl1BceUg", title: "Ginger Mullet, Yair Forest, Tweed Valley", note: "MoreBooze" },
      ] },
      { n: 29, name: "Angry Sheep", lengthM: 900, dropM: 120, tech: 2, phys: 2, videos: [
        { id: "2arHXKSIK0g", title: "Angry Sheep - Innerleithen", note: "Alexander Fyfe" },
        { id: "eVtw3lhZcQ0", title: "Angry Sheep, Innerleithen's best beginner enduro trail. Trail Check", note: "The Contour Collective" },
      ] },
      { n: 30, name: "Gold Run", lengthM: 1200, dropM: 280, tech: 4, phys: 3, videos: [
        { id: "OmfZ_ahBEgA", title: "Innerleithen DH - Gold Run", note: "Andrew Del Rosario" },
        { id: "SkmYcCqMZjA", title: "TRAIL BREAKDOWN: HOW TO FIND FASTER LINES | GOLD RUN, INNERLEITHEN", note: "Wolfpack Adventures" },
      ] },
      { n: 31, name: "Cresta", lengthM: 1200, dropM: 280, tech: 4, phys: 3, videos: [
        { id: "01NPRkgbh2I", title: "INNERLEITHEN // CRESTA FULL RUN", note: "Finn Holling" },
        { id: "sSNE8G0Z568", title: "Innerleithen Cresta Run - Adrenalin Uplift", note: "Jason Dalling" },
      ] },
      { n: 32, name: "Matador", lengthM: 1300, dropM: 280, tech: 4, phys: 3, videos: [
        { id: "cvQGPwHrK8U", title: "Matador @ Innerleithen - Top to Bottom", note: "Graeme Temple" },
        { id: "T-BXGu8YhyM", title: "Matador Innerleithen DH uplift", note: "Gary Campbell" },
      ] },
    ],
    areaVideos: [
      { id: "OwEgI_st2Ig", title: "I was not expecting that! Yair MTB", note: "Street Pigeon MTB" },
      { id: "GLaJTHH3ysE", title: "Innerleithen DH Trails - Cresta Run - Gold Run - Matador", note: "TrailDazed" },
    ],
  },
  {
    day: "6", name: "Golfie Glentress", komootId: "2948031069",
    distanceKm: 43.5, elevationM: 1640, duration: "5:09",
    date: "Saturday 12 September", region: "Tweed Valley, Scottish Borders",
    description: "The grand finale on the world-famous Golfie, a cornerstone of Scottish enduro and former EWS territory. The Golfie's greatest hits: Big Baw, Feed the Pony, Dances with Wolves, Flat White and Repeat Offender, with some shuttles to help. Then a long pedal along Leithen Water to the Glentress mast for Trail Fairy Plan, and the final stage, Careless Whisper into Glentress. Time for party trains. Finish line beers, dinner and a ceilidh at Peebles Hydro.",
    searchQuery: "Golfie Innerleithen Glentress mountain bike",
    timed: [
      { n: 33, name: "Big Baw", lengthM: 1700, dropM: 220, tech: 4, phys: 5, videos: [
        { id: "iF4QPBfUCNM", title: "Big Baw - Full Run", note: "Lachlan Blair" },
        { id: "dc0_XCFzIM0", title: "You need BIG BAWS to ride this MTB trail!", note: "Street Pigeon MTB" },
        { id: "-Ex6fo0iOqo", title: "Big Baw - Golfie 2025", note: "Alexander Fyfe" },
      ] },
      { n: 34, name: "Feed the Pony", lengthM: 1600, dropM: 290, tech: 3, phys: 5, videos: [
        { id: "Sj24eXIoz5g", title: "Feed The Pony - Golfie - Walkerburn 2025", note: "Alexander Fyfe" },
        { id: "l5gc5k415G4", title: "Feed the Pony - The Golfie MTB Full POV run", note: "Shannon MTB" },
      ] },
      { n: 35, name: "Dances with Wolves", lengthM: 1000, dropM: 200, tech: 4, phys: 4, videos: [
        { id: "8Ev2Oz1pOEI", title: "Dances With Wolves and New Lower Wolves - Golfie 2025", note: "Alexander Fyfe" },
        { id: "U6kBn3gcLH0", title: "Dances With Wolves | The Golfie Mtb", note: "Off the Top MTB" },
      ] },
      { n: 36, name: "Flat White", lengthM: 800, dropM: 175, tech: 2, phys: 2, videos: [
        { id: "FEwCB5nk4F8", title: "\"FLAT WHITE\" - GOLFIE / Tweed Valley", note: "Innes Graham" },
        { id: "stEhC_Dt2wg", title: "Flat White - Golfie - Summer 2025", note: "Alexander Fyfe" },
      ] },
      { n: 37, name: "Repeat Offender", lengthM: 1300, dropM: 300, tech: 3, phys: 4, videos: [
        { id: "twI0dtwrxIU", title: "Innes Graham's EWS Tweed Valley Stage 3 (Repeat Offender)", note: "Dirt School" },
        { id: "k8HBBY_9jvY", title: "Repeat Offender // Full Run // Golfie", note: "Salt_n_shred" },
        { id: "r6P4qyUj5rM", title: "Repeat Offender - Golfie 2023", note: "Alexander Fyfe" },
      ] },
      { n: 38, name: "Trail Fairy Plan", lengthM: 1000, dropM: 280, tech: 4, phys: 3, videos: [
        { id: "QCBywFCdmqg", title: "Trail Fairy Plan - Glentress", note: "Dan San MTB" },
        { id: "qeiYVczL3u4", title: "Glentress B-SIDE (A TRAIL FAIRY PLAN) stage 1 International Enduro 2024", note: "MTB Brian Bruce Martin" },
      ] },
      { n: 39, name: "Careless Whisper", lengthM: 800, dropM: 110, tech: 2, phys: 1, videos: [
        { id: "8dTxBaMX8b8", title: "Careless Whisper - Glentress Off Piste", note: "Jake Brookes Biking" },
        { id: "3WrusYepEF4", title: "Glentress Careless Whisper stage 3 International Enduro 2024", note: "MTB Brian Bruce Martin" },
      ] },
    ],
    areaVideos: [
      { id: "Jq6ySAmt6ro", title: "What To Expect When Riding The GOLFIE INNERLEITHEN!", note: "Trail Hub" },
      { id: "-EWvJYctMU4", title: "GOLFIE MTB - 6 of the BEST Tweed Valley Trails", note: "UPHILLPHILL and McTrail Guide" },
    ],
  },
];
