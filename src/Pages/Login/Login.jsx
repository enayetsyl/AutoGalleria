import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginPhoto from '../../assets/loginPhoto.jpg'
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import { useContext } from "react";

const Login = () => {

  const {loading, userLogin, googleLogin} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    userLogin(email, password)
    .then(result => {
      console.log(result.user)
      if(result.user){
        swal("Congratulation!", "Your login successful!", "success")
        navigate(location?.state ? location.state : '/');
      }
    })
    .catch(error => {
      if(error){
        swal("Sorry!", `${error.message}`, "error");
      }
    })
  }

  const handleGoogleSignIn = e => {
    e.preventDefault();
    googleLogin()
    .then(result => {
      if(result.user){
        swal("Congratulation!", "Your login successful!", "success");
        navigate(location?.state ? location.state : '/');
      }
    })
    .catch(error => {
      if(error){
        swal("Sorry!", `${error.message}`, "error");
      }
    })
  }

  return (
    <div 
    style={{backgroundImage: `url(${loginPhoto})`}}
    className="min-h-[82vh] flex items-center justify-center p-5">
      <div className="bg-[#ffffff] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#333333]">Login</h1>
        <form onSubmit={handleLogin}>
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
              Login
            </button>
          </div>
        </form>
        <p className="text-sm mt-4 text-center">
          Do not have an account?
          <span className="text-[#007ACC] pl-2 font-semibold">
            <Link to="/register">Register</Link>
          </span>
        </p>
        <hr />
        <div className="text-center pt-1">
          <h1 className="pb-1 font-bold">Or</h1>
          <div className="bg-[#007ACC] text-white py-3 rounded-lg mb-5 flex items-center justify-center gap-2">
          <BsGoogle /> <button onClick={handleGoogleSignIn}>
             Sign in with Google
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

