import * as sdk from "@local/sdk";
import * as runtime from "@prometheus/runtime";
import { LoadApp } from '@prometheus/runtime';
import r from "react";
import rd from "react-dom";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import "./app.css";

const App = () => {
  // We will try load the app here.
  const internalStack: Record<string, any> = {
    react: r,
    "react-dom": rd,
    "@local/sdk": sdk,
    "@prometheus/runtime": runtime,
  };
  return (
    <>
      <div className="box">
        <LoadApp
          appName="shell"
          errorBoundary={ErrorBoundary as any}
          internal={{ errorBoundary: ErrorBoundary, ...internalStack }}
        />
      </div>
      <div className="box">
        <LoadApp
          appName="app3"
          errorBoundary={ErrorBoundary as any}
          internal={{ errorBoundary: ErrorBoundary, ...internalStack }}
        />
      </div>
      <div className="box">
        <LoadApp
          appName="app2"
          errorBoundary={ErrorBoundary as any}
          internal={{ errorBoundary: ErrorBoundary, ...internalStack }}
        />
      </div>
      <div className="box">
        <LoadApp
          appName="app4"
          errorBoundary={ErrorBoundary as any}
          internal={{ errorBoundary: ErrorBoundary, ...internalStack }}
        />
      </div>
      <div className="box">
        <LoadApp
          appName="slim"
          errorBoundary={ErrorBoundary as any}
          internal={{ errorBoundary: ErrorBoundary, ...internalStack }}
        />
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("shell")!).render(<App />);
