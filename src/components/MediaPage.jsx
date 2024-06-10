import myMedia from "../data/MediaData";

const mediaList = myMedia.map((media) => {
  return <img key={media.id} src={media.src} alt={media.title} />;
});

function MediaPage() {
  return <section className="media--wrapper">{mediaList}</section>;
}

export default MediaPage;
