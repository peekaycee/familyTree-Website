import styles from './components.module.css'
import Link from 'next/link'

export default function Footer(){
  return(
    <div>
      <footer className={styles.footer}>
        <p>© 2025 FamilyTree - Preserve Your Legacy</p>
        <Link 
          href= '/admin/password'
          style={{color: 'white'}}>
            admin-page
        </Link>
      </footer>
    </div>
  )
}