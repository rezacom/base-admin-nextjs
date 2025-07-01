import MainTable from "@/components/tables/mainTable";
import React from "react";
import config from "./config";

function UsersPage() {
  return (
    <div>
      <MainTable tdFields={config.list.columns} />
    </div>
  );
}

export default UsersPage;
