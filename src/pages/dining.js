
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  MapPin,
  Star,
  Utensils,
  Wine,
  Coffee,
  ChefHat,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

const dishes = [
  {
    name: "Truffle Cream Pasta",
    category: "CHEF'S SIGNATURE",
    price: "₹850",
    description:
      "Handcrafted pasta with a rich truffle cream sauce, parmesan, and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Grilled Gourmet Steak",
    category: "FROM THE GRILL",
    price: "₹1,650",
    description:
      "Tender grilled steak served with seasonal vegetables and a signature sauce.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Chocolate Decadence",
    category: "SIGNATURE DESSERT",
    price: "₹550",
    description:
      "A luxurious chocolate dessert with silky ganache and delicate presentation.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
];

const experiences = [
  {
    icon: Utensils,
    title: "Fine Dining",
    description:
      "Discover beautifully presented dishes crafted with seasonal ingredients and culinary artistry.",
  },
  {
    icon: Coffee,
    title: "Artisan Café",
    description:
      "Enjoy handcrafted coffee, freshly baked treats, and relaxed conversations in an elegant setting.",
  },
  {
    icon: Wine,
    title: "Evening Lounge",
    description:
      "Unwind in a sophisticated atmosphere with refreshing beverages and memorable evenings.",
  },
];

export default function Dining() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F4EC] text-[#29382F]">
      <Nav />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[570px] items-center overflow-hidden sm:min-h-[680px]">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=90"
          alt="Elegant fine dining restaurant"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#11130f]/90 via-[#11130f]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11130f]/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 text-[#F7F4EC] sm:px-8 lg:px-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#B69B68]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#D8C49A]">
              A celebration of taste
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-light leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            The Art of
            <br />
            <span className="italic text-[#D8C49A]">Fine Dining.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Discover extraordinary flavors, exquisite presentations, and
            unforgettable culinary experiences at Grand Élite.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#signature-menu"
              className="inline-flex items-center gap-3 bg-[#B69B68] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
            >
              Explore Our Menu
              <ArrowUpRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-sm uppercase tracking-widest transition hover:border-[#D8C49A] hover:text-[#D8C49A]"
            >
              Reserve a Table
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
          <ChefHat
            size={34}
            strokeWidth={1.3}
            className="mx-auto text-[#8A7042]"
          />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#8A7042]">
            Crafted with passion
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            Every Dish Tells
            <br />
            <span className="italic text-[#8A7042]">A Story.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            At Grand Élite, dining is more than a meal. It is a journey
            through carefully selected ingredients, inspired recipes, and
            warm hospitality that turns every occasion into a memory.
          </p>
        </motion.div>
      </section>

      {/* SIGNATURE DISHES */}
      <section
        id="signature-menu"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 sm:px-8 md:pb-32 lg:px-10"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              Selected by our chef
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              Signature Creations
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-stone-600">
            A selection of inspired creations made to delight your senses
            and elevate your dining experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, index) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group overflow-hidden border border-[#29382F]/10 bg-[#E8EDE3] transition-shadow duration-500 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <span className="absolute left-5 top-5 bg-[#F7F4EC] px-3 py-2 text-[10px] tracking-[0.2em] text-[#29382F]">
                  {dish.category}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl">{dish.name}</h3>
                  <span className="shrink-0 text-lg text-[#8A7042]">
                    {dish.price}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {dish.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[#29382F]/10 pt-5 text-xs uppercase tracking-widest text-[#8A7042]">
                  <Sparkles size={15} />
                  A taste of excellence
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-xs text-stone-500">
          Sample dishes and prices for demonstration. Update them to match
          your actual restaurant menu.
        </p>
      </section>

      {/* DINING EXPERIENCES */}
      <section className="border-y border-[#29382F]/10 bg-[#E8EDE3] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              More than a meal
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              Dining Experiences
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
              From relaxed mornings to elegant evenings, discover your
              favorite way to enjoy the finer things.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.div
                  key={experience.title}
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
                    {experience.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {experience.description}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8A7042] transition hover:text-[#29382F]"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPENING HOURS */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:items-center md:py-32 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
            Your table awaits
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            Moments Made
            <br />
            <span className="italic text-[#8A7042]">Memorable.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600">
            Celebrate special occasions, enjoy intimate dinners, or
            simply treat yourself to an exceptional meal in a welcoming
            and refined atmosphere.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 bg-[#29382F] px-7 py-4 text-sm uppercase tracking-widest text-[#F7F4EC] transition hover:bg-[#8A7042]"
          >
            Reserve Your Table
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative min-h-[400px] overflow-hidden sm:min-h-[480px]"
        >
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
            alt="Warm and elegant restaurant interior"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#11130f]/95 to-transparent p-7 pt-24 text-white sm:p-9 sm:pt-28">
            <h3 className="font-serif text-3xl">Plan Your Visit</h3>

            <div className="mt-5 space-y-4 text-sm text-stone-200">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#D8C49A]" />
                <span>Breakfast, lunch & dinner</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D8C49A]" />
                <span>Grand Élite Hotel & Resort</span>
              </div>

              <div className="flex items-center gap-3">
                <Star size={18} className="fill-[#D8C49A] text-[#D8C49A]" />
                <span>An elevated dining experience</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd7184f8b5?auto=format&fit=crop&w=1800&q=85"
          alt="Beautifully presented gourmet food"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#11130f]/80" />

        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center text-[#F7F4EC] sm:px-8 sm:py-32">
          <Sparkles size={30} className="mx-auto text-[#D8C49A]" />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#D8C49A]">
            A table full of possibilities
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            Good Food.
            <br />
            <span className="italic text-[#D8C49A]">
              Beautiful Memories.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            Join us for an unforgettable culinary experience where every
            detail is thoughtfully considered.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#B69B68] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>
        </div>
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
              <Link to="/contact" className="hover:text-[#D8C49A]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D8C49A]">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-7 text-stone-300">
              Looking to celebrate a special occasion or plan your next
              dining experience? We would love to hear from you.
            </p>

            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#D8C49A] hover:text-white"
            >
              Contact Our Team <ArrowRight size={16} />
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
