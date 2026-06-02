import { audioUrl } from "../utils/cloudinary";

//----------------ARTWORK IMPORT
import returncover from "../assets/artworks/RETURN art.jpg";
import ghostLoveCover from "../assets/artworks/GHOST LOVE COVER.jpg";
import previousReleasesCover from "../assets/artworks/previousReleasesCover.jpg";
import genericHedsCover from "../assets/artworks/tape covers/genericHeds.jpg";
import ht3Cover from "../assets/artworks/tape covers/ht3.png";
import ht4Cover from "../assets/artworks/tape covers/ht4.png";
import ht5Cover from "../assets/artworks/tape covers/ht5.png";
import ht6Cover from "../assets/artworks/tape covers/ht6.png";
import ht7Cover from "../assets/artworks/tape covers/ht7.png";
import ht8Cover from "../assets/artworks/tape covers/ht8.png";
import ht9Cover from "../assets/artworks/tape covers/ht9.png";
import ht10Cover from "../assets/artworks/tape covers/ht10.png";
import ht11Cover from "../assets/artworks/tape covers/ht11.png";
import ht12Cover from "../assets/artworks/tape covers/ht12.png";
import ht14Cover from "../assets/artworks/tape covers/ht14.png";
import ht15Cover from "../assets/artworks/tape covers/ht15.png";

