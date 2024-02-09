import "./app.css";
import App from "./App.svelte";

export function mount(location: Element) {
  new App({
    target: location,
  })
}
