function ProductCard({ name, image, price, bg }) {
    return (
      <div className="flex flex-col items-center text-white p-4 w-64 rounded-xl relative mt-10 mb-10">
        <div className={`rounded-full h-80 w-80 flex items-center justify-center  ${bg}`}>
          <img src={image} alt={name} className="h-70 object-contain" />
        </div>
        <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold mt-2">${price.toFixed(2)}</div>
        <h2 className="text-lg text-black font-semibold mt-2">{name}</h2>
      </div>
    );
  }
  
  export default ProductCard;