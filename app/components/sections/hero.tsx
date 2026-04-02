'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <SectionContainer className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-purple-100/20 to-pink-100/20 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/80 dark:to-black/80" />
      </div>

      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-300 dark:to-pink-300">
            Revolutionizing Therapy Through Design
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            TherapyUX combines clinical expertise with beautiful interfaces to create therapeutic experiences that actually work.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">
              Join Waitlist
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
