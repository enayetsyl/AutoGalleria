
const Newsletter = () => {
  return (
    <div className="w-10/12 mx-auto my-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
      <h1 className="col-span-1 text-[#333333] font-bold font-mont text-4xl">Newsletter</h1>
      <div className="col-span-2 flex justify-center items-center gap-3">
        <input type="email" name="email" id="" required className="p-3 rounded-lg text-[#666666] w-full" placeholder='Your email address'  />
        <input type="submit" value="Sign up" className="bg-[#007acc] text-white border border-solid border-[#dddddd] py-3 px-8 font-semibold rounded-lg" />
      </div>
      <p className="col-span-1 text-[#666666]">Subscribe to our newsletter and stay updated with our offer</p>
      </div>
    </div>
  );
};

export default Newsletter;