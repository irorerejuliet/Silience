import Link from "next/link";

const Navbar = () => {
  return (
    <header>

      <nav className="fixed top-0 left-0 w-full bg-white px-8 py-4 lg:flex hidden items-center justify-between text-black z-50">
        <Link href="/" className="text-3xl font-bold tracking-wide">
          SILENCE PLEASE
        </Link>

      <nav
        className="sticky w-full bg-white px-8 py-4 lg:flex hidden items-center justify-between text-black
      "
      >
        <Link href="/" className="text-3xl font-bold tracking-wide">SILENCE PLEASE</Link>


        <ul className="flex gap-6 text-sm font-medium">
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
          <li>
            <Link href="/cart" className="hover:underline">
              Cart (0)
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
