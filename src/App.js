import React from "react";

import Navbar from "./Components/Navbar";
import "./Style/style.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <section className="wrapper">
        <section className="onput_field">
          <input type="text" />
        </section>
        <section className="output">
          <input type="text" readOnly="true" />
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
