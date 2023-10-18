import { useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Newsletter from "../../Components/Newsletter";
import WhyChooseUs from "../../Components/WhyChooseUs";
import Car from "../../Components/Car";
import { useState } from "react";

const Home = () => {
  const cars = useLoaderData();
  const [product, setProduct] = useState(null)
  console.log(product)

  const handleCardClick = async (name) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${name}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }
   
  

  // const handleCardClick = (name) => {
  //   console.log(name)
  //   fetch(`http://localhost:5000/products/${name}`)
  //   .then(res=> res.json())
  //   .then(data => {
  //     console.log(data)
  //     setProduct(data)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

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
          <Car car={cars[0]} handleCardClick={handleCardClick}/>
        </div>
        {
          cars.slice(1).map(car => (
            <div key={car._id} className="col-span-1">
              <Car car={car} handleCardClick={handleCardClick}/>
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