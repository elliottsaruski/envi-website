import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import myTracks from "../../data/MusicData.jsx";
import AlbumFilter from "./AlbumFilter.jsx";
import { Slider } from "@/components/ui/slider";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";

const ALBUMS = ["RETURN", "Heds Tapes", "Ghost Love", "Previous Releases"];

function formatTime(secs) {
  if (!secs || isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);
  const [filter, setFilter] = useState("SHOW ALL");
  const audioRef = useRef(null);

  const selectTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;
    audio.src = currentTrack.src;
    audio.play().catch(() => {});
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.play().catch(() => {});
    else audio.pause();
  }, [isPlaying]);

  const handleSeek = ([val]) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = val;
    setCurrentTime(val);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const next = !muted;
    audioRef.current.muted = next;
    setMuted(next);
  };

  const filteredTracks = myTracks.filter(
    (t) => filter === "SHOW ALL" || t.album === filter
  );

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* ── Left: Sticky player panel ─────────────────────────────────── */}
      <div className="w-[40%] sticky top-16 h-[calc(100vh-4rem)] bg-surface flex flex-col p-6 gap-5 border-r border-[#252525] overflow-hidden">
        {/* Album art */}
        <div className="aspect-square w-full overflow-hidden bg-bg shrink-0">
          {currentTrack ? (
            <img
              src={currentTrack.artwork}
              alt="album artwork"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40">
                SELECT A TRACK
              </span>
            </div>
          )}
        </div>

        {/* Track info */}
        <div className="flex flex-col gap-1 shrink-0">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {currentTrack?.album ?? "—"}
          </p>
          <h2 className="font-display text-2xl font-bold uppercase leading-tight text-text line-clamp-2">
            {currentTrack?.title ?? "—"}
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            ENVI
          </p>
        </div>

        {/* Progress */}
        <div className="flex flex-col gap-1 shrink-0">
          {/* Decorative waveform behind slider */}
          <div className="relative">
            <svg
              viewBox="0 0 400 24"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full opacity-20 text-accent"
              aria-hidden
            >
              {Array.from({ length: 80 }).map((_, i) => {
                const h = 4 + Math.abs(Math.sin(i * 0.7 + i * 0.3) * 20);
                return (
                  <rect
                    key={i}
                    x={i * 5}
                    y={(24 - h) / 2}
                    width="3"
                    height={h}
                    fill="currentColor"
                  />
                );
              })}
            </svg>
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={0.1}
              onValueChange={handleSeek}
              className="relative w-full"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">
              {formatTime(currentTime)}
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-5 shrink-0">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="text-text hover:text-accent transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <BsPauseFill size={28} /> : <BsPlayFill size={28} />}
          </button>
          <button
            onClick={toggleMute}
            className="text-muted-foreground hover:text-accent transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <HiVolumeOff size={20} /> : <HiVolumeUp size={20} />}
          </button>
        </div>

        <audio
          ref={audioRef}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      {/* ── Right: Scrollable track grid ──────────────────────────────── */}
      <div className="w-[60%] flex flex-col overflow-y-auto">
        {/* Filter tabs */}
        <div className="sticky top-0 z-10 bg-bg/95 backdrop-blur-sm px-6 pt-6 pb-4 border-b border-[#252525]">
          <AlbumFilter albums={ALBUMS} filter={filter} setFilter={setFilter} />
        </div>

        {/* Track cards */}
        <div className="flex flex-wrap gap-3 p-6">
          {filteredTracks.map((track) => (
            <motion.div
              key={track.key}
              className={`relative cursor-pointer overflow-hidden shrink-0 ${
                currentTrack?.key === track.key
                  ? "ring-1 ring-accent"
                  : "ring-1 ring-[#252525] hover:ring-accent/50"
              }`}
              style={{ width: "calc(20% - 0.6rem)", aspectRatio: "1" }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              onClick={() => selectTrack(track)}
            >
              <img
                src={track.artwork}
                alt={track.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-mono text-[9px] uppercase leading-tight text-text line-clamp-2">
                  {track.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
