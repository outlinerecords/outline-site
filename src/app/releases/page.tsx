"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Track = {
  title: string;
  date: string;
  status: "upcoming" | "released";
};

type Album = {
  artist: string;
  title: string;
  cover: string;
  window: string;
  tracks: Track[];
};

const ALBUMS: Album[] = [
  {
    artist: "Elena Frost",
    title: "Glass Skin",
    cover: "/covers/glass-skin.png",
    window: "Rolling release · next 3 weeks",
    tracks: [
      { title: "First Breath", date: "JAN 12", status: "upcoming" },
      { title: "Static Between Us", date: "JAN 14", status: "upcoming" },
      { title: "Clear To You", date: "JAN 16", status: "upcoming" },
    ],
  },
  {
    artist: "SKYFORMS",
    title: "SKYFORMS: Momentum",
    cover: "/covers/momentum.jpg",
    window: "Momentum rollout · upcoming",
    tracks: [
      { title: "No Rewind", date: "JAN 12", status: "upcoming" },
      { title: "Dont Let Go", date: "JAN 14", status: "upcoming" },
      { title: "Vector Line", date: "JAN 16", status: "upcoming" },
        { title: "Echoes Of Our Name", date: "JAN 26", status: "upcoming" },
        { title: "All We Know", date: "JAN 28", status: "upcoming" },
        { title: "Momentum", date: "JAN 30", status: "upcoming" },
        { title: "You Got Me", date: "BONUS", status: "upcoming" },
        { title: "After The Falling", date: "BONUS", status: "upcoming" },

    ],
  },
  {
    artist: "SKYFORMS",
    title: "DO NOT SIT DOWN",
    cover: "/covers/dnsd.png",
    window: "Club series · staged drops",
    tracks: [
      { title: "Bass Takes Us Over", date: "JAN 19", status: "upcoming" },
        { title: "PEAK TIME PANIC", date: "JAN 21", status: "upcoming" },
        { title: "Hands Up, Blackout Down", date: "JAN 23", status: "upcoming" },
        { title: "Pressure In The Dark", date: "Upcoming", status: "upcoming" },
        { title: "Obey The Floor", date: "Upcoming", status: "upcoming" },
        { title: "NO PARES", date: "Upcoming", status: "upcoming" },
    ],
  },
];

export default function ReleasesPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white pb-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('/noise.png')]" />

      <div className="pointer-events-none absolute -top-[220px] -left-[220px] w-[520px] h-[520px] lg:w-[760px] lg:h-[760px] rounded-full bg-gradient-to-br from-[#7C5CFF]/20 to-[#3AE4FF]/8 blur-[110px] lg:blur-[130px]" />
      <div className="pointer-events-none absolute top-[12%] -right-[260px] w-[520px] h-[520px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-tr from-[#3AE4FF]/16 to-transparent blur-[130px] lg:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-40">

        {/* HERO */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="max-w-3xl space-y-8">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">
            OUTLINE MEDIA — RELEASE PIPELINE
          </p>

          <h1 className="text-[40px] sm:text-5xl lg:text-[88px] font-light tracking-tight leading-[1.05] lg:leading-[0.95]">
            Upcoming
            <br />
            releases.
          </h1>

          <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-xl">
            Albums are not dropped.
            <br />
            They are rolled out — track by track, on purpose.
          </p>
        </motion.div>

        {/* ALBUMS */}
        <div className="mt-24 lg:mt-32 space-y-24">

          {ALBUMS.map((album, idx) => (
            <motion.div key={album.title} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: idx * 0.1, ease: [0.4, 0, 0.2, 1] }} className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16">

              {/* COVER */}
              <div className="lg:col-span-4">
                <div className="relative aspect-square max-w-[320px] rounded-xl border border-white/15 bg-white/5 backdrop-blur overflow-hidden">
                  <Image src={album.cover} alt={album.title} fill className="object-cover" />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
                </div>
              </div>

              {/* INFO */}
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-2">
                  <div className="text-sm tracking-wide text-white/60">{album.artist}</div>
                  <div className="text-2xl sm:text-3xl tracking-tight">{album.title}</div>
                  <div className="text-xs tracking-widest uppercase text-white/40">
                    {album.window}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-4">
                  {album.tracks.map((track) => (
                    <div key={track.title} className="flex items-center justify-between gap-6 text-sm">
                      <div className="text-white/70">{track.title}</div>
                      <div className="text-xs tracking-widest uppercase text-white/40">
                        {track.status === "released" ? "Released" : track.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* FOOTNOTE */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }} className="mt-32 max-w-xl text-sm text-white/45 leading-relaxed">
          Releases follow a defined structure.
          <br />
          No surprise drops. No filler tracks.
          <br />
          Every song earns its place.
        </motion.div>

      </div>
    </section>
  );
}
