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

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
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

        {/* S-curve journey */}
        <div className="relative">
          {/* Dashed connecting path — SVG */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 800 1200"
            fill="none"
          >
            <path
              d="M400,0 C400,40 400,60 400,100 C400,140 200,160 200,200 C200,240 600,280 600,320 C600,360 200,400 200,440 C200,480 600,520 600,560 C600,600 200,640 200,680 C200,720 600,760 600,800 C600,840 200,880 200,920 C200,960 600,1000 600,1040 C600,1080 400,1100 400,1140 C400,1160 400,1180 400,1200"
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="2"
              strokeDasharray="8 8"
              strokeLinecap="round"
              opacity="0.25"
            />
          </svg>

          {/* Steps */}
          <div className="relative z-10 space-y-6 lg:space-y-8">
            {steps.map((step, index) => (
              <StepRow key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepRowProps {
  step: (typeof steps)[0];
  index: number;
}

const StepRow = ({ step, index }: StepRowProps) => {
  const row = useScrollReveal();
  const isEven = index % 2 === 0;
  const isFinal = "isFinal" in step && step.isFinal;

  return (
    <div
      ref={row.ref}
      className={`flex items-center gap-5 lg:gap-8 transition-all duration-700 ease-out ${
        isEven ? "flex-row" : "flex-row-reverse"
      } ${
        row.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: row.isVisible ? `${index * 0.1}s` : "0s" }}
    >
      {/* Number marker */}
      <div className="flex-shrink-0 relative">
        <div
          className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
            isFinal
              ? "border-mollvero-coral bg-mollvero-coral/10"
              : "border-primary/20 bg-muted/30"
          }`}
        >
          {isFinal ? (
            <svg className="w-6 h-6 text-mollvero-coral" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <span className="text-xl lg:text-2xl font-bold text-primary">{step.number}</span>
          )}
        </div>
        {/* Connector dot */}
        {index < steps.length - 1 && (
          <div className="absolute -bottom-4 lg:-bottom-5 left-1/2 -translate-x-1/2 w-1 h-3 lg:h-4 border-l-2 border-dashed border-primary/15" />
        )}
      </div>

      {/* Text */}
      <div className={`flex-1 ${isEven ? "text-left" : "text-right"} max-w-sm ${isEven ? "" : "ml-auto"}`}>
        <h3 className="text-lg lg:text-xl font-bold text-foreground mb-0.5">{step.title}</h3>
        <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
