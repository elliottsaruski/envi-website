import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";

const NAV_LINKS = [
  { to: "/music",     label: "MUSIC" },
  { to: "/media",     label: "MEDIA" },
  { to: "/about",     label: "ABOUT" },
  { to: "/resources", label: "RESOURCES" },
];

const linkClass = ({ isActive }) =>
  `font-mono text-xs uppercase tracking-widest transition-colors ${
    isActive
      ? "text-accent underline decoration-accent underline-offset-4 decoration-[1px]"
      : "text-muted-foreground hover:text-accent"
  }`;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "border-b border-[#252525]/60" : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 h-16 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <NavLink
          to="/home"
          className="font-display font-black text-xl uppercase text-text hover:text-accent transition-colors select-none"
        >
          ENVI
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile nav — Sheet drawer */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden text-muted-foreground hover:text-text transition-colors">
            <HiMenu size={22} />
          </SheetTrigger>
          <SheetContent side="left" className="bg-bg border-[#252525] w-[260px] flex flex-col">
            <nav className="flex flex-col gap-8 pt-12">
              {NAV_LINKS.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
