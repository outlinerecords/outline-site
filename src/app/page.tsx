"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35; // ✅ deutlich angenehmer Start

    try {
      if (playing) {
        audio.pause();
      } else {
        await audio.play();
      }
      setPlaying(!playing);
    } catch (err) {
      console.error("Audio blocked:", err);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('/noise.png')]" />

      {/* Color Glows – bewusst höher & weicher */}
      <div className="pointer-events-none absolute -top-[300px] -left-[300px] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-[#7C5CFF]/35 to-[#3AE4FF]/15 blur-[180px]" />
      <div className="pointer-events-none absolute top-[10%] -right-[350px] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#3AE4FF]/25 to-transparent blur-[200px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-32">

        {/* HERO TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="lg:col-span-7 space-y-12"
        >
          <p className="text-[11px] tracking-[0.4em] text-white/40">
            OUTLINE MEDIA — MODERN MUSIC & MEDIA COMPANY
          </p>

          <h1 className="text-6xl lg:text-[96px] font-light tracking-tight leading-[0.95]">
            We don’t follow
            <br />
            the industry.
            <br />
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#3AE4FF] bg-clip-text text-transparent">
              We design it.
            </span>
          </h1>

          <p className="max-w-xl text-white/55 text-lg leading-relaxed pt-4">
            OUTLINE MEDIA builds artist systems — not moments.
            <br />
            Brands over personalities. Structure over noise.
          </p>

          {/* ACTION LINKS */}
          <div className="flex gap-10 pt-8">
            <a href="/artists" className="text-xs tracking-[0.35em] uppercase border-b border-white/40 pb-2 hover:border-white transition">
              View Artists
            </a>
            <a href="/about" className="text-xs tracking-[0.35em] uppercase text-white/40 hover:text-white transition">
              Read Manifest
            </a>
          </div>
        </motion.div>

        {/* RELEASE CAPSULE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6"
        >
          {/* Album Cover */}
          <div className="relative w-[260px] h-[260px] rounded-xl border border-white/15 bg-white/5 backdrop-blur overflow-hidden">
            <Image
              src="/covers/DNSD.png"
              alt="DO NOT SIT DOWN"
              fill
              className="object-cover"
              priority
            />
            {/* subtle inner glow */}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
          </div>

          {/* Player */}
          <button
            onClick={togglePlay}
            className="flex items-center gap-5 group pt-4"
          >
            <div
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition ${
                playing ? "border-white" : "border-white/30 group-hover:border-white"
              }`}
            >
              <span className="text-xs tracking-widest">
                {playing ? "STOP" : "PLAY"}
              </span>
            </div>

            <div>
              <div className="text-sm tracking-wide">
                SKYFORMS — Hands Up, Blackout Down
              </div>
              <div className="text-xs text-white/40 mt-1">
                DO NOT SIT DOWN · Master Preview
              </div>
            </div>
          </button>
        </motion.div>

        {/* MANIFEST SIDE BLOCK */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.4 }}
  className="lg:col-span-5 mt-28 flex flex-col items-start gap-6 lg:pl-12"
>

          <p className="mb-6">This is not a traditional label.</p>
          <p className="mb-6">
            We design artist identities, control release cadence, and treat music as a long-term digital asset.
          </p>
          <p>
            Technology stays invisible.
            <br />
            Taste stays human.
          </p>
        </motion.div>
      </div>

      {/* AUDIO */}
      <audio ref={audioRef} src="/audio/hands_up.mp3" preload="metadata" />
    </section>
  );
}
