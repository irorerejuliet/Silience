"use client";
import { useCartStore } from "../store/useCartStore";
import { X, ArrowRight } from "lucide-react";
import Image from "next/image";

const CartDrawer = () => {
  const { cart, isDrawerOpen, toggleDrawer, removeFromCart } = useCartStore();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => toggleDrawer(false)}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col">
        <div className="p-4 border-b flex justify-between items-center text-black">
          <h2 className="font-bold uppercase tracking-widest">
            Your Cart ({cart.length})
          </h2>
          <button onClick={() => toggleDrawer(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b pb-4 text-black"
              >
                <div className="w-20 h-24 relative bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-sm mt-1 font-semibold">${item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[10px] uppercase underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <button className="w-full bg-black text-white py-3 flex items-center justify-center gap-2 uppercase text-sm tracking-widest">
              Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
