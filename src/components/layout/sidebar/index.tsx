/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useRef } from "react";
import { Params } from "next/dist/server/request/params";
import clsx from "clsx";

import menus from "./data";
import MenuItem from "./lib/menuItem";

function Sidebar({ lng }: { lng: Params["lng"] }) {
  const wrapperRef = useRef<any>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      console.log(document.getElementById("sidebarDashboard")?.className);

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target) &&
        !document.getElementById("sidebarDashboard")?.className.includes("-translate-x-full")
      ) {
        document.getElementById("sidebarDashboard")?.classList.toggle("-translate-x-full");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside
      id="sidebarDashboard"
      className={clsx(
        "fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      )}
      aria-label="Sidebar"
      ref={wrapperRef}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menus(lng).map((menu) => (
            <MenuItem
              key={menu.id}
              id={menu.id}
              title={menu.title}
              icon={menu.icon}
              link={menu.link}
              submenus={menu.submenus}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
