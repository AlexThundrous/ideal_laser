/**
 * Analytics event tracking helper
 * Simple wrapper for GA4 tracking
 */

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

export const trackPageView = (path: string, title: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-XXXXXXXXXX", {
      page_path: path,
      page_title: title,
    });
  }
};

// Common events
export const events = {
  whatsappClick: (location: string) =>
    trackEvent("whatsapp_click", { location }),
  getQuoteClick: (location: string) =>
    trackEvent("get_quote_click", { location }),
  viewMachinesClick: () => trackEvent("view_machines_click"),
  productViewClick: (productId: string) =>
    trackEvent("product_view_click", { product_id: productId }),
  contactFormSubmit: () => trackEvent("contact_form_submit"),
  scrollDepth: (depth: number) =>
    trackEvent("scroll_depth", { depth_percent: depth }),
  pageScroll: () => trackEvent("page_scroll"),
};
