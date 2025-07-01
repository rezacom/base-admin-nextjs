import React from "react";
import Button from "@mui/material/Button";

import * as T from "@/common/types";

function AppButton({ ...props }: T.AppButtonComponent) {
  return <Button variant="text" {...props} />;
}

export default AppButton;
