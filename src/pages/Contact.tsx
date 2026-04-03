import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Briefcase, HelpCircle, Send, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [formType, setFormType] = useState<'customer' | 'franchise'>('customer');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen bg-cream-white pb-24">
      {/* Header */}
      <section className="bg-char-black text-cream-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you have a question about your order or you're interested in joining the BK family, we're here to help.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-[40px] shadow-xl border-2 border-gray-50">
              <h2 className="text-3xl mb-8">Contact Info</h2>
              <div className="space-y-8">
                {[
                  { icon: <Phone />, title: 'Call Us', desc: '1-866-394-2493', sub: 'Mon-Fri, 9am-5pm EST' },
                  { icon: <Mail />, title: 'Email Us', desc: 'support@burgerking.com', sub: 'Response within 24 hours' },
                  { icon: <MapPin />, title: 'Corporate HQ', desc: '5505 Blue Lagoon Dr', sub: 'Miami, FL 33126' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-flame-red/10 text-flame-red rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl text-char-black mb-1">{item.title}</h4>
                      <p className="text-char-black font-bold">{item.desc}</p>
                      <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bk-orange p-10 rounded-[40px] shadow-xl text-white">
              <h2 className="text-3xl mb-6">Need Help Fast?</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Check our Frequently Asked Questions for quick answers to common issues.
              </p>
              <button className="w-full bg-white text-bk-orange py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all">
                <HelpCircle size={20} />
                Visit Help Center
              </button>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-16 rounded-[40px] shadow-xl border-2 border-gray-50">
              {/* Form Type Toggle */}
              <div className="flex p-2 bg-gray-100 rounded-2xl mb-12">
                <button
                  onClick={() => setFormType('customer')}
                  className={cn(
                    'flex-1 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2',
                    formType === 'customer' ? 'bg-white text-flame-red shadow-md' : 'text-gray-500 hover:text-char-black'
                  )}
                >
                  <MessageSquare size={18} />
                  Customer Feedback
                </button>
                <button
                  onClick={() => setFormType('franchise')}
                  className={cn(
                    'flex-1 py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all flex items-center justify-center gap-2',
                    formType === 'franchise' ? 'bg-white text-flame-red shadow-md' : 'text-gray-500 hover:text-char-black'
                  )}
                >
                  <Briefcase size={18} />
                  Franchise Inquiry
                </button>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-24"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-5xl mb-4">Message Sent!</h2>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your message and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-12 btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-flame-red rounded-2xl py-4 px-6 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-flame-red rounded-2xl py-4 px-6 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-flame-red rounded-2xl py-4 px-6 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Subject</label>
                      <select className="w-full bg-gray-50 border-2 border-transparent focus:border-flame-red rounded-2xl py-4 px-6 transition-all appearance-none">
                        <option>Order Issue</option>
                        <option>General Feedback</option>
                        <option>App Support</option>
                        <option>Franchise Interest</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Your Message</label>
                    <textarea
                      required
                      rows={6}
                      placeholder="How can we help you today?"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-flame-red rounded-3xl py-4 px-6 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full btn-primary py-5 text-xl flex items-center justify-center gap-3">
                    Send Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
