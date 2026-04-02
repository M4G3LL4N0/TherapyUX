'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { SectionContainer } from '../ui/section-container'
import { Input } from '../ui/input'

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionContainer id="waitlist" className="bg-gradient-to-b from-white/50 to-white/20 dark:from-zinc-900/50 dark:to-zinc-900/20 backdrop-blur-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Take Control of Your Mental Health
        </h2>
        <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-300">
          Join the waitlist for private, intelligent mental health tools that adapt to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading || success}
            className="flex-1"
            aria-label="Email address"
            aria-describedby="waitlist-description"
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading || success}
          >
            {loading ? 'Joining...' : success ? 'Joined!' : 'Join Waitlist'}
          </Button>
        </form>

        {error && (
          <p className="mt-4 text-sm text-red-500 dark:text-red-400">
            {error}
          </p>
        )}

        {success && (
          <p className="mt-4 text-sm text-green-600 dark:text-green-400">
            Thank you! We'll be in touch soon.
          </p>
        )}
      </div>
    </SectionContainer>
  )
}
