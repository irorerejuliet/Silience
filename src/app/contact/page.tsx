import ContactDetails from "@/components/contactpage/ContactDetails"
import Footer from "@/components/layouts/Footer"


const page = () => {
  return (
    <div>
      <ContactDetails/>
      <Footer showTitle={false}/>
    </div>
  )
}

export default page
