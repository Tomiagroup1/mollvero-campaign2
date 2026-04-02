import { Monitor, Truck, BadgeEuro } from "lucide-react";

const trustItems = [
  {
    icon: Monitor,
    label: "Online konfigurácia",
    sub: "Navrhnite si nábytok z domu",
  },
  {
    icon: Truck,
    label: "Dodanie do 14 dní",
    sub: "Od objednávky po doručenie",
  },
  {
    icon: BadgeEuro,
    label: "Férová cena",
    sub: "Priamo od slovenského výrobcu",
  },
];

const TrustBar = () => {
  const scrollItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="relative border-y border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden py-5">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-scroll-left w-max">
        {scrollItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 whitespace-nowrap"
          >
            <item.icon className="w-5 h-5 text-primary/70" strokeWidth={1.5} />
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide uppercase text-foreground">
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground">{item.sub}</span>
            </div>
            <span className="mx-6 w-1 h-1 rounded-full bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
