import { ButtonProps } from "@mui/material/Button";
import { TextFieldProps } from "@mui/material/TextField";
import { ReactNode } from "react";

export interface PaginationComponent {
  count: number;
  page: number;
  size?: number;
  onChange: (newPage: number) => void;
  onChangeSize: (newSize: number) => void;
  total?: number;
}

export interface AppButtonComponent extends ButtonProps {
  children: ReactNode;
}

export interface TextInputComponent extends TextFieldProps {
  id?: string;
}

export interface MenuItemComponent {
  title: string;
  link?: string;
  id?: number;
  icon?:
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | (OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string });
  submenus?: MenuItemComponent[];
}
