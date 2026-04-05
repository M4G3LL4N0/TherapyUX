import { NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const emailSchema = z.string().email({
  message: 'Please enter a valid email address'
})

export async function POST(request: Request) {
  const { email } = await request.json()

  try {
    // Validate email
    const validatedEmail = emailSchema.parse(email.trim().toLowerCase())

    const supabase = createClient()

    // Check if email exists
    const { data: existing } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', validatedEmail)
      .single()
    
    if (existing) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist' },
        { status: 409 }
      )
    }

    // Insert new email
    const { error } = await supabase
      .from('waitlist')
      .insert({ email: validatedEmail })

    if (error) throw error

    return NextResponse.json(
      { success: true },
      { status: 200 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 422 }
      )
    }

    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Could not add to waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
