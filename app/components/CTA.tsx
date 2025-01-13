'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2944&auto=format&fit=crop"
              alt="Business Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/90" />
          </div>
          
          <div className="relative z-10 p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have already taken their business to the next level with our strategic solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

