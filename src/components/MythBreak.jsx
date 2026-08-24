import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import { myths } from '../data/content'

const FACTORS = [
  'Tu motivación', 'Tu disciplina', 'Tu constancia', 'Tu identidad',
  'Tu regulación emocional', 'Tus creencias', 'Tu contexto', 'Tu respuesta ante la dificultad',
]

export default function MythBreak() {
  return (
    <Section className="overflow-hidden bg-ink">
      <SectionTitle
        eyebrow="Cambio de perspectiva"
        title={
          <>
            No, no todo se resuelve
            <br />
            <span className="text-red">con “más disciplina”.</span>
          </>
        }
        subtitle="Probablemente has visto frases como estas. Suenan convincentes, pero reducir un proceso de cambio a una sola variable hace que ignores muchas de las razones por las que tus hábitos se interrumpen."
      />

      <ul className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
        {myths.map((m, i) => (
          <Reveal
            as="li"
            key={m.myth}
            delay={i * 90}
            className="relative border border-white/10 bg-ink-2 p-7 text-center"
          >
            <span className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -rotate-6 bg-red/70" />
            <p className="text-sm italic leading-relaxed text-white/55 md:text-base">{m.myth}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mx-auto mt-14 max-w-3xl text-center">
        <p className="text-lg font-semibold text-white md:text-xl">
          Tus decisiones están influidas por muchas más cosas de las que crees:
        </p>
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
          {FACTORS.map((f) => (
            <li
              key={f}
              className="border border-red/30 bg-red/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/80"
            >
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-base leading-relaxed text-mute md:text-lg">
          <strong className="font-semibold text-white">Focus &amp; Fit</strong> no busca darte una frase
          para repetirte frente al espejo. Busca ayudarte a comprender qué condiciones hacen que una
          intención se convierta —o no— en comportamiento.
        </p>
      </Reveal>
    </Section>
  )
}
