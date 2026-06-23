"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Download,
  Send,
  Link2,
  CheckCircle2,
  Clock,
  Building2
} from "lucide-react";

import { profile } from "@/data/profile";
import { downloadCV } from "@/data/navigation";
import { FadeUp } from "@/components/shared/fade-up";
import { Button } from "@/components/ui/button";

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // TODO: Insert real LinkedIn profile link when available
  const linkedinUrl = "#"; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMsg("Please fill out all fields.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div>
      {/* ══════ SECTION 1: PAGE HERO ══════ */}
      <section className="relative overflow-hidden bg-navy-900 pt-32 pb-16 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#091422] to-navy-900" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,106,0.04)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <div className="container-academic relative z-10 px-4 md:px-6">
          {/* Breadcrumbs */}
          <FadeUp>
            <nav
              aria-label="Breadcrumb"
              className="mb-6 flex items-center gap-1.5 text-sm text-slate-400"
            >
              <Link href="/" className="transition-colors hover:text-gold">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-gold/80">Contact</span>
            </nav>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-xs font-medium tracking-[0.25em] text-gold/70 uppercase">
              Get In Touch
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
              Contact &amp; Engagement
            </h1>
            <p className="mt-4 max-w-2xl text-base text-slate-300/80 md:text-lg">
              For academic collaborations, expert research consultations, guest lectures, curriculum design invitations, or mediation panel requests.
            </p>
            <div className="mt-5 h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          </FadeUp>
        </div>
      </section>

      {/* ══════ SECTION 2: CONTACT BLOCK ══════ */}
      <section className="section-padding bg-navy-900 relative">
        <div className="container-academic px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-12">
            
            {/* LEFT COLUMN: CONTACT DETAILS */}
            <div className="lg:col-span-5 space-y-8">
              <FadeUp delay={0.1}>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-medium text-white">
                    Contact Details
                  </h3>
                  <p className="text-sm text-slate-400">
                    Reach out through professional channels or connect with current academic departments.
                  </p>
                </div>
              </FadeUp>

              {/* Contact Rows */}
              <div className="space-y-6">
                {/* 1. Affiliation */}
                <FadeUp delay={0.15}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-gold uppercase">Affiliation</p>
                      <p className="mt-1 font-serif text-base font-semibold text-white">
                        {profile.currentPosition.institution}
                      </p>
                      <p className="text-sm text-slate-300">
                        {profile.currentPosition.university}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {profile.currentPosition.location}
                      </p>
                    </div>
                  </div>
                </FadeUp>

                {/* 2. Email */}
                <FadeUp delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-gold uppercase">Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="mt-1 block font-serif text-base text-slate-200 hover:text-gold transition-colors duration-200"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                </FadeUp>

                {/* 3. Phone */}
                <FadeUp delay={0.25}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-gold uppercase">Phone</p>
                      <a
                        href={`tel:${profile.phone}`}
                        className="mt-1 block font-serif text-base text-slate-200 hover:text-gold transition-colors duration-200"
                      >
                        +91 {profile.phone}
                      </a>
                    </div>
                  </div>
                </FadeUp>

                {/* 4. Address */}
                <FadeUp delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-gold uppercase">Address</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300 font-serif">
                        {profile.address}
                      </p>
                    </div>
                  </div>
                </FadeUp>

                {/* 5. Messaging Channels */}
                <FadeUp delay={0.35}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-gold uppercase">Messaging Channels</p>
                      <div className="mt-1.5 space-y-1 text-sm text-slate-300">
                        <p>
                          <span className="text-slate-400 font-serif">WhatsApp Group:</span>{" "}
                          <span className="text-white font-medium">{profile.socialMedia.whatsapp}</span>
                        </p>
                        <p>
                          <span className="text-slate-400 font-serif">Telegram Channel:</span>{" "}
                          <span className="text-white font-medium">{profile.socialMedia.telegram}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>

                {/* 6. LinkedIn (Placeholder) */}
                <FadeUp delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Link2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-gold uppercase">Professional Profile</p>
                      <a
                        href={linkedinUrl}
                        className="mt-1 block text-sm text-slate-400 hover:text-gold transition-colors duration-200 italic"
                      >
                        LinkedIn Profile (Connection pending)
                      </a>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* CV Download Secondary CTA */}
              <FadeUp delay={0.45}>
                <div className="premium-card relative overflow-hidden rounded-xl p-6 hover:shadow-[0_12px_32px_rgba(201,168,106,0.04)] transition-all duration-300">
                  <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-gold/[0.03]" />
                  <h4 className="font-serif text-lg font-medium text-white mb-2">
                    Looking for a comprehensive resume?
                  </h4>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Download the complete academic curriculum vitae including publications, patents, design registrations, and professional background.
                  </p>
                  <Button asChild variant="secondary" className="btn-glow gap-2">
                    <Link href={downloadCV.href}>
                      <Download className="h-4 w-4" />
                      {downloadCV.label}
                    </Link>
                  </Button>
                </div>
              </FadeUp>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-7">
              <FadeUp delay={0.2}>
                <div className="premium-card relative overflow-hidden rounded-2xl p-6 md:p-8 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-500">
                  {/* Glowing ambient light */}
                  <div className="absolute right-0 top-0 -translate-y-12 translate-x-12 h-64 w-64 rounded-full bg-gold/[0.03] blur-3xl" />
                  <div className="absolute left-0 bottom-0 translate-y-12 -translate-x-12 h-64 w-64 rounded-full bg-gold/[0.02] blur-3xl" />

                  <h3 className="relative z-10 font-serif text-2xl font-medium text-white">
                    Send a Message
                  </h3>
                  <p className="relative z-10 mt-2 text-sm text-slate-400">
                    Submit an inquiry and receive a response within 1-2 business days.
                  </p>

                  <div className="relative z-10 mt-8">
                    <AnimatePresence mode="wait">
                      {!submitSuccess ? (
                        <motion.form
                          key="contact-form"
                          onSubmit={handleSubmit}
                          className="space-y-5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {/* Name Field */}
                          <div>
                            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Dr. Jane Doe"
                              required
                              className="mt-2 w-full rounded-lg border border-gold/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold/30"
                            />
                          </div>

                          {/* Email Field */}
                          <div>
                            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="jane.doe@university.edu"
                              required
                              className="mt-2 w-full rounded-lg border border-gold/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold/30"
                            />
                          </div>

                          {/* Subject Field */}
                          <div>
                            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                              Subject
                            </label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleInputChange}
                              placeholder="Research Collaboration / Guest Lecture / IPR Inquiry"
                              required
                              className="mt-2 w-full rounded-lg border border-gold/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold/30"
                            />
                          </div>

                          {/* Message Field */}
                          <div>
                            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Describe details about the invitation, collaboration agenda, or inquiry..."
                              required
                              rows={5}
                              className="mt-2 w-full rounded-lg border border-gold/15 bg-navy-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold/30 resize-y"
                            />
                          </div>

                          {errorMsg && (
                            <p className="text-xs text-red-400 font-medium">
                              {errorMsg}
                            </p>
                          )}

                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full relative flex items-center justify-center gap-2 rounded-lg bg-gold py-3 text-sm font-semibold text-navy-900 transition-all duration-300 ${
                              isSubmitting
                                ? "bg-gold/60 cursor-not-allowed"
                                : "hover:bg-gold-light hover:shadow-[0_4px_20px_rgba(201,168,106,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <Clock className="h-4 w-4 animate-spin" />
                                Sending Inquiry...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4" />
                                Send Message
                              </>
                            )}
                          </button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="form-success"
                          className="py-12 text-center"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold border border-gold/25 mb-6">
                            <CheckCircle2 className="h-8 w-8 animate-pulse" />
                          </div>
                          <h4 className="font-serif text-xl font-medium text-white mb-2">
                            Message Sent Successfully
                          </h4>
                          <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                            Thank you for your interest. Your message has been received, and Prof. Dr. M.S.B. Khan will review it shortly.
                          </p>
                          <button
                            onClick={() => setSubmitSuccess(false)}
                            className="mt-8 rounded-lg border border-gold/20 bg-navy-900 px-6 py-2.5 text-xs font-semibold tracking-wider text-gold hover:border-gold hover:text-white transition-all uppercase"
                          >
                            Send another message
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeUp>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
