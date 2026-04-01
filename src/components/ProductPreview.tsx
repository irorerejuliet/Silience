"use client"

import Image from "next/image";
import { useState } from "react";
import QuestionAndAnswer from "./QuestionAndAnswer";
import { questionAndAnswerData } from "./constant/questionAndAnswerData";

import { ArrowRight } from "lucide-react";
import YouMayAlsoLIke from "./YouMayAlsoLIke";
import Footer from "./layouts/Footer";
import { productImages } from "./constant/productImages";

import { allproductsData } from "./constant/allproductsData";
import AllProductDetails from "./products/AllProductDetails";


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
  href,
}: ProductProps) => {
  const [quantity, setQuantity] = useState<number>(1);

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
            />
          ))}
        </div>
        <div className="w-238 h-413.75 sticky top-0">
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
          <button className="border border-black text-black lg:w-147 w-full py-1 px-6 flex items-center justify-center text-sm">
            Add to Cart <ArrowRight size={15} />
          </button>
          <button className="flex items-center bg-black text-white lg:w-147 w-full py-1 px-6 my-2 justify-center">
            Buy with
            <Image src="/images/google-icon.png" alt="" width={50} height={5} />
            Pay
          </button>

          {productDetails && <AllProductDetails {...productDetails} />}
          <QuestionAndAnswer faqs={questionAndAnswerData} />
        </div>
      </div>
      <YouMayAlsoLIke />
      <Footer showTitle={false} />
    </section>
  );
}

export default ProductPreview

