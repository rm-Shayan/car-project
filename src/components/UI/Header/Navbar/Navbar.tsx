type NavItem = {
  name: string;
  href: string;
};

type Props = {
  links: NavItem[];
};

const Navbar = ({ links }: Props) => (
  <nav className="hidden md:flex space-x-6">
    {links.map((item, index) => (
      <a key={index} href={item.href} className="hover:text-blue-400 transition">
        {item.name}
      </a>
    ))}
  </nav>
);

export default Navbar;
