import React from "react";
import Sidebar from "@/app/(pages)/dashboard/_components/Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full w-full max-w-none flex-1 gap-12 ">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
