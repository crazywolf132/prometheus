export const react_main = `/**
 * This file and its exports are required for Prometheus to run this application.
 * Please do not modify this file unless told to do so by core engineers, or the guides.
 */

import App from "./App.tsx";

export function mount() {
    return <App />;
}
`

export const vue_main = `/**
 * This file and its exports are required for Prometheus to run this application.
 * Please do not modify this file unless told to do so by core engineers, or the guides.
 */

import { defineComponent } from "vue";
import App from "./App.vue";

export function mount() {
  return defineComponent(App)
}
`

export const svelte_main = `/**
 * This file and its exports are required for Prometheus to run this application.
 * Please do not modify this file unless told to do so by core engineers, or the guides.
 */

import App from "./App.svelte";

export function mount(location: Element) {
  new App({
    target: location,
  })
}
`

/**** NOW FOR THE APP.TSX FILES */
export const react_app = `/**
 * This is where your journey starts.
 * This is the main file of your application.
 */


import React from "react";

function App() {
    return (
        <>
            <div>
                <h2>I am an app</h2>
                <p>Edit the "App.tsx" file.</p>
            </div>
        </>
    );
}

// Ensure you always export this file as default
export default App;
`;

export const vue_app = `/**
 * This is where your journey starts.
 * This is the main file of your application.
 */

<template>
  <main>
    <h1 class="header">I am an app</h1>
    <h2 class="subheader">Edit the "App.vue" file.</h2>
  </main>
</template>

<style>

  .header {
    font-weight: 700;
    font-size: 16px;
    line-height: -0.05em;
    text-align: center;
    word-break: break-word;
    letter-spacing: -0.025em;
    margin-bottom: 8px;
    color: rgb(17, 24, 39);
  }

  .subheader {
    font-family: "Roboto Slab", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgb(75, 85, 99);
    text-align: center;
  }
</style>
`;

export const svelte_app = `/**
 * This is where your journey starts.
 * This is the main file of your application.
 */

<main>
    <h1 class="header">I am an app</h1>
    <h2 class="subheader">Edit the "App.vue" file.</h2>
</main>

<style>
  .header {
    font-weight: 700;
    font-size: 16px;
    line-height: -0.05em;
    text-align: center;
    word-break: break-word;
    letter-spacing: -0.025em;
    margin-bottom: 8px;
    color: rgb(17, 24, 39);
  }

  .subheader {
    font-family: "Roboto Slab", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: rgb(75, 85, 99);
    text-align: center;
  }
</style>
`;

export const script_build = (pkg: string): string => `prometheus build -n ${pkg}`;
export const script_dev = (pkg: string): string => `prometheus dev -n ${pkg}`;
export const script_local = (pkg: string): string => `prometheus build -n ${pkg} -l`;

export const tsconfig = `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
`