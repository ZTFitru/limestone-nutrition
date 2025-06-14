function ProductCard({ name, image, price, bg, onClick }) {
    return (
      <div 
        className="flex flex-col items-center text-white p-4 w-64 rounded-xl relative mt-10 mb-10 transform transition duration-300 hover:scale-105 cursor-pointer"
        onClick={onClick}
      >
        <div className={`rounded-full h-80 w-80 flex items-center justify-center  ${bg}`}>
          <img src={image} alt={name} className="h-70 object-contain" />
        </div>
        <div className="bg-white text-black px-3 py-1 rounded-full text-sm font-semibold mt-2">${price.toFixed(2)}</div>
        <h2 className="text-lg text-black font-semibold mt-2">{name}</h2>
      </div>
    );
  }
  
  export default ProductCard;