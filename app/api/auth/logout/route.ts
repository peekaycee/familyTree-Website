import { NextResponse } from 'next/server'

export async function POST() {
  // Create a response to confirm logout
  const res = NextResponse.json({ message: 'Logged out successfully' })

  // Clear session cookie
  res.cookies.set('familytree_session', '', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
  })

  return res
}
