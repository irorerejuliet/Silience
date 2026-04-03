"use client";
import { SearchIcon, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react"; // Added useEffect
import { useCartStore } from "@/store/useCartStore";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  const { cart, isDrawerOpen, toggleDrawer } = useCartStore();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Change '50' to the height of your hero section if you want it later
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex lg:hidden justify-between items-center gap-4 px-4 py-4 relative z-30">
        <Link
          href="/"
          className={`text-lg font-bold tracking-wide transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          SILENCE PLEASE
        </Link>

        <div className="flex justify-end gap-5">
          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`font-semibold uppercase text-[10px] tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Menu
          </button>

          {/* Cart button */}
          <button
            onClick={() => toggleDrawer(true)}
            className={`font-semibold uppercase text-[10px] tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {/* Left Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 z-40 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button onClick={() => setMenuOpen(false)} className="p-4 font-bold">
            <X size={20} />
          </button>
          <nav className="flex flex-col gap-6 p-4 text-xs font-medium uppercase tracking-widest">
            <Link href="/speakers" onClick={() => setMenuOpen(false)}>
              Speakers
            </Link>
            <Link href="/event" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <div className="flex-col flex gap-2 pt-4 border-t">
              <Link href="/login" className="text-gray-500">
                Log in
              </Link>
              <Link href="/createaccount" className="text-gray-500">
                Create account
              </Link>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="border-b w-full text-[10px]">Search</p>
              <SearchIcon size={16} />
            </div>
          </nav>
        </div>

        {/* Overlay */}
        {(menuOpen || isDrawerOpen) && (
          <div
            onClick={() => {
              setMenuOpen(false);
              toggleDrawer(false);
            }}
            className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
          ></div>
        )}
      </div>
    </header>
  );
};

export default MobileNavbar;
