import { useEffect, useRef, useState } from "react";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const steps = [
  {
    number: "1",
    title: "Registrácia",
    description: "Zaregistrujte sa a počkajte na manuálne schválenie účtu firmou.",
  },
  {
    number: "2",
    title: "Výber nábytku",
    description: "V katalógu si zvoľte kategóriu alebo konkrétny produkt.",
  },
  {
    number: "3",
    title: "Konfigurácia",
    description: "Navolte si rozmery, vnútorné členenie a materiál.",
  },
  {
    number: "4",
    title: "3D kontrola",
    description: "Overte si výsledný vzhľad v 3D modeli.",
  },
  {
    number: "5",
    title: "Objednávka",
    description: "Vložte tovar do košíka a vyplňte svoje údaje.",
  },
  {
    number: "6",
    title: "Platba",
    description: "Dokončite nákup a zaplaťte.",
    isFinal: true,
  },
];

/* 
 * Step positions on the snake path (percentage along the SVG path).
 * Desktop: horizontal S-curve, steps positioned at specific points.
 * Mobile: vertical wave.
 */

const HowItWorksSection = () => {
  const heading = useScrollReveal();
  const section = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
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

        {/* Desktop: Horizontal S-curve journey */}
        <div
          ref={section.ref}
          className={`hidden md:block relative transition-all duration-1000 ${
            section.isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* SVG snake path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 600"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              d="M80,80 C250,80 350,80 500,80 C650,80 750,80 820,80
                 C870,80 870,140 820,160 C750,190 650,200 500,200
                 C350,200 250,200 180,200 C100,200 80,260 130,280
                 C200,310 350,320 500,320 C650,320 750,320 820,320
                 C870,320 870,380 820,400 C750,430 650,440 500,440
                 C350,440 250,440 180,440 C130,440 100,480 130,500
                 C180,530 350,540 500,540"
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              strokeLinecap="round"
              opacity="0.25"
            />
          </svg>

          {/* Steps positioned on the path */}
          <div className="relative z-10" style={{ height: "560px" }}>
            {/* Step 1 — top left */}
            <StepMarker
              step={steps[0]}
              style={{ top: "40px", left: "4%" }}
              labelPosition="bottom"
              delay={0}
              visible={section.isVisible}
            />

            {/* Step 2 — top right */}
            <StepMarker
              step={steps[1]}
              style={{ top: "40px", right: "8%" }}
              labelPosition="bottom"
              delay={0.1}
              visible={section.isVisible}
            />

            {/* Step 3 — mid-right (on the curve going back) */}
            <StepMarker
              step={steps[2]}
              style={{ top: "168px", right: "12%" }}
              labelPosition="bottom"
              delay={0.2}
              visible={section.isVisible}
            />

            {/* Step 4 — mid-left */}
            <StepMarker
              step={steps[3]}
              style={{ top: "168px", left: "8%" }}
              labelPosition="bottom"
              delay={0.3}
              visible={section.isVisible}
            />

            {/* Step 5 — bottom-left */}
            <StepMarker
              step={steps[4]}
              style={{ top: "296px", left: "4%" }}
              labelPosition="bottom"
              delay={0.4}
              visible={section.isVisible}
            />

            {/* Step 6 — bottom-right (the goal) */}
            <StepMarker
              step={steps[5]}
              style={{ top: "420px", left: "40%", transform: "translateX(-50%)" }}
              labelPosition="bottom"
              delay={0.5}
              visible={section.isVisible}
            />
          </div>
        </div>

        {/* Mobile: Vertical wave */}
        <div className="md:hidden relative">
          {/* Vertical dashed line */}
          <div className="absolute left-6 top-0 bottom-0 w-px border-l border-dashed border-mollvero-coral/25" />

          <div className="space-y-8 pl-14">
            {steps.map((step, i) => (
              <MobileStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepMarkerProps {
  step: (typeof steps)[0];
  style: React.CSSProperties;
  labelPosition: "top" | "bottom";
  delay: number;
  visible: boolean;
}

const StepMarker = ({ step, style, delay, visible }: StepMarkerProps) => {
  const isFinal = "isFinal" in step && step.isFinal;

  return (
    <div
      className={`absolute flex flex-col items-center transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ ...style, transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      {/* Circle marker */}
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-sm ${
          isFinal
            ? "border-mollvero-coral bg-mollvero-coral/10 shadow-mollvero-coral/20"
            : "border-primary/20 bg-background"
        }`}
      >
        {isFinal ? (
          <svg className="w-5 h-5 text-mollvero-coral" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ) : (
          <span className="text-lg font-bold text-primary">{step.number}</span>
        )}
      </div>

      {/* Label */}
      <div className="mt-2 text-center max-w-[160px]">
        <h3 className="text-sm lg:text-base font-bold text-foreground leading-tight">{step.title}</h3>
        <p className="text-xs text-muted-foreground leading-snug mt-0.5">{step.description}</p>
      </div>
    </div>
  );
};

interface MobileStepProps {
  step: (typeof steps)[0];
  index: number;
}

const MobileStep = ({ step, index }: MobileStepProps) => {
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
      {/* Dot on the line */}
      <div
        className={`absolute -left-14 top-0 w-10 h-10 rounded-full flex items-center justify-center border ${
          isFinal
            ? "border-mollvero-coral bg-mollvero-coral/10"
            : "border-primary/20 bg-background"
        }`}
      >
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
