// src/app/cart/page.tsx
"use client";

import { useCartStore } from "@/store/cartStore";
import CartHeader from "@/components/cart/CartHeader";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  const items = useCartStore((s) => s.items);

  if (items.length === 0) return <EmptyCart />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <CartHeader />
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <CartSummary />
    </div>
  );
}
