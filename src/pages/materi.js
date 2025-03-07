// src/pages/materi.js
import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiVideo, FiFileText, FiDownload } from 'react-icons/fi';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { utbkSubjects } from '../utils/data';

export default function Materi() {
  const [activeTab, setActiveTab] = useState('semua');
  
  // Mock materials data
  const materials = [
    {
      id: 1,
      title: "Konsep Dasar Aljabar",
      description: "Mempelajari konsep dasar aljabar sebagai persiapan UTBK",
      type: "pdf",
      size: "2.4 MB",
      duration: null,
      subject: "Matematika",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 2,
      title: "Pengantar Pemahaman Bacaan",
      description: "Video pembelajaran tentang teknik pemahaman bacaan dalam Bahasa Indonesia",
      type: "video",
      size: null,
      duration: "18:24",
      subject: "Bahasa Indonesia",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 3,
      title: "Latihan Soal TPS",
      description: "Kumpulan latihan soal TPS lengkap dengan pembahasan",
      type: "pdf",
      size: "4.2 MB",
      duration: null,
      subject: "TPS",
      thumbnail: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 4,
      title: "Grammar Bahasa Inggris",
      description: "Video pembelajaran tentang tata bahasa Inggris untuk UTBK",
      type: "video",
      size: null,
      duration: "22:15",
      subject: "Bahasa Inggris",
      thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 5,
      title: "Modul Matematika Lengkap",
      description: "Modul lengkap persiapan matematika UTBK",
      type: "pdf",
      size: "8.7 MB",
      duration: null,
      subject: "Matematika",
      thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
    {
      id: 6,
      title: "Rangkuman Sastra Indonesia",
      description: "Rangkuman materi sastra Indonesia untuk UTBK",
      type: "document",
      size: "1.8 MB",
      duration: null,
      subject: "Bahasa Indonesia",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    },
  ];
  
  // Filter materials based on active tab
  const filteredMaterials = activeTab === 'semua' 
    ? materials 
    : materials.filter(material => material.subject.toLowerCase() === activeTab.toLowerCase());
  
  // Type badge config
  const typeBadgeConfig = {
    pdf: { icon: <FiFileText />, color: 'danger', label: 'PDF' },
    video: { icon: <FiVideo />, color: 'primary', label: 'Video' },
    document: { icon: <FiBook />, color: 'info', label: 'Dokumen' },
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <>
      <Head>
        <title>Materi - UTBK Prep</title>
      </Head>
      
      <section className="py-12 bg-primary-50 dark:bg-primary-900/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-900 dark:text-white">
              Materi Pembelajaran
            </h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Akses berbagai materi pembelajaran untuk persiapan UTBK dalam bentuk video, PDF, dan dokumen.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs navigation */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-1 min-w-max border-b border-secondary-200 dark:border-secondary-700">
              <button
                onClick={() => setActiveTab('semua')}
                className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                  activeTab === 'semua' 
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400' 
                    : 'border-transparent text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                }`}
              >
                Semua Materi
              </button>
              
              {utbkSubjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => setActiveTab(subject.name.toLowerCase())}
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                    activeTab === subject.name.toLowerCase() 
                      ? 'border-primary-500 text-primary-600 dark:text-primary-400' 
                      : 'border-transparent text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                  }`}
                >
                  {subject.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Materials grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredMaterials.length > 0 ? (
              filteredMaterials.map((material) => (
                <motion.div key={material.id} variants={itemVariants}>
                  <Card hover className="h-full flex flex-col">
                    <div className="relative h-48 rounded-t-lg overflow-hidden -mx-5 -mt-5">
                      <image
                        src={material.thumbnail}
                        alt={material.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant={typeBadgeConfig[material.type].color} size="sm" className="flex items-center">
                          {typeBadgeConfig[material.type].icon}
                          <span className="ml-1">{typeBadgeConfig[material.type].label}</span>
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex-grow">
                      <Badge variant="secondary" size="sm" className="mb-2">
                        {material.subject}
                      </Badge>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                        {material.title}
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        {material.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-secondary-500 dark:text-secondary-400 mt-4 pt-4 border-t border-secondary-100 dark:border-secondary-700">
                      {material.duration && (
                        <div className="flex items-center">
                          <FiVideo className="mr-1" />
                          <span>{material.duration}</span>
                        </div>
                      )}
                      
                      {material.size && (
                        <div className="flex items-center">
                          <FiFileText className="mr-1" />
                          <span>{material.size}</span>
                        </div>
                      )}
                      
                      <button className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
                        <FiDownload className="mr-1" />
                        <span>Unduh</span>
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                  Tidak ada materi yang ditemukan
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Silakan pilih kategori materi yang lain
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}