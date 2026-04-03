import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Apple, Play } from 'lucide-react';

export default function Footer() {
  const links = {
    'BK Info': [
      { name: 'Our Story', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Franchising', path: '/franchise' },
      { name: 'Newsroom', path: '/news' },
    ],
    'Customer Support': [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQs', path: '/faq' },
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
    'BK Rewards': [
      { name: 'Crown Rewards', path: '/rewards' },
      { name: 'Redeem Points', path: '/rewards/redeem' },
      { name: 'Offers', path: '/deals' },
    ],
  };

  return (
    <footer className="bg-char-black text-cream-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and App Download */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-flame-red rounded-full flex items-center justify-center text-white font-display text-xl border-2 border-crown-gold">
                BK
              </div>
              <span className="font-display text-2xl tracking-tighter">BURGER KING</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving flame-grilled burgers since 1953. Have it your way.
            </p>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 bg-white text-char-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors w-fit">
                <Apple size={24} fill="currentColor" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold leading-none">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-white text-char-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors w-fit">
                <Play size={24} fill="currentColor" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold leading-none">Get it on</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-display text-xl mb-6 tracking-wide">{title}</h3>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-crown-gold transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social and Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
          </div>
          <div className="text-gray-500 text-xs text-center md:text-right">
            TM & Copyright 2026 Burger King Company LLC. All Rights Reserved.
            <br />
            Flame-grilled since 1953.
          </div>
        </div>
      </div>
    </footer>
  );
}
