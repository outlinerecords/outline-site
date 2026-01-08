import Footer from "@/components/Footer";
import "./globals.css";
import { ReactNode } from "react";


export const metadata = {
  title: "OUTLINE MEDIA",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#F5F5F5] antialiased">
        <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-3 sm:py-4 flex justify-between items-center">
            <span className="tracking-[0.25em] text-sm font-medium">
              OUTLINE MEDIA
            </span>
            <nav className="hidden sm:flex gap-8 text-xs tracking-widest text-white/60">
              <a href="/artists" className="hover:text-white">ARTISTS</a>
              <a href="/releases" className="hover:text-white">RELEASES</a>
              <a href="/about" className="hover:text-white">ABOUT</a>
              <a href="/contact" className="hover:text-white">CONTACT</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
