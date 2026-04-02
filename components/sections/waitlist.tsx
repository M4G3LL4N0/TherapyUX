'use client'

import { Badge } from '@components/ui/badge'
import { Button } from '@components/ui/button'
import { Input } from '@components/ui/input'
import { SectionContainer } from '@components/ui/section-container'
import { toast } from 'sonner'
import { useState } from 'react'
import { z } from 'zod'

const emailSchema = z.string().email()

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    // Client-side validation
    try {
      emailSchema.parse(email)
      setError(null)
    } catch {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setSuccess(true)
      toast.success('You have been added to our waitlist!')
      setEmail('')
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
        setError(error.message)
      } else {
        toast.error('Something went wrong. Please try again.')
        setError('Something went wrong. Please try again.')
      }
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
          <div className="flex-1 relative">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setError(null)
              }}
              required
              disabled={loading || success}
              className="w-full"
              aria-label="Email address"
            />
            {error && (
              <p className="absolute -bottom-5 left-0 text-sm text-red-500">
                {error}
              </p>
            )}
          </div>
          <Button
            type="submit"
            variant="primary"
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
