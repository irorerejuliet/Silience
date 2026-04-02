"use client";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

const Page =() =>{
  const { cart, removeFromCart } = useCartStore();

  const total = cart.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0,
  );

  return (
    <div className="p-10 bg-white text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b pb-4">
              <div className="flex gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={100}
                />
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>Qty: {item.quantity}</p>
                  <p>${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-10 text-right">
            <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
            <button className="bg-black text-white px-10 py-3 mt-4">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Page