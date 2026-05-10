interface SectionLabelProps {
  label: string;
  heading: string;
  light?: boolean;
}

export default function SectionLabel({ label, heading, light = false }: SectionLabelProps) {
  return (
    <div className="mb-12">
      <p
        className="font-serif text-[0.72rem] font-semibold tracking-[0.25em] uppercase text-[#b8860b] mb-3"
      >
        {label}
      </p>
      <h2
        className={`font-display text-[clamp(1.3rem,2.5vw,2.1rem)] font-normal leading-tight ${
          light ? "text-[#f5edd8]" : "text-[#1b2a4a]"
        }`}
      >
        {heading}
      </h2>
      <div className="w-14 h-[2px] bg-[#b8860b] mt-5" />
    </div>
  );
}
