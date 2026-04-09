"use client";

import { useEffect, useState } from "react";

type CookieType = "essential" | "analytics";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCookies, setSelectedCookies] = useState<Set<CookieType>>(
    new Set(["essential"])
  );

  useEffect(() => {
    // Check if consent has been given
    const consentGiven = localStorage.getItem("cookie-consent");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allCookies = new Set<CookieType>(["essential", "analytics"]);
    saveCookieConsent(allCookies);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const essentialOnly = new Set<CookieType>(["essential"]);
    saveCookieConsent(essentialOnly);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    saveCookieConsent(selectedCookies);
    setIsVisible(false);
  };

  const toggleCookie = (type: CookieType) => {
    if (type === "essential") return; // Essential cookies can't be toggled
    
    const newSelected = new Set(selectedCookies);
    if (newSelected.has(type)) {
      newSelected.delete(type);
    } else {
      newSelected.add(type);
    }
    setSelectedCookies(newSelected);
  };

  const saveCookieConsent = (cookies: Set<CookieType>) => {
    localStorage.setItem("cookie-consent", JSON.stringify(Array.from(cookies)));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-40 max-h-96 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Cookie Preferences</h3>
            <p className="text-sm text-gray-600">
              We use cookies and analytics to enhance your experience and understand how you use our site.
            </p>
          </div>

          {showDetails && (
            <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
              {/* Essential Cookies */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1 w-4 h-4 rounded border-gray-300 cursor-not-allowed"
                />
                <div className="flex-1">
                  <label className="font-medium text-sm text-gray-900">
                    Essential Cookies (Required)
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Necessary for site functionality, security, and authentication.
                  </p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selectedCookies.has("analytics")}
                  onChange={() => toggleCookie("analytics")}
                  className="mt-1 w-4 h-4 rounded border-gray-300 cursor-pointer"
                />
                <div className="flex-1">
                  <label className="font-medium text-sm text-gray-900">
                    Analytics Cookies
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Helps us understand how you use the site through Google Analytics. This helps improve our services.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium text-left"
            >
              {showDetails ? "Hide Details" : "Customize Cookies"}
            </button>
            <div className="flex gap-3">
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
              >
                Reject Analytics
              </button>
              {showDetails ? (
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Save Preferences
                </button>
              ) : (
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  Accept All
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
