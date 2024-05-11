import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="title">Title of the document</h1>;

const Heading = () => <h1 id="heading">Heading of the document</h1>;

const Page = () => (
  <div id="container">
    <Title />
    <Heading />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
