import { ArrowRight } from "lucide-react";

const CTA_URL =
  "https://iam.mollvero.sk/realms/mollvero-b2b/protocol/openid-connect/auth?response_type=code&client_id=api_client&scope=openid+profile+email&redirect_uri=https%3A%2F%2Fb2b.mollvero.sk%2Flogin";

const CtaBanner = () => {
  return (
    <section className="bg-[hsl(var(--mollvero-coral))] py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle lighter overlay shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.06] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/[0.05] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Discount badge */}
          <div className="inline-flex items-baseline gap-3 mb-8">
            <span className="text-7xl md:text-8xl font-bold text-white leading-none">30</span>
            <span className="text-3xl md:text-4xl font-bold text-white">%</span>
            <span className="text-xl md:text-2xl font-bold text-white/90 ml-1">zľava</span>
          </div>
          <p className="text-white/80 text-sm md:text-base mb-10">
            na prvú objednávku · limitovaná akcia
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Nábytok na mieru.
            <br />
            Online. Do 14 dní.
          </h2>

          <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Nakonfigurujte si skrine, kuchyne či obývačky presne podľa vašich predstáv priamo z pohodlia domova. Ako prví získate prístup do nášho konfigurátora a 30&nbsp;% zľavu na prvú objednávku.
          </p>

          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-foreground font-bold px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-colors"
          >
            Chcem zľavu 30 %
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
