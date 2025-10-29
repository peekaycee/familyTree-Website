'use client'
import { useState } from 'react'
import styles from '../auth.module.css'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    if (res.ok) {
      router.push('/dashboard')
    } else {
      const body = await res.json()
      setError(body?.message || 'Registration failed')
    }
  }

  return (
    <section className={styles.authPage}>
      <div className={styles.Container}>
        <h2>Create Your FamilyTree Account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" required autoFocus />
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" required />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
          <button type="submit">Register</button>
          {error && <p style={{color:'red'}}>{error}</p>}
        </form>
        <p>Already have an account? <a href="/auth/login">Login</a></p>
      </div>
    </section>
  )
}
