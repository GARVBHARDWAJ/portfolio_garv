import { useState } from 'react'
import { projects } from '../data/index.js'
import styles from './Projects.module.css'

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>02 /</span>
          <h2 className={styles.title}>Projects</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.list}>
          {projects.map((p, i) => (
            <a
              key={p.num}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={styles.card}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                '--card-color': p.color,
                opacity: hovered !== null && hovered !== i ? 0.45 : 1,
              }}
            >
              <div className={styles.cardBar} />
              <div className={styles.cardNum}>{p.num}</div>
              <div className={styles.cardInfo}>
                <div className={styles.cardTitle}>{p.title}</div>
                <div className={styles.cardDesc}>{p.desc}</div>
                <div className={styles.cardTags}>
                  {p.tags.map(t => (
                    <span key={t} className={styles.tag} style={{ borderColor: `${p.color}44`, color: p.color }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardMeta}>
                <div className={styles.cardDate}>{p.date}</div>
                <div className={styles.cardArrow}>↗</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
