// components/Footer.jsx
"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";

type FooterProps = {
  showTitle: boolean; 
};
const Footer = ({ showTitle }: FooterProps) => {
  return (
    <footer className="bg-white w-full pt-16 pb-8 text-black">
      {/* Large Title */}
      {showTitle && (
        <div className="w-full">
          <h1 className="text-[10vw] leading-none font-extrabold tracking-tight">
            SILENCE PLEASE
          </h1>
        </div>
      )}

      {/* Newsletter */}
      <div className="bg-[#F8F8F8] flex justify-end gap-20 w-full py-10 px-6">
        <div className="flex items-center border-black gap-10">
          <label className="text-xs border-b tracking-widest w-56">
            Email address
          </label>
          <button className="text-sm font-semibold border-b">
            Subscribe →
          </button>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16 items-start px-4">
        <div className="text-sm font-bold tracking-wide">
          DESIGNED IN NEW YORK CITY
        </div>
        <div className="flex flex-col gap-2 text-[12px] font-semibold">
          <Link href="/">Search</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex justify-start md:justify-center">
          <Instagram size={20} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center my-16 text-xs px-4">
        <p>© 2026, Silence Please.</p>
        <select className="bg-transparent">
          <option className="border-b text-red-900">Nigeria (NGN ₦)</option>
          <option>United States (USD $)</option>
          <option>United Kingdom (GBP £)</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
