import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import React, { ReactNode } from "react";

function Dashboardlayout({ children, params: { lng } }: { children: ReactNode; params: { lng: string } }) {
  return (
    <div>
      <Header />
      <Sidebar lng={lng} />

      <div className="p-4 sm:ml-64">{children}</div>
    </div>
  );
}

export default Dashboardlayout;
