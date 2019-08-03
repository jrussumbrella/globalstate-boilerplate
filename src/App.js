import React from "react";
import { ContextProvider } from "./globalState";
import Header from "./components/Header";

function App() {
  return (
    <ContextProvider>
      <Header />
      <h1>Global State React App</h1>
    </ContextProvider>
  );
}

export default App;
