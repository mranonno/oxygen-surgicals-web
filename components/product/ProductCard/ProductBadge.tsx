type Props = {
  price: number;
  discountPrice?: number;
};

const ProductBadge = ({ price, discountPrice }: Props) => {
  if (!discountPrice || discountPrice >= price) return null;

  const saveAmount = price - discountPrice;
  const discountPercent = Math.round((saveAmount / price) * 100);

  return (
    <span className="  border border-amber-500 text-amber-500 text-xs font-semibold pl-1 pr-2 py-1 rounded-r-full shadow">
      Save: ৳{saveAmount} (-{discountPercent}%)
    </span>
  );
};

export default ProductBadge;
