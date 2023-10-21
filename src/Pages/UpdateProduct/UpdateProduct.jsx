import { FaCar, FaImage } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";
import { FiType } from "react-icons/fi";
import { ImPriceTag } from "react-icons/im";
import { MdDescription } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {_id, name = "", brand = "", type = "", price = "", description = "", rating = "", image = ""} = product;
  console.log(product)

  const handleUpdateProduct = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const updateProduct = {name, brand, type, price, description, rating, image};
    console.log(updateProduct)

    // sending data to server

    fetch (`https://brand-shop-server-two-tau.vercel.app/brands/${_id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(updateProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.modifiedCount>0){
        swal("Congratulation!", "Your product updated successfully", "success");
        // form.reset();
      }
      
    })
  }

  return (
    <div>
      <div className=" p-10 w-3/4 mx-auto bg-[#ffffff] rounded-xl mt-20">
        <h1 className="py-5 font-mont text-center text-3xl font-bold">
          Update an Existing Automotive Product
        </h1>
       <form onSubmit={handleUpdateProduct}>
       <div>
          <div className="flex  items-center gap-3 py-3">
            <FaCar></FaCar>
            <h1 className="text-[#333333] font-mont font-bold text-xl">Name</h1>
            <p className="text-red-400 font-black text-2xl">*</p>
          </div>
          <input
            type="text"
            name="name"
            id=""
            defaultValue={name}
            placeholder="Type Car Name"
            className="font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full"
          />
        </div>
        <div>
          <div className="flex  items-center gap-3 py-3">
            <TbBrandBlogger></TbBrandBlogger>
            <h1 className="text-[#333333] font-mont font-bold text-xl">
              Brand Name
            </h1>
            <p className="text-red-400 font-black text-2xl">*</p>
          </div>
          <input
            type="text"
            name="brand"
            defaultValue={brand}
            id=""
            placeholder="Type Brand Name"
            className="font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full"
          />
        </div>
        <div>
          <div className="flex  items-center gap-3 py-3">
            <FiType></FiType>
            <h1 className="text-[#333333] font-mont font-bold text-xl">Type</h1>
            <p className="text-red-400 font-black text-2xl">*</p>
          </div>
          <input
            type="text"
            name="type"
            defaultValue={type}
            id=""
            placeholder="Type Car or Other"
            className="font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full"
          />
        </div>
        <div>
          <div className="flex  items-center gap-3 py-3">
            <ImPriceTag></ImPriceTag>
            <h1 className="text-[#333333] font-mont font-bold text-xl">
              Price
            </h1>
            <p className="text-red-400 font-black text-2xl">*</p>
          </div>
          <input
            type="text"
            name="price"
            defaultValue={price}
            id=""
            placeholder="Type the price of the vehicle"
            className="font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full"
          />
        </div>
        <div>
          <div className="flex  items-center gap-3 py-3">
            <MdDescription></MdDescription>
            <h1 className="text-[#333333] font-mont font-bold text-xl">
              Short Description
            </h1>
            <p className="text-red-400 font-black text-2xl">*</p>
          </div>
          <input
            type="text"
            name="description"
            defaultValue={description}
            id=""
            placeholder="Type a short description"
            className="font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full"
          />
        </div>
        <div>
          <div className="flex  items-center gap-3 py-3">
            <FcRating></FcRating>
            <h1 className="text-[#333333] font-mont font-bold text-xl">
              Rating
            </h1>
            <p className="text-red-400 font-black text-2xl">*</p>
          </div>
          <input
            type="text"
            name="rating"
            defaultValue={rating}
            id=""
            placeholder="Type a rating of the product"
            className="font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full"
          />
        </div>
        <div>
          <div className="flex  items-center gap-3 py-3">
            <FaImage></FaImage>
            <h1 className="text-[#333333] font-mont font-bold text-xl">
              Image
            </h1>
            <p className="text-red-400 font-black text-2xl">*</p>
          </div>
          <input
            type="text"
            name="image"
            defaultValue={image}
            id=""
            placeholder="Type image URL."
            className="font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full"
          />
        </div>
        <input
          type="submit"
          value="Update Product"
          className="w-full my-10 px-8 py-3 bg-[#077acc] text-white font-bold rounded-lg"
        />
       </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
