import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement("div", {id:'header'}, "Header");

const parent = React.createElement("div", {id:'parent'}, 
                                    [React.createElement("div", {id:'child'},
                                        [React.createElement("h1", {id:'h1-tag'}, "hello from react"),
                                        React.createElement("h2", {id: "h2-tag"}, "h2 tag")]),
                                    React.createElement("div", {id:"child2"}, 
                                        [React.createElement("h1", {id:'h1-tag2'}, "hello from react"),
                                        React.createElement("h2", {id: "h2-tag2"}, "h2 tag")])]);
const footer = React.createElement("div", {id:'footer'}, "Footer");
const mainContainer = React.createElement("div", {id: 'main-container'}, [header, parent, footer]);
console.log(mainContainer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mainContainer);