import Footer from '@/components/layouts/Footer'
import ProductDetails from '@/components/products/ProductDetails'
const page = () => {
  return (
    <div>

      <ProductDetails columns='lg:grid-cols-4'/>
<Footer showTitle={false}/>
    </div>
  )
}

export default page
