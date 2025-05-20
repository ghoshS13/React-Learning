import React from "react";
import ReactDOM from "react-dom/client";
//react.createElement =>ReactElement(object)=>HTMLElement(After rendering)

const heading = React.createElement("h1", { id: "heading" }, "NamAste react");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//JSX --> JSX is not HTML inside Javascript, it is JS like syntax
//Babel transpiles it to react.createElement
const jsxheading = (
  <h1 className="head" tabIndex="1">
    {" "}
    namaste React using JSX
  </h1>
);
root.render(jsxheading);

//React Components
//CLASS BASED COMPONENT(OLD WAY)
//FUNCTIONAL COMPOMENT(NEW WAY)

//React Functional Component(Normal JS function which return some jsx, first letter must be capital)

const Title = () => <h1 className="head"> This is the TITLE</h1>;
const Title2 = <h1>This is another tiltle as JS Variable</h1>;
//component compostion
const number = 500;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {Title2}
      <h2></h2>
      {}
      <h1 className="headings"> namaste React Functional component</h1>;
    </div>
  );
};

root.render(<HeadingComponent />);
