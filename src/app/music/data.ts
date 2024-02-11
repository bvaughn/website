import { Band } from "@/app/music/types";
import { parseDateString } from "@/utils/time";

export const bands = {
  "brian-vaughn": {
    albums: {
      yesterday: {
        date: parseDateString("2022-01-01"),
        image: "/images/albums/yesterday.jpeg",
        name: "Yesterday",
        tracks: [
          "Circles (feat. Jordan Morris)",
          "London in December (feat. Dave Marnocha)",
          "Yesterday (feat. Rhys Jones)",
          "The Story (feat. Dave Marnocha)",
          "Looking Back (feat. Jordan Morris)",
          "Go Easy (bonus track)",
        ],
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/yesterday-ep/1653327679",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_lTArUbwzlgm0AHnVJefAfJOcbqPD-jZ1M",
          soundcloud: "https://soundcloud.com/brianvaughn/sets/yesterday",
          spotify:
            "https://music.youtube.com/playlist?list=OLAK5uy_lTArUbwzlgm0AHnVJefAfJOcbqPD-jZ1M",
        },
      },
      recharge: {
        date: parseDateString("2022-01-01"),
        image: "/images/albums/recharge.jpeg",
        name: "Recharge",
        tracks: [
          "I'm not Going to Overthink This (feat. Cedric Dhaenens)",
          "Tonight (feat. Viperdrive)",
          "You and I (feat. re:markable)",
          "You Know Me Better",
          "She Said (feat. Cedric Dhaenens)",
          "This Was Our Future (feat. Viperdrive)",
          "Sakura (feat. Scratchcard Glory)",
          "It Doesn't Matter (feat. Pinwurm)",
          "Indigo Dreams (feat. Viperdrive)",
          "Damn (feat. Ken Wheeler)",
          "Back to the Beginning (feat. TedStedt)",
          "Take",
          "Sit with the Feelings (Radio Edit)",
          "If I Don't (feat. Alex Hinson)",
        ],
        urls: {
          appleMusic: "https://music.apple.com/us/album/recharge/1616986926",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mMBb-HZsPqdFr_Wbz_dSPtup5b1xSuCwE",
          soundcloud: "https://soundcloud.com/brianvaughn/sets/recharge",
          spotify:
            "https://music.youtube.com/playlist?list=OLAK5uy_mMBb-HZsPqdFr_Wbz_dSPtup5b1xSuCwE",
        },
      },
      "forgotten-songs": {
        date: parseDateString("2017-01-01"),
        image: "/images/albums/forgotten-songs.jpeg",
        name: "Forgotten Songs",
        tracks: [
          "None of Us Knows",
          "Light Up the Night",
          "Oh",
          "Burn You Away",
          "Somewhere",
          "Nothing Really Changes",
          "Fade",
        ],
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/forgotten-songs/1496849315",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_m8pREuLc09-KrNg-OsB2bvt5bcY9g9v9U",
          soundcloud: "https://soundcloud.com/brianvaughn/sets/forgotten-songs",
          spotify:
            "https://music.youtube.com/playlist?list=OLAK5uy_m8pREuLc09-KrNg-OsB2bvt5bcY9g9v9U",
        },
      },
      "back-roads": {
        date: parseDateString("2016-01-01"),
        image: "/images/albums/back-roads.jpeg",
        name: "Back Roads",
        tracks: [
          "That Way",
          "Home in California",
          "Chestnut Drive",
          "Swept Away",
          "Tied to Your Smile",
        ],
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/back-roads-ep/1496833505",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_kMCob_hasc3TV1VOm0QVu57q_sTWw7-_M",
          soundcloud: "https://soundcloud.com/brianvaughn/sets/back-roads",
          spotify: "https://open.spotify.com/album/6I0gWiKfIbgyF6qalkcptL",
        },
      },
      "my-american-guilt": {
        date: parseDateString("2012-02-01"),
        image: "/images/albums/my-american-guilt.jpeg",
        name: "My American Guilt",
        tracks: [
          "Here",
          "Love",
          "No, Say It",
          "Little Girl",
          "Expectations & Assumptions",
          "My American Guilt",
          "Scattershot",
          "Your Eyes",
          "Parts of You",
          "The Shepherd",
          "A Walk Without Direction",
          "Revolutions",
          "Revolve",
          "Oh, My Mind",
          "Three",
          "Dichotomy",
          "Covered & Marked",
          "Warming Up to You",
          "Red Light, Green Light",
        ],
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/my-american-guilt/1458953990",
          bandCamp: "https://brianvaughn.bandcamp.com/album/my-american-guilt",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_lIY7B7kcIlsTYIVknLollilu_QPROeMQI",
          soundcloud:
            "https://soundcloud.com/brianvaughn/sets/my-american-guilt",
          spotify: "https://open.spotify.com/album/33ffbH8ku4ZZqgVXdO5nIu",
        },
      },
      "hello-stranger": {
        date: parseDateString("2011-04-01"),
        image: "/images/albums/hello-stranger.jpeg",
        name: "Hello, Stranger",
        tracks: [
          "At All",
          "Nothing Changes",
          "buy track",
          "The Song I Sing",
          "Mountain",
          "Friend to the Undertow",
          "Hello, Stranger",
          "Future",
          "Are You 10 Years Ago? (Tegan & Sara)",
          "Some May Say",
          "Better With Wings",
          "Nothing for a Man",
          "Exercise Your Faith",
          "Take it or Leave it",
          "Given Time",
          "Now & Later",
          "Drowned (Tim Minchin)",
          "Shyness Looks at Tennis Shoes",
          "Collide",
          "The Ocean (Tegan & Sara)",
          "Blind",
        ],
        urls: {
          bandCamp: "https://brianvaughn.bandcamp.com/album/hello-stranger",
        },
      },
      "is-that-what-love-is": {
        date: parseDateString("2006-08-01"),
        image: "/images/albums/is-that-what-love-is.jpeg",
        name: "Is That What Love is?",
        tracks: [
          "Alive Again",
          "Choose to Drown",
          "As Momentum Drags Us On",
          "Is That What Love is?",
          "Against the Wind",
          "Tied to Your Smile",
          "Every Man for Himself",
          "Let's Not Kid Ourselves",
          "With You",
          "Behind Their Eyes",
          "Child",
        ],
        urls: {
          bandCamp:
            "https://brianvaughn.bandcamp.com/album/is-that-what-love-is",
        },
      },
    },
    description: [
      `
      I started writing and recording music when I was 15 years old.
      Most of the songs below were recorded in my make-shift home studio.
    `,
    ],
    genre: "Rock",
    image: "/images/bands/brian-vaughn.jpeg",
    members: [
      {
        image: "/images/bands/brian-vaughn.jpeg",
        name: "Brian Vaughn",
        role: "vocals, guitar",
      },
    ],
    name: "Brian Vaughn",
    tracks: [
      {
        name: "If You Can't Say It",
        date: parseDateString("2023-02-01"),
        image: "/images/albums/if-you-cant-say-it.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/if-you-cant-say-it-single/1642244458",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_lYSugEv9J0ILAC8vnh-hARHUWlTNlkiTc",
          soundcloud: "https://soundcloud.com/brianvaughn/if-you-cant-say-it",
          spotify: "https://open.spotify.com/track/46TvQhL7oV0iTVRQMejy4g",
        },
      },
      {
        name: "Break the Picture (feat. Thoughts Before Prayers",
        date: parseDateString("2023-02-01"),
        image: "/images/albums/break-the-picture.jpeg",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/thoughts-before-prayers-break-the-picture-feat-brian-vaughn",
        },
      },
      {
        date: parseDateString("2023-01-01"),
        image: "/images/tracks/summer.jpeg",
        name: "Summer",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/summer-single/1653528332",
          googleMusic: "https://music.youtube.com/watch?v=6zbffNnSBvU",
          soundcloud: "https://soundcloud.com/brianvaughn/summer",
          spotify: "https://open.spotify.com/album/1DhdowWDgikPcI1BoyqDq0",
        },
      },
      {
        date: parseDateString("2022-10-01"),
        image: "/images/tracks/one-name.jpeg",
        name: "One Name",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/one-name-feat-lecture-on-nothing-single/1654322072",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_m3HHHRQ0CiISn6jzMTqpIiwwa0kI0LQUA",
          soundcloud:
            "https://soundcloud.com/brianvaughn/one-namefeat-lecture-on-nothing",
          spotify: "https://open.spotify.com/album/6bbGD7lVKcMnLzIeaQtrQV",
        },
      },
      {
        date: parseDateString("2023-08-01"),
        image: "/images/tracks/a-poem-on-the-subway.jpeg",
        name: "A Poem on the Subway",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/a-poem-on-the-subway-single/1693527108",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_l8nJG_JuFArXXG1nSAOqa9vH-WDgnmO-Q",
          soundcloud: "https://soundcloud.com/brianvaughn/a-poem-on-the-subway",
          spotify: "https://open.spotify.com/album/7McdPlBk1V2glBiCCAbLFL",
        },
      },
      {
        date: parseDateString("2022-12-01"),
        image: "/images/tracks/go-easy-on-yourself.jpeg",
        name: "Go Easy on Yourself",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/go-easy-on-yourself-feat-james-gorringe-single/1661719718",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_lgEb0lqBShQ3VCmcdyqXDO47wvP93qjyE",
          spotify: "https://open.spotify.com/album/2IfQHpEGZ7v7mjMylGpZkw",
        },
      },
      {
        date: parseDateString("2016-01-01"),
        image: "/images/tracks/extraterrestrial-katy-perry.jpeg",
        name: "Extraterrestrial (Katy Perry cover)",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/extraterrestrial-katy-perry-cover",
        },
      },
      {
        date: parseDateString("2012-01-01"),
        image: "/images/tracks/waters-edge-7-mary-3.jpeg",
        name: "Water's Edge (Seven Mary Three cover)",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/waters-edge-seven-mary-three",
        },
      },
      {
        date: parseDateString("2015-01-01"),
        name: "As Long As You Love Me (Justin Bieber cover)",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/as-long-as-you-love-me-justin-bieber-cover",
        },
      },
      {
        date: parseDateString("2015-01-01"),
        image: "/images/tracks/your-song-elton-john.jpeg",
        name: "Your Song (Elton John cover)",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/your-song-elton-john-cover",
        },
      },
      {
        date: parseDateString("2012-01-01"),
        image: "/images/tracks/explore-be-curious-cloudkicker.jpeg",
        name: "Explore, Be Curious (feat. Cloudkicker)",
        urls: {
          soundcloud: "https://soundcloud.com/brianvaughn/explore_be_curious",
        },
      },
      {
        date: parseDateString("2012-01-01"),
        image: "/images/tracks/let-go-frou-frou.jpeg",
        name: "Let Go (Frou Frou cover)",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/brianvaughn-letgo-froufrou",
        },
      },
      {
        date: parseDateString("2012-01-01"),
        image: "/images/tracks/blown-away-shiny-toy-guns.jpeg",
        name: "Blown Away (Shiny Toy Guns cover)",
        urls: {
          soundcloud: "https://soundcloud.com/brianvaughn/blown-away",
        },
      },
      {
        date: parseDateString("2012-01-01"),
        image: "/images/tracks/living-within-the-shell.jpeg",
        name: "Living Within the Shell",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/living-within-the-shell",
        },
      },
      {
        name: "Slipping",
        date: parseDateString("2022-09-01"),
        image: "/images/tracks/slipping.jpeg",
        urls: {
          appleMusic: "",
          googleMusic: "",
          soundcloud: "https://soundcloud.com/brianvaughn/slipping",
          spotify: "",
        },
      },
      {
        name: "Fireflies",
        date: parseDateString("2022-10-01"),
        image: "/images/tracks/fireflies.jpeg",
        urls: {
          appleMusic: "",
          googleMusic: "",
          soundcloud: "https://soundcloud.com/brianvaughn/fireflies",
          spotify: "",
        },
      },
      {
        name: "It's Always Midnight (feat gh0stmartini)",
        date: parseDateString("2022-08-01"),
        image: "/images/tracks/its-always-midnight.jpeg",
        urls: {
          appleMusic: "",
          googleMusic: "",
          soundcloud: "https://soundcloud.com/brianvaughn/its-always-midnight",
          spotify: "",
        },
      },
      {
        name: "If You Believe it (feat gh0stmartini)",
        date: parseDateString("2022-08-01"),
        image: "/images/tracks/if-you-believe-it.jpeg",
        urls: {
          appleMusic: "",
          googleMusic: "",
          soundcloud: "https://soundcloud.com/brianvaughn/if-you-believe-it",
          spotify: "",
        },
      },
      {
        name: "About You (feat Hydrofoil",
        date: parseDateString("2022-07-01"),
        image: "/images/tracks/about-you.jpeg",
        urls: {
          appleMusic: "",
          googleMusic: "",
          soundcloud:
            "https://soundcloud.com/brianvaughn/about-you-final-feat-hydrofoil",
          spotify: "",
        },
      },
      {
        name: "Alternate Line",
        date: parseDateString("2021-03-01"),
        image: "/images/tracks/alternate-line.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/alternate-line-single/1565643579",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_lnp5eQLUe7R6y0zR34oz4sN8Ddx3ZneQc",
          soundcloud: "https://soundcloud.com/brianvaughn/alternate-line",
          spotify: "https://open.spotify.com/track/4OkcrEqaw26I6j1yQzUuzA",
        },
      },
      {
        name: "Fear",
        date: parseDateString("2021-01-01"),
        image: "/images/tracks/fear.jpeg",
        urls: {
          appleMusic: "https://music.apple.com/us/album/fear-single/1554663866",
          googleMusic:
            "https://music.youtube.com/watch?v=NsdwF6_P_0o&si=lAQNXZW-erv2YYrC",
          soundcloud: "https://soundcloud.com/brianvaughn/fear",
          spotify: "https://open.spotify.com/track/7cKjCZ7ew1wCzq1jU6BuiH",
        },
      },
      {
        name: "Airplane",
        date: parseDateString("2021-01-01"),
        image: "/images/tracks/airplane.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/airplane-single/1565638673",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_lyU2lfMFx7DAKoUCRavZBygT4FhxzZAXg",
          soundcloud: "https://soundcloud.com/brianvaughn/airplane",
          spotify: "https://open.spotify.com/track/6yyaEoXD3qiE7OuSY6alle",
        },
      },
      {
        name: "Lunar Song",
        date: parseDateString("2021-01-01"),
        image: "/images/tracks/lunar-song.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/lunar-song-single/1549805827",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_nOPmCkVfP4OHGJYrZ8_aNvRZ9P47ryTtU",
          soundcloud: "https://soundcloud.com/brianvaughn/lunar-song",
          spotify: "https://open.spotify.com/track/5E2jW0lMk8hcTmYCft8cHp",
        },
      },
      {
        name: "Fire",
        date: parseDateString("2021-01-01"),
        image: "/images/tracks/fire.jpeg",
        urls: {
          appleMusic: "https://music.apple.com/us/album/fire-single/1549297717",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_keJw7-c0G6uItBFFfjZGWxEWvbJfBjQuE",
          soundcloud: "https://soundcloud.com/brianvaughn/fire",
          spotify: "https://open.spotify.com/track/4vOjrqwoFpmZsOont1KROC",
        },
      },
      {
        name: "The Cannon's Mouth",
        date: parseDateString("2020-12-15"),
        image: "/images/tracks/the-cannons-mouth.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/the-cannons-mouth/1545068325?i=1545068326",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mAgJm60BxEK9rHMywfOERV8JlauqWNvF8",
          soundcloud: "https://soundcloud.com/brianvaughn/the-cannons-mouth",
          spotify: "https://open.spotify.com/track/0VtvC38A5nUQtDZ4YTfg7t",
        },
      },
      {
        name: "Uncertainty (feat Ralf Balogh)",
        date: parseDateString("2020-15-01"),
        image: "/images/tracks/uncertainty.jpeg",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/ralf-balogh-feat-brian-vaughn-uncertainty",
        },
      },
      {
        name: "False Positives (feat Matt Trancho)",
        date: parseDateString("2020-12-01"),
        image: "/images/tracks/false-positives.jpeg",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/matt-trancho-ft-brian-vaughn-false-positives",
        },
      },
      {
        name: "Wallow (feat MaroXX)",
        date: parseDateString("2020-11-10"),
        image: "/images/tracks/wallow.jpeg",
        urls: {
          soundcloud: "https://soundcloud.com/brianvaughn/wallow",
        },
      },
      {
        name: "Gravity (Vienna Teng cover)",
        date: parseDateString("2020-02-01"),
        image: "/images/tracks/gravity.jpeg",
        urls: {
          soundcloud: "https://soundcloud.com/brianvaughn/gravity-vienna-teng",
        },
      },
      {
        name: "Be Happy Again",
        date: parseDateString("2020-01-01"),
        image: "/images/tracks/be-happy-again.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/be-happy-again-single/1496868454",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_ngcwb32V8GOOr6lqZFAk4Viq7mcm4Wvek",
          soundcloud: "https://soundcloud.com/brianvaughn/be-happy-again",
          spotify: "https://open.spotify.com/track/33WtKEtDip5q02U3zZve8X",
        },
      },
      {
        name: "Adventure of a Lifetime (Coldplay cover)",
        date: parseDateString("2020-01-01"),
        image: "/images/tracks/adventure-of-a-lifetime.jpeg",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/adventure-of-a-lifetime",
        },
      },
      {
        name: "Bubblegum",
        date: parseDateString("2019-12-15"),
        image: "/images/tracks/bubblegum.jpeg",
        urls: {
          appleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mlMkS1_9DBw1mHBJzgTcz-WL8fj_RoII8",
          googleMusic:
            "https://music.apple.com/us/album/bubblegum-single/1496827575",
          soundcloud: "https://soundcloud.com/brianvaughn/bubblegum",
          spotify: "https://open.spotify.com/track/3qNzGvbWQ2TZMcvfzVynSG",
        },
      },
      {
        name: "Shout (Tears for Fears cover)",
        date: parseDateString("2020-12-01"),
        image: "/images/tracks/shout.jpeg",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/shout-tears-for-fears",
        },
      },
      {
        name: "Own My Eyes (The Faint cover)",
        date: parseDateString("2020-11-01"),
        image: "/images/tracks/own-my-eyes.jpeg",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/own-my-eyes-the-faint",
        },
      },
      {
        name: "Be the One (Luna Shadows cover)",
        date: parseDateString("2020-10-01"),
        image: "/images/tracks/be-the-one.jpeg",
        urls: {
          soundcloud:
            "https://soundcloud.com/brianvaughn/be-the-one-luna-shadows",
        },
      },
      {
        name: "Time (feat Nick Rasmussen)",
        date: parseDateString("2020-09-01"),
        image: "/images/tracks/time.jpeg",
        urls: {
          appleMusic: "https://music.apple.com/us/album/time-single/1496872556",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mhFxbj7HBaYZ4F7YyakE5JL4PhvFBtOdg",
          soundcloud: "https://soundcloud.com/brianvaughn/time",
          spotify: "https://open.spotify.com/track/7jWz0zUnctJ9DvzvDYXyYK",
        },
      },
      {
        name: "Grief",
        date: parseDateString("2019-09-01"),
        image: "/images/tracks/grief.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/grief-feat-nick-rasmussen-single/1458832157",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mteUbMJDv-qNKQHCn-jMEBDFJ2qIpiMx4",
          soundcloud: "https://soundcloud.com/brianvaughn/grief",
          spotify: "https://open.spotify.com/track/6ZOCkFNSiRgBJ6XoMGoo1g",
        },
      },
      {
        name: "Nothing for a Man",
        date: parseDateString("2019-06-01"),
        urls: {
          soundcloud: "https://soundcloud.com/brianvaughn/nothing-for-a-man",
        },
      },
      {
        name: "Save Me (Eddie Irvin cover)",
        date: parseDateString("2019-06-01"),
        urls: {
          soundcloud: "https://soundcloud.com/brianvaughn/save-me-cover",
        },
      },
      {
        name: "Welcome to My Head",
        date: parseDateString("2013-01-01"),
        image: "/images/tracks/welcome-to-my-head.jpeg",
        urls: {
          googleMusic: "https://music.youtube.com/watch?v=c_yVjfk-Pso",
          soundcloud: "https://soundcloud.com/brianvaughn/welcome-to-my-head",
        },
      },
      {
        name: "Animal (feat Bradley Vaughn)",
        date: parseDateString("2012-05-01"),
        image: "/images/tracks/animal.jpeg",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/animal-single/1458876504",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_n7rw2Pw8zKaSw2uVNeXHCLZmgxNNeZPQo",
          soundcloud: "https://soundcloud.com/brianvaughn/animal",
          spotify: "https://open.spotify.com/track/5YRHtU3D4XRHqrwu6Bq9NA",
        },
      },
      {
        name: "Undependable",
        date: parseDateString("2013-05-01"),
        urls: {
          soundcloud: "https://soundcloud.com/brianvaughn/undependable",
        },
      },
    ],
  },
  "pilotless-drone": {
    albums: {
      elemental: {
        date: parseDateString("2014-01-01"),
        image: "/images/albums/elemental.jpeg",
        name: "Elemental",
        tracks: ["Water", "Evolution", "Faultline", "Sky Blue"],
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/elemental-ep/1453953607",
          bandCamp: "https://pilotlessdrone.bandcamp.com/album/elemental",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mhZYc70cJEgWzi84X7eCEwkWSgEkYYIlg",
          spotify: "https://open.spotify.com/album/5tEhNsKeSFvzy2Bd4jvsz3",
        },
      },
      "the-other-road": {
        date: parseDateString("2013-01-01"),
        image: "/images/albums/the-other-road.jpeg",
        name: "The Other Road",
        tracks: [
          "Way Back Down",
          "Preacher",
          "Winter Comes",
          "Self Made Martyr",
          "The Hunter",
          "Accelerate",
          "The Other Road",
          "Come Tomorrow",
        ],
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/the-other-road/1453967714",
          bandCamp: "https://pilotlessdrone.bandcamp.com/album/the-other-road",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_m2Yf6JW9Pokwc_SftOxo6wmTwzVqhj5WY",
          spotify: "https://open.spotify.com/album/4V2KKBNo20NiQdwvLAqi56",
        },
      },
      cloudfist: {
        date: parseDateString("2011-01-01"),
        image: "/images/albums/cloudfist.jpeg",
        name: "Cloudfist",
        tracks: [
          "Cloudfist",
          "Vostok",
          "All You've Got",
          "Mountain",
          "Bird",
          "Future (Remix)",
        ],
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/cloudfist-ep/1454154827",
          bandCamp: "https://pilotlessdrone.bandcamp.com/album/cloudfist",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mRCOyaHcO3vw0O6Zv3wfUMa-uQROZgTLg",
          soundcloud: "https://soundcloud.com/pilotlessdrone/sets/cloudfist",
          spotify: "https://open.spotify.com/album/4a5LsMqOsQqFVTNJPbmbDg",
        },
      },
      "the-art-of-empty-words": {
        date: parseDateString("2008-08-10"),
        image: "/images/albums/the-art-of-empty-words.jpeg",
        name: "Cloudfist",
        tracks: [
          "The Last Time",
          "The Art of Empty Words",
          "A Walk Without Direction",
          "Expectations and Assumptions",
          "Here",
          "What's That?",
          "Something I've Never Seen",
        ],
        urls: {
          bandCamp:
            "https://pilotlessdrone.bandcamp.com/album/the-art-of-empty-words",
        },
      },
    },
    description: [
      `
      Pilotless Drone was formed in 2007 in Virginia.
      The band recorded its first album, "The Art of Empty Words", in Nashville in 2008.
      `,
      `
      Although they continue to write and record new songs, only two of the original members remain.
    `,
    ],
    genre: "Progressive Rock",
    image: "/images/bands/pilotless-drone.jpeg",
    members: [
      {
        image: "/images/bands/brian-vaughn.jpeg",
        name: "Brian Vaughn",
        role: "vocals, guitar",
      },
      {
        image: "/images/bands/karl-ridgeway.jpg",
        name: "Karl Ridgeway",
        role: "guitar, drums",
      },
    ],
    name: "Pilotless Drone",
    tracks: [
      {
        date: parseDateString("2017-01-01"),
        name: "Backchannels (Shearwater cover)",
        urls: {
          soundcloud: "https://soundcloud.com/pilotlessdrone/backchannels",
        },
      },
      {
        date: parseDateString("2019-01-01"),
        name: "Moment",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/moment-single/1454117872",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_nyzjfanE9gVgEse4HjTtq1oZbDssRBhjE",
          soundcloud: "https://soundcloud.com/pilotlessdrone/moment",
          spotify: "https://open.spotify.com/album/6sRCnAOYfO9Ih46A5axqfW",
        },
      },
      {
        date: parseDateString("2020-01-01"),
        name: "The Pot (TOOL cover)",
        urls: {
          soundcloud:
            "https://soundcloud.com/pilotlessdrone/the-pot-tool-cover",
        },
      },
      {
        date: parseDateString("2020-01-01"),
        image: "/images/tracks/rainbow.jpeg",
        name: "Rainbow",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/rainbow-single/1510701742",
          soundcloud: "https://soundcloud.com/pilotlessdrone/rainbow",
          spotify: "https://open.spotify.com/album/0Eq8AkyrMAvgZk9WCLZaLX",
        },
      },
      {
        date: parseDateString("2021-01-01"),
        name: "Pull",
        urls: {
          appleMusic:
            "https://music.apple.com/us/artist/pilotless-drone/591983497",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_kur99kpVth5mKZQAoF2V74fJADv57uEfo",
          soundcloud: "https://soundcloud.com/pilotlessdrone/pull",
          spotify: "https://open.spotify.com/album/4lKy3xH5HuLv5Yhcm4OaMT",
        },
      },
      {
        date: parseDateString("2022-01-01"),
        image: "/images/tracks/distance-between.jpeg",
        name: "Distance Between",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/distance-between-single/1571271594",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_kMqEttHklJ11dGlOecfet-Fgrj2ccCbgg",
          soundcloud: "https://soundcloud.com/pilotlessdrone/distance-between",
          spotify: "https://open.spotify.com/album/1K8rZpkPks1PNnvSJaQCMQ",
        },
      },
      {
        date: parseDateString("2023-12-01"),
        name: "Appetite (IRIS cover)",
        urls: {
          soundcloud: "https://soundcloud.com/pilotlessdrone/appetite",
        },
      },
      {
        date: parseDateString("2023-01-01"),
        name: "Call it in the Air",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/call-it-in-the-air-single/1628403921",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_nlJ6PiW9XSv1m9hQK4Y3aSmCPG0VQqlFQ",
          soundcloud:
            "https://soundcloud.com/pilotlessdrone/call-it-in-the-air",
          spotify: "https://open.spotify.com/album/3HM1w17frHx15JHI4nGJxc",
        },
      },
    ],
  },
  pinwurm: {
    albums: {
      accelerate: {
        date: parseDateString("2019-01-01"),
        image: "/images/albums/accelerate.jpeg",
        name: "Accelerate",
        tracks: [
          "Accelerate",
          "Spaces",
          "Synesthesia",
          "Back To Before",
          "Pigeon",
          "(Under) My Skin",
          "Nothing Lasts",
          "Echoes",
          "Told You So",
          "Lunar Module",
        ],
        urls: {
          appleMusic: "https://music.apple.com/us/album/accelerate/1457452151",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mZBjVr6Kdta_jf-p58XCh2X8U1mrI6r5M",
          soundcloud: "https://soundcloud.com/pinwurm/sets/accelerate",
          spotify: "https://open.spotify.com/album/3vnaFYxIJvp3FRj65J6gfE",
        },
      },
    },
    description: [
      `
      Pinwurm is an industrial rock collaboration, inspired by the music of bands like Nine Inch Nails.
      Pinwurm is heavy on the synthesizers and layered vocals and light on guitars.
    `,
    ],
    genre: "Industrial Rock",
    image: "/images/bands/pinwurm.jpeg",
    members: [
      {
        image: "/images/bands/brian-vaughn.jpeg",
        name: "Brian Vaughn",
        role: "vocals",
      },
      {
        image: "/images/bands/igor-rabovsky.jpeg",
        name: "Igor Rabovsky",
        role: "keyboard, guitar, percussion",
      },
    ],
    name: "Pinwurm",
    tracks: [
      {
        date: parseDateString("2020-01-01"),
        image: "/images/tracks/pinwurm-away-from-home.jpeg",
        name: "Away from Home",
        urls: {
          soundcloud: "https://soundcloud.com/pinwurm/away-from-home",
        },
      },
      {
        date: parseDateString("2021-01-01"),
        image: "/images/tracks/day-6.jpeg",
        name: "Day 6",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/day-6-single/1505853103",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_m9IIj8JU9Ng71lg0-JLY1BnSm-S1FM__0",
          soundcloud: "https://soundcloud.com/pinwurm/day-6",
          spotify: "https://open.spotify.com/album/4qCXehggSEtg98w9ZnSjgZ",
        },
      },
      {
        date: parseDateString("2021-01-01"),
        image: "/images/tracks/knees.jpeg",
        name: "Knees",
        urls: {
          appleMusic:
            "https://music.apple.com/us/album/knees-single/1494833824",
          googleMusic:
            "https://music.youtube.com/playlist?list=OLAK5uy_mngmWxZbMJnJYQsZxrE33GqOciseCjhv8",
          soundcloud: "https://soundcloud.com/pinwurm/knees",
          spotify: "https://open.spotify.com/track/2Uasj9zR49GhKaB6WMmSBa",
        },
      },
      {
        date: parseDateString("2021-01-01"),
        name: "It's no Good (Depeche Mode cover)",
        urls: {
          spotify:
            "https://soundcloud.com/pinwurm/its-no-good-depeche-mode-cover",
        },
      },
    ],
  },
} satisfies { [band: string]: Band };

export const bandsArray = Array.from(Object.entries(bands));
