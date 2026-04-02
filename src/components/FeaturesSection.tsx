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

const FeaturesSection = () => {
  const heading = useScrollReveal();
  const grid = useScrollReveal();

  return (
    <section className="py-28 lg:py-40 bg-muted/30 relative overflow-hidden">
      {/* Decorative SVGs */}
      <svg className="absolute -top-6 -right-8 w-[320px] h-[250px] opacity-[0.18] animate-float-slower" viewBox="0 0 296.82 235.71" fill="none">
        <path d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z" fill="hsl(var(--mollvero-yellow))" />
      </svg>
      <svg className="absolute -bottom-8 -left-6 w-[220px] h-[420px] opacity-[0.14]" viewBox="0 0 229.89 446.69" fill="none">
        <path d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z" fill="hsl(var(--mollvero-blue-light))" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Navrhnite. Objednajte.{" "}
            <span className="font-script font-normal text-primary">Doručíme.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={grid.ref}
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 auto-rows-[minmax(140px,auto)] transition-all duration-700 ${grid.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          {/* Tile 1 — Large hero tile: 14 dní (spans 2 cols, 2 rows) */}
          <div
            className="col-span-2 row-span-2 rounded-3xl bg-mollvero-coral/10 border border-border p-6 lg:p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500"
            style={{ transitionDelay: grid.isVisible ? "0.1s" : "0s" }}
          >
            <Truck className="w-8 h-8 text-mollvero-coral mb-3" strokeWidth={1.4} />
            <div>
              <p className="text-4xl lg:text-6xl font-bold text-foreground leading-none mb-2">
                14 <span className="text-primary font-script font-normal text-3xl lg:text-5xl">dní</span>
              </p>
              <p className="text-base lg:text-lg font-semibold text-foreground mb-1">Dodanie do 14 dní</p>
              <p className="text-muted-foreground leading-relaxed">
                Váš nábytok na mieru u vás doma za dva týždne. Konkurencia čaká mesiace.
              </p>
            </div>
          </div>

          {/* Tile 2 — Compact icon tile: Online konfigurátor */}
          <div
            className="col-span-1 rounded-3xl bg-mollvero-blue-light/20 border border-border p-6 lg:p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500"
            style={{ transitionDelay: grid.isVisible ? "0.2s" : "0s" }}
          >
            <Monitor className="w-9 h-9 text-mollvero-blue-brand" strokeWidth={1.4} />
            <div className="mt-auto">
              <p className="text-lg font-bold text-foreground mb-1">Online konfigurátor</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jednoducho a intuitívne — priamo v prehliadači.
              </p>
            </div>
          </div>

          {/* Tile 3 — Compact icon tile: Kvalita z masívu */}
          <div
            className="col-span-1 rounded-3xl bg-mollvero-green-light/30 border border-border p-6 lg:p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500"
            style={{ transitionDelay: grid.isVisible ? "0.25s" : "0s" }}
          >
            <TreePine className="w-9 h-9 text-mollvero-green-dark" strokeWidth={1.4} />
            <div className="mt-auto">
              <p className="text-lg font-bold text-foreground mb-1">Kvalita z masívu</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ekologický prístup, udržateľné materiály, minimálny odpad.
              </p>
            </div>
          </div>

          {/* Tile 4 — Wide tile: Dovoz a montáž (spans 1 col on mobile, 1 on desktop) */}
          <div
            className="col-span-1 rounded-3xl bg-mollvero-beige/40 border border-border p-6 lg:p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500"
            style={{ transitionDelay: grid.isVisible ? "0.3s" : "0s" }}
          >
            <Package className="w-9 h-9 text-foreground" strokeWidth={1.4} />
            <div className="mt-auto">
              <p className="text-lg font-bold text-foreground mb-1">Dovoz a montáž</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bez stresu — dovezieme a montáž je hračka.
              </p>
            </div>
          </div>

          {/* Tile 5 — Statement tile: Slovenský výrobca */}
          <div
            className="col-span-1 rounded-3xl bg-mollvero-yellow/20 border border-border p-6 lg:p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-500"
            style={{ transitionDelay: grid.isVisible ? "0.35s" : "0s" }}
          >
            <Factory className="w-9 h-9 text-foreground" strokeWidth={1.4} />
            <div className="mt-auto">
              <p className="text-lg font-bold text-foreground mb-1">Slovenský výrobca</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Žiadni prostredníci. Férové ceny, priama komunikácia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
