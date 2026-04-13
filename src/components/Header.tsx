import logo from "@/assets/mollvero-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-32">
        <a href="https://mollvero.sk/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Mollvero" className="h-[7.5rem]" />
        </a>
      </div>
    </header>
  );
};

export default Header;
