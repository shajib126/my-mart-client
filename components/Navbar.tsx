'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { getTransition } from "@/utils/getTransition";

const Navbar = () => {
  return (
    <motion.header initial={{y:"-100%"}} animate={{y:0}} transition={getTransition(0.6)} className="h-20 fixed top-0 left-0 right-0 border-b backdrop-blur-lg bg-light/90 z-[100]">
      <div className="wrapper w-full h-full flex justify-between items-center ">
        <nav>
          <Link href="/" className="text-xl font-semibold link-item">
            My Shop
          </Link>
        </nav>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href={"/"} className="link-item">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/products"} className="link-item">
                Products
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="flex items-center gap-5">
          <Link href={"/cart"} className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute text-xs w-4 h-4 rounded-full bg-dark text-light flex justify-center items-center -right-2 -bottom-1">0</span>
          </Link>
          <Button href="/login" placeholder="Login" color="green" />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
