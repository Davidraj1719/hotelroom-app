import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Heart,
  Hotel,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

const values = [
  {
    icon: Heart,
    title: "Personalized Hospitality",
    description:
      "Every guest is unique. We focus on thoughtful details and warm service to make every stay memorable.",
  },
  {
    icon: Sparkles,
    title: "Timeless Luxury",
    description:
      "Elegant interiors, peaceful surroundings, and carefully selected comforts create a refined experience.",
  },
  {
    icon: ShieldCheck,
    title: "Exceptional Standards",
    description:
      "We value cleanliness, attention to detail, and consistent service throughout your stay.",
  },
  {
    icon: Utensils,
    title: "Inspired Dining",
    description:
      "Discover inviting dining experiences with carefully prepared dishes and welcoming hospitality.",
  },
];

const milestones = [
  { number: "01", title: "Our Vision", text: "To create a welcoming retreat where luxury meets genuine comfort." },
  { number: "02", title: "Our Promise", text: "To deliver attentive service and memorable experiences for every guest." },
  { number: "03", title: "Our Future", text: "To continually improve our hospitality while maintaining our values." },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F5F7FA] text-[#243247]">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[580px] items-center overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury hotel and resort"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#101A2B]/95 via-[#101A2B]/70 to-[#101A2B]/30" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8 lg:px-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#B87955]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D99A75]">
              Discover Grand Élite
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-light leading-tight sm:text-6xl md:text-7xl">
            A Story of
            <br />
            <span className="italic text-[#D99A75]">Comfort & Elegance.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">
            More than a destination, Grand Élite Hotel & Resort is a place
            to slow down, reconnect, and enjoy the finer moments of life.
          </p>

          <Link
            to="/rooms"
            className="mt-9 inline-flex items-center gap-3 bg-[#B87955] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#D99A75]"
          >
            Discover Our Rooms
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
            alt="Elegant hotel lounge"
            loading="lazy"
            className="h-[350px] w-full object-cover sm:h-[480px]"
          />

          <div className="absolute -bottom-5 -right-3 hidden border border-[#B87955]/40 bg-[#E8EEF5] p-6 sm:block md:-right-5">
            <Hotel size={32} className="text-[#B87955]" />
            <p className="mt-3 font-serif text-xl">A Refined Escape</p>
            <p className="mt-1 text-xs tracking-wide text-stone-600">
              YOUR COMFORT, OUR PRIORITY
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#B87955]">
            Our story
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl">
            Hospitality With
            <br />
            <span className="italic text-[#B87955]">Heart & Purpose.</span>
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            At Grand Élite Hotel & Resort, we believe that true luxury is
            found in the feeling of being welcomed, understood, and cared for.
            Our philosophy brings together elegant surroundings, thoughtful
            amenities, and attentive hospitality.
          </p>

          <p className="mt-4 leading-8 text-stone-600">
            Whether you are planning a relaxing getaway, a special
            celebration, or a business trip, our aim is to help you enjoy
            every moment of your stay.
          </p>

          <div className="mt-8 flex items-center gap-4 border-t border-[#243247]/10 pt-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8EEF5]">
              <Star size={23} className="text-[#B87955]" />
            </div>
            <div>
              <h3 className="font-semibold">Every Stay Matters</h3>
              <p className="mt-1 text-sm text-stone-600">
                Thoughtful service, memorable moments.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="bg-[#E8EEF5] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#B87955]">
              What makes us different
            </span>

            <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl">
              The Values Behind
              <br />
              <span className="italic text-[#B87955]">Every Experience.</span>
            </h2>

            <p className="mt-5 leading-7 text-stone-600">
              Our approach to hospitality is shaped by comfort, care,
              and attention to every detail.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-[#243247]/10 bg-[#F5F7FA] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#B87955]/50 sm:p-8"
                >
                  <Icon size={32} className="text-[#B87955]" />

                  <h3 className="mt-6 font-serif text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {value.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION AND PROMISE */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#B87955]">
              The Grand Élite philosophy
            </span>

            <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Created Around
              <br />
              <span className="italic text-[#B87955]">You.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-stone-600">
              Every detail begins with the guest experience. From a peaceful
              room to a warm welcome, our goal is to make every visit feel
              effortless and special.
            </p>

            <Link
              to="/experiences"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#B87955] pb-2 text-sm uppercase tracking-widest text-[#B87955] transition hover:text-[#243247]"
            >
              Explore Experiences
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-4">
            {milestones.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex gap-5 border border-[#243247]/10 bg-white p-6 sm:p-7"
              >
                <span className="font-serif text-3xl text-[#B87955]">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE BANNER */}
      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85"
          alt="Peaceful resort swimming pool"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#101A2B]/80" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28"
        >
          <Award size={34} className="mx-auto text-[#D99A75]" />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#D99A75]">
            Your next chapter begins here
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            Experience the
            <br />
            <span className="italic text-[#D99A75]">Art of Hospitality.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-stone-200">
            Discover a welcoming retreat designed for comfort,
            relaxation, and unforgettable moments.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 bg-[#B87955] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-[#D99A75]"
          >
            Book Your Stay
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#243247] text-[#F5F7FA]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-10">
          <div>
            <Link to="/" className="font-serif text-2xl tracking-widest">
              GRAND <span className="italic text-[#D99A75]">ÉLITE</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-stone-300">
              A world of refined comfort, exceptional hospitality,
              and unforgettable moments.
            </p>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D99A75]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-stone-300">
              <Link to="/" className="hover:text-[#D99A75]">Home</Link>
              <Link to="/rooms" className="hover:text-[#D99A75]">Rooms & Suites</Link>
              <Link to="/dining" className="hover:text-[#D99A75]">Dining</Link>
              <Link to="/contact" className="hover:text-[#D99A75]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D99A75]">
              Reservations
            </h3>

            <p className="mt-5 text-sm leading-7 text-stone-300">
              Plan your next escape with Grand Élite Hotel & Resort.
            </p>

            <Link
              to="/booking"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#D99A75] hover:text-white"
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