
import { productdetailsData } from './constant/productdetailsData'
import ProductCard from './products/ProductCard';

const YouMayAlsoLIke = () => {
  return (
    <div>
      <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 bg-white">
        {productdetailsData.slice(6, 10).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </section>
      
    </div>
  );
}

export default YouMayAlsoLIke
