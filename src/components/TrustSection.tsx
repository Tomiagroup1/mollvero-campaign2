import { useEffect, useRef, useState } from "react";
import { Clock, Users, Leaf, Star } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "Roky skúseností",
    desc: "Dlhoročné skúsenosti s výrobou nábytku na mieru (pôvodný B2B brand Lukamasiv).",
  },
  {
    icon: Users,
    title: "Priama komunikácia",
    desc: "Slovenský výrobca – žiadni prostredníci, férové ceny.",
  },
  {
    icon: Leaf,
    title: "Ekologický prístup",
    desc: "Udržateľné materiály a minimálny odpad pri výrobe.",
  },
  {
    icon: Star,
    title: "Overené recenzie",
    desc: "Reálne referencie od spokojných zákazníkov po celom Slovensku.",
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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        <div
          className={`text-center mb-14 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Prečo nám dôverujú{" "}
            <span className="font-script font-normal text-primary">stovky zákazníkov</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className={`rounded-xl border border-black/[0.05] bg-muted/30 p-6 lg:p-8 flex flex-col gap-3 transition-all duration-700 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.1 + 0.2}s` : "0s",
              }}
            >
              <point.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-foreground leading-tight">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
