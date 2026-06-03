function AlbumFilter({ albums, filter, setFilter }) {
  const tabs = ["SHOW ALL", ...albums];

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {tabs.map((album) => (
        <button
          key={album}
          onClick={() => setFilter(album)}
          className={`font-mono text-xs uppercase tracking-widest transition-colors ${
            filter === album
              ? "text-accent border-b border-accent pb-0.5"
              : "text-muted-foreground hover:text-text"
          }`}
        >
          {album}
        </button>
      ))}
    </div>
  );
}

export default AlbumFilter;
