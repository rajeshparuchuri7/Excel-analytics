import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary-950 text-white">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 0, 0] 
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="mb-6"
      >
        <BarChart2 size={64} className="text-accent-500" />
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Excel Analytics
      </motion.h1>
      
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ 
            repeat: Infinity, 
            duration: 1.5,
            ease: "easeInOut" 
          }}
          className="h-full bg-gradient-to-r from-blue-500 via-accent-500 to-blue-500"
        />
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-4 text-gray-400"
      >
        Loading your analytics experience...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;