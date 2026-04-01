import { TreePine, Hand, Truck } from "lucide-react";

const trustItems = [
  { icon: TreePine, label: "Masívne drevo" },
  { icon: Hand, label: "Ručná výroba" },
  { icon: Truck, label: "Doprava zdarma" },
];

const TrustBar = () => {
  // Duplicate items for seamless infinite scroll
  const scrollItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="relative border-y border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden py-5">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex animate-scroll-left w-max">
        {scrollItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-10 text-muted-foreground whitespace-nowrap"
          >
            <item.icon className="w-4 h-4 text-primary/70" strokeWidth={1.5} />
            <span className="text-sm font-medium tracking-wide uppercase">
              {item.label}
            </span>
            <span className="mx-6 w-1 h-1 rounded-full bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBar;
