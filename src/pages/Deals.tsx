import { motion } from 'motion/react';
import { Clock, Star, ArrowRight, Smartphone, Share2, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function Deals() {
  const deals = [
    {
      id: 1,
      title: 'Free Whopper®',
      description: 'Get a free Whopper® with your first digital order of $3 or more.',
      expires: 'Ends in 2h 45m',
      type: 'App Exclusive',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60',
      color: 'bg-flame-red',
    },
    {
      id: 2,
      title: '2 for $6 Mix n\' Match',
      description: 'Choose two from: Whopper®, Big King, Single Sourdough King, or Original Chicken Sandwich.',
      expires: 'Limited Time Only',
      type: 'Daily Deal',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60',
      color: 'bg-bk-orange',
    },
    {
      id: 3,
      title: '$1 Large Fries',
      description: 'Get any size fries for just $1 when you order through the app.',
      expires: 'Ends Today',
      type: 'App Exclusive',
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=60',
      color: 'bg-crown-gold',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-cream-white pb-24">
      {/* Header */}
      <section className="bg-char-black text-cream-white py-16 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-flame-red opacity-10 -skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-crown-gold text-char-black px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                <Star size={16} fill="currentColor" />
                <span>Royal Perks Exclusive</span>
              </div>
              <h1 className="text-5xl sm:text-7xl mb-6">Hot Deals & <br /> <span className="text-crown-gold">Fresh Offers</span></h1>
              <p className="text-xl text-gray-400 mb-8">
                Save big on your flame-grilled favorites. From daily specials to app-exclusive rewards, we've got a deal for every craving.
              </p>
              <div className="flex gap-4">
                <button className="btn-primary flex items-center gap-2">
                  Claim Your Deals <ArrowRight size={20} />
                </button>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-char-black">
                  Join Rewards
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="w-64 h-64 bg-flame-red rounded-full absolute -top-10 -right-10 blur-3xl opacity-20"></div>
              <div className="bg-white p-8 rounded-[40px] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-char-black">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone size={24} className="text-flame-red" />
                    <span className="font-display text-xl">APP ONLY</span>
                  </div>
                  <div className="text-6xl font-display text-flame-red mb-2">$0</div>
                  <div className="text-2xl font-display mb-4 uppercase">WHOPPER® WEDNESDAY</div>
                  <p className="text-gray-500 text-sm mb-6">Every Wednesday on the BK App. Minimum $1 purchase.</p>
                  <button className="w-full btn-primary py-3">Get the App</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition-all group flex flex-col"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-char-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Clock size={14} className="text-flame-red" />
                  {deal.expires}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-char-black hover:bg-flame-red hover:text-white transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <div className={cn('w-2 h-2 rounded-full', deal.color)}></div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{deal.type}</span>
                </div>
                <h3 className="text-3xl mb-4 group-hover:text-flame-red transition-colors">{deal.title}</h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed">{deal.description}</p>
                <div className="mt-auto">
                  <button className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                    Claim Deal <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* App Promo */}
        <div className="mt-24 bg-bk-orange rounded-[50px] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 transform translate-x-1/4"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-5xl sm:text-6xl mb-6 leading-tight">MORE DEALS ON <br /> THE BK APP</h2>
              <p className="text-xl text-white/80 mb-8">
                Unlock exclusive app-only rewards, daily offers, and faster checkout. Join over 10 million fans who order their way.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-char-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-opacity-90 transition-all">
                  <Smartphone size={24} />
                  <span>Download App</span>
                </button>
                <Link to="/rewards" className="bg-white text-bk-orange px-8 py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all">
                  Learn About Perks
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-64 h-64 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20"></div>
              <div className="bg-char-black p-4 rounded-[40px] shadow-2xl border-8 border-white/10">
                <div className="w-48 h-80 bg-white rounded-[32px] overflow-hidden flex flex-col items-center justify-center p-6 text-char-black text-center">
                  <Flame size={48} className="text-flame-red mb-4" fill="currentColor" />
                  <div className="font-display text-2xl mb-2">BK APP</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-6">Your Daily Deals</div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-100 rounded-full mb-2"></div>
                  <div className="w-full h-2 bg-gray-100 rounded-full mb-8"></div>
                  <div className="w-full py-2 bg-flame-red rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
