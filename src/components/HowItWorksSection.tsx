import { useEffect, useRef, useState } from "react";

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

const steps = [
  { n: "1", title: "Registrácia", desc: "Zaregistrujte sa a počkajte na schválenie účtu." },
  { n: "2", title: "Výber nábytku", desc: "Zvoľte si kategóriu alebo konkrétny produkt." },
  { n: "3", title: "Konfigurácia", desc: "Navolte rozmery, členenie a materiál." },
  { n: "4", title: "3D kontrola", desc: "Overte si výsledný vzhľad v 3D modeli." },
  { n: "5", title: "Objednávka", desc: "Vložte tovar do košíka a vyplňte údaje." },
  { n: "6", title: "Platba", desc: "Dokončite nákup a zaplaťte.", isFinal: true },
];

/*
 * 6 distinct brand SVG shapes (from the Mollvero design manual).
 * Each has: viewBox, path d, and a fill color from the brand palette.
 * These serve as step markers — "beads" on the river.
 */
const brandShapes = [
  {
    // Triangle / arrow (Asset 11)
    vb: "0 0 313.32 233.44",
    d: "M298.83,36.31c2.9,6.62,4.64,13.84,5.03,21.44l9.46,175.7H3.09s-6.95-13,0-19.94L200.15,17.79C217.41.64,242.24-4.58,264.94,4.18c15.59,6.02,27.52,17.57,33.87,32.1v.03Z",
    fill: "hsl(var(--mollvero-green-light))",
    w: 60, h: 45,
  },
  {
    // V / wave (Asset 16)
    vb: "0 0 296.82 235.71",
    d: "M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z",
    fill: "hsl(var(--mollvero-yellow))",
    w: 58, h: 46,
  },
  {
    // Curved drop (Asset 14)
    vb: "0 0 238.62 325.92",
    d: "M182.6,325.92c-6.67,0-13.41-1.19-19.98-3.68L10.63,265.3c-8.47-3.17-12.75-12.6-9.58-21.07C1.04,244.23,112.52,4.38,120.97,1.11c8.44-3.27,17.9.91,21.2,9.36l92.57,238.9c8.11,20.92,3.35,43.84-12.45,59.79-10.85,10.95-25.02,16.76-39.65,16.76h-.02Z",
    fill: "hsl(var(--mollvero-beige))",
    w: 42, h: 56,
  },
  {
    // Swoosh hook (Asset 19)
    vb: "0 0 229.89 446.69",
    d: "M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z",
    fill: "hsl(var(--mollvero-green-light))",
    w: 38, h: 56,
  },
  {
    // Curved hook (Asset 18)
    vb: "0 0 245.9 336.11",
    d: "M188.17,336.11c-6.87,0-13.82-1.23-20.59-3.79L10.95,273.59c-8.73-3.27-13.14-13-9.88-21.73,3.27-8.73,12.96-13.15,21.71-9.88l156.63,58.73c9.14,3.37,18.73,1.31,25.6-5.62,6.9-6.96,8.88-16.58,5.36-25.7L115.01,23.01c-3.37-8.71.94-18.49,9.64-21.86,8.7-3.37,18.45.94,21.84,9.65l95.39,246.37c8.36,21.57,3.45,45.21-12.83,61.66-11.18,11.3-25.79,17.28-40.86,17.28h-.03Z",
    fill: "hsl(var(--mollvero-yellow))",
    w: 42, h: 56,
  },
  {
    // Star shape for final step
    vb: "0 0 24 24",
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
    fill: "hsl(var(--mollvero-coral))",
    w: 50, h: 50,
  },
];

/* Step positions on the gentle S-curve */
const desktopPos = [
  { x: 60,  y: 55,  labelSide: "right" as const },
  { x: 310, y: 65,  labelSide: "right" as const },
  { x: 620, y: 100, labelSide: "left" as const },
  { x: 300, y: 170, labelSide: "right" as const },
  { x: 580, y: 210, labelSide: "left" as const },
  { x: 850, y: 230, labelSide: "bottom" as const },
];

