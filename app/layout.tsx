import '../styles/globals.css';
import styles from '../styles/layout.module.css'
import Navbar from '../components/Navbar'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={styles.body}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>© 2025 FamilyTree - Preserve Your Legacy</footer>
      </body>
    </html>
  )
}
