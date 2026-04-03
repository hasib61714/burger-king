import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Search, Navigation, Clock, Phone, Info, ChevronRight, Filter, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const stores = [
  {
    id: 1,
    name: 'BK - Downtown',
    address: '123 Main St, City Center, NY 10001',
    distance: '0.8 miles',
    status: 'Open Now',
    hours: '7:00 AM - 11:00 PM',
    phone: '(555) 123-4567',
    features: ['Drive-Thru', 'Delivery', 'Mobile Order', 'Dine-in'],
    rating: 4.5,
  },
  {
    id: 2,
    name: 'BK - Westside',
    address: '456 West Blvd, Westside, NY 10002',
    distance: '2.4 miles',
    status: 'Open Now',
    hours: '24 Hours',
    phone: '(555) 987-6543',
    features: ['Drive-Thru', '24 Hours', 'Delivery', 'Mobile Order'],
    rating: 4.2,
  },
  {
    id: 3,
    name: 'BK - North Plaza',
    address: '789 North Rd, North Plaza, NY 10003',
    distance: '3.1 miles',
    status: 'Closing Soon',
    hours: '8:00 AM - 10:00 PM',
    phone: '(555) 456-7890',
    features: ['Delivery', 'Mobile Order', 'Dine-in'],
    rating: 4.8,
  },
];

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  return (
    <div className="pt-24 min-h-screen bg-cream-white flex flex-col lg:flex-row overflow-hidden">
      {/* Sidebar List */}
      <aside className="lg:w-[450px] bg-white shadow-2xl z-20 flex flex-col h-[60vh] lg:h-[calc(100vh-96px)]">
        <div className="p-8 border-b border-gray-100">
          <h1 className="text-4xl mb-6">Find a BK</h1>
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Enter city, state, or zip code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border-2 border-transparent focus:border-flame-red rounded-full py-4 pl-12 pr-6 transition-all"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {['Open Now', 'Drive-Thru', '24 Hours', 'Delivery'].map((filter) => (
              <button
                key={filter}
                className="whitespace-nowrap px-4 py-2 rounded-full border-2 border-gray-100 text-xs font-bold uppercase tracking-wider hover:border-flame-red hover:text-flame-red transition-all"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {stores.map((store) => (
            <button
              key={store.id}
              onClick={() => setSelectedStore(store)}
              className={cn(
                'w-full p-6 rounded-3xl text-left transition-all border-2 flex flex-col gap-4 group',
                selectedStore.id === store.id
                  ? 'bg-cream-white border-flame-red shadow-lg'
                  : 'bg-white border-transparent hover:bg-gray-50'
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl mb-1 group-hover:text-flame-red transition-colors">{store.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">{store.address}</p>
                </div>
                <div className="text-right">
                  <div className="text-flame-red font-bold text-sm mb-1">{store.distance}</div>
                  <div className="flex items-center gap-1 text-crown-gold">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-bold">{store.rating}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
                <span className={cn(
                  'flex items-center gap-1',
                  store.status === 'Open Now' ? 'text-green-600' : 'text-bk-orange'
                )}>
                  <Clock size={14} /> {store.status}
                </span>
                <span className="text-gray-400">{store.hours}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {store.features.map((f) => (
                  <span key={f} className="bg-gray-100 text-gray-500 text-[10px] font-bold uppercase px-2 py-1 rounded-md">
                    {f}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex gap-2">
                <button className="flex-1 btn-primary py-2 text-xs">Order Here</button>
                <button className="flex-1 btn-outline py-2 text-xs">Directions</button>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Map Area (Simulated) */}
      <main className="flex-1 relative bg-gray-200">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
          {/* Simulated Pins */}
          {stores.map((store) => (
            <motion.div
              key={store.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: store.id * 0.2 }}
              className="absolute cursor-pointer"
              style={{
                top: `${20 + store.id * 15}%`,
                left: `${30 + store.id * 10}%`,
              }}
              onClick={() => setSelectedStore(store)}
            >
              <div className={cn(
                'relative flex flex-col items-center group',
                selectedStore.id === store.id ? 'z-30' : 'z-10'
              )}>
                <div className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center text-white shadow-xl transition-all',
                  selectedStore.id === store.id ? 'bg-flame-red scale-125' : 'bg-bk-orange hover:scale-110'
                )}>
                  <MapPin size={20} />
                </div>
                <div className="absolute top-12 bg-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap text-xs font-bold border-2 border-transparent group-hover:border-flame-red transition-all">
                  {store.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Store Info Overlay (Mobile) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md lg:hidden">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border-2 border-flame-red">
            <h3 className="text-2xl mb-1">{selectedStore.name}</h3>
            <p className="text-gray-500 text-sm mb-4">{selectedStore.address}</p>
            <div className="flex gap-2">
              <button className="flex-1 btn-primary py-3">Order Now</button>
              <button className="w-12 h-12 border-2 border-gray-100 rounded-full flex items-center justify-center">
                <Navigation size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Floating Controls */}
        <div className="absolute top-8 right-8 flex flex-col gap-4">
          <button className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-colors">
            <Navigation size={24} className="text-flame-red" />
          </button>
          <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden">
            <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 border-b border-gray-100 font-bold text-xl">+</button>
            <button className="w-12 h-12 flex items-center justify-center hover:bg-gray-50 font-bold text-xl">-</button>
          </div>
        </div>
      </main>
    </div>
  );
}
