import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const ProductDetails = () => {
  const { products } = useContext(AuthContext);

  return (
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
        <div key={product._id}>
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
              
              <button className="bg-[#007acc] text-white font-semibold border border-solid border-[#dddddd] px-10 py-3 rounded-3xl">Details</button>
              
              <button className="bg-[#007acc] text-white font-semibold border border-solid border-[#dddddd] px-10 py-3 rounded-3xl">Update</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductDetails;





// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";



// const ProductDetails = () => {
 
//     const {products} = useContext(AuthContext)
//     const {brand, description, image, name, price, rating, type} = products;
//     console.log(products)
//   return (
//     // className="grid grid-cols-2 gap-5"
  
//     <div >
// {/* carousel start */}

// <div className="carousel w-full">
//   <div id="item1" className="carousel-item w-full">
//     <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//   </div> 
//   <div id="item3" className="carousel-item w-full">
//     <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
//   </div> 
//   <div id="item4" className="carousel-item w-full">
//     <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//   </div>
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">
//   <a href="#item1" className="btn btn-xs">1</a> 
//   <a href="#item2" className="btn btn-xs">2</a> 
//   <a href="#item3" className="btn btn-xs">3</a> 
//   <a href="#item4" className="btn btn-xs">4</a>
// </div>

// {/* carousel ends */}
//       {
//         products.map(product => (
//           <div key={product._id}>
//   <div>
//         <img src={product.image} alt="" />
//         <h1>{product.name}</h1>
//         <h1>{product.description}</h1>
//         <p>{product.rating}</p>
//         <p>{product.type}</p>
//         <p>{product.price}</p>
//       </div>
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default ProductDetails;