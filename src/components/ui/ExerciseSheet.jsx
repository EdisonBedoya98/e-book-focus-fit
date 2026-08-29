/**
 * Muestra cómo se ve una de las tablas de trabajo del e-book.
 * Está dibujada en HTML (no es una imagen) para que se vea nítida en
 * cualquier pantalla.
 *
 * En móvil una tabla de 7 columnas es ilegible, así que ahí el ejemplo se
 * muestra apilado (etiqueta + valor) y la tabla completa aparece desde `sm`.
 */
const COLUMNS = [
  { head: 'Situación' },
  { head: 'Impulso inmediato', hint: '¿Qué quiero hacer ahora?' },
  { head: 'Acción alineada', hint: '¿Qué me conviene hacer?' },
  { head: 'Cómo creo que me sentiré', hint: 'opción fácil' },
  { head: 'Cómo creo que me sentiré', hint: 'opción alineada' },
  { head: 'Decisión tomada' },
  { head: 'Resultado' },
]

const EXAMPLE = [
  'Día agotador',
  'No ir al gym y ver series',
  'Adaptar mi entrenamiento a mi energía',
  'Arrepentido/a, sin energía',
  'Satisfecho/a, más en control',
  'Fui al gym (adaptado)',
  'Me sentí mejor de lo que esperaba',
]

export default function ExerciseSheet({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="rotate-[-1.2deg] bg-bone p-5 text-ink shadow-[0_30px_70px_-25px_rgba(0,0,0,0.9)] sm:p-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-deep">
          Ejercicio 06 · Ejemplo
        </p>
        <h3 className="mt-2 text-lg font-bold leading-tight text-ink sm:text-xl">
          Gratificación instantánea vs. diferida
        </h3>
        <p className="mt-2 text-[11px] leading-relaxed text-ink/70">
          Registra durante la semana al menos 5 situaciones reales de conflicto.
        </p>

        {/* Móvil: el mismo ejemplo, apilado y legible completo */}
        <dl className="mt-5 border-t border-ink/15 sm:hidden">
          {COLUMNS.map((c, i) => (
            <div key={i} className="border-b border-ink/15 py-2.5">
              <dt className="text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-ink/70">
                {c.head}
                {c.hint && (
                  <span className="ml-1 font-semibold normal-case italic tracking-normal">
                    ({c.hint})
                  </span>
                )}
              </dt>
              <dd className="mt-1 text-[13px] leading-snug text-ink/85">{EXAMPLE[i]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 text-[10px] italic leading-relaxed text-ink/70 sm:hidden">
          En el e-book es una tabla para completar durante toda la semana.
        </p>

        {/* Desde sm: la tabla real */}
        <div className="mt-5 hidden overflow-x-auto sm:block">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                {COLUMNS.map((c, i) => (
                  <th
                    key={i}
                    className="border border-red-deep/30 bg-red/15 px-2 py-2 align-top text-[9px] font-bold uppercase leading-tight tracking-[0.06em] text-ink/80"
                  >
                    {c.head}
                    {c.hint && (
                      <span className="mt-0.5 block text-[8px] font-semibold normal-case italic tracking-normal text-ink/70">
                        ({c.hint})
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {EXAMPLE.map((cell, i) => (
                  <td
                    key={i}
                    className={`border border-ink/15 px-2 py-3 align-top text-[10px] leading-snug text-ink/80 ${
                      i === 0 ? 'italic' : ''
                    }`}
                  >
                    {i === 0 ? `Ej: ${cell}` : cell}
                  </td>
                ))}
              </tr>
              {[0, 1, 2].map((r) => (
                <tr key={r}>
                  {COLUMNS.map((_, i) => (
                    <td key={i} className="h-11 border border-ink/15 px-2 py-3" />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 border-t border-ink/15 pt-4 text-[10px] leading-relaxed text-ink/70">
          <strong className="font-bold text-ink/75">Seguimiento semanal:</strong> 0–2 decisiones
          alineadas (nivel bajo) · 3–4 (nivel medio) · 5 o más (nivel alto).
        </p>
      </div>
    </div>
  )
}
