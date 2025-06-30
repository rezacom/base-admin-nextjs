import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { Params } from "next/dist/server/request/params";
import React, { ReactNode } from "react";

async function Dashboardlayout({ children, params }: { children: ReactNode; params: Params }) {
  const { lng } = await params;

  return (
    <div className="h-full">
      <Header />
      <Sidebar lng={lng} />
      <div className="p-4 sm:ml-64 mt-16 bg-gray-100 dark:bg-transparent min-h-screen h-max">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg min-h-screen">{children}</div>
      </div>
    </div>
  );
}

export default Dashboardlayout;
