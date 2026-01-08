"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Artist = {
  key: string;
  name: string;
  line1: string;
  line2: string;
  image: string;
  href: string;
};

const ARTISTS: Artist[] = [
  { key: "skyforms", name: "SKYFORMS", line1: "EDM / Peak-Time / Bass-heavy", line2: "Momentum era. Club-first systems.", image: "/images/artists/skyforms.jpg", href: "/artists/skyforms" },
  { key: "elena-frost", name: "Elena Frost", line1: "Modern Pop / Bedroom / Intimate", line2: "Glass Skin. Midnight honesty.", image: "/images/artists/elena-frost.png", href: "/artists/elena-frost" },
  { key: "rowan", name: "ROWAN", line1: "Dark Country / Americana / Storytelling", line2: "Low Sun Over Arizona. Warm damage.", image: "/images/artists/rowan.png", href: "/artists/rowan" },
];

const RELEASES = [
  { title: "You Got Me", meta: "SKYFORMS · Momentum", href: "/artists/skyforms" },
  { title: "Quiet In Between", meta: "Elena Frost · Glass Skin", href: "/artists/elena-frost" },
  { title: "Low Sun Over Arizona", meta: "ROWAN · Album world", href: "/artists/rowan" },
];

export default function ArtistsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('/noise.png')]" />
      <div className="pointer-events-none absolute -top-[220px] -left-[220px] w-[520px] h-[520px] lg:w-[760px] lg:h-[760px] rounded-full bg-gradient-to-br from-[#7C5CFF]/20 to-[#3AE4FF]/8 blur-[110px] lg:blur-[130px]" />
      <div className="pointer-events-none absolute top-[12%] -right-[260px] w-[520px] h-[520px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-tr from-[#3AE4FF]/16 to-transparent blur-[130px] lg:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 sm:pt-28 lg:pt-36 pb-24 lg:pb-32">
        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col">
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">OUTLINE MEDIA — ARTIST ROSTER</p>
          </div>
          <Link href="/" className="text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white transition">Back</Link>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1 }} className="mt-10 lg:mt-14">
          <h1 className="text-[40px] sm:text-5xl lg:text-[88px] font-light tracking-tight leading-[1.05] lg:leading-[0.95]">
            The artists.
            <br />
            The worlds.
            <br />
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#3AE4FF] bg-clip-text text-transparent">One system.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-white/55 text-base sm:text-lg leading-relaxed">A small roster by design. Distinct sonic identities with consistent visual rules and release discipline.</p>
        </motion.div>

        <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-10">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }} className="lg:col-span-7 space-y-5">
            {ARTISTS.map((a, idx) => (
              <motion.div key={a.key} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.05 * idx, ease: [0.4, 0, 0.2, 1] }}>
                <Link href={a.href} className="group block">
                  <div className="flex items-center justify-between gap-6 border-b border-white/10 py-6 hover:border-white/20 transition-colors">
                    <div className="min-w-0">
                      <div className="text-lg sm:text-xl tracking-tight text-white">{a.name}</div>
                      <div className="mt-1 text-[12px] sm:text-[13px] text-white/40 tracking-wide">{a.line1}</div>
                      <div className="mt-2 text-sm text-white/55">{a.line2}</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white transition">Open</div>
                      <div className="text-white/40 group-hover:text-white transition">→</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.4, 0, 0.2, 1] }} className="lg:col-span-5 lg:pl-10 flex flex-col gap-6">
            <div className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">FEATURED VISUAL</div>

            <div className="relative w-full max-w-[420px] aspect-square rounded-xl border border-white/15 bg-white/5 backdrop-blur overflow-hidden">
              <Image src="/images/artists/skyforms.jpg" alt="Featured artist" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 420px" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-sm tracking-wide">SKYFORMS</div>
                <div className="text-[11px] text-white/40 mt-1">Cover rule: symbol-only, no text</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">LATEST RELEASES</div>
              <div className="mt-4 space-y-3">
                {RELEASES.map((r) => (
                  <Link key={r.title} href={r.href} className="block group">
                    <div className="flex items-center justify-between gap-4 border border-white/10 bg-white/5 rounded-xl px-4 py-4 hover:border-white/20 transition-colors">
                      <div className="min-w-0">
                        <div className="text-sm tracking-tight text-white">{r.title}</div>
                        <div className="mt-1 text-[11px] text-white/40 tracking-wide">{r.meta}</div>
                      </div>
                      <div className="text-white/40 group-hover:text-white transition">→</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">NAV</div>
              <div className="mt-4 flex gap-10">
                <Link href="/about" className="text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white transition">Read Manifest</Link>
                <Link href="/" className="text-xs tracking-[0.3em] uppercase border-b border-white/40 pb-2 hover:border-white transition">Home</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
