import { Quote } from 'lucide-react'
import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import { testimonials } from '../data/content'

/** Solo aparece cuando agregas testimonios reales en src/data/content.js */
export default function Testimonials() {
  if (!testimonials.length) return null

  return (
    <Section className="bg-ink">
      <SectionTitle eyebrow="Quienes ya lo leyeron" title="Lo que dicen del e-book" />

      <ul className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 80} className="bg-ink p-8">
            <Quote size={24} className="mb-5 text-red/70" />
            <p className="text-sm leading-relaxed text-white/85">“{t.text}”</p>
            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-white">{t.name}</p>
            {t.role && <p className="mt-1 text-[11px] text-mute-2">{t.role}</p>}
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
