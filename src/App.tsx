import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Deals from './pages/Deals';
import Locations from './pages/Locations';
import Rewards from './pages/Rewards';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<About />} /> {/* Placeholder */}
            <Route path="/franchise" element={<Contact />} /> {/* Placeholder */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

