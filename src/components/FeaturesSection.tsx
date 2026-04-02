import { useEffect, useRef, useState } from "react";
import { Truck, Monitor, TreePine, Package, Factory } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Dodanie do",
    titleHighlight: "14 dní",
    description:
      "Váš nábytok na mieru u vás doma za dva týždne. Konkurencia čaká mesiace — my doručíme rýchlo a spoľahlivo.",
    accent: "bg-mollvero-coral/20",
    iconColor: "text-mollvero-coral",
  },
  {
    icon: Monitor,
    title: "Online konfigurátor",
    titleHighlight: "",
    description:
      "Prispôsobte si rozmery, materiály aj farby priamo v prehliadači. Jednoducho a intuitívne — bez čakania na showroom.",
    accent: "bg-mollvero-blue-light/30",
    iconColor: "text-mollvero-blue-brand",
  },
  {
    icon: TreePine,
    title: "Kvalita z masívu",
    titleHighlight: "",
    description:
      "Kvalitné materiály, trvácny nábytok. Ekologický prístup s minimálnym odpadom — zodpovedne ku prírode aj k vám.",
    accent: "bg-mollvero-green-light/40",
    iconColor: "text-mollvero-green-dark",
  },
  {
    icon: Package,
    title: "Dovoz a montáž",
    titleHighlight: "bez stresu",
    description:
      "Zabezpečíme dovoz až k vám domov. Každý produkt má jasný návod na montáž — žiadne komplikácie.",
    accent: "bg-mollvero-beige/50",
    iconColor: "text-foreground",
  },
  {
    icon: Factory,
    title: "Slovenský výrobca",
    titleHighlight: "",
    description:
      "Priamo od výrobcu, žiadni prostredníci. Férové ceny bez zbytočných príplatkov — transparentne a čestne.",
    accent: "bg-mollvero-yellow/30",
    iconColor: "text-foreground",
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
  const rows = features.map(() => useScrollReveal());

  return (
    <section className="py-28 lg:py-40 bg-muted/30 relative overflow-hidden">
      {/* Decorative SVGs */}
      <svg
        className="absolute -top-6 -right-8 w-[320px] h-[250px] opacity-[0.18] animate-float-slower"
        viewBox="0 0 296.82 235.71"
        fill="none"
      >
        <path
          d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z"
          fill="hsl(var(--mollvero-yellow))"
        />
      </svg>
      <svg
        className="absolute -bottom-8 -left-6 w-[220px] h-[420px] opacity-[0.14]"
        viewBox="0 0 229.89 446.69"
        fill="none"
      >
        <path
          d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z"
          fill="hsl(var(--mollvero-blue-light))"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-20 lg:mb-28 transition-all duration-700 ${
            heading.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Navrhnite. Objednajte.{" "}
            <span className="font-script font-normal text-primary">
              Doručíme.
            </span>
          </h2>
        </div>

        {/* Z-pattern rows */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.title}
                ref={rows[index].ref}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center transition-all duration-700 ${
                  rows[index].isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                style={{
                  transitionDelay: rows[index].isVisible ? "0.15s" : "0s",
                }}
              >
                {/* Text side */}
                <div
                  className={`${
                    isEven ? "md:order-1" : "md:order-2"
                  } flex flex-col justify-center`}
                >
                  <h3 className="text-2xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                    {feature.title}
                    {feature.titleHighlight && (
                      <>
                        {" "}
                        <span className="text-primary font-script font-normal">
                          {feature.titleHighlight}
                        </span>
                      </>
                    )}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Visual side */}
                <div
                  className={`${
                    isEven ? "md:order-2" : "md:order-1"
                  } flex items-center ${
                    isEven ? "md:justify-end" : "md:justify-start"
                  } justify-center`}
                >
                  <div
                    className={`w-32 h-32 lg:w-44 lg:h-44 ${feature.accent} rounded-full flex items-center justify-center`}
                  >
                    <feature.icon
                      className={`w-14 h-14 lg:w-20 lg:h-20 ${feature.iconColor}`}
                      strokeWidth={1.2}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
