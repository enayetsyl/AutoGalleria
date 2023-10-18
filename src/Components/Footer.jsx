import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#222222] py-10 ">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-5 items-start justify-center w-10/12 mx-auto">
    <p className="font-mont text-[#007acc] col-span-1"><span className="font-bold text-5xl md:text-6xl">Auto</span><br /><span className="font-medium text-3xl md:text-4xl">Galleria</span></p>
    <div className="text-white col-span-1 font-roboto">
      <ul className="space-y-4">
        <li className="list-disc"><Link to='/'>Home</Link></li>
        <li className="list-disc"><Link to='/addproduct'>Add Product</Link></li>
        <li className="list-disc"><Link to='/mycart'>My Cart</Link></li>
      </ul>
    </div>
    <p className="font-roboto text-[#666666] col-span-1 pr-5">At AutoGalleria, we are dedicated to redefining the automotive experience. Our passion for innovation, unrivaled industry knowledge.</p>
    <div className="text-white col-span-1 font-roboto">
      <h1>01730- 197 620</h1>
      <p>enayetflweb@gmail.com</p>
      <p>Madina Street, Noor-Al-Jabal, Madina.</p>
    </div>
      </div>    
      <hr className="text-[#666666] mt-8"/>
      <div>
        <p className="text-white pt-5 text-center font-roboto"> Copyright @ 2023. All right reserved. </p>
        </div>  
    </div>
  );
};

export default Footer;