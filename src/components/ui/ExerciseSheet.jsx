/**
 * Muestra cómo se ve una de las tablas de trabajo del e-book.
 * Está dibujada en HTML (no es una imagen) para que se vea nítida en
 * cualquier pantalla. Si tienes una captura real de una página del e-book,
 * puedes reemplazar este componente por un <img>.
 */
export default function ExerciseSheet({ className = '' }) {
  const rows = [
    ['Martes, 7 p.m.', 'Saltarme el entrenamiento', 'Ir 20 minutos', 'Fui'],
    ['Domingo por la noche', 'Dejarlo para el lunes', 'Preparar la ropa', 'Lo preparé'],
    ['Día de mucho estrés', 'Comer sin hambre', 'Salir a caminar', '—'],
  ]

  return (
    <div className={`relative ${className}`}>
      <div className="rotate-[-1.2deg] bg-bone p-6 text-ink shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)] sm:p-8">
        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-red-deep">Ejercicio 06 · Ejemplo</p>
        <h3 className="mt-2 text-lg font-bold leading-tight text-ink sm:text-xl">
          Gratificación instantánea vs. diferida
        </h3>
        <p className="mt-2 text-[11px] leading-relaxed text-ink/70">
          Registra durante la semana al menos 5 situaciones reales de conflicto.
        </p>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-ink/70">
                {['Situación', 'Impulso inmediato', 'Acción alineada', 'Decisión'].map((h) => (
                  <th key={h} className="pb-2 pr-3 text-[9px] font-bold uppercase tracking-[0.1em] text-ink/70">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-b border-ink/15">
                  {r.map((cell, i) => (
                    <td key={i} className="py-3 pr-3 text-[11px] leading-snug text-ink/80">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-b border-ink/15">
                {[0, 1, 2, 3].map((i) => (
                  <td key={i} className="py-3 pr-3 text-[11px] text-ink/25">
                    ·
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-5 border-t border-ink/15 pt-4 text-[10px] leading-relaxed text-ink/70">
          <strong className="font-bold text-ink/75">Seguimiento semanal:</strong> 0–2 decisiones
          alineadas (nivel bajo) · 3–4 (proceso en construcción) · 5 o más (alta consistencia).
        </p>
      </div>
    </div>
  )
}
