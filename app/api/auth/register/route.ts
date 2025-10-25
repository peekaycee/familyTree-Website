import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email } = body || {}
  if (!name || !email) {
    return NextResponse.json({ message: 'Name and email required' }, { status: 400 })
  }

  // In production, create user record here.
  const cookie = 'familytree_session=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=3600'
  const res = NextResponse.json({ ok: true })
  res.headers.set('Set-Cookie', cookie)
  return res
}
