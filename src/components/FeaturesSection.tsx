import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import benefitMaterialy from "@/assets/benefit-materialy.jpg";
import benefitInstalacia from "@/assets/benefit-instalacia.jpg";
import benefitKonfigurator from "@/assets/benefit-konfigurator.jpg";
import benefitVyroba from "@/assets/benefit-vyroba.jpg";

const benefits = [
  {
    title: "Kvalitné vstupné materiály",
    description: "Používame len overené materiály od preverených dodávateľov. Každý kus dreva prešiel dôkladnou kontrolou kvality.",
    image: benefitMaterialy,
  },
  {
    title: "Inštalácia do 14 dní",
    description: "Od objednávky po hotový nábytok u vás doma za dva týždne. Konkurencia čaká mesiace — my nie.",
    image: benefitInstalacia,
  },
  {
    title: "Online konfigurátor",
    description: "Navrhnite si nábytok priamo v prehliadači — jednoducho a intuitívne, bez čakania, bez kompromisov.",
    image: benefitKonfigurator,
  },
  {
    title: "Slovenská výroba",
    description: "Žiadni prostredníci. Priama komunikácia, férové ceny a nábytok vyrobený na Slovensku s láskou k remeslu.",
    image: benefitVyroba,
  },
];

const FeaturesSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? benefits.length - 1 : a - 1));
  const next = () => setActive((a) => (a === benefits.length - 1 ? 0 : a + 1));

  // Show 2 cards: active and next
  const secondIdx = (active + 1) % benefits.length;

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative coral shape */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[600px] opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 286.64 325.92" fill="none" className="w-full h-full">
          <path
            d="M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z"
            fill="hsl(var(--mollvero-coral))"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Step indicators */}
        <div className="flex items-center gap-0 mb-12 max-w-xs">
          {benefits.map((_, i) => (
            <div key={i} className="flex items-center">
              <button
                onClick={() => setActive(i)}
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  i === active
                    ? "border-foreground text-foreground"
                    : "border-muted-foreground/30 text-muted-foreground/50"
                }`}
              >
                {i + 1}.
              </button>
              {i < benefits.length - 1 && (
                <div
                  className={`w-12 h-[2px] transition-colors duration-300 ${
                    i < active ? "bg-foreground" : "bg-muted-foreground/20"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-5">
              Benefity výroby, ktoré vám dáme len my.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              Spájame moderné technológie s tradičnou remeselnou precíznosťou, aby sme vám priniesli nábytok na mieru, ktorý bude slúžiť roky.
            </p>
          </div>

          {/* Right — image cards */}
          <div className="relative">
            <div className="flex gap-4 lg:gap-6">
              {[active, secondIdx].map((idx, cardPos) => (
                <div
                  key={`${idx}-${cardPos}`}
                  className="relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden group"
                >
                  <img
                    src={benefits[idx].image}
                    alt={benefits[idx].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {benefits[idx].title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-3 justify-end mt-6">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border-2 border-foreground/20 flex items-center justify-center hover:border-foreground/60 transition-colors"
                aria-label="Predchádzajúci"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border-2 border-foreground/20 flex items-center justify-center hover:border-foreground/60 transition-colors"
                aria-label="Ďalší"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
