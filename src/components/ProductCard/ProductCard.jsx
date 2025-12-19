function ProductCard({ name, price }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <div className="h-48 bg-gray-200 rounded mb-3"></div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">₹{price}</p>
      <button className="mt-3 w-full py-2 bg-black text-white rounded">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
