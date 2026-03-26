"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProductProps = {
  title: string;
  imageFront: string;
  imageSide: string;
  price: string;
  soldOut?: boolean;
  href: string;
};

const ProductCard = ({
  title,
  imageFront,
  imageSide,
  price,
  href,
  soldOut,
}: ProductProps) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >
        <Link href={href}>
          <Image
            src={flipped ? imageSide : imageFront}
            alt={title}
            width={635}
            height={876}
            className="object-contain"
          />
        </Link>
      </div>

      <div className="p-4 text-sm font-medium text-black bg-white">
        <h3>{title}</h3>

        {soldOut ? <p className="text-gray-700">Sold out</p> : null}

        <p className={`${soldOut ? "line-through text-gray-400" : ""}`}>
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
