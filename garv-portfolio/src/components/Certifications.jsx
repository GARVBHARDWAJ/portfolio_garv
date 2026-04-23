import { certifications } from '../data/index.js'
import styles from './Certifications.module.css'

export default function Certifications() {
  const doubled = [...certifications, ...certifications]

  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>03 /</span>
          <h2 className={styles.title}>Certifications</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.marqueeWrap}>
          <div className={styles.fade} />
          <div className={styles.fadeRight} />
          <div className={styles.marquee}>
            {doubled.map((c, i) => (
              <a key={i} href={c.link} target="_blank" rel="noreferrer" className={styles.pill}>
                <span className={styles.icon}>{c.icon}</span>
                {c.name}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.grid}>
          {certifications.map(c => (
            <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className={styles.certCard}>
              <span className={styles.certIcon}>{c.icon}</span>
              <span className={styles.certName}>{c.name}</span>
              <span className={styles.certArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
