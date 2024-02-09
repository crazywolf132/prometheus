import { defineComponent } from "vue";
import App from "./App.vue";
import "./style.css";

export function mount() {
  return defineComponent(App)
}
