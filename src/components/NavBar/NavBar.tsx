import { Props } from "./Interfaces";
import { Link } from "react-router-dom";

const NavBar: React.FC<Props> = ({ elements, className }) => {
  return (
    <div
      className={`w-full flex justify-between ${className} py-4 px-4 font-bold text-white uppercase tracking-wide text-sm`}
    >
      <Link to="/">Logo</Link>
      <div className="flex gap-8">
        {elements?.map((link) => {
          const { href, title } = link;
          return (
            <Link
              to={href}
              className="text-white hover:text-orange-600 hover:border-b hover:border-b-orange-400 hover:px-4 ease-out transition-all duration-300"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
