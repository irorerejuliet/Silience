"use client";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore"; // Import your store

const Navbar = () => {
  // Pull the cart and toggle function from your store
  const { cart, toggleDrawer } = useCartStore();

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-white px-8 py-4 lg:flex hidden items-center justify-between text-black z-50">
        <Link href="/" className="text-3xl font-bold tracking-wide">
          SILENCE PLEASE
        </Link>

        <ul className="flex gap-4 text-sm font-medium items-center">
          <li>
            <Link href="/speakers" className="hover:underline">
              Speakers
            </Link>
          </li>
          <li>
            <Link href="/event" className="hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/sigin" className="hover:underline">
              Log in
            </Link>
          </li>

          {/* Replaced Link with Button to trigger the Slide Show */}
          <li>
            <button
              onClick={() => toggleDrawer(true)}
              className="hover:underline font-medium"
            >
              Cart ({cart.length})
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
