import returnEPData from "../../data/media/RETURNep/returnEP-data";

function ReturnEP() {
  return (
    <div className="media-section">
      <div className="media-title-span">
        <h3>RETURN EP</h3>
        <span>
          My latest release, RETURN, features 6 animations made in Blender 3D
          and composited in Davinci Resolve.
        </span>
        <img src={returnEPData.returnImages[0].src} alt="" />
      </div>
      <div className="media-CONTENT" id="return-container">
        {returnEPData.returnAnimations.map((video) => {
          return (
            <iframe
              key={video.id}
              width="350"
              height="600"
              src={`https://www.youtube.com/embed/${video.src}`}
              title="YouTube video player"
              frameBorder="0"
              // allow="encrypted-media"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          );
        })}
      </div>
    </div>
  );
}

export default ReturnEP;
