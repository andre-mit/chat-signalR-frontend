import React from "react";

import Routes from "./routes";

import { AuthProvider } from "./contexts/auth";

import Styles from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <Styles />
      <Routes />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </AuthProvider>
  );
}

export default App;
