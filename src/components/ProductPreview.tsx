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
console.log(isVideo)
  return (
    <div>
      {isVideo && <video src={videoUrl}></video>}
      <h1>{title}</h1>
    </div>
  )
}

export default ProductPreview
