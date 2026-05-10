"use client";

import { useEffect, useRef } from "react";
import type { TimelineEvent } from "@/lib/data";

export default function TimelineList({ events }: { events: TimelineEvent[] }) {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll(".tl-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={listRef} className="relative pl-8 mt-12">
      {/* Vertical line */}
      <div
        className="absolute left-0 top-2 bottom-2 w-[2px]"
        style={{ background: "linear-gradient(to bottom, #b8860b, #8b3a1e)" }}
      />

      {events.map((ev) => (
        <div key={ev.id} className="tl-item relative pl-10 pb-12 last:pb-0">
          {/* Dot */}
          <div
            className="absolute left-[-0.45rem] top-[6px] w-[14px] h-[14px] rounded-full bg-[#b8860b] border-2 border-[#1b2a4a]"
            style={{ boxShadow: "0 0 0 2px #b8860b" }}
          />

          <p className="font-display text-[0.75rem] tracking-widest text-[#d4a843] mb-1">
            {ev.year}
          </p>
          <h3 className="font-quill italic text-[1.2rem] text-[#f5edd8] mb-2 leading-snug">
            {ev.event}
          </h3>
          <p className="font-serif text-[0.95rem] text-[#e8d9b8] max-w-[60ch] leading-relaxed" style={{ opacity: 0.8 }}>
            {ev.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
