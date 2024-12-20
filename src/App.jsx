import { useState } from "react";
import data from "./data";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{ display: "flex", flexGrow: 1, flexWrap: "wrap", gap: "20px" }}
      >
        {data.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} style={{ width: "200px" }} />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
