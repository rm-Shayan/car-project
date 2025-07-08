type Props = {
  src: string;
  title: string;
};

const Logo = ({ src, title }: Props) => (
  <div className="flex items-center space-x-2">
    <img src={src} alt="Logo" className="w-10 h-10 object-contain" />
    <span className="text-2xl font-bold">{title}</span>
  </div>
);

export default Logo;
