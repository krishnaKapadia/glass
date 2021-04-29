/** @format */

import { ReactNode } from "react";
import { ReactQueryProvider } from "./react-query";

export * from "./date-time";
export * from "./guid";
export * from "./react-query";

export function wrapWithProviders(wrappedComponent: ReactNode) {
  return <ReactQueryProvider>{wrappedComponent}</ReactQueryProvider>;
}
