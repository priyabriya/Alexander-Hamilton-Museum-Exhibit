import ArtifactCard from "@/components/ArtifactCard";
import SectionLabel from "@/components/SectionLabel";
import { artifacts } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artifacts — Alexander Hamilton",
  description: "Primary sources and historical sites from Alexander Hamilton's life and career.",
};

export default function ArtifactsPage() {
  return (
    <main className="pt-14 min-h-screen bg-[#f5edd8]">
      {/* Page header */}
      <div className="bg-[#1b2a4a] px-6 md:px-16 py-16 border-b-2 border-[#b8860b]">
        <div className="max-w-4xl">
          <SectionLabel
            label="Primary Sources & Sites"
            heading="Documents That Built a Nation"
            light
          />
          <p className="font-serif text-[1.02rem] text-[#e8d9b8] max-w-[55ch] leading-relaxed mt-[-0.5rem]">
            Each artifact here represents a different facet of Hamilton&rsquo;s power — personal voice,
            institutional design, domestic life, and political persuasion. Together they trace the full
            arc of a man who used language as his primary instrument of nation-building.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-[2px] bg-[#b8860b] border-2 border-[#b8860b]">
          {artifacts.map((a) => (
            <ArtifactCard key={a.id} artifact={a} />
          ))}
        </div>
      </div>

      {/* Reading note */}
      <div className="px-6 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto border-t border-[#e8d9b8] pt-10">
          <p className="font-quill italic text-[1rem] text-[#8b3a1e] max-w-[65ch] leading-relaxed">
            <strong className="font-display not-italic text-[0.75rem] tracking-widest uppercase text-[#1b2a4a] block mb-2">
              A note on sources
            </strong>
            All linked sources are institutional — the National Archives, Library of Congress, National
            Park Service, and Wikipedia. Hamilton&rsquo;s papers are largely in the public domain and
            accessible via the Founders Online database at founders.archives.gov.
          </p>
        </div>
      </div>
    </main>
  );
}
