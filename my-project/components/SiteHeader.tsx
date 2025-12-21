import Link from "next/link";
import { type NavItem } from "@/components/NavBar";

interface SiteHeaderProps {
  navItems: NavItem[];
}

export default function SiteHeader({ navItems }: SiteHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-4 sm:px-10 py-4 gap-4">
      <Link href="/" className="flex items-center gap-4 text-primary">
        <span className="material-symbols-outlined text-4xl">local_hospital</span>
        <h2 className="text-2xl font-bold tracking-[-0.015em] text-[#0d171b] dark:text-slate-50">
          OdiMedi
        </h2>
      </Link>
      <nav className="flex items-center gap-6 sm:gap-9 text-sm font-medium text-slate-700 dark:text-slate-300">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="hover:text-primary transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
