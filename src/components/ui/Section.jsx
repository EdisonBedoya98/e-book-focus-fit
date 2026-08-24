/**
 * Bloque de página con el ancho y el respiro verticales estandarizados.
 */
export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  )
}

export function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="eyebrow mb-4 text-red-bright">
          <span className="mr-3 inline-block h-px w-8 translate-y-[-4px] bg-red align-middle" />
          {eyebrow}
        </p>
      )}
      <h2 className="display text-4xl text-white sm:text-5xl md:text-6xl">{title}</h2>
      {subtitle && (
        <p className="mt-6 text-base leading-relaxed text-mute md:text-lg">{subtitle}</p>
      )}
    </div>
  )
}
