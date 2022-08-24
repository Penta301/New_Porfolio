import Logic from "./Logic";

import { Link } from "react-router-dom";
import { Props } from "./Interfaces";
import { BsArrowRight } from "react-icons/bs";

const Card: React.FC<Props> = ({ className, cardsArr }) => {
  const { handleColor } = Logic();

  return (
    <>
      {cardsArr.map((c, i) => {
        const position = i % 2 === 0;

        return (
          <div
            className={handleColor(
              position,
              ["slate-600", "orange-600"],
              `flex flex-col gap-5 bg-color text-white h-96 w-80 overflow-hidden p-8 ${className}`
            )}
          >
            <h1 className="font-bold tracking-wide text-3xl">{c.title}</h1>
            <p className="">{c.paragraph}</p>
            <div
              className={handleColor(
                position,
                ["orange-600", "slate-800"],
                "flex gap-2 items-center hover:px-2 hover:border-b hover:border-color transition-all duration-300 ease-out bg-color"
              )}
            >
              <Link
                to={c.link!}
                className={handleColor(
                  position,
                  ["orange-600", "slate-800"],
                  "uppercase font-bold hover:text-color transition-all duration-300 ease-out"
                )}
              >
                know more
              </Link>
              <BsArrowRight size={18} className="mt-1" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
