'use client'
import { useState } from 'react'
import styles from '../auth.module.css'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (res.ok) {
      router.push('/dashboard')
    } else {
      const body = await res.json()
      setError(body?.message || 'Login failed')
    }
  }

  return (
    <section className={styles.authPage}>
      <div className={styles.Container}>
        <h2>Login to Your FamilyTree Account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" required autoFocus/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
        <p>Don't have an account? <a href="/auth/register">Register</a></p>
      </div>
    </section>
  )
}
