import { type AppType } from "next/dist/shared/lib/utils";
import { GridLoader } from "react-spinners";
import { useEffect, useState, type CSSProperties } from "react";
import "../styles/globals.css";

const override: CSSProperties = {
  display: "block",
  position: "fixed",
};

const MyApp: AppType = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  // when i do not have a set timeout function, the loader will not go away
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <Component {...pageProps} />
      ) : (
        <GridLoader
          loading={loading}
          size={50}
          color={"#3C6C57"}
          cssOverride={override}
        />
      )}
    </>
  );
};

export default MyApp;
