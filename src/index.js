import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Toast, { Toasts } from "./Toast";

function App() {
  return (
    <div className="App">
      <Toasts />
      <h1>Hello there</h1>
      <h2>Click the buttons below to fire Toasts</h2>

      <button
        className="btn"
        onClick={() =>
          Toast.fire("Default toast", "Default toast body text here")
        }
      >
        Fire default toast
      </button>
      <button
        className="btn success"
        onClick={() =>
          Toast.fire("Success toast", "Success toast body text here", "success")
        }
      >
        Fire success toast
      </button>
      <button
        className="btn error"
        onClick={() =>
          Toast.fire(
            "Title text here really long one with header and more symbols",
            "Body text here really long one with header and more symbols",
            "error",
            100
          )
        }
      >
        Fire error toast
      </button>
      <button
        className="btn"
        onClick={() =>
          Toast.fire(
            "Default toast",
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          )
        }
      >
        Fire toast with list
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
