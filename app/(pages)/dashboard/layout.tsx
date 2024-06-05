import React from "react";
import Sidebar from "@/app/(pages)/dashboard/_components/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full w-full max-w-none flex-1 gap-12 ">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
