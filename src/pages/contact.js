
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Sparkles,
  MessageCircle,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demo form: connect an email service or backend to send messages.
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      detail: "Grand Élite Hotel & Resort",
      subtitle: "Add your hotel address here",
    },
    {
      icon: Phone,
      title: "Call Our Team",
      detail: "Add your phone number",
      subtitle: "For reservations and enquiries",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "Add your email address",
      subtitle: "We welcome your enquiries",
    },
    {
      icon: Clock,
      title: "Guest Assistance",
      detail: "Available for enquiries",
      subtitle: "Confirm your actual service hours",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F4EC] text-[#29382F]">
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-[540px] items-center overflow-hidden sm:min-h-[620px]">
        <img
          src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=90"
          alt="Elegant hotel architecture"
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
              We are here for you
            </span>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-light leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Let's Start a
            <br />
            <span className="italic text-[#D8C49A]">Conversation.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
            Have a question, planning a special occasion, or need help
            with your stay? Our team would love to hear from you.
          </p>

          <a
            href="#contact-form"
            className="mt-9 inline-flex items-center gap-3 bg-[#B69B68] px-7 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 md:py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl"
        >
          <MessageCircle
            size={32}
            strokeWidth={1.3}
            className="mx-auto text-[#8A7042]"
          />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#8A7042]">
            Personalised hospitality
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            Every Great Stay
            <br />
            <span className="italic text-[#8A7042]">Begins Here.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            Whether you are arranging a getaway, enquiring about our
            rooms, or planning a memorable celebration, we are here to
            help you plan every detail.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#29382F]/10 bg-[#E8EDE3] p-7 transition hover:-translate-y-1 hover:border-[#B69B68]/60"
              >
                <Icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-[#8A7042]"
                />

                <h3 className="mt-5 font-serif text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 break-words text-sm font-medium">
                  {item.detail}
                </p>

                <p className="mt-2 text-xs leading-6 text-stone-500">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTACT FORM AND DETAILS */}
      <section
        id="contact-form"
        className="scroll-mt-24 border-y border-[#29382F]/10 bg-[#E8EDE3] py-20 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
          {/* LEFT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              Contact our team
            </span>

            <h2 className="mt-5 font-serif text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              We'd Love to
              <br />
              <span className="italic text-[#8A7042]">Hear From You.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-8 text-stone-600 sm:text-base">
              Send us your questions or share your plans. Whether it is
              a room reservation, a dining enquiry, or a special request,
              we look forward to assisting you.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B69B68]/40 bg-[#F7F4EC]">
                  <MapPin size={21} className="text-[#8A7042]" />
                </div>

                <div>
                  <h3 className="font-serif text-xl">Visit Us</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Add your complete hotel address to help guests
                    find your location.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B69B68]/40 bg-[#F7F4EC]">
                  <Phone size={21} className="text-[#8A7042]" />
                </div>

                <div>
                  <h3 className="font-serif text-xl">Speak With Us</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    Add your actual contact number for booking
                    assistance and guest enquiries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B69B68]/40 bg-[#F7F4EC]">
                  <Globe size={21} className="text-[#8A7042]" />
                </div>

                <div>
                  <h3 className="font-serif text-xl">Explore Our Hotel</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    <Link
                      to="/rooms"
                      className="underline decoration-[#B69B68] underline-offset-4 hover:text-[#8A7042]"
                    >
                      Rooms & Suites
                    </Link>
                    {" · "}
                    <Link
                      to="/dining"
                      className="underline decoration-[#B69B68] underline-offset-4 hover:text-[#8A7042]"
                    >
                      Dining
                    </Link>
                    {" · "}
                    <Link
                      to="/experiences"
                      className="underline decoration-[#B69B68] underline-offset-4 hover:text-[#8A7042]"
                    >
                      Experiences
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border border-[#29382F]/10 bg-[#F7F4EC] p-6 sm:p-9 md:p-10"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A7042]">
              Send us a message
            </span>

            <h3 className="mt-4 font-serif text-3xl sm:text-4xl">
              How Can We Help?
            </h3>

            {submitted ? (
              <div
                role="status"
                className="mt-8 border border-[#B69B68]/40 bg-[#E8EDE3] p-6"
              >
                <Sparkles size={28} className="text-[#8A7042]" />

                <h4 className="mt-4 font-serif text-2xl">
                  Thank You!
                </h4>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  Your demo submission has been recorded on this page.
                  To deliver messages to the hotel, connect this form
                  to an email service or backend.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-semibold text-[#8A7042] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-widest"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#29382F]/15 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#B69B68]"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs uppercase tracking-widest"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-[#29382F]/15 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#B69B68]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs uppercase tracking-widest"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-[#29382F]/15 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#B69B68]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs uppercase tracking-widest"
                  >
                    Subject
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-[#29382F]/15 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#B69B68]"
                  >
                    <option>General Enquiry</option>
                    <option>Room Reservation</option>
                    <option>Dining Reservation</option>
                    <option>Special Occasion</option>
                    <option>Guest Assistance</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-widest"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How may we assist you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-y border border-[#29382F]/15 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#B69B68]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 bg-[#29382F] px-6 py-4 text-sm font-semibold uppercase tracking-widest text-[#F7F4EC] transition hover:bg-[#8A7042]"
                >
                  Send Message
                  <Send size={17} />
                </button>

                <p className="text-xs leading-6 text-stone-500">
                  This is a frontend demo. Connect an email service or
                  backend to send and store real enquiries.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* MAP / LOCATION PLACEHOLDER */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#8A7042]">
              Find your way to us
            </span>

            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              Your Journey
              <br />
              <span className="italic text-[#8A7042]">Starts Here.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-stone-600">
              Add your real hotel location and Google Maps link here so
              guests can easily plan their visit.
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-stone-600">
              <MapPin size={20} className="text-[#8A7042]" />
              Grand Élite Hotel & Resort
            </div>
          </div>

          <div className="flex min-h-[280px] flex-col items-center justify-center border border-[#B69B68]/30 bg-[#E8EDE3] p-8 text-center sm:min-h-[340px]">
            <MapPin size={40} strokeWidth={1.3} className="text-[#8A7042]" />

            <h3 className="mt-5 font-serif text-2xl">
              Visit Grand Élite
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-7 text-stone-600">
              Replace this section with an embedded map or a directions
              link for your actual hotel address.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85"
          alt="Welcoming hotel restaurant"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#11130f]/80" />

        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center text-[#F7F4EC] sm:px-8 sm:py-32">
          <Sparkles size={30} className="mx-auto text-[#D8C49A]" />

          <span className="mt-5 block text-xs uppercase tracking-[0.3em] text-[#D8C49A]">
            Your next escape awaits
          </span>

          <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
            We Look Forward
            <br />
            <span className="italic text-[#D8C49A]">to Welcoming You.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            Discover exceptional hospitality and thoughtful experiences
            at Grand Élite Hotel & Resort.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-flex items-center gap-3 bg-[#B69B68] px-8 py-4 text-sm font-semibold uppercase tracking-widest text-[#29382F] transition hover:bg-[#D8C49A]"
          >
            Plan Your Stay
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
              <Link to="/experiences" className="hover:text-[#D8C49A]">Experiences</Link>
              <Link to="/contact" className="hover:text-[#D8C49A]">Contact</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-[#D8C49A]">
              Reservations
            </h3>

            <p className="mt-5 text-sm leading-7 text-stone-300">
              Our team is ready to help you plan your next stay.
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