//------------------------ARRAY
const myTracks = [
  {
    key: "RETURN",
    title: "RETURN",
    album: "RETURN",
    artwork: returncover,
    src: audioUrl("envi-website/music/RETURN EP/RETURN_wd84w1"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/return?in=envimusic/sets/return-ep",
      spotify:
        "https://open.spotify.com/track/5MXD78ftQyJ32G4nHFNyEv?si=48d16592f4594870",
      apple: "https://music.apple.com/us/album/return/1647497906?i=1647497914",
    },
  },
  {
    key: "SERENITY",
    title: "SERENITY",
    album: "RETURN",
    artwork: returncover,
    src: audioUrl("envi-website/music/RETURN EP/SERENITY_j2c1ug"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/serenity?in=envimusic/sets/return-ep",
      spotify:
        "https://open.spotify.com/track/5Ne7x0K5CaY9CR1OMkjgqL?si=ac678162a43d4d9a",
      apple:
        "https://music.apple.com/us/album/serenity/1647497906?i=1647497915",
    },
  },
  {
    key: "TREATMERIGHT",
    title: "TREATMERIGHT",
    album: "RETURN",
    artwork: returncover,
    src: audioUrl("envi-website/music/RETURN EP/TREATMERIGHT_wim0go"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/treatmeright1?in=envimusic/sets/return-ep",
      spotify:
        "https://open.spotify.com/track/0QQmpKjzyQY46o2IWGcM8h?si=d10d7930035546e7",
      apple:
        "https://music.apple.com/us/album/treatmeright/1647497906?i=1647497916",
    },
  },
  {
    key: "DWISEEU ",
    title: "DW, I SEE U (ft. Justin Scott)",
    album: "RETURN",
    artwork: returncover,
    src: audioUrl("envi-website/music/RETURN EP/dwiseeu_qdix9z"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/dw-i-see-u?in=envimusic/sets/return-ep",
      spotify:
        "https://open.spotify.com/track/7zZjnDCiYzWmsbIXgeG3H7?si=d32d8ff9c3a94274",
      apple:
        "https://music.apple.com/us/album/dw-i-see-u-feat-justin-scott/1647497906?i=1647497917",
    },
  },
  {
    key: "UNDERWATER ",
    title: "UNDERWATER",
    album: "RETURN",
    artwork: returncover,
    src: audioUrl("envi-website/music/RETURN EP/UNDERWATER_pjzzxr"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/underwater?in=envimusic/sets/return-ep",
      spotify:
        "https://open.spotify.com/track/0UfMqTHQbCjI3aK1Fzy9KU?si=a3554495486847ad",
      apple:
        "https://music.apple.com/us/album/underwater/1647497906?i=1647497918",
    },
  },
  {
    key: "EXPECTATIONS ",
    title: "EXPECTATIONS",
    album: "RETURN",
    artwork: returncover,
    src: audioUrl("envi-website/music/RETURN EP/EXPECTATIONS_mqebif"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/expectations-1?in=envimusic/sets/return-ep",
      spotify:
        "https://open.spotify.com/track/49zM1YGdlRBqiOUDU5b99L?si=3c16b4984f2a4a10",
      apple:
        "https://music.apple.com/us/album/expectations/1647497906?i=1647497919",
    },
  },
  //   --------------------HEDS TAPES --------------------
  {
    key: "HT2",
    title: "heds tape 2 (sub)",
    album: "Heds Tapes",
    artwork: genericHedsCover,
    src: audioUrl("envi-website/music/heds/HT2-envi_gchn7w"),
    links: {
      soundcloud: null,
    },
  },
  {
    key: "HT3",
    title: "heds tape 3 (sub)",
    album: "Heds Tapes",
    artwork: ht3Cover,
    src: audioUrl("envi-website/music/heds/HT3-envi_nlddbt"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht3-envi-sub?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT4",
    title: "heds tape 4 (sub)",
    album: "Heds Tapes",
    artwork: ht4Cover,
    src: audioUrl("envi-website/music/heds/HT4-envi_levgpa"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht4-envi-sub?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT5",
    title: "heds tape 5 (sub)",
    album: "Heds Tapes",
    artwork: ht5Cover,
    src: audioUrl("envi-website/music/heds/HT5-envi_jfkkej"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht5-envi-sub?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT6",
    title: "heds tape 6 (on tape)",
    album: "Heds Tapes",
    artwork: ht6Cover,
    src: audioUrl("envi-website/music/heds/HT6-envi_agv9so"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht6-envi-on-tape?in=envimusic/sets/heds-tape-subs",
      tapeLink: "",
    },
  },
  {
    key: "HT7",
    title: "heds tape 7 (sub)",
    album: "Heds Tapes",
    artwork: ht7Cover,
    src: audioUrl("envi-website/music/heds/HT7-envi_nzacr8"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht7-envi-sub?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT8",
    title: "heds tape 8 (sub)",
    album: "Heds Tapes",
    artwork: ht8Cover,
    src: audioUrl("envi-website/music/heds/HT8-envi_alngkj"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht8-envi-sub?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT9",
    title: "heds tape 9 (on tape)",
    album: "Heds Tapes",
    artwork: ht9Cover,
    src: audioUrl("envi-website/music/heds/HT9-envi_eafswq"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht9-envi-on-tape?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT10",
    title: "heds tape 10 (on tape)",
    album: "Heds Tapes",
    artwork: ht10Cover,
    src: audioUrl("envi-website/music/heds/HT10-envi_kh58pq"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht10-envi-on-tape?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT11",
    title: "heds tape 11 (on tape)",
    album: "Heds Tapes",
    artwork: ht11Cover,
    src: audioUrl("envi-website/music/heds/HT11-envi_khzshj"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht11-envi-on-tape?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT12",
    title: "heds tape 12 (sub)",
    album: "Heds Tapes",
    artwork: ht12Cover,
    src: audioUrl("envi-website/music/heds/HT12-envi_o8s4z0"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht12-envi-sub?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT13",
    title: "heds tape 13 (on tape)",
    album: "Heds Tapes",
    artwork: genericHedsCover,
    src: audioUrl("envi-website/music/heds/HT13-envi_qtad6p"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht13-envi-on-tape?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT14",
    title: "heds tape 14 (on tape)",
    album: "Heds Tapes",
    artwork: ht14Cover,
    src: audioUrl("envi-website/music/heds/HT14-envi_uud8av"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht14-envi-on-tape?in=envimusic/sets/heds-tape-subs",
    },
  },
  {
    key: "HT15",
    title: "heds tape 15 (sub)",
    album: "Heds Tapes",
    artwork: ht15Cover,
    src: audioUrl("envi-website/music/heds/HT15-envi_zllltj"),
    links: {
      soundcloud:
        "https://soundcloud.com/envimusic/ht15-envi-sub?in=envimusic/sets/heds-tape-subs",
    },
  },
  //---------------------------------GHOST LOVE----------------
  {
    key: "GHOSTLOVE ",
    title: "Ghost Love w/ sleepless & lorn",
    album: "Ghost Love",
    artwork: ghostLoveCover,
    src: audioUrl(
      "envi-website/music/previous-releases/Ghost_Love_w_sleepless_lorn_pspyz0",
    ),
    links: {
      spotify:
        "https://open.spotify.com/track/7fc9S43kYNxBWuf4isrI0d?si=5a85a2f9df464fdd",
      apple:
        "https://music.apple.com/us/album/ghost-love/1449368707?i=1449368710",
    },
  },
  //---------------------------------PREVIOUS RELEASES----------------
  {
    key: "HOME",
    title: "home (youth)",
    artwork: previousReleasesCover,
    album: "Previous Releases",
    src: audioUrl("envi-website/music/previous-releases/home-youth_r1oejh"),
    links: {
      soundcloud: "https://soundcloud.com/envimusic/homee",
      spotify:
        "https://open.spotify.com/track/0H4yOmSiQJ8GUsmDdY0XgH?si=02b1c03030bd4b03",
      apple:
        "https://music.apple.com/us/album/home-youth/1456211474?i=1456211479",
    },
  },
  {
    key: "TRAPPED",
    title: "Trapped",
    artwork: previousReleasesCover,
    album: "Previous Releases",
    src: audioUrl("envi-website/music/previous-releases/trapped_pavyrn"),
    links: {
      soundcloud: "https://soundcloud.com/envimusic/trapped",
      spotify:
        "https://open.spotify.com/track/55OKjCnkPeTo3TUMNDkAyQ?si=028eb156fec24970",
      apple: "https://music.apple.com/us/album/trapped/1456211474?i=1456211480",
    },
  },
  {
    key: "FORGETFUL",
    title: "Forgetful",
    artwork: previousReleasesCover,
    album: "Previous Releases",
    src: audioUrl("envi-website/music/previous-releases/forgetful_gs1qec"),
    links: {
      soundcloud: "https://soundcloud.com/envimusic/forgetful_envi",
      spotify:
        "https://open.spotify.com/track/076DK0YLVazVZKP8Wo5yjy?si=ffd7889444d74742",
      apple:
        "https://music.apple.com/us/album/forgetful/1456211474?i=1456211481",
    },
  },
  {
    key: "URANG",
    title: "u rang?",
    artwork: previousReleasesCover,
    album: "Previous Releases",
    src: audioUrl("envi-website/music/previous-releases/u_rang_lgfyha"),
    links: {
      soundcloud: "https://soundcloud.com/envimusic/urang",
      spotify:
        "https://open.spotify.com/track/3t7QlQ8vMMJ0qsXTGZoKTW?si=ff3bde73e31249d1",
      apple: "https://music.apple.com/us/album/u-rang/1456211474?i=1456211482",
    },
  },
  {
    key: "SWANGSET",
    title: "swangset",
    artwork: previousReleasesCover,
    album: "Previous Releases",
    src: audioUrl("envi-website/music/previous-releases/swangset_w2k9k1"),
    links: {
      soundcloud: "https://soundcloud.com/envimusic/swangset",
      spotify:
        "https://open.spotify.com/track/1lO7unDgOlLdCpZbLa1fwT?si=2b316ef3554e4646",
      apple:
        "https://music.apple.com/us/album/swangset/1456211474?i=1456211483",
    },
  },
  {
    key: "ABSTRACTTHOUGHTS",
    title: "Abstract Thoughts",
    artwork: previousReleasesCover,
    album: "Previous Releases",
    src: audioUrl(
      "envi-website/music/previous-releases/abstract_thoughts_vtvoug",
    ),
    links: {
      soundcloud: "https://soundcloud.com/envimusic/abstractthoughts",
      spotify:
        "https://open.spotify.com/track/64XH6mI3WS6rgC9Nmya4Ch?si=461b3ec369de4338",
      apple:
        "https://music.apple.com/us/album/abstract-thoughts/1456211474?i=1456211484",
    },
  },
  {
    key: "COALESCENCE",
    title: "Coalescence",
    artwork: previousReleasesCover,
    album: "Previous Releases",
    src: audioUrl("envi-website/music/previous-releases/coalescence_fism5y"),
    links: {
      soundcloud: "https://soundcloud.com/envimusic/coalescence",
      spotify:
        "https://open.spotify.com/track/1CEWkBVgBUz5865DOcfE0i?si=e59791b84c2e47ac",
      apple:
        "https://music.apple.com/us/album/coalescence/1456211474?i=1456211485",
    },
  },
];

export default myTracks;
