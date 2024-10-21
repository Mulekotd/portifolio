import { Header } from "/src/components/Header";
import "/src/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Routes from "./routes";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  );
}

export default App;
