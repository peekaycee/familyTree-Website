import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { email } = body || {}
  if (!email) {
    return NextResponse.json({ message: 'Email required' }, { status: 400 })
  }

  // For demo: accept any credentials. In production, verify user properly.
  const cookie = 'familytree_session=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=3600'
  const res = NextResponse.json({ ok: true })
  res.headers.set('Set-Cookie', cookie)
  return res
}
