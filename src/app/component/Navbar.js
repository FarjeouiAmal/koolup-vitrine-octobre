"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get('accessToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, []);

  return (
    <div className="md:w-full bg-white shadow-md flex justify-between items-center px-20 py-4">
      <div className="flex space-x-10 text-base font-semibold text-purple-950 cursor-pointer">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/aboutus">
          <span>About Us</span>
        </Link>
        <Link href="/restaurentpage">
          <span>Restaurants</span>
        </Link>
        <Link href="/contactus">
          <span>Contact Us</span>
        </Link>
      </div>
      <div>
        <img src="/Logo.png" alt="Logo" className="w-48 h-auto" />
      </div>
      <Link href="/restaurentpage">
        <span className="inline-block hover:-translate-y-1 hover:scale-110 duration-300 font-semibold text-white px-6 py-2 rounded-full" style={{ background: "rgba(226, 112, 61, 1)" }}>Order Food</span>
      </Link>
      <div>
        <img src="/Group.png" alt="Icon 1" className="w-6 h-auto" />
      </div>
   
      <div>
        <Link href="/cart">
          <img src="/Vector.png" alt="Panier" className="w-6 h-auto cursor-pointer" />
        </Link>
      </div>

      {user ? (
        <div className="inline-block font-semibold text-orange-500 px-6 py-2 rounded-full">
          {user.name} {/* Affichez le nom de l'utilisateur */}
        </div>
      ) : (
        <a href="http://localhost:3003/Login" className="inline-block border font-semibold border-orange-500 hover:-translate-y-1 hover:scale-110 duration-300 text-orange-500 px-6 py-2 rounded-full">Sign In</a>
      )}
    </div>
  );
};

export default Navbar;
