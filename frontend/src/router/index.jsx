import { createBrowserRouter } from "react-router";
import ChatLayout from "../layouts/ChatLayout";
import ChatPage from "../pages/ChatPage/ChatPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "./../pages/SignUpPage";
import ProtectedLayout from "../layouts/ProtectedLayout";
import AuthLayout from "../layouts/AuthLayout";

const routes = {
  path: "",
  element: <ChatLayout />,
  children: [
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: "/",
          element: <ChatPage />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
      ],
    },
  ],
};

export const router = createBrowserRouter([routes]);
