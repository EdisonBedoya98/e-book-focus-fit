import Section from './ui/Section'
import Reveal from './ui/Reveal'
import CtaButton from './ui/CtaButton'
import { VIDEO_URL } from '../config/site'

/** Solo aparece si configuras VIDEO_URL en src/config/site.js */
export default function VideoSection() {
  if (!VIDEO_URL) return null

  return (
    <Section className="bg-ink-2">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4 text-red-bright">En 2 minutos te lo cuento</p>
        <h2 className="display text-3xl text-white sm:text-4xl md:text-5xl">
          Mira esto antes de <span className="text-red">decidir</span>
        </h2>

        <div className="mt-10 aspect-video w-full overflow-hidden border border-white/10 bg-black shadow-[0_30px_80px_-30px_rgba(225,29,40,0.5)]">
          <iframe
            src={VIDEO_URL}
            title="Video de presentación de Focus & Fit"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="mt-10">
          <CtaButton location="video" size="md" />
        </div>
      </Reveal>
    </Section>
  )
}
