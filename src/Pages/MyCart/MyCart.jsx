import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const MyCart = () => {
  const {user} = useContext(AuthContext)
  const userEmail = user.email;
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetch(`https://brand-shop-server-two-tau.vercel.app/mycart/${userEmail}`)
    .then(res => res.json())
    .then(data => {
      setCartItems(data)
    }).catch(error => {
      console.error("Error fetching cart items: ", error);
    })
  },[userEmail]);

  console.log(cartItems)

  const handleDelete = (_id) => {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`https://brand-shop-server-two-tau.vercel.app/deletecart/${userEmail}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ _id }),
})
  .then((res) => res.json())
  .then((data) => {
    // Assuming the deletion was successful, you can update the state
    if (data.success) {
      // Remove the deleted item from cartItems state
      setCartItems((prevItems) => prevItems.filter((item) => item.product._id !== _id));
    }
  })
  .catch((error) => {
    console.error('Error deleting item: ', error);
  });
        swal("Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  }

  return (
    <div>
    {
      (cartItems.length>0) 
      ? 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5 w-11/12 mx-auto">
      {cartItems.map((cartItem) => (
        <div key={cartItem.product._id}
        >
          <div className="border border-solid border-[#dddddd] rounded-2xl bg-[#ffffff]">
            <img src={cartItem.product.image} alt={cartItem.product.name} className="rounded-t-2xl h-[400px] w-full" />
            <div className="p-5 font-roboto ">
            <p className="text-4xl font-black text-[#333333]">{cartItem.product.brand}</p>
            <h1 className="pl-5 text-3xl font-extrabold text-[#333333]">{cartItem.product.name}</h1>
            <p className="pl-10 text-2xl font-bold text-[#333333]">{cartItem.product.type}</p>
            <div className="flex justify-around pt-4 font-bold text-[#333333]">
            <p>Rating: {cartItem.product.rating}</p>
            <p>Price: {cartItem.product.price}</p>
            </div>
            <h1 className="text-[#e79a9a] py-5">{cartItem.product.description}</h1>
            <div className="flex justify-between">
              <button 
              onClick={() => handleDelete(cartItem.product._id)}
              className="bg-[#007acc] text-white font-semibold border border-solid border-[#dddddd] w-full px-10 py-3 rounded-3xl">Delete from cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
      :
      <div>
        <h2 className="text-center text-6xl h-screen font-mont my-20 text-[#333333]">You have no item in your cart</h2>
      </div>

     }
    </div>
  );
};

export default MyCart;