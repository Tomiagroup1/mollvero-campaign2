const CtaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -left-20 top-10 w-64 h-64 rounded-full bg-mollvero-green-light/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 w-64 h-64 rounded-full bg-mollvero-beige/30 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Nepremeškajte
            <br />
            <span className="font-script font-normal text-primary">30% zľavu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Limitovaná ponuka na celý sortiment. Vytvorte si domov snov
            s prémiovým nábytkom Mollvero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://mollvero.sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Nakupovať teraz
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="https://mollvero.sk/konfigurator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-base transition-all hover:bg-foreground/5"
            >
              Konfigurátor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
