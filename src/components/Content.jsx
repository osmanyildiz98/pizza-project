import React from "react";
import data from "../data";
import "../css/Content.css";

function Content() {
  return (
    <main className="main-content">
      <section className="specialSelectionContainer">
        <h2 className="mainContentHeader">Bytes Special Selection</h2>
        <div className="specialSelectionItems">
          {data.map((item) => {
            if (item.hasOwnProperty("tag") && item.tag === "special") {
              return (
                <div
                  className="specialSelectionItem"
                  key={item.id}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <h3 className="itemTitle">{item.title}</h3>
                  <button className="itemButton">Add to Cart</button>
                </div>
              );
            }
          })}
        </div>
      </section>
      <section className="recommendedContainer">
        <h2 className="mainContentHeader">Recommended Flavors</h2>
        <div className="recommendedItems">
          {data.map((item) => {
            if (item.hasOwnProperty("tag") && item.tag === "recommended") {
              return (
                <div
                  className="recommendedItem"
                  key={item.id}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <h3 className="itemTitle">{item.title}</h3>
                  <button className="itemButton">Add to Cart</button>
                </div>
              );
            }
          })}
        </div>
      </section>
    </main>
  );
}

export default Content;
