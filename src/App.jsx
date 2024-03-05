import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Components/Home";
import Root from "./Routes/Root";
import About from "./pages/About/components/About";
import Cart from "./pages/Cart/components/Cart";
import Categories from "./pages/Categories/components/Categories";
import ForgotPassword from "./pages/Forgot password/Components/ForgotPassword";
import Order from "./pages/Order/components/Order";
import Product from "./pages/Products/components/Product";
import Profile from "./pages/Profile/components/Profile";
import Signin from "./pages/Sign in/components/Signin";
import Signup from "./pages/Sign up/components/Signup";
import Notfound from "./pages/Not found/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/about", element: <About /> },
      { path: "/cart", element: <Cart /> },
      { path: "/categories", element: <Categories /> },
      { path: "/forgotpassword", element: <ForgotPassword /> },
      { path: "/order", element: <Order /> },
      { path: "/product/:id", element: <Product /> },
      { path: "/profile", element: <Profile /> },
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
