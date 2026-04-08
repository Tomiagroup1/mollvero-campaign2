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
  { number: "1", title: "Registrácia", description: "Zaregistrujte sa a počkajte na schválenie účtu." },
  { number: "2", title: "Výber nábytku", description: "Zvoľte si kategóriu alebo konkrétny produkt." },
  { number: "3", title: "Konfigurácia", description: "Navolte rozmery, členenie a materiál." },
  { number: "4", title: "3D kontrola", description: "Overte si výsledný vzhľad v 3D modeli." },
  { number: "5", title: "Objednávka", description: "Vložte tovar do košíka a vyplňte údaje." },
  { number: "6", title: "Platba", description: "Dokončite nákup a zaplaťte.", isFinal: true },
];

/*
 * Positions along the ultra-smooth 2-wave S-curve.
 * The SVG viewBox is 1000 x 340. Steps hug the path tightly.
 * labelSide controls where text floats relative to the circle.
 */
const positions: Array<{
  cx: number; cy: number;
  labelSide: "right" | "left" | "bottom";
}> = [
  { cx: 80,  cy: 60,  labelSide: "right" },
  { cx: 420, cy: 60,  labelSide: "right" },
  { cx: 780, cy: 110, labelSide: "left" },
  { cx: 220, cy: 200, labelSide: "right" },
  { cx: 580, cy: 260, labelSide: "left" },
  { cx: 880, cy: 300, labelSide: "bottom" },
];

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

        {/* Desktop river */}
        <div
          ref={river.ref}
          className={`hidden md:block relative transition-all duration-1000 ${
            river.isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg
            className="w-full"
            viewBox="0 0 1000 340"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Ultra-smooth 2-wave S-curve — large gentle arcs */}
            <path
              d="M60,60
                 C200,60 300,60 450,60
                 Q600,60 750,110
                 Q900,160 750,200
                 Q600,240 450,250
                 Q300,260 400,280
                 Q550,300 900,300"
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="3"
              strokeDasharray="14 10"
              strokeLinecap="round"
              opacity="0.28"
            />

            {/* End flourish */}
            <circle cx="900" cy="300" r="8" fill="hsl(var(--mollvero-coral))" opacity="0.15" />
            <circle cx="900" cy="300" r="16" stroke="hsl(var(--mollvero-coral))" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity="0.15" />

            {/* Step markers directly on the path */}
            {positions.map((pos, i) => {
              const step = steps[i];
              const isFinal = "isFinal" in step && step.isFinal;
              return (
                <g
                  key={i}
                  className={`transition-all duration-700 ease-out ${
                    river.isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: river.isVisible ? `${i * 0.12}s` : "0s" }}
                >
                  {/* Circle */}
                  <circle
                    cx={pos.cx}
                    cy={pos.cy}
                    r="22"
                    fill="hsl(var(--background))"
                    stroke={isFinal ? "hsl(var(--mollvero-coral))" : "hsl(var(--primary) / 0.25)"}
                    strokeWidth="2"
                  />
                  {isFinal ? (
                    <path
                      d={`M${pos.cx},${pos.cy - 10} l3.09,6.26 6.91,1.01 -5,4.87 1.18,6.88 -6.18,-3.25 -6.18,3.25 1.18,-6.88 -5,-4.87 6.91,-1.01z`}
                      fill="hsl(var(--mollvero-coral))"
                    />
                  ) : (
                    <text
                      x={pos.cx}
                      y={pos.cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                      className="fill-primary text-[18px] font-bold"
                      style={{ fontFamily: "inherit" }}
                    >
                      {step.number}
                    </text>
                  )}

                  {/* Label */}
                  {pos.labelSide === "right" && (
                    <foreignObject x={pos.cx + 30} y={pos.cy - 20} width="160" height="60">
                      <div>
                        <p className="text-sm font-bold text-foreground leading-tight">{step.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.description}</p>
                      </div>
                    </foreignObject>
                  )}
                  {pos.labelSide === "left" && (
                    <foreignObject x={pos.cx - 190} y={pos.cy - 20} width="160" height="60">
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground leading-tight">{step.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.description}</p>
                      </div>
                    </foreignObject>
                  )}
                  {pos.labelSide === "bottom" && (
                    <foreignObject x={pos.cx - 80} y={pos.cy + 28} width="160" height="50">
                      <div className="text-center">
                        <p className="text-sm font-bold text-foreground leading-tight">{step.title}</p>
                        <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{step.description}</p>
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
          <span className="text-sm font-bold text-primary">{step.number}</span>
        )}
      </div>
      <div>
        <h3 className="text-base font-bold text-foreground leading-tight">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-snug mt-0.5">{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
