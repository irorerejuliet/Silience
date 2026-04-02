

import { productsData } from "@/components/constant/productsData";
import ProductPreview from "@/components/ProductPreview";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = productsData.find((item) => item.href === slug);

  if (!product) {
    notFound(); 
  }

  return (<ProductPreview title={product.title} imageFront={product.imageFront} imageSide={product.imageSide} price={product.price} href={product.href}  />)
  ;
}