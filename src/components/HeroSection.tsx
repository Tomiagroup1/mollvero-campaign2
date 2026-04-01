import heroImage from "@/assets/hero-furniture.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 bg-background relative overflow-hidden">
      {/* Brand wave — top left, floating */}
      <svg className="absolute -top-8 -left-12 w-[380px] h-[300px] opacity-[0.18] animate-float-slow" viewBox="0 0 296.82 235.71" fill="none">
        <path d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z" fill="hsl(var(--mollvero-green-light))" />
      </svg>

      {/* Brand vertical bar — left edge, floating */}
      <svg className="absolute top-[30%] -left-1 w-[20px] h-[280px] opacity-[0.16] animate-float-slower" viewBox="0 0 33.47 413.22" fill="none">
        <path d="M0,16.73C0,7.49,7.49,0,16.73,0s16.73,7.49,16.73,16.73v379.76c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73V16.73Z" fill="hsl(var(--mollvero-beige))" />
      </svg>

      {/* Brand swoosh — bottom right behind image, floating */}
      <svg className="absolute bottom-0 right-[10%] w-[280px] h-[540px] opacity-[0.14] animate-float-slow" style={{ animationDelay: "2s" }} viewBox="0 0 229.89 446.69" fill="none">
        <path d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z" fill="hsl(var(--mollvero-yellow))" />
      </svg>

      {/* Brand angular shape — mid right, floating */}
      <svg className="absolute top-[15%] right-[42%] w-[160px] h-[180px] opacity-[0.10] rotate-[20deg] animate-float-slower" style={{ animationDelay: "3s" }} viewBox="0 0 253.17 288.09" fill="none">
        <path d="M55.32,288.09c-13.16,0-26.13-4.84-36.75-14.29C.06,257.29-5.14,232.14,5.36,209.74L99.11,9.77c3.98-8.45,14.1-12.12,22.62-8.19,8.51,3.95,12.21,14,8.25,22.45L36.23,223.98c-4.9,10.47-.58,19.57,5.09,24.62,5.67,5.05,15.26,8.3,25.2,2.38l160.82-96.4c8.07-4.82,18.53-2.25,23.38,5.73,4.85,8.01,2.27,18.37-5.77,23.21l-160.82,96.4c-9.1,5.44-19.01,8.14-28.82,8.14v.03Z" fill="hsl(var(--mollvero-blue-light))" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-4rem)] gap-0">

          {/* Left — text content */}
          <div className="relative z-10 lg:w-[55%] space-y-8 py-12 lg:py-0 lg:pr-8">
            {/* Discount teaser — big animated entrance */}
            <div className="opacity-0 animate-count-up">
              <div className="flex items-end gap-2">
                <span className="text-[8rem] md:text-[11rem] lg:text-[13rem] font-bold leading-none text-primary tracking-tighter animate-pulse-soft">
                  30
                </span>
                <div className="pb-4 md:pb-6">
                  <span className="text-4xl md:text-6xl font-bold text-primary animate-pulse-soft">%</span>
                  <p className="text-base md:text-lg font-semibold text-foreground mt-1">zľava</p>
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                na celý sortiment · limitovaná akcia
              </p>
            </div>

            {/* Headline — slide in from left */}
            <div className="space-y-4 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                Prémiový nábytok
                <br />
                <span className="font-script font-normal text-primary text-4xl md:text-5xl lg:text-6xl">
                  na mieru
                </span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
                Od slovenského výrobcu s 19+ rokmi skúseností.
                Masívne drevo, ručná výroba a 3D návrh zdarma.
              </p>
            </div>

            {/* CTAs — scale up */}
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-scale-up" style={{ animationDelay: "0.7s" }}>
              <a
                href="https://mollvero.sk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                Nakupovať so zľavou
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="https://mollvero.sk/konfigurator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border-2 border-foreground/15 text-foreground font-semibold text-base transition-all hover:bg-foreground/5"
              >
                3D Konfigurátor
              </a>
            </div>
          </div>

          {/* Right — large hero image, slide in from right */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[50%] opacity-0 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <img
              src={heroImage}
              alt="Prémiový nábytok Mollvero – vstavaná skriňa s dreveným obkladom"
              className="w-full h-full min-h-[400px] lg:min-h-full object-cover lg:rounded-l-[3rem] rounded-[2rem] lg:rounded-r-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
