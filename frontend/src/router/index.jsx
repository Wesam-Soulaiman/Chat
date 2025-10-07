import { createBrowserRouter } from "react-router";
import ChatLayout from "../layouts/ChatLayout";
import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "./../pages/SignUpPage";

const routes = {
  path: "",
  element: <ChatLayout />,
  children: [
    {
      path: "",
      element: <ChatPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
  ],
};

export const router = createBrowserRouter([routes]);
