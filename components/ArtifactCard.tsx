import type { Artifact } from "@/lib/data";

export default function ArtifactCard({ artifact }: { artifact: Artifact }) {
  return (
    <div className="relative bg-[#fdf6e3] p-8 md:p-10 border-b-2 border-[#b8860b] hover:bg-[#fefaf0] transition-colors group overflow-hidden">
      {/* Hover top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#b8860b] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

      {/* Background number */}
      <span
        aria-hidden="true"
        className="absolute top-4 right-4 font-display text-[3rem] text-[#e8d9b8] leading-none select-none pointer-events-none"
      >
        {artifact.number}
      </span>

      <p className="font-serif text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-[#8b3a1e] mb-3">
        {artifact.type} · {artifact.year}
      </p>

      <h3 className="font-display text-[1rem] font-normal text-[#1b2a4a] mb-4 leading-snug max-w-[28ch]">
        {artifact.title}
      </h3>

      <p className="font-serif text-[0.95rem] text-[#1a1208] mb-4 leading-relaxed" style={{ opacity: 0.85 }}>
        {artifact.description}
      </p>

      <p className="font-quill italic text-[0.95rem] text-[#8b3a1e] pt-4 border-t border-[#e8d9b8] leading-relaxed">
        {artifact.significance}
      </p>

      <a
        href={artifact.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 font-serif text-[0.72rem] tracking-[0.15em] uppercase text-[#b8860b] border-b border-transparent hover:border-[#b8860b] transition-colors no-underline"
      >
        {artifact.linkLabel} →
      </a>
    </div>
  );
}
