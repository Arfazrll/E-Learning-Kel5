// src/components/layout/Layout.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-300">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={router.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
