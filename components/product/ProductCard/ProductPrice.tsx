type Props = {
  price: number;
  discountPrice?: number;
};

const ProductPrice = ({ price, discountPrice }: Props) => {
  return (
    <div className="flex gap-2">
      {discountPrice && (
        <span className="line-through text-gray-400">৳{price}</span>
      )}
      <span className="font-semibold text-primary">
        ৳{discountPrice ?? price}
      </span>
    </div>
  );
};

export default ProductPrice;
