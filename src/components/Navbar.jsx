import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/useTheme";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-ink/80 dark:bg-ink/80 backdrop-blur-md border border-white/10 rounded-full pl-6 pr-2 py-2 shadow-lg">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-slate-200 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition"
          >
            {link.label}
          </a>
        ))}

        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="ml-2 w-8 h-8 rounded-full bg-gold/90 hover:bg-gold flex items-center justify-center transition"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-ink" />
          ) : (
            <Moon className="w-4 h-4 text-ink" />
          )}
        </button>
      </div>
    </nav>
  );
}

