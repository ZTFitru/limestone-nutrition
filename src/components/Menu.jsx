import { useState } from 'react';
import { allProducts } from '../data/products';

function Menu() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 10

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <section id="menu" className="scroll-mt-24 py-12 px-6 bg-[#8C9B8E] text-white min-h-screen">
      <h2 className="text-black text-3xl font-bold text-center mb-6">Our Drinks Menu</h2>

      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search for a drink..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            setCurrentPage(1);
          }}
          className="w-full px-4 py-2 rounded-md text-black"
        />
      </div>

      <div className="max-w-3xl mx-auto grid gap-4">
        {currentProducts.map((drink, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-[#2d3a3f] rounded-md px-4 py-3 hover:bg-[#3c4a50] transition"
          >
            <span className="text-lg font-medium">{drink.name}</span>
            <span className="text-sm font-semibold">${drink.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === i + 1
                ? 'bg-white text-black font-bold'
                : 'border-white text-white hover:bg-white hover:text-black'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Menu;