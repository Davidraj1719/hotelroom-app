import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  BedDouble,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";

export default function Booking() {
  const today = new Date().toLocaleDateString("en-CA");

  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
    roomType: "Deluxe Room",
    name: "",
    email: "",
    phone: "",
    requests: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.checkOut <= form.checkIn) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#243247]">
      <Nav />

      {/* Hero */}
      <section className="relative flex min-h-[430px] items-center justify-center overflow-hidden bg-[#101A2B] px-6 py-24 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101A2B]/50 to-[#101A2B]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <Sparkles className="mx-auto mb-5 text-[#D99A75]" size={32} />
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#D99A75]">
            Your Luxury Experience
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl">
            Book Your <span className="text-[#D99A75]">Stay</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#E8EEF5]">
            A world of comfort, elegance, and exceptional hospitality awaits
            you at Grand Élite Hotel & Resort.
          </p>
        </motion.div>
      </section>

      {/* Booking Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_370px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E0E5EC] bg-white p-6 shadow-xl sm:p-10"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#B87955]">
              Reservation
            </p>
            <h2 className="mb-3 font-serif text-3xl sm:text-4xl">
              Plan Your Perfect Stay
            </h2>
            <p className="mb-9 text-sm leading-6 text-gray-500">
              Fill in your details to prepare your reservation request.
            </p>

            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl bg-[#E8EEF5] p-6 sm:p-8"
              >
                <CheckCircle
                  size={48}
                  className="mb-4 text-[#B87955]"
                />
                <h3 className="font-serif text-2xl">Booking Request Ready!</h3>
                <p className="mt-3 leading-7 text-gray-600">
                  Thank you, {form.name}. Your details have been validated
                  in this demo.
                </p>

                <div className="mt-6 space-y-2 rounded-xl bg-white p-5 text-sm">
                  <p><strong>Guest:</strong> {form.name}</p>
                  <p><strong>Room:</strong> {form.roomType}</p>
                  <p><strong>Check-in:</strong> {form.checkIn}</p>
                  <p><strong>Check-out:</strong> {form.checkOut}</p>
                  <p><strong>Guests:</strong> {form.guests}</p>
                  <p><strong>Rooms:</strong> {form.rooms}</p>
                  <p><strong>Email:</strong> {form.email}</p>
                  <p><strong>Phone:</strong> {form.phone}</p>
                  {form.requests && (
                    <p><strong>Special requests:</strong> {form.requests}</p>
                  )}
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  This demo does not send or store a real reservation.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 rounded-full bg-[#243247] px-7 py-3 text-white transition hover:bg-[#B87955]"
                >
                  Edit Details
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dates */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <CalendarDays size={21} className="text-[#B87955]" />
                    Stay Details
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="checkIn" className="mb-2 block text-sm font-medium">
                        Check-in
                      </label>
                      <input
                        id="checkIn"
                        type="date"
                        name="checkIn"
                        min={today}
                        value={form.checkIn}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955] focus:ring-2 focus:ring-[#B87955]/20"
                      />
                    </div>

                    <div>
                      <label htmlFor="checkOut" className="mb-2 block text-sm font-medium">
                        Check-out
                      </label>
                      <input
                        id="checkOut"
                        type="date"
                        name="checkOut"
                        min={form.checkIn || today}
                        value={form.checkOut}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955] focus:ring-2 focus:ring-[#B87955]/20"
                      />
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <Users size={21} className="text-[#B87955]" />
                    Guests & Rooms
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="guests" className="mb-2 block text-sm font-medium">
                        Number of Guests
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5+">5+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="rooms" className="mb-2 block text-sm font-medium">
                        Number of Rooms
                      </label>
                      <select
                        id="rooms"
                        name="rooms"
                        value={form.rooms}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955]"
                      >
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                        <option value="4">4 Rooms</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Room Selection */}
                <div>
                  <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                    <BedDouble size={21} className="text-[#B87955]" />
                    Select Your Room
                  </h3>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["Deluxe Room", "Elegant comfort"],
                      ["Premium Suite", "Spacious luxury"],
                      ["Executive Suite", "Business and leisure"],
                      ["Presidential Suite", "The ultimate retreat"],
                    ].map(([name, description]) => (
                      <button
                        type="button"
                        key={name}
                        onClick={() => setForm({ ...form, roomType: name })}
                        className={`rounded-2xl border p-4 text-left transition ${
                          form.roomType === name
                            ? "border-[#B87955] bg-[#E8EEF5] ring-2 ring-[#B87955]/20"
                            : "border-gray-200 hover:border-[#B87955]"
                        }`}
                      >
                        <span className="block font-semibold">{name}</span>
                        <span className="mt-1 block text-sm text-gray-500">
                          {description}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Information */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">
                    Your Information
                  </h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="Enter phone number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="requests" className="mb-2 block text-sm font-medium">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="requests"
                        name="requests"
                        rows="4"
                        placeholder="Any special requirements?"
                        value={form.requests}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 bg-[#F5F7FA] px-4 py-3 outline-none focus:border-[#B87955]"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#243247] px-8 py-4 font-semibold text-white transition hover:bg-[#B87955]"
                >
                  Prepare Booking Request
                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-gray-500">
                  Demo booking form only. No reservation is confirmed or sent.
                </p>
              </form>
            )}
          </motion.div>

          {/* Side Information */}
          <motion.aside
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-fit overflow-hidden rounded-3xl bg-[#243247] text-white shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85"
              alt="Luxury hotel room"
              className="h-64 w-full object-cover"
            />

            <div className="p-7">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#D99A75]">
                Grand Élite Experience
              </p>
              <h3 className="mb-5 font-serif text-3xl">
                Stay Beyond Ordinary
              </h3>

              <div className="space-y-4 text-sm leading-6 text-[#E8EEF5]">
                <p>✦ Luxurious and thoughtfully designed rooms</p>
                <p>✦ Personalized guest services</p>
                <p>✦ Exceptional dining experiences</p>
                <p>✦ Peaceful spaces for relaxation</p>
              </div>

              <div className="my-7 border-t border-white/15" />

              <p className="mb-5 text-sm leading-6 text-[#E8EEF5]">
                Need assistance with your reservation?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-semibold text-[#D99A75] transition hover:text-white"
              >
                Contact Us <ArrowRight size={17} />
              </Link>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#E8EEF5] px-6 py-16 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#965B3E]">
          Discover the difference
        </p>
        <h2 className="mb-6 font-serif text-3xl sm:text-5xl">
          Make Your Stay Extraordinary
        </h2>
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 rounded-full bg-[#243247] px-8 py-4 font-semibold text-white transition hover:bg-[#B87955]"
        >
          Explore Our Rooms <ArrowRight size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#101A2B] px-6 py-8 text-center text-[#E8EEF5]">
        <p className="font-serif text-xl text-[#D99A75]">
          Grand Élite Hotel & Resort
        </p>
        <p className="mt-2 text-sm">
          Luxury, comfort, and unforgettable hospitality.
        </p>
        <p className="mt-4 text-xs text-white/50">
          © {new Date().getFullYear()} Grand Élite. All rights reserved.
        </p>
      </footer>
    </div>
  );
}