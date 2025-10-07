import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { useTranslation } from "react-i18next";

const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const ltrCache = createCache({
  key: "mui",
});

function RTL({ children }) {
  const { i18n } = useTranslation();

  return (
    <CacheProvider value={i18n.language === "ar" ? rtlCache : ltrCache}>
      {children}
    </CacheProvider>
  );
}

export default RTL;
