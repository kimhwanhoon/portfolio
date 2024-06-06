"use client";

import { Error } from "@/components/global/Error";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Error
        key={"not-found"}
        title="Oops! Page not found."
        subtitle="The page you're looking for doesn't exist or has been moved."
      />
    </>
  );
};

export default NotFound;
