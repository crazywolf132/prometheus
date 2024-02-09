import { StyleSheetManager } from "styled-components";
import App from "./App.tsx";

export function mount(_: HTMLElement, parent: HTMLElement) {

  // This is for the styled-components library to work
  const tag = document.createElement("div")
  parent.appendChild(tag)

  return (<StyleSheetManager target={tag}>
    <App />
  </StyleSheetManager>)
}