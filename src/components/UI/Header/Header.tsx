import { Logo } from "./Logo";
import { Navbar } from "./Navbar";
import { AuthBtn } from "./Auth";

import src from "../../../../public/istockphoto-1408605259-612x612.jpg"
const Header = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Inventory", href: "#" },
    { name: "Dealers", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Logo src={src} title="CarShowroom" />
        <Navbar links={navLinks} />
        <AuthBtn />
        <div className="md:hidden">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
