import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.inner}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Available for Internships &amp; Projects
        </div>
        <h1 className={styles.name}>
          <span className={styles.outline}>Garv</span>
          <br />
          <span className={styles.filled}>Bhardwaj</span>
        </h1>
        <p className={styles.sub}>
          B.Tech CSE + AI/ML @ SRM University — building intelligent systems,
          full-stack platforms, and real-time IoT solutions.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>View Projects →</a>
          <a href="mailto:garv2004bhardwaj@gmail.com" className={styles.btnSecondary}>Get in Touch</a>
        </div>
        <div className={styles.stats}>
          {[
            { num: '9.09', unit: '★', label: 'CGPA' },
            { num: '5', unit: '+', label: 'Projects' },
            { num: '11', unit: '+', label: 'Certifications' },
            { num: '2', unit: 'yr', label: 'Leadership' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}<span>{s.unit}</span></div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
