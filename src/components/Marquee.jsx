const WORDS = [
  'Motivación',
  'Disciplina',
  'Constancia',
  'Autodominio',
  'Identidad',
  'Hábitos',
  'Autoobservación',
  'Regulación emocional',
]

export default function Marquee() {
  const row = [...WORDS, ...WORDS]

  return (
    <div
      aria-hidden="true"
      className="group relative overflow-hidden border-y border-white/10 bg-red py-4"
    >
      <div className="flex w-max animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {row.map((w, i) => (
          <span key={`${w}-${i}`} className="flex items-center gap-10">
            <span className="display whitespace-nowrap text-xl text-white/95 md:text-2xl">{w}</span>
            <span className="h-2 w-2 rotate-45 bg-black/40" />
          </span>
        ))}
      </div>
    </div>
  )
}
