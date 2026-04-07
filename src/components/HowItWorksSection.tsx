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
    number: "01",
    title: "Registrácia",
    description: "Zaregistrujte sa a počkajte na manuálne schválenie účtu firmou.",
  },
  {
    number: "02",
    title: "Výber nábytku",
    description: "V katalógu si zvoľte kategóriu alebo konkrétny produkt.",
  },
  {
    number: "03",
    title: "Konfigurácia",
    description: "Navolte si rozmery, vnútorné členenie a materiál.",
  },
  {
    number: "04",
    title: "3D kontrola",
    description: "Overte si výsledný vzhľad v 3D modeli.",
  },
  {
    number: "05",
    title: "Objednávka",
    description: "Vložte tovar do košíka a vyplňte svoje údaje.",
  },
  {
    number: "06",
    title: "Platba",
    description: "Dokončite nákup a zaplaťte.",
  },
];

const HowItWorksSection = () => {
  const heading = useScrollReveal();

  return (
    <section className="py-20 lg:py-24 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: (typeof steps)[0];
  index: number;
}

const StepCard = ({ step, index }: StepCardProps) => {
  const card = useScrollReveal();

  return (
    <div
      ref={card.ref}
      className={`group transition-all duration-600 ease-out ${
        card.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: card.isVisible ? `${index * 0.08}s` : "0s" }}
    >
      <div className="relative p-6 rounded-2xl border border-border/40 bg-muted/10 hover:bg-muted/30 transition-colors duration-300">
        <span className="text-5xl font-bold text-primary/15 leading-none absolute top-4 right-5 select-none">
          {step.number}
        </span>
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-foreground mb-1.5">{step.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
