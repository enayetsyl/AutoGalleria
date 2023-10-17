import header from '../assets/header.jpg'

const Header = () => {
  return (
    <div style={{backgroundImage: `url(${header})`}} className='bg-opacity-70 h-[70vh] bg-no-repeat w-[100%]'>
      <p 
      style={{textShadow: '4px 4px 2px rgba(0, 0, 0, 0.9)'}}
      className='text-[#007acc] text-6xl font-mont font-bold p-14 drop-shadow-md '>Explore the World of Automotive Excellence with AutoGalleria</p>
    </div>
  );
};

export default Header;