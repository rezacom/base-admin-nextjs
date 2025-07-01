import React from "react";
import TextField from "@mui/material/TextField";

import * as T from "@/common/types";

function TextInput({ ...props }: T.TextInputComponent) {
  return (
    <div>
      <TextField id="dddfer" {...props} />
    </div>
  );
}

export default TextInput;
