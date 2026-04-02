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
