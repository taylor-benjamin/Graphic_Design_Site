// Image data for Ben Taylor's Graphic Design Portfolio.
// Each item: { file: "<folder/filename relative to this directory>", title: "<display title>", category: "clothing" | "contracted" | "learning" | "paintings" }
// Images live inside their category's own folder: "Clothing Mockups/", "Contracted_works/", "Learning_Growing/", "Paintings/".
// To move an image between sections, move the actual file into the matching folder and update its "file" and "category" here.
const PORTFOLIO_ITEMS = [
  {
    "file": "Clothing Mockups/bootcamp pink polos.png",
    "title": "Bootcamp Pink Polos",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/cat army red tee.png",
    "title": "Cat Army Red Tee",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/darth maul zipup mockup.png",
    "title": "Darth Maul Zipup Mockup",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/DO WHAT U CAN TEE.png",
    "title": "DO WHAT U CAN TEE",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/doomscrolling tee.png",
    "title": "Doomscrolling Tee",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/drop 3 complete.png",
    "title": "Drop 3 Complete",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/emblem waffle knit.png",
    "title": "Emblem Waffle Knit",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/emotions tee black.png",
    "title": "Emotions Tee Black",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/emotions tee white.png",
    "title": "Emotions Tee White",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/futiguro metro babytee.png",
    "title": "Futiguro Metro Babytee",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/give it ur guts zip-up.png",
    "title": "Give It Ur Guts Zip-up",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/heart1.png",
    "title": "Heart1",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/hoodie mockup BACK.png",
    "title": "Hoodie Mockup BACK",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/horse tee.png",
    "title": "Horse Tee",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/human hoodie.png",
    "title": "Human Hoodie",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/instakill tee black.png",
    "title": "Instakill Tee Black",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/logo hoodies.png",
    "title": "Logo Hoodies",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/⁯midlife crisis tee.png",
    "title": "Midlife Crisis Tee",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/Music Cats Babytee.png",
    "title": "Music Cats Babytee",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/networks beanie.png",
    "title": "Networks Beanie",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/networks hoodie.png",
    "title": "Networks Hoodie",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/neurosickness tee.png",
    "title": "Neurosickness Tee",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/nuclear family mockups.png",
    "title": "Nuclear Family Mockups",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/oasis shooter zip-up.png",
    "title": "Oasis Shooter Zip-up",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/outcorp collection.png",
    "title": "Outcorp Collection",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/pegasus iradescent jackets.png",
    "title": "Pegasus Iradescent Jackets",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/T'oga horse race.png",
    "title": "T'oga Horse Race",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/this might be jesus hoodie.png",
    "title": "This Might Be Jesus Hoodie",
    "category": "clothing"
  },
  {
    "file": "Clothing Mockups/white pegasus baby tee.png",
    "title": "White Pegasus Baby Tee",
    "category": "clothing"
  },
  {
    "file": "Contracted_works/Album Cover Design.png",
    "title": "Album Cover Design",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/brasshearts 4by5 complete.png",
    "title": "Brasshearts 4by5 Complete",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/geaux blooms.png",
    "title": "Geaux Blooms",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/pink and red chick logo sideways.png",
    "title": "Pink and Red Chick Logo Sideways",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/problem child album cover copy.png",
    "title": "Problem Child Album Cover",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/problem child graphic.png",
    "title": "Problem Child Graphic",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/redstickchick sticker.png",
    "title": "Redstickchick Sticker",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/rap club tee done.png",
    "title": "Rap Club Tee Done",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/SUGARFREE NO WATERMARK.png",
    "title": "SUGARFREE NO WATERMARK",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/windward final logo.png",
    "title": "Windward Final Logo",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/windward logo.png",
    "title": "Windward Logo",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/windward logos.png",
    "title": "Windward Logos",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/zizzi album cover.png",
    "title": "Zizzi Album Cover",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/zizzi tee mockups.png",
    "title": "Zizzi Tee Mockups",
    "category": "contracted"
  },
  {
    "file": "Contracted_works/zizzi space design black and whiteE.png",
    "title": "Zizzi Space Design Black and WhiteE",
    "category": "contracted"
  },
  {
    "file": "Learning_Growing/bite the bullet.png",
    "title": "Bite the Bullet",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/black city hoodie design 2.png",
    "title": "Black City Hoodie Design 2",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/Blur Effect Work.png",
    "title": "Blur Effect Work",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/cat emotions complete.png",
    "title": "Cat Emotions Complete",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/everything was beautiful.png",
    "title": "Everything Was Beautiful",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/EXPERIMENT WITH BLKMARKT (10FOLD, KING OF EVERYTHING).png",
    "title": "EXPERIMENT WITH BLKMARKT (10FOLD, KING OF EVERYTHING)",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/fakemink trading card.png",
    "title": "Fakemink Trading Card",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/HORSE FLAG.png",
    "title": "HORSE FLAG",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/horse png.png",
    "title": "Horse Png",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/human design.png",
    "title": "Human Design",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/IMG_3140.jpg",
    "title": "IMG_3140",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/IMG_3141.jpg",
    "title": "IMG_3141",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/IMG_4580.JPG",
    "title": "IMG_4580",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/Music Cats.png",
    "title": "Music Cats",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/networks blue 2.png",
    "title": "Networks Blue 2",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/new discoveries.png",
    "title": "New Discoveries",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/nuclear family white design.png",
    "title": "Nuclear Family White Design",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/OASIS logos.png",
    "title": "OASIS Logos",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/oasis shooter  2.0.png",
    "title": "Oasis Shooter 2.0",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/outcorp logos.png",
    "title": "Outcorp Logos",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/playing with logos.png",
    "title": "Playing With Logos",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/sammy green army men.png",
    "title": "Sammy Green Army Men",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/that travis poster copy 2.png",
    "title": "That Travis Poster Copy 2",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/TIMEANDPLACE WORK.png",
    "title": "TIMEANDPLACE WORK",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/truck 2.jpeg",
    "title": "Truck 2",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/wake up you gotta lock in bro complete.png",
    "title": "Wake Up You Gotta Lock In Bro Complete",
    "category": "learning"
  },
  {
    "file": "Learning_Growing/welcome to geneva switzerland.png",
    "title": "Welcome To Geneva Switzerland",
    "category": "learning"
  },
  {
    "file": "Paintings/divinity print.jpg",
    "title": "Divinity Print",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_2198.jpeg",
    "title": "IMG_2198",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_3703.jpeg",
    "title": "IMG_3703",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_3786.jpeg",
    "title": "IMG_3786",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_4659.jpeg",
    "title": "IMG_4659",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_5793.jpeg",
    "title": "IMG_5793",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8008-2.jpg",
    "title": "IMG_8008-2",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8011-2.jpg",
    "title": "IMG_8011-2",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8012-2.jpg",
    "title": "IMG_8012-2",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8013.jpg",
    "title": "IMG_8013",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8688-2.jpg",
    "title": "IMG_8688-2",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8952.jpg",
    "title": "IMG_8952",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8953.jpg",
    "title": "IMG_8953",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8954.jpg",
    "title": "IMG_8954",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8955.jpg",
    "title": "IMG_8955",
    "category": "paintings"
  },
  {
    "file": "Paintings/IMG_8956.jpg",
    "title": "IMG_8956",
    "category": "paintings"
  },
  {
    "file": "Paintings/panther print.jpg",
    "title": "Panther Print",
    "category": "paintings"
  },
  {
    "file": "Paintings/reaperrrr print.jpg",
    "title": "Reaperrrr Print",
    "category": "paintings"
  }
];
