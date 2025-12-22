// src/types/product.ts
export type CartProduct = {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  image: string;
  quantity: number;
};
