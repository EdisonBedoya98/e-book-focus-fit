import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import { painPoints } from '../data/content'

export default function Identification() {
  return (
    <Section id="el-problema" className="bg-ink-2">
      <SectionTitle
        eyebrow="Puede que te suene"
        title="¿Te identificas?"
        subtitle="Antes de hablarte del e-book, quiero hablarte de algo que probablemente ya conoces demasiado bien."
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <ul className="grid gap-px bg-white/10 sm:grid-cols-2">
          {painPoints.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 70}
              className={`group relative bg-ink-2 p-7 transition-colors hover:bg-ink-3 ${
                i === painPoints.length - 1 ? 'sm:col-span-2' : ''
              }`}
            >
              <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-red transition-all duration-300 group-hover:w-full" />
              <Icon name={p.icon} size={30} strokeWidth={1.4} className="text-red" />
              <h3 className="mt-5 text-base font-bold leading-snug text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{p.text}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="flex flex-col justify-center border-l-2 border-red pl-8 lg:pl-10">
          <p className="display text-3xl leading-[1.05] text-white md:text-4xl">
            ¿Y si el problema no fuera
            <span className="text-red"> quién eres</span>, sino la forma en que has intentado cambiar?
          </p>
          <p className="mt-7 text-base leading-relaxed text-mute">
            Es probable que hayas respondido esa pregunta diciéndote que eres perezoso/a, poco
            disciplinado/a o que te falta fuerza de voluntad.
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/85">
            Pero el comportamiento humano es bastante más complejo que eso.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
