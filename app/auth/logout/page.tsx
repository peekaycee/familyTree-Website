'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Logout() {
  const router = useRouter()
  useEffect(() => {
    fetch('/api/auth/logout', { method: 'POST' }).then(()=>router.push('/auth/login'))
  }, [])
  return <p style={{padding:'2rem', textAlign:'center'}}>Logging out...</p>
}
