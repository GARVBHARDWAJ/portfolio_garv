import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mx = useRef(0), my = useRef(0)
  const rx = useRef(0), ry = useRef(0)

  useEffect(() => {
    const move = e => { mx.current = e.clientX; my.current = e.clientY }
    window.addEventListener('mousemove', move)

    let raf
    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mx.current + 'px'
        dotRef.current.style.top = my.current + 'px'
      }
      rx.current += (mx.current - rx.current) * 0.1
      ry.current += (my.current - ry.current) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + 'px'
        ringRef.current.style.top = ry.current + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    // Grow on interactive elements
    const grow = () => {
      dotRef.current && (dotRef.current.style.transform = 'translate(-50%,-50%) scale(3)')
      dotRef.current && (dotRef.current.style.background = 'var(--accent2)')
      ringRef.current && (ringRef.current.style.opacity = '0.15')
    }
    const shrink = () => {
      dotRef.current && (dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)')
      dotRef.current && (dotRef.current.style.background = 'var(--accent)')
      ringRef.current && (ringRef.current.style.opacity = '0.45')
    }
    const els = document.querySelectorAll('a,button,[data-hover]')
    els.forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position:'fixed', width:10, height:10, borderRadius:'50%',
        background:'var(--accent)', pointerEvents:'none', zIndex:9999,
        transform:'translate(-50%,-50%)', transition:'transform 0.15s, background 0.3s',
        mixBlendMode:'screen',
      }} />
      <div ref={ringRef} style={{
        position:'fixed', width:34, height:34, borderRadius:'50%',
        border:'1.5px solid var(--accent)', pointerEvents:'none', zIndex:9998,
        transform:'translate(-50%,-50%)', opacity:0.45,
        transition:'opacity 0.3s',
      }} />
    </>
  )
}
