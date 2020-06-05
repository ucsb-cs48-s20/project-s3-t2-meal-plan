import "bootstrap/dist/css/bootstrap.min.css";
import { SWRConfig } from "swr";
import React from "react";
import "./_app.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="back">
      <SWRConfig
        value={{
          fetcher: (...args) => fetch(...args).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </div>
  );
}

export default MyApp;
