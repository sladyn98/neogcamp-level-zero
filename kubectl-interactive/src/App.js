import React, { useState } from "react";
import "./styles.css";
import { creatingJson, viewingJson, scalingJson, deletingJson } from "./data";

export default function App() {
  const [inputJSON, setInputJSON] = useState(viewingJson);

  function onClickEventHandler(event) {
    console.log(event.target.innerText);
    let inputText = event.target.innerText;

    if (inputText === "Creating") setInputJSON(creatingJson);

    if (inputText === "Viewing") setInputJSON(viewingJson);

    if (inputText === "Scaling") setInputJSON(scalingJson);

    if (inputText === "Deleting") setInputJSON(deletingJson);
  }

  return (
    <div className="App">
      <h1> Interactive Kubernetes Cheat Sheet </h1>
      <p>Select a tag to view the imperative commands in Kubernetes</p>
      <button onClick={onClickEventHandler}>Creating</button>
      <button onClick={onClickEventHandler}>Viewing</button>
      <button onClick={onClickEventHandler}>Scaling</button>
      <button onClick={onClickEventHandler}>Deleting</button>
      <h3>
        {inputJSON.map((k8) => (
          <div class="card">
            <div class="container">
              <h4 style={{ color: "#3770e4" }}>{k8.command}</h4>
              <p>{k8.description}</p>
            </div>
          </div>
        ))}
      </h3>
      <div class="footer">
        <p>2020 All Rights Reserved</p>
      </div>
    </div>
  );
}
