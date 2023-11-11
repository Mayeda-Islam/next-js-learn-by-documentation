import Link from "next/link";
import React from "react";

const navLink = [
  {
    name: "Sailor",
    href: "/dashboard",
  },
  {
    name: "Customer",
    href: "/dashboard/customer",
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
  },
];
const SideNav = () => {
  return (
    <>
      {navLink.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default SideNav;
