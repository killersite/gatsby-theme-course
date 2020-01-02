/** @jsx jsx */
import React from "react";
import { jsxPragma, mdxPragma } from "isolated-theme-ui";

export const MyThemeContext2 = React.createContext({
  theme: {},
  components: {}
});

// our custom pragmas, bootstrapped with our context
export const jsx = jsxPragma(MyThemeContext2);
export const mdx = mdxPragma(MyThemeContext2);