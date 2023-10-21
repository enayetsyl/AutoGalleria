import "./Home.css"
import Header from "../../Components/Header";
import Newsletter from "../../Components/Newsletter";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Car from "../../Components/Car";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer";

const Home = () => {

  const cars = useLoaderData();
  console.log(cars);
  const { handleCardClick, theme } = useContext(AuthContext);



  return (
    <div className={`theme-${theme}`}>
      <Header></Header>
      <div>
        <h1 className="font-mont text-5xl font-bold text-[#333333] text-center py-14">
          Our Brands
        </h1>
        
        <div className="grid grid-cols-2 gap-4">
          {cars.length > 0 && (
            <>
              {cars.map((car) => (
                <div key={car._id} className="col-span-1">
                  <Car car={car} handleCardClick={handleCardClick} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <WhyChooseUs></WhyChooseUs>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
