// Global type declarations
declare global {
  interface Window {
    dataLayer: (string | object | Date)[];
    gtag: (...args: any[]) => void;
  }
}

export {};
