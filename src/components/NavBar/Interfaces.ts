interface Navs {
  href: string;
  title: string;
}

interface Props {
  elements: Navs[];
  className?: string;
}

export type { Props, Navs };
