import { useEffect, useRef } from "react";

function ReturnEP() {
  const returnEPRef = useRef();

  // useEffect(() => {
  //   if (window && returnEPRef.current) {
  //     window.cloudinary
  //       .galleryWidget({
  //         container: returnEPRef.current,
  //         cloudName: "elliott-dev",
  //         mediaAssets: [
  //           {
  //             tag: "return-animation",
  //             mediaType: "video",
  //           },
  //         ],

  //         aspectRatio: "9:16",
  //         carouselLocation: "bottom",
  //         carouselOffset: 10,
  //         navigation: "always",
  //         navigationButtonProps: {
  //           shape: "rectangle",
  //           iconColor: "#ffffff",
  //           color: "#000",
  //           size: 52,
  //           navigationPosition: "offset",
  //           navigationOffset: 12,
  //         },
  //         themeProps: {
  //           primary: "#000000",
  //           active: "#777777",
  //         },
  //         carouselStyle: "indicators",
  //       })
  //       .render();
  //   }
  // });

  return (
    <div className="media-section">
      <div className="media-title-span">
        <h3>RETURN EP</h3>
        <span>
          My latest release, RETURN, features 6 animations made in Blender 3D
          and composited in Davinci Resolve.
        </span>
      </div>
      <div
        style={{ width: "25rem", margin: "0 auto" }}
        className="media-CONTENT-promo"
        id="return-container"
        ref={returnEPRef}>
        {/* div to display branding and promo material */}
      </div>
    </div>
  );
}

export default ReturnEP;
