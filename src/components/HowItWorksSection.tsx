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
  { number: "1", title: "Registrácia", description: "Zaregistrujte sa a počkajte na manuálne schválenie účtu firmou." },
  { number: "2", title: "Výber nábytku", description: "V katalógu si zvoľte kategóriu alebo konkrétny produkt." },
  { number: "3", title: "Konfigurácia", description: "Navolte si rozmery, vnútorné členenie a materiál." },
  { number: "4", title: "3D kontrola", description: "Overte si výsledný vzhľad v 3D modeli." },
  { number: "5", title: "Objednávka", description: "Vložte tovar do košíka a vyplňte svoje údaje." },
  { number: "6", title: "Platba", description: "Dokončite nákup a zaplaťte.", isFinal: true },
];

/* Desktop step positions — asymmetric, organic placement along the river */
const desktopPositions: Array<{
  top: string; left?: string; right?: string;
  labelSide: "right" | "left" | "bottom";
}> = [
  { top: "10px",  left: "8%",   labelSide: "right" },
  { top: "55px",  right: "12%", labelSide: "left" },
  { top: "155px", left: "28%",  labelSide: "right" },
  { top: "245px", right: "18%", labelSide: "left" },
  { top: "320px", left: "14%",  labelSide: "right" },
  { top: "395px", left: "44%",  labelSide: "bottom" },
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

        {/* Desktop: The River */}
        <div
          ref={section.ref}
          className={`hidden md:block relative transition-all duration-1000 ${
            section.isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ height: "480px" }}
        >
          {/* The River — one continuous organic SVG path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 900 480"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* Main river path — organic S-curve with varying curvature */}
            <path
              d="M95,35
                 C180,35 320,50 420,70
                 C560,96 680,78 800,80
                 C860,81 870,110 820,130
                 C720,170 480,155 340,180
                 C240,198 200,220 260,250
                 C340,290 520,275 680,270
                 C780,266 830,290 790,320
                 C730,360 560,350 420,345
                 C300,340 220,360 240,390
                 C270,425 380,430 460,425"
              stroke="hsl(var(--mollvero-coral))"
              strokeWidth="3.5"
              strokeDasharray="12 8"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Flourish at the end — small spiral/star burst */}
            <circle cx="460" cy="425" r="6" fill="hsl(var(--mollvero-coral))" opacity="0.2" />
            <circle cx="460" cy="425" r="12" stroke="hsl(var(--mollvero-coral))" strokeWidth="1.5" strokeDasharray="3 3" fill="none" opacity="0.2" />
          </svg>

          {/* Steps — asymmetrically placed along the river */}
          {steps.map((step, i) => (
            <RiverStop
              key={i}
              step={step}
              position={desktopPositions[i]}
              delay={i * 0.12}
              visible={section.isVisible}
            />
          ))}
        </div>

        {/* Mobile: Vertical river */}
        <div className="md:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-[3px] border-l-[3px] border-dashed border-mollvero-coral/25 rounded-full" />
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

/* A single stop on the river — number circle + floating label */
const RiverStop = ({
  step,
  position,
  delay,
  visible,
}: {
  step: (typeof steps)[0];
  position: (typeof desktopPositions)[0];
  delay: number;
  visible: boolean;
}) => {
  const isFinal = "isFinal" in step && step.isFinal;

  const posStyle: React.CSSProperties = {
    top: position.top,
    ...(position.left ? { left: position.left } : {}),
    ...(position.right ? { right: position.right } : {}),
    transitionDelay: visible ? `${delay}s` : "0s",
  };

  return (
    <div
      className={`absolute transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={posStyle}
    >
      <div className={`flex items-center gap-3 ${
        position.labelSide === "left" ? "flex-row-reverse" : ""
      } ${position.labelSide === "bottom" ? "flex-col" : ""}`}>
        {/* Number circle */}
        <div
          className={`w-14 h-14 rounded-full flex items-center justify-center border-2 shadow-lg shrink-0 ${
            isFinal
              ? "border-mollvero-coral bg-mollvero-coral/10 shadow-mollvero-coral/25"
              : "border-primary/25 bg-background shadow-primary/10"
          }`}
        >
          {isFinal ? (
            <svg className="w-6 h-6 text-mollvero-coral" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <span className="text-xl font-bold text-primary">{step.number}</span>
          )}
        </div>

        {/* Floating label */}
        <div className={`max-w-[180px] ${
          position.labelSide === "left" ? "text-right" : ""
        } ${position.labelSide === "bottom" ? "text-center" : ""}`}>
          <h3 className="text-sm lg:text-base font-bold text-foreground leading-tight">{step.title}</h3>
          <p className="text-xs text-muted-foreground leading-snug mt-0.5">{step.description}</p>
        </div>
      </div>
    </div>
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
      <div
        className={`absolute -left-14 top-0 w-11 h-11 rounded-full flex items-center justify-center border-2 ${
          isFinal
            ? "border-mollvero-coral bg-mollvero-coral/10"
            : "border-primary/25 bg-background"
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
