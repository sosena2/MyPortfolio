export default function SectionTag({ number, label }) {
  return (
    <p className="font-serif italic text-gold text-sm tracking-wide mb-4">
      {number} — {label}
    </p>
  );
}