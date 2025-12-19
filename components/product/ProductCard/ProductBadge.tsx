type Props = {
  type?: string;
};

const ProductBadge = ({ type }: Props) => {
  if (!type) return null;
  const badgeMap: Record<string, string> = {
    NEW: "bg-green-500",
    SALE: "bg-red-500",
    HOT: "bg-orange-500",
  };

  return (
    <span
      className={`text-white text-xs rounded-full px-2 py-1 ${
        badgeMap[type] || ""
      }`}
    >
      {type}
    </span>
  );
};

export default ProductBadge;
