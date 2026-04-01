import { Hammer, Ruler, Clock } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Ručná výroba",
    description:
      "Každý kus nábytku je vyrobený s precíznosťou a láskou k remeslu. Masívne drevo a prvotriedne materiály.",
    accent: "bg-mollvero-green-light",
  },
  {
    icon: Ruler,
    title: "Na mieru",
    description:
      "Nábytok prispôsobený vášmu priestoru a štýlu. 3D návrh zdarma pre dokonalú predstavu.",
    accent: "bg-mollvero-beige",
  },
  {
    icon: Clock,
    title: "Od roku 1997",
    description:
      "Viac ako 25 rokov skúseností s výrobou nábytku na Slovensku. Rodinná firma s tradíciou.",
    accent: "bg-mollvero-blue-light",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-muted/40 relative overflow-hidden">
      {/* Brand wave background */}
      <svg className="absolute top-6 right-6 w-[240px] h-[190px] opacity-[0.06]" viewBox="0 0 296.82 235.71" fill="none">
        <path d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z" fill="hsl(var(--mollvero-green-light))" />
      </svg>
      {/* Brand vertical bars */}
      <svg className="absolute bottom-10 left-8 w-[16px] h-[200px] opacity-[0.08]" viewBox="0 0 33.47 413.22" fill="none">
        <path d="M0,16.73C0,7.49,7.49,0,16.73,0s16.73,7.49,16.73,16.73v379.76c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73V16.73Z" fill="hsl(var(--mollvero-beige))" />
      </svg>
      <svg className="absolute bottom-10 left-14 w-[16px] h-[160px] opacity-[0.06]" viewBox="0 0 33.47 413.22" fill="none">
        <path d="M0,16.73C0,7.49,7.49,0,16.73,0s16.73,7.49,16.73,16.73v379.76c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73V16.73Z" fill="hsl(var(--mollvero-yellow))" />
      </svg>
      {/* Brand swoosh bottom right */}
      <svg className="absolute -bottom-10 -right-10 w-[200px] h-[380px] opacity-[0.05] rotate-[180deg]" viewBox="0 0 229.89 446.69" fill="none">
        <path d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z" fill="hsl(var(--mollvero-blue-light))" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Kvalita, ktorú{" "}
            <span className="font-script font-normal text-primary">cítite</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`w-14 h-14 ${feature.accent} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
