"use client"

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProductProps = {
  title: string;
  imageFront: string;
  imageSide: string;
  price: string;
  soldOut?: boolean;
  href: string;
  isVideo?: boolean;
  videoUrl: string;
};

const ProductPreview = ({
  title,
  imageFront,
  imageSide,
  price,
  href,
  isVideo,
  videoUrl,
  soldOut,
}: ProductProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };
console.log(isVideo)
  return (
    <div className="flex bg-white text-black gap-5">
      <div className="">
        <Image src={imageFront} alt={title} width={920} height={1190} />
        <Image src={imageSide} alt={title} width={920} height={1190} />
      </div>
      <div>
        <h1>{title}</h1>
        <p className="text-sm mb-2">Quantity:</p>

        <div className="flex items-center gap-4">
          <button onClick={decrease} className="text-lg">
            −
          </button>

          <span>{quantity}</span>

          <button onClick={increase} className="text-lg">
            +
          </button>
        </div>
        <div className="">
          <button className="border border-black text-black lg:w-147 w-full py-1 px-6 flex items-center justify-center text-sm">
            Add to Cart <ArrowRight size={15}/>
          </button>
          <button className="flex items-center bg-black text-white lg:w-147 w-full py-1 px-6 my-2 justify-center">
            Buy with
            <Image src="/images/google-icon.png" alt="" width={50} height={5} />Pay</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview




// const ProductPreview = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {hushinSilverImages.map((image, index) => (
//           <div key={index} className="relative w-full h-[300px]">
//             <Image
//               src={image}
//               alt={`Product image ${index + 1}`}
//               fill
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//       <h1></h1>
//     </div>
//   );
// };

// export default ProductPreview;
