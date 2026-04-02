import { useEffect, useRef, useState } from "react";
import { Truck, Monitor, TreePine, Package, Factory } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Dodanie do 14 dní",
    description: "Váš nábytok na mieru u vás doma za dva týždne. Konkurencia čaká mesiace.",
    accent: "bg-mollvero-coral/20",
  },
  {
    icon: Monitor,
    title: "Online konfigurátor",
    description: "Prispôsobte si rozmery, materiály aj farby priamo v prehliadači. Jednoducho a intuitívne.",
    accent: "bg-mollvero-blue-light",
  },
  {
    icon: TreePine,
    title: "Kvalita z masívu",
    description: "Kvalitné materiály, trvácny nábytok. Ekologický prístup s minimálnym odpadom.",
    accent: "bg-mollvero-green-light",
  },
  {
    icon: Package,
    title: "Dovoz a montáž",
    description: "Zabezpečíme dovoz až k vám. Každý produkt má jasný návod na montáž.",
    accent: "bg-mollvero-beige",
  },
  {
    icon: Factory,
    title: "Slovenský výrobca",
    description: "Priamo od výrobcu, žiadni prostredníci. Férové ceny bez zbytočných príplatkov.",
    accent: "bg-mollvero-yellow/40",
  },
];

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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const FeaturesSection = () => {
  const heading = useScrollReveal();
  const cards = features.map(() => useScrollReveal());

  return (
    <section className="py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
      {/* Brand wave — top right */}
      <svg className="absolute -top-6 -right-8 w-[320px] h-[250px] opacity-[0.18] animate-float-slower" viewBox="0 0 296.82 235.71" fill="none">
        <path d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z" fill="hsl(var(--mollvero-yellow))" />
      </svg>

      {/* Brand swoosh — bottom left */}
      <svg className="absolute -bottom-8 -left-6 w-[220px] h-[420px] opacity-[0.14]" viewBox="0 0 229.89 446.69" fill="none">
        <path d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z" fill="hsl(var(--mollvero-blue-light))" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div
          ref={heading.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Navrhnite. Objednajte.{" "}
            <span className="font-script font-normal text-primary">Doručíme.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={cards[index].ref}
              className={`group relative p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                cards[index].isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: cards[index].isVisible ? `${index * 0.1 + 0.2}s` : "0s",
                transitionDuration: "0.7s",
              }}
            >
              <div
                className={`w-14 h-14 ${feature.accent} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
