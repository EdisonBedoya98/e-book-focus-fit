import { ArrowRight } from 'lucide-react'
import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import { shifts } from '../data/content'

export default function Transformation() {
  return (
    <Section className="bg-ink-2">
      <SectionTitle
        eyebrow="La transformación"
        title={
          <>
            No vas a terminar el libro
            <br />
            convertido/a en otra persona.
            <br />
            <span className="text-red">Pero sí con otras preguntas.</span>
          </>
        }
        subtitle="No hay promesas irreales aquí. Seguirán existiendo días difíciles. La diferencia es que podrás observarlos con más precisión."
      />

      <ul className="mx-auto mt-16 max-w-4xl space-y-px bg-white/10">
        {shifts.map((s, i) => (
          <Reveal
            as="li"
            key={s.before}
            delay={i * 80}
            className="grid items-center gap-5 bg-ink-2 p-7 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:p-8"
          >
            <p className="text-sm italic leading-relaxed text-white/55 line-through decoration-red/50 decoration-1 md:text-base">
              {s.before}
            </p>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red md:mx-auto">
              <ArrowRight size={17} strokeWidth={2.5} className="text-white" />
            </span>
            <p className="text-sm font-semibold leading-relaxed text-white md:text-base">{s.after}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mx-auto mt-12 max-w-2xl text-center">
        <p className="text-base leading-relaxed text-mute md:text-lg">
          Porque cambiar no consiste en no volver a fallar. Consiste en{' '}
          <strong className="font-semibold text-white">
            desarrollar recursos para responder de otra manera
          </strong>{' '}
          cuando, inevitablemente, aparecen las dificultades.
        </p>
      </Reveal>
    </Section>
  )
}
