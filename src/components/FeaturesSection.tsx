import benefitMaterialy from "@/assets/benefit-materialy.jpg";
import benefitInstalacia from "@/assets/benefit-instalacia.jpg";
import benefitKonfigurator from "@/assets/benefit-konfigurator.jpg";
import benefitVyroba from "@/assets/benefit-vyroba.jpg";

const benefits = [
  { title: "Kvalitné vstupné materiály", image: benefitMaterialy },
  { title: "Inštalácia do 14 dní", image: benefitInstalacia },
  { title: "Online konfigurátor", image: benefitKonfigurator },
  { title: "Slovenská výroba", image: benefitVyroba },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative coral shape */}
      <div className="absolute -right-20 top-0 w-[350px] h-[500px] opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 286.64 325.92" fill="none" className="w-full h-full">
          <path
            d="M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z"
            fill="hsl(var(--mollvero-coral))"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="mb-14 max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-5">
            Benefity výroby, ktoré vám dáme len my.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Spájame moderné technológie s tradičnou remeselnou precíznosťou, aby sme vám priniesli nábytok na mieru, ktorý bude slúžiť roky.
          </p>
        </div>

        {/* 4 cards in a row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-default"
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={640}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                  {benefit.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
