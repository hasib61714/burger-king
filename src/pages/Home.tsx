import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Star, Clock, MapPin } from 'lucide-react';

export default function Home() {
  const featuredItems = [
    {
      id: 1,
      name: 'Whopper®',
      description: 'Flame-grilled beef, juicy tomatoes, fresh lettuce, creamy mayo, ketchup, crunchy pickles, and sliced white onions on a soft sesame seed bun.',
      price: '$6.49',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 2,
      name: 'Bacon King',
      description: 'Two flame-grilled beef patties, topped with a hearty portion of thick-cut smoked bacon, melted American cheese and topped with ketchup and creamy mayo.',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60',
    },
    {
      id: 3,
      name: 'Chicken Fries',
      description: 'Crispy, breaded white meat chicken, seasoned with savory spices and served with your choice of dipping sauce.',
      price: '$4.99',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=60',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-char-black">
        {/* Sizzle Video Placeholder / Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1920&auto=format&fit=crop&q=80"
            alt="Flame Grilled Burger"
            className="w-full h-full object-cover opacity-60 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-char-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-flame-red text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              <Flame size={16} fill="currentColor" />
              <span>Flame-Grilled Since 1953</span>
            </div>
            <h1 className="text-6xl sm:text-8xl text-cream-white mb-6 leading-none">
              HAVE IT <br />
              <span className="text-crown-gold">YOUR WAY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg font-sans">
              Experience the authentic taste of flame-grilled beef. Fresh ingredients, bold flavors, and zero compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/order" className="btn-primary text-xl px-12 py-4 flex items-center justify-center gap-2">
                Order Now <ArrowRight size={20} />
              </Link>
              <Link to="/menu" className="btn-outline border-cream-white text-cream-white hover:bg-cream-white hover:text-char-black text-xl px-12 py-4 flex items-center justify-center">
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Promo Banner Strip */}
        <div className="absolute bottom-0 w-full bg-bk-orange py-3 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee gap-12 text-white font-display text-2xl uppercase tracking-widest">
            <span>🔥 FREE WHOPPER® ON YOUR FIRST ORDER</span>
            <span>🔥 2 FOR $6 MIX & MATCH</span>
            <span>🔥 EARN CROWNS ON EVERY BITE</span>
            <span>🔥 FREE WHOPPER® ON YOUR FIRST ORDER</span>
            <span>🔥 2 FOR $6 MIX & MATCH</span>
            <span>🔥 EARN CROWNS ON EVERY BITE</span>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-24 bg-cream-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl mb-4">Fan Favorites</h2>
              <p className="text-gray-600 max-w-md">Our most-loved flame-grilled classics, ready for you to enjoy.</p>
            </div>
            <Link to="/menu" className="hidden sm:flex items-center gap-2 text-flame-red font-bold uppercase hover:underline">
              See Full Menu <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-crown-gold text-char-black font-bold px-3 py-1 rounded-full text-sm">
                    {item.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl mb-3 group-hover:text-flame-red transition-colors">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <button className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Teaser */}
      <section className="py-24 bg-char-black text-cream-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-flame-red opacity-10 skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-crown-gold rounded-full opacity-20 blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60"
                  alt="BK Rewards"
                  className="rounded-[40px] shadow-2xl relative z-10 border-4 border-crown-gold/30"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-crown-gold text-char-black p-6 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-2 mb-1">
                    <Star fill="currentColor" size={20} />
                    <span className="font-display text-2xl">CROWN REWARDS</span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-wider">Earn 10 Crowns per $1</p>
                </div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-5xl sm:text-6xl mb-8 leading-tight">
                GET REWARDED FOR <br />
                <span className="text-crown-gold">EVERY BITE</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                Join Royal Perks and earn Crowns on every dollar spent. Redeem them for your favorite flame-grilled treats and get exclusive access to daily deals.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  { icon: <Clock />, title: 'Daily Exclusive Deals', desc: 'New offers every single day, just for you.' },
                  { icon: <Star />, title: 'Free Food Faster', desc: 'Redeem Crowns for Whoppers®, Fries, and more.' },
                  { icon: <MapPin />, title: 'Mobile Ordering', desc: 'Skip the line and order ahead for pickup.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-flame-red/20 text-flame-red rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl text-cream-white mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/rewards" className="btn-secondary text-xl px-12 py-4">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Strip */}
      <section className="bg-flame-red py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl text-white mb-2">ORDER FASTER ON THE APP</h2>
            <p className="text-white/80 font-bold uppercase tracking-wider">Exclusive mobile deals & contactless ordering</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-char-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-opacity-90 transition-all">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-char-black">
                <Star size={18} fill="currentColor" />
              </div>
              <span>App Store</span>
            </button>
            <button className="bg-char-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3 hover:bg-opacity-90 transition-all">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-char-black">
                <Star size={18} fill="currentColor" />
              </div>
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
