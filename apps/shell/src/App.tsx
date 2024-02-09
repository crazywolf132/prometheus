import React, { useLayoutEffect, useState } from "react";
import { LoadApp } from "@prometheus/runtime";

function App() {
  // const [ready, setReady] = useState(false);

  // useLayoutEffect(() => {
  //   setReady(true);
  // }, []);

  return (
    <>
      <h1>This is the shell</h1>
      <div style={{ border: "1px solid blue" }}>
        {/* {ready && <LoadApp appName="slim" />} */}
        <LoadApp appName="app2" internal={{ ...require("@internal") }} />
      </div>
    </>
  );
}

export default App;
