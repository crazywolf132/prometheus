import React, { FC, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface ShadowElementProps {
  declarative?: boolean;
  delegatesFocus?: boolean;
  mode?: "open" | "closed";
  stylesheets?: CSSStyleSheet[];
  children: React.ReactNode;
  onShadowRootReady?: (shadowRoot: ShadowRoot) => void;
}

const constructableStylesheetsSupported: boolean =
  typeof window !== "undefined" &&
  window.ShadowRoot &&
  window.ShadowRoot.prototype.hasOwnProperty("adoptedStyleSheets") &&
  window.CSSStyleSheet &&
  window.CSSStyleSheet.prototype.hasOwnProperty("replace");

const shadowRootSupported: boolean =
  typeof window !== "undefined" &&
  window.Element &&
  window.Element.prototype.hasOwnProperty("attachShadow");

export const ShadowElement: FC<ShadowElementProps> = ({
  declarative = false,
  delegatesFocus = false,
  mode = "open",
  stylesheets = [],
  children,
  onShadowRootReady,
}) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const placeholderRef = useRef<HTMLSpanElement | HTMLTemplateElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (placeholderRef.current) {
      const parentElement = placeholderRef.current.parentNode as HTMLElement;
      shadowRootRef.current = parentElement.attachShadow({
        delegatesFocus,
        mode,
      });

      if (stylesheets) {
        shadowRootRef.current.adoptedStyleSheets = stylesheets;
      }

      if (onShadowRootReady) {
        onShadowRootReady(shadowRootRef.current);
      }

      setInitialized(true);
    }
  }, [delegatesFocus, mode, stylesheets, onShadowRootReady]);

  if (!initialized) {
    if (declarative) {
      return (
        <template
          ref={placeholderRef as React.RefObject<HTMLTemplateElement>}
          // @ts-expect-error; Because typescript is amazing...
          shadowroot={mode}
        >
          {children}
        </template>
      );
    }

    return (
      <span ref={placeholderRef as React.RefObject<HTMLSpanElement>}></span>
    );
  }

  return ReactDOM.createPortal(
    children,
    shadowRootRef.current as unknown as Element,
  );
};

// @ts-expect-error; We're adding static properties to the function
ShadowElement.constructableStylesheetsSupported =
  constructableStylesheetsSupported;
// @ts-expect-error; We're adding static properties to the function
ShadowElement.shadowRootSupported = shadowRootSupported;
ShadowElement.displayName = "ReactShadowRoot";
