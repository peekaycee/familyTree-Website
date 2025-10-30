// /app/api/auth/register/route.ts
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Name, email and password are required' }, { status: 400 })
    }

    // TODO: save user in DB
    // Mock session token creation
    const sessionToken = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`

    const res = NextResponse.json({ message: 'Registration successful' })
    res.cookies.set('familytree_session', sessionToken, {
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
    })
    return res
  } catch (err) {
    console.error('Register error:', err)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
