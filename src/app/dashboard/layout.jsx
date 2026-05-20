"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  useEffect(() => {
    if (!isPending && !user) {
      router.push("/login");
    }
  }, [isPending, user, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  const menu = [
    { name: "My Requests", path: "/dashboard/my-requests" },
    { name: "Add Pets", path: "/dashboard/add-pet" },
    { name: "My Listings", path: "/dashboard/my-listings" },
  ];

  return (
    <div className="flex min-h-screen">

      {/* MOBILE NAV */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-slate-900
       text-white p-4 flex justify-between z-50">
        <h2 className="font-bold">Dashboard</h2>

        <button onClick={() => setIsOpenSidebar(true)}>
          ☰
        </button>
      </div>

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:static top-0 left-0 z-50
          h-screen w-72 bg-slate-900 text-white p-5
          transition-transform duration-300
          ${isOpenSidebar ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Dashboard
          </h2>

          <button
            className="md:hidden"
            onClick={() => setIsOpenSidebar(false)}
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsOpenSidebar(false)}
              className={`px-4 py-3 rounded-lg transition ${
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

      {/* OVERLAY */}
      {isOpenSidebar && (
        <div
          onClick={() => setIsOpenSidebar(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-40"
        />
      )}

      {/* CONTENT */}
      <main className="flex-1 p-5 mt-16 md:mt-0">
        {children}
      </main>
    </div>
  );
}
export default DashboardLayout ;