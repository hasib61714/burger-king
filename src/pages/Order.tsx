import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Truck, ShoppingBag, ChevronRight, Search, Star, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

type OrderStep = 'method' | 'location' | 'menu' | 'confirm';

export default function Order() {
  const [step, setStep] = useState<OrderStep>('method');
  const [method, setMethod] = useState<'delivery' | 'pickup' | 'dine-in' | null>(null);
  const [selectedStore, setSelectedStore] = useState<any>(null);

  const stores = [
    { id: 1, name: 'BK - Downtown', address: '123 Main St, City Center', distance: '0.8 miles', status: 'Open Now', waitTime: '10-15 min' },
    { id: 2, name: 'BK - Westside', address: '456 West Blvd, Westside', distance: '2.4 miles', status: 'Open Now', waitTime: '15-20 min' },
    { id: 3, name: 'BK - North Plaza', address: '789 North Rd, North Plaza', distance: '3.1 miles', status: 'Open Now', waitTime: '5-10 min' },
  ];

  const handleMethodSelect = (m: 'delivery' | 'pickup' | 'dine-in') => {
    setMethod(m);
    setStep('location');
  };

  const handleStoreSelect = (store: any) => {
    setSelectedStore(store);
    setStep('menu');
  };

  return (
    <div className="pt-24 min-h-screen bg-cream-white pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Header */}
        <div className="flex items-center justify-between mb-12 bg-white p-6 rounded-3xl shadow-sm">
          {[
            { id: 'method', label: 'Method', icon: <Truck size={20} /> },
            { id: 'location', label: 'Location', icon: <MapPin size={20} /> },
            { id: 'menu', label: 'Order', icon: <ShoppingBag size={20} /> },
            { id: 'confirm', label: 'Confirm', icon: <CheckCircle2 size={20} /> },
          ].map((s, i) => (
            <div key={s.id} className="flex items-center gap-3">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center transition-all',
                  step === s.id
                    ? 'bg-flame-red text-white shadow-lg scale-110'
                    : 'bg-gray-100 text-gray-400'
                )}
              >
                {s.icon}
              </div>
              <span
                className={cn(
                  'hidden sm:block font-display text-lg uppercase tracking-wider',
                  step === s.id ? 'text-flame-red' : 'text-gray-400'
                )}
              >
                {s.label}
              </span>
              {i < 3 && <ChevronRight className="hidden sm:block text-gray-300" size={20} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 'method' && (
            <motion.div
              key="method"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h1 className="text-5xl mb-4">How would you like your BK?</h1>
                <p className="text-gray-600">Choose your preferred ordering method to continue.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'delivery', label: 'Delivery', icon: <Truck size={48} />, desc: 'We bring it to your door' },
                  { id: 'pickup', label: 'Pickup', icon: <ShoppingBag size={48} />, desc: 'Order ahead, skip the line' },
                  { id: 'dine-in', label: 'Dine-in', icon: <MapPin size={48} />, desc: 'Order at your table' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => handleMethodSelect(m.id as any)}
                    className="bg-white p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all group border-4 border-transparent hover:border-flame-red flex flex-col items-center text-center"
                  >
                    <div className="text-flame-red mb-6 group-hover:scale-110 transition-transform">{m.icon}</div>
                    <h3 className="text-3xl mb-2">{m.label}</h3>
                    <p className="text-gray-500 text-sm">{m.desc}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'location' && (
            <motion.div
              key="location"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <button onClick={() => setStep('method')} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ArrowLeft size={24} />
                </button>
                <h1 className="text-4xl">Select a Restaurant</h1>
              </div>
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Enter your address or zip code..."
                  className="w-full bg-white border-2 border-gray-100 rounded-full py-4 pl-12 pr-6 focus:outline-none focus:border-flame-red transition-colors shadow-sm"
                />
              </div>
              <div className="space-y-4">
                {stores.map((store) => (
                  <button
                    key={store.id}
                    onClick={() => handleStoreSelect(store)}
                    className="w-full bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all text-left border-2 border-transparent hover:border-flame-red flex items-center justify-between group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-flame-red group-hover:bg-flame-red group-hover:text-white transition-colors">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl mb-1">{store.name}</h3>
                        <p className="text-gray-500 text-sm mb-2">{store.address}</p>
                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
                          <span className="text-green-600 flex items-center gap-1">
                            <Clock size={14} /> {store.status}
                          </span>
                          <span className="text-gray-400">{store.distance}</span>
                          <span className="text-bk-orange">Wait: {store.waitTime}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-flame-red transition-colors" size={24} />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-24"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
              </div>
              <h1 className="text-5xl mb-4">Store Selected!</h1>
              <p className="text-gray-600 mb-12">You're ordering from <span className="font-bold text-char-black">{selectedStore?.name}</span>.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => window.location.href = '/menu'} className="btn-primary text-xl px-12 py-4">
                  Go to Menu
                </button>
                <button onClick={() => setStep('location')} className="btn-outline text-xl px-12 py-4">
                  Change Store
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
