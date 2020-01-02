import React from "react";
import { MyThemeContext2 } from "./src/context";

import theme from "./src/theme";
import * as H from "./src/components/headings";
import * as Text from "./src/components/text";

const components = {
  ...H,
  ...Text
};

export default ({ element }) => (
  <MyThemeContext2.Provider
    value={{
      theme,
      components
    }}
  >
    {element}
  </MyThemeContext2.Provider>
);