import { MessageCircle, Mail } from 'lucide-react'
import Reveal from './ui/Reveal'
import { WHATSAPP, site } from '../config/site'

/**
 * Bloque de dudas previas a la compra.
 * Si configuras WHATSAPP se muestra ese botón; si no, el contacto por correo.
 */
export default function Support() {
  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    'Hola Cata, tengo una duda sobre el e-book Focus & Fit',
  )}`

  return (
    <div className="shell pb-4">
      <Reveal className="flex flex-col items-center justify-between gap-6 border border-white/10 bg-ink-3 p-8 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="display text-2xl text-white md:text-3xl">¿Te quedó alguna duda?</h2>
          <p className="mt-2 text-sm text-mute">
            Escríbeme antes de comprar y hablamos. Prefiero que tomes la decisión con toda la
            información.
          </p>
        </div>

        {WHATSAPP ? (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-3 border-2 border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:border-red hover:bg-red"
          >
            <MessageCircle size={18} />
            Escríbeme por WhatsApp
          </a>
        ) : (
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent('Duda sobre Focus & Fit')}`}
            className="inline-flex shrink-0 items-center gap-3 border-2 border-white/20 px-7 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:-translate-y-0.5 hover:border-red hover:bg-red"
          >
            <Mail size={18} />
            Escríbeme por correo
          </a>
        )}
      </Reveal>
    </div>
  )
}
