import TimelineList from "@/components/TimelineList";
import SectionLabel from "@/components/SectionLabel";
import { timelineEvents } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline — Alexander Hamilton",
  description: "A chronological account of Alexander Hamilton's life from St. Croix to the Treasury.",
};

export default function TimelinePage() {
  return (
    <main className="pt-14 min-h-screen bg-[#1b2a4a]">
      {/* Page header */}
      <div className="px-6 md:px-16 py-16 border-b-2 border-[#b8860b]">
        <div className="max-w-4xl">
          <SectionLabel label="Chronology" heading="From St. Croix to the Treasury" light />
          <p className="font-serif text-[1.02rem] text-[#e8d9b8] max-w-[55ch] leading-relaxed mt-[-0.5rem]">
            Hamilton&rsquo;s life spans fifty years of extraordinary upheaval — colonial poverty,
            revolution, nation-building, political warfare, and a fatal duel. This timeline traces the
            sequence that turned a teenage orphan into the architect of the American financial system.
          </p>
        </div>
      </div>

      {/* Full timeline */}
      <div className="px-6 md:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <TimelineList events={timelineEvents} />
        </div>
      </div>

      {/* Closing note */}
      <div className="px-6 md:px-16 pb-16">
        <div className="max-w-4xl mx-auto border-t border-[#b8860b]/30 pt-10">
          <p className="font-quill italic text-[1rem] text-[#d4a843] max-w-[60ch] leading-relaxed" style={{ opacity: 0.7 }}>
            Hamilton died on July 12, 1804, the day after the duel. He was forty-nine years old. His
            death shocked the nation and effectively ended Aaron Burr&rsquo;s political career. Hamilton
            was buried at Trinity Church in lower Manhattan, a few blocks from the site of his greatest
            institutional achievements.
          </p>
        </div>
      </div>
    </main>
  );
}
