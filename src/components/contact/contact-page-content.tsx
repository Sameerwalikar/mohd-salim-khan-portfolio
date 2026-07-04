"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Mail,
  MessageSquare,
  Download,
  Send,
  Link2,
  CheckCircle2,
  Clock,
  Building2,
} from "lucide-react";

import { profile } from "@/data/profile";
import { downloadCV } from "@/data/navigation";
import { FadeUp } from "@/components/shared/fade-up";
import { Button } from "@/components/ui/button";
import { AboutPageHeroBackground } from "@/components/about/about-page-hero-background";

function CalendarScheduler() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 6, 1)); // Default to July 2026 as in screenshot
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  const daysArray: (Date | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(new Date(year, month, i));
  }

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const timeSlots = ["10:00 AM IST", "11:00 AM IST", "2:00 PM IST", "3:00 PM IST", "4:00 PM IST", "5:00 PM IST"];

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;
    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    const mailto = `mailto:${profile.email}?subject=Meeting%20Request%3A%20Academic%20Website%20Enquiry&body=Hello%20Professor%20Mohammed%20Salim%20B.%20Khan%2C%0A%0AI%20would%20like%20to%20request%20a%20meeting%20on%20${encodeURIComponent(formattedDate)}%20at%20${encodeURIComponent(selectedTime)}.%0A%0AThank%20you.`;
    window.location.href = mailto;
  };

  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-gold/10 bg-navy-950/80 p-6 md:p-8">
        {/* Month Selector Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/15 bg-navy-900 text-gold hover:border-gold hover:bg-gold/5 transition-all"
            aria-label="Previous Month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <h4 className="font-serif text-lg font-semibold text-white">
            {monthNames[month]} {year}
          </h4>
          <button
            onClick={nextMonth}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/15 bg-navy-900 text-gold hover:border-gold hover:bg-gold/5 transition-all"
            aria-label="Next Month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Days of Week Label Header */}
        <div className="grid grid-cols-7 gap-2 mb-4 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <div key={d} className="text-xs font-semibold text-slate-400">
              {d}
            </div>
          ))}
        </div>

        {/* Grid Days */}
        <div className="grid grid-cols-7 gap-2 text-center">
          {daysArray.map((date, idx) => {
            if (!date) {
              return <div key={`empty-${idx}`} className="aspect-square" />;
            }
            const weekend = isWeekend(date);
            const selected = isSelected(date);
            
            return (
              <button
                key={date.toISOString()}
                disabled={weekend}
                onClick={() => {
                  setSelectedDate(date);
                  setSelectedTime(null);
                }}
                className={`aspect-square flex items-center justify-center rounded-lg text-sm transition-all ${
                  weekend
                    ? "text-slate-600 cursor-not-allowed opacity-40"
                    : selected
                    ? "bg-gold text-navy-950 font-bold shadow-[0_0_15px_rgba(201,168,106,0.4)]"
                    : "text-slate-200 hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Available Slots Section */}
      <AnimatePresence mode="wait">
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="space-y-4"
          >
            <h4 className="font-serif text-base font-semibold text-white border-t border-gold/10 pt-6">
              Available slots — {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </h4>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                    selectedTime === time
                      ? "border-gold bg-gold/10 text-gold shadow-[0_0_15px_rgba(201,168,106,0.2)]"
                      : "border-gold/15 bg-navy-950 text-slate-300 hover:border-gold/45 hover:text-gold"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final confirmation and button */}
      <AnimatePresence>
        {selectedDate && selectedTime && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 pt-4"
          >
            <p className="text-sm font-serif text-slate-300">
              Selected:{" "}
              <span className="text-gold font-semibold">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}{" "}
                at {selectedTime}
              </span>
            </p>
            <button
              onClick={handleConfirm}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gold hover:bg-gold-light text-navy-900 text-sm font-semibold tracking-wide shadow-md transition-all hover:shadow-[0_4px_20px_rgba(201,168,106,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Confirm &amp; Send Request
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

  const linkedinUrl = "https://www.linkedin.com/in/dr-mohammed-salim-khan/";
  const mailtoUrl = `mailto:${profile.email}?subject=Academic%20Website%20Enquiry&body=Hello%20Professor%20Mohammed%20Salim%20B.%20Khan%2C%0A%0AI%20came%20across%20your%20academic%20portfolio%20and%20would%20like%20to%20connect%20regarding%0A%0AThank%20you.`;

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
        <AboutPageHeroBackground />

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

                {/* Action-Oriented CTA Cards */}
                <FadeUp delay={0.2}>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                    {/* Mail Card */}
                    <div className="premium-card relative overflow-hidden rounded-xl border border-gold/15 bg-navy-800/30 p-5 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)] transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                          <Mail className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif text-base font-semibold text-white">Mail Me</h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                          I usually respond within 24–48 hours.
                        </p>
                      </div>
                      <a
                        href={mailtoUrl}
                        aria-label="Send an email to the Professor"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gold/10 hover:bg-gold/25 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider py-2.5 px-4 transition-all duration-200 text-center"
                      >
                        Mail Me
                      </a>
                    </div>

                    {/* Book a Meeting Card */}
                    <div className="premium-card relative overflow-hidden rounded-xl border border-gold/15 bg-navy-800/30 p-5 hover:border-gold/30 hover:shadow-[0_12px_32px_rgba(201,168,106,0.06)] transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold">
                          <Clock className="h-4 w-4" />
                        </div>
                        <h4 className="font-serif text-base font-semibold text-white">Schedule Call</h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                          Pick a date and select an available time slot natively.
                        </p>
                      </div>
                      <a
                        href="#schedule-call"
                        aria-label="Scroll to calendar scheduler"
                        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gold/10 hover:bg-gold/25 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-wider py-2.5 px-4 transition-all duration-200 text-center"
                      >
                        Book a Meeting
                      </a>
                    </div>
                  </div>
                </FadeUp>

                {/* 5. Messaging Channels */}
                <FadeUp delay={0.25}>
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

                {/* 6. LinkedIn */}
                <FadeUp delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-navy-900 text-gold shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                      <Link2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium tracking-widest text-gold uppercase">Professional Profile</p>
                      <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-slate-400 hover:text-gold transition-colors duration-200"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* CV Download Secondary CTA */}
              <FadeUp delay={0.35}>
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

      {/* ══════ SECTION 3: INTERACTIVE NATIVE SCHEDULER ══════ */}
      <section id="schedule-call" className="pb-24 bg-navy-900 relative border-t border-gold/10 pt-20">
        <div className="container-academic px-4 md:px-6">
          <FadeUp>
            <div className="premium-card relative overflow-hidden rounded-2xl p-6 md:p-10 border border-gold/15 bg-navy-800/40">
              <div className="max-w-2xl mb-8">
                <h3 className="font-serif text-2xl font-medium text-white">Schedule Call</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Pick a weekday and time slot (Asia/Kolkata). A pre-filled email will open so you can send your request.
                </p>
              </div>
              <CalendarScheduler />
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
