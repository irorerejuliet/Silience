

import { productsData } from './constant/productsData';
import ProductCard from './products/ProductCard';

const YouMayAlsoLIke = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-white">
        {productsData.slice(6, 10).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      
    </div>
  );
}

export default YouMayAlsoLIke
