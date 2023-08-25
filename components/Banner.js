function Banner({ children }) {
  return (
    <div className="bg-[url('/banner-image.webp')] bg-cover bg-blend-soft-light bg-[#1e387d] h-48 md:h-48 flex items-center">
      <h1 className="text-5xl md:text-7xl text-white pl-8 md:pl-64 font-light">
        {children}
      </h1>
    </div>
  );
}

export default Banner;
