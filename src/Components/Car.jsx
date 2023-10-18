
const Car = ({car}) => {
  const {image, name} = car;
  console.log(car)
  return (
    <div>
      <div className="bg-[#ffffff] border border-solid border-[#dddddd] rounded-xl">
        <img src={image} alt="" className="rounded-t-xl h-[320px] w-full"/>
        <div className="p-5">
        <h1 className="font-mont text-[#333333] font-bold text-3xl pb-3">{name}</h1>
        <hr />
        <h1 className="pt-3 flex justify-around font-mont text-2xl font-bold text-[#333333]"> <span></span> </h1>
        </div>
      </div>
    </div>
  );
};

export default Car;