import HeroSection from "@/components/HeroSection";
import Footer from "@/components/layouts/Footer";
import ProductDetails from "@/components/products/ProductDetails";


const page = () => {
  return (
    <main>
      {/* <img
        height="160"
        width="160"
        src="http://www.google.com/s2/favicons?domain=https://silenceplease.com/products/hush-in-matte-black?variant=43305895100458"
        className="bg-white"
      /> */}
      <HeroSection />
      <ProductDetails />
      <Footer showTitle={true} />
    </main>
  );
}

export default page
