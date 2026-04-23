import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Skills','Projects','Certifications','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>GB<span>.</span></a>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              className={`${styles.link} ${active === l ? styles.active : ''}`}
              onClick={() => setActive(l)}
            >{l}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
