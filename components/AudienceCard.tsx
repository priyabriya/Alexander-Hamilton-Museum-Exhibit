import Link from "next/link";
import type { AudienceCard as AudienceCardType } from "@/lib/data";

export default function AudienceCard({ card }: { card: AudienceCardType }) {
  return (
    <div className="bg-[#fdf6e3] p-8 border-b-2 border-[#b8860b] flex flex-col hover:-translate-y-1 transition-transform duration-200">
      <span className="text-[1.8rem] mb-4 block" aria-hidden="true">
        {card.icon}
      </span>
      <h3 className="font-display text-[0.85rem] text-[#1b2a4a] mb-3 leading-snug">
        {card.title}
      </h3>
      <p className="font-serif text-[0.95rem] text-[#1a1208] leading-relaxed flex-1" style={{ opacity: 0.8 }}>
        {card.description}
      </p>
      <Link
        href={card.entryRoute}
        className="inline-block mt-6 font-serif text-[0.72rem] tracking-[0.15em] uppercase text-[#b8860b] border-b border-transparent hover:border-[#b8860b] transition-colors no-underline w-fit"
      >
        {card.entryLabel} →
      </Link>
    </div>
  );
}
