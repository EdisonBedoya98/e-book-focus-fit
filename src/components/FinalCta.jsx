import Section from './ui/Section'
import Reveal from './ui/Reveal'
import CtaButton from './ui/CtaButton'
import { trustPoints } from '../config/site'

const STEPS = ['Aplica', 'Observa', 'Ajusta', 'Continúa']

export default function FinalCta() {
  return (
    <Section id="cierre" className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(225,29,40,0.25)_0%,transparent_65%)]" />

      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-6 text-red-bright">El cierre</p>

        <h2 className="display text-4xl leading-[0.95] text-white sm:text-5xl md:text-6xl">
          Tu siguiente paso
          <br />
          no tiene que ser perfecto.
          <br />
          <span className="text-red">Solo tiene que ser consciente.</span>
        </h2>

        <div className="mx-auto mt-9 max-w-2xl space-y-4 text-base leading-relaxed text-mute md:text-lg">
          <p>
            Tal vez no necesitas convertirte en otra persona. Tal vez necesitas dejar de abandonarte
            cada vez que el camino se vuelve incómodo.
          </p>
          <p className="text-white/85">
            Focus &amp; Fit no es una promesa de que nunca volverás a perder la motivación. Es una
            invitación a desarrollar herramientas para no depender únicamente de ella.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-lg grid-cols-4 gap-px bg-white/10">
          {STEPS.map((s, i) => (
            <li key={s} className="bg-ink px-2 py-5">
              <span className="display block text-lg text-red">{`0${i + 1}`}</span>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">
                {s}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center gap-6">
          <CtaButton location="cierre" size="lg" className="w-full sm:w-auto" />
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            {trustPoints.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <p className="font-hand mt-12 text-2xl text-white/70 md:text-3xl">
          Este e-book es el mapa. Ahora te toca caminar. Nos vemos dentro ♡
        </p>
      </Reveal>
    </Section>
  )
}
