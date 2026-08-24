import { Check, X } from 'lucide-react'
import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import { forYou, notForYou } from '../data/content'

export default function ForYou() {
  return (
    <Section className="bg-ink">
      <SectionTitle
        eyebrow="Antes de comprar"
        title={
          <>
            Este e-book
            <br />
            <span className="text-red">es para ti si…</span>
          </>
        }
        subtitle="Prefiero decirte con claridad para quién funciona este material y para quién no."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
        <Reveal className="border border-red/30 bg-gradient-to-b from-red/8 to-transparent p-8 md:p-10">
          <h3 className="display mb-8 text-2xl text-white md:text-3xl">
            Focus &amp; Fit es <span className="text-red">para ti</span> si…
          </h3>
          <ul className="space-y-4">
            {forYou.map((t) => (
              <li key={t} className="flex gap-4 text-sm leading-relaxed text-white/85 md:text-[15px]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red">
                  <Check size={12} strokeWidth={3.5} className="text-white" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="border border-white/10 bg-ink-2 p-8 md:p-10">
          <h3 className="display mb-8 text-2xl text-white/55 md:text-3xl">
            Probablemente <span className="text-white/80">no es para ti</span> si…
          </h3>
          <ul className="space-y-4">
            {notForYou.map((t) => (
              <li key={t} className="flex gap-4 text-sm leading-relaxed text-white/45 md:text-[15px]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20">
                  <X size={11} strokeWidth={3} className="text-white/50" />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <p className="mt-9 border-t border-white/10 pt-7 text-[13px] leading-relaxed text-mute">
            Focus &amp; Fit parte de una idea diferente:{' '}
            <strong className="font-semibold text-white/85">
              no puedes eliminar por completo la dificultad, pero sí aprender a comprenderla
            </strong>{' '}
            y desarrollar mejores recursos para atravesarla.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
