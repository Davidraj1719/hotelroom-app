import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hotel,
  Menu as MenuIcon,
  X,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rooms & Suites", to: "/room" },
  { label: "Dining", to: "/dining" },
  { label: "Experiences", to: "/experiences" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 border-b
      border-[#B69B68]/30 bg-[#F7F4EC]/95
      text-[#29382F] shadow-lg backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center
      justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">

        {/* Hotel Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="rounded-lg border border-[#B69B68]/60
          bg-[#B69B68]/10 p-2.5">
            <Hotel size={27} className="text-[#8A7042]" />
          </span>

          <span>
            <span className="block whitespace-nowrap text-lg
            font-semibold tracking-[0.12em] sm:text-2xl">
              GRAND{" "}
              <span className="font-serif italic text-[#8A7042]">
                ÉLITE
              </span>
            </span>

            <span className="hidden text-[9px] tracking-[0.25em]
            text-[#657267] sm:block">
              LUXURY HOTEL & RESORT
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="group relative whitespace-nowrap
              py-2 text-sm text-[#455349] transition
              hover:text-[#8A7042]"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-px
              w-0 bg-[#B69B68] transition-all duration-300
              group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Booking and Mobile Controls */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/booking"
            className="hidden items-center gap-2 border
            border-[#B69B68] bg-[#B69B68] px-3 py-3
            text-xs font-semibold uppercase tracking-wider
            text-[#29382F] transition hover:bg-[#29382F]
            hover:text-[#F7F4EC] sm:inline-flex lg:px-4"
          >
            <CalendarDays size={16} />
            <span className="hidden xl:inline">Book Your Stay</span>
            <span className="xl:hidden">Book Now</span>
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            className="rounded-lg border border-[#29382F]/15 p-2.5
            text-[#29382F] transition hover:border-[#B69B68]
            hover:text-[#8A7042] lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="hotel-mobile-menu"
          >
            {open ? <X size={23} /> : <MenuIcon size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="hotel-mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[#B69B68]/25
            bg-[#F7F4EC] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col
            gap-1 px-4 py-4 sm:px-6">
              {links.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.to}
                    onClick={closeMenu}
                    className="block border-b border-[#29382F]/10
                    px-3 py-3.5 text-sm tracking-wide
                    text-[#455349] transition
                    hover:bg-[#E8EDE3] hover:text-[#8A7042]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <Link
                to="/booking"
                onClick={closeMenu}
                className="mt-3 flex items-center justify-center
                gap-2 bg-[#B69B68] px-5 py-3.5 text-sm
                font-semibold uppercase tracking-wider
                text-[#29382F] transition hover:bg-[#D8C49A] sm:hidden"
              >
                <CalendarDays size={17} />
                Book Your Stay
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}