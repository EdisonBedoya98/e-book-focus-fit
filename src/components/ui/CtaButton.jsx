import { ArrowRight } from 'lucide-react'
import { goToCheckout } from '../../lib/checkout'
import { site } from '../../config/site'

const SIZES = {
  sm: 'min-h-11 px-5 py-3 text-[11px] tracking-[0.16em]',
  md: 'px-7 py-4 text-xs tracking-[0.18em] md:text-[13px]',
  lg: 'px-8 py-5 text-sm tracking-[0.18em] md:px-10 md:text-base',
}

/**
 * Botón principal de compra. Todos los CTA de la página pasan por aquí,
 * así que el link de Hotmart se configura una sola vez en src/config/site.js
 */
export default function CtaButton({
  location,
  size = 'md',
  variant = 'solid',
  full = false,
  label = site.cta,
  className = '',
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-3 font-bold uppercase transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-bright'

  const variants = {
    solid:
      'bg-red text-white shadow-[0_10px_40px_-12px_rgba(225,29,40,0.85)] hover:bg-red-bright hover:shadow-[0_16px_50px_-10px_rgba(255,47,58,0.9)] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'border-2 border-white/25 text-white hover:border-red hover:bg-red hover:-translate-y-0.5',
    light:
      'bg-white text-ink hover:bg-red hover:text-white hover:-translate-y-0.5',
  }

  return (
    <button
      type="button"
      onClick={() => goToCheckout(location)}
      className={`${base} ${variants[variant]} ${SIZES[size]} ${full ? 'w-full' : ''} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight
        size={18}
        strokeWidth={2.5}
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1.5"
      />
    </button>
  )
}
