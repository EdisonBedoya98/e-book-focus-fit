import { Lock, Zap, FileText, Brain, PenLine, Dumbbell } from 'lucide-react'
import CtaButton from './ui/CtaButton'
import BookCover from './ui/BookCover'
import { site } from '../config/site'

const BADGES = [
  { icon: Brain, label: 'Psicología aplicada\nal Fitness' },
  { icon: PenLine, label: 'Ejercicios prácticos\ny reflexiones' },
  { icon: Dumbbell, label: 'Herramientas para\ntu día a día' },
]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_75%_10%,rgba(225,29,40,0.28)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_10%_90%,rgba(225,29,40,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#08080a_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(70% 60% at 50% 30%, #000 0%, transparent 100%)',
          }}
        />
      </div>

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* columna de texto */}
        <div className="max-w-2xl">
          <p className="eyebrow mb-6 inline-flex items-center gap-3 border border-red/40 bg-red/10 px-4 py-2 text-red-bright">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-red-bright" />
            E-book · {site.tagline}
          </p>

          <h1 className="display text-[2.75rem] leading-[0.9] text-white sm:text-6xl lg:text-[4.75rem]">
            No es falta
            <br />
            de disciplina.
            <br />
            <span className="text-red">Es falta de</span>
            <br />
            <span className="text-red">comprensión.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Una guía de <strong className="font-semibold text-white">psicología aplicada al Fitness</strong> para
            entender tu mente, fortalecer tu motivación y construir hábitos que puedas sostener
            más allá de un momento de entusiasmo.
          </p>

          {/* micro-beneficios */}
          <ul className="mt-10 grid grid-cols-3 gap-4 border-y border-white/10 py-6 sm:gap-6">
            {BADGES.map(({ icon: I, label }) => (
              <li key={label} className="flex flex-col items-start gap-3">
                <I size={26} strokeWidth={1.5} className="text-red" />
                <span className="whitespace-pre-line text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-white/65 sm:text-[11px]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-start gap-5">
            <CtaButton location="hero" size="lg" className="w-full sm:w-auto" />

            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="display text-3xl leading-none text-white md:text-4xl">
                {site.price.display}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-red-bright">
                {site.price.currencyLabel}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
                · pago único · garantía de {site.guaranteeDays} días
              </span>
            </p>

            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
              <li className="flex items-center gap-2"><Lock size={13} className="text-red-bright" /> Compra segura</li>
              <li className="flex items-center gap-2"><Zap size={13} className="text-red-bright" /> Acceso inmediato</li>
              <li className="flex items-center gap-2"><FileText size={13} className="text-red-bright" /> Formato digital (PDF)</li>
            </ul>
          </div>
        </div>

        {/* portada */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-none">
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-red/20 blur-[90px]" />
          <BookCover />
          <div className="mt-10 flex justify-center">
            <p className="border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 backdrop-blur">
              220 páginas · 7 ejercicios prácticos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
