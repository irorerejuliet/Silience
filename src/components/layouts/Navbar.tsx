import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className="w-full bg-gray-200 px-8 py-4 flex items-center justify-between text-black">
        <h1 className="text-3xl font-bold tracking-wide">SILENCE PLEASE</h1>

        <ul className="flex gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:underline">Speakers</li>
          <li className="cursor-pointer hover:underline">Events</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Contact</li>
          <li className="cursor-pointer hover:underline">Log in</li>
          <li className="cursor-pointer hover:underline">Cart (0)</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
