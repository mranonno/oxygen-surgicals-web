"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { CartProduct } from "@/types/product";

const CartItem = ({ item }: { item: CartProduct }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCartStore();

  return (
    <div className="flex items-center gap-4 border-b py-4">
      <Image
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="rounded-md"
      />

      <div className="flex-1">
        <p className="text-sm font-medium">{item.name}</p>
        <p className="text-xs text-gray-500">
          ৳{item.discountPrice ?? item.price}
        </p>

        <div className="flex items-center gap-3 mt-2">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-xs ml-4"
          >
            Remove
          </button>
        </div>
      </div>

      <p className="font-medium">
        ৳{(item.discountPrice ?? item.price) * item.quantity}
      </p>
    </div>
  );
};

export default CartItem;
