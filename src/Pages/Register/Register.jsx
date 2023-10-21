import { useContext } from 'react';
import registerPhoto from '../../assets/registerPhoto.png'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import swal from 'sweetalert';
import { getAuth, updateProfile } from 'firebase/auth';

const auth = getAuth();


const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
const {createUser, setUserName, setUserPhoto} = useContext(AuthContext)


  const handleRegister = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userName = form.name.value;
    const userPhoto = form.photo.value;
    console.log(email, password, userName, userPhoto)
    if(password.length < 6 ){
      swal("Sorry!", "Your password must have atleast 6 characters.", "error")
      return;
    }else if(!/[A-Z]/.test(password)){
      swal("Sorry!", "Your password must have atleast 1 capital letter.", "error")
      return;
    } else if (!/[!@#$%^&*()\-_=+\[\]{}|\\;:'"<>,.?/]/.test(password)){
      swal("Sorry!", "Your password must have atleast 1 special character.", "error");
      return;
    }

    createUser(email, password)
    .then(result => {
      console.log(result.user);
      if (result.user) {
        setUserName(userName);
        setUserPhoto(userPhoto);
        
        
        // Move the updateProfile call here
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: userPhoto
        })
        .then(() => {
          // Handle success
          swal("Congratulation!", "Your Registration Complete!", "success");

          fetch('https://brand-shop-server-35jjqg4co-md-enayetur-rahmans-projects.vercel.app/register',{
          method:'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            name: userName,
            email,
          })
        } )
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          navigate(location?.state ? location.state : '/');
        })
        })
        .catch(error => {
          console.log(error);
        });
      }
    })
    .catch(error => {
      console.log(error);
      if (error) {
        swal("Sorry!", `${error.message}`, "error");
      }
    });
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
            <label className="block text-sm font-semibold text-[#333333]">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-[#dddddd] rounded-lg focus:outline-none focus:border-[#dddddd]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#333333]">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="Put photo URL"
              className="w-full px-3 py-2 border border-[#dddddd] rounded-lg focus:outline-none focus:border-[#dddddd]"
              required
            />
          </div>
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

export default Register;


