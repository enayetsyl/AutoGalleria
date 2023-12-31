import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const CarDetails = () => {
  const car = useLoaderData();
  const { brand, description, image, name, price, rating, type, _id } = car;
  const {user} = useContext(AuthContext)
  console.log(user.email)

  const handleAddToCart = () => {
    const email = user.email;
    const myProduct = {
      brand, description, image, name, price, rating, type, _id, email
   }
   
   fetch('https://brand-shop-server-35jjqg4co-md-enayetur-rahmans-projects.vercel.app/addtocart', {
    method:'POST',
    headers:{
      'content-type':"application/json"
    },
    body: JSON.stringify(myProduct)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data)
    if(data.insertedId){
      swal("Congratulation!", "Product successfully added to the cart", "success");
    }
   })
   
  }


  return (
    <div className="bg-[#ffffff] w-11/12 mx-auto h-[55vh] my-5">
      <div>
          <div>
            <img src={image} alt="" className="w-full h-[350px]" />
          </div>
          <div className="flex justify-around gap-5 py-3">
            <h1 className="font-mont font-bold text-2xl md:text-3xl text-[#333333]">Name: {name}</h1>
            <h2 className="font-mont font-bold text-2xl md:text-3xl text-[#333333]">Type: {type}</h2>
            <h2 className="font-mont font-bold text-2xl md:text-3xl text-[#333333]">Brand: {brand}</h2>
            <h3 className="font-mont font-bold text-2xl md:text-3xl text-[#333333]">Price: {price}</h3>
            
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
