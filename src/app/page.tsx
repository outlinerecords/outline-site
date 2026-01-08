"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const AUDIO_URL = process.env.NEXT_PUBLIC_AUDIO_URL || "/audio/hands_up.mp3";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (!audio.src) {
        audio.src = AUDIO_URL;
        audio.volume = 0;
      }

      if (playing) {
        audio.pause();
        setPlaying(false);
        return;
      }

      await audio.play();

      let v = 0;
      const fade = setInterval(() => {
        v += 0.05;
        audio.volume = Math.min(v, 0.35);
        if (v >= 0.35) clearInterval(fade);
      }, 20);

      setPlaying(true);
    } catch (err) {
      console.error("Audio blocked:", err);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('/noise.png')]" />

      <div className="pointer-events-none absolute -top-[200px] -left-[200px] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-br from-[#7C5CFF]/25 to-[#3AE4FF]/10 blur-[100px] lg:blur-[120px]" />
      <div className="pointer-events-none absolute top-[15%] -right-[240px] w-[520px] h-[520px] lg:w-[650px] lg:h-[650px] rounded-full bg-gradient-to-tr from-[#3AE4FF]/20 to-transparent blur-[120px] lg:blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-40 pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-y-24 lg:gap-y-32">

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="lg:col-span-7 space-y-10">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">
            OUTLINE MEDIA — MODERN MUSIC & MEDIA PROJECT
          </p>

          <h1 className="text-[42px] sm:text-5xl lg:text-[96px] font-light tracking-tight leading-[1.05] lg:leading-[0.95]">
            We don’t follow
            <br />
            the industry.
            <br />
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#3AE4FF] bg-clip-text text-transparent">
              We design it.
            </span>
          </h1>

          <p className="max-w-xl text-white/55 text-base sm:text-lg leading-relaxed pt-2">
            OUTLINE MEDIA builds artist systems — not moments.
            <br />
            Brands over personalities. Structure over noise.
          </p>

          <div className="flex gap-10 pt-6">
            <a href="/artists" className="text-xs tracking-[0.3em] uppercase border-b border-white/40 pb-2 hover:border-white transition">
              View Artists
            </a>
            <a href="/about" className="text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white transition">
              Read Manifest
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }} className="lg:col-span-5 flex flex-col items-start gap-6 lg:pl-12">
          <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-xl border border-white/15 bg-white/5 backdrop-blur overflow-hidden">
            <Image src={process.env.NEXT_PUBLIC_COVER_URL || "/covers/DNSD.png"} alt="DO NOT SIT DOWN" fill className="object-cover" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
          </div>

          <button onClick={togglePlay} className="flex items-center gap-4 group pt-2">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition ${playing ? "border-white" : "border-white/30 group-hover:border-white"}`}>
              <span className="text-[10px] tracking-widest">{playing ? "STOP" : "PLAY"}</span>
            </div>

            <div>
              <div className="text-sm tracking-wide leading-tight">
                SKYFORMS — Hands Up, Blackout Down
              </div>
              <div className="text-[11px] text-white/40 mt-1">
                DO NOT SIT DOWN · Master Preview
              </div>
            </div>
          </button>
        </motion.div>
      </div>

      <audio ref={audioRef} preload="none" />
    </section>
  );
}
