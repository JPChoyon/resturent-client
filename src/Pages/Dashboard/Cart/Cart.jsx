import SectionHeader from "../../../Component/SectionHeader/SectionHeader";
import { MdDeleteOutline } from "react-icons/md";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total,item)=>total+item.price,0)
  return (
    <div className="w-full">
      <SectionHeader
        className="w-6/12 mx-auto"
        title={"wanna add more ?"}
        subTitle={"My Cart"}
      ></SectionHeader>
      <div className="uppercase text-3xl flex justify-evenly font-bold">
        <h1>total orders : {cart.length}</h1>
        <h1>total price : $ {totalPrice}</h1>
        <button className="btn btn-primary">pay</button>
      </div>
      <div className="w-full">
        <div className="overflow-x-auto mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cart,index) => (
                <tr key={cart._id}>
                  <th>
                    <label>
                      {index+1}
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cart.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{cart.name}</div>
                    </div>
                  </td>
                  <td>{cart.price}$</td>
                  <th>
                    <button className="btn bg-red-500 text-white text-3xl hover:text-black">
                      <MdDeleteOutline />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
