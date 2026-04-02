import { NextResponse } from 'next/server'
import { z } from 'zod'

// Temporary in-memory storage (replace with database later)
let waitlistEmails: string[] = []

const emailSchema = z.string().email()

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate email
    const validatedEmail = emailSchema.parse(email)

    // Check if email already exists
    if (waitlistEmails.includes(validatedEmail)) {
      return NextResponse.json(
        { error: 'You\'re already on the waitlist!' },
        { status: 400 }
      )
    }

    // Add to waitlist
    waitlistEmails.push(validatedEmail)

    return NextResponse.json(
      { message: 'You\'ve been added to the waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
