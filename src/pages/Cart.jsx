import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="min-h-[80vh] p-6">
      {cart.length > 0 ? (
        <div className="flex flex-col justify-between max-w-6xl mx-auto gap-8">
          {/* Cart Items Section */}
          <div className="flex-grow space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="text-xl font-semibold mb-4 text-gray-800">
              Your Cart Summary
            </div>
            <p className="mb-2">
              <span className="font-medium text-gray-700">Total Items:</span> {cart.length}
            </p>
            <p className="text-lg font-bold mb-4 text-gray-900">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>
            <button className="bg-blue-600 text-white py-3 px-5 rounded-lg hover:bg-blue-700 transition-all w-full font-semibold">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[80vh] text-center">
          <h1 className="text-3xl font-semibold text-gray-700 mb-6">
            Your Cart is Empty
          </h1>
          <Link to="/">
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all font-semibold">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
