import logo from "@/assets/mollvero-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="https://mollvero.sk/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Mollvero" className="h-16" />
          </a>
          <div className="flex items-center gap-6 text-primary-foreground/50 text-sm">
            <a href="https://mollvero.sk/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
              mollvero.sk
            </a>
            <a href="mailto:obchod@mollvero.sk" className="hover:text-primary-foreground transition-colors">
              obchod@mollvero.sk
            </a>
            <span>+421 905 557 751</span>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-primary-foreground/30 text-xs">
          © {new Date().getFullYear()} Mollvero by Lukamasiv. Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
