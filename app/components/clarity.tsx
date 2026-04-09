"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    clarity.init("w922vj2zxz");
  }, []);

  return null;
}