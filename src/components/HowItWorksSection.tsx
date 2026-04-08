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

/* Bead positions on the river — the SVG path passes through each cx,cy */
const beads = [
  { cx: 90,  cy: 70,  label: "bottom" as const },
  { cx: 380, cy: 70,  label: "bottom" as const },
  { cx: 720, cy: 130, label: "top" as const },
  { cx: 280, cy: 210, label: "bottom" as const },
  { cx: 620, cy: 270, label: "top" as const },
  { cx: 910, cy: 310, label: "top" as const },
];

/*
 * The river path — one ultra-smooth S-curve that passes through all 6 bead positions.
 * Two gentle waves spanning the full width. No sharp turns.
 */
const RIVER_PATH =
  "M90,70 C200,70 280,70 380,70 C520,70 600,70 720,130 " +
  "C820,180 820,200 720,210 C580,225 380,210 280,210 " +
  "C180,210 160,240 280,270 C420,300 540,270 620,270 " +
  "C740,270 820,280 910,310";

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
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
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

        {/* Desktop: The Artistic River */}
        <div
          ref={river.ref}
          className={`hidden md:block relative transition-all duration-1000 ${
            river.isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="w-full"
            viewBox="0 0 1000 380"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Subtle brand shapes floating in the bends */}
            <ellipse cx="550" cy="150" rx="60" ry="40" fill="hsl(var(--mollvero-beige))" opacity="0.12" />
            <ellipse cx="160" cy="250" rx="45" ry="30" fill="hsl(var(--mollvero-yellow))" opacity="0.08" />
            <circle cx="830" cy="240" r="35" fill="hsl(var(--mollvero-green-light))" opacity="0.07" />

            {/* The River — thick, elegant dashed line */}
            <path
              d={RIVER_PATH}
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="4"
              strokeDasharray="16 10"
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* End flourish — concentric rings at step 6 */}
            <circle cx="910" cy="310" r="30" stroke="hsl(var(--mollvero-coral))" strokeWidth="1" strokeDasharray="4 4" fill="none" opacity="0.15" />
            <circle cx="910" cy="310" r="42" stroke="hsl(var(--mollvero-coral))" strokeWidth="0.8" strokeDasharray="3 5" fill="none" opacity="0.1" />

            {/* Beads — number circles sitting ON the river */}
            {beads.map((b, i) => {
              const step = steps[i];
              const isFinal = step.isFinal;
              const r = 24;

              return (
                <g
                  key={i}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: river.isVisible ? 1 : 0,
                    transform: river.isVisible ? "translateY(0)" : "translateY(8px)",
                    transitionDelay: river.isVisible ? `${i * 0.13}s` : "0s",
                  }}
                >
                  {/* White knockout so the dashed line doesn't show through */}
                  <circle cx={b.cx} cy={b.cy} r={r + 2} fill="hsl(var(--background))" />

                  {/* Circle border */}
                  <circle
                    cx={b.cx}
                    cy={b.cy}
                    r={r}
                    fill={isFinal ? "hsl(var(--mollvero-coral) / 0.08)" : "hsl(var(--background))"}
                    stroke={isFinal ? "hsl(var(--mollvero-coral))" : "hsl(var(--primary) / 0.2)"}
                    strokeWidth="2.5"
                  />

                  {/* Number or star */}
                  {isFinal ? (
                    <path
                      d={`M${b.cx},${b.cy - 8}l2.5,5 5.5,.8-4,3.9 1,5.5-5-2.6-5,2.6 1-5.5-4-3.9 5.5-.8z`}
                      fill="hsl(var(--mollvero-coral))"
                    />
                  ) : (
                    <text
                      x={b.cx}
                      y={b.cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="hsl(var(--primary))"
                      className="text-[17px] font-bold"
                      style={{ fontFamily: "inherit" }}
                    >
                      {step.n}
                    </text>
                  )}

                  {/* Label — floating near the bead */}
                  {b.label === "bottom" && (
                    <foreignObject x={b.cx - 80} y={b.cy + r + 6} width="160" height="56">
                      <div className="text-center">
                        <p className="text-sm font-bold text-foreground leading-tight">{step.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
                      </div>
                    </foreignObject>
                  )}
                  {b.label === "top" && (
                    <foreignObject x={b.cx - 80} y={b.cy - r - 52} width="160" height="50">
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

        {/* Mobile: vertical river */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] border-l-[3px] border-dashed border-mollvero-coral/25 rounded-full" />
          <div className="space-y-7 pl-14">
            {steps.map((step, i) => (
              <MobileStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileStep = ({ step, index }: { step: (typeof steps)[0]; index: number }) => {
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
      <div className={`absolute -left-14 top-0 w-11 h-11 rounded-full flex items-center justify-center border-2 ${
        isFinal ? "border-mollvero-coral bg-mollvero-coral/10" : "border-primary/25 bg-background"
      }`}>
        {isFinal ? (
          <svg className="w-4 h-4 text-mollvero-coral" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ) : (
          <span className="text-sm font-bold text-primary">{step.n}</span>
        )}
      </div>
      <div>
        <h3 className="text-base font-bold text-foreground leading-tight">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-snug mt-0.5">{step.desc}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
