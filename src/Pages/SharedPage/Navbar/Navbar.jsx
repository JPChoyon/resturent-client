import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/Context";
import cartImg from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart]= useCart()
  const handleLogout=()=> {
  logOut()
    .then()
  .catch(err=>console.log(err))
  }
  const navItems = (
    <>
      <NavLink to={"/"}>
        <li className=" font-bold uppercase text-white hover:text-white active:text-yellow-400">
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to={"/contact-us"}>
        <li className=" font-bold uppercase text-white hover:text-white active:text-yellow-400">
          <a>CONTACT us</a>
        </li>
      </NavLink>
      <NavLink to={"/dashboard"}>
        <li className=" font-bold uppercase text-white hover:text-white active:text-yellow-400">
          <a>DASHBOARD</a>
        </li>
      </NavLink>
      <NavLink to={"/menu"}>
        <li className=" font-bold uppercase text-white hover:text-white active:text-yellow-400">
          <a>Our Menu</a>
        </li>
      </NavLink>
      <NavLink to={"/our-shop/salad"}>
        <li className=" font-bold uppercase text-white hover:text-white active:text-yellow-400">
          <a>Our Shop</a>
        </li>
      </NavLink>
      <NavLink to={"/dashboard"}>
        <div className="avatar indicator">
          <span className="indicator-item badge badge-secondary">
            {cart.length}
          </span>
          <div className="w-10 h-10 rounded-lg">
            <img alt="Tailwind CSS examples" src={cartImg} />
          </div>
        </div>
      </NavLink>
      {/* {
        user ? <>
        <NavLink >
        <li onClick={handleLogout} className=" font-bold uppercase text-white hover:text-white active:text-yellow-400">
          <a>logout</a>
        </li>
      </NavLink>
        </>:<><NavLink to={"/login"}>
        <li className=" font-bold uppercase text-white hover:text-white active:text-yellow-400">
          <a>Login</a>
        </li>
      </NavLink></>
      } */}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-50 max-w-7xl mx-auto bg-[#15151580] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 hover:bg-none"
            >
              {navItems}
            </ul>
          </div>
          <div className="text-white navlogo">
            <h5 className="font-black text-xl">BISTRO BOSS</h5>
            <h4 className="font-bold ">Restaurant</h4>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <NavLink>
                <li
                  onClick={handleLogout}
                  className=" font-bold uppercase list-none text-white hover:text-white active:text-yellow-400"
                >
                  <a>logout</a>
                </li>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>
                <li className=" font-bold uppercase list-none text-white hover:text-white active:text-yellow-400">
                  <a>Login</a>
                </li>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
