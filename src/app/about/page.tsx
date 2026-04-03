import AboutDetails from "@/components/aboutpage/AboutDetails";
import Footer from "@/components/layouts/Footer";
import MobileNavbar from "@/components/layouts/MobileNavbar";



const page = () => {
  return (
    <div>
      <MobileNavbar/>
      <AboutDetails/>
      <Footer  showTitle={false}/>
    </div>
  );
}

export default page
