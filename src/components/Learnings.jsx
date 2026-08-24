import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import CtaButton from './ui/CtaButton'
import { learnings } from '../data/content'

export default function Learnings() {
  return (
    <Section id="contenido" className="bg-ink">
      <SectionTitle
        eyebrow="Lo que te llevas"
        title={
          <>
            Dentro de Focus &amp; Fit
            <br />
            <span className="text-red">aprenderás a:</span>
          </>
        }
      />

      <ul className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {learnings.map((l, i) => (
          <Reveal
            as="li"
            key={l.title}
            delay={(i % 3) * 90}
            className="group relative bg-ink p-8 hover:bg-ink-2"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-red/30 bg-red/10 transition-all duration-300 group-hover:bg-red">
              <Icon name={l.icon} size={26} strokeWidth={1.5} className="text-red transition-colors group-hover:text-white" />
            </div>
            <h3 className="display mt-6 text-xl leading-tight text-white">{l.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute">{l.text}</p>
          </Reveal>
        ))}
      </ul>

      <div className="mt-14 flex justify-center">
        <CtaButton location="aprenderas" size="md" />
      </div>
    </Section>
  )
}
