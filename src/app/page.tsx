import HeroSection from "@/components/HeroSection";
import Footer from "@/components/layouts/Footer";
import ProductDetails from "@/components/products/ProductDetails";


const page = () => {
  return (
    <div>
     
      <HeroSection/>
      <ProductDetails />
      <Footer showTitle={true}/>
    </div>
  );
}

export default page
