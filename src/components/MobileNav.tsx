"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Artists", href: "/artists" },
  { label: "Releases", href: "/releases" },
  { label: "About", href: "/about" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur border-t border-white/10 lg:hidden">
      <div className="flex items-center justify-around px-6 py-4">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={`text-xs tracking-widest uppercase transition ${active ? "text-white" : "text-white/40 hover:text-white"}`}>
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
