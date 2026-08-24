import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Section, { SectionTitle } from './ui/Section'
import Reveal from './ui/Reveal'
import { faqs } from '../data/content'

function Item({ q, a, open, onToggle, id }) {
  const panelId = `faq-panel-${id}`
  const buttonId = `faq-button-${id}`

  return (
    <div className="border-b border-white/10">
      <h3>
        <button
          type="button"
          id={buttonId}
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors hover:text-red"
        >
          <span className="text-base font-semibold text-white md:text-lg">{q}</span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-red transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        aria-labelledby={buttonId}
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className={`overflow-hidden ${open ? 'visible' : 'invisible'}`}>
          <p className="pb-7 pr-10 text-sm leading-relaxed text-mute md:text-[15px]">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" className="bg-ink-2">
      <SectionTitle eyebrow="Antes de decidir" title="Preguntas frecuentes" />

      <Reveal className="mx-auto mt-14 max-w-3xl border-t border-white/10">
        {faqs.map((f, i) => (
          <Item
            key={f.q}
            id={i}
            {...f}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </Reveal>
    </Section>
  )
}
