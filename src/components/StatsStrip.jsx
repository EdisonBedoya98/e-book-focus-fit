import { BookOpen, Brain, PenLine, Smartphone } from 'lucide-react'
import Reveal from './ui/Reveal'

const STATS = [
  { icon: BookOpen, value: '220', label: 'Páginas de contenido' },
  { icon: Brain, value: '8', label: 'Capítulos de trabajo psicológico' },
  { icon: PenLine, value: '7', label: 'Ejercicios prácticos guiados' },
  { icon: Smartphone, value: '100%', label: 'Digital · lee donde quieras' },
]

export default function StatsStrip() {
  return (
    <div className="shell -mt-4 md:-mt-8">
      <Reveal className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
        {STATS.map(({ icon: I, value, label }) => (
          <div key={label} className="flex items-center gap-4 bg-ink-2 px-5 py-7 md:px-7">
            <I size={30} strokeWidth={1.4} className="shrink-0 text-red" />
            <div>
              <p className="display text-2xl text-white md:text-3xl">{value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-mute">
                {label}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  )
}
