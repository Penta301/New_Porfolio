const Logic = () => {
  const handleColor = (
    primarySecondary: boolean,
    colors: string[],
    className: string
  ) => {
    if (primarySecondary) {
      return className.replace("color", colors[0]);
    }

    return className.replace("color", colors[1]);
  };

  return { handleColor };
};

export default Logic;
