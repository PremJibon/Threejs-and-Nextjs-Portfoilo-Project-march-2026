"use client";
import dynamic from "next/dynamic";
import React from "react";

const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

const WizardModel = () => {
  return <Wizard />;
};

export default WizardModel;
