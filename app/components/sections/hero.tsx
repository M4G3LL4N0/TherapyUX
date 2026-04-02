'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export function HeroSection() {
  return (
    <SectionContainer className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/80 dark:to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-white/80 dark:to-black/80" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 dark:from-blue-300 dark:via-purple-200 dark:to-pink-200">
            Revolutionizing Therapy<br className="hidden md:block" /> Through Design
          </h1>
          <p className="mt-8 text-xl leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
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
