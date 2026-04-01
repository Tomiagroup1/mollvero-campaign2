import heroImage from "@/assets/hero-furniture.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Prémiový nábytok Mollvero"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Decorative brand shape */}
      <div className="absolute -right-32 -bottom-32 w-[500px] h-[500px] rounded-full bg-mollvero-green-light/10 blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-2xl space-y-8">
          <p className="text-primary-foreground/80 text-sm font-semibold uppercase tracking-[0.2em] animate-fade-up">
            Limitovaná akcia
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[0.95] animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Exkluzívna
            <br />
            <span className="font-script font-normal text-primary">ponuka</span>
          </h1>

          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-md leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Doprajte si prémiovú kvalitu Mollvero za výnimočnú cenu. 
            Elegantný dizajn, nadčasové materiály a ručná výroba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://mollvero.sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base transition-all hover:bg-primary-foreground/10"
            >
              Konfigurátor
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Discount badge */}
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-md rounded-full px-6 py-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-4xl font-bold text-primary">30%</span>
            <span className="text-primary-foreground/80 text-sm leading-tight">
              zľava na<br />všetok nábytok
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
