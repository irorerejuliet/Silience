"use client"; 
import { ArrowRight, SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex lg:hidden justify-end gap-4 px-4 py-2  relative z-30">
      {/* Menu button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="font-semibold text-white"
      >
        Menu
      </button>

      {/* Cart button */}
      <button
        onClick={() => setCartOpen(true)}
        className="font-semibold text-white"
      >
        Cart (0)
      </button>

      {/* Left Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={() => setMenuOpen(false)} className="p-4 font-bold">
          <X size={20} />
        </button>
        <nav className="flex flex-col gap-6 p-4 text-xs font-medium">
          <Link href="/speakers">Speakers</Link>
          <Link href="/event">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex-col flex gap-2">
            <Link href="/login">Log in</Link>
            <Link href="/createaccount">Create account</Link>
          </div>

          <div className=" flex justify-between ">
            <p className=" border-b  w-80">Search</p>
            <SearchIcon />
          </div>
        </nav>
      </div>

      {/* Right Sidebar Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 z-40 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 ">
          <p className="text-xs font-medium">Your cart -0-item</p>
          <button onClick={() => setCartOpen(false)} className="font-bold">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 text-xs font-medium space-y-6">
          <p>Your cart</p>
          <p>Your cart is currently empty</p>
          <p className="flex items-center gap-4 underline">Continue Shopping <ArrowRight/></p>
          
        </div>
      </div>

      {/* Overlay when any sidebar is open */}
      {(menuOpen || cartOpen) && (
        <div
          onClick={() => {
            setMenuOpen(false);
            setCartOpen(false);
          }}
          className="fixed inset-0 bg-black/50 z-30"
        ></div>
      )}
    </div>
  );
};

export default MobileNavbar;
