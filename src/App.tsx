/** @format */
import React from "react";

import * as Screens from "./screens";

import { wrapWithProviders } from "./utils";

function App() {
  return wrapWithProviders(<Screens.Overview />);
}

export default App;
