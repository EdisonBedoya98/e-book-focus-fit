import { useEffect, useState } from 'react'
import CtaButton from './ui/CtaButton'
import { site } from '../config/site'

/** Barra fija de compra: aparece al pasar el hero y se oculta al llegar al bloque de precio. */
export default function StickyBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    /** ¿Hay un bloque de compra grande visible en pantalla ahora mismo? */
    const isOnScreen = (id) => {
      const el = document.getElementById(id)
      if (!el) return false
      const r = el.getBoundingClientRect()
      return r.top < window.innerHeight && r.bottom > 0
    }

    let ticking = false
    const update = () => {
      ticking = false
      const pastHero = window.scrollY > window.innerHeight * 0.9
      // No duplicamos el CTA cuando ya hay uno grande a la vista.
      setShow(pastHero && !isOnScreen('precio') && !isOnScreen('cierre'))
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden={!show}
      inert={!show ? true : undefined}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur-xl transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
    >
      <div className="shell flex items-center justify-between gap-4 py-3.5">
        <div className="hidden sm:block">
          <p className="text-[13px] font-bold uppercase tracking-wide text-white">
            Focus <span className="text-red">&amp;</span> Fit
          </p>
          <p className="text-[11px] text-mute">Acceso inmediato · PDF</p>
        </div>
        <p className="display text-2xl text-white sm:text-2xl">
          {site.price.display}
          <span className="ml-1.5 text-xs text-red-bright">{site.price.currencyLabel}</span>
        </p>
        <CtaButton location="barra-fija" size="sm" label={site.ctaShort} className="flex-1 sm:flex-none" />
      </div>
    </div>
  )
}
