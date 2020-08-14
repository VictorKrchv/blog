import React from "react";
import "./App.css";
import { Routes } from "./pages";
import { GlobalStyles } from "./global-styles";
import { AccountLoader } from "./features/common/account-loader";

function App() {
  return (
    <div className="app">
      <GlobalStyles />
      <AccountLoader>
        <Routes />
      </AccountLoader>
    </div>
  );
}

export default App;