/* The gentle river — only 2 soft waves */
const RIVER =
  "M60,75 C180,75 260,75 380,80 Q550,88 700,115 " +
  "Q820,140 780,170 Q720,200 550,190 Q380,180 300,190 " +
  "Q220,200 300,220 Q450,250 600,235 Q780,218 900,250";

const HowItWorksSection = () => {
  const heading = useScrollReveal();
  const river = useScrollReveal();

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-12 lg:mb-14 transition-all duration-700 ${
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

        {/* Desktop: Brand-shape river */}
        <div
          ref={river.ref}
          className={`hidden md:block relative transition-all duration-1000 ${
            river.isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="w-full"
            viewBox="0 0 960 320"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* The gentle river */}
            <path
              d={RIVER}
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="3.5"
              strokeDasharray="14 10"
              strokeLinecap="round"
              opacity="0.25"
            />

            {/* Steps as brand shapes */}
            {desktopPos.map((pos, i) => {
              const step = steps[i];
              const shape = brandShapes[i];
              const isFinal = step.isFinal;

              return (
                <g
                  key={i}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: river.isVisible ? 1 : 0,
                    transform: river.isVisible ? "translateY(0)" : "translateY(10px)",
                    transitionDelay: river.isVisible ? `${i * 0.14}s` : "0s",
                  }}
                >
                  {/* Brand shape as marker */}
                  <svg
                    x={pos.x - shape.w / 2}
                    y={pos.y - shape.h / 2}
                    width={shape.w}
                    height={shape.h}
                    viewBox={shape.vb}
                    opacity={isFinal ? 0.4 : 0.25}
                  >
                    <path d={shape.d} fill={shape.fill} />
                  </svg>

                  {/* Step number overlaid on the shape */}
                  <text
                    x={pos.x}
                    y={pos.y + 2}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isFinal ? "hsl(var(--mollvero-coral))" : "hsl(var(--primary))"}
                    className="text-[20px] font-bold"
                    style={{ fontFamily: "inherit" }}
                  >
                    {step.n}
                  </text>

                  {/* Label */}
                  {pos.labelSide === "right" && (
                    <foreignObject x={pos.x + shape.w / 2 + 8} y={pos.y - 18} width="170" height="56">
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight">{step.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
                      </div>
                    </foreignObject>
                  )}
                  {pos.labelSide === "left" && (
                    <foreignObject x={pos.x - shape.w / 2 - 178} y={pos.y - 18} width="170" height="56">
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground leading-tight">{step.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
                      </div>
                    </foreignObject>
                  )}
                  {pos.labelSide === "bottom" && (
                    <foreignObject x={pos.x - 80} y={pos.y + shape.h / 2 + 6} width="160" height="50">
                      <div className="text-center">
                        <p className="text-sm font-bold text-foreground leading-tight">{step.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
                      </div>
                    </foreignObject>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile: vertical river with brand shapes */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] border-l-[3px] border-dashed border-mollvero-coral/25 rounded-full" />
          <div className="space-y-7 pl-14">
            {steps.map((step, i) => (
              <MobileStep key={i} step={step} shape={brandShapes[i]} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileStep = ({ step, shape, index }: {
  step: (typeof steps)[0];
  shape: (typeof brandShapes)[0];
  index: number;
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
      {/* Brand shape marker */}
      <div className="absolute -left-14 top-0 w-11 h-11 flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={shape.vb}
          opacity={isFinal ? 0.35 : 0.2}
        >
          <path d={shape.d} fill={shape.fill} />
        </svg>
        <span className={`relative text-sm font-bold z-10 ${
          isFinal ? "text-mollvero-coral" : "text-primary"
        }`}>
          {step.n}
        </span>
      </div>
      <div>
        <h3 className="text-base font-bold text-foreground leading-tight">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
