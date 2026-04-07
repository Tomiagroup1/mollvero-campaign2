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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 lg:px-12 relative">
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

        {/* Snake journey */}
        <div className="relative">
          {/* Flowing S-curve dashed path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 600 900"
            fill="none"
          >
            <path
              d="M300,0 
                 C300,30 300,50 300,75
                 Q300,110 180,120 Q60,130 60,150
                 Q60,170 180,180 Q540,200 540,150
                 C540,130 540,170 540,200
                 Q540,240 420,250 Q300,260 300,280
                 Q300,300 420,310 Q540,320 540,340
                 C540,360 540,350 540,370
                 Q540,400 420,410 Q60,440 60,460
                 Q60,480 180,490 Q300,500 300,520
                 C300,540 300,530 300,550
                 Q300,580 180,590 Q60,600 60,620
                 Q60,640 180,650 Q540,670 540,690
                 C540,710 540,700 540,720
                 Q540,750 420,760 Q300,770 300,790
                 Q300,810 300,830 Q300,860 300,900"
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              opacity="0.2"
            />
          </svg>

          {/* Steps in snake layout */}
          <div className="relative z-10 space-y-4">
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

  // Snake positioning: alternate sides with varying offsets
  const offsets = [
    "ml-0 mr-auto",           // step 1: left
    "ml-auto mr-0",           // step 2: right
    "ml-8 mr-auto",           // step 3: left-ish
    "ml-auto mr-8",           // step 4: right-ish
    "ml-4 mr-auto",           // step 5: left
    "mx-auto",                // step 6: center
  ];

  return (
    <div
      ref={row.ref}
      className={`flex items-center gap-4 max-w-[20rem] transition-all duration-700 ease-out ${offsets[index]} ${
        row.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: row.isVisible ? `${index * 0.08}s` : "0s" }}
    >
      {/* Number circle */}
      <div className="flex-shrink-0">
        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors duration-500 ${
            isFinal
              ? "border-mollvero-coral bg-mollvero-coral/10"
              : "border-primary/15 bg-muted/20"
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
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-base lg:text-lg font-bold text-foreground leading-tight">{step.title}</h3>
        <p className="text-sm text-muted-foreground leading-snug mt-0.5">{step.description}</p>
      </div>
    </div>
  );
};

export default HowItWorksSection;
