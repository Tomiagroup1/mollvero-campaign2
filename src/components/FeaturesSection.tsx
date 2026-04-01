import { Hammer, Ruler, Clock } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Ručná výroba",
    description:
      "Každý kus nábytku je vyrobený s precíznosťou a láskou k remeslu. Masívne drevo a prvotriedne materiály.",
    accent: "bg-mollvero-green-light",
    shape: (
      <svg className="absolute -top-3 -right-3 w-16 h-12 opacity-30" viewBox="0 0 313.32 233.44" fill="none">
        <path d="M298.83,36.31c2.9,6.62,4.64,13.84,5.03,21.44l9.46,175.7H3.09s-6.95-13,0-19.94L200.15,17.79C217.41.64,242.24-4.58,264.94,4.18c15.59,6.02,27.52,17.57,33.87,32.1v.03Z" fill="hsl(var(--mollvero-green-light))" />
      </svg>
    ),
  },
  {
    icon: Ruler,
    title: "Na mieru",
    description:
      "Nábytok prispôsobený vášmu priestoru a štýlu. 3D návrh zdarma pre dokonalú predstavu.",
    accent: "bg-mollvero-beige",
    shape: (
      <svg className="absolute -top-3 -right-3 w-16 h-12 opacity-30" viewBox="0 0 324.47 254.63" fill="none">
        <path d="M154.41,254.63c-1.38,0-2.76-.06-4.17-.11-23.17-1.46-43.06-14.72-53.24-35.5L1.88,24.74C-2.61,15.58,1.22,4.5,10.44,0l305.62,27.09c8.59,5.58,10.98,17.04,5.37,25.6l-113.87,173.23c-11.93,18.18-31.57,28.69-53.1,28.69l-.06.03Z" fill="hsl(var(--mollvero-beige))" />
      </svg>
    ),
  },
  {
    icon: Clock,
    title: "Od roku 1997",
    description:
      "Viac ako 25 rokov skúseností s výrobou nábytku na Slovensku. Rodinná firma s tradíciou.",
    accent: "bg-mollvero-blue-light",
    shape: (
      <svg className="absolute -top-3 -right-3 w-14 h-16 opacity-30" viewBox="0 0 286.64 325.92" fill="none">
        <path d="M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z" fill="hsl(var(--mollvero-blue-light))" />
      </svg>
    ),
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-mollvero-green-light/5 blur-[80px]" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/50 mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Kvalita, ktorú{" "}
            <span className="font-script font-normal text-primary">cítite</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {feature.shape}
              <div
                className={`w-14 h-14 ${feature.accent} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
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
