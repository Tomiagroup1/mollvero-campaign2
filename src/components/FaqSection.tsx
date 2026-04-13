import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Musím niečo platiť vopred?",
    a: "Nie. Registrácia je zadarmo. Platíte až keď si nábytok skutočne objednáte.",
  },
  {
    q: "Ako dlho trvá, kým dostanem prístup do konfigurátora?",
    a: "Konto vám vytvoríme do niekoľkých hodín od registrácie. Prístupové údaje prídu e-mailom.",
  },
  {
    q: "Aký nábytok si môžem nakonfigurovať?",
    a: "Skrine, obývačkové steny, spálňový nábytok a ďalšie. Všetko na mieru.",
  },
  {
    q: "Aká je dodacia doba?",
    a: "Do 14 dní od prijatia platby máte nábytok doma.",
  },
  {
    q: "Čo ak si neviem poradiť s konfigurátorom?",
    a: "Náš tím vám pomôže cez chat, e-mail alebo telefonicky. Nie ste v tom sami.",
  },
];

const FaqSection = () => {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl relative" ref={ref}>
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Časté{" "}
            <span className="font-script font-normal text-primary">otázky</span>
          </h2>
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
