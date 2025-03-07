// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Menu items
  const menuItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Kelas Online', path: '/kelas-online' },
    { name: 'Materi', path: '/materi' },
    { name: 'Forum Diskusi', path: '/forum-diskusi' },
    { name: 'Profil', path: '/profil' },
  ];

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-secondary-900 shadow-md py-2' 
          : 'bg-white/90 dark:bg-secondary-900/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300">
                  UTBK
                </span>
                <span className="text-2xl font-bold text-secondary-800 dark:text-white">
                  Prep
                </span>
              </motion.div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link key={item.path} href={item.path} legacyBehavior>
                <a className="group relative">
                  <motion.span
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className={`text-secondary-600 dark:text-secondary-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${
                      router.pathname === item.path 
                        ? 'text-primary-600 dark:text-primary-400' 
                        : ''
                    }`}
                  >
                    {item.name}
                  </motion.span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    router.pathname === item.path ? 'scale-x-100' : ''
                  }`}></span>
                </a>
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              <FiUser className="text-white" />
              <span>Login</span>
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center p-2 rounded-full hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={item.path} legacyBehavior>
                      <a className={`block px-4 py-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors ${
                        router.pathname === item.path 
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium' 
                          : 'text-secondary-700 dark:text-secondary-300'
                      }`}>
                        {item.name}
                      </a>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1, duration: 0.3 }}
                  className="px-4 pt-2"
                >
                  <button className="w-full py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors">
                    Login
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;