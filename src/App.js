import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./app/components/Header";
import Content from "./app/components/Content"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import InvalidLink from "./app/components/InvalidLink";
import RestaurantMenu from "./app/components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./app/utils/appStore";
import Cart from "./app/components/Cart";

const About = lazy(() => import("./app/components/About"));
const Contact = lazy(() => import("./app/components/Contact"));

const App = () => (
  <Provider store={appStore}>
    <div className="">
      <Header />
      <Outlet />
    </div>
  </Provider>
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
        element: (
          <Suspense fallback={<h1>Please wait!! ...page is loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Please wait!! ...page is loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
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
root.render(<RouterProvider router={appRoutes} />);
