import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Info, Plus, Flame, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = [
  'Flame-Grilled Burgers',
  'Chicken & Fish',
  'Sides',
  'Drinks & Coffee',
  'Sweets',
  'King Jr.™ Kids Meals',
];

const menuItems = [
  {
    id: 1,
    category: 'Flame-Grilled Burgers',
    name: 'Whopper®',
    calories: '660 Cal',
    price: '$6.49',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60',
    tags: ['Popular', 'Flame-Grilled'],
  },
  {
    id: 2,
    category: 'Flame-Grilled Burgers',
    name: 'Bacon King',
    calories: '1150 Cal',
    price: '$8.99',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&auto=format&fit=crop&q=60',
    tags: ['Bestseller'],
  },
  {
    id: 3,
    category: 'Chicken & Fish',
    name: 'Chicken Fries',
    calories: '280 Cal',
    price: '$4.99',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&auto=format&fit=crop&q=60',
    tags: ['Snack'],
  },
  {
    id: 4,
    category: 'Sides',
    name: 'Classic Fries',
    calories: '380 Cal',
    price: '$2.99',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&auto=format&fit=crop&q=60',
    tags: ['Classic'],
  },
  {
    id: 5,
    category: 'Sweets',
    name: 'Hershey\'s® Sundae Pie',
    calories: '310 Cal',
    price: '$3.49',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&auto=format&fit=crop&q=60',
    tags: ['Sweet'],
  },
  {
    id: 6,
    category: 'Flame-Grilled Burgers',
    name: 'Impossible™ Whopper®',
    calories: '630 Cal',
    price: '$7.49',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&auto=format&fit=crop&q=60',
    tags: ['Plant-Based'],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = menuItems.filter(
    (item) =>
      item.category === activeCategory &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-cream-white">
      {/* Header */}
      <div className="bg-char-black text-cream-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h1 className="text-5xl sm:text-7xl mb-2">The Full Menu</h1>
              <p className="text-gray-400 font-bold uppercase tracking-widest">Flame-grilled since 1953</p>
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for your favorites..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-12 pr-6 text-cream-white focus:outline-none focus:border-crown-gold transition-colors"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Categories */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24">
              <h3 className="font-display text-2xl mb-6 flex items-center gap-2">
                <Filter size={20} />
                Categories
              </h3>
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      'whitespace-nowrap text-left px-6 py-3 rounded-xl font-bold uppercase tracking-wider transition-all text-sm',
                      activeCategory === cat
                        ? 'bg-flame-red text-white shadow-lg scale-105'
                        : 'bg-white text-char-black hover:bg-gray-100'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Menu Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl">{activeCategory}</h2>
              <span className="text-gray-500 font-bold">{filteredItems.length} Items</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group flex flex-col"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-flame-red text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full shadow-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl group-hover:text-flame-red transition-colors">{item.name}</h3>
                        <span className="font-display text-xl text-flame-red">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase mb-6">
                        <Flame size={14} fill="currentColor" />
                        <span>{item.calories}</span>
                        <span className="mx-1">•</span>
                        <button className="flex items-center gap-1 hover:text-char-black transition-colors">
                          <Info size={14} />
                          Nutrition
                        </button>
                      </div>
                      <div className="mt-auto flex gap-2">
                        <button className="flex-1 btn-primary py-3 flex items-center justify-center gap-2 text-sm">
                          <Plus size={18} /> Add to Order
                        </button>
                        <button className="w-12 h-12 border-2 border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
                <Search size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl mb-2">No items found</h3>
                <p className="text-gray-500">Try searching for something else or change categories.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
