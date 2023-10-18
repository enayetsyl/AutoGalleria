import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const ProductDetails = () => {
 
    const {product} = useContext(AuthContext)
    const {brand, description, image, name, price, rating, type} = product;
  
  return (
    <div className="grid grid-cols-2 gap-5">
      
    </div>
  );
};

export default ProductDetails;