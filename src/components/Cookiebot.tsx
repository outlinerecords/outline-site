"use client";

import { useEffect } from "react";

export default function Cookiebot() {
  useEffect(() => {
    if (document.getElementById("Cookiebot")) return;

    const script = document.createElement("script");
    script.id = "Cookiebot";
    script.src = "https://consent.cookiebot.com/uc.js";
    script.setAttribute("data-cbid", "1346275f-f254-4782-9227-e78e60847e40");
    script.setAttribute("data-blockingmode", "auto");
    script.type = "text/javascript";

    document.head.appendChild(script);
  }, []);

  return null;
}
