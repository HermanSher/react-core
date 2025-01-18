// const heading = React.createElement("h1", {}, "Hello World From React");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// Nested React Elements
// const div = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "H1 nested from reaact")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);

import React from "react";
import ReactDOM from "react-dom/client";

const div = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 nested from reaact"),
    React.createElement("h2", {}, "H2 nested from react"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h3", {}, "H3 nested from reaact"),
    React.createElement("h4", {}, "H4 nested from react"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
