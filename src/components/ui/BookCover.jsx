import portada from '../../assets/portada-focus-fit.jpg'

/**
 * Portada real del e-book, montada como un libro en 3D (perspectiva, lomo,
 * canto de páginas y sombra en el suelo) para que se vea como un producto
 * físico y no como una imagen pegada.
 *
 * Para cambiar la portada: reemplaza src/assets/portada-focus-fit.jpg.
 *
 * `alt` solo se pasa en la portada principal (el hero). En el resto de la
 * página la imagen se repite, así que va oculta a los lectores de pantalla
 * para no anunciar tres veces lo mismo.
 */
export default function BookCover({ className = '', floating = true, alt = '' }) {
  const decorative = !alt

  return (
    <div aria-hidden={decorative || undefined} className={`relative ${className}`}>
      <div
        className={`relative aspect-[2/3] w-full [transform:perspective(1400px)_rotateY(-16deg)_rotateX(3deg)] ${
          floating ? 'animate-[float_6s_ease-in-out_infinite]' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* canto de páginas */}
        <div className="absolute inset-y-[1.5%] -right-[10px] w-[14px] rounded-r-[3px] bg-gradient-to-r from-[#2a2a2f] via-[#d9d5cc] to-[#8e8a82]" />

        {/* tapa */}
        <div className="relative h-full w-full overflow-hidden rounded-[4px] rounded-l-[2px] bg-ink shadow-[0_50px_90px_-30px_rgba(0,0,0,0.95)] ring-1 ring-white/10">
          <img
            src={portada}
            alt={alt}
            width="1024"
            height="1536"
            className="h-full w-full object-cover"
          />

          {/* lomo */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
          {/* brillo del barniz */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16)_0%,transparent_38%,transparent_62%,rgba(255,255,255,0.06)_100%)]" />
        </div>
      </div>

      {/* sombra en el suelo */}
      <div className="absolute -bottom-6 left-1/2 h-8 w-[78%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-2xl" />
    </div>
  )
}
