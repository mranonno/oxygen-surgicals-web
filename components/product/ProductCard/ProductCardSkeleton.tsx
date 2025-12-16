const ProductCardSkeleton = () => {
  return (
    <div className="border rounded-lg p-3 animate-pulse">
      <div className="h-40 bg-gray-300 rounded" />
      <div className="h-4 bg-gray-300 mt-3 w-3/4" />
      <div className="h-4 bg-gray-300 mt-2 w-1/2" />
    </div>
  );
};

export default ProductCardSkeleton;
