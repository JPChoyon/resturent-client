import { useContext } from "react";
import { AuthContext } from "../../../Context/Context";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import useCart from "../../../Hooks/useCart";

const ShopCard = ({ menu }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const [,refetch]= useCart()
  const { name, image, price, recipe, _id } = menu;
  const handleCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/cart", cartItem).then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "wow...",
            text: "Your prodact added in the cart",
          });
          refetch()
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to do this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[250px]"
            src={image}
            alt="photo for chef recomended"
          />
          <p className="absolute top-0 right-0 mr-5 px-5  py-2 bg-slate-900 text-white">
            ${price}
          </p>
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title block">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleCart(menu)}
              className="btn btn-outline border-0 border-b-2 "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
