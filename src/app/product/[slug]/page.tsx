// import { useRouter } from "next/router";
// import Image from "next/image";
// import { productsData } from "@/components/constant/productsData";

// export default function ProductPage() {
//   const router = useRouter();
//   const { slug } = router.query;

//   const product = productsData.find((p) => p.href === `/products/${slug}`);

//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">{product.title}</h1>
//       <div className="flex gap-4 mt-4">
//         <Image
//           src={product.imageFront}
//           alt={product.title}
//           width={400}
//           height={400}
//         />
//         <Image
//           src={product.imageSide}
//           alt={product.title}
//           width={400}
//           height={400}
//         />
//       </div>
//       <p className="mt-4 text-xl">{product.price}</p>
//       {product.soldOut && <p className="text-red-600">Sold Out</p>}
//     </div>
//   );
// }
