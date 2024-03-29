import { execute, fetchWithCache, returnAppAsElement } from "@utils";
// @ts-ignore; No type files for this dep
import { NanoAppFunction } from "@types";
import cloneOrCreate from "clone-or-create";
import React from "react";
import ReactDOM from "react-dom";
import { ShadowElement } from ".";

type Props = {
  appName: string;
  errorBoundary?: React.ReactNode;
  internal?: Record<string, any>;
  spinner?: any;
};

const Placeholder = (props: any) => props.children;

export const LoadApp = React.memo((props: Props) => {
  const [styles, setStyles] = React.useState<string>("");
  const Spinner = props.spinner ?? Placeholder;

  const loadApp = React.useCallback(async (shadowRoot: ShadowRoot) => {
    try {
      const bundleUrl = `http://localhost:5000/bundles/${props.appName}`;
      const bundle = await fetchWithCache(bundleUrl);
      
      const nanoApp = execute(bundle.code, {
        react: React,
        "react-dom": ReactDOM,
        "clone-or-create": cloneOrCreate,
        ...props.internal,
        "@internal": {
          ...props.internal,
          errorBoundary: props.errorBoundary ?? Placeholder,
        },
      }) as NanoAppFunction;

      returnAppAsElement(nanoApp, `root_container_${props.appName}`, `${props.appName}_parent_container`, shadowRoot);
      setStyles(nanoApp.styles);
      // If we made it this far, we can check for the spinner and remove it.
      const spinner = shadowRoot.getElementById("root_container_spinner");
      if (spinner) {
        spinner.remove();
      }

    } catch (error) {
      console.error("Error loading app:", error);
    }
  }, [props.appName, props.errorBoundary, props.internal]);

  const ErrorLayer = (props.errorBoundary || Placeholder) as any; // Because ts is pretty shit

  return (
    <div id={`${props.appName}_root`} style={{ display: 'flex', height: '100%', width: '100%' }}>
      <ErrorLayer>
        <ShadowElement onShadowRootReady={loadApp}>
          <section id={`${props.appName}_parent_container`} style={{ display: 'flex', flex: 1, height: '100%', width: '100%' }}>
            <style>{styles}</style>
            <div id={`root_container_${props.appName}`} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Spinner id="root_container_spinner"/>
            </div>
          </section>
        </ShadowElement>
      </ErrorLayer>
    </div>
  );
});