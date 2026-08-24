import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import { chapters } from '../data/content'

export default function Chapters() {
  return (
    <Section className="bg-ink-2">
      <SectionTitle
        eyebrow="El recorrido"
        title={
          <>
            Qué encontrarás
            <br />
            <span className="text-red">dentro del e-book</span>
          </>
        }
        subtitle="Ocho capítulos que se construyen uno sobre otro: de comprender por qué actúas a sostener lo que empiezas."
      />

      <ol className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
        {chapters.map((c, i) => (
          <Reveal
            as="li"
            key={c.number}
            delay={(i % 2) * 80}
            className="group relative flex gap-6 bg-ink-2 p-8 hover:bg-ink-3 md:p-9"
          >
            <span className="display shrink-0 text-4xl leading-none text-white/35 transition-colors duration-300 group-hover:text-red md:text-5xl">
              {c.number}
            </span>
            <div>
              <h3 className="display text-xl leading-tight text-white md:text-2xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-10 border border-red/25 bg-red/5 p-7 text-center md:p-8">
        <p className="text-sm leading-relaxed text-white/80 md:text-base">
          El contenido se apoya, entre otras fuentes, en investigación de psicología del deporte,
          cambio de comportamiento y neurociencia
          <span className="text-mute"> — Weinberg &amp; Gould, Deci &amp; Ryan, Chóliz, McEwen, entre otros.</span>
        </p>
      </Reveal>
    </Section>
  )
}
