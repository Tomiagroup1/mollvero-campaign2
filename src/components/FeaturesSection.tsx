import { useEffect, useRef, useState } from "react";
import { Truck, Monitor, TreePine, Package, Factory } from "lucide-react";

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
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const features = [
  {
    icon: Truck,
    title: "Dodanie do 14 dní",
    desc: "Váš nábytok na mieru u vás doma za dva týždne. Konkurencia čaká mesiace.",
    wide: true,
  },
  {
    icon: Monitor,
    title: "Online konfigurátor",
    desc: "Prispôsobte si rozmery, materiály aj farby priamo v prehliadači.",
    wide: false,
  },
  {
    icon: TreePine,
    title: "Kvalita z masívu",
    desc: "Ekologický prístup, udržateľné materiály, minimálny odpad.",
    wide: false,
  },
  {
    icon: Package,
    title: "Dovoz a montáž",
    desc: "Bez stresu — dovezieme a montáž je hračka.",
    wide: false,
  },
  {
    icon: Factory,
    title: "Slovenský výrobca",
    desc: "Žiadni prostredníci. Férové ceny, priama komunikácia.",
    wide: false,
  },
];

const FeaturesSection = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-14 lg:mb-16 transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Navrhnite. Objednajte.{" "}
            <span className="font-script font-normal text-primary">Doručíme.</span>
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={grid.ref}
          className={`space-y-6 transition-all duration-700 ${grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          {/* Row 1: 2:1 ratio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(0, 2).map((f, i) => (
              <div
                key={i}
                className={`${i === 0 ? "md:col-span-2" : "md:col-span-1"} rounded-xl border border-black/[0.05] bg-background p-6 lg:p-8 flex flex-col gap-3 transition-shadow duration-500 hover:shadow-md`}
                style={{ transitionDelay: grid.isVisible ? `${i * 0.1 + 0.1}s` : "0s" }}
              >
                <f.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-foreground leading-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.slice(2).map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-black/[0.05] bg-background p-6 lg:p-8 flex flex-col gap-3 transition-shadow duration-500 hover:shadow-md"
                style={{ transitionDelay: grid.isVisible ? `${(i + 2) * 0.1 + 0.1}s` : "0s" }}
              >
                <f.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-foreground leading-tight">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
