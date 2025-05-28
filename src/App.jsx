import { useRef, useState } from 'react';
import About from './components/About';
import LocationHours from './components/LocationHours';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import ProductDetail from './components/ProductDetail';

function App() {
  const detailRef = useRef(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-[#D6D2C4]">
      <Navbar />
      <div className='min-h-screen pt-24 bg-[#d6d2c4]'>
        <h1 className="p-6 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-wide text-center">
          <span className="text-lime-700">Limestone</span> <span className="text-gray-700">Nutrition</span>
        </h1>
        <main className="bg-[#D6D2C4] py-10 px-6 flex flex-wrap justify-around gap-8">
          {products.map((p) => (
            <ProductCard 
              key={p.name} {...p} 
              onClick={()=> {
                setSelectedProduct(p)
                setTimeout(()=> {
                  detailRef.current?.scrollIntoView({ behavior: 'smooth'})
                }, 50)
              }} 
              />
          ))}
        </main>
        {selectedProduct && (
          <div ref={detailRef}>
            <ProductDetail product={selectedProduct} onClose={()=> setSelectedProduct(null)} />
          </div>
        )}
        <Menu />
        <About />
        <LocationHours />
      </div>
    </div>
  )
}

export default App;
