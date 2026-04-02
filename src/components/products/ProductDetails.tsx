import { productsData } from "../constant/productsData";
import ProductCard from "./ProductCard";


const ProductDetails = ({columns = "lg:grid-cols-3"}) => {

  return (
    <section className={`grid ${columns} md:grid-cols-2 grid-cols-1 bg-white`}>
      {productsData.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </section>
  );
}

export default ProductDetails
