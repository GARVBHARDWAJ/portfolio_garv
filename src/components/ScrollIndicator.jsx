import { useEffect, useState } from 'react'

const sections = ['hero','skills','projects','certifications','contact']

export default function ScrollIndicator() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = sections.indexOf(e.target.id)
          if (idx >= 0) setActive(idx)
        }
      })
    }, { threshold: 0.4 })
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{
      position:'fixed', right:'1.5rem', top:'50%', transform:'translateY(-50%)',
      display:'flex', flexDirection:'column', gap:'0.5rem', zIndex:50,
    }}>
      {sections.map((id, i) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })}
          style={{
            width: active === i ? 24 : 6,
            height: 6, borderRadius: 999,
            background: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
            border: 'none', padding: 0,
            transition: 'all 0.3s',
          }}
          title={id}
        />
      ))}
    </div>
  )
}
