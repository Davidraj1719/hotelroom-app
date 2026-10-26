import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Check,
  Maximize,
  Users,
  Wifi,
  Coffee,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

const rooms = [
  {
    name: "Deluxe Room",
    category: "COMFORT & ELEGANCE",
    price: "₹6,500",
    size: "350 sq.ft.",
    guests: "2 Guests",
    beds: "1 King Bed",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    description:
      "A peaceful sanctuary featuring elegant interiors, premium bedding, and beautiful views for a relaxing escape.",
    features: [
      "King-size bed",
      "Luxury bathroom",
      "Complimentary Wi-Fi",
      "Coffee & tea",
    ],
  },
  {
    name: "Executive Suite",
    category: "SOPHISTICATED LIVING",
    price: "₹12,000",
    size: "650 sq.ft.",
    guests: "3 Guests",
    beds: "King Bed + Sofa",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover generous living spaces, refined furnishings, and thoughtful amenities designed for an exceptional stay.",
    features: [
      "Separate living area",
      "Premium king bed",
      "Luxury bathroom",
      "Personal workspace",
    ],
  },
  {
    name: "Presidential Suite",
    category: "THE ULTIMATE LUXURY",
    price: "₹25,000",
    size: "1200 sq.ft.",
    guests: "4 Guests",
    beds: "King Bed + Lounge",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    description:
      "Experience exceptional privacy and indulgence in a spacious retreat with sophisticated design and premium comfort.",
    features: [
      "Expansive living room",
      "Premium king bed",
      "Luxury lounge",
      "Exclusive amenities",
    ],
  },
];

const amenities = [
  { icon: Wifi, title: "High-speed Wi-Fi" },
  { icon: Coffee, title: "In-room Coffee" },
  { icon: Sparkles, title: "Luxury Toiletries" },
  { icon: BedDouble, title: "Premium Bedding" },
];

export default function Rooms() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F4EC] text-[#29382F]">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[650px]">
        <img
          src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury hotel bedroom"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#11130f]/90 via-[#11130f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11130f]/60 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 text-[#F7F4EC] sm:px-8 lg:px-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#B69B68]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D8C49A]">
              The art of exceptional living
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-light leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Rooms & <span className="italic text-[#D8C49A]">Suites</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Discover beautifully curated spaces where timeless elegance,
            thoughtful details, and exceptional comfort come together.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 bg-[#B69B68] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Reserve Your Stay
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 md:py-28 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
            Stay in style
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            Your Own Private
            <br />
            <span className="italic text-[#8A7042]">Sanctuary.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            Every room tells a story of understated luxury. From intimate
            escapes to expansive suites, find the perfect space for your
            next extraordinary experience.
          </p>
        </motion.div>
      </section>

      {/* ROOM CARDS */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 md:pb-32 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              Find your perfect stay
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              Our Accommodation
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-stone-600">
            Thoughtfully designed for every occasion, with personalized
            service and beautiful surroundings.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.article
              key={room.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group overflow-hidden border border-[#29382F]/10 bg-[#E8EDE3] transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <span className="absolute left-5 top-5 bg-[#F7F4EC] px-3 py-2 text-[10px] tracking-[0.2em] text-[#29382F]">
                  {room.category}
                </span>

                {index === 1 && (
                  <span className="absolute bottom-5 left-5 flex items-center gap-2 text-sm text-white">
                    <Star size={15} className="fill-[#D8C49A] text-[#D8C49A]" />
                    Guest Favourite
                  </span>
                )}
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl">{room.name}</h3>

                  <div className="text-right">
                    <span className="text-lg text-[#8A7042]">
                      {room.price}
                    </span>
                    <p className="text-xs text-stone-500">per night</p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {room.description}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#29382F]/10 py-5">
                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Maximize size={17} className="text-[#8A7042]" />
                    {room.size}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <Users size={17} className="text-[#8A7042]" />
                    {room.guests}
                  </div>

                  <div className="col-span-2 flex items-center gap-2 text-sm text-stone-600">
                    <BedDouble size={17} className="text-[#8A7042]" />
                    {room.beds}
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-stone-600"
                    >
                      <Check size={16} className="text-[#8A7042]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className="mt-7 flex items-center justify-between border-t border-[#29382F]/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] transition hover:text-[#8A7042]"
                >
                  Reserve This Room
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-xs text-stone-500">
          Prices shown are sample rates per night. Replace them with your
          actual hotel pricing and availability.
        </p>
      </section>

      {/* AMENITIES */}
      <section className="border-y border-[#29382F]/10 bg-[#E8EDE3] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              Every detail matters
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              Thoughtful Amenities
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
              Enjoy the little luxuries that make every moment of your
              stay feel special.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {amenities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#29382F]/10 bg-[#F7F4EC] p-6 text-center transition hover:border-[#B69B68]/60 sm:p-8"
                >
                  <Icon
                    size={30}
                    className="mx-auto text-[#8A7042]"
                    strokeWidth={1.5}
                  />
                  <h3 className="mt-5 font-serif text-lg sm:text-xl">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85"
          alt="Luxury resort swimming pool"
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
          <Sparkles size={30} className="mx-auto text-[#D8C49A]" />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#D8C49A]">
            An unforgettable stay awaits
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Your Perfect Room.
            <br />
            <span className="italic text-[#D8C49A]">
              Your Perfect Escape.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            Let us make your next getaway an experience worth remembering.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 bg-[#B69B68] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Book Your Stay
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
              A world of refined comfort, exceptional hospitality, and
              unforgettable moments.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D8C49A]">
              Explore
            </h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-stone-300">
              <Link to="/" className="transition hover:text-[#D8C49A]">
                Home
              </Link>
              <Link to="/about" className="transition hover:text-[#D8C49A]">
                About Us
              </Link>
              <Link to="/rooms" className="transition hover:text-[#D8C49A]">
                Rooms & Suites
              </Link>
              <Link to="/contact" className="transition hover:text-[#D8C49A]">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D8C49A]">
              Reservations
            </h3>
            <p className="mt-5 text-sm leading-7 text-stone-300">
              Find your perfect room and plan your next escape.
            </p>
            <Link
              to="/booking"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#D8C49A] transition hover:text-white"
            >
              Book Your Stay <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-stone-300">
          © {new Date().getFullYear()} Grand Élite Hotel & Resort. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}