"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import * as T from "@/common/types";
import clsx from "clsx";

function MenuItem({ id, title, icon: Icon, link, submenus }: T.MenuItemComponent) {
  const pathname = usePathname();
  const isActive = pathname === link || (submenus && submenus.some((submenu) => submenu.link === pathname));
  const [isOpen, setIsOpen] = useState(isActive || false);

  return (
    <li key={id}>
      {submenus?.length ? (
        <>
          <button
            className={clsx(
              "flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer",
              isActive && "bg-gray-100 dark:bg-gray-700"
            )}
            type="button"
            data-collapse-toggle={`submenu-${id}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={`submenu-${id}`}
          >
            {Icon && <Icon />}
            <span className="ms-3 grow text-left">{title}</span>

            <ExpandMoreIcon className={`ms-auto transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
          {submenus?.length > 0 && (
            <ul
              id={`submenu-${id}`}
              className={`pl-3 space-y-2 transition-all ${
                isOpen ? "max-h-max mt-2 h-auto" : "max-h-0 overflow-hidden"
              }`}
            >
              {submenus.map((submenu) => (
                <MenuItem
                  key={submenu.id}
                  id={submenu.id}
                  title={submenu.title}
                  icon={submenu.icon}
                  link={submenu.link}
                  submenus={submenu.submenus}
                />
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link
          href={link || "#"}
          className={clsx(
            "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
            isActive && "bg-gray-100 dark:bg-gray-700"
          )}
        >
          {Icon && <Icon />}
          <span className="ms-3">{title}</span>

          {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                Pro
              </span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span> */}
        </Link>
      )}
    </li>
  );
}

export default MenuItem;
