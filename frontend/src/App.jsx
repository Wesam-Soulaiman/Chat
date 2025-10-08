import { RouterProvider } from "react-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import RTL from "./components/global/RTL";
import { router } from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <RTL>
      <RouterProvider router={router} />
      <Toaster />
    </RTL>
  );
}

export default App;
