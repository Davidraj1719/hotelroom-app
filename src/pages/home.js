import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  Coffee,
  Heart,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹6,500",
    description: "Elegant comfort with beautiful garden views.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    tag: "MOST POPULAR",
  },
  {
    name: "Executive Suite",
    price: "₹12,000",
    description: "Spacious interiors designed for exceptional stays.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    tag: "PREMIUM",
  },
  {
    name: "Presidential Suite",
    price: "₹25,000",
    description: "An exclusive retreat with refined luxury.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    tag: "EXCLUSIVE",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Luxury Rooms",
    description: "Thoughtfully designed spaces for ultimate comfort.",
  },
  {
    icon: Coffee,
    title: "Fine Dining",
    description: "Exceptional flavors prepared by expert chefs.",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Unwind in a peaceful and beautiful setting.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Service",
    description: "Personalized hospitality throughout your stay.",
  },
];

export default function Home() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F4EC] text-[#29382F]">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[760px] items-center overflow-hidden text-[#F7F4EC] sm:min-h-[820px]">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=90"
          alt="Elegant luxury hotel interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#11130f]/95 via-[#11130f]/65 to-[#11130f]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171916] via-transparent to-[#171916]/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-32 pt-32 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[#B69B68]" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#B69B68] sm:text-sm">
                An extraordinary escape
              </span>
            </div>

            <h1 className="font-serif text-5xl font-light leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl">
              Where Luxury
              <br />
              Meets <span className="italic text-[#B69B68]">Serenity.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
              Discover timeless elegance, exceptional comfort, and
              unforgettable moments at Grand Élite Hotel & Resort.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-3 bg-[#B69B68] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#29382F] transition hover:bg-[#D8C49A] sm:px-8"
              >
                Explore Our Rooms
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-4 text-sm text-white transition hover:border-[#B69B68] hover:text-[#B69B68]"
              >
                Discover Our Story
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/20 pt-6">
              <div className="flex items-center gap-2">
                <Star size={17} className="fill-[#B69B68] text-[#B69B68]" />
                <span className="text-sm text-stone-200">
                  Luxury Hospitality
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={17} className="text-[#B69B68]" />
                <span className="text-sm text-stone-200">
                  A destination of distinction
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/70 lg:flex">
          <span className="h-px w-10 bg-[#B69B68]" />
          Exceptional stays, unforgettable memories
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="relative z-20 mx-auto -mt-4 max-w-7xl px-4 sm:px-8 lg:px-10">
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(event) => {
            event.preventDefault();

            if (!checkIn || !checkOut) {
              alert("Please select your check-in and check-out dates.");
              return;
            }

            if (checkOut <= checkIn) {
              alert("Check-out must be after check-in.");
              return;
            }

            const params = new URLSearchParams({
              checkIn,
              checkOut,
              guests,
            });

            window.location.href = `/booking?${params.toString()}`;
          }}
          className="grid gap-4 border border-[#B69B68]/30 bg-[#E8EDE3] p-5 shadow-2xl sm:grid-cols-2 sm:p-7 lg:grid-cols-4 lg:items-end"
        >
          <div>
            <label className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-[#B69B68]">
              <CalendarDays size={16} />
              Check In
            </label>

            <input
              type="date"
              min={today}
              required
              value={checkIn}
              onChange={(event) => {
                setCheckIn(event.target.value);

                if (checkOut && event.target.value >= checkOut) {
                  setCheckOut("");
                }
              }}
              className="w-full border-b border-[#29382F]/20 bg-transparent py-3 text-sm text-[#29382F] outline-none focus:border-[#B69B68] [color-scheme:light]"
            />
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-[#B69B68]">
              <Clock size={16} />
              Check Out
            </label>

            <input
              type="date"
              min={checkIn || today}
              required
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
              className="w-full border-b border-[#29382F]/20 bg-transparent py-3 text-sm text-[#29382F] outline-none focus:border-[#B69B68] [color-scheme:light]"
            />
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-[#B69B68]">
              <Users size={16} />
              Guests
            </label>

            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="w-full border-b border-[#29382F]/20 bg-[#E8EDE3] py-3 text-sm text-[#29382F] outline-none focus:border-[#B69B68]"
            >
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
              <option>5+ Guests</option>
            </select>
          </div>

          <button
            type="submit"
            className="flex min-h-12 items-center justify-center gap-2 bg-[#B69B68] px-5 py-4 text-sm font-semibold uppercase tracking-wider text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Check Availability
            <ArrowUpRight size={17} />
          </button>
        </motion.form>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#B69B68]">
            The Grand Élite experience
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            More Than a Stay.
            <br />
            <span className="italic text-[#B69B68]">A Feeling.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            Every detail is designed to make your stay extraordinary.
            From beautifully appointed rooms to attentive service,
            experience hospitality at its finest.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-3 border-b border-[#B69B68] pb-2 text-sm uppercase tracking-widest text-[#B69B68] transition hover:text-[#29382F]"
          >
            Discover our philosophy
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-[#29382F]/10 bg-[#E8EDE3] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B69B68]">
              Thoughtfully curated
            </span>

            <h2 className="mt-4 font-serif text-3xl font-light sm:text-5xl">
              The Art of Fine Living
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#29382F]/10 bg-[#F7F4EC] p-7 transition hover:-translate-y-1 hover:border-[#B69B68]/60 sm:p-8"
                >
                  <Icon size={30} className="text-[#B69B68]" />

                  <h3 className="mt-6 font-serif text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B69B68]">
              Your private sanctuary
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
              Rooms & Suites
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-stone-600">
              Thoughtful details, timeless interiors, and comfort
              designed around you.
            </p>
          </div>

          <Link
            to="/rooms"
            className="inline-flex w-fit items-center gap-3 border-b border-[#B69B68] pb-2 text-sm uppercase tracking-widest text-[#B69B68] transition hover:text-[#29382F]"
          >
            View all rooms
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group overflow-hidden border border-[#29382F]/10 bg-[#E8EDE3]"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 bg-[#F7F4EC]/95 px-3 py-2 text-[10px] tracking-[0.2em] text-[#29382F]">
                  {room.tag}
                </span>

                <button
                  type="button"
                  aria-label={`Save ${room.name}`}
                  onClick={(event) => {
                    event.currentTarget.classList.toggle("text-rose-400");
                  }}
                  className="absolute right-4 top-4 rounded-full bg-black/50 p-2.5 text-white transition hover:text-rose-400"
                >
                  <Heart size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl">{room.name}</h3>

                  <span className="text-sm text-[#8A7042]">
                    {room.price}
                    <span className="text-xs text-stone-500"> / night</span>
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {room.description}
                </p>

                <Link
                  to="/booking"
                  className="mt-6 flex items-center justify-between border-t border-[#29382F]/10 pt-5 text-sm uppercase tracking-widest transition hover:text-[#8A7042]"
                >
                  Reserve your stay
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-5 text-xs text-stone-500">
          Room prices are sample display prices. Replace them with your actual
          hotel rates.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden border-y border-[#B69B68]/20">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85"
          alt="Luxury resort pool"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#11130f]/75" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-5 py-24 text-center text-[#F7F4EC] sm:px-8 sm:py-32"
        >
          <Sparkles size={30} className="mx-auto text-[#B69B68]" />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#B69B68]">
            Your extraordinary escape awaits
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Make Your Next Stay
            <br />
            <span className="italic text-[#B69B68]">Unforgettable.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-300">
            Discover a world of comfort, thoughtful service, and
            unforgettable experiences.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 bg-[#B69B68] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Plan Your Stay
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#29382F] text-[#F7F4EC]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-10">
          <div>
            <Link to="/" className="font-serif text-2xl tracking-widest">
              GRAND <span className="italic text-[#D8C49A]">ÉLITE</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-300">
              A world of refined comfort, exceptional hospitality,
              and unforgettable moments.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D8C49A]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-stone-300">
              <Link to="/about" className="hover:text-[#D8C49A]">
                About Us
              </Link>
              <Link to="/rooms" className="hover:text-[#D8C49A]">
                Rooms & Suites
              </Link>
              <Link to="/dining" className="hover:text-[#D8C49A]">
                Dining
              </Link>
              <Link to="/contact" className="hover:text-[#D8C49A]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D8C49A]">
              Reservations
            </h3>

            <p className="mt-5 text-sm leading-7 text-stone-300">
              Ready to experience Grand Élite? Plan your next escape
              with us.
            </p>

            <Link
              to="/booking"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#D8C49A] hover:text-white"
            >
              Book Your Stay <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-stone-300">
          © {new Date().getFullYear()} Grand Élite Hotel & Resort. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
