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
      {/* Brand wave — top right */}
      <svg className="absolute -top-6 -right-8 w-[320px] h-[250px] opacity-[0.18]" viewBox="0 0 296.82 235.71" fill="none">
        <path d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z" fill="hsl(var(--mollvero-yellow))" />
      </svg>

      {/* Brand vertical bars — right side */}
      <svg className="absolute top-16 right-12 w-[18px] h-[240px] opacity-[0.16]" viewBox="0 0 33.47 413.22" fill="none">
        <path d="M0,16.73C0,7.49,7.49,0,16.73,0s16.73,7.49,16.73,16.73v379.76c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73V16.73Z" fill="hsl(var(--mollvero-green-light))" />
      </svg>
      <svg className="absolute top-24 right-6 w-[14px] h-[180px] opacity-[0.12]" viewBox="0 0 33.47 413.22" fill="none">
        <path d="M0,16.73C0,7.49,7.49,0,16.73,0s16.73,7.49,16.73,16.73v379.76c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73V16.73Z" fill="hsl(var(--mollvero-beige))" />
      </svg>

      {/* Brand swoosh — bottom left */}
      <svg className="absolute -bottom-8 -left-6 w-[220px] h-[420px] opacity-[0.14]" viewBox="0 0 229.89 446.69" fill="none">
        <path d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z" fill="hsl(var(--mollvero-blue-light))" />
      </svg>

      {/* Brand angular shape — mid left */}
      <svg className="absolute top-[40%] left-[5%] w-[140px] h-[160px] opacity-[0.10] -rotate-[15deg]" viewBox="0 0 253.17 288.09" fill="none">
        <path d="M55.32,288.09c-13.16,0-26.13-4.84-36.75-14.29C.06,257.29-5.14,232.14,5.36,209.74L99.11,9.77c3.98-8.45,14.1-12.12,22.62-8.19,8.51,3.95,12.21,14,8.25,22.45L36.23,223.98c-4.9,10.47-.58,19.57,5.09,24.62,5.67,5.05,15.26,8.3,25.2,2.38l160.82-96.4c8.07-4.82,18.53-2.25,23.38,5.73,4.85,8.01,2.27,18.37-5.77,23.21l-160.82,96.4c-9.1,5.44-19.01,8.14-28.82,8.14v.03Z" fill="hsl(var(--mollvero-coral))" />
      </svg>

      {/* Brand triangle accent — bottom right */}
      <svg className="absolute -bottom-4 right-[15%] w-[100px] h-[80px] opacity-[0.08]" viewBox="0 0 313.32 233.44" fill="none">
        <path d="M298.83,36.31c2.9,6.62,4.64,13.84,5.03,21.44l9.46,175.7H3.09s-6.95-13,0-19.94L200.15,17.79C217.41.64,242.24-4.58,264.94,4.18c15.59,6.02,27.52,17.57,33.87,32.1v.03Z" fill="hsl(var(--mollvero-green-light))" />
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
