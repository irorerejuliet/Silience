
import Link from 'next/link';


const Navbar = () => {
  return (
    <header>
      <nav
        className="w-full bg-white px-8 py-4 lg:flex hidden items-center justify-between text-black
      "
      >
        <Link href="/" className="text-3xl font-bold tracking-wide">SILENCE PLEASE</Link>

        <ul className="flex gap-6 text-sm font-medium cursor-pointer hover:underline">
          <Link href="/speakers">Speakers</Link>
          <Link href="/event">Events</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/sigin">Log in</Link>
          <Link href="/cart" >
            Cart (0)
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
