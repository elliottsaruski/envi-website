import { Suspense, useRef, useEffect } from "react";
import { Tweet } from "react-tweet";

import blenderChallenge from "../data/media/blender-challenge/blender-chal-data";

import {
  AdvancedVideo,
  AdvancedImage,
  lazyload,
  responsive,
  accessibility,
  placeholder,
} from "@cloudinary/react";

function MediaPage() {
  const returnEPRef = useRef();
  const otherArtRef = useRef();

  useEffect(() => {
    if (window && returnEPRef.current) {
      window.cloudinary
        .galleryWidget({
          container: returnEPRef.current,
          cloudName: "elliott-dev",
          mediaAssets: [
            {
              tag: "return-animation",
              mediaType: "video",
            },
          ],
          displayProps: {
            spacing: 15,
          },
          height: 200,
          width: 200,
          crop: "crop",
          aspectRatio: "9:16",
          bgColor: "transparent",
          carouselLocation: "bottom",
          carouselOffset: 10,
          navigation: "always",
          videoBreakpoint: 25,
          navigationButtonProps: {
            shape: "rectangle",
            iconColor: "#ffffff",
            color: "#000",
            size: 52,
            navigationPosition: "offset",
            navigationOffset: 12,
          },
          themeProps: {
            primary: "#000000",
            active: "#777777",
          },
          carouselStyle: "indicators",
        })
        .render();
    }
  });

  // let returnAnimationGallery = cld.video("returnAnimations/return").quality(50);

  return (
    <section className="media--wrapper">
      {/* MAIN HEADING */}
      <h2>Media</h2>

      {/* RETURN EP SECTION */}
      <div className="media-section">
        <div className="media-title-span">
          <h3>RETURN EP</h3>
        </div>
        <div
          style={{ width: "25rem", margin: "0 auto" }}
          className="media-CONTENT-promo"
          id="return-container"
          ref={returnEPRef}>
          {/* display branding and promo material */}
        </div>
      </div>
      <hr />

      {/* ART SECTION */}
      <div className="media-section">
        <div className="media-title-span">
          <h3>Other Art</h3>
          <span>
            I find pleasure in creating every aspect of this project. Whether
            that be mixing/mastering, art direction, or simply promotional
            materials, you can find me adopting new softwares - or relying on
            ones I am familiar with - to define how the listener might{" "}
            <em>SEE</em> my music.
          </span>
        </div>
        <div className="media-CONTENT-other" ref={otherArtRef}>
          {/* display other work material */}
        </div>
      </div>
      <hr />

      {/* BLENDER CHALLENGE SECTION */}
      <div className="media-section">
        <div className="media-title-span">
          <h3>31 Day Blender 3D Challenge</h3>
          <span>
            The goal here was to enter a state exposure therapy while
            simulatneously practicing a new-ish software. Imposter syndrome,
            social criticism, perfectionism, and creative-blocks, all
            contributing to a self I did not respect as an artist. This exercise
            taught me the power of setting creative limitations - including time
            restraints - and overcoming the fear of the <em>social</em> side of
            being an artist, that being the aspect of sharing work with the
            world, hence the posting on Twitter/X.
          </span>
        </div>
        <Suspense fallback={<p>loading</p>}>
          <div className="media-CONTENT-tweets">
            {/* display 31 Day Blender 3D Challenge material */}
            {blenderChallenge.map((tweet) => {
              return <Tweet key={tweet.id} id={tweet.src} />;
            })}
          </div>
        </Suspense>
      </div>
    </section>
  );
}

export default MediaPage;
