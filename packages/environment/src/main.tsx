import { LoadApp } from '@prometheus/runtime';
import * as React from 'react';
import * as rd from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import { Spinner } from './Spinner';

const App = () => {
    return (
        <>
            <LoadApp
                // Name of the application we want to load.
                // This is the name for a `local` build.
                spinner={Spinner}
                appName="nanoapp"
                internal={{react: React, "react-dom": rd}}
            />
        </>
    );
}

ReactDOM.createRoot(document.getElementById("shell")!).render(<App />);