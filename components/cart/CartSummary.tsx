"use client";

import { useCartStore } from "@/store/cartStore";

const CartSummary = () => {
  const items = useCartStore((s) => s.items);

  const total = items.reduce(
    (sum, i) => sum + (i.discountPrice ?? i.price) * i.quantity,
    0
  );

  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <h3 className="font-semibold mb-3">Order Summary</h3>

      <div className="flex justify-between text-sm mb-2">
        <span>Subtotal</span>
        <span>৳{total}</span>
      </div>

      <div className="flex justify-between text-sm mb-2">
        <span>Delivery</span>
        <span>৳60</span>
      </div>

      <div className="flex justify-between font-semibold text-lg border-t pt-3">
        <span>Total</span>
        <span>৳{total + 60}</span>
      </div>

      <button className="w-full mt-4 bg-[#0E7A80] text-white py-2 rounded-md">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
