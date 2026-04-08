import { useEffect, useRef, useState, useCallback } from "react";

/* ── Scroll reveal hook ── */
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, isVisible };
};

/* ── Data ── */
const steps = [
  { n: "1", title: "Registrácia", desc: "Zaregistrujte sa a počkajte na schválenie účtu." },
  { n: "2", title: "Výber nábytku", desc: "Zvoľte si kategóriu alebo konkrétny produkt." },
  { n: "3", title: "Konfigurácia", desc: "Navolte rozmery, členenie a materiál." },
  { n: "4", title: "3D kontrola", desc: "Overte si výsledný vzhľad v 3D modeli." },
  { n: "5", title: "Objednávka", desc: "Vložte tovar do košíka a vyplňte údaje." },
  { n: "6", title: "Platba", desc: "Dokončite nákup a zaplaťte.", isFinal: true },
];

const TRIANGLE_VB = "0 0 286.64 325.92";
const TRIANGLE_D =
  "M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z";

const triangleColors = [
  "hsl(var(--mollvero-green-light))",
  "hsl(var(--mollvero-yellow))",
  "hsl(var(--mollvero-beige))",
  "hsl(var(--mollvero-green-light))",
  "hsl(var(--mollvero-yellow))",
  "hsl(var(--mollvero-coral))",
];

const desktopPos = [
  { x: 100, y: 70, labelSide: "right" as const },
  { x: 440, y: 150, labelSide: "right" as const },
  { x: 780, y: 260, labelSide: "left" as const },
  { x: 260, y: 390, labelSide: "right" as const },
  { x: 580, y: 490, labelSide: "left" as const },
  { x: 880, y: 570, labelSide: "bottom" as const },
];

const RIVER =
  "M100,90 C220,90 340,100 440,150 " +
  "Q580,200 700,230 Q840,260 800,290 " +
  "Q740,320 580,350 Q420,370 300,390 " +
  "Q180,410 220,440 Q320,475 460,490 " +
  "Q640,500 750,520 Q860,540 900,580";

const TW = 55;
const TH = 64;

/* ── Inline styles for the draw animation ── */
const drawStyle = `
@keyframes draw-river {
  to { stroke-dashoffset: 0; }
}
@keyframes sparkle-pulse {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(1.15); }
}
`;

