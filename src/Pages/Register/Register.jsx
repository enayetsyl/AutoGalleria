import registerPhoto from '../../assets/registerPhoto.png'
import { Link } from "react-router-dom";

const Login = () => {

  const handleRegister = e =>{
    e.preventDefault();
  }

    return (
    <div 
    style={{
    backgroundImage: `url(${registerPhoto})`
    }}
    className="min-h-[80vh] flex items-center justify-center p-5">
      <div className="bg-[#ffffff] border border-solid border-[#dddddd] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#333333]">Register</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#333333]">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-[#dddddd] rounded-lg focus:outline-none focus:border-[#dddddd]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#333333]">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 border border-[#dddddd] rounded-lg focus:outline-none focus:border-[#dddddd]"
              required
            />
          </div>
          <div className="text-center mt-6">
            <button className="bg-[#007ACC] text-white py-2 px-4 rounded-lg hover:bg-[#007ACC]">
              Register
            </button>
          </div>
        </form>
        <p className="text-sm mt-4 text-center">
          Already have an account?
          <span className="text-[#007ACC] pl-2 font-semibold">
            <Link to="/login">Login</Link>
          </span>
        </p>
        
      </div>
    </div>
  );
};

export default Login;


