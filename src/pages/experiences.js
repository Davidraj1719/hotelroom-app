
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
  Utensils,
  Flower2,
  Mountain,
  Sparkles,
  Heart,
  Sun,
  Clock,
  Star,
  BedDouble,
} from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

const experiences = [
  {
    number: "01",
    category: "WELLNESS & RELAXATION",
    title: "A World of Wellness",
    description:
      "Restore your balance with peaceful surroundings, rejuvenating spa treatments, and moments dedicated entirely to you.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    icon: Flower2,
    duration: "60–90 minutes",
    label: "RENEW YOURSELF",
  },
  {
    number: "02",
    category: "POOLSIDE ESCAPE",
    title: "Serenity by the Water",
    description:
      "Spend a beautiful afternoon by the pool, enjoy refreshing drinks, and let the gentle atmosphere slow down time.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    icon: Waves,
    duration: "At your leisure",
    label: "FIND YOUR CALM",
  },
  {
    number: "03",
    category: "CULINARY DISCOVERY",
    title: "An Evening to Remember",
    description:
      "Discover thoughtfully prepared dishes, intimate settings, and memorable flavors for a truly special dining occasion.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
    icon: Utensils,
    duration: "2–3 hours",
    label: "SAVOR THE MOMENT",
  },
  {
    number: "04",
    category: "NATURE & DISCOVERY",
    title: "Beyond the Ordinary",
    description:
      "Reconnect with nature through peaceful garden walks, beautiful scenery, and opportunities to discover the surroundings.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",
    icon: Mountain,
    duration: "At your leisure",
    label: "EXPLORE MORE",
  },
  {
    number: "05",
    category: "ROMANTIC MOMENTS",
    title: "Made for Two",
    description:
      "Celebrate togetherness with an intimate atmosphere, thoughtful details, and a setting made for treasured memories.",
    image:
      "https://images.unsplash.com/photo-1519225421980-888cb4f0c6c7?auto=format&fit=crop&w=1200&q=85",
    icon: Heart,
    duration: "Custom experience",
    label: "CELEBRATE LOVE",
  },
  {
    number: "06",
    category: "SLOW MORNINGS",
    title: "Wake Up Beautifully",
    description:
      "Start your day at your own pace with a relaxed morning, inviting spaces, and time to enjoy the little things.",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=85",
    icon: Sun,
    duration: "Morning",
    label: "EMBRACE THE DAY",
  },
];

const highlights = [
  {
    icon: Sparkles,
    title: "Thoughtful Details",
    description:
      "Every experience is designed around comfort, atmosphere, and personal enjoyment.",
  },
  {
    icon: Heart,
    title: "Moments Together",
    description:
      "Create meaningful memories with family, friends, or someone special.",
  },
  {
    icon: Star,
    title: "Exceptional Hospitality",
    description:
      "Enjoy attentive service and a warm welcome throughout your stay.",
  },
];

export default function Experiences() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F4EC] text-[#29382F]">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden sm:min-h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury resort surrounded by a peaceful atmosphere"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#11130f]/90 via-[#11130f]/55 to-transparent" />
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
              Discover the extraordinary
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-light leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Experiences
            <br />
            <span className="italic text-[#D8C49A]">Beyond a Stay.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            From moments of peaceful relaxation to unforgettable evenings,
            discover the experiences that make every stay at Grand Élite
            truly special.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#our-experiences"
              className="inline-flex items-center gap-3 bg-[#B69B68] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
            >
              Discover Experiences
              <ArrowUpRight size={18} />
            </a>

            <Link
              to="/booking"
              className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm uppercase tracking-widest transition hover:border-[#D8C49A] hover:text-[#D8C49A]"
            >
              Plan Your Stay
              <ArrowRight size={18} />
            </Link>
          </div>
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
          <Sparkles
            size={32}
            strokeWidth={1.3}
            className="mx-auto text-[#8A7042]"
          />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#8A7042]">
            The Grand Élite experience
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            More Than a Destination.
            <br />
            <span className="italic text-[#8A7042]">A Feeling.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            The most beautiful stays are made of little moments. A quiet
            morning, a delicious meal, a refreshing escape, or time spent
            with the people who matter most. Discover your own way to
            experience Grand Élite.
          </p>
        </motion.div>
      </section>

      {/* EXPERIENCE CARDS */}
      <section
        id="our-experiences"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 sm:px-8 md:pb-32 lg:px-10"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              Your journey begins here
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              Curated Experiences
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-stone-600">
            Explore moments designed to inspire, restore, and bring a
            little more beauty to your time away.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                key={experience.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index % 3 * 0.12 }}
                className="group overflow-hidden border border-[#29382F]/10 bg-[#E8EDE3] transition-shadow duration-500 hover:shadow-xl"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  <span className="absolute left-5 top-5 bg-[#F7F4EC] px-3 py-2 text-[10px] tracking-[0.2em] text-[#29382F]">
                    {experience.category}
                  </span>

                  <span className="absolute bottom-5 left-5 font-serif text-5xl text-white/80">
                    {experience.number}
                  </span>

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center border border-white/50 bg-black/20 text-[#D8C49A] backdrop-blur-sm">
                    <Icon size={23} strokeWidth={1.4} />
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#8A7042]">
                    {experience.label}
                  </span>

                  <h3 className="mt-3 font-serif text-2xl sm:text-3xl">
                    {experience.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-stone-500">
                    <Clock size={15} className="text-[#8A7042]" />
                    {experience.duration}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-6 flex items-center justify-between border-t border-[#29382F]/10 pt-5 text-xs font-semibold uppercase tracking-[0.18em] transition hover:text-[#8A7042]"
                  >
                    Enquire About This
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* WHY GRAND ELITE */}
      <section className="border-y border-[#29382F]/10 bg-[#E8EDE3] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              The difference is in the details
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              The Grand Élite Touch
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="border border-[#29382F]/10 bg-[#F7F4EC] p-8 transition hover:-translate-y-1 hover:border-[#B69B68]/60 sm:p-10"
                >
                  <Icon
                    size={32}
                    strokeWidth={1.4}
                    className="text-[#8A7042]"
                  />

                  <h3 className="mt-6 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=85"
          alt="Beautiful architecture and peaceful surroundings"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#11130f]/80" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-4xl px-5 py-24 text-center text-[#F7F4EC] sm:px-8 sm:py-32"
        >
          <Sparkles size={30} className="mx-auto text-[#D8C49A]" />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#D8C49A]">
            Your extraordinary escape awaits
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
            Make Every Moment
            <br />
            <span className="italic text-[#D8C49A]">
              Mean Something.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            Discover a stay filled with thoughtful experiences, quiet
            indulgence, and memories you will carry with you.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 bg-[#B69B68] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Begin Your Journey
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
              <Link to="/" className="hover:text-[#D8C49A]">Home</Link>
              <Link to="/about" className="hover:text-[#D8C49A]">About Us</Link>
              <Link to="/rooms" className="hover:text-[#D8C49A]">Rooms & Suites</Link>
              <Link to="/dining" className="hover:text-[#D8C49A]">Dining</Link>
              <Link to="/experiences" className="hover:text-[#D8C49A]">Experiences</Link>
              <Link to="/contact" className="hover:text-[#D8C49A]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D8C49A]">
              Plan Your Stay
            </h3>

            <p className="mt-5 text-sm leading-7 text-stone-300">
              Make room for memorable moments and discover your next
              extraordinary escape.
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
          © {new Date().getFullYear()} Grand Élite Hotel & Resort. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
