export function ChipVisual() {
  return (
    <div className="relative mx-auto h-56 w-56">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#3a3a3c] via-[#1c1c1e] to-black shadow-[0_0_80px_rgba(80,140,255,0.18)]" />
      <div className="absolute inset-6 overflow-hidden rounded-[22px] border border-white/10 bg-[#0c0c0e]">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-sky-300/20"
            style={{
              inset: `${8 + i * 8}%`,
              animation: `pulse ${3 + i * 0.2}s ease-in-out infinite`,
            }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gradient-to-br from-sky-200 to-indigo-600" />
      </div>
    </div>
  )
}
