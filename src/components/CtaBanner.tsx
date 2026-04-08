import { ArrowRight, Clock, Palette, Truck, Shield } from "lucide-react";
import heroImg from "@/assets/hero-furniture.jpg";

const CTA_URL =
  "https://iam.mollvero.sk/realms/mollvero-b2b/protocol/openid-connect/auth?response_type=code&client_id=api_client&scope=openid+profile+email&redirect_uri=https%3A%2F%2Fb2b.mollvero.sk%2Flogin";

const benefits = [
  { icon: Clock, label: "Konfigurácia za pár minút" },
  { icon: Palette, label: "Presne podľa vašich predstáv" },
  { icon: Truck, label: "Výroba a dodanie do 14 dní" },
  { icon: Shield, label: "Garancia kvality" },
];

const CtaBanner = () => {
  return (
    <section className="bg-[hsl(var(--mollvero-coral))] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.06] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-[40%] w-[300px] h-[300px] bg-white/[0.04] rounded-full translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[600px]">
          {/* Left — image + floating benefit pills */}
          <div className="relative hidden lg:block">
            <img
              src={heroImg}
              alt="Nábytok na mieru od Mollvero"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

            {/* Floating benefit pills */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 pb-12 gap-3">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-full px-5 py-3 w-fit shadow-lg"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--mollvero-coral))] flex items-center justify-center shrink-0">
                    <b.icon className="w-4 h-4 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA content */}
          <div className="flex flex-col justify-center py-16 lg:py-20 lg:pl-16">
            {/* Discount */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-7xl md:text-8xl font-bold text-white leading-none">30</span>
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-white">%</span>
                <span className="text-lg font-bold text-white/90">zľava</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-10">
              na prvú objednávku · platí pre prvých 300 registrovaných
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Nábytok na mieru.
              <br />
              Online. Do 14 dní.
            </h2>

            <p className="text-white/85 text-base md:text-lg leading-relaxed max-w-md mb-6">
              Nakonfigurujte si skrine, kuchyne či obývačky presne podľa vašich predstáv priamo z pohodlia domova. Ako prví získate prístup do nášho konfigurátora a&nbsp;30&nbsp;% zľavu na prvú objednávku.
            </p>

            {/* Mobile benefits */}
            <div className="flex flex-wrap gap-2 mb-10 lg:hidden">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2"
                >
                  <b.icon className="w-4 h-4 text-white" strokeWidth={2} />
                  <span className="text-xs font-medium text-white">{b.label}</span>
                </div>
              ))}
            </div>

            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-foreground font-bold px-8 py-4 rounded-full text-lg hover:bg-white/90 transition-colors w-fit"
            >
              Chcem zľavu 30 %
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
