import AudienceCard from "@/components/AudienceCard";
import SectionLabel from "@/components/SectionLabel";
import { audienceCards } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audience — Alexander Hamilton",
  description: "Three entry routes into the Alexander Hamilton museum exhibit.",
};

export default function AudiencePage() {
  return (
    <main className="pt-14 min-h-screen bg-[#e8d9b8]">
      {/* Page header */}
      <div className="bg-[#1b2a4a] px-6 md:px-16 py-16 border-b-2 border-[#b8860b]">
        <div className="max-w-4xl">
          <SectionLabel label="Who This Exhibit Is For" heading="Three Ways In" light />
          <p className="font-serif text-[1.02rem] text-[#e8d9b8] max-w-[55ch] leading-relaxed mt-[-0.5rem]">
            People arrive at Hamilton with different prior knowledge and different questions. Rather than
            treating every visitor the same, this exhibit offers three distinct entry routes — each
            beginning at the source most relevant to your interest.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {audienceCards.map((c) => (
            <AudienceCard key={c.id} card={c} />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="px-6 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto border-t border-[#b8860b]/40 pt-10 text-center">
          <p className="font-quill italic text-[1.1rem] text-[#8b3a1e] max-w-[55ch] mx-auto leading-relaxed">
            &ldquo;The inquiry constantly is what will please, not what will benefit the people.&rdquo;
          </p>
          <cite className="not-italic font-serif text-[0.72rem] tracking-widest uppercase text-[#1a1208] block mt-3" style={{ opacity: 0.6 }}>
            — Alexander Hamilton
          </cite>
        </div>
      </div>
    </main>
  );
}
