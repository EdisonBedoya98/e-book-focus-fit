import { CheckCircle2 } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import CtaButton from './ui/CtaButton'
import ExerciseSheet from './ui/ExerciseSheet'
import { exercises, tools } from '../data/content'

export default function Exercises() {
  return (
    <Section className="relative bg-ink">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4 text-red-bright">
            <span className="mr-3 inline-block h-px w-8 translate-y-[-4px] bg-red align-middle" />
            Ejercicios prácticos
          </p>
          <h2 className="display text-4xl leading-[0.95] text-white sm:text-5xl md:text-6xl">
            No es solo lectura.
            <br />
            <span className="text-red">Es transformación.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-mute md:text-lg">
            No quiero que solo leas este e-book. Quiero que interactúes con él. Encontrarás
            7 ejercicios guiados diseñados para llevar cada idea a tu propia experiencia.
          </p>

          <Reveal className="mt-10">
            <ExerciseSheet />
          </Reveal>

          <div className="mt-10">
            <CtaButton location="ejercicios" size="md" />
          </div>
        </div>

        <div>
          <ol className="grid gap-px bg-white/10">
            {exercises.map((e, i) => (
              <Reveal
                as="li"
                key={e.n}
                delay={i * 60}
                className="group flex gap-5 bg-ink px-6 py-5 hover:bg-ink-2"
              >
                <span className="display shrink-0 pt-0.5 text-lg text-red-bright">{e.n}</span>
                <div>
                  <h3 className="text-sm font-bold leading-snug text-white md:text-[15px]">{e.title}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-mute">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal className="mt-8 border border-white/10 bg-ink-2 p-7">
            <h3 className="eyebrow mb-5 text-white/55">Además, herramientas y tablas</h3>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {tools.map((t) => (
                <li key={t} className="flex gap-2.5 text-[13px] leading-snug text-white/75">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-red" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
