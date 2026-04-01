import heroImage from "@/assets/hero-furniture.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 bg-background relative overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-mollvero-green-light/8 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-mollvero-beige/10 blur-[100px]" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-mollvero-blue-light/6 blur-[80px]" />

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
