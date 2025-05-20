import React from "react";
import { metaObject } from "@/lib/config/site-seo";
import Login from "@/feature/auth/login";
export const metadata = {
  ...metaObject("Sign In"),
};
const page = () => {
  return <Login />;
};

export default page;
