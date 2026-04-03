import CheckoutPage from '@/components/checkout/CheckoutPage'
import Footer from '@/components/layouts/Footer'
import MobileNavbar from '@/components/layouts/MobileNavbar'

const page = () => {
  return (
    <div>
        <MobileNavbar/>
      <CheckoutPage/>
      <Footer showTitle={false}/>
    </div>
  )
}

export default page
