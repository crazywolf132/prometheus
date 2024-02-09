import { LoadApp } from '@prometheus/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import * as vue from 'vue';

const App = () => {
    return (
        <LoadApp
            // Name of the application we want to load.
            // This is the name for a `local` build.
            appName="nanoapp"
            internal={{ vue: vue }}
        />
    );
}

ReactDOM.createRoot(document.getElementById("shell")!).render(<App />);