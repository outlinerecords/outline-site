"use client";

import { useRef, useState } from "react";

export default function MasterPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
  const audio = audioRef.current;
  if (!audio) return;

  try {
    if (playing) {
      audio.pause();
    } else {
      await audio.play();
    }
    setPlaying(!playing);
  } catch (err) {
    console.error("Audio play blocked:", err);
  }
};


  return (
    <div className="mt-20 border-t border-white/10 pt-10 flex flex-col gap-6 max-w-xl">
      <p className="text-[11px] tracking-[0.35em] text-white/40">
        CURRENT MASTER
      </p>

      <button onClick={toggle} className="group flex items-center gap-6 text-left">
        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition">
          <span className="text-xs tracking-widest">
            {playing ? "STOP" : "PLAY"}
          </span>
        </div>

        <div>
          <div className="text-sm tracking-wide">
            SKYFORMS — You Got Me
          </div>
          <div className="text-xs text-white/40 mt-1">
            Master preview · Outline Records
          </div>
        </div>
      </button>

      <audio ref={audioRef} src="/audio/hands_up.mp3" preload="metadata" />
    </div>
  );
}
