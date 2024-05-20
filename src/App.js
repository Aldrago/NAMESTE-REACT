import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Content from "./components/Content";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import InvalidLink from "./components/InvalidLink";
import RestaurantMenu from "./components/RestaurantMenu";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => (
  <div className="">
    <Header />
    <Outlet />
  </div>
);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Please wait!! ...page is loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<h1>Please wait!! ...page is loading...</h1>}><Contact /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <InvalidLink />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>);
