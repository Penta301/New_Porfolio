const test = (test: string): void => {};

interface Cards {
  title: string;
  paragraph: string;
  icon: string;
  link?: string;
}

interface Props {
  className?: string;
  cardsArr: Cards[];
}

export type { Props, Cards };
