import React from "react";
import Pagination from "@mui/material/Pagination";
import type * as T from "@/common/types";

function AppPagination({
  count,
  page,
  onChange,
}: //  onChangeCount, total, size = 10
T.PaginationComponent) {
  return <Pagination count={count} page={page} onChange={(e, newPage) => onChange(newPage)} />;
}

export default AppPagination;
