import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import React, { PropsWithChildren } from "react";

function Dashboardlayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <Sidebar />

      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}

export default Dashboardlayout;
