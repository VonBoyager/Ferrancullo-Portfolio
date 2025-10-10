// Fallback types to satisfy isolated file linters
declare module 'react';
declare module 'react-dom/client';

declare namespace React {
  type ReactNode = any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any;
  }
}


