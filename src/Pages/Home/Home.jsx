import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Newsletter from "../../Components/Newsletter";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Car from "../../Components/Car";

const Home = () => {
  const cars = useLoaderData();
  console.log(cars)
  return (
    <div>
   <Header></Header>
   <div>
    <h1 className="font-mont text-5xl font-bold text-[#333333] text-center py-14">Our Brands</h1>
    <div className="grid grid-cols-2 gap-4">
    {
      cars.length > 0 && (
        <>
        <div className="col-span-1">
          <Car car={cars[0]}/>
        </div>
        {
          cars.slice(1).map(car => (
            <div key={car._id} className="col-span-1">
              <Car car={car}/>
            </div>
          ))
        }
        </>
      )
    }
    </div>
   </div>
   <WhyChooseUs></WhyChooseUs>
   <Newsletter></Newsletter>
   <Footer></Footer>
    </div>
  );
};

export default Home;