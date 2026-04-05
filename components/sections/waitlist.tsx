'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { Icons } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

export function WaitlistSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }

      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
    }
  }

  return (
    <SectionContainer className="bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl p-8">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">
          Join the Waitlist
        </h2>
        <p className="text-white/80 mb-6">
          Be the first to try TherapyUX when we launch.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className={cn(
              "flex-1 bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm",
              "focus:outline-none focus:ring-2 focus:ring-emerald-500/30",
              "placeholder:text-white/40"
            )}
            required
            disabled={status !== 'idle'}
          />
          <Button
            type="submit"
            variant="solid"
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              'Join Waitlist'
            )}
          </Button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-emerald-400 text-sm">
            Thanks! You've been added to the waitlist.
          </p>
        )}

        {status === 'error' && (
          <p className="mt-4 text-rose-400 text-sm">{error}</p>
        )}
      </div>
    </SectionContainer>
  )
}
