import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      category: "AllTech Systems & Co",
      title: "Innovative Software Solutions",
      description: "From Concept to Intelligent Product. Transforming ideas into reality.",
      image: "assets/images/banner-item-01.jpg"
    },
    {
      category: "Custom Development",
      title: "Bespoke Solutions For Your Business",
      description: "We partner with forward-thinking businesses to deliver web, mobile and enterprise applications.",
      image: "assets/images/banner-item-02.jpg"
    },
    {
      category: "Future-Proof Technology",
      title: "Drive Efficiency, Growth, and Innovation",
      description: "Leverage our expertise to build scalable and robust software that meets your unique needs.",
      image: "assets/images/banner-item-03.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 min-h-screen flex items-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 bg-primary-tech-blue text-white text-sm font-semibold rounded-full mb-6"
          >
            {slides[currentSlide].category}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          >
            {slides[currentSlide].title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-200 mb-12 w-full md:w-2/3"
          >
            {slides[currentSlide].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Explore Our Solutions
            </motion.a>
            
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Slide Navigation */}
          <div className="absolute bottom-10 right-6 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}