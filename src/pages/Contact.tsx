// src/pages/Contact.tsx
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { mockContactInfo } from "@/data/mockContactData";
import { iconMap } from "@/lib/icons";
import { CheckCircle } from "lucide-react";

const {
  Mail: MailIcon,
  Phone: PhoneIcon,
  MapPin: MapPinIcon,
  Clock: ClockIcon,
} = iconMap;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Digi Hub - Let's Build Your Trading Platform</title>
        <meta
          name="description"
          content="Get in touch with Nepal's leading capital markets technology team. From trading platforms to compliance systems — we're ready to help."
        />
      </Helmet>

      <div className="pt-24 md:pt-28 lg:pt-32 min-h-screen bg-gray-50 dark:bg-slate-950">
        {/* Hero */}
        <section className="relative py-32 bg-gradient-to-br from-[#084097] to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-8">
                Let’s Talk <span className="text-cyan-300">Trading</span>
              </h1>
              <p className="text-2xl md:text-3xl max-w-4xl mx-auto opacity-90">
                Whether you're a broker, bank, or fintech startup — we speak
                your language
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-24 -mt-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 p-10"
              >
                {submitted ? (
                  <div className="text-center py-20">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-3xl font-black mb-4">Thank You!</h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                      We’ll get back to you within 24 hours
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-4xl font-black mb-8">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:border-[#084097] focus:ring-4 focus:ring-[#084097]/20 transition"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Business Email *"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:border-[#084097] focus:ring-4 focus:ring-[#084097]/20 transition"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:border-[#084097] focus:ring-4 focus:ring-[#084097]/20 transition"
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:border-[#084097] focus:ring-4 focus:ring-[#084097]/20 transition"
                        />
                      </div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className="w-full px-6 py-4 bg-gray-50 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl focus:border-[#084097] focus:ring-4 focus:ring-[#084097]/20 transition resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-6 bg-[#084097] hover:bg-[#06307a] text-white font-black text-xl rounded-xl transition-all hover:scale-105 shadow-xl"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-black mb-8">Visit Our Office</h2>
                  <div className="bg-white dark:bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 p-8">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <MapPinIcon className="w-7 h-7 text-[#084097]" />
                        <div>
                          <p className="font-bold text-xl">Kathmandu Office</p>
                          <p className="text-gray-600 dark:text-gray-300">
                            {mockContactInfo.address}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <PhoneIcon className="w-7 h-7 text-[#084097]" />
                        <div>
                          <p className="font-bold text-xl">Call Us</p>
                          <a
                            href="tel:+97714433999"
                            className="text-[#084097] dark:text-cyan-400 font-bold"
                          >
                            {mockContactInfo.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <MailIcon className="w-7 h-7 text-[#084097]" />
                        <div>
                          <p className="font-bold text-xl">Email</p>
                          <a
                            href="mailto:hello@digihub.com.np"
                            className="text-[#084097] dark:text-cyan-400 font-bold"
                          >
                            {mockContactInfo.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <ClockIcon className="w-7 h-7 text-[#084097]" />
                        <div>
                          <p className="font-bold text-xl">Office Hours</p>
                          <p className="text-gray-600 dark:text-gray-300">
                            {mockContactInfo.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
                  <iframe
                    src={mockContactInfo.mapUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
