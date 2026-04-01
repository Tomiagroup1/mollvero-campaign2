import heroImage from "@/assets/hero-furniture.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16">
      {/* Split layout */}
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-4rem)]">
        {/* Left — Content on pastel background */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 bg-secondary/40 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-mollvero-beige/40 blur-2xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-mollvero-blue-light/30 blur-2xl" />

          <div className="relative space-y-8 max-w-lg">
            {/* Discount pill */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Limitovaná akcia · -30%</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1] animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Nábytok,
              <br />
              ktorý
              <br />
              <span className="font-script font-normal text-primary text-5xl md:text-7xl lg:text-8xl">vydrží</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Prémiový nábytok na mieru od slovenského výrobcu.
              Masívne drevo, ručná výroba a 3D návrh zdarma.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="https://mollvero.sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                Vstúpte do eshopu
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://mollvero.sk/konfigurator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-foreground/15 text-foreground font-semibold transition-all hover:bg-foreground/5"
              >
                Konfigurátor
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              {[
                { val: "19+", label: "rokov" },
                { val: "3D", label: "návrh" },
                { val: "12", label: "dní dodanie" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-2xl font-bold text-foreground">{b.val}</p>
                  <p className="text-xs text-muted-foreground">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Hero image */}
        <div className="relative overflow-hidden">
          <img
            src={heroImage}
            alt="Prémiový nábytok Mollvero – moderná obývačka"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Floating badge on image */}
          <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-[260px]">
            <p className="text-4xl font-bold text-primary">30%</p>
            <p className="text-sm text-muted-foreground mt-1">zľava na všetok nábytok z aktuálnej kolekcie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
