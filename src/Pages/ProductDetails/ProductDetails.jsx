import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { products } = useContext(AuthContext);
console.log(products._id)
const handleCardClick = (productId) => {
  console.log(`Product ID clicked: ${productId}`);
  // You can perform additional actions here if needed.
};
  return (
   
    products ? 
    (
      <div>
      {/* carousel start */}
      <div className="carousel w-full h-[70vh]">
        {products.map((product, index) => (
          <div key={product._id} id={`item${index}`} className="carousel-item w-full">
            <img src={product.image} className="w-full" alt={`Product ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {products.map((_, index) => (
          <a href={`#item${index}`} className="btn btn-xs" key={index}>
            {index + 1}
          </a>
        ))}
      </div>
      {/* carousel ends */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 w-11/12 mx-auto">
      {products.map((product) => (
        <div key={product._id}
        onClick={() => handleCardClick(product._id)}
        >
          <div className="border border-solid border-[#dddddd] rounded-2xl bg-[#ffffff]">
            <img src={product.image} alt={product.name} className="rounded-t-2xl h-[400px] w-full" />
            <div className="p-5 font-roboto ">
            <p className="text-4xl font-black text-[#333333]">{product.brand}</p>
            <h1 className="pl-5 text-3xl font-extrabold text-[#333333]">{product.name}</h1>
            <p className="pl-10 text-2xl font-bold text-[#333333]">{product.type}</p>
            <div className="flex justify-around pt-4 font-bold text-[#333333]">
            <p>Rating: {product.rating}</p>
            <p>Price: {product.price}</p>
            </div>
            <h1 className="text-[#666666] py-5">{product.description}</h1>
            <div className="flex justify-between">
              
              <Link to={`/cardetails/${product._id}`}>
              <button className="bg-[#007acc] text-white font-semibold border border-solid border-[#dddddd] px-10 py-3 rounded-3xl">Details</button>
              </Link>
              
              <Link to={`/updateproduct/${product._id}`}>
              <button className="bg-[#007acc] text-white font-semibold border border-solid border-[#dddddd] px-10 py-3 rounded-3xl">Update</button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
    )
    :
    (
      <div>
      <h1 className="text-[#333333] font-mont text-5xl h-screen flex items-center justify-center font-bold">No Product Available for the brand</h1>
      </div>
    )
   
  );
};

export default ProductDetails;



