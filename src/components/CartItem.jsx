import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Image Section */}
      <div className="w-1/5">
        <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
      </div>

      {/* Content Section */}
      <div className="w-4/5 flex flex-col space-y-2">
        {/* Title and Description */}
        <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
        <p className="text-gray-500 text-sm truncate">
          {item.description.split(" ").slice(0, 20).join(" ") + "..."}
        </p>

        {/* Price and Delete Button */}
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</p>
          <button
            onClick={removeFromCart}
            className="text-red-600 hover:text-red-800 transition duration-300"
          >
            <FcDeleteDatabase size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
