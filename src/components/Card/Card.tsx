import { Link } from "react-router-dom";
import { Props } from "./Interfaces";
import { BsArrowRight } from "react-icons/bs";

const Card: React.FC<Props> = ({ className, cardsArr }) => {
  console.log(cardsArr);

  return (
    <>
      {cardsArr.map((c) => (
        <div
          className={`flex flex-col gap-4 bg-slate-600 text-white ${className}`}
        >
          <h1 className="font-bold tracking-wide text-2xl">{c.title}</h1>
          <p>{c.paragraph}</p>
          <div className="flex gap-2">
            <Link to={c.link!} className="uppercase font-bold text-xs">
              know more
            </Link>
            <BsArrowRight />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
