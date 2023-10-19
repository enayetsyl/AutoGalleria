import { useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const car = useLoaderData();
  const { brand, description, image, name, price, rating, type, _id } = car;

  const handleAddToCart = () => {
    const myProduct = {
      brand, description, image, name, price, rating, type, _id
   }
   console.log(myProduct)
   
  }


  return (
    <div className="bg-[#ffffff] w-11/12 mx-auto h-[55vh] my-5">
      <div>
          <div>
            <img src={image} alt="" className="w-full h-[350px]" />
          </div>
          <div className="flex justify-around gap-5 py-3">
            <h1 className="font-mont font-bold text-3xl text-[#333333]">Name: {name}</h1>
            <h2 className="font-mont font-bold text-3xl text-[#333333]">Type: {type}</h2>
            <h2 className="font-mont font-bold text-3xl text-[#333333]">Brand: {brand}</h2>
            <h3 className="font-mont font-bold text-3xl text-[#333333]">Price: {price}</h3>
            
          </div>
          <div className="flex
  ">
              <button 
              onClick={handleAddToCart}
              className="w-10/12 mx-auto text-white bg-[#007acc] font-semibold font-roboto text-xl py-3 rounded-lg">Add to Cart</button>
            </div>
      </div>
    </div>
  );
};

export default CarDetails;
