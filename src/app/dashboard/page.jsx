"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;


  useEffect(() => {
    if (!user) router.push("/login");
  }, [user]);

  const menu = [
    { name: "My Requests", path: "/dashboard/my-requests" },
    { name: "Add Pets", path: "/dashboard/add-pet" },
    { name: "My Listings", path: "/dashboard/my-listings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* MOBILE TOP BAR */}
      <div className="md:hidden fixed top-0 w-full
       bg-slate-900 text-white p-4 flex justify-between
       ">
        <h2>Dashboard</h2>
        <button onClick={() => setOpenSidebar(true)}>☰</button>
      </div>

      {/* SIDEBAR (only dashboard routes) */}
      {user && pathname.startsWith("/dashboard") && (
        <aside
          className={`bg-slate-900 text-white w-72 p-5 
          ${openSidebar ? "block" : "hidden md:block"}`}
        >
          <div className="flex justify-between md:block">
            <h2 className="text-xl font-bold mb-6">Dashboard</h2>
            <button className="md:hidden" onClick={() => setOpenSidebar(false)}>
              ✕
            </button>
          </div>

          {/* STATIC MENU (never disappears) */}
          <div className="flex flex-col gap-2">
            {menu.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpenSidebar(false)}
                className={`px-3 py-2 rounded-lg ${
                  pathname === item.path
                    ? "bg-white text-black"
                    : "hover:bg-slate-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </aside>
      )}

      {/* CONTENT */}
      <main className="flex-1 p-5 md:ml-0 mt-14 md:mt-0">
        {children}
      </main>
    </div>
  );
}