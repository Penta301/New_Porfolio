import Logic from "./Logic";
import Card from "../components/Card/Card";
import { Props } from "./Interfaces";

const Home: React.FC<Props> = ({ className }) => {
  const { cardsArr } = Logic();

  return (
    <div className="flex w-full justify-between py-4">
      <Card cardsArr={cardsArr}></Card>
    </div>
  );
};

export default Home;
