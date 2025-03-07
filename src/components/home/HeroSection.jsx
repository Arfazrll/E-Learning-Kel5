// src/components/home/HeroSection.jsx
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiBookOpen } from 'react-icons/fi';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scrollToFeatures = () => {
    document.getElementById('features-section').scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-700 to-primary-500 dark:from-primary-900 dark:to-primary-700 text-white py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl"></div>
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left column: Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6">
                #1 Platform Persiapan UTBK di Indonesia
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Raih Impian PTN <br />
              <span className="text-yellow-300">Bersama UTBK Prep</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 max-w-lg">
              Platform belajar online yang dirancang khusus untuk membantu siswa SMA menghadapi UTBK dengan percaya diri dan hasil maksimal.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/kelas-online" legacyBehavior>
                  <a className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold shadow-lg hover:bg-gray-100 transition-colors duration-300">
                    Mulai Belajar
                    <FiArrowRight className="ml-2" />
                  </a>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button 
                  onClick={scrollToFeatures}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-transparent border-2 border-white/70 hover:bg-white/10 transition-all duration-300"
                >
                  <FiBookOpen className="mr-2" />
                  Pelajari Lebih Lanjut
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary-300 overflow-hidden">
                    <Image 
                      src={`https://source.unsplash.com/random/100x100?face=${i}`} 
                      alt={`Student ${i}`} 
                      width={40} 
                      height={40}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">Bergabung bersama 10,000+ siswa</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column: Image */}
          <motion.div
            variants={imageVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/20">
                <div className="relative w-full h-full bg-primary-400/10 rounded-xl overflow-hidden">
                  <Image
                    src="/images/hero-image.svg"
                    alt="Students studying with UTBK Prep"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -left-10 top-1/4 p-4 bg-white rounded-lg shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <FiBookOpen className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-500">Latihan Soal</p>
                    <p className="text-secondary-900 font-semibold">10.000+ Soal</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -right-10 bottom-1/4 p-4 bg-white rounded-lg shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-secondary-500">Tingkat Kelulusan</p>
                    <p className="text-secondary-900 font-semibold">85% Siswa</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            className="text-white dark:text-secondary-900"
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;