import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar px-5 py-5 bg-[#333333]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#333333]  rounded-box w-52">
        <li>
          <Link to='/' className="font-mont font-medium text-lg text-white">Home</Link>
          </li>
        <li>
          <Link to='/addproduct' className="font-mont font-medium text-lg text-white">Add Product</Link>
          </li>
        <li>
          <Link to='/mycart' className="font-mont font-medium text-lg text-white">My Cart</Link>
          </li>
        
      </ul>
    </div>
    <p className="font-mont text-[#007acc]"><span className="font-bold text-5xl md:text-6xl">Auto</span><span className="font-medium text-3xl md:text-4xl">Galleria</span></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
          <Link to='/' className="font-mont font-medium text-lg text-white">Home</Link>
          </li>
        <li>
          <Link to='/addproduct' className="font-mont font-medium text-lg text-white">Add Product</Link>
          </li>
        <li>
          <Link to='/mycart' className="font-mont font-medium text-lg text-white">My Cart</Link>
          </li>
    </ul>
  </div>
  <div className="navbar-end">
   <Link to='/login'><button className="btn">Login</button></Link>
  </div>
</div>
    </div>
  );
};

export default Navbar;