import { motion } from 'motion/react';
import { Star, Gift, Crown, TrendingUp, Smartphone, ArrowRight, CheckCircle2, ChevronRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Rewards() {
  const tiers = [
    { name: 'Member', points: '0-499', color: 'bg-gray-100 text-gray-500', icon: <Star size={24} />, benefits: ['10 Crowns per $1', 'Daily Exclusive Deals', 'Birthday Reward'] },
    { name: 'Royal', points: '500-1999', color: 'bg-bk-orange text-white', icon: <Crown size={24} />, benefits: ['12 Crowns per $1', 'Early Access to New Items', 'Free Upsize on Fries', 'Monthly Bonus Offer'] },
    { name: 'Legend', points: '2000+', color: 'bg-flame-red text-white', icon: <Flame size={24} />, benefits: ['15 Crowns per $1', 'VIP Customer Support', 'Free Delivery Monthly', 'Exclusive Legend Merch'] },
  ];

  const steps = [
    { icon: <CheckCircle2 size={32} />, title: 'Join Royal Perks', desc: 'Sign up for free online or through the BK App.' },
    { icon: <TrendingUp size={32} />, title: 'Earn Crowns', desc: 'Get 10 Crowns for every $1 spent on your favorites.' },
    { icon: <Gift size={32} />, title: 'Redeem Rewards', desc: 'Use your Crowns for free food, drinks, and more.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-cream-white pb-24">
      {/* Hero Section */}
      <section className="bg-char-black text-cream-white py-24 mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-crown-gold opacity-10 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-crown-gold text-char-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
                <Crown size={16} fill="currentColor" />
                <span>Royal Perks Loyalty Program</span>
              </div>
              <h1 className="text-6xl sm:text-8xl mb-8 leading-none">THE CROWN <br /> <span className="text-crown-gold">IS YOURS</span></h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Welcome to the most rewarding way to enjoy Burger King. Earn Crowns on every dollar spent and redeem them for the flame-grilled classics you love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-secondary text-xl px-12 py-4">Join Now</button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-char-black text-xl px-12 py-4">Sign In</button>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-crown-gold rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>
              <motion.div
                initial={{ rotate: -5, scale: 0.9 }}
                animate={{ rotate: 5, scale: 1 }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
                className="bg-white p-10 rounded-[50px] shadow-2xl border-8 border-crown-gold/20 text-char-black w-72 text-center"
              >
                <div className="w-20 h-20 bg-crown-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Crown size={40} className="text-char-black" fill="currentColor" />
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Your Balance</div>
                <div className="text-6xl font-display text-flame-red mb-4">1,250</div>
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Crowns</div>
                <div className="w-full h-3 bg-gray-100 rounded-full mb-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-bk-orange"></div>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">750 Crowns to next reward</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How it Works */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4">How it Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Simple, fast, and rewarding. Start earning your way to free food today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-flame-red mb-8 border-2 border-gray-50">
                  {step.icon}
                </div>
                <h3 className="text-3xl mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tiers */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4">Tier Benefits</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The more you enjoy BK, the more we reward you. Level up your status for even more perks.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] shadow-xl overflow-hidden flex flex-col border-2 border-transparent hover:border-crown-gold transition-all"
              >
                <div className={cn('p-10 text-center flex flex-col items-center', tier.color)}>
                  <div className="mb-4">{tier.icon}</div>
                  <h3 className="text-4xl mb-2">{tier.name}</h3>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-80">{tier.points} Crowns</div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <ul className="space-y-6 mb-12">
                    {tier.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-4 text-gray-600 font-bold uppercase tracking-wider text-xs">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button className="w-full btn-outline py-3 text-sm">Learn More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* App CTA */}
        <section className="bg-flame-red rounded-[50px] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 transform translate-x-1/4"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-5xl mb-6">REWARDS ARE EASIER ON THE APP</h2>
              <p className="text-xl text-white/80 mb-8">
                Track your Crowns, redeem rewards, and order ahead with just a few taps. Download the BK App and start your Royal journey today.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-char-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-opacity-90 transition-all">
                  <Smartphone size={24} />
                  <span>Download App</span>
                </button>
                <button className="bg-white text-flame-red px-8 py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all">
                  View Rewards Menu
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
                <Crown size={120} className="text-crown-gold" fill="currentColor" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
