"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    // Register service worker for cache management
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          console.log("Service Worker registered successfully:", registration);
          
          // Check for updates regularly
          setInterval(() => {
            registration.update();
          }, 3600000); // Check every hour
        })
        .catch((error) => {
          console.log("Service Worker registration failed:", error);
        });
    }

    // Handle page reload to clear cache effectively
    const handleBeforeUnload = () => {
      // Clear service worker caches on page unload
      if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: "CLEAR_CACHE",
        });
      }
    };

    // Optional: Detect hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "R") {
        // Hard refresh detected - service worker will handle cache
        console.log("Hard refresh detected - clearing old caches");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}
