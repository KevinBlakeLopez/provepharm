function Container({ size, children }) {
  const sizeMap = {
    xs: "max-w-[800px]",
    sm: "max-w-[1000px]",
    md: "max-w-[1100px]",
    lg: "max-w-[1400px]",
    xl: "max-w-[1600px]",
    full: "max-w-full",
  };

  // Default to small if no size is passed
  const width = size ? sizeMap[size] : "max-w-[1000px]";

  return (
    <div className="flex justify-center p-10">
      <div className={`${width}`}>{children}</div>
    </div>
  );
}

export default Container;
