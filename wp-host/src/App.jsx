import React from "react";
import ReactDOM from "react-dom/client";

import ButtonModule from "remote/Button";
const Button = ButtonModule.default;
console.log(Button);

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: wp-host</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button />
  </div>
);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
