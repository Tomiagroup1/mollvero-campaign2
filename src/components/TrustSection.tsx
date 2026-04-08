import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Výborný pomer cena/kvalita. Vynikajúci a profesionálny prístup od prvého stretnutia, po ktorom naše všeobecné predstavy zhmotnili do originálneho dizajnu. Následne realizáciu s nami priebežne komunikovali až po samotnú montáž. Veľmi oceňujem aj vysokú mieru flexibility, vďaka ktorej boli ochotní zapracovať naše dodatočné pripomienky do rozpracovaného návrhu. Určite sa v budúcnosti obrátim na LUKAMASIV opäť a môžem iba odporučiť.",
    author: "Štefan B.",
  },
  {
    quote:
      "S firmou Lukamasiv sme mali veľmi dobrú skúsenosť. Oceňujem rýchlu komunikáciu hneď od začiatku, profesionálny a ľudský prístup dizajnérky, ktorá vedela usmerniť a pomôcť pri rozhodovaní, a tiež krásne a rýchlo pripravené vizualizácie. Termíny boli dodržané, čo bolo pre nás veľmi dôležité a počas celej spolupráce bola ochota všetko vysvetliť či doladiť podľa potreby. Montáž prebehla dobre a aj keď sa objavili drobné chyby, firma ich bez problémov ochotne vyriešila. Celkovo hodnotím spoluprácu pozitívne a firmu viem určite odporučiť.",
    author: "Petra F.",
  },
  {
    quote:
      "Realizovali pre nás dve zákazky na mieru – skrinku pod TV a regály do komory. Pri skrinke sme mali špecifické požiadavky, ktoré boli do detailu splnené. Materiál je vysokej kvality a výsledné spracovanie po montáži bolo precízne a presné. Pomer cena kvalita vynikajúci. Aj pri regáloch do komory sme mali konkrétne požiadavky, ktoré boli rovnako splnené v prvotriednej kvalite. Oceňujeme krátku dodaciu lehotu, rýchlu komunikáciu a skvelý prístup dizajnérky. V budúcnosti sa na firmu LUKAMASIV určite obrátime opäť.",
    author: "Viktória K.",
  },
];

const TrustSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [current, setCurrent] = useState(0);

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

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)),
    []
  );

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Large decorative coral SVG */}
      <svg
        className="absolute -top-32 -right-48 w-[900px] h-[1100px] opacity-[0.10]"
        viewBox="0 0 229.89 446.69"
        fill="none"
      >
        <path
          d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z"
          fill="hsl(var(--mollvero-coral))"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={ref}>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Čo hovoria naši{" "}
            <span className="font-script font-normal text-primary">zákazníci</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Vážime si vašu dôveru a ďakujeme, že nás stále posúvate vpred. Prečítajte si referencie a hodnotenia spokojných zákazníkov.
          </p>
        </div>

        {/* Testimonial card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
        >
          <div className="relative bg-muted/40 rounded-3xl p-8 md:p-12 border-l-4 border-primary/40">
            {/* Quote mark */}
            <span className="text-primary text-5xl md:text-6xl font-bold leading-none select-none absolute top-6 left-8 md:top-8 md:left-10">
              &#8220;&#8220;
            </span>

            <div className="pt-10 md:pt-8 md:pl-8">
              <p
                key={current}
                className="text-muted-foreground text-lg md:text-xl leading-relaxed italic animate-fade-in"
              >
                {testimonials[current].quote}
              </p>
              <p className="mt-8 font-bold text-foreground text-base">
                {testimonials[current].author}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Predchádzajúca recenzia"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-primary"
                      : "w-2 h-2 bg-primary/30"
                  }`}
                  aria-label={`Recenzia ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
              aria-label="Ďalšia recenzia"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
