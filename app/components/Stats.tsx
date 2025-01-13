'use client'

import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '500+', label: 'Clients Worldwide' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '250+', label: 'Projects Completed' }
  ]

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-blue-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

