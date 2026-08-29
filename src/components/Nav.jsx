import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import CtaButton from './ui/CtaButton'
import { site } from '../config/site'

const LINKS = [
  { href: '#el-problema', label: 'El problema' },
  { href: '#el-ebook', label: 'El e-book' },
  { href: '#contenido', label: 'Contenido' },
  { href: '#sobre-cata', label: 'Sobre Cata' },
  { href: '#precio', label: 'Precio' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Si el usuario gira el dispositivo y pasa a escritorio, el panel móvil
  // desaparece por CSS: hay que cerrarlo para no dejar el scroll bloqueado.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = (e) => { if (e.matches) setOpen(false) }
    onChange(mq)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Cerrar el menú móvil con la tecla Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav className="shell flex h-18 items-center justify-between py-4" aria-label="Principal">
        <a href="#inicio" className="group flex min-h-11 flex-col justify-center leading-none">
          <span className="display text-xl tracking-wide text-white md:text-2xl">
            Focus <span className="text-red">&amp;</span> Fit
          </span>
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-mute-2 sm:tracking-[0.3em]">
            {site.tagline}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] font-medium text-white/70 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-red after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <CtaButton location="nav" size="sm" label={site.ctaShort} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-white/10 bg-ink/98 backdrop-blur-xl lg:hidden">
          <ul className="shell flex flex-col py-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-white/5 py-4 text-sm font-semibold uppercase tracking-wider text-white/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <CtaButton location="nav-movil" size="sm" full />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
