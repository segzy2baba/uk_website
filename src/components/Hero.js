import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="container mx-auto px-6 h-screen flex items-center">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6"
        >
          Innovative Software Solutions
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          From Concept to Intelligent Product. Transforming ideas into reality.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full"
        >
          Get Started
        </motion.button>
      </div>
    </div>
  )
}