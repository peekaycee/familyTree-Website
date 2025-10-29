'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../auth.module.css';
export default function Logout() {
  const router = useRouter()
  useEffect(() => {
    fetch('/api/auth/logout', { method: 'POST' }).then(()=>router.push('/auth/login'))
  }, [])
  return <p className={styles.logoutText}>Logging out...</p>
}
