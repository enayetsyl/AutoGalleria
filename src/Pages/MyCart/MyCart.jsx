import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
  const {user} = useContext(AuthContext)
  const userEmail = user.email;
  console.log(userEmail)

  useEffect(() => {
    console.log('user email:', userEmail)
    fetch(`http://localhost:5000/mycart/${userEmail}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    }).catch(error => {
      console.error("Error fetching cart items: ", error);
    })
  },[userEmail]);

  return (
    <div>
      
    </div>
  );
};

export default MyCart;