# Focus & Fit — Landing page

Landing page de venta para el e-book **Focus & Fit — Psicología aplicada al Fitness**, de Cata Psicofit.
Hecha con **React + Vite + Tailwind CSS v4**, optimizada para un único objetivo: **la compra en Hotmart**.

---

## 🚀 Cómo arrancarla

```bash
npm install
```

```bash
npm run dev
```

Abre el enlace que aparece en la terminal (normalmente `http://localhost:5173`).

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga automática |
| `npm run build` | Genera la versión final en la carpeta `dist/` |
| `npm run preview` | Prueba en local la versión final |
| `npm run lint` | Revisa el código |

---

## 🔗 Conectar el botón de compra con Hotmart (lo más importante)

**Todos los botones de la página salen del mismo sitio.** Solo tienes que hacer esto una vez:

1. Entra a tu producto en Hotmart → **Links de pago / Checkout**.
2. Copia el link (tiene esta forma: `https://pay.hotmart.com/XXXXXXXXX`).
3. Abre `src/config/site.js` y pégalo aquí:

```js
export const CHECKOUT_URL = 'https://pay.hotmart.com/XXXXXXXXX'
```

4. Guarda. Listo: los 7 botones de la página ya llevan a tu checkout.

> Mientras `CHECKOUT_URL` esté vacío, al hacer clic aparece un aviso recordándote que falta configurarlo.
> Así te das cuenta enseguida si se te olvidó.

### Opciones extra en ese mismo archivo

```js
export const CHECKOUT_NEW_TAB = false  // true = abre Hotmart en otra pestaña
export const VIDEO_URL = ''            // pega un embed de YouTube/Vimeo y aparece la sección de video
export const WHATSAPP = ''             // ej: '573001234567' → aparece el bloque "¿Te quedó alguna duda?"
```

---

## ✏️ Cambiar textos, precio y datos

| Qué quieres cambiar | Archivo |
| --- | --- |
| Precio, garantía, correo, Instagram, texto de los botones | `src/config/site.js` |
| Todos los textos de las secciones (dolores, capítulos, ejercicios, FAQ…) | `src/data/content.js` |
| Foto de Cata | reemplaza `src/assets/cata.jpg` (cuadrada, se recorta en círculo) |
| Portada del e-book | reemplaza `src/assets/portada-focus-fit.jpg` (vertical, 2:3) |
| Testimonios (opcional) | `src/data/content.js` → `testimonials` |
| Título y descripción en Google / redes | `index.html` |
| Ejemplo de tabla de ejercicio | `src/components/ui/ExerciseSheet.jsx` |
| Imagen que se ve al compartir el link | `public/og-image.jpg` (1200×630) |

**Cambiar el precio:** en `src/config/site.js`

```js
price: {
  amount: 10,
  display: '$10',
  currencyLabel: 'USD',
  compareAt: null,   // pon '$79.000' si quieres mostrar un precio tachado
},
```

> 📷 **Sobre las imágenes:** `src/assets/cata.jpg` es un recorte cuadrado (700×700) de la foto
> original, que se conserva completa en `src/assets/cata-original.jpg` por si quieres reencuadrarla.
> Ese recorte deja fuera la marca de agua del fotógrafo; si necesitas conservarle el crédito,
> añádelo en el pie de página. La portada `src/assets/portada-focus-fit.jpg` se usa en tres
> sitios (hero, «Esto es Focus & Fit» y bloque de precio): cambiando ese archivo se actualizan
> los tres.

---

## 🧱 Cómo está construida la página

El orden de las secciones sigue la estructura de venta acordada en la propuesta:

| # | Sección | Componente | Qué hace |
| --- | --- | --- | --- |
| 1 | Menú fijo | `Nav.jsx` | Navegación + botón de compra siempre visible |
| 2 | Hero | `Hero.jsx` | Titular, promesa, 3 beneficios y primer CTA |
| 3 | Datos clave | `StatsStrip.jsx` | 220 páginas · 8 ejes · 7 ejercicios · 100% digital |
| 4 | Video (opcional) | `VideoSection.jsx` | Solo aparece si configuras `VIDEO_URL` |
| 5 | Franja animada | `Marquee.jsx` | Refuerzo visual de los temas |
| 6 | ¿Te identificas? | `Identification.jsx` | El dolor: que se sienta comprendida |
| 7 | Romper creencias | `MythBreak.jsx` | “No todo se resuelve con más disciplina” |
| 8 | Esto es Focus & Fit | `WhatIsIt.jsx` | Qué es / qué no es |
| 9 | Aprenderás a… | `Learnings.jsx` | 6 beneficios + CTA |
| 10 | El recorrido | `Chapters.jsx` | Los 8 ejes del e-book |
| 11 | Ejercicios | `Exercises.jsx` | Los 7 ejercicios reales + herramientas + CTA |
| 12 | Antes / después | `Transformation.jsx` | Cambio de preguntas, sin promesas irreales |
| 13 | Para ti / no para ti | `ForYou.jsx` | Califica al comprador correcto |
| 14 | Hola, soy Cata | `About.jsx` | Autoridad y conexión humana |
| 14b | Testimonios (opcional) | `Testimonials.jsx` | Aparece solo si agregas testimonios reales en `content.js` |
| 15 | Precio | `Pricing.jsx` | Oferta, qué incluye, garantía y CTA principal |
| 16 | Dudas antes de comprar | `Support.jsx` | Botón de WhatsApp si configuras el número; si no, correo |
| 17 | FAQ | `Faq.jsx` | Elimina objeciones, incluye los pasos de compra |
| 18 | Cierre | `FinalCta.jsx` | Último CTA emocional |
| 19 | Pie de página | `Footer.jsx` | Aviso legal y contacto |
| — | Barra de compra | `StickyBar.jsx` | Precio + botón fijo al hacer scroll |

---

## 📈 Medir cuántas personas hacen clic en comprar

Cada botón envía un evento `begin_checkout` con la posición desde la que se hizo clic
(`hero`, `precio`, `barra-fija`, `cierre`…). Funciona automáticamente si instalas
**Google Tag Manager**, **GA4** o el **Píxel de Meta** en `index.html`.

Así sabrás qué parte de la página vende más. La lógica está en `src/lib/checkout.js`.

---

## 🌐 Publicar la página

**Opción rápida (Vercel):**

```bash
npx vercel
```

**Opción manual:** ejecuta `npm run build` y sube el contenido de la carpeta `dist/`
a Netlify, Hostinger, Cloudflare Pages o el hosting que uses.

### ⚠️ Antes de publicar: cambia el dominio

Busca y reemplaza `focusandfit.com` por tu dominio real en **dos archivos**:

- `index.html` → `canonical`, `og:url`, `og:image`, `og:image:secure_url`, `twitter:image`
  y el bloque de datos estructurados (`url`, `image`, `offers.url`).
- `public/robots.txt` y `public/sitemap.xml` → la línea del sitemap y el `<loc>`.

Si no lo haces, al compartir el link en WhatsApp o Instagram **no se verá la imagen de portada**,
porque Open Graph exige URLs absolutas.

Para comprobar cómo se verá la tarjeta una vez publicada:
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) ·
[X Card Validator](https://cards-dev.twitter.com/validator)

---

## ⚖️ Nota legal incluida

El pie de página aclara que Focus & Fit es un material psicoeducativo y de reflexión, y que
no reemplaza la evaluación, el diagnóstico ni la intervención de un profesional de la salud
mental. Es importante mantener ese aviso.
