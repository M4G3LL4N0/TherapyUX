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
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 dark:from-blue-300 dark:via-purple-200 dark:to-pink-200">
            Emotional Intelligence<br className="hidden md:block" /> Redefined
          </h1>
          <p className="mt-8 text-xl leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            Precision mental health tools that adapt to you - private, intelligent, and always in your control.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="relative">
              <span className="relative z-10">Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm animate-pulse" />
            </Button>
            <Button variant="secondary" size="lg">
              Learn More →
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Backed by:</span>
            <div className="flex gap-3">
              {/* Add investor logos here */}
            </div>
          </div>
          <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Trusted by leading mental health professionals
          </p>
        </motion.div>
      </div>
    </section>
  )
}
