import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { Params } from "next/dist/server/request/params";

const menus = (lng: Params["lng"]) => [
  {
    title: "Dashboard",
    link: `/${lng}/dashboard`,
    id: 1,
    icon: SpaceDashboardIcon,
  },
  {
    title: "Users",
    icon: PhotoSizeSelectActualIcon,
    submenus: [
      {
        title: "List",
        icon: PhotoSizeSelectActualIcon,
        link: `/${lng}/dashboard/users`,
        id: 3,
      },
      {
        title: "Create",
        icon: SpaceDashboardIcon,
        link: `/${lng}/dashboard/users/create`,
        id: 4,
      },
    ],
    id: 2,
  },
  {
    title: "Rules",
    icon: PhotoSizeSelectActualIcon,
    submenus: [
      {
        title: "List",
        icon: PhotoSizeSelectActualIcon,
        link: `/${lng}/rules`,
        id: 5,
        submenus: [
          {
            title: "Submenu 1",
            icon: PhotoSizeSelectActualIcon,
            link: `/${lng}/rules`,
            id: 7,
          },
          {
            title: "Submenu 2",
            icon: SpaceDashboardIcon,
            link: `/${lng}/rules/create`,
            id: 8,
          },
        ],
      },
      {
        title: "Create",
        icon: SpaceDashboardIcon,
        link: `/${lng}/rules/create`,
        id: 6,
      },
    ],
    id: 2,
  },
];

export default menus;
