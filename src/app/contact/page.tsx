"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="pb-20">
      
      {/* 1. Header Hero Banner */}
      <section className="relative h-[35vh] w-full bg-genz-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_pakistani_models.png"
            alt="Contact Shahroze Studio"
            className="h-full w-full object-cover object-center opacity-40 brightness-[0.7] grayscale"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-[10px] tracking-widest text-genz-blue uppercase mb-3">CUSTOMER CARE</p>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-wide uppercase">CONTACT US</h1>
          <div className="mx-auto h-[1px] w-12 bg-genz-pink mt-4" />
        </div>
      </section>

      {/* 2. Content Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Info (4 cols) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="font-display text-xl font-bold tracking-widest text-black dark:text-white uppercase">
                GET IN TOUCH
              </h2>
              <p className="text-xs text-genz-gray leading-relaxed dark:text-genz-light/70">
                Our support team is available Monday to Friday, 9:00 AM to 5:00 PM PKT. We strive to reply to all email inquiries within 24 business hours.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-genz-pink/15 text-genz-pink dark:bg-genz-charcoal dark:text-white">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50">PHONE support</h4>
                  <a href="tel:0414863411" className="text-xs font-bold text-black hover:underline dark:text-white mt-1 block">
                    0414 863 411
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-genz-pink/15 text-genz-pink dark:bg-genz-charcoal dark:text-white">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50">EMAIL support</h4>
                  <a href="mailto:mr.ausi786@gmail.com" className="text-xs font-bold text-black hover:underline dark:text-white mt-1 block">
                    mr.ausi786@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp direct chat */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] dark:bg-[#128C7E]/10 dark:text-[#128C7E]">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50">WHATSAPP CHAT</h4>
                  <a
                    href="https://wa.me/61414863411"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#25D366] hover:underline mt-1 block"
                  >
                    Direct Message Link <span className="text-[9px] font-normal text-genz-gray ml-1 dark:text-genz-blue/50">(wa.me/61414863411)</span>
                  </a>
                </div>
              </div>

              {/* Headquarters */}
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-genz-pink/15 text-genz-pink dark:bg-genz-charcoal dark:text-white">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50">STUDIO HEADQUARTERS</h4>
                  <p className="text-xs text-black font-semibold dark:text-white mt-1">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Form (7 cols) */}
          <div className="lg:col-span-7 bg-genz-light p-8 rounded-sm border border-genz-border dark:bg-genz-charcoal/20">
            <h3 className="font-display text-xs font-bold tracking-widest uppercase mb-6 text-black dark:text-white">
              SEND AN INQUIRY
            </h3>

            {submitted ? (
              <div className="space-y-4 py-8 text-center bg-white border border-green-200 p-6 rounded dark:bg-genz-charcoal dark:border-green-900/40">
                <p className="text-xs font-bold text-green-600 dark:text-green-400 tracking-wider">
                  MESSAGE TRANSMITTED SUCCESSFULY
                </p>
                <p className="text-[11px] text-genz-gray dark:text-genz-light/70">
                  Thank you for contacting Shahroze Studio. Our studio team will review your inquiry and respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-genz-border/60 px-4 py-3 text-xs text-black outline-none focus:border-genz-pink dark:bg-genz-charcoal dark:border-genz-border/30 dark:text-white dark:focus:border-white rounded-sm"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-genz-border/60 px-4 py-3 text-xs text-black outline-none focus:border-genz-pink dark:bg-genz-charcoal dark:border-genz-border/30 dark:text-white dark:focus:border-white rounded-sm"
                      placeholder="e.g. name@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white border border-genz-border/60 px-4 py-3 text-xs text-black outline-none focus:border-genz-pink dark:bg-genz-charcoal dark:border-genz-border/30 dark:text-white dark:focus:border-white rounded-sm"
                    placeholder="e.g. Order Delivery Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold tracking-widest text-genz-gray uppercase dark:text-genz-blue/50 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white border border-genz-border/60 px-4 py-3 text-xs text-black outline-none focus:border-genz-pink dark:bg-genz-charcoal dark:border-genz-border/30 dark:text-white dark:focus:border-white rounded-sm"
                    placeholder="Provide detailed description of your request..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-genz-black px-8 py-3.5 text-xs font-bold tracking-widest text-white hover:bg-genz-pink transition-colors dark:bg-white dark:text-genz-black dark:hover:bg-genz-pink rounded-sm"
                >
                  <span>SUBMIT MESSAGE</span>
                  <Send className="h-3 w-3" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Google Maps Section (Minimalist simulated layout) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="font-display text-xs font-bold tracking-widest uppercase mb-4 text-black dark:text-white">
          OUR LOCATION
        </h3>
        <div className="relative w-full h-[350px] bg-genz-light border border-genz-border dark:bg-genz-charcoal/30 dark:border-genz-border/20 overflow-hidden flex items-center justify-center">
          {/* Map Image Mock */}
          <div className="absolute inset-0 bg-[radial-gradient(#ddd_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#333_1px,transparent_1px)]" />
          
          <div className="relative z-10 text-center space-y-3 bg-white p-6 max-w-sm border border-genz-border shadow-md dark:bg-genz-charcoal dark:border-genz-border/30 rounded-sm">
            <MapPin className="h-8 w-8 text-black mx-auto dark:text-white" />
            <h4 className="font-display text-xs font-bold tracking-widest uppercase">SHAHROZE STUDIO SHOWROOM</h4>
            <p className="text-[11px] text-genz-gray leading-relaxed dark:text-genz-light/70">
              Mall Road, Lahore 54000<br />Pakistan
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-[10px] tracking-widest uppercase font-bold text-black border-b border-black pb-0.5 hover:text-genz-pink hover:border-genz-pink dark:text-white dark:border-white"
            >
              Open in Google Maps <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
