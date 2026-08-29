import { X, Check } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import BookCover from './ui/BookCover'

const NO = [
  'Un método mágico',
  'Promesas de transformación en 21 días',
  'Un manual motivacional',
  'Una rutina de entrenamiento o una dieta',
]

const SI = [
  'Fundamentos reales de psicología del comportamiento',
  'Un espacio para comprender cómo funcionas',
  'Herramientas para identificar qué te está frenando',
  'Estrategias coherentes contigo y con tu vida real',
]

export default function WhatIsIt() {
  return (
    <Section id="el-ebook" className="bg-ink-2">
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="relative order-2 mx-auto w-full max-w-[280px] lg:order-1 lg:max-w-none">
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-red/15 blur-[80px] sm:-inset-8" />
          <BookCover floating={false} />
        </Reveal>

        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-4 text-red-bright">
            <span className="mr-3 inline-block h-px w-8 translate-y-[-4px] bg-red align-middle" />
            Qué es exactamente
          </p>
          <h2 className="display text-4xl text-white sm:text-5xl md:text-6xl">
            Esto es <span className="text-red">Focus &amp; Fit</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
            Una guía para comprender la mente detrás de tus hábitos. Reúne herramientas de
            psicología, cambio de comportamiento y reflexión aplicada al contexto del Fitness,
            con respaldo en investigación de psicología del deporte y neurociencia.
          </p>

          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-ink-3 p-7">
              <h3 className="eyebrow mb-5 flex items-center gap-2 text-white/55">
                <X size={16} strokeWidth={3} /> Aquí no vas a encontrar
              </h3>
              <ul className="space-y-3.5">
                {NO.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-snug text-white/55">
                    <X size={16} strokeWidth={2.5} className="mt-0.5 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-ink-3 p-7 ring-1 ring-red/40">
              <h3 className="eyebrow mb-5 flex items-center gap-2 text-red-bright">
                <Check size={16} strokeWidth={3} /> Sí vas a encontrar
              </h3>
              <ul className="space-y-3.5">
                {SI.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-snug text-white/85">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-red" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
