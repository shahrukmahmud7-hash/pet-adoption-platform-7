"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import petLogo from "../../public/asset/pet-care-logo-2.webp";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import { Moon, Sun } from "lucide-react";

const Navbar = () => {

  const pathname = usePathname();
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);

  
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // DARK MODE STATE
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

const handleLogout = async () => {
  await authClient.signOut();
  setDropdown(false);
  router.push("/");
};

  const linkStyle = (path) =>
    pathname === path
      ? "flex items-center gap-2 text-white bg-emerald-700 px-3 py-2 rounded-lg"
      : "flex items-center gap-2 text-gray-600 hover:text-emerald-600";

  return (
    <nav className="border-b sticky top-0 z-50 bg-white dark:bg-black
     dark:text-white shadow-sm transition-colors duration-300">

      <nav className="flex items-center justify-between max-w-7xl mx-auto p-3">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-2">
          <Image src={petLogo} alt="logo" width={45} height={45} />
          <h2 className="font-bold text-xl text-emerald-700">
            PetWorld
          </h2>
        </div>

        {/* CENTER MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <Link className={linkStyle("/")} href="/">
            <FaHome />
            <span>Home</span>
          </Link>

          <Link className={linkStyle("/all-pets")} href="/all-pets">
            <IoSearchOutline />
            <span>All-Pets</span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 
             hover:bg-gray-200 transition"
          >
            {dark ? (
              <Sun className="text-yellow-500" />
            ) : (
              <Moon className="text-gray-700" />
            )}
          </button>

          {/* AUTH */}
          {!user && (
            <>
              <Link
                href="/login"
                className="text-gray-600 hover:text-emerald-600"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-emerald-600 text-white px-3 py-2 rounded-lg"
              >
                Get Started
              </Link>
            </>
          )}

          {/* USER */}
          {user && (
            <div className="relative">

              <button onClick={() => setDropdown(!dropdown)}>
                <Avatar>
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white
                 dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden
                 ">

                  <button
                    onClick={() => router.push("/dashboard/my-requests")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100
                     dark:hover:bg-gray-800"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2
                     hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>

                </div>
              )}

            </div>
          )}

        </div>
      </nav>
    </nav>
  );
};

export default Navbar; 