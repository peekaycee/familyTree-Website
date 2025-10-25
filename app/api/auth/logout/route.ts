import { NextResponse } from 'next/server'

export async function POST() {
  // Clear cookie by setting Max-Age=0
  const cookie = 'familytree_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'
  const res = NextResponse.json({ ok: true })
  res.headers.set('Set-Cookie', cookie)
  return res
}
