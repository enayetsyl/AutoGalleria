import { Link } from "react-router-dom";

const Car = ({car, handleCardClick, product}) => {
  const {image, name} = car;
  // console.log(car)
  const handleClick = () => {
    handleCardClick(name)
  
  }
  return (
    <div>
      <Link to={{
  pathname: '/productdetails/'+name,
  state: { product: product }
}}>
      <div className="bg-[#ffffff] border border-solid border-[#dddddd] rounded-xl"
      onClick={handleClick}
      >
        <img src={image} alt="" className="rounded-t-xl h-[320px] w-full"/>
        <div className="p-5">
        <h1 className="font-mont text-[#333333] font-bold text-3xl pb-3">{name}</h1>
        <hr />
        <h1 className="pt-3 flex justify-around font-mont text-2xl font-bold text-[#333333]"> <span></span> </h1>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Car;

// import { Link } from "react-router-dom";

// const Car = ({car, handleCardClick, product}) => {
//   const {image, name} = car;
//   // console.log(car)
//   const handleClick = () => {
//     handleCardClick(name)
  
//   }
//   return (
//     <div>
//       <Link to={{
//   pathname: '/productdetails',
//   state: { product: product }
// }}>
//       <div className="bg-[#ffffff] border border-solid border-[#dddddd] rounded-xl"
//       onClick={handleClick}
//       >
//         <img src={image} alt="" className="rounded-t-xl h-[320px] w-full"/>
//         <div className="p-5">
//         <h1 className="font-mont text-[#333333] font-bold text-3xl pb-3">{name}</h1>
//         <hr />
//         <h1 className="pt-3 flex justify-around font-mont text-2xl font-bold text-[#333333]"> <span></span> </h1>
//         </div>
//       </div>
//       </Link>
//     </div>
//   );
// };

// export default Car;