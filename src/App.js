import React from "react";
import AppContextProvider from "./contexts/AppContext/AppContext";
import MainLayout from "./layouts/MainLayout/MainLayout";

function App() {
  return<AppContextProvider> <MainLayout></MainLayout></AppContextProvider>;
}

export default App;
