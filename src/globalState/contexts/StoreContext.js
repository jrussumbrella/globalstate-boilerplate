import React from "react";
import { AuthProvider } from "./AuthContext";
import { ThemeProvider } from "./ThemeContext";

const ProviderComposer = ({ contexts, children }) => {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
};

const ContextProvider = ({ children }) => {
  return (
    <ProviderComposer contexts={[<AuthProvider />, <ThemeProvider />]}>
      {children}
    </ProviderComposer>
  );
};

export { ContextProvider };
