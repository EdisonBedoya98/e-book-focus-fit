/**
 * Portada del e-book construida en CSS (sin imagen): se ve nítida en
 * cualquier pantalla y respeta la paleta negra + roja de la marca.
 */
export default function BookCover({ className = '', floating = true }) {
  return (
    <div aria-hidden="true" className={`relative ${className}`}>
      <div
        className={`relative aspect-[10/14] w-full [transform:perspective(1400px)_rotateY(-16deg)_rotateX(3deg)] ${
          floating ? 'animate-[float_6s_ease-in-out_infinite]' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* canto de páginas */}
        <div className="absolute inset-y-[1.5%] -right-[10px] w-[14px] rounded-r-[3px] bg-gradient-to-r from-[#2a2a2f] via-[#d9d5cc] to-[#8e8a82]" />

        {/* tapa */}
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[4px] rounded-l-[2px] bg-[linear-gradient(145deg,#1b1b20_0%,#0c0c0f_55%,#141418_100%)] p-[9%] shadow-[0_50px_90px_-30px_rgba(0,0,0,0.95)] ring-1 ring-white/10">
          {/* lomo */}
          <div className="absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          {/* brillo */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16)_0%,transparent_38%,transparent_62%,rgba(255,255,255,0.06)_100%)]" />
          {/* halo rojo */}
          <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[70%] w-[70%] rounded-full bg-red/25 blur-3xl" />

          <div className="relative">
            <div className="mb-[8%] h-[3px] w-[26%] bg-red" />
            <p className="display text-white leading-[0.86] [font-size:clamp(1.9rem,8vw,3.6rem)] sm:[font-size:clamp(2rem,4.2vw,3.6rem)]">
              Focus
              <br />
              <span className="text-red">&amp;</span> Fit
            </p>
            <p className="mt-[7%] text-[clamp(0.5rem,1.5vw,0.72rem)] font-semibold uppercase tracking-[0.28em] text-white/60">
              Psicología aplicada
              <br />
              al Fitness
            </p>
          </div>

          <div className="relative">
            <p className="mb-[9%] max-w-[92%] text-[clamp(0.5rem,1.4vw,0.7rem)] italic leading-relaxed text-white/60">
              Motivación, disciplina y constancia para transformar tu cuerpo y tu mente.
            </p>
            <div className="h-px w-full bg-white/15" />
            <p className="mt-[5%] text-[clamp(0.5rem,1.4vw,0.7rem)] font-bold uppercase tracking-[0.24em] text-white/75">
              Cata Psicofit
            </p>
          </div>
        </div>
      </div>

      {/* sombra en el suelo */}
      <div className="absolute -bottom-6 left-1/2 h-8 w-[78%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-2xl" />
    </div>
  )
}
