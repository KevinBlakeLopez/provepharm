function Container({ custom, margin, padding, size, children }) {
  let sizeMap = {
    xxs: "max-w-[700px]",
    xs: "max-w-[800px]",
    sm: "max-w-[1000px]",
    md: "max-w-[1100px]",
    lg: "max-w-[1400px]",
    xl: "max-w-[1600px]",
    full: "max-w-full",
  };

  // Default to small if no size is passed entering comment to push
  const width = size ? sizeMap[size] : "max-w-[1000px]";

  if (custom) sizeMap = `max-w-${custom}`;

  return (
    <div
      className={`flex justify-center ${margin ? margin : ""} ${
        padding ? padding : "px-5 py-10"
      }`}
    >
      <div className={`${width}`}>{children}</div>
    </div>
  );
}

export default Container;
