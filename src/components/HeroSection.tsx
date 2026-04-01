import heroImage from "@/assets/hero-furniture.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 bg-background relative overflow-hidden">
      {/* Brand decorative shapes */}
      <svg className="absolute top-20 -left-16 w-64 h-48 opacity-15" viewBox="0 0 313.32 233.44" fill="none">
        <path d="M298.83,36.31c2.9,6.62,4.64,13.84,5.03,21.44l9.46,175.7H3.09s-6.95-13,0-19.94L200.15,17.79C217.41.64,242.24-4.58,264.94,4.18c15.59,6.02,27.52,17.57,33.87,32.1v.03Z" fill="hsl(var(--mollvero-green-light))" />
      </svg>
      <svg className="absolute bottom-32 -right-10 w-56 h-44 opacity-15 rotate-45" viewBox="0 0 324.47 254.63" fill="none">
        <path d="M154.41,254.63c-1.38,0-2.76-.06-4.17-.11-23.17-1.46-43.06-14.72-53.24-35.5L1.88,24.74C-2.61,15.58,1.22,4.5,10.44,0l305.62,27.09c8.59,5.58,10.98,17.04,5.37,25.6l-113.87,173.23c-11.93,18.18-31.57,28.69-53.1,28.69l-.06.03Z" fill="hsl(var(--mollvero-yellow))" />
      </svg>
      <svg className="absolute top-1/2 left-1/3 w-8 h-80 opacity-10 -rotate-12" viewBox="0 0 33.47 413.22" fill="none">
        <path d="M0,16.73C0,7.49,7.49,0,16.73,0s16.73,7.49,16.73,16.73v379.76c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73V16.73Z" fill="hsl(var(--mollvero-beige))" />
      </svg>
      <svg className="absolute top-40 right-1/4 w-40 h-48 opacity-10 rotate-12" viewBox="0 0 286.64 325.92" fill="none">
        <path d="M62.44,325.92c-14.85,0-29.49-5.48-41.48-16.16C.06,291.08-5.8,262.63,6.05,237.29L111.86,11.05c4.49-9.56,15.92-13.71,25.53-9.27l146.77,181.11c5.48,9.06,1.4,19.26-7.68,24.74l-181.52,109.06c-10.27,6.16-21.46,9.21-32.53,9.21v.03Z" fill="hsl(var(--mollvero-blue-light))" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-4rem)] py-12">
          {/* Left content — 7 cols */}
          <div className="lg:col-span-7 space-y-10">
            {/* Discount teaser — big & bold */}
            <div className="relative inline-block animate-fade-up">
              <div className="flex items-end gap-3">
                <span className="text-[10rem] md:text-[14rem] font-bold leading-none text-primary tracking-tighter">
                  30
                </span>
                <div className="pb-6 md:pb-8">
                  <span className="text-5xl md:text-7xl font-bold text-primary">%</span>
                  <p className="text-lg md:text-xl font-semibold text-foreground mt-1">zľava</p>
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                na celý sortiment · limitovaná akcia
              </p>
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
                Prémiový nábytok
                <br />
                <span className="font-script font-normal text-primary text-5xl md:text-6xl lg:text-7xl">
                  na mieru
                </span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                Od slovenského výrobcu s 19+ rokmi skúseností.
                Masívne drevo, ručná výroba a 3D návrh zdarma.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
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

          {/* Right — Image with shape overlay, 5 cols */}
          <div className="lg:col-span-5 relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Main image in organic shape clip */}
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Prémiový nábytok Mollvero – moderná obývačka"
                  className="w-full aspect-[3/4] object-cover"
                  width={800}
                  height={1067}
                />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
