const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
        <div
          key={index}
          className="m-5 w-[250px] border-2 rounded-xl h-40 bg-gray-300"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
