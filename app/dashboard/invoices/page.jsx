"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Invoices = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <p>I am showing invoice</p>
    </div>
  );
};

export default Invoices;
