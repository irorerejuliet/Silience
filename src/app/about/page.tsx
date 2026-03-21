import AboutDetails from "@/components/aboutpage/AboutDetails";
import Footer from "@/components/layouts/Footer";



const page = () => {
  return (
    <div>
      <AboutDetails/>
      <Footer  showTitle={false}/>
    </div>
  );
}

export default page
