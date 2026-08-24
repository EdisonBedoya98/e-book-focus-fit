import { site } from '../config/site'

export default function Footer() {
  const year = new Date().getFullYear()
  // El @usuario se deriva del link para que nunca queden desincronizados.
  const handle = `@${site.author.instagram.replace(/\/+$/, '').split('/').pop()}`

  return (
    <footer className="border-t border-white/10 bg-ink-2 pt-12 pb-24 md:pb-12">
      <div className="shell grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <p className="display text-2xl text-white">
            Focus <span className="text-red">&amp;</span> Fit
          </p>
          <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-mute-2">
            {site.tagline}
          </p>
          <p className="mt-6 max-w-lg text-[12px] leading-relaxed text-mute-2">
            Focus &amp; Fit es un material psicoeducativo y de reflexión. No reemplaza la evaluación,
            el diagnóstico ni la intervención individual realizada por un profesional de la salud
            mental, ni constituye una prescripción de entrenamiento o nutrición.
          </p>
        </div>

        <div className="text-[12px] text-mute-2">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Contacto</p>
          <a href={`mailto:${site.email}`} className="block text-white/80 transition-colors hover:text-red-bright">
            {site.email}
          </a>
          <a
            href={site.author.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-white/80 transition-colors hover:text-red-bright"
          >
            {handle}
          </a>
        </div>
      </div>

      <div className="shell mt-10 flex flex-col gap-2 border-t border-white/10 pt-7 text-[11px] text-mute-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {site.author.handle}. Todos los derechos reservados.</p>
        <p>Pagos procesados por Hotmart.</p>
      </div>
    </footer>
  )
}
