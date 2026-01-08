export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">

        {/* Brand */}
        <div className="md:col-span-5 space-y-6">
          <div className="text-sm tracking-[0.4em]">
            OUTLINE MEDIA
          </div>

          <p className="text-sm text-white/50 leading-relaxed max-w-sm">
            A modern music & media company.
            <br />
            Designing artist systems, not moments.
          </p>

          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} OUTLINE MEDIA
          </p>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3 space-y-4 text-sm">
          <div className="text-white/40 tracking-widest text-xs">
            NAVIGATION
          </div>
          <a href="/artists" className="block text-white/60 hover:text-white transition">Artists</a>
          <a href="/releases" className="block text-white/60 hover:text-white transition">Releases</a>
          <a href="/about" className="block text-white/60 hover:text-white transition">About</a>
          <a href="/contact" className="block text-white/60 hover:text-white transition">Contact</a>
        </div>

        {/* Legal */}
        <div className="md:col-span-4 space-y-4 text-sm">
          <div className="text-white/40 tracking-widest text-xs">
            LEGAL
          </div>
          <a href="/imprint" className="block text-white/60 hover:text-white transition">Imprint</a>
          <a href="/privacy" className="block text-white/60 hover:text-white transition">Privacy Policy</a>
          <a href="/terms" className="block text-white/60 hover:text-white transition">Terms</a>
        </div>

      </div>
    </footer>
  );
}
