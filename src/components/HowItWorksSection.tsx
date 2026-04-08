import { useState } from "react";
import { ChevronDown } from "lucide-react";
import vyrobaImg from "@/assets/vyroba-cnc.webp";

const steps = [
  {
    n: 1,
    title: "Návrh",
    desc: "Spoločne navrhneme nábytok presne podľa vašich predstáv – od rozmerov po materiály a farby.",
  },
  {
    n: 2,
    title: "Objednávka & platba",
    desc: "Po odsúhlasení návrhu potvrdíte objednávku a vyberiete si spôsob platby.",
  },
  {
    n: 3,
    title: "Výroba",
    desc: "Váš nábytok vyrábame na mieru v našej dielni s dôrazom na kvalitu a detail.",
  },
  {
    n: 4,
    title: "Dodanie",
    desc: "Hotový nábytok vám doručíme priamo domov v dohodnutom termíne.",
  },
  {
    n: 5,
    title: "Montáž",
    desc: "Na požiadanie zabezpečíme aj profesionálnu montáž priamo u vás.",
  },
];

const HowItWorksSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] mb-6">
              Ako to<br />u nás funguje
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md">
              Neustále inovujeme o optimalizujeme proces výroby nábytku na mieru a tak vám dokážeme vďaka vyladeným postupom garantovať výrobu a dodanie už za 14 dní.
            </p>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={vyrobaImg}
                alt="CNC výroba nábytku na mieru"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column – accordion */}
          <div className="flex flex-col gap-3 lg:pt-8">
            {steps.map((step, i) => {
              const isOpen = openIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left bg-muted/60 hover:bg-muted/80 transition-colors rounded-xl px-6 py-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-foreground">
                      {step.n}. {step.title}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
