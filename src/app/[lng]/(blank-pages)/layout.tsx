import React, { PropsWithChildren } from "react";

function AuthLayout({ children }: PropsWithChildren) {
  return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">{children}</div>;
}

export default AuthLayout;
