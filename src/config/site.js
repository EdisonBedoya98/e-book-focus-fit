/* ==================================================================
   CONFIGURACIÓN DEL SITIO
   ------------------------------------------------------------------
   👉 ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CONECTAR
      LA COMPRA CON HOTMART.

   1. Entra a tu producto en Hotmart → "Links de pago" (checkout).
   2. Copia el link (algo como https://pay.hotmart.com/XXXXXXXXX).
   3. Pégalo abajo en CHECKOUT_URL y guarda. Todos los botones de la
      página quedarán conectados automáticamente.
================================================================== */

/** 🔗 Link de pago de Hotmart. Mientras esté vacío, los botones muestran un aviso. */
export const CHECKOUT_URL = ''

/** Abrir el checkout en una pestaña nueva (true) o en la misma (false). */
export const CHECKOUT_NEW_TAB = false

/**
 * 🎥 (Opcional) Video de venta. Pega la URL de inserción de YouTube o Vimeo
 * (ej: 'https://www.youtube.com/embed/XXXXXXXX'). Si la dejas vacía,
 * la sección de video simplemente no aparece.
 */
export const VIDEO_URL = ''

/**
 * 💬 (Opcional) WhatsApp para resolver dudas antes de comprar.
 * Formato internacional sin signos: '573001234567'. Vacío = no se muestra.
 */
export const WHATSAPP = ''

export const site = {
  brand: 'FOCUS & FIT',
  brandShort: 'F&F',
  tagline: 'Psicología aplicada al Fitness',
  author: {
    name: 'Cata',
    handle: 'Cata Psicofit',
    role: 'Psicóloga · Tecnóloga en Actividad Física · Entrenadora',
    instagram: 'https://www.instagram.com/cata.psicofit/',
  },
  price: {
    amount: 10,
    currency: 'USD',
    display: '$10',
    currencyLabel: 'USD',
    /**
     * Precio tachado opcional para anclar el valor (ej: '$79.000').
     * Úsalo SOLO si el producto realmente tuvo ese precio antes.
     */
    compareAt: null,
  },
  guaranteeDays: 7,
  /** Texto del botón principal, reutilizado en toda la página. */
  cta: 'QUIERO MI COPIA DE FOCUS & FIT',
  ctaShort: 'QUIERO MI COPIA',
  email: 'hola@focusandfit.com',
}

export const trustPoints = [
  'Compra segura',
  'Acceso inmediato',
  'Formato digital (PDF)',
  'Garantía de 7 días',
]
