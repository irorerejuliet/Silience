import Image from "next/image";

type ProductProps = {
  title: string;
  image: string;
  price: string;
  soldOut?: boolean;
};

const  ProductCard =  ({
  title,
  image,
  price,
  soldOut,
}: ProductProps) => {
  return (
    <div className="flex flex-col">
      {/* bg-gradient-to-b from-gray-800 to-gray-200 */}
      <div className=" flex items-center justify-between">
        <Image
          src={image}
          alt={title}
          width={635}
          height={876}
          className="object-contain"
        />
      </div>
      <div className="p-4 text-sm font-medium text-black bg-white">
        <h3 className="">{title}</h3>

        {soldOut ? <p className="text-gray-700">Sold out</p> : null}

        <p className={`${soldOut ? "line-through text-gray-400" : ""}`}>
          {price}
        </p>
      </div>
    </div>
  );
}
export default ProductCard