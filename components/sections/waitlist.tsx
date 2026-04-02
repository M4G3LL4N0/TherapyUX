'use client'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { SectionContainer } from '../ui/section-container'
import { toast } from 'sonner'
import { useState } from 'react'

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      setSuccess(true)
      toast.success('You have been added to our waitlist!')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SectionContainer id="waitlist">
      <div className="text-center">
        <Badge variant="primary" className="mb-4">
          Join Us
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to Experience the Future?
        </h2>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
          Be among the first to access TherapyUX when we launch
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
          />
          <Button
            type="submit"
            variant="default"
            disabled={loading || success}
            className="whitespace-nowrap"
          >
            {loading ? 'Processing...' : success ? 'Success!' : 'Join Waitlist'}
          </Button>
        </form>
      </div>
    </SectionContainer>
  )
}
