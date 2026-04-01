const stats = [
  { value: "12", label: "dní na dodanie" },
  { value: "19+", label: "rokov skúseností" },
  { value: "3D", label: "návrh zdarma" },
  { value: "50 mil.", label: "dielov nábytku" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-primary-foreground/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
