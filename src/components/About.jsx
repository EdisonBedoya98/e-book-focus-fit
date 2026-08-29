import { Quote } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import { handwrittenQuote } from '../data/content'
import { site } from '../config/site'
import cata from '../assets/cata.jpg'

export default function About() {
  return (
    <Section id="sobre-cata" className="bg-ink-2">
      <div className="grid gap-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-14">
        <Reveal className="relative mx-auto w-52 shrink-0 sm:w-64 lg:w-72">
          <div className="absolute -inset-3 -z-10 rounded-full bg-red/20 blur-2xl" />
          <img
            src={cata}
            alt="Cata, psicóloga y entrenadora, autora de Focus & Fit"
            width={700}
            height={700}
            className="aspect-square w-full rounded-full object-cover ring-2 ring-red/40"
            loading="lazy"
          />
        </Reveal>

        <div>
          <p className="eyebrow mb-4 text-red-bright">
            <span className="mr-3 inline-block h-px w-8 translate-y-[-4px] bg-red align-middle" />
            Quién está detrás
          </p>
          <h2 className="display text-4xl text-white sm:text-5xl">
            Hola, soy <span className="text-red">Cata</span>
          </h2>
          <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-mute-2">
            {site.author.role}
          </p>

          <div className="mt-7 space-y-4 text-sm leading-relaxed text-mute md:text-[15px]">
            <p>
              Dedico mi quehacer profesional a comprender la relación entre la mente, el
              comportamiento y el Fitness. Me encanta el gym, el mundo del bienestar y el
              crecimiento personal.
            </p>
            <p>
              Pero este proyecto no nació únicamente desde la teoría. Mi propia historia con el
              ejercicio y la alimentación estuvo marcada por los extremos, la exigencia y una
              relación difícil conmigo misma.
            </p>
            <p>
              Con el tiempo entendí que transformar un cuerpo sin analizar la relación que tenemos
              con nuestra mente puede convertirse en otra forma de conflicto.
            </p>
            <p className="text-white/85">
              <strong className="font-semibold text-white">Focus &amp; Fit</strong> nace del encuentro
              entre la psicología y el Fitness, con un propósito: ayudarte a comprenderte mejor para
              que construyas una relación más sana, consciente y sostenible contigo mismo/a, con el
              ejercicio y la alimentación.
            </p>
          </div>
        </div>

        <Reveal delay={140} className="relative max-w-xs border-l-2 border-red/40 pl-7 lg:mx-auto">
          <Quote size={28} className="mb-4 text-red/60" />
          <p className="font-hand text-2xl leading-snug text-white/90 md:text-3xl">
            “{handwrittenQuote}”
          </p>
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-mute-2">
            — {site.author.handle}
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
