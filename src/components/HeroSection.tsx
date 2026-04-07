import heroImage from "@/assets/hero-furniture.jpg";

const CTA_URL =
  "https://iam.mollvero.sk/realms/mollvero-b2b/protocol/openid-connect/auth?response_type=code&client_id=api_client&scope=openid+profile+email&redirect_uri=https%3A%2F%2Fb2b.mollvero.sk%2Flogin";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-16 relative bg-gradient-to-br from-background via-muted/30 to-mollvero-beige/20">
      {/* Subtle warm radial glow */}
      <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[30%] w-[400px] h-[400px] bg-mollvero-yellow/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* Brand wave — top left */}
      <svg className="absolute -top-8 -left-12 w-[380px] h-[300px] opacity-[0.18] animate-float-slow" viewBox="0 0 296.82 235.71" fill="none">
        <path d="M141.26,235.71c-1.26,0-2.52-.05-3.81-.1-21.2-1.34-39.39-13.52-48.7-32.63L1.72,24.45C-2.39,16.03,1.11,5.85,9.55,1.72c8.44-4.1,18.59-.61,22.72,7.84l87.02,178.5c3.87,7.95,11.47,13.05,20.3,13.6,8.73.66,16.99-3.55,21.85-10.95L265.62,31.53c5.13-7.84,15.65-10.08,23.51-4.92,7.86,5.13,10.05,15.66,4.92,23.52l-104.17,159.19c-10.91,16.71-28.87,26.36-48.57,26.36l-.05.03Z" fill="hsl(var(--mollvero-green-light))" />
      </svg>

      {/* Brand vertical bar — left */}
      <svg className="absolute top-[30%] -left-1 w-[20px] h-[280px] opacity-[0.16] animate-float-slower" viewBox="0 0 33.47 413.22" fill="none">
        <path d="M0,16.73C0,7.49,7.49,0,16.73,0s16.73,7.49,16.73,16.73v379.76c0,9.24-7.49,16.73-16.73,16.73s-16.73-7.49-16.73-16.73V16.73Z" fill="hsl(var(--mollvero-beige))" />
      </svg>

      {/* Brand swoosh — bottom right */}
      <svg className="absolute bottom-0 right-[10%] w-[280px] h-[540px] opacity-[0.14] animate-float-slow" style={{ animationDelay: "2s" }} viewBox="0 0 229.89 446.69" fill="none">
        <path d="M50.34,446.69c-7.85,0-14.93-5.46-16.61-13.44L3.26,289.92c-10.66-50.12,5.16-101.24,42.29-136.69L201.13,4.7c6.79-6.48,17.53-6.22,24.04.53,6.5,6.77,6.27,17.5-.53,23.96L69.06,177.71c-28.57,27.29-40.73,66.6-32.54,105.18l30.46,143.33c1.95,9.16-3.92,18.16-13.11,20.1-1.19.26-2.37.37-3.55.37h.03Z" fill="hsl(var(--mollvero-yellow))" />
      </svg>

      <div className="container mx-auto px-6 lg:px-12 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-4rem)] gap-0">

          {/* Left — text content */}
          <div className="relative z-10 lg:w-[55%] space-y-8 py-12 lg:py-0 lg:pr-8">
            {/* 30% discount graphic */}
            <div className="opacity-0 animate-count-up">
              <div className="flex items-end gap-2">
                <span
                  className="text-[8rem] md:text-[11rem] lg:text-[13rem] font-bold leading-none tracking-tighter animate-shimmer"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--mollvero-coral)) 25%, hsl(var(--primary-foreground)) 50%, hsl(var(--mollvero-coral)) 75%, hsl(var(--primary)) 100%)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  30
                </span>
                <div className="pb-4 md:pb-6">
                  <span
                    className="text-4xl md:text-6xl font-bold animate-shimmer"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--mollvero-coral)) 50%, hsl(var(--primary)) 100%)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >%</span>
                  <p className="text-base md:text-lg font-semibold text-foreground mt-1">zľava</p>
                </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                na prvú objednávku · limitovaná akcia
              </p>
            </div>

            {/* Headline */}
            <div className="space-y-4 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
                Nábytok na mieru.
                <br />
                Online.{" "}
                <span className="font-script font-normal text-primary text-4xl md:text-5xl lg:text-6xl">
                  Do 14 dní.
                </span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
                Nakonfigurujte si skrine, kuchyne či obývačky presne podľa vašich predstáv
                priamo z pohodlia domova. Ako prví získate prístup do nášho konfigurátora
                a 30&nbsp;% zľavu na prvú objednávku.
              </p>
            </div>

            {/* Single CTA */}
            <div className="opacity-0 animate-scale-up" style={{ animationDelay: "0.7s" }}>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl bg-mollvero-coral text-white font-semibold text-base transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:shadow-mollvero-coral/30 hover:brightness-110"
              >
                Chcem nábytok na mieru
              </a>
            </div>
          </div>

          {/* Right — hero image */}
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
