import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import Navbar from "./Components/Navbar";
import "./Style/style.css";

function App() {
  const [MD, SetMD] = useState("");
  return (
    <React.Fragment>
      <Navbar />

      <section className="wrapper">
        <section className="input_field">
          <textarea
            name="input_field"
            id="input"
            value={MD}
            onChange={(e) => SetMD(e.target.value)}
          ></textarea>
        </section>
        <section className="output">
          <ReactMarkdown skipHtml={false} className="output_box">
            {MD}
          </ReactMarkdown>
        </section>
      </section>
    </React.Fragment>
  );
}

export default App;
