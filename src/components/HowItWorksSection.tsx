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

/* Triangle brand shape (M Asset 40 style) used as marker for every step */
const TRIANGLE_VB = "0 0 286.64 325.92";
const TRIANGLE_D =
  "M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z";

/* Triangle colors per step — cycling through brand palette */
const triangleColors = [
  "hsl(var(--mollvero-green-light))",
  "hsl(var(--mollvero-yellow))",
  "hsl(var(--mollvero-beige))",
  "hsl(var(--mollvero-green-light))",
  "hsl(var(--mollvero-yellow))",
  "hsl(var(--mollvero-coral))",
];

/* Step positions — spread out vertically for breathing room */
const desktopPos = [
  { x: 100,  y: 60,   labelSide: "right" as const },
  { x: 440,  y: 110,  labelSide: "right" as const },
  { x: 780,  y: 190,  labelSide: "left" as const },
  { x: 260,  y: 300,  labelSide: "right" as const },
  { x: 580,  y: 380,  labelSide: "left" as const },
  { x: 880,  y: 440,  labelSide: "bottom" as const },
];

/* Gentle river — only 2 soft sweeping curves */
const RIVER =
  "M100,80 C220,80 340,85 440,110 " +
  "Q580,145 700,170 Q840,200 800,220 " +
  "Q740,250 580,270 Q420,285 300,300 " +
  "Q180,315 220,340 Q320,375 460,380 " +
  "Q640,385 750,400 Q860,415 900,450";

const TW = 55;
const TH = 64;

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
          className={`text-center mb-14 lg:mb-16 transition-all duration-700 ${
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
            viewBox="0 0 1000 520"
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
              opacity="0.22"
            />

            {/* Steps — triangle markers on the path */}
            {desktopPos.map((pos, i) => {
              const step = steps[i];
              const isFinal = step.isFinal;
              const color = triangleColors[i];

              return (
                <g
                  key={i}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: river.isVisible ? 1 : 0,
                    transform: river.isVisible ? "translateY(0)" : "translateY(12px)",
                    transitionDelay: river.isVisible ? `${i * 0.14}s` : "0s",
                  }}
                >
                  {/* Triangle brand shape */}
                  <svg
                    x={pos.x - TW / 2}
                    y={pos.y - TH / 2}
                    width={TW}
                    height={TH}
                    viewBox={TRIANGLE_VB}
                    opacity={isFinal ? 0.5 : 0.3}
                  >
                    <path d={TRIANGLE_D} fill={color} />
                  </svg>

                  {/* Step number centered on triangle */}
                  <text
                    x={pos.x}
                    y={pos.y + 4}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isFinal ? "hsl(var(--mollvero-coral))" : "hsl(var(--foreground))"}
                    className="text-[22px] font-bold"
                    style={{ fontFamily: "inherit" }}
                  >
                    {step.n}
                  </text>

                  {/* Label */}
                  {pos.labelSide === "right" && (
                    <foreignObject x={pos.x + TW / 2 + 10} y={pos.y - 20} width="190" height="60">
                      <div>
                        <p className="text-base font-extrabold text-foreground leading-tight">{step.title}</p>
                        <p className="text-xs text-muted-foreground leading-snug mt-1">{step.desc}</p>
                      </div>
                    </foreignObject>
                  )}
                  {pos.labelSide === "left" && (
                    <foreignObject x={pos.x - TW / 2 - 200} y={pos.y - 20} width="190" height="60">
                      <div className="text-right">
                        <p className="text-base font-extrabold text-foreground leading-tight">{step.title}</p>
                        <p className="text-xs text-muted-foreground leading-snug mt-1">{step.desc}</p>
                      </div>
                    </foreignObject>
                  )}
                  {pos.labelSide === "bottom" && (
                    <foreignObject x={pos.x - 90} y={pos.y + TH / 2 + 6} width="180" height="55">
                      <div className="text-center">
                        <p className="text-base font-extrabold text-foreground leading-tight">{step.title}</p>
                        <p className="text-xs text-muted-foreground leading-snug mt-1">{step.desc}</p>
                      </div>
                    </foreignObject>
                  )}
                </g>
              );
            })}

            {/* End flourish at step 6 */}
            <circle cx={880} cy={440} r="35" stroke="hsl(var(--mollvero-coral))" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.12" />
          </svg>
        </div>

        {/* Mobile: vertical river */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] border-l-[3px] border-dashed border-mollvero-coral/20 rounded-full" />
          <div className="space-y-8 pl-16">
            {steps.map((step, i) => (
              <MobileStep key={i} step={step} color={triangleColors[i]} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileStep = ({ step, color, index }: {
  step: (typeof steps)[0];
  color: string;
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
      {/* Triangle marker */}
      <div className="absolute -left-16 top-0 w-12 h-14 flex items-center justify-center">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox={TRIANGLE_VB}
          opacity={isFinal ? 0.4 : 0.25}
        >
          <path d={TRIANGLE_D} fill={color} />
        </svg>
        <span className={`relative text-sm font-bold z-10 ${
          isFinal ? "text-mollvero-coral" : "text-foreground"
        }`}>
          {step.n}
        </span>
      </div>
      <div>
        <h3 className="text-base font-extrabold text-foreground leading-tight">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
