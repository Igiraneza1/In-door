'use client';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Form() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 w-full">
        <h2 className="text-4xl font-semibold text-center mb-12 text-black">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-100 text-center p-6 rounded">
            <FaMapMarkerAlt className="mx-auto text-3xl text-black mb-2" />
            <h4 className="font-semibold uppercase text-sm text-gray-700 mb-1">Address</h4>
            <p className="text-black font-medium">
              KN 3 Rd, Kigali,<br /> Rwanda
            </p>
          </div>

          <div className="bg-gray-100 text-center p-6 rounded">
            <FaPhoneAlt className="mx-auto text-2xl text-black mb-2" />
            <h4 className="font-semibold uppercase text-sm text-gray-700 mb-1">Phone</h4>
            <p className="text-black font-medium">+250 788 123 456</p>
          </div>

          <div className="bg-gray-100 text-center p-6 rounded">
            <FaEnvelope className="mx-auto text-3xl text-black mb-2" />
            <h4 className="font-semibold uppercase text-sm text-gray-700 mb-1">Email</h4>
            <p className="text-black font-medium">hello@3legant.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <div>
              <label className="block text-sm  font-semibold mb-1 text-gray-700">Message</label>
              <textarea
                rows={5}
                placeholder="Your message"
                className="w-full border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>

          <div className="w-full h-full">
            <iframe
              title="Kigali Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.83398347469!2d30.05506425!3d-1.9440725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f2c6f29d3f%3A0x8a5ed0dfb0b27102!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1720425600000!5m2!1sen!2srw"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(40%) brightness(95%) contrast(110%)',
                borderRadius: '0.5rem',
                minHeight: '400px',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
