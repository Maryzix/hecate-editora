export default function Particles() {
  return (
    <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-0.75 h-0.75 bg-amber-400 rounded-full opacity-80 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-10px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
