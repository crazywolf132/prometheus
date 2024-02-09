/**
 * This is used to render the different applications into the dom.
 * We will use the native entry point from each library like vue and react.
 */

import { NanoAppFunction } from "@types";
import { createRoot } from "react-dom/client";
import { createApp } from 'vue'; // vue

/**
 * This function is used to render the nanoapp into the dom.
 * 
 * @param func The nanoapp function.
 * @param location The location to render the nanoapp.
 * @param shadowRoot The shadow root to render the nanoapp.
 */
export const returnAppAsElement = (func: NanoAppFunction, location: string, parentLocation: string, shadowRoot: ShadowRoot | null) => {
    const mountApp = () => {
        const mountPoint = shadowRoot ? shadowRoot.getElementById(location) : document.getElementById(location);
        const parentMountPoint = shadowRoot ? shadowRoot.getElementById(parentLocation) : document.getElementById(parentLocation);
        if (!mountPoint || !parentMountPoint) {
            // If the mount point is not available, wait and try again
            setTimeout(mountApp, 50); // Adjust the delay as needed
            return;
        }
        switch (func.platform) {
            case "vue":
                const vueApp = createApp(func.mount(location, parentMountPoint));
                vueApp.mount(mountPoint);
                break;
            case "svelte":
                // Mount Svelte app (assuming func.mount handles the mounting)
                func.mount(mountPoint, parentMountPoint);
                break;
            case "react":
            default:
                createRoot(mountPoint).render(func.mount(mountPoint, parentMountPoint));
                break;
        }
    };

    mountApp();
}