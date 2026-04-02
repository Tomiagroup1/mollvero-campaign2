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

/* Each feature has: icon, title, description, a brand SVG shape, alignment, and color */
const features = [
  {
    icon: Truck,
    title: "Dodanie do",
    highlight: "14 dní",
    description: "Váš nábytok na mieru u vás doma za dva týždne. Konkurencia čaká mesiace.",
    align: "left" as const,
    // Yellow chevron shape (Y Asset 61)
    viewBox: "0 0 296.82 235.71",
    path: "M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z",
    fillVar: "--mollvero-yellow",
    shapeSize: "w-[140px] h-[110px] md:w-[200px] md:h-[160px]",
    shapePos: "right-4 md:right-[10%] top-1/2 -translate-y-1/2",
  },
  {
    icon: Monitor,
    title: "Online konfigurátor",
    highlight: "jednoducho a intuitívne",
    description: "Navrhnite si nábytok priamo v prehliadači — bez čakania, bez kompromisov.",
    align: "right" as const,
    // Blue angular shape (M Asset 40)
    viewBox: "0 0 286.64 325.92",
    path: "M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z",
    fillVar: "--mollvero-blue-light",
    shapeSize: "w-[130px] h-[150px] md:w-[180px] md:h-[200px]",
    shapePos: "left-4 md:left-[10%] top-1/2 -translate-y-1/2",
  },
  {
    icon: TreePine,
    title: "Kvalita z masívu",
    highlight: "ekologický prístup",
    description: "Udržateľné materiály, minimálny odpad. Nábytok, ktorý vydrží generácie.",
    align: "left" as const,
    // Green organic shape (Z Asset 17)
    viewBox: "0 0 253.17 288.09",
    path: "M55.32,288.09c-13.16,0-26.13-4.84-36.75-14.29C.06,257.29-5.14,232.14,5.36,209.74L99.11,9.77c3.98-8.45,14.1-12.12,22.62-8.19,8.51,3.95,12.21,14,8.25,22.45L36.23,223.98c-4.9,10.47-.58,19.57,5.09,24.62,5.67,5.05,15.26,8.3,25.2,2.38l160.82-96.4c8.07-4.82,18.53-2.25,23.38,5.73,4.85,8.01,2.27,18.37-5.77,23.21l-160.82,96.4c-9.1,5.44-19.01,8.14-28.82,8.14v.03Z",
    fillVar: "--mollvero-green-light",
    shapeSize: "w-[130px] h-[150px] md:w-[170px] md:h-[190px]",
    shapePos: "right-4 md:right-[12%] top-1/2 -translate-y-1/2",
  },
  {
    icon: Package,
    title: "Dovoz a montáž",
    highlight: "bez stresu",
    description: "Dovezieme a montáž je hračka. Vy si len užívate výsledok.",
    align: "right" as const,
    // Beige/brown shape (H Asset 50)
    viewBox: "0 0 238.62 325.92",
    path: "M182.6,325.92c-6.67,0-13.41-1.19-19.98-3.68L10.63,265.3c-8.47-3.17-12.75-12.6-9.58-21.07C1.04,244.23,112.52,4.38,120.97,1.11c8.44-3.27,17.9.91,21.2,9.36l92.57,238.9c8.11,20.92,3.35,43.84-12.45,59.79-10.85,10.95-25.02,16.76-39.65,16.76h-.02Z",
    fillVar: "--mollvero-beige",
    shapeSize: "w-[120px] h-[170px] md:w-[160px] md:h-[210px]",
    shapePos: "left-4 md:left-[10%] top-1/2 -translate-y-1/2",
  },
  {
    icon: Factory,
    title: "Slovenský výrobca",
    highlight: "férové ceny",
    description: "Žiadni prostredníci. Priama komunikácia, slovenská kvalita.",
    align: "left" as const,
    // Purple shape (F Asset 22)
    viewBox: "0 0 286.64 325.92",
    path: "M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z",
    fillVar: "--mollvero-purple",
    shapeSize: "w-[140px] h-[160px] md:w-[190px] md:h-[210px]",
    shapePos: "right-4 md:right-[8%] top-1/2 -translate-y-1/2",
  },
];

const FeaturesSection = () => {
  const heading = useScrollReveal();

  return (
    <section className="py-14 lg:py-20 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Navrhnite. Objednajte.{" "}
            <span className="font-script font-normal text-primary">Doručíme.</span>
          </h2>
        </div>

        {/* Organic vertical flow */}
        <div className="flex flex-col gap-8 lg:gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureRowProps {
  feature: typeof features[0];
  index: number;
}

const FeatureRow = ({ feature, index }: FeatureRowProps) => {
  const row = useScrollReveal();
  const isLeft = feature.align === "left";

  return (
    <div
      ref={row.ref}
      className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 transition-all duration-700 ease-out ${
        row.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: row.isVisible ? `${index * 0.08}s` : "0s" }}
    >
      {/* Brand SVG shape — layered behind */}
      <svg
        className={`absolute ${feature.shapePos} ${feature.shapeSize} opacity-[0.25] pointer-events-none transition-all duration-1000 ${
          row.isVisible ? "scale-100 opacity-[0.25]" : "scale-75 opacity-0"
        }`}
        viewBox={feature.viewBox}
        fill="none"
        style={{ transitionDelay: row.isVisible ? `${index * 0.08 + 0.2}s` : "0s" }}
      >
        <path d={feature.path} fill={`hsl(var(${feature.fillVar}))`} />
      </svg>

      {/* Content: text side */}
      <div
        className={`relative z-10 flex-1 ${
          isLeft
            ? "md:text-left md:pr-8"
            : "md:text-right md:pl-8 md:order-2"
        }`}
      >
        <div
          className={`inline-flex items-center gap-3 mb-4 ${
            !isLeft ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center">
            <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.4} />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
          {feature.title}{" "}
          <span className="font-script font-normal text-primary">{feature.highlight}</span>
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
          {feature.description}
        </p>
      </div>

      {/* Visual side: smaller decorative accent shape */}
      <div
        className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 ${
          isLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <svg
          className="w-full h-full opacity-40"
          viewBox={feature.viewBox}
          fill="none"
        >
          <path d={feature.path} fill={`hsl(var(${feature.fillVar}))`} />
        </svg>
      </div>
    </div>
  );
};

export default FeaturesSection;
