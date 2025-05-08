// const heading = document.createElement("h1");
// heading.innerHTML = "Hello from javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello From React"
// );
// console.log(heading); //returns object

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //here we are passing a object

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h1", {}, "I am a H2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //here we are passing a object
