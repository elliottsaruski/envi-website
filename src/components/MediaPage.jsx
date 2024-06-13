import myMedia from "../data/MediaData";

const mediaList = myMedia.map((media) => {
  if (media.mediaType == "image") {
    return <img key={media.id} src={media.src} alt={media.title} />;
  } else if (media.mediaType == "video") {
    return <video key={media.id} src={media.src} alt={media.title} controls />;
  }
});

function MediaPage() {
  return (
    <section className="media--wrapper">
      <div className="media-inner-wrapper">{mediaList}</div>
    </section>
  );
}

export default MediaPage;
