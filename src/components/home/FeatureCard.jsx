// src/components/home/FeatureCard.jsx
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { 
  FiBookOpen, FiVideo, FiUsers, FiAward, FiActivity, 
  FiClock, FiTarget, FiZap, FiLayers
} from 'react-icons/fi';

const FeatureCard = ({ icon, title, description, colorClass = 'primary' }) => {
  // Map icon name to icon component
  const IconComponent = useMemo(() => {
    const icons = {
      book: FiBookOpen,
      video: FiVideo,
      users: FiUsers,
      award: FiAward,
      activity: FiActivity,
      clock: FiClock,
      target: FiTarget,
      zap: FiZap,
      layers: FiLayers
    };
    return icons[icon] || FiBookOpen;
  }, [icon]);

  // Map color class to tailwind classes
  const colorClasses = useMemo(() => {
    const colors = {
      primary: {
        light: 'bg-primary-50 dark:bg-primary-900/20',
        icon: 'text-primary-500 dark:text-primary-400',
        hover: 'group-hover:bg-primary-500 dark:group-hover:bg-primary-500',
        border: 'border-primary-100 dark:border-primary-800/40'
      },
      blue: {
        light: 'bg-blue-50 dark:bg-blue-900/20',
        icon: 'text-blue-500 dark:text-blue-400',
        hover: 'group-hover:bg-blue-500 dark:group-hover:bg-blue-500',
        border: 'border-blue-100 dark:border-blue-800/40'
      },
      green: {
        light: 'bg-green-50 dark:bg-green-900/20',
        icon: 'text-green-500 dark:text-green-400',
        hover: 'group-hover:bg-green-500 dark:group-hover:bg-green-500',
        border: 'border-green-100 dark:border-green-800/40'
      },
      purple: {
        light: 'bg-purple-50 dark:bg-purple-900/20',
        icon: 'text-purple-500 dark:text-purple-400',
        hover: 'group-hover:bg-purple-500 dark:group-hover:bg-purple-500',
        border: 'border-purple-100 dark:border-purple-800/40'
      },
      red: {
        light: 'bg-red-50 dark:bg-red-900/20',
        icon: 'text-red-500 dark:text-red-400',
        hover: 'group-hover:bg-red-500 dark:group-hover:bg-red-500',
        border: 'border-red-100 dark:border-red-800/40'
      },
      orange: {
        light: 'bg-orange-50 dark:bg-orange-900/20',
        icon: 'text-orange-500 dark:text-orange-400',
        hover: 'group-hover:bg-orange-500 dark:group-hover:bg-orange-500',
        border: 'border-orange-100 dark:border-orange-800/40'
      }
    };
    return colors[colorClass] || colors.primary;
  }, [colorClass]);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative p-6 bg-white dark:bg-secondary-800 rounded-xl shadow-sm border border-secondary-100 dark:border-secondary-700 hover:shadow-md transition-all duration-300"
    >
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colorClasses.light} bg-opacity-40 dark:bg-opacity-20`}></div>
      
      <div className="relative z-10">
        <div className={`w-14 h-14 mb-4 rounded-lg ${colorClasses.light} border ${colorClasses.border} flex items-center justify-center transition-colors duration-300`}>
          <IconComponent 
            className={`w-7 h-7 ${colorClasses.icon} transition-colors duration-300 group-hover:text-white`} 
          />
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white group-hover:text-secondary-900 dark:group-hover:text-white transition-colors duration-300">{title}</h3>
        
        <p className="text-secondary-600 dark:text-secondary-400 group-hover:text-secondary-700 dark:group-hover:text-secondary-300 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;