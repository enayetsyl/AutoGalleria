import { FaCar, FaImage } from 'react-icons/fa';
import { TbBrandBlogger } from 'react-icons/tb';
import { FiType } from 'react-icons/fi';
import { ImPriceTag } from 'react-icons/im';
import { MdDescription } from 'react-icons/md';
import { FcRating } from 'react-icons/fc';


const UpdateProduct = () => {
  return (
    <div>
      <div className=" p-10 w-3/4 mx-auto bg-[#ffffff] rounded-xl mt-20">
    <h1 className="py-5 font-mont text-center text-3xl font-bold">Update an Existing Automotive Product</h1>
    <div>
      <div className='flex  items-center gap-3 py-3'>
        <FaCar></FaCar>
        <h1 className='text-[#333333] font-mont font-bold text-xl'>Name</h1>
        <p className='text-red-400 font-black text-2xl'>*</p>
      </div>
      <input type="text" name="name" id="" placeholder='Type Car Name' className='font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full'/>
    </div>
    <div>
      <div className='flex  items-center gap-3 py-3'>
        <TbBrandBlogger></TbBrandBlogger>
        <h1 className='text-[#333333] font-mont font-bold text-xl'>Brand Name</h1>
        <p className='text-red-400 font-black text-2xl'>*</p>
      </div>
      <input type="text" name="brand" id="" placeholder='Type Brand Name' className='font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full'/>
    </div>
    <div>
      <div className='flex  items-center gap-3 py-3'>
        <FiType></FiType>
        <h1 className='text-[#333333] font-mont font-bold text-xl'>Type</h1>
        <p className='text-red-400 font-black text-2xl'>*</p>
      </div>
      <input type="text" name="type" id="" placeholder='Type Car or Other' className='font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full'/>
    </div>
    <div>
      <div className='flex  items-center gap-3 py-3'>
        <ImPriceTag></ImPriceTag>
        <h1 className='text-[#333333] font-mont font-bold text-xl'>Price</h1>
        <p className='text-red-400 font-black text-2xl'>*</p>
      </div>
      <input type="text" name="price" id="" placeholder='Type the price of the vehicle' className='font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full'/>
    </div>
    <div>
      <div className='flex  items-center gap-3 py-3'>
        <MdDescription></MdDescription>
        <h1 className='text-[#333333] font-mont font-bold text-xl'>Short Description</h1>
        <p className='text-red-400 font-black text-2xl'>*</p>
      </div>
      <input type="text" name="description" id="" placeholder='Type a short description' className='font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full'/>
    </div>
    <div>
      <div className='flex  items-center gap-3 py-3'>
        <FcRating></FcRating>
        <h1 className='text-[#333333] font-mont font-bold text-xl'>Rating</h1>
        <p className='text-red-400 font-black text-2xl'>*</p>
      </div>
      <input type="text" name="rating" id="" placeholder='Type a rating of the product' className='font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full'/>
    </div>
    <div>
      <div className='flex  items-center gap-3 py-3'>
        <FaImage></FaImage>
        <h1 className='text-[#333333] font-mont font-bold text-xl'>Image</h1>
        <p className='text-red-400 font-black text-2xl'>*</p>
      </div>
      <input type="text" name="image" id="" placeholder='Type image URL.' className='font-roboto text-[#666666] border-solid border-b-2 border-[#dddddd] p-3 w-full'/>
    </div>
    <input type="submit" value="Update Product" className='w-full my-10 px-8 py-3 bg-[#077acc] text-white font-bold rounded-lg' />
      </div>
    </div>
  );
};

export default UpdateProduct;