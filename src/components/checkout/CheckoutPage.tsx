"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Truck, ShieldCheck, CreditCard } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import MobileNavbar from "../layouts/MobileNavbar";

const CheckoutPage = () => {
  const { cart } = useCartStore();

  // Calculate real totals based on store data
  const subtotal = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return acc + price * item.quantity;
  }, 0);

  const shipping = 0; // Set to 0 for "Free"
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-black font-sans py-20">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* --- Breadcrumbs --- */}
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-gray-400 mb-12">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/cart" className="hover:text-black transition">
            Cart
          </Link>
          <ChevronRight size={12} />
          <span className="text-black font-bold">CheckOut</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* --- Left Column: Billing Details --- */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-bold mb-10 tracking-tight">
              Billing Details
            </h1>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "First Name", required: true },
                { label: "Last Name", required: true },
                { label: "Company Name", optional: true, full: true },
                { label: "Street Address", required: true, full: true },
                { label: "Town/City", required: true },
                { label: "Phone Number", required: true, type: "tel" },
                {
                  label: "Email Address",
                  required: true,
                  type: "email",
                  full: true,
                },
              ].map((input) => (
                <div
                  key={input.label}
                  className={`${input.full ? "md:col-span-2" : ""}`}
                >
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                    {input.label}{" "}
                    {input.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={input.type || "text"}
                    className="w-full bg-white border border-gray-200 px-4 py-3 rounded-sm text-sm focus:border-black outline-none transition-colors"
                  />
                </div>
              ))}

              <div className="md:col-span-2 flex items-center gap-3 mt-2">
                <input
                  type="checkbox"
                  id="save"
                  className="accent-black w-4 h-4"
                  defaultChecked
                />
                <label htmlFor="save" className="text-xs text-gray-600">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* --- Right Column: Order Summary (Connected to Store) --- */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-gray-100 p-8 sticky top-8">
              <h2 className="text-lg font-bold mb-8 border-b pb-4">
                Your Order
              </h2>

              {/* Dynamic Items from Zustand */}
              <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 bg-gray-50 p-1">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase truncate w-32">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          QTY: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs font-bold">
                      $
                      {parseFloat(
                        item.price.replace(/[^0-9.]/g, ""),
                      ).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-4 border-t pt-6">
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">
                    ${subtotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-xs text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-[10px]">
                    Free
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold pt-4 border-t">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mt-10 space-y-3">
                <div className="flex items-center justify-between p-4 border border-black rounded-sm cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-black rounded-full" />
                    <span className="text-[11px] font-bold uppercase">
                      Bank Transfer
                    </span>
                  </div>
                  <div className="flex gap-1 opacity-50">
                    <CreditCard size={16} />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-sm cursor-pointer hover:border-gray-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 border border-gray-300 rounded-full" />
                    <span className="text-[11px] font-bold uppercase text-gray-400">
                      Cash on Delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-2">
                  <input
                    placeholder="Coupon Code"
                    className="flex-1 bg-gray-50 border-none px-4 py-3 text-xs outline-none"
                  />
                  <button className="bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                    Apply
                  </button>
                </div>
                <button className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-transform active:scale-[0.98]">
                  Place Order
                </button>
              </div>

              {/* Trust */}
              <div className="mt-8 flex justify-between items-center opacity-30 px-4">
                <Truck size={20} />
                <ShieldCheck size={20} />
                <div className="text-[9px] font-bold uppercase">
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
