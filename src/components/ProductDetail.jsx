function ProductDetail({ product, onClose }) {
  return (
    <div className="max-w-xl mx-auto bg-white text-black rounded-xl shadow-lg p-6 mt-10">
      <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
      <img src={product.image} alt={product.name} className="w-64 mx-auto mb-4 rounded-lg" />
      <p className="text-base mb-2">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
      >
        Close
      </button>
    </div>
  );
}

export default ProductDetail;