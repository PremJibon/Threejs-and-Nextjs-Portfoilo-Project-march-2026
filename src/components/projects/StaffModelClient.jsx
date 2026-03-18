"use client";
import dynamic from "next/dynamic";
import React from "react";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

const StaffModelClient = () => {
  return <Staff />;
};

export default StaffModelClient;
