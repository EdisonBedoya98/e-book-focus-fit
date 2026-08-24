import { Clock, Lock, FileText, Monitor, ShieldCheck } from 'lucide-react'
import Section from './ui/Section'
import Reveal from './ui/Reveal'
import Icon from './ui/Icon'
import CtaButton from './ui/CtaButton'
import BookCover from './ui/BookCover'
import { includes } from '../data/content'
import { site } from '../config/site'

const PERKS = [
  { icon: Clock, label: 'Acceso inmediato' },
  { icon: Lock, label: 'Pago seguro' },
  { icon: FileText, label: 'Formato digital (PDF)' },
  { icon: Monitor, label: 'Lee en cualquier dispositivo' },
]

export default function Pricing() {
  return (
    <Section id="precio" className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(225,29,40,0.20)_0%,transparent_65%)]" />

      <div className="mx-auto mb-14 max-w-3xl text-center">
        <p className="eyebrow mb-4 text-red-bright">La inversión</p>
        <h2 className="display text-4xl text-white sm:text-5xl md:text-6xl">
          No estás comprando una frase
          <br />
          <span className="text-red">que te motive cinco minutos.</span>
        </h2>
        <p className="mt-6 text-base leading-relaxed text-mute md:text-lg">
          Estás invirtiendo en herramientas que podrás volver a usar cuando tu motivación fluctúe,
          cuando aparezcan las dudas o cuando sientas que estás perdiendo el rumbo.
        </p>
      </div>

      <Reveal className="grid overflow-hidden border border-white/12 bg-ink-2 lg:grid-cols-[1.05fr_0.75fr_1fr]">
        {/* qué incluye */}
        <div className="border-b border-white/10 p-8 md:p-10 lg:border-b-0 lg:border-r">
          <h3 className="display text-3xl text-white">
            Focus <span className="text-red">&amp;</span> Fit
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">
            Psicología aplicada al Fitness para fortalecer tu motivación, disciplina y constancia.
          </p>

          <ul className="mt-8 space-y-5">
            {includes.map((it) => (
              <li key={it.title} className="flex gap-4">
                <Icon name={it.icon} size={20} strokeWidth={1.6} className="mt-0.5 shrink-0 text-red" />
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-wide text-white">{it.title}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-mute">{it.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* portada */}
        <div className="relative hidden items-center justify-center bg-[linear-gradient(180deg,#0e0e11_0%,#000_100%)] p-10 lg:flex">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_50%,rgba(225,29,40,0.25)_0%,transparent_70%)]" />
          <BookCover floating={false} className="w-full max-w-[190px]" />
        </div>

        {/* precio */}
        <div className="flex flex-col justify-center bg-ink-3 p-8 md:p-10">
          <p className="eyebrow text-center text-mute">Inversión</p>

          <div className="mt-4 text-center">
            {site.price.compareAt && (
              <p className="text-lg text-white/35 line-through">{site.price.compareAt}</p>
            )}
            <p className="display text-6xl leading-none text-white md:text-7xl">
              {site.price.display}
              <span className="ml-2 align-super text-xl text-red md:text-2xl">
                {site.price.currencyLabel}
              </span>
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
              Pago único · sin suscripciones
            </p>
          </div>

          <ul className="mx-auto mt-8 space-y-3">
            {PERKS.map(({ icon: I, label }) => (
              <li key={label} className="flex items-center gap-3 text-[13px] font-medium text-white/80">
                <I size={16} className="shrink-0 text-red" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <CtaButton location="precio" size="md" label={site.ctaShort} full />
            <p className="mt-4 text-center text-[11px] leading-relaxed text-mute-2">
              Te llevamos al checkout seguro de Hotmart. Al terminar el pago recibes el e-book
              en tu correo, al instante.
            </p>
          </div>

          <div className="mt-7 flex gap-3 border-t border-white/10 pt-6">
            <ShieldCheck size={26} strokeWidth={1.5} className="shrink-0 text-red" />
            <p className="text-[12px] leading-relaxed text-mute">
              <strong className="font-bold uppercase tracking-wide text-white">
                Garantía de {site.guaranteeDays} días.
              </strong>{' '}
              Si el contenido no es lo que esperabas, puedes solicitar tu reembolso dentro de los
              primeros {site.guaranteeDays} días.
            </p>
          </div>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-[12px] text-mute-2">
        Pago procesado de forma segura por Hotmart · Tarjeta, PSE y otros medios disponibles
      </p>
    </Section>
  )
}
