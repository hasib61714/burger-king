import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', path: '/menu' },
    { name: 'Deals', path: '/deals' },
    { name: 'Locations', path: '/locations' },
    { name: 'Rewards', path: '/rewards' },
    { name: 'Our Story', path: '/about' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-cream-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-flame-red rounded-full flex items-center justify-center text-white font-display text-2xl border-2 border-crown-gold shadow-lg">
              BK
            </div>
            <span className="font-display text-2xl tracking-tighter hidden sm:block">
              BURGER KING
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-display text-lg hover:text-flame-red transition-colors',
                  location.pathname === link.path ? 'text-flame-red' : 'text-char-black'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/locations" className="hidden sm:flex items-center gap-1 text-sm font-bold hover:text-flame-red">
              <MapPin size={18} />
              <span>Find a BK</span>
            </Link>
            <Link to="/order" className="btn-primary py-2 px-6 text-sm">
              Order Now
            </Link>
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-bk-orange text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream-white border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 font-display text-2xl border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Link to="/order" className="btn-primary text-center">
                  Start Order
                </Link>
                <Link to="/locations" className="flex items-center justify-center gap-2 font-bold">
                  <MapPin size={20} />
                  Find a Restaurant
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
