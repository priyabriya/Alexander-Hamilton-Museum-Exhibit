import Hero from "@/components/Hero";
import ArtifactCard from "@/components/ArtifactCard";
import TimelineList from "@/components/TimelineList";
import AudienceCard from "@/components/AudienceCard";
import SectionLabel from "@/components/SectionLabel";
import Link from "next/link";
import { artifacts, timelineEvents, audienceCards, siteConfig } from "@/lib/data";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <Hero />

      {/* ── About ── */}
      <section id="about" className="bg-[#fdf6e3] border-t border-b border-[#e8d9b8] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Sticky aside */}
          <div className="md:sticky md:top-20">
            <SectionLabel label="The Exhibit" heading="Ambition Written into History" />
            <div className="flex flex-col gap-8 mt-2">
              {siteConfig.stats.map((s) => (
                <div key={s.label} className="border-l-[3px] border-[#b8860b] pl-5">
                  <div className="font-display text-[2rem] text-[#8b3a1e] leading-none">{s.value}</div>
                  <div className="font-serif text-[0.75rem] tracking-[0.12em] uppercase text-[#1a1208] mt-1" style={{ opacity: 0.65 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body copy */}
          <div className="font-serif text-[1.02rem] text-[#1a1208] space-y-5 leading-relaxed">
            <p>
              This exhibit traces Alexander Hamilton&rsquo;s extraordinary arc through the lens of his
              writings and the institutions he created. Born into poverty in the West Indies, Hamilton
              rose to become the architect of the United States&rsquo; financial system, the founder of
              the Coast Guard, and the author of more than half of <em>The Federalist Papers</em>.
            </p>
            <p>
              His story is one of radical self-invention. At seventeen, a letter describing a
              devastating hurricane so impressed local leaders in St. Croix that they raised funds to
              send him to New York for an education. That letter was the first demonstration of what
              would become his defining weapon: the written word.
            </p>
            <p>
              From that moment forward, Hamilton wielded the pen with the force of a general on a
              battlefield. He designed financial systems where none existed, argued constitutions into
              existence, and wrote himself from obscurity into the founding narrative of a nation —
              all before his death at forty-nine.
            </p>
            <p>
              His influence persists every time we use a ten-dollar bill, trade stocks on a national
              exchange, or rely on the institutions he built from scratch. His life is a high-stakes
              drama of ambition, intellectual brilliance, and a tragic ending that feels urgently modern.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              {["American History", "Financial Systems", "Founding Era", "Hamilton Musical", "Primary Sources"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-[#b8860b] font-serif text-[0.7rem] tracking-widest uppercase text-[#1b2a4a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Artifacts preview ── */}
      <section id="artifacts" className="bg-[#f5edd8] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Primary Sources & Sites" heading="Documents That Built a Nation" />
          <div className="grid md:grid-cols-2 gap-[2px] bg-[#b8860b] border-2 border-[#b8860b]">
            {artifacts.map((a) => (
              <ArtifactCard key={a.id} artifact={a} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/artifacts"
              className="inline-block px-8 py-3 border border-[#b8860b] font-serif text-[0.8rem] tracking-[0.15em] uppercase text-[#b8860b] hover:bg-[#b8860b] hover:text-[#fdf6e3] transition-colors no-underline"
            >
              View Full Artifacts Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Timeline preview ── */}
      <section id="timeline" className="bg-[#1b2a4a] py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <SectionLabel label="Chronology" heading="From St. Croix to the Treasury" light />
          <TimelineList events={timelineEvents.slice(0, 4)} />
          <div className="mt-12">
            <Link
              href="/timeline"
              className="inline-block px-8 py-3 border border-[#b8860b] font-serif text-[0.8rem] tracking-[0.15em] uppercase text-[#d4a843] hover:bg-[#b8860b] hover:text-[#1b2a4a] transition-colors no-underline"
            >
              View Full Timeline →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Audience preview ── */}
      <section id="audience" className="bg-[#e8d9b8] py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel label="Who This Exhibit Is For" heading="Three Ways In" />
            <p className="font-quill italic text-[1.1rem] text-[#8b3a1e] max-w-[55ch] mx-auto mt-[-1rem] leading-relaxed">
              &ldquo;His influence is still felt every time we use a $10 bill or trade stocks. His life
              is a high-stakes drama of ambition, brilliance, and a tragic ending that feels modern even
              today.&rdquo;
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {audienceCards.map((c) => (
              <AudienceCard key={c.id} card={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Ornament ── */}
      <div className="bg-[#f5edd8] text-center py-6 font-serif text-[1.2rem] text-[#b8860b]" style={{ opacity: 0.5, letterSpacing: "0.5em" }}>
        ✦ ✦ ✦
      </div>
    </main>
  );
}
