'use client'
import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from '../auth.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.ok) {
      // update client-visible UI flag
      try {
        localStorage.setItem('ft_logged_in', '1')
        localStorage.setItem('ft_last_changed', String(Date.now()))
      } catch (e) {}

      // notify UI
      window.dispatchEvent(new Event('authChange'))

      // redirect back or to dashboard
      const redirectTo = searchParams.get('from') || '/dashboard'
      router.push(redirectTo)
    } else {
      const body = await res.json().catch(() => ({}))
      setError(body?.message || 'Login failed')
    }
  }

  return (
    <section className={styles.authPage}>
      <div className={styles.Container}>
        <h2>Login to Your FamilyTree Account</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
              autoFocus
            />
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
            {error && <p className={styles.errorMessage}>{error}</p>}
          </form>
        </Suspense>
        <p>
          Don’t have an account? <a href="/auth/register">Register</a>
        </p>
      </div>
    </section>
  )
}
