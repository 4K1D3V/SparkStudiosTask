'use client'

import { motion } from 'framer-motion'
import { BarChart3, Rocket, Users, Target } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive analytics and reporting tools.'
    },
    {
      icon: Rocket,
      title: 'Fast Implementation',
      description: 'Quick and efficient deployment of strategic solutions for your business.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Foster teamwork and communication with collaborative tools and features.'
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set, monitor, and achieve your business objectives with precision.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions that help your business thrive in today's competitive market.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

