"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import petLogo from '../../public/asset/pet-care-logo-2.webp'
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
    setDropdown(false);
    router.push("/");
  };

  const linkStyle = (path) =>
    pathname === path
      ? "text-white bg-emerald-700 px-3 py-2 rounded-lg"
      : "text-gray-600 hover:text-emerald-600";

  return (
    <div className="border-b sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between max-w-7xl mx-auto p-3">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-2">
          <Image src={petLogo} alt="logo" width={45} height={45} />
          <h2 className="font-bold text-xl text-emerald-700">
            PetWorld
          </h2>
        </div>

        {/* CENTER - MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <Link className={linkStyle("/")} href="/">
            Home
          </Link>

          <Link className={linkStyle("/all-pets")} href="/all-pets">
            All Pets
          </Link>
        </div>

        {/* RIGHT - AUTH */}
        <div className="flex items-center gap-4">

          {!user && (
            <>
              <Link href="/login" className="text-gray-600 hover:text-emerald-600">
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

          {/* USER DROPDOWN */}
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
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
                  <button
                    onClick={() => router.push("/dashboard/my-requests")}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar; 