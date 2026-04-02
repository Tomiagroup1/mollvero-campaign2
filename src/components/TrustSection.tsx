import { useEffect, useRef, useState } from "react";
import { Clock, Users, Leaf, Star } from "lucide-react";

const points = [
  {
    icon: Clock,
    text: "Roky skúseností s výrobou nábytku na mieru (pôvodný B2B brand Lukamasiv)",
  },
  {
    icon: Users,
    text: "Slovenský výrobca – žiadni prostredníci, priama komunikácia",
  },
  {
    icon: Leaf,
    text: "Ekologický prístup a udržateľné materiály",
  },
  {
    icon: Star,
    text: "Reálne recenzie a referencie od spokojných zákazníkov",
  },
];

const TrustSection = () => {
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
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative SVGs */}
      <svg className="absolute -top-6 -left-8 w-[280px] h-[220px] opacity-[0.18] animate-float-slower" viewBox="0 0 296.82 235.71" fill="none">
        <path d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z" fill="hsl(var(--mollvero-coral))" />
      </svg>
      <svg className="absolute -bottom-8 -right-6 w-[200px] h-[380px] opacity-[0.14]" viewBox="0 0 229.89 446.69" fill="none">
        <path d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z" fill="hsl(var(--mollvero-green-light))" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Prečo nám dôverujú{" "}
            <span className="font-script font-normal text-primary">stovky zákazníkov</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-6 rounded-2xl border border-border bg-muted/30 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.12 + 0.3}s` : "0s",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-foreground leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
