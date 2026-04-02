"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// 1. Import the cart store


// Import your constants and components
import QuestionAndAnswer from "./QuestionAndAnswer";
import { questionAndAnswerData } from "./constant/questionAndAnswerData";
import YouMayAlsoLIke from "./YouMayAlsoLIke";
import Footer from "./layouts/Footer";
import { productImages } from "./constant/productImages";
import { allproductsData } from "./constant/allproductsData";
import AllProductDetails from "./products/AllProductDetails";
import { useCartStore } from "@/store/useCartStore";

type ProductProps = {
  title: string;
  imageFront: string;
  imageSide: string;
  price: string;
  soldOut?: boolean;
  href: string;
};

const ProductPreview = ({
  title,
  imageFront,
  imageSide,
  price, // Ensure price is passed in props
  href,
}: ProductProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  // 2. Initialize the addToCart function from our store
  const addToCart = useCartStore((state) => state.addToCart);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const imagesToRender = [
    imageFront,
    imageSide,
    ...(productImages[href] || []),
  ];

  const productDetails = allproductsData[href as keyof typeof allproductsData];

  // 3. Handle the Click Event
  const handleAddToCart = () => {
    addToCart({
      id: href, // Use href or a unique ID from your data
      title,
      price,
      image: imageFront,
      quantity,
    });

    // Optional: Visual feedback
    alert(`${quantity} ${title} added to your cart!`);
  };

  return (
    <section>
      <div className="flex bg-white text-black gap-2 pb-10">
        <div className="flex-1">
          {imagesToRender.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={title}
              width={920}
              height={1190}
              priority={index === 0} // Good for SEO/LCP
            />
          ))}
        </div>

        <div className="w-238 h-413.75 sticky top-0 p-4">
          <h1 className="text-xl font-bold uppercase">{title}</h1>
          <p className="text-lg mb-4">${price}</p>

          <p className="text-sm mb-2">Quantity:</p>
          <div className="flex items-center gap-4 mb-6 border w-fit px-4 py-1 border-black">
            <button onClick={decrease} className="text-lg hover:opacity-50">
              −
            </button>
            <span className="min-w-[20px] text-center">{quantity}</span>
            <button onClick={increase} className="text-lg hover:opacity-50">
              +
            </button>
          </div>

          {/* 4. The Action Button */}
          <button
            onClick={handleAddToCart}
            className="border border-black text-black lg:w-147 w-full py-2 px-6 flex items-center justify-center text-sm hover:bg-black hover:text-white transition-colors"
          >
            Add to Cart <ArrowRight size={15} className="ml-2" />
          </button>

          <button className="flex items-center bg-black text-white lg:w-147 w-full py-2 px-6 my-2 justify-center hover:opacity-90">
            Buy with
            <Image
              src="/images/google-icon.png"
              alt="GPay"
              width={50}
              height={5}
              className="mx-1"
            />
            Pay
          </button>

          <div className="mt-8">
            {productDetails && <AllProductDetails {...productDetails} />}
            <QuestionAndAnswer faqs={questionAndAnswerData} />
          </div>
        </div>
      </div>
      <YouMayAlsoLIke />
      <Footer showTitle={false} />
    </section>
  );
};

export default ProductPreview;
