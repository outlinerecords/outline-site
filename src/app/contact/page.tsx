"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white pb-24 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[url('/noise.png')]" />

      <div className="pointer-events-none absolute -top-[220px] -left-[220px] w-[520px] h-[520px] lg:w-[760px] lg:h-[760px] rounded-full bg-gradient-to-br from-[#7C5CFF]/20 to-[#3AE4FF]/8 blur-[110px] lg:blur-[130px]" />
      <div className="pointer-events-none absolute top-[12%] -right-[260px] w-[520px] h-[520px] lg:w-[700px] lg:h-[700px] rounded-full bg-gradient-to-tr from-[#3AE4FF]/16 to-transparent blur-[130px] lg:blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-32 lg:pt-40">

        {/* HERO */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} className="max-w-3xl space-y-10">
          <p className="text-[10px] sm:text-[11px] tracking-[0.25em] lg:tracking-[0.4em] text-white/40">
            OUTLINE MEDIA — CONTACT
          </p>

          <h1 className="text-[40px] sm:text-5xl lg:text-[88px] font-light tracking-tight leading-[1.05] lg:leading-[0.95]">
            Let’s talk
            <br />
            <span className="bg-gradient-to-r from-[#7C5CFF] to-[#3AE4FF] bg-clip-text text-transparent">
              with intent.
            </span>
          </h1>

          <p className="max-w-xl text-white/55 text-base sm:text-lg leading-relaxed">
            OUTLINE MEDIA is intentionally small.
            <br />
            If you reach out, please know why.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="mt-28 lg:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-y-20 lg:gap-x-16">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }} className="lg:col-span-6 space-y-12">

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                Contact
              </h2>

              <p className="text-sm text-white/60 leading-relaxed">
                For general inquiries, collaborations, or serious project-related questions,
                you can reach us via email.
              </p>

              <a
                href="mailto:office@outline-records.com"
                className="inline-block text-lg tracking-tight text-white border-b border-white/40 pb-2 hover:border-white transition"
              >
                office@outline-records.com
              </a>
            </div>

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                Please note
              </h2>

              <p className="text-sm text-white/55 leading-relaxed">
                We do not offer demo reviews, unsolicited submissions or
                short-term promotional services.
                <br />
                Messages without context may not receive a response.
              </p>
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15, ease: [0.4, 0, 0.2, 1] }} className="lg:col-span-6 space-y-12">

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                What we respond to
              </h2>

              <ul className="space-y-4 text-sm text-white/65">
                <li>— Long-term artist collaborations</li>
                <li>— Strategic partnerships</li>
                <li>— Licensing & media requests</li>
                <li>— Press & editorial inquiries</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-sm tracking-[0.35em] uppercase text-white/40">
                What we don’t
              </h2>

              <ul className="space-y-4 text-sm text-white/65">
                <li>— Mass demo submissions</li>
                <li>— Cold marketing offers</li>
                <li>— Influencer outreach</li>
                <li>— Pay-for-play requests</li>
              </ul>
            </div>

          </motion.div>
        </div>

        {/* FOOT CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4 }} className="mt-32 max-w-xl text-sm text-white/45 leading-relaxed">
          Thoughtful messages get thoughtful replies.
          <br />
          Everything else fades out.
        </motion.div>

      </div>
    </section>
  );
}
