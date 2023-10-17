import { Link, useRouteError } from "react-router-dom";
import page from '../../assets/404.jpg'
import { BiSolidHome } from 'react-icons/bi';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="ml-20 mt-20">
       <Link to='/'> <button className="text-[#ffffff] font-roboto bg-[#007ACC] flex items-center gap-3 py-3 px-5 rounded-lg font-semibold text-2xl">Go To <BiSolidHome className="text-3xl"></BiSolidHome></button></Link>
        
      </div>
      <div>
      <img src={page} alt="" className="h-[75vh] mx-auto"/>
      </div>
    </div>
  );
};

export default ErrorPage;