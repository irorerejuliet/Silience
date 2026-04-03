"use client";
import { useCartStore } from "../store/useCartStore";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartDrawer = () => {
  const { cart, isDrawerOpen, toggleDrawer, removeFromCart } = useCartStore();
  const router = useRouter();

  
  const subtotal = cart.reduce((acc, item) => {
    
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    toggleDrawer(false);
    router.push("/checkout");
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
        isDrawerOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => toggleDrawer(false)}
      />

      <div
        className={`relative w-90 bg-white h-full shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center text-black">
          <h2 className="text-[10px] font-bold uppercase tracking-widest">
            Your Cart ({cart.length})
          </h2>
          <button onClick={() => toggleDrawer(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10 text-xs">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b pb-4 text-black"
              >
                <div className="w-16 h-20 relative bg-gray-100 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[10px] font-bold uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-500">
                    Qty: {item.quantity}
                  </p>
                  <p className="text-[10px] mt-1 font-semibold">
                    ${item.price}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[9px] uppercase underline mt-2 text-gray-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        
        {cart.length > 0 && (
          <div className="p-4 border-t bg-white">
            <div className="flex justify-between items-center mb-4 text-black">
              <span className="text-[10px] font-bold uppercase">Subtotal</span>
              <span className="text-xs font-bold">
                $
                {subtotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 flex items-center justify-center gap-2 uppercase text-[10px] tracking-widest font-bold"
            >
              Checkout <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
