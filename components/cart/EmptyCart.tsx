// src/components/cart/EmptyCart.tsx
import Link from "next/link";

const EmptyCart = () => (
  <div className="text-center py-20">
    <p className="text-gray-500 mb-4">Your cart is empty</p>
    <Link
      href="/"
      className="inline-block bg-[#0E7A80] text-white px-6 py-2 rounded-md"
    >
      Continue Shopping
    </Link>
  </div>
);

export default EmptyCart;
