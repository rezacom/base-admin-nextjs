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
