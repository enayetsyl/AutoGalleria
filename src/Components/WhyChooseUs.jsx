import { FaBuromobelexperte } from 'react-icons/fa';
import { GrNew } from 'react-icons/gr';
import { FcHighPriority } from 'react-icons/fc';
const WhyChooseUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14 w-10/12 mx-auto gap-5 ">
      <div className='border border-solid border-[#dddddd] px-5 py-10 bg-[#ffffff]'>
      <div className='text-center space-y-5'>
        <div className='flex justify-center items-center text-5xl'><FaBuromobelexperte></FaBuromobelexperte></div>
        
        <h1 className='font-mont font-bold text-3xl'>Unparalleled Industry Knowledge</h1>
        <p className='font-roboto font-normal text-md text-justify text-[#666666] '>We bring a wealth of expertise in the automotive industry, with a team of professionals who live and breathe cars. Our in-depth understanding of the latest technologies, trends, and best practices ensures that we provide top-notch solutions for your automotive needs.</p>
      </div>
      </div>
      <div className='border border-solid border-[#dddddd] px-5 py-10 bg-[#ffffff] flex flex-col'>
      <div className='text-center space-y-5 '>
        <div className='flex justify-center items-center text-5xl'><GrNew></GrNew></div>
        
        <h1 className='pb-9 font-mont font-bold text-3xl '>Innovation at the Core</h1>
        <p className='font-roboto font-normal text-md text-justify  text-[#666666] '>We stay at the forefront of automotive technology, utilizing cutting-edge tools and methodologies to deliver results that exceed expectations. From designing sleek, modern vehicles to implementing advanced safety features, we're committed to innovation. </p>
      </div>
      </div>
      <div className='border border-solid border-[#dddddd] px-5 py-10 bg-[#ffffff]'>
      <div className='text-center space-y-5'>
        <div className='flex justify-center items-center text-5xl'><FcHighPriority></FcHighPriority></div>
        
        <h1 className='font-mont font-bold text-3xl'>Your Satisfaction, Our Priority</h1>
        <p className='font-roboto font-normal text-md text-justify text-[#666666] '>Our commitment to our customers is unwavering. We put you at the center of everything we do, tailoring our services to meet your unique needs. From personalized customer support to custom solutions, your satisfaction is our top priority. With us, you're not just a client; you're a valued  </p>
      </div>
      </div>
    
    </div>
  );
};

export default WhyChooseUs;