import styles from './Contact.module.css'

const links = [
  { icon: '✉', label: 'garv2004bhardwaj@gmail.com', href: 'mailto:garv2004bhardwaj@gmail.com' },
  { icon: '📞', label: '+91-7827419739', href: 'tel:+917827419739' },
  { icon: '💼', label: 'linkedin.com/in/garv-bhardwaj', href: 'https://www.linkedin.com/in/garv-bhardwaj-b4b292202/' },
  { icon: '🐙', label: 'github.com/GARVBHARDWAJ', href: 'https://github.com/GARVBHARDWAJ' },
  { icon: '🌐', label: 'garvbhardwaj.vercel.app', href: 'https://garvbhardwaj.vercel.app/' },
]

const education = [
  { school: 'SRM Institute of Science & Technology', sub: 'B.Tech CSE + AIML · 9.09 CGPA', period: '2023 – 2027', loc: 'Kattankulathur, TN', active: true },
  { school: 'Shiv Vani Model Sr. Sec. School', sub: '12th · 75.2%', period: '2021 – 2022', loc: 'New Delhi', active: false },
  { school: 'Shiv Vani Model Sr. Sec. School', sub: '10th · 84.4%', period: '2019 – 2020', loc: 'New Delhi', active: false },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>04 /</span>
          <h2 className={styles.title}>Let's Connect</h2>
          <div className={styles.line} />
        </div>
        <div className={styles.grid}>
          <div>
            <p className={styles.intro}>
              Open to internships, research collaborations, and exciting projects.
              Based in New Delhi — reach out through any channel.
            </p>
            <div className={styles.links}>
              {links.map(l => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles.link}>
                  <span className={styles.linkIcon}>{l.icon}</span>
                  <span className={styles.linkLabel}>{l.label}</span>
                  <span className={styles.linkArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.eduLabel}>// Education Timeline</div>
            <div className={styles.timeline}>
              {education.map((e, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} style={{ background: e.active ? 'var(--accent)' : 'var(--muted)' }} />
                  <div className={styles.timelineContent}>
                    <div className={styles.timelineSchool}>{e.school}</div>
                    <div className={styles.timelineSub} style={{ color: e.active ? 'var(--accent)' : 'var(--muted)' }}>{e.sub}</div>
                    <div className={styles.timelineMeta}>{e.period} · {e.loc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <span>© 2025 Garv Bhardwaj · New Delhi, India</span>
        <span>B.Tech CSE + AIML · SRM University · <span style={{color:'var(--accent)'}}>9.09 CGPA</span></span>
      </footer>
    </section>
  )
}
