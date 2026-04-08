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
          {/* SVG snake path — thick, smooth S-curve */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 520"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              d="M60,70 C200,70 300,70 450,70 C600,70 700,70 840,70
                 C890,70 890,150 840,170 C750,200 600,210 450,210
                 C300,210 200,210 120,210 C60,210 60,290 120,310
                 C200,340 300,350 450,350 C600,350 700,350 840,350
                 C890,350 890,430 840,450 C750,470 600,470 500,470"
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="3"
              strokeDasharray="10 8"
              strokeLinecap="round"
              opacity="0.35"
            />
          </svg>

          {/* Steps positioned directly on the path */}
          <div className="relative z-10" style={{ height: "520px" }}>
            {/* Step 1 — top left, on the line */}
            <StepMarker
              step={steps[0]}
              style={{ top: "34px", left: "3%" }}
              delay={0}
              visible={section.isVisible}
            />

            {/* Step 2 — top right */}
            <StepMarker
              step={steps[1]}
              style={{ top: "34px", right: "5%" }}
              delay={0.12}
              visible={section.isVisible}
            />

            {/* Step 3 — second row, right side (curve back) */}
            <StepMarker
              step={steps[2]}
              style={{ top: "174px", right: "10%" }}
              delay={0.24}
              visible={section.isVisible}
            />

            {/* Step 4 — second row, left side */}
            <StepMarker
              step={steps[3]}
              style={{ top: "174px", left: "3%" }}
              delay={0.36}
              visible={section.isVisible}
            />

            {/* Step 5 — third row, left */}
            <StepMarker
              step={steps[4]}
              style={{ top: "314px", left: "3%" }}
              delay={0.48}
              visible={section.isVisible}
            />

            {/* Step 6 — bottom center (the goal) */}
            <StepMarker
              step={steps[5]}
              style={{ top: "414px", left: "45%", transform: "translateX(-50%)" }}
              delay={0.6}
              visible={section.isVisible}
            />
          </div>
        </div>

        {/* Mobile: Vertical wave */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] border-l-[3px] border-dashed border-mollvero-coral/30" />

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
      {/* Circle marker sitting ON the line */}
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-md ${
          isFinal
            ? "border-mollvero-coral bg-mollvero-coral/10 shadow-mollvero-coral/20"
            : "border-primary/30 bg-background"
        }`}
      >
        {isFinal ? (
          <svg className="w-5 h-5 text-mollvero-coral" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ) : (
          <span className="text-xl font-bold text-primary">{step.number}</span>
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
      <div
        className={`absolute -left-14 top-0 w-11 h-11 rounded-full flex items-center justify-center border-2 ${
          isFinal
            ? "border-mollvero-coral bg-mollvero-coral/10"
            : "border-primary/30 bg-background"
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
