import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-gray-800 text-white shadow-md">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-5">
        
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-xl">ShopEasy</span>
          </div>
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8 font-semibold">
          <NavLink to="/" className="hover:text-green-400 transition">
            Home
          </NavLink>

          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-green-400 transition" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white animate-bounce">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
