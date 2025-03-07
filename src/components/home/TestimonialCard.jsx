import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ avatar, name, university, text }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-sm border border-secondary-100 dark:border-secondary-700 transition-all duration-300 hover:shadow-md"
    >
      <div className="flex space-x-1 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-secondary-700 dark:text-secondary-300 mb-6 italic">
        "{text}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-primary-100 dark:border-primary-800">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-secondary-900 dark:text-white">{name}</h4>
          <p className="text-sm text-primary-600 dark:text-primary-400">{university}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;