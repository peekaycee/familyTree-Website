'use client'
import Link from 'next/link'
import styles from './components.module.css'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    // check cookie presence
    setLoggedIn(document.cookie.split(';').some(c => c.trim().startsWith('familytree_session=')))
  }, [])
  
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}><Link href='/'>FamilyTree</Link></div>
      <div className={styles.links}>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        {loggedIn ? (
          <>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/auth/logout' className={styles.logout}>Logout</Link>
          </>
        ) : (
          <Link href='/auth/login'>Login</Link>
        )}
      </div>
    </nav>
  )
}
