import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Preserve Your Legacy, Share Your Story</h1>
        <p>A secure, private space to celebrate your family heritage.</p>
        <Link href="/auth/register" className={styles.cta}>Start Your Family Tree</Link>
      </section>

      <section className={styles.features}>
        <div className={styles.card}>
          <h3>Preserve Memories</h3>
          <p>Upload family photos and documents to protect your legacy.</p>
        </div>
        <div className={styles.card}>
          <h3>Connect Generations</h3>
          <p>Explore relationships and build your family tree interactively.</p>
        </div>
        <div className={styles.card}>
          <h3>Secure Your History</h3>
          <p>Your family’s private archive, encrypted and backed up in the cloud.</p>
        </div>
      </section>
    </div>
  )
}