const HowItWorksSection = () => {
  const heading = useScrollReveal();
  const river = useScrollReveal();
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(0);

  /* Measure SVG path length for draw animation */
  const measuredRef = useCallback((node: SVGPathElement | null) => {
    if (node) {
      pathRef.current = node;
      setPathLen(node.getTotalLength());
    }
  }, []);

  return (
    <section className="py-16 lg:py-28 bg-background relative overflow-hidden">
      <style>{drawStyle}</style>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-14 lg:mb-18 transition-all duration-700 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Ako to funguje
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Od registrácie po doručenie{" "}
            <span className="font-script font-normal text-primary">v 6 krokoch</span>
          </h2>
        </div>

        {/* Desktop river */}
        <div
          ref={river.ref}
          className={`hidden md:block relative transition-all duration-1000 ${
            river.isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="w-full"
            viewBox="0 0 1000 660"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* River path with draw animation */}
            <path
              ref={measuredRef}
              d={RIVER}
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.28"
              strokeDasharray={pathLen || 2000}
              strokeDashoffset={river.isVisible ? 0 : (pathLen || 2000)}
              style={{
                transition: river.isVisible
                  ? `stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
              }}
            />

            {/* Steps */}
            {desktopPos.map((pos, i) => (
              <DesktopStep
                key={i}
                pos={pos}
                step={steps[i]}
                color={triangleColors[i]}
                index={i}
                visible={river.isVisible}
              />
            ))}

            {/* Sparkle rings at step 6 */}
            <circle
              cx={880} cy={570} r="36"
              stroke="hsl(var(--mollvero-coral))" strokeWidth="1.5"
              strokeDasharray="4 4" fill="none"
              style={{ animation: river.isVisible ? "sparkle-pulse 2.5s ease-in-out infinite" : "none", transformOrigin: "880px 570px" }}
            />
            <circle
              cx={880} cy={570} r="48"
              stroke="hsl(var(--mollvero-coral))" strokeWidth="1"
              strokeDasharray="3 5" fill="none"
              style={{ animation: river.isVisible ? "sparkle-pulse 2.5s ease-in-out infinite 0.4s" : "none", transformOrigin: "880px 570px" }}
            />
          </svg>
        </div>

        {/* Mobile */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] border-l-[3px] border-dashed border-mollvero-coral/20 rounded-full" />
          <div className="space-y-9 pl-16">
            {steps.map((step, i) => (
              <MobileStep key={i} step={step} color={triangleColors[i]} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Desktop step with hover ── */
const DesktopStep = ({ pos, step, color, index, visible }: {
  pos: (typeof desktopPos)[0];
  step: (typeof steps)[0];
  color: string;
  index: number;
  visible: boolean;
}) => {
  const isFinal = step.isFinal;
  const [hovered, setHovered] = useState(false);

  /* Steps fade in sequentially, timed to match the draw animation */
  const delay = 0.4 + index * 0.35;

  return (
    <g
      className="transition-all duration-700 ease-out cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transitionDelay: visible ? `${delay}s` : "0s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Triangle with hover scale */}
      <svg
        x={pos.x - TW / 2}
        y={pos.y - TH / 2}
        width={TW}
        height={TH}
        viewBox={TRIANGLE_VB}
        opacity={isFinal ? 0.5 : 0.3}
        style={{
          transform: hovered ? "scale(1.12)" : "scale(1)",
          transformOrigin: `${pos.x}px ${pos.y}px`,
          transition: "transform 0.3s ease, opacity 0.3s ease",
          ...(hovered ? { opacity: isFinal ? 0.65 : 0.45 } : {}),
        }}
      >
        <path d={TRIANGLE_D} fill={color} />
      </svg>

      {/* Glow ring on hover */}
      {hovered && (
        <circle
          cx={pos.x} cy={pos.y} r="38"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.2"
        />
      )}

      {/* Number */}
      <text
        x={pos.x}
        y={pos.y + 4}
        textAnchor="middle"
        dominantBaseline="central"
        fill={isFinal ? "hsl(var(--mollvero-coral))" : "hsl(var(--foreground))"}
        className="text-[22px] font-bold"
        style={{
          fontFamily: "inherit",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transformOrigin: `${pos.x}px ${pos.y}px`,
          transition: "transform 0.3s ease",
        }}
      >
        {step.n}
      </text>

      {/* Label */}
      {pos.labelSide === "right" && (
        <foreignObject x={pos.x + TW / 2 + 12} y={pos.y - 22} width="200" height="72">
          <div>
            <p className="text-base font-extrabold text-foreground leading-tight">{step.title}</p>
            <p className="text-[13px] font-medium text-foreground/70 leading-relaxed mt-1.5">{step.desc}</p>
          </div>
        </foreignObject>
      )}
      {pos.labelSide === "left" && (
        <foreignObject x={pos.x - TW / 2 - 212} y={pos.y - 22} width="200" height="72">
          <div className="text-right">
            <p className="text-base font-extrabold text-foreground leading-tight">{step.title}</p>
            <p className="text-[13px] font-medium text-foreground/70 leading-relaxed mt-1.5">{step.desc}</p>
          </div>
        </foreignObject>
      )}
      {pos.labelSide === "bottom" && (
        <foreignObject x={pos.x - 100} y={pos.y + TH / 2 + 8} width="200" height="65">
          <div className="text-center">
            <p className="text-base font-extrabold text-foreground leading-tight">{step.title}</p>
            <p className="text-[13px] font-medium text-foreground/70 leading-relaxed mt-1.5">{step.desc}</p>
          </div>
        </foreignObject>
      )}
    </g>
  );
};

/* ── Mobile step ── */
const MobileStep = ({ step, color, index }: {
  step: (typeof steps)[0]; color: string; index: number;
}) => {
  const row = useScrollReveal();
  const isFinal = "isFinal" in step && step.isFinal;

  return (
    <div
      ref={row.ref}
      className={`relative flex items-start gap-3 transition-all duration-600 ease-out ${
        row.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: row.isVisible ? `${index * 0.08}s` : "0s" }}
    >
      <div className="absolute -left-16 top-0 w-12 h-14 flex items-center justify-center">
        <svg className="absolute inset-0 w-full h-full" viewBox={TRIANGLE_VB} opacity={isFinal ? 0.4 : 0.25}>
          <path d={TRIANGLE_D} fill={color} />
        </svg>
        <span className={`relative text-sm font-bold z-10 ${isFinal ? "text-mollvero-coral" : "text-foreground"}`}>
          {step.n}
        </span>
      </div>
      <div>
        <h3 className="text-base font-extrabold text-foreground leading-tight">{step.title}</h3>
        <p className="text-[13px] font-medium text-foreground/70 leading-relaxed mt-1">{step.desc}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
