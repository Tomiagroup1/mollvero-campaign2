import { Hammer, Ruler, Clock } from "lucide-react";

const features = [
  {
    icon: Hammer,
    title: "Ručná výroba",
    description: "Každý kus nábytku je vyrobený s precíznosťou a láskou k remeslu. Masívne drevo a prvotriedne materiály.",
    color: "bg-mollvero-green-light",
  },
  {
    icon: Ruler,
    title: "Na mieru",
    description: "Nábytok prispôsobený vášmu priestoru a štýlu. 3D návrh zdarma pre dokonalú predstavu.",
    color: "bg-mollvero-beige",
  },
  {
    icon: Clock,
    title: "Od roku 1997",
    description: "Viac ako 25 rokov skúseností s výrobou nábytku na Slovensku. Rodinná firma s tradíciou.",
    color: "bg-mollvero-blue-light",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Prečo Mollvero
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Kvalita, ktorú <span className="font-script font-normal text-primary">cítite</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
