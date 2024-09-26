import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Registes, { action as regisAction } from "./pages/Registes";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { getAuth } from "./util/auth";
import Checkout from "./pages/Checkout";
import { lazy } from "react";
let routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="a" lazy={() => import("./a")} />
    <Route path="b" lazy={() => import("./b")} />
  </Route>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login />, loader: getAuth },
      { path: "register", element: <Registes />, action: regisAction },
      { path: "detail", element: <Detail /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
