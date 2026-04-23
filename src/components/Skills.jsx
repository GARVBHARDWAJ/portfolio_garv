import { useState, useEffect, useRef } from 'react'
import { skills } from '../data/index.js'
import styles from './Skills.module.css'

function SkillBar({ name, level, color, inView, delay }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => setVal(level), delay)
    return () => clearTimeout(t)
  }, [inView, level, delay])

  return (
    <div className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPct} style={{ color }}>{val}%</span>
      </div>
      <div className={styles.barBg}>
        <div
          className={styles.barFill}
          style={{
            width: `${val}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 12px ${color}55`,
            transition: `width 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
          }}
        />
        <div
          className={styles.barGlow}
          style={{
            left: `${val}%`,
            background: color,
            opacity: val > 0 ? 0.7 : 0,
            transition: `left 1.1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, opacity 0.3s`,
          }}
        />
      </div>
    </div>
  )
}

function RadarChart({ items, color }) {
  const size = 220
  const cx = size / 2, cy = size / 2, r = 80
  const n = items.length

  const points = items.map((item, i) => {
    const angle = (i * 2 * Math.PI) / n - Math.PI / 2
    const dist = (item.level / 100) * r
    return {
      x: cx + dist * Math.cos(angle),
      y: cy + dist * Math.sin(angle),
      lx: cx + (r + 24) * Math.cos(angle),
      ly: cy + (r + 24) * Math.sin(angle),
    }
  })

  const gridLevels = [0.25, 0.5, 0.75, 1]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.radar}>
      {/* Grid rings */}
      {gridLevels.map(lvl => {
        const gpts = items.map((_, i) => {
          const angle = (i * 2 * Math.PI) / n - Math.PI / 2
          return `${cx + lvl * r * Math.cos(angle)},${cy + lvl * r * Math.sin(angle)}`
        }).join(' ')
        return <polygon key={lvl} points={gpts} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      })}
      {/* Axes */}
      {items.map((_, i) => {
        const angle = (i * 2 * Math.PI) / n - Math.PI / 2
        return <line key={i}
          x1={cx} y1={cy}
          x2={cx + r * Math.cos(angle)}
          y2={cy + r * Math.sin(angle)}
          stroke="rgba(255,255,255,0.06)" strokeWidth="1"
        />
      })}
      {/* Data polygon */}
      <polygon
        points={points.map(p => `${p.x},${p.y}`).join(' ')}
        fill={`${color}18`}
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Dots */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill={color} />
      ))}
      {/* Labels */}
      {points.map((p, i) => (
        <text key={i}
          x={p.lx} y={p.ly}
          textAnchor="middle" dominantBaseline="central"
          fontSize="7.5" fill="rgba(255,255,255,0.45)"
          fontFamily="DM Mono, monospace"
        >{items[i].name.split(' ')[0]}</text>
      ))}
    </svg>
  )
}

export default function Skills() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const group = skills[active]

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.num}>01 /</span>
          <h2 className={styles.title}>Technical Arsenal</h2>
          <div className={styles.line} />
        </div>

        {/* Tab bar */}
        <div className={styles.tabs}>
          {skills.map((g, i) => (
            <button
              key={g.category}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              style={active === i ? { borderColor: g.color, color: g.color } : {}}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabIcon}>{g.icon}</span>
              {g.category}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className={styles.panel} key={active}>
          {/* Left — bars */}
          <div className={styles.barsCol}>
            <div className={styles.panelLabel} style={{ color: group.color }}>
              {group.icon} {group.category}
            </div>
            <div className={styles.bars}>
              {group.items.map((item, i) => (
                <SkillBar
                  key={item.name}
                  name={item.name}
                  level={item.level}
                  color={group.color}
                  inView={inView}
                  delay={i * 80}
                />
              ))}
            </div>
          </div>

          {/* Right — radar + top skill callout */}
          <div className={styles.rightCol}>
            <div className={styles.radarWrap}>
              <RadarChart items={group.items} color={group.color} />
              <div className={styles.radarLabel}>Skill Radar</div>
            </div>

            {/* Top skill highlight */}
            <div className={styles.highlight} style={{ borderColor: `${group.color}33` }}>
              <div className={styles.highlightLabel}>Top Skill</div>
              <div className={styles.highlightName} style={{ color: group.color }}>
                {[...group.items].sort((a, b) => b.level - a.level)[0].name}
              </div>
              <div className={styles.highlightPct}>
                {[...group.items].sort((a, b) => b.level - a.level)[0].level}% proficiency
              </div>
              <div className={styles.highlightBar}>
                <div
                  className={styles.highlightFill}
                  style={{
                    width: inView ? `${[...group.items].sort((a, b) => b.level - a.level)[0].level}%` : '0%',
                    background: group.color,
                    transition: 'width 1.4s cubic-bezier(0.22,1,0.36,1) 200ms',
                  }}
                />
              </div>
            </div>

            {/* Stat grid */}
            <div className={styles.statGrid}>
              <div className={styles.statBox}>
                <div className={styles.statVal} style={{ color: group.color }}>{group.items.length}</div>
                <div className={styles.statKey}>Skills</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statVal} style={{ color: group.color }}>
                  {Math.round(group.items.reduce((a, b) => a + b.level, 0) / group.items.length)}%
                </div>
                <div className={styles.statKey}>Avg. Level</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statVal} style={{ color: group.color }}>
                  {group.items.filter(i => i.level >= 80).length}
                </div>
                <div className={styles.statKey}>Expert (80%+)</div>
              </div>
            </div>
          </div>
        </div>

        {/* All-skills quick reference */}
        <div className={styles.allSkills}>
          <div className={styles.allSkillsLabel}>// All Technologies</div>
          <div className={styles.chips}>
            {skills.flatMap(g => g.items.map(item => ({ ...item, color: g.color }))).map(item => (
              <span
                key={item.name}
                className={styles.chip}
                style={{ '--chip-color': item.color }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
