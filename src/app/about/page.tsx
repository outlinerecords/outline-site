"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white pb-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('/noise.png')]" />

      <div className="pointer-events-none absolute -top-[220px] -left-[220px] w-[520px] h-[520px] lg:w-[760px] lg:h-[760px] rounded-full bg-gradient-to-br from-[#7C5CFF]/20 to-[#3AE4FF]/8 blur-[110px] lg:blur-[130px]" />
      <div className="pointer-events-none absolute top-[12%] -right-[260px] w-[520px] h-[520px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-tr from-[#3AE4FF]/16 to-transparent blur-[130px] lg:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-40">

        {/* HERO */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="max-w-4xl space-y-10">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">
            OUTLINE MEDIA — MANIFEST
          </p>

          <h1 className="text-[42px] sm:text-5xl lg:text-[92px] font-light tracking-tight leading-[1.05] lg:leading-[0.95]">
            We don’t build
            <br />
            hype.
            <br />
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#3AE4FF] bg-clip-text text-transparent">
              We build systems.
            </span>
          </h1>

          <p className="max-w-2xl text-white/55 text-base sm:text-lg leading-relaxed pt-2">
            OUTLINE MEDIA is an independent music & media project.
            <br />
            We design long-term artist worlds instead of short-lived moments.
          </p>
        </motion.div>

        {/* MANIFEST BLOCKS */}
        <div className="mt-28 lg:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-16">

          {/* LEFT COLUMN */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} className="lg:col-span-6 space-y-16">

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                Philosophy
              </h2>
              <p className="text-lg sm:text-xl leading-relaxed text-white/80">
                Music is not content.
                <br />
                Artists are not algorithms.
                <br />
                And momentum is never an accident.
              </p>
              <p className="text-sm text-white/55 leading-relaxed">
                We believe in clear identity, visual discipline and sonic consistency.
                In building worlds people recognize — even without a name attached.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                Structure over Noise
              </h2>
              <p className="text-sm text-white/55 leading-relaxed">
                We don’t chase trends.
                <br />
                We define constraints.
                <br />
                We repeat what works.
                <br />
                And we remove everything else.
              </p>
            </div>

          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease: [0.4, 0, 0.2, 1] }} className="lg:col-span-6 space-y-16">

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                What we do
              </h2>
              <ul className="space-y-4 text-sm text-white/65">
                <li>— Design artist identities & systems</li>
                <li>— Build release structures, not singles</li>
                <li>— Define visual rules, not aesthetics</li>
                <li>— Focus on longevity, not virality</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                What we are not
              </h2>
              <ul className="space-y-4 text-sm text-white/65">
                <li>— Not a traditional label</li>
                <li>— Not a management agency</li>
                <li>— Not trend-driven</li>
                <li>— Not personality-first</li>
              </ul>
            </div>

          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }} className="mt-32 lg:mt-40 flex flex-wrap gap-10">
          <a href="/artists" className="text-xs tracking-[0.3em] uppercase border-b border-white/40 pb-2 hover:border-white transition">
            View Artists
          </a>
          <a href="/releases" className="text-xs tracking-[0.3em] uppercase text-white/40 hover:text-white transition">
            Explore Releases
          </a>
        </motion.div>

      </div>
    </section>
  );
}
