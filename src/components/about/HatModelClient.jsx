"use client";
import dynamic from "next/dynamic";
import React from "react";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

const HatModelClient = () => {
  return <HatModel />;
};

export default HatModelClient;
