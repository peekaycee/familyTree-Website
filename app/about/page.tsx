import styles from './about.module.css'
export default function About() {
  return (
    <div className={styles.container}>
      <h1>About FamilyTree</h1>
      <p>We believe every family has a story worth preserving. FamilyTree helps you store photos, documents, and stories in a private, secure way so future generations can access their heritage.</p>
      <section className={styles.values}>
        <div><h3>Mission</h3><p>Preserve family legacies with dignity and privacy.</p></div>
        <div><h3>Vision</h3><p>Be the trusted home for family histories worldwide.</p></div>
      </section>
    </div>
  )
}
