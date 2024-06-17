function MusicResourcesPage() {
  return (
    <section className="music-resources--wrapper">
      <h2>Music Resources</h2>
      <div>
        <h3>Presets</h3>
        <a
          href="https://envimusic.gumroad.com/l/vitalpresetsbyenvi"
          target="_blank">
          <img
            src={`https://drive.google.com/thumbnail?id=1y4VjaLOs6Dat7ddgYirQ50frvjEQK7w4&sz=w1000`}
          />
          <figcaption>Vital Presets by envi - FREE</figcaption>
        </a>
      </div>
      <div>
        <h3>Sample Packs</h3>
        <span>coming soon...</span>
      </div>
    </section>
  );
}

export default MusicResourcesPage;
