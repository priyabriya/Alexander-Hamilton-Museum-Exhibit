import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen grid md:grid-cols-2 pt-14 overflow-hidden"
    >
      {/* Left panel — text */}
      <div className="flex flex-col justify-center px-8 md:px-16 py-20 bg-[#1b2a4a] relative">
        <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-[#b8860b] hidden md:block" />

        <p className="animate-fade-up delay-200 font-serif text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-[#b8860b] mb-6">
          Museum Exhibit
        </p>

        <h1 className="animate-fade-up delay-400 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-tight text-[#f5edd8] mb-6">
          {siteConfig.name}
          <em className="block not-italic font-quill text-[0.65em] text-[#d4a843] mt-2">
            {siteConfig.subtitle}
          </em>
        </h1>

        <p className="animate-fade-up delay-600 font-serif text-[1.05rem] text-[#e8d9b8] max-w-[38ch] leading-relaxed">
          {siteConfig.description}
        </p>

        <a
          href="#about"
          className="animate-fade-up delay-800 mt-8 inline-block w-fit px-6 py-3 border border-[#b8860b] text-[#d4a843] font-serif text-[0.8rem] tracking-[0.15em] uppercase hover:bg-[#b8860b] hover:text-[#1b2a4a] transition-colors no-underline"
        >
          Enter the Exhibit
        </a>
      </div>

      {/* Right panel — monogram visual */}
      <div className="bg-[#e8d9b8] flex items-center justify-center relative min-h-[360px] md:min-h-0">
        <div className="animate-fade-in delay-600 relative w-64 h-80 md:w-80 md:h-[430px]">
          <div
            className="absolute inset-0 border-2 border-[#b8860b] rotate-2"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-2 border border-[#b8860b] -rotate-1"
            style={{ opacity: 0.25 }}
          />
          <div className="w-full h-full bg-gradient-to-br from-[#f5edd8] to-[#e8d9b8] flex flex-col items-center justify-center">
            <span
              aria-hidden="true"
              className="font-display text-[6rem] md:text-[7rem] text-[#b8860b] leading-none select-none"
              style={{ opacity: 0.2 }}
            >
              AH
            </span>
            <span
              className="font-quill italic text-[0.95rem] text-[#1a1208] tracking-widest"
              style={{ opacity: 0.5, marginTop: "-0.75rem" }}
            >
              {siteConfig.years}
            </span>
          </div>
        </div>

        <blockquote className="animate-fade-in delay-1200 absolute bottom-6 right-5 md:bottom-8 md:right-8 max-w-[22ch] text-right">
          <p className="font-quill italic text-[0.9rem] text-[#8b3a1e] leading-relaxed">
            &ldquo;{siteConfig.quote}&rdquo;
          </p>
          <cite className="not-italic font-serif text-[0.68rem] tracking-widest uppercase text-[#1a1208] block mt-2" style={{ opacity: 0.6 }}>
            — Alexander Hamilton
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
