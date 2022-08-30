import Logic from "./Logic";
import Card from "../components/Card/Card";
import { Cards } from "../components/Card/Interfaces";
import { Props } from "./Interfaces";

const Home: React.FC<Props> = ({ className }) => {
  const { cardsArr } = Logic();
  const cardsExperience: Cards[] = [
    {
      title: "60+",
      icon: "",
      paragraph: "Clients",
      link: "",
    },
    {
      title: "4",
      icon: "",
      paragraph: "Different jobs",
      link: "",
    },
    {
      title: "2",
      icon: "",
      paragraph: "",
      link: "",
    },
    {
      title: "10",
      icon: "",
      paragraph: "",
      link: "",
    },
  ];

  return (
    <div>
      <div className="flex w-full gap-4 py-4">
        <Card cardsArr={cardsArr}></Card>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="relative mt-10 font-bold text-white text-2xl max-w-fit before:content-['4'] before:text-center before:absolute before:top-0 before:-mt-10 before:left-0 before:right-0 before:text-4xl before:text-orange-500">
          Years Experience
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <Card
            cardsArr={cardsExperience}
            titleClassName="text-orange-500"
            className="h-auto w-[310px] bg-slate-600 items-center "
            paragraphClassName=""
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
