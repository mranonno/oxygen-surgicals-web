"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { CartProduct } from "@/types/product";

const CartItem = ({ item }: { item: CartProduct }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCartStore();

  const price = item.discountPrice ?? item.price;
  const total = price * item.quantity;

  return (
    <div className="flex items-center gap-4 border-b border-gray-200 py-4">
      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        aria-label="Remove item"
        className="ml-2 text-gray-400 hover:text-red-500 transition"
      >
        <X size={18} strokeWidth={2} />
      </button>

      {/* Image */}
      <div className="relative w-20 h-20 shrink-0 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900 line-clamp-1">
          {item.name}
        </p>

        <p className="text-xs text-gray-500 mt-0.5">৳{price}</p>

        {/* Quantity control */}
        <div className="flex items-center mt-2 border border-gray-300 rounded-md w-max overflow-hidden">
          <button
            onClick={() => decreaseQty(item.id)}
            disabled={item.quantity === 1}
            aria-label="Decrease quantity"
            className="flex items-center justify-center w-8 h-8 text-gray-600
                       hover:bg-[#0E7A80] hover:text-white transition
                       disabled:opacity-40 disabled:pointer-events-none
                       active:scale-95"
          >
            <Minus size={14} strokeWidth={2} />
          </button>

          <span className="w-8 text-center text-sm font-medium text-gray-700">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQty(item.id)}
            aria-label="Increase quantity"
            className="flex items-center justify-center w-8 h-8 text-gray-600
                       hover:bg-[#0E7A80] hover:text-white transition
                       active:scale-95"
          >
            <Plus size={14} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Total */}
      <p className="font-medium text-gray-900 whitespace-nowrap">৳{total}</p>
    </div>
  );
};

export default CartItem;
