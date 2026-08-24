import { CHECKOUT_URL, CHECKOUT_NEW_TAB, site } from '../config/site'

/** Parámetros que se reenvían a Hotmart para saber de dónde vino la venta. */
const TRACKING_PARAMS = ['src', 'sck', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

/**
 * Envía un evento a las herramientas de medición que estén instaladas
 * (Google Tag Manager / GA4 / Meta Pixel). Si no hay ninguna, no hace nada.
 */
export function track(event, params = {}) {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })

  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
  }
  if (typeof window.fbq === 'function' && event === 'begin_checkout') {
    window.fbq('track', 'InitiateCheckout', params)
  }
}

/**
 * Construye el link final de Hotmart conservando los parámetros de campaña
 * con los que llegó la visita (?src=instagram, ?utm_source=…), para que
 * Hotmart reporte de dónde viene cada venta.
 */
export function buildCheckoutUrl(location) {
  if (!CHECKOUT_URL) return ''

  try {
    // Si pegaron el link sin https:// lo completamos: si no, el navegador
    // lo tomaría como una ruta del propio sitio y la compra se perdería.
    const raw = /^https?:\/\//i.test(CHECKOUT_URL) ? CHECKOUT_URL : `https://${CHECKOUT_URL}`
    const url = new URL(raw)
    const current = new URLSearchParams(window.location.search)

    TRACKING_PARAMS.forEach((key) => {
      const value = current.get(key)
      if (value && !url.searchParams.has(key)) url.searchParams.set(key, value)
    })

    // Si no viene ninguna campaña, al menos registramos desde qué botón salió.
    if (!url.searchParams.has('sck')) url.searchParams.set('sck', `landing-${location}`)

    return url.toString()
  } catch {
    return /^https?:\/\//i.test(CHECKOUT_URL) ? CHECKOUT_URL : `https://${CHECKOUT_URL}`
  }
}

/**
 * Punto único de salida hacia la compra.
 * `location` sirve para saber qué botón de la página convierte mejor.
 */
export function goToCheckout(location = 'desconocido') {
  track('begin_checkout', {
    cta_location: location,
    item_name: site.brand,
    value: site.price.amount,
    currency: site.price.currency,
  })

  const url = buildCheckoutUrl(location)

  if (!url) {
    // Sin link configurado no dejamos al visitante en el vacío: lo llevamos
    // al bloque de precio, donde están los datos de contacto y la garantía.
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(
        '[Focus & Fit] Falta el link de pago. Ábrelo en src/config/site.js → CHECKOUT_URL',
      )
      // eslint-disable-next-line no-alert
      window.alert(
        'Falta configurar el link de pago.\n\n' +
          'Abre el archivo src/config/site.js y pega tu link de Hotmart en CHECKOUT_URL.\n\n' +
          '(Este aviso solo aparece mientras desarrollas, nunca al visitante.)',
      )
    }
    document.getElementById('precio')?.scrollIntoView({ behavior: 'smooth' })
    return
  }

  if (CHECKOUT_NEW_TAB) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}
