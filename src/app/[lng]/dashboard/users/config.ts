const config = {
  list: {
    title: "Users",
    description: "List of users in the system",
    columns: [
      { name: "id", label: "ID", type: "number" },
      { name: "name", label: "Name", type: "string" },
      { name: "email", label: "Email", type: "string" },
      { name: "role", label: "Role", type: "string" },
      { name: "status", label: "Status", type: "string" },
    ],
    actions: [
      { name: "view", label: "View Details" },
      { name: "edit", label: "Edit User" },
      { name: "delete", label: "Delete User" },
    ],
  },
};

export default config;
