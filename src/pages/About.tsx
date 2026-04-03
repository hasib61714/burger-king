import { motion } from 'motion/react';
import { Flame, Star, Clock, Globe, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export default function About() {
  const timeline = [
    { year: '1953', title: 'The Beginning', desc: 'Insta-Burger King opens in Jacksonville, Florida, introducing the world to flame-grilled burgers.' },
    { year: '1957', title: 'The Whopper® is Born', desc: 'The legendary Whopper® sandwich is introduced, becoming an instant classic and cultural icon.' },
    { year: '1967', title: 'Going Global', desc: 'Burger King expands internationally, opening its first restaurant in Puerto Rico.' },
    { year: '2019', title: 'Plant-Based Revolution', desc: 'The Impossible™ Whopper® launches nationwide, bringing flame-grilled flavor to plant-based fans.' },
    { year: '2024', title: '70 Years of Flavor', desc: 'Celebrating seven decades of flame-grilled excellence and "Have It Your Way" spirit.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-cream-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-char-black">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=1920&auto=format&fit=crop&q=80"
            alt="BK Heritage"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-char-black via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-flame-red text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-8">
              <Flame size={16} fill="currentColor" />
              <span>Our Legacy</span>
            </div>
            <h1 className="text-6xl sm:text-8xl text-cream-white mb-6 leading-none">FLAME-GRILLED <br /> <span className="text-crown-gold">SINCE 1953</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              For over 70 years, we've been dedicated to one thing: serving the best flame-grilled burgers on the planet.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        {/* Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: <Flame size={40} />, title: 'Real Flame', desc: 'We flame-grill our beef patties over real fire for that authentic backyard taste.' },
            { icon: <ShieldCheck size={40} />, title: 'Real Quality', desc: 'Fresh ingredients, sourced responsibly, and prepared with care every single day.' },
            { icon: <Heart size={40} />, title: 'Your Way', desc: 'Customization is in our DNA. We believe everyone should have it exactly how they like it.' },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-12 rounded-[40px] shadow-xl text-center flex flex-col items-center border-2 border-gray-50"
            >
              <div className="text-flame-red mb-8">{value.icon}</div>
              <h3 className="text-3xl mb-4">{value.title}</h3>
              <p className="text-gray-500 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* The Process */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl mb-8 leading-tight">THE ART OF THE <br /> <span className="text-flame-red">FLAME-GRILL</span></h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Unlike our competitors who fry their burgers on a flat-top, we use real fire. Our proprietary flame-grilling process locks in the juices and creates that signature smoky flavor you can't get anywhere else.
              </p>
              <ul className="space-y-6 mb-12">
                {[
                  '100% Real Beef with no fillers or preservatives',
                  'Grilled over real fire at 600°F',
                  'Freshly sliced onions, tomatoes, and lettuce',
                  'Signature sesame seed buns toasted to perfection',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold uppercase tracking-wider text-sm text-char-black">
                    <div className="w-6 h-6 bg-flame-red text-white rounded-full flex items-center justify-center shrink-0">
                      <Flame size={12} fill="currentColor" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/menu" className="btn-primary flex items-center gap-2 w-fit">
                Taste the Difference <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-flame-red rounded-full opacity-10 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop&q=60"
                alt="Flame Grilling"
                className="rounded-[50px] shadow-2xl relative z-10 border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-crown-gold text-char-black p-8 rounded-3xl shadow-xl z-20 max-w-xs">
                <div className="text-4xl font-display mb-2">70+ YEARS</div>
                <p className="text-sm font-bold uppercase tracking-wider">Of perfecting the flame-grilled burger.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-char-black text-cream-white rounded-[60px] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
          <div className="relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl mb-4">Our Journey</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">From a single restaurant in Florida to a global icon, we've stayed true to our roots.</p>
            </div>
            <div className="space-y-12 relative before:absolute before:left-8 lg:before:left-1/2 before:top-0 before:w-1 before:h-full before:bg-white/10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    'flex flex-col lg:flex-row items-center gap-8 lg:gap-24 relative',
                    i % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  )}
                >
                  <div className="flex-1 lg:text-right w-full lg:w-auto pl-20 lg:pl-0">
                    <div className={cn('lg:flex lg:flex-col', i % 2 === 0 ? 'lg:items-start' : 'lg:items-end')}>
                      <div className="text-6xl font-display text-crown-gold mb-2">{item.year}</div>
                      <h3 className="text-3xl mb-4">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed max-w-md ml-auto mr-auto lg:ml-0 lg:mr-0">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-flame-red rounded-full border-4 border-char-black z-10 shadow-[0_0_20px_rgba(214,35,0,0.5)]"></div>
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
